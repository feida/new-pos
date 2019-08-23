/**
 * @author wxh on 2019/3/18
 * @copyright
 * @desc
 */

const async = require("async");
const _ = require("lodash");
const moment = require("moment");
const mqttClient = require("../../service/mqtt/index");


const shopDetailModel = require("../../model/web/shopDetail");

const orderModel = require("../../model/web/order");
const orderItemModel = require("../../model/web/orderItem");
const orderPaymentItemModel = require("../../model/web/orderPaymentItem");
const articleModel = require("../../model/web/article");
const articlePriceModel = require("../../model/web/articlePrice");
const customModel = require("../../model/web/customer");
const tableQrcodeModel = require("../../model/web/tableQrcode");

const mqttPublishModel = require("../../model/web/mqttPublish");

const platformOrderController = require("../../controller/web/platformOrder")

//创建微信订单
exports.creatorWechatOrder = function (topicObj, retain, param, callback) {

    async.waterfall([
        (done) => {
            shopDetailModel.getShopDetailFindOne(done)
        },
        (shop, done) => {   //格式化订单信息
            param.accountingTime = moment(new Date(param.accountingTime)).format('YYYY-MM-DD');
            param.createTime = moment(new Date(param.createTime)).format('x') || moment().format('x');
            param.pushOrderTime = moment(new Date(param.pushOrderTime)).format('x') || moment().format('x');
            param.printOrderTime = moment(new Date(param.printOrderTime)).format('x') || moment().format('x');
            param.mealFeePrice = param.mealFeePrice || 0;
            param.productionStatus = 2;
            param.dataOrigin = 1;          //  设置数据源为服务器
            param.syncState = 1;            //  默认为 已同步
            param.lastSyncTime = new Date().getTime();
            param.orderMode = shop.shopMode;
            done(null, shop)
        },
        (shop, done) => {   //订单插入
            if (!param.parentOrderId) {  // 新订单
                param.orderNumber = 0;
                orderModel.selectPushOrderCount((error, orderNumber) => {
                    if (error) return done(error);
                    param.orderNumber = ++orderNumber;
                    orderModel.upsert(param, (err) => done(err))
                });
            } else {    //  加菜订单，需要修改父订单的 amount_with_children 和 count_with_child 字段
                orderModel.save(param, (error) => {
                    if (error) return done(error);
                    orderModel.selectById(param.parentOrderId, (error, parentOrder) => {
                        if (error) return done(error);
                        if (!parentOrder) return done(null);
                        async.parallel({
                            moneySum: (cb) => {
                                orderModel.getMoneySumByOrderId(param.parentOrderId, cb)
                            },
                            articleSum: (cb) => {
                                orderModel.getArticleSumByOrderId(param.parentOrderId, cb)
                            },
                        }, (error, results) => {
                            if (error) return done(error);
                            if (results.moneySum == 'NaN') return done();
                            if (results.articleSum == 'NaN') return done();

                            parentOrder.amountWithChildren = results.moneySum;
                            parentOrder.countWithChild = results.articleSum;
                            if (param.needConfirmOrderItem) {
                                parentOrder.needConfirmOrderItem = param.needConfirmOrderItem;
                            }
                            orderModel.updateByOrderId(parentOrder, (err) => done(err))
                        });
                    })
                })
            }
        },
        (done) => {   //插入 tb_order_item
            async.eachLimit(param.orderItems, 1, (item, eachCB) => {
                item.createTime = moment(item.createTime).format('x')
                item.mealFeeNumber = item.mealFeeNumber * item.count;
                async.parallel({
                    upsert: (cb) => {
                        orderItemModel.upsert(item, cb)
                    },
                    stock: (cb) => {
                        let currentWorkingStock = 0;
                        let type_arr = [1, 2, 3, 4, 5, 8];     //单品、...
                        if (!type_arr.includes(item.type)) return cb();
                        if (!type_arr.includes(item.type, 1)) {
                            articleModel.findOneInfoById(item.articleId, (error, article) => {
                                if (error || !article) return cb(null);
                                currentWorkingStock = article.currentWorkingStock - item.count;
                                let articleInfo = {
                                    currentWorkingStock: currentWorkingStock > 0 ? currentWorkingStock : 0,
                                    isEmpty: currentWorkingStock > 0 ? 0 : 1 // 0 已沽清 1 已沽清
                                };
                                articleModel.updateById(item.articleId, articleInfo, cb);
                            });
                        } else {
                            articlePriceModel.findOneInfoById(item.articleId, (error, articlePrice) => {
                                if (error || !articlePrice) return cb(null);
                                currentWorkingStock = articlePrice.currentWorkingStock - item.count;
                                //先更新老规格子项
                                let articlePriceInfo = {
                                    currentWorkingStock: currentWorkingStock > 0 ? currentWorkingStock : 0,
                                };
                                articlePriceModel.updateById(item.articleId, articlePriceInfo, (error) => {
                                    if (error) return cb(null);
                                    //再更新老规格主项
                                    articleModel.findOneInfoById(articlePrice.articleId, (error, article) => {
                                        if (error || !article) return cb(null);
                                        currentWorkingStock = article.currentWorkingStock - item.count;
                                        let articleInfo = {
                                            currentWorkingStock: currentWorkingStock > 0 ? currentWorkingStock : 0,
                                            isEmpty: currentWorkingStock > 0 ? 0 : 1
                                        };
                                        articleModel.updateById(articlePrice.articleId, articleInfo, cb);
                                    });
                                });
                            });
                        }
                    },
                }, eachCB);
            }, done);
        },
        (done) => { // 更新 customer_id
            let parentOrderId = param.parentOrderId;
            let customerId = param.customerId;
            if (customerId && customerId == 0 || !parentOrderId) return done(null);
            orderModel.updateById(parentOrderId, {customerId: customerId}, (err) => done(err))
        },
        (done) => {     //  插入  tb_order_payment_item
            let orderPayments = param.orderPayment || [];
            if (orderPayments.length == 0) return done();
            async.eachLimit(orderPayments, 1, (item, eachCB) => {
                item.payTime = moment(item.payTime).format(`x`);
                orderPaymentItemModel.upsert(item, eachCB);
            }, done);
        },
        (done) => {     //  插入  tb_customer
            if (!param.customer) return done();
            customModel.upsert(param.customer, (err) => done(err))
        }
    ], callback);
};

//获取店铺信息
exports.getShopDetailFindOne = (callback) => shopDetailModel.getShopDetailFindOne(callback);


//插入微信支付项
exports.creatorWechatOrderPaymentItem = function (topicObj, retain, param, callback) {

    orderModel.selectById(topicObj.identification, (err, order) => {
        if (err) return callback(err);
        let orderPayments = param.orderPayment || [];
        if (orderPayments.length == 0) return callback();
        async.eachLimit(orderPayments, 1, (item, eachCB) => {
            item.payTime = moment(item.payTime).format(`x`);
            orderPaymentItemModel.upsert(item, eachCB)
        }, (err) => {
            if (err) return callback(err);
            if (!order) return callback(`未找到订单${topicObj.identification}不执行打印只做插入！`);

            async.parallel({
                orderModel: (done)=>{           //修改订单状态
                    let where = {
                        $or: [
                            {id: topicObj.identification},
                            {parentOrderId: topicObj.identification}
                        ]
                    };
                    let update = {
                        orderState: 2
                    };
                    orderModel.updateByConditions(update, where, done)
                },
                tableQrcodeModel: (done)=>{     //释放本地桌位
                    tableQrcodeModel.updateByConditions({tableState: 0},{tableNumber:order.dataValues.tableNumber},done)
                },
            },(error)=>callback(error, order));
        });
    })
};

//推送微信下单回调
exports.pushWechatOrderCallback = (order_id,order) => mqttPublishModel.pushWechatOrderCallback(order_id,order);

//推送微信买单回调
exports.pushWechatOrderPaymentCallback = (order_id) => mqttPublishModel.pushWechatOrderPaymentCallback(order_id);


//推送posAdmin
exports.posAdminPush = (group,action,id, content) => mqttPublishModel.posAdminPush(group,action,id, content);

//插入外卖订单
exports.createPlatformOrder = (topicObj, retain, param, callback) => platformOrderController.insertPlatform(param, (err, result) => callback(err, result))
