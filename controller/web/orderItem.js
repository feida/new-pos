/**
 * @Description:
 * @author guofeng
 * @date 2019-04-29 15:50
 */

const orderState = require("../../lib/constant/OrderState");
const dateUtil = require("../../lib/util/dateUtil");
const shopDetailModel = require("../../model/web/shopDetail");
const customSqlModel = require("../../model/web/customSql");
const orderItemMode = require('../../model/web/orderItem');
const orderMode = require('../../model/web/order');

const restoApiPublishModel = require("../../model/web/restoApiPublish")


const generalUtil = require("../../lib/util/generalUtil");
const {SuccessModel, ErrorModel} = require("../../lib/util/result");
const _ = require('lodash');
const async = require("async");
const moment = require("moment");


/**
 * @desc 根据订单ID查询当前订单的菜品项
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.getOrderItemByOrderId = (req, res, next) => {
    let orderId = req.query.order_id;
    if (!orderId) return next(new BadRequestError("order_id is null"));
    let sql = `SELECT * from tb_order_item where order_id = '${orderId}'  ORDER BY type DESC`;
    customSqlModel.getAllCustomSqlInfo(sql, function (error, orderItems) {
        if (error) return next(error);
        let orderItemList = [];
        for (let orderItem of orderItems) {
            orderItemList.push(generalUtil.convertHumpName(orderItem));
        }
        res.json(new SuccessModel(null, orderItemList))
    });
}

/**
 * @desc 根据菜品 id  修改菜品重量
 * @param req
 * @param res
 * @param next
 */
exports.updateOrderItemWeight = (req, res, next) => {
    let itemId = req.body.order_item_id;
    let weight = req.body.weight;
    let articleName = req.body.article_name;
    let updateData = [];
    let updateOrderItems = {orderItem: []};
    let updateOrders = {order: []};
    let orderId = "";
    async.waterfall([
        function (cb) {// 1 、查找订单号 和 订单项原价 和 菜品项修改状态
            let sql = `select order_id ,article_id from tb_order_item where id = '${itemId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, orderItemInfo) {
                sql = `select catty_money from tb_article where id = '${orderItemInfo.article_id}'`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, articleInfo) => {
                    if (err) return next(err.toString())
                    if (!orderItemInfo) return res.json(ErrorModel("无此订单"));

                    let weightInfo = {
                        id: itemId,
                        weight: weight,
                        needRemind: 0,
                        articleName: articleName,
                        originalPrice: (articleInfo.catty_money * weight),
                        unitPrice: (articleInfo.catty_money * weight),
                        finalPrice: (articleInfo.catty_money * weight)
                    }
                    orderItemMode.updateById(itemId, weightInfo, function (err, reply) {
                        updateOrderItems.orderItem.push(weightInfo)
                        cb(err, orderItemInfo);
                    });
                });
            })
        },
        function (orderItemInfo, cb) { //2、修改当前order总价 和状态
            orderId = orderItemInfo.order_id;
            let sql = `select final_price , need_remind from tb_order_item where order_id = '${orderId}'`;
            let orderMoneyInfo = {};
            let needConfirmOrderItem = 0;
            let totalPrice = 0;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, orderFinalPrice) {
                for (let i = 0; i < orderFinalPrice.length; i++) {
                    totalPrice += orderFinalPrice[i].final_price;
                    if (orderFinalPrice[i].need_remind) { // 有没核重的菜品
                        needConfirmOrderItem = 1;
                    }
                }
                sql = `select * from tb_order where id = '${orderId}'`
                customSqlModel.getOneCustomSqlInfo(sql, function (err, orderInfo) {
                    orderMoneyInfo.id = orderId;
                    orderMoneyInfo.needConfirmOrderItem = needConfirmOrderItem;
                    orderMoneyInfo.paymentAmount = totalPrice + (orderInfo.service_price || 0);
                    orderMoneyInfo.originalAmount = totalPrice + (orderInfo.service_price || 0);
                    orderMoneyInfo.orderMoney = totalPrice + (orderInfo.service_price || 0);
                    orderMode.updateById(orderId, orderMoneyInfo, function (err, reply) {
                        updateOrders.order.push(orderMoneyInfo);
                        cb(err, orderInfo);
                    });
                });
            })
        },
        function (orderItemInfo, cb) { // 3、查询主订单, 子订单, 兄弟订单, 父订单 修改父单amount_with_children 和 核重状态
            let sql = `select id,order_money,parent_order_id,payment_amount,original_amount,need_confirm_order_item from tb_order where 
                           (id = '${orderItemInfo.id}' and (parent_order_id is null or parent_order_id = ''))
                        or  parent_order_id  = '${orderItemInfo.id}'
                        or  parent_order_id  = '${orderItemInfo.parent_order_id || 'no parent'}'
                        or ( id = '${orderItemInfo.parent_order_id || 'no parent'}' )`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, mainAndChildrenOrder) {
                let updateMainInfo = {};
                updateMainInfo.orderMoney = 0;
                updateMainInfo.originalAmount = 0;
                updateMainInfo.paymentAmount = 0;
                updateMainInfo.needConfirmOrderItem = 0;
                updateMainInfo.amountWithChildren = 0;
                let ids = [];
                for (let i = 0; i < mainAndChildrenOrder.length; i++) {
                    ids.push(`'${mainAndChildrenOrder[i].id}'`);
                    if (!mainAndChildrenOrder[i].parent_order_id || mainAndChildrenOrder[i].parent_order_id == '') { //主订单
                        updateMainInfo.id = mainAndChildrenOrder[i].id;
                        updateMainInfo.orderMoney = mainAndChildrenOrder[i].order_money;
                        updateMainInfo.paymentAmount = mainAndChildrenOrder[i].payment_amount;
                        updateMainInfo.originalAmount = mainAndChildrenOrder[i].original_amount;
                    } else { //子订单
                        updateMainInfo.amountWithChildren += mainAndChildrenOrder[i].order_money;
                    }
                }
                // console.log('----------------ids-------------------', ids)
                let sql = `select count(*) count from tb_order_item where order_id in (${ids.toString()}) and need_remind = 1 and count > 0;` // 所有订单是否还有未核重的菜品
                customSqlModel.getOneCustomSqlInfo(sql, function (err, needRemindInfo) {
                    if (needRemindInfo.count > 0) {
                        updateMainInfo.needConfirmOrderItem = 1;
                    }
                    updateMainInfo.amountWithChildren = updateMainInfo.amountWithChildren ? updateMainInfo.amountWithChildren + updateMainInfo.orderMoney : 0;
                    updateOrders.order.push(updateMainInfo);
                    orderMode.updateById(updateMainInfo.id, updateMainInfo, (err, reply) => {
                        cb(err, orderItemInfo);
                    })
                });
            });
        }
    ], function (err) {
        if (err) return next(err);
        emitter.emit('checkWeightOrder', { orderId: orderId, socketId: req.session.socketId, type: 'checkWeightOrder'})
        return res.json(new SuccessModel(null, null));
    });
};

/**
 * @desc 赠菜
 * @param req
 * @param res
 * @param callback
 * @returns {*}
 */
exports.grant = function (req, res, next) {
    let orderId = req.body.id;
    let grantItems = req.body.orderItems;
    let orderRefundRemarks = req.body.remark
    let orderInfo = {};         //  主订单信息
    let synTime = Date.now();    //  订单最近更新时间
    let remarks = []
    let tableNumber = ''
    let originalData = [];
    if (!orderId) return next(new BadRequestError("id is null"));
    if (!grantItems) return next(new BadRequestError("orderItems is null"));
    async.waterfall([
        function (cb) {
            orderMode.findOneInfoById(orderId, (err, info) => {
                if (err) return cb(err);
                orderInfo = info;
                if (info.tableNumber) {
                    tableNumber = info.tableNumber
                }
                if (orderInfo.orderState != orderState.NO_PAY) return res.json(new ErrorModel(`not support Give`));
                return cb(null, null)
            });
        },
        function (info, cb) { // 插入备注
            let refundList = [];
            shopDetailModel.getShopDetailInfo('', (err, ben) => {
                if (err) return cb(err)
                async.eachLimit(grantItems, 1, function (item, e_cb) {
                    let remark = {
                        type: 2,
                        article_id: item.articleId,
                        order_id: orderId,
                        refund_remark_id: orderRefundRemarks.split("_")[0],
                        refund_remark: orderRefundRemarks.split("_")[1],
                        remark_supply: "",
                        refund_count: item.count,
                        shop_id: ben.id,
                        brand_id: ben.brandId,
                        create_time: dateUtil.timestamp()
                    };
                    customSqlModel.insertSelective(`tb_order_refund_remark`, remark, function (error) {
                        return e_cb(error || null);
                    });
                }, function (error) {
                    if (error) return cb(error);
                    cb(null, null)
                })
            })
        },
        function (info, cb) { // 查询单个数量可赠
            async.eachLimit(grantItems, 1, function (item, callback) {
                let id = item.id;
                switch (item.type) {
                    case 1:
                    case 2:
                    case 5:
                        orderItemMode.findOneInfoById(item.id, (err, resultData) => {
                            if (err) return callback(err);
                            if (resultData.grantCount >= resultData.orginCount) return res.json(new ErrorModel(`Gift Too Much!`));
                            let orderItem = {
                                count: resultData.count - item.count,
                                finalPrice: Number(resultData.finalPrice - resultData.unitPrice * item.count).toFixed(2),
                                grantCount: item.count,
                            };
                            orderItemMode.updateByConditions(orderItem, {id: id}, (err, resultInfo) => {
                                if (err) return callback(err);
                                orderMode.findOneInfoById(orderId, (err, resultOrderInfo) => {
                                    if (err) return callback(err);
                                    let order = {
                                        grantMoney: Number(resultOrderInfo.grantMoney + resultData.unitPrice * item.count).toFixed(2),
                                        amountWithChildren: resultOrderInfo.amountWithChildren > 0 ? resultOrderInfo.amountWithChildren - resultData.unitPrice * item.count : 0,
                                        orderMoney: Number(resultOrderInfo.orderMoney - resultData.unitPrice * item.count).toFixed(2),
                                        syncState:0,
                                        lastSyncTime:moment().format('x')
                                    };
                                    orderMode.updateByConditions(order, {id: orderId}, (err, res) => {
                                        if (err) return callback(err)
                                        return callback(null, null);
                                    })
                                })
                            })
                        });
                        break;
                    case 3:
                        let condition = {
                            $or: [
                                {id: {"$like": `%${item.id}%`}},
                                {parent_id: {"$like": `%${item.id}%`}},
                            ]
                        };
                        orderItemMode.findAllInfoByConditions(condition, (err, result) => {
                            if (err) return callback(err);
                            result.map((value) => {
                                if (value.grantCount == value.orginCount) return res.json(new ErrorModel(`赠菜数量不能大于下单数量`));
                                let orderItem = {
                                    count: value.count - item.count,
                                    finalPrice: Number(value.finalPrice - value.unitPrice * item.count).toFixed(2),
                                    grantCount: item.count,
                                }
                                orderItemMode.updateByConditions(orderItem, {id: id}, (err, resultInfo) => {
                                    if (err) return callback(err)
                                    orderMode.findOneInfoById(orderId, (err, resultOrderInfo) => {
                                        if (err) return callback(err)
                                        let order = {
                                            grantMoney: Number(resultOrderInfo.grantMoney + value.unitPrice * item.count).toFixed(2),
                                            amountWithChildren: resultInfo.amountWithChildren > 0 ? value.amountWithChildren - value.unitPrice * item.count : 0,
                                            orderMoney: Number(resultInfo.orderMoney - value.unitPrice * item.count).toFixed(2),
                                            syncState:0,
                                            lastSyncTime:moment().format('x')
                                        }
                                        orderMode.updateByConditions(order, {id: orderId}, (err, res) => {
                                            if (err) return callback(err)
                                            return callback(null, null);
                                        })
                                    })
                                })
                            });
                            return callback(null, null)
                        });
                        break;
                    default:
                        return res.json(new ErrorModel("暂不支持增菜！"));
                        break;
                }
            },  (error, info) =>{
                if (error) cb(error);
                return cb(null, null);
            })
        },

    ], function (error, info) {
        if (error) return next(error);


        res.json(new SuccessModel(null, originalData));
        emitter.emit('grantOrder', { orderId: orderId, socketId: req.session.socketId, type: 'grantOrder'})
        // //得到所有订单id
        let order_arr = _.map(_.unionBy(grantItems, 'orderId'), (o) => o.orderId);
        order_arr.push(orderId);
        order_arr = _.uniq(order_arr);
        let order_item_arr = _.map(grantItems, (o) => o.id);
        let order_grant_article = [];
        _.filter(grantItems, (o) =>{
            let obj = {};
            if(o.articleId != ''){
                obj.type= 2;
                obj.article_id= o.articleId;
                obj.order_id = orderId;
                obj.refund_remark_id= Number(orderRefundRemarks.split('_')[0]);
                obj.refund_remark= orderRefundRemarks.split('_')[1];
                obj.refund_count= o.count;
                order_grant_article.push(obj)
            }
        });

        restoApiPublishModel.orderGrantArticlePublish(orderId, order_arr, order_item_arr,order_grant_article);

    })
}

/**
 * 菜品销量
 * @param req
 * @param res
 * @param next
 */
exports.articleSales = (req, res, next) => {
    let reportDate = req.query.date;
    if (!reportDate) return res.json(new BadRequestError('缺少时间参数'));

    var start = +moment(moment(reportDate).format('YYYY-MM-DD 00:00:00')).format('x');
    var end = start + (60 * 60 * 24 * 1000) - 1000;

    async.parallel({
        articleTotalSales: (done) => {
            orderItemMode.articleTotalSales(start, end,(err, result) => {
                if(err) return done(err)
                return done(null, result)
            })
        },
        articleTypeNameAndSales: (done) => {
            orderItemMode.articleTypeNameAndSales(start, end, (err, result) => {
                if(err) return done(err);
                return done(null, result)
            })
        }
    }, (error, results) => {
        if (error) return next(error)
        res.json(new SuccessModel(null, results))
    });

}