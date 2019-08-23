const tableQrcodeMode = require("../../model/web/tableQrcode");
const async = require("async");
const _ = require("lodash");
const resultUtil = require("../../lib/util/resultUtil");
const customSqlModel = require("../../model/web/customSql");
const orderModel = require("../../model/web/order");
const shopDetailModel = require("../../model/web/shopDetail");
const articlePriceModel = require("../../model/web/articlePrice");
const articleModel = require("../../model/web/article");
const orderItemModel = require("../../model/web/orderItem");
const orderPaymentItemModel = require("../../model/web/orderPaymentItem")

const dateUtil = require("../../lib/util/dateUtil");
const generalUtil = require("../../lib/util/generalUtil");

const restoApiPublishModel = require("../../model/web/restoApiPublish")


const shopMode = require("../../lib/constant/ShopMode");
const productionStatus = require("../../lib/constant/ProductionStatus");
const orderState = require("../../lib/constant/OrderState");
const payModel = require("../../lib/constant/PayMode");
const orderItemType = require("../../lib/constant/OrderItemType")
const {SuccessModel, ErrorModel} = require('../../lib/util/result')
const lodash = require('lodash')
const moment = require('moment')

const config = require("../../service/config/index");
const httpClient = require("../../lib/util/httpClient");
const printUtil = require("../../lib/util/printUtil");
const tvWebSocket = require("../../lib/util/tvWebSocket");

/**
 * @desc 绑定桌位
 * @param req
 * @param res
 * @param next
 * @return {*}
 */
exports.bindTable = (req, res, next) => {
    let tableNumber = req.body.tableNumber.toString().replace(/\b(0+)/gi, "") || "";
    let customerCount = req.body.customerCount || 0;

    let distributionModeId = req.body.distributionModeId || "";
    let remark = req.body.remark;
    let childrenOrder = req.body.childrenOrder;

    let masterOrderId = req.body.masterOrderId || "";
    let order = {}
    let shopDetail = {};
    let bindInfo = {};
    if (!tableNumber) return next(new BadRequestError('桌位不存在'));
    if (!distributionModeId) return next(new BadRequestError('请选择用餐模式'));
    if (childrenOrder == 1) {
        if (!masterOrderId) return next(new BadRequestError('masterOrderId is null'));
    }

    async.waterfall([
        function (cb) { // 验证桌位号是否存在
            let sql = `select * from tb_table_qrcode where table_number = '${tableNumber}'`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, tableInfo) => error ? cb(error) : cb(null, tableInfo))
        },
        function (tableInfo, cb) {
          shopDetailModel.getShopDetailFindOne((err, result) => {
              shopDetail = result
              return cb(null, tableNumber)
          })
        },
        function (tableInfo, cb) { // 先付订单验证，如果是先付模式，没有结账，禁止加菜  新增外带也要判断--2019-08-02
            if (!masterOrderId) return cb(null, null)
            if (shopDetail.allowFirstPay == 1) return cb(null, null); // 如果是后付款模式直接跳过验证
            let sql = `select * from tb_order where id = '${masterOrderId}' or parent_order_id = '${masterOrderId}'`
            customSqlModel.getAllCustomSqlInfo(sql, (err, orderInfo) => {
                async.eachLimit(orderInfo, 1, (item, e_cb) => {
                    if (item.order_state < 2) return res.json(new SuccessModel('当前订单有菜品需要买单', null))
                    e_cb(null, null)
                }, (err, reslt ) => {
                    if (err) return cb(err, null)
                    cb(null, null)
                })
            })
        },
        function (tableInfo, cb) { //查询店铺模式
            shopDetailModel.getShopDetailInfo('', function (err, ben) {
                if (err) return cb(err.toString());
                shopDetail = ben;
                bindInfo.allowFirstPay = ben.allowFirstPay;
                bindInfo.serviceType = ben.serviceType || 0; //服务费类型，0 经典版 1 升级版

                bindInfo.isOpenTablewareFee = ben.isOpenTablewareFee;
                bindInfo.tablewareFeeName = ben.tablewareFeeName;   //餐具费名称

                bindInfo.tablewareFeePrice = (ben.serviceType == 1 && ben.isUseServicePrice && distributionModeId == 1 && ben.isOpenTablewareFee) ? ben.tablewareFeePrice * customerCount : 0;  //餐具费价格

                bindInfo.isOpenTowelFee = ben.isOpenTowelFee;
                bindInfo.towelFeeName = ben.towelFeeName; // 纸巾费名称
                bindInfo.towelFeePrice = ben.serviceType == 1 && ben.isUseServicePrice && distributionModeId == 1 && ben.isOpenTowelFee ? ben.towelFeePrice * customerCount : 0; // 纸巾费费价格

                bindInfo.isOpenSauceFee = ben.isOpenSauceFee;
                bindInfo.sauceFeeName = ben.sauceFeeName;  //酱料费名称
                bindInfo.sauceFeePrice = ben.serviceType == 1 && ben.isUseServicePrice && distributionModeId == 1 && ben.isOpenSauceFee ? ben.sauceFeePrice * customerCount : 0; //酱料费价格

                bindInfo.totalService = Number(bindInfo.tablewareFeePrice + bindInfo.sauceFeePrice + bindInfo.towelFeePrice).toFixed(2);
                bindInfo.servicePrice = ben.isUseServicePrice && ben.serviceType == 0 && distributionModeId == 1 ? ben.servicePrice : 0
                cb(null, bindInfo);
            });
        },

        function (bindInfo, cb) { //基础验证
            let sql = `SELECT count(id) orderNumber from tb_order where accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) and (parent_order_id =''  or parent_order_id is null)`;
            customSqlModel.getOneCustomSqlInfo(`${sql}`, function (error, data) {
                if (error) return cb(error);

                if (!childrenOrder) {
                    bindInfo.orderNumber = ++(data.orderNumber);
                    cb(null, bindInfo);
                } else {
                    orderModel.findOneInfoById(masterOrderId, (err, masterOrderInfo) => {
                        if (err) return cb(err);
                        bindInfo.orderNumber = masterOrderInfo.orderNumber;
                        cb(null, bindInfo);
                    })
                }
            });
        },
        function (bindInfo, cb) {  //  暂不判断桌位状态
            if (shopDetail.allowFirstPay == 0 || childrenOrder == 1) {//判断桌子是否被占用
                cb(null, bindInfo);
            } else {
                let sql = `SELECT table_state from tb_table_qrcode where table_number = ${tableNumber}`;
                customSqlModel.getOneCustomSqlInfo(`${sql}`, function (err, data) {
                    if (err) return cb(err.toString());
                    if (data.table_state != 0) return res.json(new ErrorModel("当前桌位被占用！"))
                    if (distributionModeId == 3 || shopDetail.allowFirstPay == 0) return cb(null, bindInfo); // 当是 子订单 或者 外带 或者 先付 的时候，无需锁定座位
                    let sql = `update tb_table_qrcode set table_state = 1 where table_number = ${tableNumber}`
                    customSqlModel.getOneCustomSqlInfo(sql, err => err ? cb(err) : cb(null, bindInfo))
                });
            }
        },
        function (bindInfo, cb) { //初始化数据

            let orderInfo = {
                tableNumber: tableNumber || '',
                customerCount: customerCount || 0,
                distributionModeId: distributionModeId || 1,
                accountingTime: dateUtil.sdfDay(),
                serialNumber: dateUtil.getSerialNumber(),
                remark: remark || '',
                createTime: dateUtil.timestamp(),
                shopDetailId: shopDetail.id,
                orderMode: shopDetail.shopMode,
                allowCancel: 0,    // 默认 1 ，允许取消
                sauceFeeCount: bindInfo.isOpenSauceFee ? (customerCount || 0) : 0,//酱料数量
                sauceFeePrice: bindInfo.sauceFeePrice,//酱料价格
                towelFeeCount: bindInfo.isOpenTowelFee ? (customerCount || 0) : 0,//纸巾数量
                towelFeePrice: bindInfo.towelFeePrice,//纸巾价格
                tablewareFeeCount: bindInfo.isOpenTablewareFee ? (customerCount || 0) : 0,//餐具数量
                tablewareFeePrice: bindInfo.tablewareFeePrice || 0,//餐具价格
                isUseNewService: bindInfo.serviceType || 0,
                servicePrice: childrenOrder ? 0 : bindInfo.servicePrice * customerCount || bindInfo.totalService || 0, //服务费
                verCode: generalUtil.getRandomNumber(), // 只有主订单会自动生成 ver_code
                orderNumber:  childrenOrder ? "" : bindInfo.orderNumber || '', //  当天的订单数
                grantMoney: 0,
                orderMoney: childrenOrder ? 0 : bindInfo.servicePrice * customerCount || bindInfo.totalService || 0,
            };
            order = orderInfo
            orderModel.create(orderInfo, err => cb(err, orderInfo.id));
        },
        function (orderId, cb) {
            let syncOrderInfo = {orderId: orderId, syncState: 0, lastSyncTime: (new Date()).getTime()}
            orderModel.updateById(orderId, syncOrderInfo, (err, reply) => err ? cb(err) : cb(null, orderId))
        }
    ], function (err, orderId) {
        if (err) return next(err)
        if (!childrenOrder) emitter.emit('bindTable', {orderId: orderId, type: 'bindTable', socketId: req.session.socketId})
        return res.json(new SuccessModel(null, orderId))
    });
}


/**
 * 下单
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.pushOrder = (req, res, next) => {
    let masterOrderId = req.body.masterOrderId || null;
    let childrenOrderId = req.body.childrenOrderId || null;
    let orderItems = req.body.orderItems;
    let distributionModeId = req.body.distributionModeId || 1;
    let mealFeePrice = req.body.mealFeePrice;
    let mealAllNumber = req.body.mealAllNumber;
    let customerId = req.body.customerId || 0;
    let shopDetail = null;
    let orderInfo = {};
    let lastSyncTime = (new Date()).getTime();
    let notifyData = {}
    async.waterfall([
        function (cb) {
            shopDetailModel.getShopDetailFindOne( (error, shopInfo) =>{
                if (error) return cb(error);
                shopDetail = shopInfo;
                return cb(null,shopInfo)
            })
        },
        function (shopInfo, cb) {
            if (!masterOrderId) return cb(null);
            let sql = `SELECT order_state, distribution_mode_id, table_number, ver_code, customer_count FROM tb_order WHERE id = '${masterOrderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, reply) => {
                if (error) return cb(error);
                distributionModeId = reply.distribution_mode_id || 1;
                notifyData.distribution_mode_id = reply.distribution_mode_id || 1;
                notifyData.table_number = reply.table_number || reply.ver_code;
                notifyData.customer_count = reply.customer_count;

                if (reply.order_state <= 2 || shopDetail.allowFirstPay == 0) return cb(null);
                return res.json(new ErrorModel("主订单状态已经变更，请重新开台下单", null))
                return cb(null, reply)
            })
            // async.parallel({
            //     // getShopDetailFindOne: (done)=>{
            //     //     shopDetailModel.getShopDetailFindOne( (error, shopInfo) =>{
            //     //         if (error) return done(error);
            //     //         shopDetail = shopInfo;
            //     //         return done(null,shopInfo)
            //     //     })
            //     // },
            //     getMasterOrderInfo: (done)=>{
            //         let sql = `SELECT order_state, distribution_mode_id FROM tb_order WHERE id = '${masterOrderId}'`;
            //         customSqlModel.getOneCustomSqlInfo(sql, (error, reply) => {
            //             if (error) return done(error);
            //             distributionModeId = reply.distribution_mode_id || 1;
            //             return done(null, reply)
            //         })
            //     },
            // },(error, results)=>{
            //     if(error) return cb(error);
            //     if (results.getMasterOrderInfo.order_state <= 2 || results.getShopDetailFindOne.allowFirstPay == 0) return cb(null);
            //     return res.json(new ErrorModel("主订单状态已经变更，请重新开台下单", null))
            // });
        },
        function (cb) { // 库存校验
            async.eachLimit(req.body.orderItems, 1, function (item, ab) {
                if (item.type == 2) { // 老规格
                    let conditions = {
                        id: item.article_prices_id,
                        currentWorkingStock: {
                            '$gte': item.count
                        }
                    };
                    articlePriceModel.findAllInfoByConditions(conditions, (err, reply) => {
                        if (err) return ab(err);
                        if (!reply) return res.json(new ErrorModel(`未找到${item.name}菜品或者库存数量低于${item.count}`));
                        return ab();
                    })
                } else if (item.type == 3) { // 套餐
                    async.eachLimit(item.mealItems, 1, (mealItem, e_cb) => {
                        let conditions = {
                            id: mealItem.articleId,
                            currentWorkingStock: {
                                '$gte': mealItem.count
                            }
                        };
                        articleModel.findAllInfoByConditions(conditions, (err, reply) => {
                            if (err) return e_cb(err);
                            if (!reply) return res.json(new ErrorModel(`未找到${item.name}菜品或者库存数量低于${item.count}`));
                            return e_cb();
                        })
                    }, (err) => {
                        if (err) return ab(err);
                        return ab()
                    });
                } else {
                    let conditions = {
                        id: item.id,
                        currentWorkingStock: {
                            '$gte': item.count
                        }
                    };
                    articleModel.findAllInfoByConditions(conditions, (err, reply) => {
                        if (err) return ab(err);
                        if (reply.length < 1) return res.json(new ErrorModel(`未找到${item.name}菜品或者库存数量低于${item.count}`));
                        return ab();
                    })
                }
            }, function (error) {
                if (error) return cb(error);
                return cb(null)
            })
        },
        function (cb) {
            if (shopDetail.shopMode != 6) return cb(null);
            let sql = `SELECT order_state FROM tb_order WHERE id = '${masterOrderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, reply) => {
                if (error) cb(error);
                if (reply.order_state >= 2 && shopDetail.allowFirstPay != 0) {
                    return res.json(new SuccessModel('当前订单状态已变更，请重新选择桌位进行开台', null))
                } else {
                    return cb(null)
                }
            })
        },
        function (e_cb) { // 创建订单
            if ((shopDetail.shopMode == shopMode.CALL_NUMBER || shopDetail.shopMode == shopMode.FOOTMUMBER_ORDER) && !masterOrderId) {
                let sql = "SELECT count(id) orderNumber from tb_order where accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) and (parent_order_id =''  or parent_order_id is null)";
                customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
                    if (error) return callback(error);
                    //  创建订单
                    let orderInfo = {
                        id: generalUtil.randomUUID(),
                        distributionModeId: distributionModeId,
                        orderState: 1, // 默认 1  待下单状态
                        productionStatus: 1, // 0 待下单， 1 已下单，2 已打印
                        accountingTime: dateUtil.sdfDay(),
                        serialNumber: dateUtil.getSerialNumber(),
                        allowCancel: 0,    // 默认 1 ，允许取消
                        closed: 0,
                        createTime: dateUtil.timestamp(),
                        syncState: 0,
                        dataOrigin: 0,
                        shopDetailId: shopDetail.id,
                        isPosPay: 0,  // 默认为 0 ，当在 pos端买单时，设置为 1
                        payType: 0,   //  电视叫号，立即支付
                        allowContinueOrder: 1,    //  电视叫号不允许加菜
                        allowAppraise: 0, // 默认不允许评论
                        orderMode: shopDetail.shopMode,
                        amountWithChildren: 0,// 默认为0 ，订单消费总和，包括子订单的金额
                        verCode: generalUtil.getRandomNumber(),
                        orderNumber: ++data.orderNumber //  当天的订单数
                    };
                    orderModel.upsert(orderInfo, function (err, reply) {
                        if (err) return e_cb(err);
                        masterOrderId = orderInfo.id;
                        return e_cb(null, orderInfo);
                    });
                });
            } else if (!masterOrderId) {
                return e_cb("订单ID不能为空~");
            } else {
                return e_cb(null, masterOrderId)
            }
        },
        function (cbData, cbf) { // 信息查询, 生成订单项信息
            let getArticle = (item, cb) => {
                let sql = `select * from tb_article a where a.id = '${item.id}' and a.activated = 1`;
                customSqlModel.getAllCustomSqlInfo(sql, (err, data) => {
                    if (err) return cb(err.toString());
                    if (!data || !data.length) return res.json(new ErrorModel('未找到菜品'));
                    let article = data[0];
                    let orderItem = getOrderItemInfo(item, data[0]);
                    return cb(null, orderItem, article)
                })
            };
            let getArticlePrice = (item, cb) => {
                let sql = `select * from tb_article_price p where p.id='${item.article_prices_id}'`;
                customSqlModel.getAllCustomSqlInfo(sql, (err, data) => {
                    if (err) return cb(err.toString());
                    if (!data || !data.length) return res.json(new ErrorModel('未找到老规格菜品'));
                    return cb(null, data[0])
                })
            };
            let getUnitDetailInfo = (detailId, cb) => {
                let sql = `SELECT t1.* ,t2.name FROM tb_article_unit_detail t1 LEFT JOIN tb_unit_detail t2 on t2.id = t1.unit_detail_id where t1.id = ?`
                orderItemModel.getArticleNewUtilDetails(sql, detailId, function (err, data) {
                    if (err) return cb(err);
                    if (!data || !data.length) {
                        return res.json(new ErrorModel('未找到菜品新规格属性子项'))
                    } else {
                        return cb(null, data[0])
                    }
                })
            }
            let getMealItemInfo = (mealItemids, cb) => {
                let sql = `select * from tb_meal_item`;
                customSqlModel.getAllCustomSqlInfo(sql, (err, data) => {
                    if (err) return cb(err.tostring());
                    if (!data || !data.length) return res.json(new ErrorModel('未找到套餐属性子项'));
                    let mealItem = null;
                    let mealItemMap = {}
                    for (let i in data) {
                        mealItem = data[i];
                        mealItemMap[mealItem.id] = mealItem;
                    }
                    cb(null, mealItemMap)
                });
            }
            let getWeightPackageInfo = (item, cb) => {
                let sql = `select * from tb_weight_package_detail w where w.id=${item.weight_package_detail_id}`;
                customSqlModel.getAllCustomSqlInfo(sql, (err, data) => {
                    if (err) return cb(err.tostring());
                    if (!data || !data.length) return res.json(new ErrorModel('未找到重量包项'));
                    return cb(null, data[0])
                });
            }
            // 返回重组数据
            orderInfo.id = childrenOrderId == null ? masterOrderId : childrenOrderId;
            orderInfo.orderItems = req.body.orderItems;
            let orderItems = []
            let original_amount = 0
            let order_money = 0
            let article_count = 0

            async.each(orderInfo.orderItems, (item, cbe) => {
                let orderItem = null
                if (item.type == 1) {
                    async.auto({
                        getArticle: (cb) => {
                            getArticle(item, (err, article) => {
                                if (err) return cb(err)
                                cb(null, article)
                            })
                        }
                    }, (err, data) => {
                        if (err) return cbe(err)
                        orderItem = data.getArticle
                        orderItems.push(orderItem)
                        original_amount += +(orderItem.original_price * orderItem.count);
                        order_money += orderItem.final_price;
                        article_count += orderItem.count;
                        cbe()
                    })
                } else if (item.type == 2) {
                    async.auto({
                        getArticle: (cb) => {
                            getArticle(item, (err, article) => {
                                if (err) return cb(err)
                                orderItem = article
                                cb(null, article)
                            })
                        },
                        getArticlePrice: ['getArticle', (article, cb) => {
                            article = article.getArticle
                            getArticlePrice(item, (error, item) => {
                                //老规格有自己独立的粉丝价和单价
                                var articlePrice = item
                                orderItem.article_id += "@" + articlePrice.unit_ids
                                orderItem.article_name += articlePrice.name
                                var middlePrice = articlePrice.price

                                if (item.discount / 100 < 1) {
                                    middlePrice = middlePrice * item.discount / 100
                                } else {
                                    //是否启用粉丝价
                                    if (!item.isFans && articlePrice.fans_price) {
                                        middlePrice = articlePrice.fans_price
                                    }
                                }

                                // 计算价格
                                orderItem.unit_price = middlePrice;
                                orderItem.final_price = orderItem.count * middlePrice;
                                orderItem.original_price = middlePrice;
                                cb(null)
                            })
                        }]
                    }, (err, data) => {
                        if (err) return cbe(err);
                        //赋值基础信息
                        orderItems.push(orderItem);
                        original_amount += +(orderItem.original_price * orderItem.count);
                        order_money += orderItem.final_price;
                        article_count += orderItem.count;
                        cbe()
                    })
                } else if (item.type == 3) {
                    async.auto({
                        getArticle: (cb) => {
                            getArticle(item, (err, article) => {
                                if (err) return cb(err)
                                orderItem = article
                                cb(null, article)
                            })
                        },
                        getMealItemInfo: ['getArticle', (article, cb) => {
                            article = article.getArticle
                            getMealItemInfo(null, (err, meals) => {
                                if (err) return cb(err);
                                orderItem.id = generalUtil.randomUUID();
                                //套餐子项
                                for (var mealItem_i in item.mealItems) {
                                    var mealItem = item.mealItems[mealItem_i];
                                    mealItem.type = 4;
                                    mealItem.discount = 100; // 这里仍然给100折扣，跟微信保持一致套餐差价不参与折扣，
                                    var mealItemInfo = meals[mealItem.id];
                                    var mealOrderItem = getOrderItemInfo(mealItem, mealItemInfo);
                                    mealOrderItem.article_id = mealItemInfo.article_id;
                                    mealOrderItem.parent_id = orderItem.id;
                                    mealOrderItem.meal_item_id = mealItem.id;
                                    //赋值基础信息
                                    orderItems.push(mealOrderItem);
                                    original_amount += mealOrderItem.final_price;
                                    order_money += mealOrderItem.final_price;
                                }
                                cb(null, orderItem);
                            })
                        }]
                    }, (err, data) => {
                        if (err) return cbe(err);
                        //赋值基础信息
                        orderItems.push(orderItem);
                        original_amount += +(orderItem.original_price * orderItem.count);
                        order_money += orderItem.final_price;
                        article_count += orderItem.count;
                        cbe();
                    })
                } else if (item.type == 5) {
                    async.auto({
                        getArticle: (cb) => {
                            getArticle(item, (err, article) => {
                                if (err) return cb(err);
                                orderItem = article;
                                cb(null, article);
                            })
                        },
                        articleUnitDetailInfo: ['getArticle', (article, cb) => {
                            async.each(item.unit_details, (unit, cbe) => {
                                getUnitDetailInfo(unit, (err, articleUnit) => {
                                    if (err) return cbe(err);
                                    orderItem.article_name += ("(" + articleUnit.name + ")");
                                    // 计算价格
                                    orderItem.unit_price += articleUnit.price * item.discount / 100;
                                    orderItem.final_price += orderItem.count * articleUnit.price * item.discount / 100;
                                    orderItem.original_price += +(orderItem.count * articleUnit.price);
                                    cbe(null)
                                })
                            }, (err) => {
                                if (err) return cb(err);
                                cb(null)
                            })
                        }]
                    }, (err, data) => {
                        if (err) return cbe(err)
                        //赋值基础信息
                        orderItems.push(orderItem);
                        original_amount += orderItem.original_price * orderItem.count;
                        order_money += orderItem.final_price;
                        article_count += orderItem.count;
                        cbe()
                    })
                } else if (item.type == 8) { // 重量包
                    async.auto({
                        getArticle: (cb) => {
                            getArticle(item, (err, oitem, article) => {
                                if (err) return cb(err);
                                orderItem = oitem;
                                cb(null, article);
                            })
                        },
                        getWeightPackageInfo: ['getArticle', (article, cb) => {
                            article = article.getArticle;
                            if (!item.weight_package_detail_id) {
                                orderItem.article_name = item.name;
                                orderItem.unit_price = article.catty_money * item.weight;
                                orderItem.original_price = article.catty_money * item.weight;
                                orderItem.final_price = article.catty_money * item.weight;
                                orderItem.weight_package_detail_id = '';

                                // 添加重量包核重信息
                                orderItem.needRemind = 1;
                                orderItem.weight = item.weight;
                                orderInfo.needConfirmOrderItem = 1;
                                cb();
                            } else {
                                getWeightPackageInfo(item, (err, data) => {
                                    if (err) return cb(err);
                                    orderItem.article_name = item.name;
                                    orderItem.unit_price = data.weight;
                                    orderItem.original_price = article.catty_money * data.weight;
                                    orderItem.final_price = article.catty_money * data.weight;
                                    orderItem.weight_package_detail_id = item.weight_package_detail_id;

                                    // 添加重量包核重信息
                                    orderItem.needRemind = 1;
                                    orderItem.weight = data.weight;
                                    orderInfo.needConfirmOrderItem = 1;
                                    cb()
                                })
                            }
                        }]
                    }, (err, data) => {
                        if (err) return cbe(err);

                        //赋值基础信息
                        orderItems.push(orderItem);
                        original_amount += +(+orderItem.original_price * orderItem.weight_package_detail_id ? orderItem.count : orderItem.weight);
                        order_money += orderItem.final_price;
                        article_count += orderItem.count;
                        cbe();
                    })
                } else {
                    // 其他餐品类型
                    cbe();
                }
            }, (err) => {
                if (err) return cbf(err);

                //赋值基础信息
                orderInfo.orderItemInfo = {
                    orderItems,
                    original_amount,
                    order_money,
                    article_count
                }
                cbf(null);
            })
        },
        function (e_cb) { // 更新订单
            let sql = `SELECT  (SELECT sum(order_money)   FROM tb_order WHERE id = '${orderInfo.id}' or ( parent_order_id= '${orderInfo.id}' and order_state = 2)) receipts, * FROM tb_order WHERE  id = '${orderInfo.id}'`;

            customSqlModel.getOneCustomSqlInfo(sql, function (err, originalOrder) {
                if (err) return e_cb(err);
                var mealAllPrice = mealFeePrice;
                var servicePrice = childrenOrderId == null ? originalOrder.service_price || 0 : 0;
                let order = {
                    productionStatus: productionStatus.PUSH_ORDER,
                    originalAmount: orderInfo.orderItemInfo.original_amount + servicePrice + mealAllPrice,//  需将 服务费也加上
                    orderMoney: orderInfo.orderItemInfo.order_money + servicePrice + mealAllPrice, //将服务费或餐盒费 并入订单总金额
                    articleCount: orderInfo.orderItemInfo.article_count,
                    paymentAmount: orderInfo.orderItemInfo.order_money + servicePrice + mealAllPrice,
                    parentOrderId: childrenOrderId == null ? null : masterOrderId, //当前订单为子订单时,
                    customerCount: childrenOrderId ? 0 : originalOrder.customer_count, // 子订单的人数需要添加 2019-07-05 按照要求去掉子订单人数
                    customerId: customerId, // 如果是微信下单 子订单的customerId也需要加上
                    mealAllNumber: childrenOrderId == null ? mealAllNumber : 0, //餐盒总个数 外带没有子订单
                    mealFeePrice: childrenOrderId == null ? mealFeePrice : 0, //餐盒单价
                    printOrderTime: dateUtil.timestamp(), //  下单时间
                    syncState: 0,//  更新订单数据后，将订单的同步状态更改为 0，推送至服务器后，通过回调更改为 1
                    needConfirmOrderItem: orderInfo.needConfirmOrderItem || 0, // 是否需要确认重量
                    orderMode: shopDetail.shopMode
                };
                //是否为子订单 更新主订单
                if (childrenOrderId != null) {
                    let sql = `SELECT  (SELECT sum(order_money)  
                    FROM tb_order WHERE id = '${masterOrderId}' or 
                    ( parent_order_id= '${masterOrderId}' and order_state = 2)) receipts, 
                    * FROM tb_order WHERE  id = '${masterOrderId}'`;
                    customSqlModel.getOneCustomSqlInfo(sql, function (err, orgOrder) {
                        if (err) return e_cb(err);
                        sql = `select sum(article_count) articleCount,sum(order_money) orderMoney from tb_order 
                    where parent_order_id = '${masterOrderId}' and order_state != 9`;
                        customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                            if (err) return e_cb(err);
                            let masterOrder = {
                                amountWithChildren: orgOrder.order_money + data.orderMoney + orderInfo.orderItemInfo.order_money,
                                countWithChild: orgOrder.article_count + data.articleCount + orderInfo.orderItemInfo.article_count,
                                mealAllNumber: orgOrder.meal_all_number + mealAllNumber,
                                syncState: 0, //  更新订单数据后，将订单的同步状态更改为 0，推送至服务器后，通过回调更改为 1
                            };
                            if (orderInfo.needConfirmOrderItem) {
                                masterOrder.needConfirmOrderItem = orderInfo.needConfirmOrderItem || 0 // 主订单是否需要确认重量
                            }
                            //先更新主订单 然后更新子订单.
                            orderModel.updateById(masterOrderId, masterOrder, function (err, reply) {
                                if (err) return e_cb(err);
                                orderModel.updateById(orderInfo.id, order, function (err, reply) {
                                    if (err) return e_cb(err);
                                    return e_cb(null, orderInfo);
                                });
                            });
                        });
                    });
                } else {
                    //没有子订单 只更新当前订单)
                    orderModel.updateById(orderInfo.id, order, function (err, reply) {
                        if (err) return e_cb(err);
                        return e_cb(null, orderInfo);
                    });
                }
            });
        },
        function (orderInfo, cb) { //插入订单项
            var orderItem = orderInfo.orderItemInfo.orderItems || [];
            async.eachLimit(orderItem, 1, function (item, callbacck) {
                item.order_id = orderInfo.id;
                item.sort = 0;
                item.status = 1;
                item.remark = item.discount ? item.discount + "%" : null;
                item.create_time = dateUtil.timestamp();
                delete item.discount; //删除数据库中没有的字段
                let content = {
                    id: item.id || generalUtil.randomUUID(),
                    orderId: item.order_id,
                    articleId: item.article_id,
                    articleName: item.article_name,
                    count: item.count,
                    originalPrice: item.original_price,
                    unitPrice: item.type == 8 ? item.original_price : item.unit_price,
                    finalPrice: item.final_price,
                    type: item.type,
                    orginCount: item.orgin_count,
                    refundCount: item.refund_count,
                    mealFeeNumber: item.meal_fee_number,
                    printFailFlag: item.print_fail_flag,
                    sort: item.sort,
                    status: item.status,
                    remark: item.remark,
                    createTime: item.create_time,
                    parentId: item.parent_id,
                    mealItemId: item.meal_item_id || 0,
                    kitchenId: item.kitchen_id || '',
                    recommendId: item.recommend_id || '',
                    changeCount: item.change_count || 0,
                    weight: item.weight || 0,
                    needRemind: item.needRemind || 0,
                };
                orderItemModel.save(content, function (error, reply) {
                    if (error) return callbacck(error);
                    callbacck();
                });
            }, function (err) {
                if (err) return cb(err);
                cb(null, orderInfo);
            });
        },
        function (orderInfo, cb) { //减库存
            //获取订单的子项
            var orderItems = orderInfo.orderItemInfo.orderItems || [];
            async.eachLimit(orderItems, 1, function (item, callback) {
                let sql = '';
                switch (item.type) {
                    //单品 套餐子项  新规格
                    case 1:
                    case 4:
                    case 5:
                        sql = `select current_working_stock from tb_article where id = '${item.article_id}'`;
                        customSqlModel.getOneCustomSqlInfo(sql, function (err, article) {
                            var currentWorkingStock = article.current_working_stock - item.count;
                            var articleInfo = {
                                // id: item.article_id,
                                currentWorkingStock: currentWorkingStock,
                                isEmpty: currentWorkingStock == 0 ? 1 : 0
                            };
                            articleModel.updateById(item.article_id, articleInfo, function (err, reply) {
                                if (err) cb(err.toString());
                                callback();
                            });
                        });
                        break;
                    case 2: //老规格 老规格只检查子项
                        sql = `SELECT article_id,current_working_stock from tb_article_price where id = '${item.article_id}'`;
                        customSqlModel.getOneCustomSqlInfo(sql, function (err, articlePrice) {
                            if (err) cb(err.toString());
                            //先更新老规格子项
                            var articlePriceInfo = {
                                currentWorkingStock: articlePrice.current_working_stock - item.count
                            };
                            articlePriceModel.updateById(item.article_id, articlePriceInfo, function (err, reply) {
                                if (err) cb(err.toString());

                                //再更新老规格主项
                                sql = `select current_working_stock from tb_article where id = '${articlePrice.article_id}'`;
                                customSqlModel.getOneCustomSqlInfo(sql, function (err, article) {
                                    var currentWorkingStock = article.current_working_stock - item.count;
                                    var articleInfo = {
                                        // id: articlePrice.article_id,
                                        currentWorkingStock: currentWorkingStock,
                                        isEmpty: currentWorkingStock == 0 ? 1 : 0
                                    };
                                    articleModel.updateById(articlePrice.article_id, articleInfo, function (err, reply) {
                                        if (err) cb(err.toString());
                                        callback();
                                    });
                                });
                            });
                        });
                        break;
                    case 3: //套餐
                        callback();
                        break;
                    case 8: // ??
                        sql = `select current_working_stock from tb_article where id = '${item.article_id}'`;
                        customSqlModel.getOneCustomSqlInfo(sql, function (err, article) {
                            var currentWorkingStock = article.current_working_stock - item.count;
                            var articleInfo = {
                                currentWorkingStock: currentWorkingStock,
                                isEmpty: currentWorkingStock == 0 ? 1 : 0
                            };
                            articleModel.updateById(item.article_id, articleInfo, function (err, reply) {
                                if (err) cb(err.toString());
                                callback();
                            });
                        });
                        break;
                }
            });
            cb(null, orderInfo);
        },
        function (orderInfo, cb) { // 3.2更改本地同步状态
            var orderId = masterOrderId
            let sql = `select id FROM tb_order WHERE id = '${orderId}' or parent_order_id = '${orderId}'`;
            customSqlModel.getAllCustomSqlInfo(sql, (err, orderIdList) => {
                if (err) return cb(err)
                let syncOrderInfo = {
                    syncState: 0,
                    lastSyncTime: lastSyncTime
                }


                async.eachLimit(orderIdList, 1, function (orderId, m_cb) {
                    orderModel.updateById(orderId.id, syncOrderInfo, (err, reply) => {
                        if (err) return m_cb(err)
                        m_cb(null)
                    })
                }, (err) => {
                    cb(null, orderInfo)
                })
            })
        },
        function (orderInfo, cb) {
            let orderId = childrenOrderId ? childrenOrderId : masterOrderId;
            let autoPrint = shopDetail.autoPrintTotal;
            let totalType = shopDetail.allowFirstPay == 0 ? 1 : 2;
            if (shopDetail.shopMode == 6 && shopDetail.allowAfterPay == 0 && distributionModeId != 3) {
                printUtil.printTotal(orderId, autoPrint, totalType, 0, orderItems); // 打印总单
                printUtil.printKitchen(orderId, autoPrint, 0, 0, orderItems); // 打印厨房
                //  修改订单状态
                let sql = `select * from tb_order where id = '${orderId}'`;
                customSqlModel.getOneCustomSqlInfo(sql, function (error, orderInfo) {
                    var updateOrder = {
                        productionStatus: productionStatus.HAS_PRINT,
                        printOrderTime: dateUtil.timestamp(),
                        allowContinueOrder: 1,      //允许加菜
                        allowAppraise: 0,
                        allowCancel: 0,
                        syncState: 0   // 更改为 未同步状态
                    };
                    orderModel.updateById(orderId, updateOrder, function (error, reply) {
                    })
                })
            }
            cb(null, orderInfo)
        },
        function (orderInfo, cb) {
            notifyData.order_id = childrenOrderId ? childrenOrderId : masterOrderId ? masterOrderId : orderInfo.id;
            notifyData.parent_order_id = childrenOrderId ? masterOrderId : null;
            notifyData.order_state = 1;
            notifyData.create_time = new Date().getTime();

            if (shopDetail.shopMode == 6 && shopDetail.allowAfterPay == 0 && distributionModeId != 3) {
                notifyData.production_status = productionStatus.HAS_PRINT;
            } else {
                notifyData.production_status = 1;
            }

            childrenOrderId ?  emitter.emit('addOrder', {
                type: "addOrder",
                orderId: childrenOrderId,
                socketId: req.session.socketId,
            }) :  emitter.emit('pushOrder', {
                orderId: masterOrderId,
                type: 'pushOrder',
                socketId: req.session.socketId,
            })

            cb(null, orderInfo)
        }
    ], (err, resultData) => {
        if (err) {
            childrenOrderId && orderModel.deleteById(childrenOrderId);// 删除创建的子订单
            return next(err)
        }
        restoApiPublishModel.orderPushPublish(masterOrderId, childrenOrderId)
        return res.json(new SuccessModel('下单成功', resultData.id));
    })
}

function getOrderItemInfo(item, article) {
    if (!article || !article.id) {
        return {};
    }

    //折扣之后的价格
    var middlePrice = article.price || article.price_dif || 0;

    if (item.discount / 100 < 1) {
        middlePrice = middlePrice * item.discount / 100;
    } else { //是否启用粉丝价
        if (!item.isFans && item.fansPrice) {
            middlePrice = item.fansPrice;
        }
    }

    return {
        order_id: "",
        article_id: article.id || article.article_id,
        article_name: article.name || article.article_name,
        count: item.count,
        original_price: article.price || article.price_dif || 0,
        unit_price: middlePrice,
        final_price: item.count * middlePrice,
        type: item.type,
        orgin_count: item.count,
        refund_count: 0,
        meal_fee_number: item.mealFeeNumber,
        print_fail_flag: 0,
        discount: item.discount
    };
}


//买单
exports.orderPay = (req, res, next) => {
    let orderId = req.body.orderId || "";
    let paymentItems = req.body.paymentItems || [];
    let payMode = req.body.payMode || 0;
    if (!orderId) return next(new BadRequestError("id is null"));
    let tableNumber;
    let verCode = "";

    let masterOrderId = orderId;
    async.waterfall([
            function (cb) {
                let sql = `select * from tb_order where id ='${orderId}';`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, orderInfo) => err ? cb(err) : orderInfo.orderState >= 2 ? cb("订单状态已变更") : cb(null, orderInfo))
            },
            function (orderInfo, cb) { // 1.1 查找主订单 以及未取消的子订单 和 兄弟订单
                verCode = orderInfo.ver_code
                tableNumber = orderInfo.table_number;
                let sql = `select * from tb_order where order_state not in (6, 9) and (id ='${orderId}' or parent_order_id ='${orderId}' `;
                if (orderInfo.parent_order_id)
                    masterOrderId = orderInfo.parent_order_id;
                    sql += ` or id = '${orderInfo.parent_order_id}' or parent_order_id = '${orderInfo.parent_order_id}'`;
                sql += ')';
                customSqlModel.getAllCustomSqlInfo(sql, (err, ordersInfo) => {
                    if (err) return cb(err)
                    let orderState = false
                    tableNumber = ordersInfo[0].table_number
                    for (let i = 0; i < ordersInfo.length; i++) {
                        if (ordersInfo[i].order_state < 2) {
                            orderState = true
                        }
                    }
                    if (orderState == true) {
                        return cb(err, ordersInfo)
                    } else {
                        return res.json(new ErrorModel("Already Payment"))
                    }
                });
            },
            function (orderInfo, cb) { // 1.2 更改订单状态
                let ordersInfo = orderInfo
                let order_update_info = {}
                async.eachLimit(ordersInfo, 1, (orderInfo, e_cb) => {
                    if (orderInfo.order_state === orderState.HAS_PAY) return e_cb(null, null);
                    order_update_info.syncState = 0;
                    order_update_info.lastSyncTime = new Date().getTime();
                    order_update_info.id = orderInfo.id;
                    order_update_info.payMode = payMode || orderInfo.pay_mode;
                    order_update_info.orderState = orderState.HAS_PAY;
                    order_update_info.productionStatus = productionStatus.HAS_PRINT;
                    order_update_info.printOrderTime = dateUtil.timestamp();
                    order_update_info.allowContinueOrder = 1;    //允许加菜
                    order_update_info.allowAppraise = 0;
                    order_update_info.allowCancel = 0;
                    order_update_info.exemptionMoney = payMode == 8 ? orderInfo.order_money : 0;
                    orderModel.updateById(orderInfo.id, order_update_info, (err, reply) => {
                        return e_cb(err, null);
                    })
                }, (err) => cb(err, orderInfo));
            },
            function (orderInfo, cb) { // 1.3 插入支付项
                async.eachLimit(paymentItems, 1, function (payType, e_cb) {
                    let item = {
                        id: generalUtil.randomUUID(),
                        orderId: orderId,
                        paymentModeId: payType.type,
                        payValue: generalUtil.rounding(payType.money),
                        remark: payModel.getPayModeName(parseInt(payType.type)) + "：" + payType.money,
                        payTime: dateUtil.timestamp(),
                        toPayId: payType.toPayId || null
                    };
                    orderPaymentItemModel.upsert(item, (error) => e_cb(error));
                }, (error) => cb(error, orderInfo));
            },
            function (orderInfo, cb) { // 1.4 释放桌位状态
                let sql = `update tb_table_qrcode set table_state = 0 where table_number = ${tableNumber};`;
                customSqlModel.getOneCustomSqlInfo(sql, function (err, reply) {
                    if (err) return cb(err.toString());
                    return cb(null, orderInfo);
                });
            },
            function (orderInfo, cb) {
                shopDetailModel.getShopDetailFindOne((err, shopDetail) => {
                    let autoPrint = shopDetail.autoPrintTotal;
                    // 如果是堂吃， 先付模式买单打印结账单，厨打， 后付模式，打印结账单
                    console.log("orderInfo", orderInfo)
                    // shopMode 2 电视叫号模式， 6 大boss模式
                    if (orderInfo[0].distribution_mode_id == 3 || shopDetail.shopMode == 2 || (shopDetail.shopMode == 6 && shopDetail.allowFirstPay == 0)) { // 电视叫号和先付模式
                        autoPrint == 0 ? printUtil.printTotal(orderId, 1, 1, 0, []) : logger.info('未开启打印总单！')
                        printUtil.printKitchen(orderId, 1, 0, 0, [])
                    } else { // 后付款模式
                        autoPrint == 0 ? printUtil.printTotal(orderId, 1, 3, 0, []) : logger.info('未开启打印总单！')
                    }
                    // if (orderInfo.distribution_mode_id && orderInfo.distribution_mode_id == 1) {
                    //     if (shopDetail.shopMode == 6 && shopDetail.allowAfterPay == 0) { // 后付
                    //         autoPrint == 0 ? printUtil.printTotal(orderId, 1, 3, 0, []) : logger.info('未开启打印总单！')
                    //     }
                    //     if (shopDetail.shopMode == 6 && shopDetail.allowFirstPay == 0) { // 先付
                    //         autoPrint == 0 ? printUtil.printTotal(orderId, 1, 1, 0, []) : logger.info('未开启打印总单！')
                    //         printUtil.printKitchen(orderId, 1, 0, 0, [])
                    //     }
                    // } else {
                    //     autoPrint == 0 ? printUtil.printTotal(orderId, 1, 1, 0, []) : logger.info('未开启打印总单！')
                    // }
                    if (shopDetail.shopMode == 2) { // 电视叫号模式，向电视推送订单
                        let order = orderInfo[0]
                        let tvOrder = {
                            type: "new",
                            code:order.ver_code ||order.table_number,
                            orderId: orderId,
                            data: null
                        }
                        tvWebSocket.sendTvMsg(tvOrder, () => {})
                    }
                })
                cb(null, orderInfo)
            },
        ],
        function (error, order) {
            if (error) return next(error.toString);
            emitter.emit('payOrder', {type: 'payOrder', socketId: req.session.socketId, orderId: orderId});
            restoApiPublishModel.pushOrderPaymentPublish(masterOrderId)
            return res.json(new SuccessModel('Payment Success', orderId));
        }
    )
}

/**
 * @de\ 取消订单
 * @param req
 * @param res
 * @param next
 */
exports.cancelOrder = (req, res, next) => {
    let orderId = req.query.orderId;
    let shopDetail = {};

    if (!orderId) return next(new BadRequestError('orderId is null'));
    let mainOrderInfoId;
    async.waterfall([
        function (cb) { //基础验证
            let sql = `SELECT  *  FROM tb_order WHERE id = '${orderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, orderInfo) {
                if (error) return cb(error);
                if (!orderInfo) res.json(new ErrorModel("fail,Order does not exist"));
                if (orderInfo.order_state == 2 || orderInfo.order_state == 10) {
                    return res.json(new ErrorModel("fail,Order Already Payment"));
                }
                if (orderInfo.production_status != 2) {
                    cb(null, orderInfo);
                } else {
                    return res.json(new ErrorModel("fail,Current status does not support"));
                }
            });
        },
        function (orderInfo, cb) {
            orderModel.upsert({
                id: orderInfo.id,
                orderState: orderState.CANCEL,
            }, function (error) {
                if (error) return cb(error);
                mainOrderInfoId = orderInfo.parent_order_id ? orderInfo.parent_order_id:orderId;
                if (orderInfo.parent_order_id) {
                    let parent_order_id = orderInfo.parent_order_id;
                    let sql = `SELECT  (SELECT sum(order_money)  FROM tb_order WHERE id = '${parent_order_id}' or
                    (parent_order_id= '${parent_order_id}' and order_state = 2)) receipts , * FROM tb_order WHERE  id = '${parent_order_id}'`;
                    customSqlModel.getOneCustomSqlInfo(sql, function (error, parentOrder) {
                        if (error) return cb(error);
                        orderModel.upsert({
                            id: parentOrder.id,
                            syncState: 0,
                            amountWithChildren: parentOrder.amount_with_children - orderInfo.order_money,
                            countWithChild: parentOrder.count_with_child - orderInfo.article_count
                        }, function (error) {
                            if (error) return cb(error);
                            cb(null, orderInfo, parentOrder);
                        })
                    })
                } else {
                    cb(null, orderInfo, null);
                }
            })
        },
        function (orderInfo, parentOrder, cb) {
            shopDetailModel.getCustomShopDetailInfo('', function (error, shopInfo) {
                shopDetail = shopInfo;
                if (shopInfo.allow_first_pay == 0) {  //  先付
                    customSqlModel.getAllCustomSqlInfo(`update tb_table_qrcode set table_state = 0 where table_number = ${orderInfo.table_number}`, function (error) {
                        if (error) return cb(error);
                        cb(null, orderInfo);
                    })
                } else if (shopInfo.allow_after_pay == 0) {    //  后付
                    if (parentOrder && parentOrder.id) {
                        //  如果主订单未支付，则不释放
                        if (parentOrder.order_state == orderState.NO_PAY) {
                            cb(null, orderInfo);
                        } else {
                            customSqlModel.getAllCustomSqlInfo(`update tb_table_qrcode set table_state = 0 where table_number = ${orderInfo.table_number}`, function (error) {
                                if (error) return cb(error);
                                cb(null, orderInfo);
                            })
                        }
                    } else {
                        //  如果是主订单，则释放桌位
                        customSqlModel.getAllCustomSqlInfo(`update tb_table_qrcode set table_state = 0 where table_number = ${orderInfo.table_number}`, function (error) {
                            if (error) return cb(error);
                            cb(null, orderInfo);
                        })
                    }
                }
            });
        },
        // function (orderInfo, cb) { //恢复库存
        //     let sql = `select article_id, count,type from tb_order_item where order_id = '${orderId}';`;
        //     customSqlModel.getAllCustomSqlInfo(sql, function (error, orderItemsInfo) {
        //         async.eachLimit(orderItemsInfo, 1, (orderItem, e_cb) => {
        //             if (orderItem.type === orderItemType.SETMEALS) return e_cb();
        //             let articleId = orderItem.article_id;
        //             let articelPriceId;
        //             if (articleId.indexOf('@') >= 0) {
        //                 articelPriceId = articleId; // 老规格子项ID
        //                 articleId = orderItem.article_id.split('@')[0]; // 老规格主项ID
        //             }
        //             let sql = `UPDATE tb_article SET current_working_stock = current_working_stock + ${orderItem.count} WHERE id = '${articleId}'`;
        //             customSqlModel.getAllCustomSqlInfo(sql, (err, reply) => {
        //                 if (err) {
        //                     return e_cb(err, null);
        //                 } else if (orderItem.type === orderItemType.UNITPRICE) { //老规格 加子项
        //                     let sql = `UPDATE tb_article_price SET current_working_stock = current_working_stock + ${orderItem.count} WHERE id = '${articelPriceId}'`;
        //                     customSqlModel.getAllCustomSqlInfo(sql, (err, reply) => {
        //                         return e_cb(err, null);
        //                     });
        //                 } else {
        //                     return e_cb(err, null);
        //                 }
        //             });
        //         }, (error) => {
        //             if (error) return cb(error);
        //             cb(null, orderInfo);
        //         })
        //
        //     })
        // }
    ], function (err) {
        if (err) return next(err);
        res.json(new SuccessModel('Cancel Success'))
        emitter.emit('cancelOrder', { orderId: orderId, socketId: req.session.socketId, type: 'cancelOrder'})
        restoApiPublishModel.orderCancelPublish(mainOrderInfoId);
    });
}

/**
 * 根据订单ID获取订单详情
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.selectById = (req, res, next) => {
    let orderId = req.query.orderId || '';

    async.waterfall([
        function (cb) {
            let sql = `SELECT  (SELECT sum(order_money)  FROM tb_order WHERE id = '${orderId}' or ( parent_order_id= '${orderId}' and order_state = 2)) receipts, * FROM tb_order WHERE  id = '${orderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, order) {
                if (error) return cb(error.toString());
                if (order == null) return result.success(next);
                //打印指令发出时 更新production_status的状态
                order.payOrderMoney = order.order_state == 1 ? order.order_money : 0;
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_item where order_id = '${orderId}'  ORDER BY type DESC`, function (error, orderItems) {
                    if (error) return cb(error.toString());
                    order.order_item_list = orderItems || [];
                    cb(null, order);

                });
            });
        },
        function (order, cb) {
            //只查询未支付订单总金额
            customSqlModel.getOneCustomSqlInfo(`select sum(order_money) orderMoney from tb_order where parent_order_id ='${orderId}' and order_state=1`, function (error, childOrder) {
                if (error) return cb(error.toString());
                order.payOrderMoney += childOrder.orderMoney;
                order.order_money = order.receipts;
                let sql = "select * from tb_shop_detail";
                customSqlModel.getOneCustomSqlInfo(sql, function (error, shopDetail) {
                    // 如果是先付 只查询已经支付的菜品 allow_first_pay:0 allow_after_pay:1
                    let first_pay_status = '';
                    if (!shopDetail.allow_first_pay) {
                        first_pay_status = `and order_state = 2`;
                    }
                    let sql = `select * from tb_order_item where order_id in(select id from tb_order where parent_order_id= '${orderId}' ${first_pay_status} and order_state != 9 ) ORDER BY type DESC`;
                    customSqlModel.getAllCustomSqlInfo(`${sql}`, function (error, childrenOrderItems) {
                        if (error) return cb(error.toString());
                        order.childreorder_item_list = childrenOrderItems || [];
                        cb(null, order);
                    });
                });
            });
        }
    ], function (err, order) {
        return res.json(new SuccessModel(null, order))
    });

}

/**
 * @desc 折扣
 * @param req
 * @param res
 * @param next
 */
exports.discount = (req, res, next) => {
    /*
          折扣率 真实折扣率
          折扣率 * order.order_money
          真实折扣率 * orderItem.final_price unit_price 最后一个 是总价减去前面所有的final_price (超过价格 折扣率设为一百)
          amount_with_children
      */
    let orderId = req.body.orderId;

    let updateData = [];
    let updateOrderPaymentData = [];
    let orderUPdate = []
    let formatDiscount = req.body.formatDiscount;
    let customerId = Number(formatDiscount.customerId) || '';
    let totalMoney = Number(formatDiscount.totalMoney) || 0; // 总金额
    let discountMoney = Number(formatDiscount.discountMoney) || 0; // 折扣金额
    let discountRate = Number(formatDiscount.onDiscount.discountRate) || 100; // 折扣率
    let noDiscountMoney = Number(formatDiscount.onDiscount.removeMoney) || 0; // 不参与折扣的钱
    let onErasing = Number(formatDiscount.onErasing.erasing) || 0; // 抹零
    let reduceMoney = Number(formatDiscount.onReduceMoney.reduceMoney) || 0;//按金额优惠
    let amountMoney = Number(formatDiscount.amountMoney) || 0; // 打折后需要支付的钱
    let servicePrice = 0;
    let mealFeePrice = 0;
    // 真实折扣率: (抹零或者折扣金额 / 打折后需要支付的钱)
    let realDiscountRate = (onErasing || reduceMoney) ? generalUtil.rounding(amountMoney / totalMoney * 100) : (discountRate == 100 ? null : discountRate);
    let table_number;

    let orderIdList = [];
    let lastSyncOrderInfo = {}


    let mainOrderInfo;  //主订单信息



    async.auto({
        orderAndChildrenInfo: function (cb) { // 1、查找主订单 以及 未取消的子订单和兄弟订单
            let sql = `select * from tb_order where id ='${orderId}' ;`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, orderInfo) {
                if (err) return cb(err);
                if (orderInfo.order_state == 2) return res.json(new ErrorModel(('订单已支付，无法进行折扣', null)));
                if (!orderInfo) return res.json(new ErrorModel(('订单不存在.', null)));
                table_number = orderInfo.table_number;
                sql = `select * from tb_order where order_state not in (6, 9) and (id ='${orderId}' or parent_order_id ='${orderId}' and order_state < 2`;
                if (orderInfo.parent_order_id)
                    sql += ` or id = '${orderInfo.parent_order_id}' or parent_order_id = '${orderInfo.parent_order_id}'`;
                sql += ')';
                customSqlModel.getAllCustomSqlInfo(sql, (err, ordersInfo) => {
                    if (err) return cb(err)
                    let orderState = false
                    for (let i = 0; i < ordersInfo.length; i++) {
                        if (ordersInfo[i].order_state < 2) {
                            orderState = true
                        }
                    }
                    if (orderState == true) {
                        orderState == false
                        return cb(err, ordersInfo)
                    } else {
                        return res.json(new ErrorModel('当前订单状态已变更', null))
                    }
                });
            });

        },
        selectOrderItem: ['orderAndChildrenInfo', function (reply, cb) { // 2、查找未支付订单的orderItem
            let ordersInfo = reply.orderAndChildrenInfo;
            let ids = [];
            for (let i = ordersInfo.length - 1; i >= 0; i--) {
                // 如果已经买单，折扣和抹零
                if (ordersInfo[i].order_state === 2)
                    continue
                else
                    ids.push(`'${ordersInfo[i].id}'`);
            }
            if (ids.length <= 0) {
                return cb(null, null);
            }
            let sql = `select * from tb_order_item where order_id in (${ids.toString()}) and count > 0`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, orderItems) {
                cb(err, orderItems);
            })
        }],
        updateServiceAndMealPrice: ['orderAndChildrenInfo', function (reply, cb) { // 3、更新服务费和餐盒费
            let updateOrderData = {order: []};
            let ordersInfo = reply.orderAndChildrenInfo;
            lastSyncOrderInfo = {
                syncState: 0,
                lastSyncTime: new Date().getTime()
            }
            async.eachLimit(ordersInfo, 1, (orderInfo, e_cb) => {
                let order_update_info = {};
                if (orderInfo.order_state === orderState.HAS_PAY) {
                    return e_cb(null, null);
                }
                order_update_info.syncState = 1;
                order_update_info.last_sync_time = lastSyncOrderInfo.lastSyncTime
                order_update_info.id = orderInfo.id;
                order_update_info.originMoney = orderInfo.origin_money || orderInfo.order_money;
                if (!orderInfo.parent_order_id || orderInfo.parent_order_id === '') {
                    servicePriceDiscount(orderInfo, realDiscountRate, function (resultServicePrice) {
                        order_update_info.servicePrice = resultServicePrice.servicePrice,
                        order_update_info.sauceFeePrice = resultServicePrice.sauceFeePrice,
                        order_update_info.towelFeePrice = resultServicePrice.towelFeePrice,
                        order_update_info.tablewareFeePrice = resultServicePrice.tablewareFeePrice

                        orderInfo.sauce_fee_price = resultServicePrice.sauceFeePrice,
                        orderInfo.towel_fee_price = resultServicePrice.towelFeePrice,
                        orderInfo.tableware_fee_price = resultServicePrice.tablewareFeePrice

                        servicePrice = order_update_info.servicePrice; // 记录服务费折扣
                        orderInfo.service_price = order_update_info.servicePrice;
                    })

                    order_update_info.mealFeePrice = (realDiscountRate !== null && orderInfo.meal_fee_price) ? generalUtil.rounding(orderInfo.meal_fee_price * (realDiscountRate / 100)) : orderInfo.meal_fee_price;
                    mealFeePrice = order_update_info.mealFeePrice; //记录餐盒费折扣
                    orderInfo.meal_fee_price = order_update_info.mealFeePrice;
                } else {
                    order_update_info.servicePrice = orderInfo.service_price || 0;
                    order_update_info.mealFeePrice = orderInfo.meal_fee_price || 0;
                }
                orderUPdate.push(order_update_info)
                orderModel.updateById(orderInfo.id, order_update_info, (err, reply) => {
                    return e_cb(err, null);
                })
            }, function (err) {
                return cb(err, null);
            });
        }],
        updateOrderItem: ['orderAndChildrenInfo', 'selectOrderItem', 'updateServiceAndMealPrice', function (reply, cb) { // 4、更新订单orderItem
            let updateOrderItemsData = {orderItem: []};
            let orderItemsInfo = reply.selectOrderItem.sort((a, b) => a.final_price - b.final_price);
            let mainOrderId = reply.updateOrder;
            let lastOrderItem = orderItemsInfo ? orderItemsInfo.pop() : [];
            let all_final_price = servicePrice + mealFeePrice;
            async.eachLimit(orderItemsInfo, 1, function (orderItem, e_cb) {

                if (orderItem.final_price == 0) return e_cb();
                let new_order_item = {
                    id: orderItem.id,
                    orderId: orderItem.order_id,
                    articleId: orderItem.article_id,
                    articleName: orderItem.article_name,
                    count: orderItem.count,
                    originalPrice: orderItem.original_price,
                    no_discountPrice: orderItem.no_discount_price,
                    remark: orderItem.remark,
                    sort: orderItem.sort,
                    status: orderItem.status,
                    type: orderItem.type,
                    parentId: orderItem.parent_id || '',
                    createTime: orderItem.create_time,
                    mealItemId: orderItem.meal_item_id,
                    kitchenId: orderItem.kitchen_id,
                    recommendId: orderItem.recommend_id,
                    orginCount: orderItem.orgin_count,
                    refundCount: orderItem.refund_count,
                    mealFeeNumber: orderItem.meal_fee_number,
                    changeCount: orderItem.change_count,
                    printFailFlag: orderItem.print_fail_flag,
                    weight: orderItem.weight,
                    needRemind: orderItem.needRemind,
                    // 除最后一个菜品外单项菜品价格×真实折扣率 - 除最后一个菜品外单项菜品均分的抹零
                    noDiscountPrice: orderItem.no_discount_price || orderItem.final_price,
                    finalPrice: realDiscountRate !== null ? generalUtil.rounding(orderItem.final_price * (realDiscountRate / 100)) : orderItem.final_price,
                    unitPrice: realDiscountRate !== null ? generalUtil.rounding(orderItem.unit_price * (realDiscountRate / 100)) : orderItem.unit_price,
                    posDiscount: realDiscountRate || orderItem.pos_discount

                }
                all_final_price += new_order_item.finalPrice;
                updateOrderItemsData.orderItem.push(new_order_item);
                orderItemModel.updateById(orderItem.id, new_order_item, (err, reply) => {
                    e_cb(err, null);
                })
            }, (err) => {
                let new_order_item = {};
                new_order_item.id = lastOrderItem ? lastOrderItem.id : '';
                new_order_item.orderId = lastOrderItem.order_id;
                new_order_item.articleId = lastOrderItem.article_id;
                new_order_item.articleName = lastOrderItem.article_name;
                new_order_item.count = lastOrderItem.count;
                new_order_item.originalPrice = lastOrderItem.original_price;
                new_order_item.no_discountPrice = lastOrderItem.no_discount_price;
                new_order_item.remark = lastOrderItem.remark;
                new_order_item.sort = lastOrderItem.sort;
                new_order_item.status = lastOrderItem.status;
                new_order_item.type = lastOrderItem.type;
                new_order_item.parentId = lastOrderItem.parent_id || '';
                new_order_item.createTime = lastOrderItem.create_time;
                new_order_item.mealItemId = lastOrderItem.meal_item_id;
                new_order_item.kitchenId = lastOrderItem.kitchen_id;
                new_order_item.recommendId = lastOrderItem.recommend_id;
                new_order_item.orginCount = lastOrderItem.orgin_count;
                new_order_item.refundCount = lastOrderItem.refund_count;
                new_order_item.mealFeeNumber = lastOrderItem.meal_fee_number;
                new_order_item.changeCount = lastOrderItem.change_count;
                new_order_item.printFailFlag = lastOrderItem.print_fail_flag;
                new_order_item.weight = lastOrderItem.weight;
                new_order_item.needRemind = lastOrderItem.needRemind;
                if (lastOrderItem && all_final_price <= 0) { // 只有一个菜品 并且 没有服务费 (前几个价格×真实折扣率 - 抹零)
                    new_order_item.noDiscountPrice = lastOrderItem.no_discount_price || lastOrderItem.final_price;
                    new_order_item.finalPrice = generalUtil.rounding(amountMoney);
                    new_order_item.unitPrice = lastOrderItem.count ? generalUtil.rounding(amountMoney / lastOrderItem.count) : 0;
                    new_order_item.posDiscount = realDiscountRate || lastOrderItem.pos_discount;
                } else if (lastOrderItem && all_final_price > 0 && amountMoney && amountMoney >= all_final_price) {
                    // 最后一个 是折扣价或者总价减去前面所有的final_price (超过所有的final_price 折扣率设为一百)
                    new_order_item.noDiscountPrice = lastOrderItem.no_discount_price || lastOrderItem.final_price;
                    new_order_item.finalPrice = generalUtil.rounding(amountMoney - all_final_price);
                    new_order_item.unitPrice = generalUtil.rounding((amountMoney - all_final_price) / lastOrderItem.count);
                    new_order_item.posDiscount = lastOrderItem.original_price == 0 ? realDiscountRate : realDiscountRate !== null ? parseInt((new_order_item.finalPrice / lastOrderItem.original_price) * 100) : lastOrderItem.pos_discount;
                } else if (lastOrderItem) {
                    new_order_item.noDiscountPrice = lastOrderItem.no_discount_price || lastOrderItem.final_price;
                    new_order_item.posDiscount = lastOrderItem.pos_discount || 100;
                }
                updateOrderItemsData.orderItem.push(new_order_item)
                updateData.push(updateOrderItemsData);
                orderItemModel.updateById(new_order_item.id, new_order_item, function (err, reply) {
                    cb(err, null);
                })
            });
        }],
        updateOrder: ['orderAndChildrenInfo', 'selectOrderItem', 'updateServiceAndMealPrice', 'updateOrderItem', function (reply, cb) { // 3_1、更新 order
            let ordersInfo = reply.orderAndChildrenInfo;

            let amountWithChildren = 0;
            async.eachLimit(ordersInfo, 1, (order, e_cb) => {
                let sql = `select sum(final_price) sum from tb_order_item where order_id = '${order.id}' and count > 0;`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, itemTotalMoney) => {
                    orderIdList.push(order.id)
                    let sum = itemTotalMoney.sum + order.service_price + order.meal_fee_price;
                    let order_update_info = {};
                    order_update_info.id = order.id;
                    order_update_info.customerId = customerId;
                    order_update_info.orderMoney = generalUtil.rounding(sum);
                    order_update_info.paymentAmount = generalUtil.rounding(sum);
                    order_update_info.posDiscount = discountRate == 100 ? order.pos_discount : discountRate;
                    order_update_info.noDiscountMoney = noDiscountMoney || 0;
                    order_update_info.orderPosDiscountMoney = discountRate == 100 ? order.order_pos_discount_money : generalUtil.rounding(order.order_money - sum);

                    order_update_info.syncState = 0;
                    order_update_info.lastSyncTime = moment().format('x');

                    order.order_money = generalUtil.rounding(sum);
                    order.payment_amount = generalUtil.rounding(sum);

                    if (order.parent_order_id) {
                        amountWithChildren += order.order_money;
                    } else {
                        mainOrderInfo = order;
                    }
                    orderUPdate.push(order_update_info)
                    orderModel.updateById(order.id, order_update_info, (err, reply) => {
                        e_cb(err, null);
                    });
                });
            }, (err) => {
                amountWithChildren = amountWithChildren ? generalUtil.rounding(amountWithChildren + mainOrderInfo.order_money) : amountWithChildren
                let updateMainOrder = {
                    id: mainOrderInfo.id,
                    amountWithChildren: amountWithChildren,
                    eraseMoney: onErasing || reduceMoney ? ((onErasing || 0) + (reduceMoney || 0)) + parseFloat(mainOrderInfo.erase_money) : mainOrderInfo.erase_money,
                    realEraseMoney: onErasing ? onErasing + parseFloat(mainOrderInfo.real_erase_money) : mainOrderInfo.real_erase_money,
                    reduceMoney: reduceMoney ? reduceMoney + parseFloat(mainOrderInfo.reduce_money) : mainOrderInfo.reduce_money,
                };
                orderUPdate.push(updateMainOrder)
                orderModel.updateById(mainOrderInfo.id, updateMainOrder, (err, reply) => {
                    cb(err, null);
                });
            });
        }],
    }, function (err, data) {
        if (err) return next(err.toString());
        res.json(new SuccessModel('Discount Success', orderId || ''));

        emitter.emit('discountOrder', {type: 'discountOrder', socketId: req.session.socketId, orderId: orderId});
        restoApiPublishModel.orderDiscountPublish(mainOrderInfo.id || orderId);
    });
}

exports.getDiscountInfo = (req, res, next) => {
    let orderId = req.query.order_id;
    let sql = `SELECT SUM(order_pos_discount_money+reduce_money) discountMoney, SUM(real_erase_money) easyMoney FROM tb_order WHERE id = '${orderId}' OR parent_order_id = '${orderId}'`

    customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
        if (error) return next(error.toString());
        return res.json(new SuccessModel(null, data))
    })
}
// 针对服务费打折 服务费 1 普通 2 升级版
var servicePriceDiscount = function (orderInfo, realDiscountRate, callback) {
    /**
     sauceFeePrice       //酱料价格
     towelFeePrice       //纸巾价格
     tablewareFeePrice   //餐具价格
     */
    let resultServicePrice = {
        sauceFeePrice: orderInfo.sauce_fee_price||0,
        towelFeePrice: orderInfo.towel_fee_price||0,
        tablewareFeePrice: orderInfo.tableware_fee_price||0,
    }
    let servicePrice = 0;
    if (realDiscountRate != null && orderInfo.service_price) {
        for (var key in resultServicePrice) {
            resultServicePrice[key] =  generalUtil.rounding(resultServicePrice[key] && resultServicePrice[key] > 0 ? resultServicePrice[key] * (realDiscountRate / 100) : 0  )
            servicePrice = Number(servicePrice) + Number(resultServicePrice[key])
        }
    }
    resultServicePrice.servicePrice  = servicePrice;
    callback(resultServicePrice)
}

/**
 * @desc 获取当天所有已支付的订单
 * @param req
 * @param res
 * @param next
 */
exports.payOrderLst = (req, res, next) => {
    let verCode = req.query.ver_code || '';
    let tableNumber = req.query.table_number || '';
    let distributionMode = req.query.distribution_mode || 1;
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    let searchCondition = '';
    if (verCode && !tableNumber) {
        searchCondition = `and ( ver_code like '%${verCode}%') `
    }
    if (!verCode && tableNumber) {
        searchCondition = `and ( table_number like '%${tableNumber}%') `
    }
    if (verCode && tableNumber) {
        searchCondition = `and (   ver_code like '%${verCode}%' or table_number like '%${tableNumber}%') `
    }

    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;
    async.parallel({
        payOrderList: function (cb) {
            let sql = `SELECT id,id order_id,table_number,amount_with_children,order_money,customer_id,
            CASE
            WHEN amount_with_children > 0 THEN
                amount_with_children
            ELSE
                order_money
            END totalAmount,
	        create_time,customer_count order_customer_count,ver_code,order_state,
            production_status,pay_mode,call_times from tb_order where distribution_mode_id = ${distributionMode}
            and (parent_order_id =''  or parent_order_id is null) and order_state in (2,10,11) and production_status in (1,2,3) 
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition} order by create_time DESC
            limit ${condition.page_skip},${condition.page_size}`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
                return cb(err, data);
            });
        },
        payOrderListCount: function (cb) {
            let sql = `SELECT count(*) count from tb_order where distribution_mode_id = ${distributionMode}
            and (parent_order_id =''  or parent_order_id is null) and order_state in (2,10,11) and production_status in (1,2,3) 
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition}`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                return cb(err, data.count);
            });
        }
    }, function (error, reply) {
        if (error) next(error.toString());
        let results = {};
        results.payOrderList = reply.payOrderList;
        results.totalPage = Math.ceil(reply.payOrderListCount / page_size) || 1;
        results.curPage = req.query.page_index;
        results.sizePage = req.query.page_size;
        return res.json(new SuccessModel('', results));
    });
}

/**
 * @desc 获取当天所有 支付中 的订单
 * @param req
 * @param res
 * @param next
 */
exports.paying = (req, res, next) => {
    let verCode = req.query.ver_code || '';
    let tableNumber = req.query.table_number || '';

    let distributionMode = req.query.distribution_mode || 1;
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    let page_index = req.query.page_index;
    let searchCondition = '';
    if (verCode && !tableNumber) {
        searchCondition = `and ( ver_code like '%${verCode}%') `
    }
    if (!verCode && tableNumber) {
        searchCondition = `and ( table_number like '%${tableNumber}%') `
    }
    if (verCode && tableNumber) {
        searchCondition = `and (   ver_code like '%${verCode}%' or table_number like '%${tableNumber}%') `
    }

    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;

    async.parallel({
        payingOrderList: function (cb) {
            let sql = `SELECT id,id order_id, table_number,amount_with_children,order_money , customer_id,
                    CASE
                    WHEN amount_with_children > 0 THEN
                        amount_with_children
                    ELSE
                        order_money
                    END totalAmount,
                    create_time,customer_count order_customer_count ,ver_code,order_state,
                    production_status,pay_mode,call_times from tb_order where distribution_mode_id = ${distributionMode}
                    and  order_state = 1 and pay_mode in (3,4) and customer_id is not null ${searchCondition} 
                    order by create_time ASC
                    limit ${condition.page_skip},${condition.page_size}`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
                return cb(err, data);
            });
        },
        payingOrderListCount: function (cb) {
            let sql = `SELECT count(*) count from tb_order where distribution_mode_id = ${distributionMode}
                        and  order_state = 1 and pay_mode in (3,4) and customer_id is not null ${searchCondition};`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                return cb(err, data.count);
            });
        }
    }, function (error, reply) {
        if (error) return next(error.toString());
        let results = {};
        results.payingOrderList = reply.payingOrderList || [];
        results.totalPage = Math.ceil(reply.payingOrderListCount / page_size) || 1;
        results.curPage = page_index;
        results.sizePage = page_size;
        return res.json(new SuccessModel('', results));
    })
}

/**
 * @desc  没有付款的订单列表
 * @param req
 * @param res
 * @param next
 */
exports.noPayOrderList = (req, res, next) => {
    let searchCondition = '';
    let tableNumber = req.query.table_number || '';
    let verCode = req.query.ver_code || '';
    let distributionMode = req.query.distribution_mode || 1;
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;

    if (verCode && !tableNumber) {
        searchCondition = `and ( ver_code like '%${verCode}%') `
    }
    if (!verCode && tableNumber) {
        searchCondition = `and ( table_number like '%${tableNumber}%') `
    }
    if (verCode && tableNumber) {
        searchCondition = `and (   ver_code like '%${verCode}%' or table_number like '%${tableNumber}%') `
    }

    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;


    async.parallel({
        noPayOrderList: function (cb) {
            let sql = `SELECT id,id order_id,table_number,amount_with_children,order_money,order_money,customer_id,
                        CASE
                        WHEN amount_with_children > 0 THEN
                            amount_with_children
                        ELSE
                            order_money
                        END totalAmount,
                        create_time,customer_count order_customer_count,ver_code,order_state,
                        production_status,pay_mode,call_times from tb_order where distribution_mode_id = ${distributionMode} and
                        (parent_order_id =''  or parent_order_id is null) and order_state = 1 and production_status != 0 ${searchCondition}  
                        order by create_time ASC
                        limit ${condition.page_skip},${condition.page_size}`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
                cb(err, data);
            });
        }, noPayOrderListCount: function (cb) {
            let sql = `SELECT count(*) count from tb_order where distribution_mode_id = ${distributionMode} and
                        (parent_order_id =''  or parent_order_id is null) and order_state = 1 and production_status != 0 ${searchCondition}  ;`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                cb(err, data.count);
            });
        }
    }, function (error, reply) {
        if (error) return next(error);
        let results = {};
        results.noPayOrderList = reply.noPayOrderList;
        results.totalPage = Math.ceil(reply.noPayOrderListCount / page_size) || 1;
        results.curPage = req.query.page_index;
        results.sizePage = page_size;
        return res.json(new SuccessModel('', results || []))
    })
}

/**
 * @desc 获取所有待下单和未支付的订单
 * @param req
 * @param res
 * @param next
 */
exports.waitOrderList = (req, res, next) => {
    let searchCondition = '';
    let tableNumber = req.query.table_number;
    let verCode = req.query.ver_code;
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    let page_index = req.query.page_index;
    let distributionMode = req.query.distribution_mode || 1;
    if (verCode && !tableNumber) {
        searchCondition = `and ( ver_code like '%${verCode}%') `
    }
    if (!verCode && tableNumber) {
        searchCondition = `and ( table_number like '%${tableNumber}%') `
    }
    if (verCode && tableNumber) {
        searchCondition = `and (   ver_code like '%${verCode}%' or table_number like '%${tableNumber}%') `
    }

    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;


    async.parallel({
        waitOrderList: function (cb) {
            let sql = `SELECT id,id order_id ,table_number,amount_with_children,order_money, customer_id,
                    CASE
                    WHEN amount_with_children > 0 THEN
                        amount_with_children
                    ELSE
                        order_money
                    END totalAmount,
                    create_time,customer_count order_customer_count,ver_code,order_state,
                    production_status,pay_mode,call_times from tb_order where distribution_mode_id = ${distributionMode} and
                    (parent_order_id =''  or parent_order_id is null) and order_state != 9 and production_status= 0 ${searchCondition} 
                    order by create_time DESC
                    limit ${condition.page_skip},${condition.page_size}`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
                return cb(err, data);
            });
        }, waitOrderListCount: function (cb) {
            let sql = `SELECT count(*) count from tb_order where distribution_mode_id = ${distributionMode} and
                        (parent_order_id =''  or parent_order_id is null) and order_state != 9 and production_status= 0 
                        ${searchCondition}`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                return cb(err, data.count);
            });
        }
    }, function (error, reply) {
        if (error) return next(error)

        let results = {};
        results.waitOrderList = reply.waitOrderList || [];
        results.totalPage = Math.ceil(reply.waitOrderListCount / page_size) || 1;
        results.curPage = page_index;
        results.sizePage = page_size;
        return res.json(new SuccessModel('', results))
    })
}


/**
 * 获取 所有 待下单 和 未支付 的订单
 */
exports.waitAndNoPayOrderList = (req, res, next) => {
    let searchCondition = '';
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    let page_index = req.query.page_index;
    let verCode = req.query.ver_code || "";
    let tableNumber = req.query.table_number || "";
    let distributionMode = req.query.distribution_mode || 1;
    if (verCode || tableNumber) {
        searchCondition += `and (ver_code like '%${verCode}%' or table_number like '%${tableNumber}%') `
    }
    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;
    async.parallel({
        waitAndNoPayOrderList: function (cb) {
            let sql = `SELECT id,table_number,amount_with_children,order_money,create_time,customer_count,ver_code,
                        order_state,production_status,pay_mode,call_times, customer_id from tb_order 
                        where distribution_mode_id = ${distributionMode} and (parent_order_id =''  or parent_order_id is null) 
                        and order_state != 9 ${searchCondition} 
                        and ( order_state in (1) or production_status in (0) )
                        limit ${condition.page_skip},${condition.page_size} `;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
                cb(err, data);
            });
        },
        waitAndNoPayOrderListCount: function (cb) {
            let sql = `SELECT count(*) count from tb_order 
                        where distribution_mode_id = ${distributionMode} and (parent_order_id =''  or parent_order_id is null) and order_state != 9
                        and ( order_state in (1) or production_status in (0) ) ${searchCondition}`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, data) {
                cb(err, data.count);
            });
        }
    }, function (error, reply) {
        if (error) {
            return next(error)
        }
        let results = {};
        results.waitAndNoPayOrderList = reply.waitAndNoPayOrderList;
        results.totalPage = Math.ceil(reply.waitAndNoPayOrderListCount / page_size) || 1;
        results.curPage = page_index;
        results.sizePage = page_size;
        return res.json(new SuccessModel(null, results));
    })
};

/**
 * @desc 分类获取订单个数
 * @param req
 * @param res
 * @param next
 */
exports.orderStateCount = (req, res, next) => {
    let distributionMode = req.query.distribution_mode_id || 1; // 默认堂食
    async.parallel({
        payOrderCount: function (cb) {
            let sql = `select count(id) payOrderCount from tb_order where distribution_mode_id = "${distributionMode}" and (parent_order_id is null or trim(parent_order_id) = '') and order_state in (2,10,11) and production_status in (1,2,3) and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime'))`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, data) => cb(null, data));
        },
        waitOrderCount: function (cb) {
            let sql = `select count(id) waitOrderCount from tb_order where distribution_mode_id = "${distributionMode}" and (parent_order_id =''  or parent_order_id is null) and order_state != 9 and production_status= 0`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, data) => cb(null, data));
        },
        noPayOrderCount: function (cb) {
            let sql = `select count(id) noPayOrderCount from tb_order where distribution_mode_id = "${distributionMode}" and (parent_order_id =''  or parent_order_id is null) and order_state = 1 and production_status not in (0,6)`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, data) => cb(null, data));
        },
        payingOrderCount: function (cb) {
            let sql = `SELECT count(id) payingOrderCount from tb_order where order_state = 1 and pay_mode in (3,4) and customer_id is not null`;
            customSqlModel.getOneCustomSqlInfo(sql, (error, data) => cb(null, data));
        }
    }, function (error, resultData) {
        if (error) return next(error)
        let result = Object.assign(resultData.payOrderCount, resultData.waitOrderCount, resultData.noPayOrderCount, resultData.payingOrderCount);
        res.json(new SuccessModel(null, result))
    });
}

/**
 * 获取订单打印信息
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.getOrderInfoTest = (req, res, next) => {
    var orderId = req.query.order_id;
    if (!orderId) return res.json(new ErrorModel("订单id不存在"));
    async.waterfall([
        cb => customSqlModel.getOneCustomSqlInfo(`select * from tb_order where id = '${orderId}' `, (error, orderInfo) => !orderInfo ? res.json(new ErrorModel("订单不存在")) : cb(error, orderInfo)),
        (orderInfo, cb) => { //关联支付项
            let sql = `SELECT * from tb_order_payment_item where order_id = '${orderId}'`;
            customSqlModel.getAllCustomSqlInfo(sql, (error, paymentItems) => {
                if (error) return cb(error);
                orderInfo.paymentItems = paymentItems;
                cb(null, orderInfo);
            });
        },
        (orderInfo, cb) => {
            let sql = `select  m.sort familySort,t.id ,t.order_id orderId,t.article_id articelId,t.article_name articleName,
                    t.count,t.original_price originalPrice,t.unit_price unitPrice, t.final_price finalPrice,t.remark,
                    t.sort,t.status, t.type,t.parent_id parentId,t.create_time createTime,
                    t.meal_item_id mealItemId,t.kitchen_id kitchenId,t.recommend_id recommendId,
                    t.orgin_count originCount,t.refund_count refundCount,t.meal_fee_number mealFeeNumber,
                    t.change_count changeCount,t.print_fail_flag printFailFlag,t.pos_discount posDiscount,t.weight, t.need_remind needRemind
                    from tb_order_item t
                    LEFT JOIN  tb_article a  on  a.id= substr(t.article_id,1,32)
                    LEFT JOIN  tb_article_family m on m.id= a.article_family_id
                    where order_id = '${orderId}'
                    or order_id in(select id from tb_order where parent_order_id= '${orderId}' and order_state != 9 )
                    ORDER BY m.sort asc`;
            customSqlModel.getAllCustomSqlInfo(sql, (error, orderItemInfo) => {
                if (error) return cb(error)
                orderInfo.orderItemList = orderItemInfo;
                cb(null, orderInfo);
            })
        }
    ], (err, resultData) => err ? next(err.toString()) : res.json(new SuccessModel('', resultData)));
}

/**
 *  * 改单   ：如果改的订单项最终为 0 则把此项删掉
 * @param res
 * @param refundItems 退菜项
 * @param orderInfo
 * @param cb
 */
const changeOrderItem = function (res, refundItems, orderInfo, cb) {
    let parentOrderId = null,
        childOrderRefundMoney = 0,
        childOrderRefundCount = 0;
    async.eachLimit(refundItems, 1, function (refundItem, callBack) {
        if (refundItem.type === 0 || refundItem.type === 10 || refundItem.type === 11 || refundItem.type == 12) return callBack(null, null); // 服务费 跳过
        let sql = `SELECT * FROM tb_order WHERE  id = '${refundItem.orderId}'`;
        customSqlModel.getOneCustomSqlInfo(sql, function (error, order) {
            //  修改订单项
            let sql = `select * from tb_order_item where id = '${refundItem.id}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, item) {
                if (error) return callBack(error)
                if (!item) return res.json(new ErrorModel("Order item not found"));

                //  如果是 套餐子项  则不进行计算
                if (item.type == orderItemType.MEALS_CHILDREN) {
                    return callBack();
                }
                let refundMoney = generalUtil.rounding(refundItem.count * refundItem.unitPrice);
                let refundCount = refundItem.count;

                item.count -= refundCount;
                item.refund_count += refundCount;
                item.final_price -= refundMoney;

                customSqlModel.updateSelective('tb_order_item', item, function (error) {
                    if (error) return callBack(error);
                    if (item.type == orderItemType.SETMEALS) {
                        let sql = `update tb_order_item set count = 0,refund_count = 1 where parent_id = '${item.id}' and type = 4;`;
                        customSqlModel.getOneCustomSqlInfo(sql);
                    }
                    let _order = {
                        id: order.id,
                        original_amount: generalUtil.rounding(order.original_amount - refundMoney),
                        order_money: generalUtil.rounding(order.order_money - refundMoney),
                        payment_amount: generalUtil.rounding(order.payment_amount - refundMoney),
                        article_count: order.article_count - refundCount,
                    };
                    //  如果有子订单，则要更新订单总额（总订单+子订单）
                    if (order.amount_with_children && order.amount_with_children > 0) {
                        _order.amount_with_children = generalUtil.rounding(order.amount_with_children - refundMoney);
                        _order.count_with_child = order.count_with_child - refundCount;
                    }

                    //  如果菜品数 小于等于 0 ，则取消订单
                    if (_order.article_count <= 0) {
                        _order.article_count = 0;
                    }
                    //  判断当前订单是否是加菜订单
                    if (order.parent_order_id) {
                        parentOrderId = order.parent_order_id;
                        childOrderRefundMoney += parseFloat(refundMoney);
                        childOrderRefundCount += refundCount;
                    }
                    //1、未核重 重量包退菜
                    sql = `update tb_order set need_confirm_order_item = 0 where 
                                        id = '${refundItem.orderId}' and
                                        (select count(*) count from tb_order_item where order_id='${refundItem.orderId}'
                                         and orgin_count != refund_count and need_remind = 1) <= 0 
                                         and ((select count(*) count from tb_order where parent_order_id = '${refundItem.orderId}'  and need_confirm_order_item = 1) <= 0) ;`;
                    customSqlModel.getOneCustomSqlInfo(sql, function (err, reply) { // 当前订单核重退菜
                        sql = `update tb_order set need_confirm_order_item = 0 where 
                                        id = '${orderInfo.id}' and
                                        (select count(*) count from tb_order_item where order_id='${orderInfo.id}'
                                         and orgin_count != refund_count and need_remind = 1) <= 0 
                                         and ((select count(*) count from tb_order where parent_order_id = '${orderInfo.id}'  and need_confirm_order_item = 1) <= 0) ;`;
                        customSqlModel.getOneCustomSqlInfo(sql, function (err, reply) { // 更新主订单核重退菜
                            customSqlModel.updateSelective('tb_order', _order, function (error) {
                                sql = `SELECT id FROM tb_order WHERE(id = '${orderInfo.id}' OR(parent_order_id = '${orderInfo.id}')) AND (amount_with_children > 0 OR order_money > 0);`
                                customSqlModel.getAllCustomSqlInfo(sql, function (err, allOrderState) { // 2、子订单主订单都退完了，状态都变
                                    if (allOrderState.length <= 0) {
                                        sql = `update tb_order set order_state = ${orderState.CANCEL} where id = '${orderInfo.id}' or parent_order_id = '${orderInfo.id}'; `
                                        customSqlModel.getOneCustomSqlInfo(sql, function (err, reply) {
                                            return callBack(err || null);
                                        })
                                    } else {
                                        return callBack(error || null);
                                    }
                                })
                            });
                        })
                    })
                })
            })
        });
    }, function (error) {
        if (!parentOrderId) {
            return cb(error || null);
        }
        //  修改主订单数据
        let sql = `update tb_order set amount_with_children = amount_with_children - ${childOrderRefundMoney},
                    count_with_child = count_with_child - ${childOrderRefundCount},sync_state=0,last_sync_time=${moment().format('x')} where id = '${parentOrderId}'`;
        customSqlModel.getOneCustomSqlInfo(sql, function (error, reply) {
            cb(error || null);
        });
    });
};

/**
 * 退菜
 * @param refundItems
 * @param cb
 */
const refundOrderItem = function (refundItems, orderInfo, cb) {
    let parentOrderId = "";     //  主订单ID
    let childOrderRefundMoney = 0;        //  退菜总金额
    let childOrderRefundCount = 0; //  退菜总数量
    async.eachLimit(refundItems, 1, function (refundItem, callBack) {
        if (refundItem.type === 0 || refundItem.type === 10 || refundItem.type === 11 || refundItem.type == 12) return callBack(null, null); // 服务费 跳过
        let sql = `SELECT(SELECT sum(order_money)  FROM tb_order WHERE id = '${refundItem.orderId}' or(parent_order_id = '${refundItem.orderId}' and order_state = 2))
                    receipts, * FROM tb_order WHERE  id = '${refundItem.orderId}'`;
        customSqlModel.getOneCustomSqlInfo(sql, function (error, order) {
            if (error || !order) {
                return callBack(error || "No order found");
            }
            //  修改订单项
            sql = `select * from tb_order_item where id = '${refundItem.id}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, item) {
                if (error || !item) {
                    return callBack(error || "No order found");
                }

                let refundMoney = (refundItem.count * refundItem.unitPrice).toFixed(2);
                let refundCount = refundItem.count;
                //  餐盒费
                if (refundItem.mealFeeNumber > 0) {
                    item.meal_fee_number -= refundItem.count;
                }
                item.count -= refundCount;
                item.final_price -= refundMoney;
                item.refund_count += refundCount;
                //  如果是 套餐主品，将主品 final_price 改为0，表示已退菜，并且 自动将此套餐子品退完
                if (item.type == orderItemType.SETMEALS) {
                    item.final_price = 0;
                    let sql = `update tb_order_item set count = 0, refund_count = 1 where parent_id = '${refundItem.id}' and type = 4; `;
                    customSqlModel.getOneCustomSqlInfo(sql);
                }
                // item.change_count
                customSqlModel.updateSelective('tb_order_item', item, function (error, reply) {
                    if (error) {
                        return callBack("-updateSelectiveError：" + error);
                    }
                    let _order = {
                        id: order.id,
                        article_count: order.article_count - refundCount,
                    };
                    //  餐盒费
                    let reduceMealFee = 0;
                    if (refundItem.mealFeeNumber > 0) {
                        _order.meal_fee_price = order.meal_fee_price - (refundItem.count * (order.meal_fee_price / order.meal_all_number)).toFixed(2);
                        _order.meal_all_number = order.meal_all_number - refundItem.count;
                        reduceMealFee = refundItem.count * (order.meal_fee_price / order.meal_all_number);
                    }

                    //  如果有子订单，则要更新订单总额（总订单+子订单）
                    if (order.amount_with_children && order.amount_with_children > 0) {
                        _order.amount_with_children = generalUtil.rounding(order.amount_with_children) - refundMoney - reduceMealFee;
                        _order.count_with_child = order.count_with_child - refundCount;
                    }

                    _order.origin_money = generalUtil.rounding(order.order_money - refundMoney - reduceMealFee);
                    _order.order_money = generalUtil.rounding(order.order_money - refundMoney - reduceMealFee);
                    _order.payment_amount = generalUtil.rounding(order.order_money - refundMoney - reduceMealFee);

                    //  如果菜品数 小于等于 0 ，则取消订单
                    if (_order.article_count <= 0) {
                        _order.article_count = 0;
                    }

                    //  修改订单同步状态

                    _order.sync_state = 0;
                    _order.last_sync_time = moment().format('x');


                    //  判断当前订单是否是加菜订单
                    if (order.parent_order_id) {
                        parentOrderId = order.parent_order_id;
                        childOrderRefundMoney += parseFloat(refundMoney);
                        childOrderRefundCount += refundCount;
                    }
                    // 1、退主订单不退子订单 主订单状态不变
                    customSqlModel.updateSelective('tb_order', _order, function (error, reply) {
                        if (error) {
                            return callBack("updateSelectiveError：" + error);
                        }
                        sql = `SELECT id FROM tb_order WHERE(id = '${orderInfo.id}' OR(parent_order_id = '${orderInfo.id}')) AND (amount_with_children >= 0 OR order_money >= 0); `
                        customSqlModel.getAllCustomSqlInfo(sql,  (err, allOrderState) =>{ //改变主订单状态
                            if (err) {
                                callBack(err);
                            } else {
                                if (allOrderState && allOrderState.length <= 0) {
                                    sql = `update tb_order set production_status = ${productionStatus.REFUND_ARTICLE},allow_continue_order=0,allow_appraise=0,allow_continue_order=0,is_refund_order=1 where(id = '${orderInfo.id}' or parent_order_id = '${orderInfo.id}'); `
                                    customSqlModel.getOneCustomSqlInfo(sql,  (error, reply) =>{
                                        if (error) {
                                            return callBack("updateSelectiveError：" + error);
                                        } else {
                                            callBack();
                                        }
                                    })
                                } else {
                                    callBack();
                                }
                            }
                        })
                    });
                })
            })
        });
    }, function (error) {
        if (error) cb(error)
        if (!parentOrderId) {
            return cb(error || null);
        }
        //  修改主订单数据
        let sql = `update tb_order set amount_with_children = amount_with_children - ${childOrderRefundMoney},
                    count_with_child = count_with_child - ${childOrderRefundCount} where id = '${parentOrderId}'`;
        customSqlModel.getOneCustomSqlInfo(sql, function (error, reply) {
            cb(error || null);
        })
    });
};

const refundServicePrice = function (refundItems, cb) {
    async.eachLimit(refundItems, 1, function (refundItem, e_cb) {
        if (refundItem.type == 1 || refundItem.type == 2 || refundItem.type == 3 || refundItem.type == 5 || refundItem.type == 6 || refundItem.type == 8) return e_cb(null); // 不是服务费 跳过
        let customerCount = refundItem.count || 0; // 要退的人数
        let servicePrice = refundItem.unitPrice ? refundItem.unitPrice * customerCount : 0; // 要退的服务费
        let updateDate = {};
        updateDate.id = refundItem.orderId;
        updateDate.servicePrice = 0;
        updateDate.orderMoney = 0;
        updateDate.paymentAmount = 0;
        updateDate.amountWithChildren = 0;

        let sql = `select table_number, original_amount,article_count, order_money, payment_amount, amount_with_children, customer_count, service_price, sauce_fee_count, sauce_fee_price, towel_fee_count, towel_fee_price, tableware_fee_count, tableware_fee_price  from tb_order where id = '${updateDate.id}'; `;
        customSqlModel.getOneCustomSqlInfo(sql, (err, orderInfo) => {
            if (err) return cb(err)
            var type = [10, 11, 12, "10", "11", "12"]
            if (type.includes(refundItem.type)) {
                updateDate.tablewareFeeCount = refundItem.type == 12 ? orderInfo.tableware_fee_count - refundItem.count : orderInfo.tableware_fee_count;
                updateDate.tablewareFeePrice = refundItem.type == 12 ? orderInfo.tableware_fee_price - refundItem.unitPrice * refundItem.count : orderInfo.tableware_fee_price;
                updateDate.towelFeeCount = refundItem.type == 11 ? orderInfo.towel_fee_count - refundItem.count : orderInfo.towel_fee_count;
                updateDate.towelFeePrice = refundItem.type == 11 ? orderInfo.towel_fee_price - refundItem.unitPrice * refundItem.count : orderInfo.towel_fee_price;
                updateDate.sauceFeeCount = refundItem.type == 10 ? orderInfo.sauce_fee_count - refundItem.count : orderInfo.sauce_fee_count;
                updateDate.sauceFeePrice = refundItem.type == 10 ? orderInfo.sauce_fee_price - refundItem.unitPrice * refundItem.count : orderInfo.sauce_fee_price;

                var serviceTotal = refundItem.unitPrice * refundItem.count
                updateDate.paymentAmount = generalUtil.rounding(orderInfo.payment_amount - serviceTotal); // payment_amount
                updateDate.orderMoney = generalUtil.rounding(orderInfo.order_money - serviceTotal); // order_money
                updateDate.servicePrice = generalUtil.rounding(orderInfo.service_price - serviceTotal); // service_price
                if (orderInfo.amount_with_children) { // amount_with_children
                    updateDate.amountWithChildren = generalUtil.rounding(orderInfo.amount_with_children - serviceTotal);
                }
                if ((orderInfo.order_money == orderInfo.service_price) && orderInfo.article_count <= 0 && orderInfo.amount_with_children <= 0 && orderInfo.order_money <= 0) { //order_state
                    updateDate.orderState = orderState.CANCEL; // 如果只剩服务费没退，退服务费后改变订单状态
                }
            } else {
                if (!orderInfo || !orderInfo.service_price) {
                    return e_cb(null, null);
                }
                updateDate.originalAmount = orderInfo.original_amount - servicePrice; // 人数
                updateDate.customerCount = orderInfo.customer_count - refundItem.count
                updateDate.paymentAmount = generalUtil.rounding(orderInfo.payment_amount - servicePrice); // payment_amount
                updateDate.orderMoney = generalUtil.rounding(orderInfo.order_money - servicePrice); // order_money
                updateDate.servicePrice = generalUtil.rounding(orderInfo.service_price - servicePrice); // service_price
                if (orderInfo.amount_with_children) { // amount_with_children
                    updateDate.amountWithChildren = generalUtil.rounding(orderInfo.amount_with_children - servicePrice);
                }
                if ((orderInfo.order_money == orderInfo.service_price) && orderInfo.article_count <= 0 && orderInfo.amount_with_children <= 0 && orderInfo.order_money <= 0) { //order_state
                    updateDate.orderState = orderState.CANCEL; // 如果只剩服务费没退，退服务费后改变订单状态
                }
            }
            orderModel.updateById(updateDate.id, updateDate, (err, reply) => {
                if (orderInfo.order_money == orderInfo.service_price && refundItems.type == 0 && orderInfo.amount_with_children <= 0 && orderInfo.order_money <= 0) { // 如果只剩服务费没退，退服务费后释放桌位
                    sql = `update tb_table_qrcode set table_state = 0 where table_number = ${orderInfo.table_number} `;
                    customSqlModel.getOneCustomSqlInfo(sql, (err, reply) => {
                        e_cb(err, null);
                    })
                } else {
                    e_cb(err, null);
                }
            })
        })
    }, function (err) {
        cb(err);
    })
};

const restoreStock = function (refundItems, cb) {
    async.eachLimit(refundItems, 1, function (refundItem, callback) {
        if (refundItem.type === 0) return callback(null); //服务费 跳过
        let sql = `select * from tb_order_item where id = '${refundItem.id}'`;
        customSqlModel.getOneCustomSqlInfo(sql, (error, orderItem) => {
            if (error) {
                return callback(error);
            }
            //  单品 或 新规格
            if (orderItem.type == orderItemType.ARTICLE || orderItem.type == orderItemType.UNIT_NEW || orderItem.type == orderItemType.WEIGHT) {
                sql = `update tb_article set current_working_stock = current_working_stock+${refundItem.count}, is_empty = 0 where id = '${refundItem.articleId}'`;
                customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                    if (error) {
                        return callback(error);
                    }
                    callback();
                });
            } else if (orderItem.type == orderItemType.UNITPRICE) {    //  老规格
                sql = `update tb_article_price set current_working_stock = current_working_stock+${refundItem.count} where id = '${refundItem.articleId}'`;
                customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                    if (error) {
                        return callback(error);
                    }
                    let articleId = refundItem.articleId.split("@")[0];
                    sql = `update tb_article set current_working_stock = current_working_stock+${refundItem.count}, is_empty = 0 where id = '${articleId}'`;
                    customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                        if (error) {
                            return callback(error);
                        }
                        callback();
                    });
                });
            } else if (orderItem.type == orderItemType.SETMEALS) { // 套餐
                sql = `SELECT * from tb_order_item where parent_id = '${orderItem.id}'`;
                customSqlModel.getAllCustomSqlInfo(sql, (error, mealsItems) => {
                    if (error) {
                        return callback(error);
                    }
                    //  还原套餐子项
                    async.eachLimit(mealsItems, 1, function (mealsItem, mealCB) {
                        sql = `update tb_article set current_working_stock = current_working_stock+1, is_empty = 0 where id = '${mealsItem.article_id}'`;
                        customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                            if (error) {
                                return mealCB(error);
                            }
                            mealCB();
                        })
                    }, function (error) {
                        if (error) {
                            return callback(error);
                        }
                        //  还原套餐主项
                        sql = `update tb_article set current_working_stock = current_working_stock+${orderItem.count}, is_empty = 0 where id = '${refundItem.articleId}'`;
                        customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                            if (error) {
                                return callback(error);
                            }
                            callback();
                        })
                    })
                })
            }
        });
    }, function (error) {
        cb(error || null);
    });
};

const checkOrderStatus = function (orderId, order_arr, cb) {
    order_arr = _.map(order_arr, (o) => `'${o}'`)
    let order_str = order_arr.join(',');

    let sql = `select * from tb_order where id in (${order_str})`;
    customSqlModel.getAllCustomSqlInfo(sql, (error, orderInfoArr) => {
        if (error) return cb(error);

        async.eachLimit(orderInfoArr, 1, (item, callback) => {
            if (item.article_count != 0 || item.order_money != 0 || item.id == orderId) return callback();
            sql = `update tb_order set production_status = ${productionStatus.REFUND_ARTICLE} where id = '${item.id}'`;
            customSqlModel.getAllCustomSqlInfo(sql, (error, reply) => {
                callback(error || null);
            });
        }, (error) => {
            if (error) return cb(error);
            let sql = `select * from tb_order where id = '${orderId}' or parent_order_id = '${orderId}'`;
            customSqlModel.getAllCustomSqlInfo(sql, (error, orderAll) => {
                if (error) return cb(error);

                let article_count_all = _.sumBy(orderAll, 'article_count');
                let order_money_all = _.sumBy(orderAll, 'order_money');
                if (article_count_all != 0 || order_money_all != 0) return cb(error || null);
                async.parallel({
                    updateOrder: (done) => {
                        sql = `update tb_order set order_state = ${orderState.CANCEL},production_status = ${productionStatus.REFUND_ARTICLE} where  id = '${orderId}' or parent_order_id = '${orderId}'`;
                        customSqlModel.getAllCustomSqlInfo(sql, done);
                    },
                    updateQrcode: (done) => {
                        sql = `update tb_table_qrcode set table_state = 0 where table_number = ${orderAll[0].table_number} `;
                        customSqlModel.getAllCustomSqlInfo(`${sql}`, done)
                    },
                }, (error, results) => cb(error));
            });
        });
    });
};

/**
 *
 * @param orderId
 * @param refundMoney
 * @param resultData
 * @param paymentModeId
 * @param remark
 * @param callback
 * @returns {*}
 */
const paymentItem = (orderId, refundMoney, resultData, paymentModeId, transaction_id, remark, callback) => {
    return callback({
        id: generalUtil.randomUUID(),
        order_id: orderId,
        pay_time: new Date().getTime(),
        pay_value: -Number(refundMoney),
        result_data: resultData,
        payment_mode_id: paymentModeId,
        remark: remark,
        refund_source_id: transaction_id || resultData
    })
}

const curryPayment = (orderId, refundMoney, orderInfo, callback) => {

    let paymentList = [];
    let requestPaymentList = []
    let onLine = {1: [], 10: []} // 线上支付项
    let refundOnline = {1: [], 10: []} // 退款支付项
    let remaminOnline = {1: 0, 10: 0}
    let underLine = {1: 0, 10: 0} // 线下退款
    let totalMap = {1: 0, 10: 0}
    let remain = 0
    let cash = 0
    let totalMoney = orderInfo.amount_with_children || orderInfo.order_money || 0;
    let sql = `SELECT * FROM tb_order_payment_item WHERE 1 = 1 AND order_id IN (SELECT id FROM tb_order WHERE id = "${orderId.toString()}" OR parent_order_id = "${orderId.toString()}" AND production_status != 6 AND production_status != 9) AND payment_mode_id NOT IN(13,14,15,20,21)`;
    async.waterfall([
        function (cb) {
            customSqlModel.getAllCustomSqlInfo(sql, (err, paymentInfo) => {
                console.log("-----------", err)
                if (err) return cb(err)
                cb(null, paymentInfo)
            })
        },
        function (paymentInfo, cb) {
            async.eachLimit(paymentInfo, 1, function (item, e_cb) {
                switch (item.payment_mode_id) {
                    case 1: // 微信退款
                        if (item.result_data && item.pay_value > 0) totalMap[1] = (Number(totalMap[1]) + Number(item.pay_value)).toFixed(2);
                        console.log("------", totalMap)
                        if (item.result_data && item.pay_value > 0 && !item.type) onLine[1].push(item);
                        if (item.refund_source_id && item.pay_value < 0) refundOnline[1].push(item);
                        if (item.result_data) remaminOnline[1] += Number(item.pay_value)
                        if (!item.result_data) underLine[1] += Number(item.pay_value);
                        break;
                    case 10:// 支付宝退款
                        if (item.result_data && item.pay_value > 0) totalMap[10] = (Number(totalMap[10]) + Number(item.pay_value)).toFixed(2);
                        if (item.result_data && item.pay_value > 0 && !item.type) onLine[10].push(item);
                        if (item.refund_source_id && item.pay_value < 0) refundOnline[10].push(item);
                        if (item.result_data) remaminOnline[10] += Number(item.pay_value)
                        if (!item.result_data) underLine[10] += Number(item.pay_value);
                        break;
                    case 2: // 余额退款
                        remain += item.pay_value
                        break;
                    default: //现金退款
                        cash += item.pay_value
                        break;
                }
                e_cb(null)
            }, (error, paymentInfo) => {
                cb(null, paymentInfo);
            })
        },
        function (paymentInfo, cb) {// 退微信或者支付宝
            let remainOnlineMoney = Number(remaminOnline[1] + remaminOnline[10]).toFixed(2)
            let tarId = {}
            if (remainOnlineMoney <= 0) return cb(null, refundMoney);
            while (remaminOnline[1] > 0) {
                for (let item of onLine[1]) {
                    remaminOnline[1] = Number(remaminOnline[1] - item.pay_value).toFixed(2);
                    if (refundMoney - item.pay_value > 0) { // 说明第一条支付项已经完成, 还需要继续退余额
                        tarId[item.id] = item.id;
                        requestPaymentList.push({
                            type: 0,
                            path: '/newpos/wechat/payment/refund',
                            transaction_id: item.id,
                            refund_fee: item.pay_value,
                            total_fee: Number(totalMap[1]).toFixed(2)
                        })
                        refundMoney = Number(refundMoney - item.pay_value).toFixed(2);
                    } else { // 说明第一条支付项并没有退完，下次退款还能继续用这条支付项
                        requestPaymentList.push({
                            type: 0,
                            path: '/newpos/wechat/payment/refund',
                            transaction_id: item.id,
                            refund_fee: refundMoney,
                            total_fee: Number(totalMap[1]).toFixed(2)
                        })
                        refundMoney = 0;
                        break
                    }
                }
            }
            while (refundMoney > 0 && remainOnlineMoney[10] > 0) {
                for (let item of onLine[10]) {
                    remaminOnline[1] = Number(remaminOnline[1] - item.pay_value).toFixed(2);
                    if (refundMoney - item.pay_value > 0) { // 说明第一条支付项已经完成, 还需要继续退余额
                        tarId[item.id] = item.id;
                        requestPaymentList.push({
                            type: 1,
                            path: '/newpos/wechat/payment/refund',
                            transaction_id: item.id,
                            refund_fee: item.pay_value,
                            total_fee: Number(totalMap[10]).toFixed(2)
                        })
                        refundMoney = Number(refundMoney - item.pay_value).toFixed(2);
                    } else { // 说明第一条支付项并没有退完，下次退款还能继续用这条支付项
                        requestPaymentList.push({
                            type: 1,
                            path: '/newpos/wechat/payment/refund',
                            transaction_id: item.id,
                            refund_fee: refundMoney,
                            total_fee: Number(totalMap[10]).toFixed(2)
                        })
                        refundMoney = 0;
                        break
                    }
                }
            }

            if (requestPaymentList && requestPaymentList.length > 0) {
                async.eachLimit(requestPaymentList, 1, (item, e_cb) => {
                    httpClient.basePost(config, item, (error, resultInfo) => {
                        if (error) return e_cb(error);
                        if (resultInfo.flag != `0000`) return e_cb(resultInfo.msg);

                        if (!resultInfo.result.ok) return e_cb(resultInfo.result.message);

                        if (tarId[item.transaction_id]) {
                            orderPaymentItemModel.updateById(tarId[item.transaction_id], {type: 1},  (err, result)=> {
                                paymentItem(orderId, item.refund_fee, `${JSON.stringify(resultInfo.result.data) || item.type==0 ? "线上微信退款" : "线上支付宝退款"}`, 1, item.transaction_id, `${item.type==0 ? "线上微信退款" : "线上支付宝退款"}：-${item.refund_fee}`, function (payItem) {
                                    paymentList.push(payItem);
                                    return e_cb(null, null);
                                })
                            })
                        } else {
                            paymentItem(orderId, item.refund_fee, `${JSON.stringify(resultInfo.result.data) || item.type==0 ? "线上微信退款" : "线上支付宝退款"}`, 1, item.transaction_id, `${item.type==0 ? "线上微信退款" : "线上支付宝退款"}：-${item.refund_fee}`, function (payItem) {
                                paymentList.push(payItem);
                                return e_cb(null, null)
                            })
                        }
                    })
                }, (error, refundMoney) => {
                    cb(error, refundMoney)
                })
            }
        },
        function (remainMoney, cb) { // 线下支付宝或者微信
            if ((underLine[1] + underLine[10]) < 0) return cb(null, refundMoney);
            let subMoney = Number(refundMoney - underLine[1]).toFixed(2)
            if (underLine[1] > 0) { // 线下微信退款
                let temMoney = subMoney > 0 ? undefined[1] : refundMoney
                paymentItem(orderId, temMoney, "", 1, "", `线下微信退款：-${temMoney}`, paymentItem => paymentList.push(paymentItem))
            }

            refundMoney = Number(refundMoney - underLine[1]).toFixed(2)
            if (underLine[10] > 0 && refundMoney > 0) {
                let subMoney = Number(refundMoney - underLine[10]).toFixed(2);
                let tem = subMoney > 0 ? underLine[10] : refundMoney;
                paymentItem(orderId, tem, "", 10, "", `线下支付宝退款：-${tem}`, paymentItem => paymentList.push(paymentItem))
            }

            refundMoney = Number(refundMoney - underLine[10]).toFixed(2);
            return cb(null, refundMoney)
        },
        function (remainMoney, cb) {// 退余额
            return cb(null, remainMoney)
            if (remainMoney > 0 && remain > 0) paymentItem(orderId, refundMoney, resultData, 13, `退款红包：-${refundMoney}`, paymentItem => paymentList.push(paymentItem))
            return cb(null, remainMoney)
        },
        function (remainMoney, cb) {// 退现金
            if (refundMoney > 0) paymentItem(orderId, refundMoney, "", 19, "", `现金退款：-${refundMoney}`, paymentItem => paymentList.push(paymentItem))
            return cb(null, null)
        }

    ], function (error, paymentInfo) {
        return callback(error, paymentList)
    })
}


var newInsertOrderRefundRemark = (orderId, refundOrderItems, orderRefundRemark, shopDetail, cb) => {
    let refundList = [];
    if (orderRefundRemark && orderRefundRemark.length <= 0) return cb(null, null);
    shopDetailModel.getCustomShopDetailInfo('', function (error, shopInfo) {
        async.eachLimit(refundOrderItems, 1, function (item, callback) {
            let remark = {
                type: 1,
                article_id: item.articleId,
                order_id: orderId,
                refund_remark_id: orderRefundRemark.split("_")[0],
                refund_remark: orderRefundRemark.split("_")[1],
                remark_supply: "",
                refund_count: item.count,
                shop_id: shopInfo.id,
                brand_id: shopInfo.brand_id,
                create_time: dateUtil.timestamp()
            };
            customSqlModel.insertSelective(`tb_order_refund_remark`, remark, function (error) {
                refundList.push(generalUtil.convertHumpName(remark));
                callback(error || null);
            });
        }, (error) => {
            cb && cb(error, refundList, shopInfo)
        });
    })
};


exports.getAllItems = (req, res, next) => {
    var orderId = req.query.order_id;

    if (!orderId) return next(new BadRequestError('order_id is null'))

    async.waterfall([
        function (cb) {
            let sql = `SELECT  (SELECT sum(order_money)  FROM tb_order WHERE id = '${orderId}' or ( parent_order_id= '${orderId}' and order_state = 2)) receipts, * FROM tb_order WHERE  id = '${orderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, order) {
                if (error) return cb(error.toString());
                if (order == null) return cb(null, null);
                //打印指令发出时 更新production_status的状态
                order.payOrderMoney = order.order_state == 1 ? order.order_money : 0;
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_item where order_id = '${orderId}'  ORDER BY type DESC`, function (error, orderItems) {
                    if (error) return cb(error.toString());
                    order.order_item_list = orderItems || [];
                    cb(null, order);

                });
            });
        },
        function (order, cb) {
            //只查询未支付订单总金额
            customSqlModel.getOneCustomSqlInfo(`select sum(order_money) orderMoney from tb_order where parent_order_id ='${orderId}' and order_state=1`, function (error, childOrder) {
                if (error) return cb(error.toString());
                order.payOrderMoney += childOrder.orderMoney;
                order.order_money = order.receipts;
                let sql = "select * from tb_shop_detail";
                customSqlModel.getOneCustomSqlInfo(sql, function (error, shopDetail) {
                    // 如果是先付 只查询已经支付的菜品 allow_first_pay:0 allow_after_pay:1
                    let first_pay_status = '';
                    if (!shopDetail.allow_first_pay) {
                        first_pay_status = `and order_state = 2`;
                    }
                    let sql = `select * from tb_order_item where order_id in(select id from tb_order where parent_order_id= '${orderId}' and order_state != 9 ) ORDER BY type DESC`;
                    customSqlModel.getAllCustomSqlInfo(`${sql}`, function (error, childrenOrderItems) {
                        if (error) return cb(error.toString());
                        order.childreorder_item_list = childrenOrderItems || [];
                        cb(null, order);
                    });
                });
            });
        }
    ], function (err, order) {
        if (err) return next(err.toString());
        return res.json(new SuccessModel(null, order))
    })
}


/**
 * @desc 扫码支付
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.scanPay = (req, res, next) => {
    let type = req.body.scan_type; // type = 0 微信支付; type = 1 支付宝支付
    let auth_code = req.body.scan_code;
    let total_money = req.body.total_money;
    let orderId = req.body.order_id;
    let out_trade_no = orderId;
    let verCode, tableNumber;
    if (!auth_code) return next(new BadRequestError("auth_code is null"))
    httpClient.basePost(config, {
        auth_code: auth_code.toString(),
        total_money: total_money,
        out_trade_no: generalUtil.randomUUID(),
        order_id: orderId,
        path: type == 0 ? "/newpos/wechat/payment/code" : "/newpos/alipay/payment/code"
    }, (error, resultData) => {
        if (error) return next(error);
        if (!resultData.result.ok) return res.json(new ErrorModel(resultData.msg ? resultData.msg : resultData.result.message, null));
        // 生成微信支付项
        let item = {
            id: resultData.result.data.transaction_id || generalUtil.randomUUID(),
            orderId: orderId,
            paymentModeId: type == 0 ? 1 : 10,
            payValue: generalUtil.rounding(total_money),
            remark: type == 0 ? "微信支付" : "支付宝支付" + "：" + total_money,
            payTime: dateUtil.timestamp(),
            toPayId: "",
            resultData: JSON.stringify(resultData.result.data)
        };
        orderPaymentItemModel.upsert(item, function (err, result) {
            if (err) return next(error);
            return res.json(new SuccessModel(null, item))
        })

    })
}

/**
 * @desc 查询扫码支付是否成功
 * @param req
 * @param res
 * @param next
 */
exports.scanCode = (req, res, next) => {
    let type = req.query.scan_type;
    let out_trade_no = req.query.out_trade_no;
    let trade_no = req.query.trade_no;
    httpClient.baseGet(config, {
        out_trade_no: out_trade_no.toString(),
        trade_no: trade_no.toString(),
        path: type == 0 ? "/newpos/wechat/payment/code/query" : "/newpos/alipay/payment/code/query"
    }, (error, resultData) => {
        if (error) return next(error);
        if (!resultData.result.ok) return res.json(new ErrorModel(resultData.msg ? resultData.msg : resultData.result.message, null));
        return res.json(new SuccessModel(null, resultData.result.data))
    })
}


/**
 * @desc 换桌
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.changeOrder = (req, res, next) => {
    let shopDetail = null;
    let orderId = req.body.order_id;
    let toTableNumber = req.body.to_table_number;
    let fromTableNumber = req.body.from_table_number;

    if (!orderId) return next(new BadRequestError("order_id is null"));
    if (!toTableNumber) return next(new BadRequestError("to_table_number is null"));
    if (!fromTableNumber) return next(new BadRequestError("from_table_number is null"));

    async.waterfall([
        (cb) => { //查询店铺模式
            shopDetailModel.getShopDetailInfo('', function (err, ben) {
                if (err) cb(err.toString());
                shopDetail = ben;
                cb(null, null)
            });
        },
        (orderInfo, cb) => { //判断目标桌子是否被占用
            if (shopDetail.allowFirstPay == 0) {
                return cb(null, null);
            } else {
                let sql = `SELECT table_state from tb_table_qrcode where table_number = ${toTableNumber}`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, data) => { // TODO:
                    if (err) return cb(err);
                    if (!data) return res.json(new ErrorModel("The table number doesn't exist !"));
                    if (data.table_state == 1) return res.json(new ErrorModel("Target table has been locked !"));
                    return cb(null, null);
                });
            }
        },
        (orderInfo, cb) => { //解除原桌位的锁定状态
            tableQrcodeMode.releaseTable(fromTableNumber, function (error) {
                cb(error || null, null);
            });
        },
        (orderInfo, cb) => { //锁定新桌位
            if (shopDetail.allowFirstPay == 0) return cb(null, null);
            tableQrcodeMode.lockingTable(toTableNumber, function (error) {
                cb(error || null, null);
            });
        },
        (orderInfo, cb) => { //更新订单中的桌号
            var orderInfo = {
                id: orderId,
                tableNumber: toTableNumber,
                syncState: 0,
                lastSyncTime: moment().format('x'),
            };
            //先更新主订单 在更新子订单
            orderModel.updateById(orderId, orderInfo, (err) => {
                if (err) return cb(err.toString());
                //查询是否存在子订单
                let sql = `select count(parent_order_id) count from tb_order where parent_order_id = '${orderId}';`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, data) => {
                    if (err) return cb(err.toString());
                    if (data.count <= 0) return cb(null, data);

                    let childOrderInfoUpdate = {
                        tableNumber: toTableNumber,
                    };
                    let childOrderConditions = {
                        parentOrderId: orderId,
                    };

                    orderModel.updateByConditions(childOrderInfoUpdate, childOrderConditions, (err) => {
                        if (err) return cb(err.toString());
                        return cb(null, data);
                    });
                });
            });
        },
    ], function (err, resultData) {
        if (err) {
            return next(err)
        } else {
            emitter.emit('changeTable', {type: 'changeTable', socketId: req.session.socketId, orderId: orderId});

            res.json(new SuccessModel(`The exchange of table was successful`, resultData))
            let condition = {
                order_id: orderId,
                table_number: toTableNumber,
                from_table_number: fromTableNumber,
            };

            restoApiPublishModel.orderChangeTablePublish(condition)
        }
    });
}

/**
 * @desc 恢复折扣
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.resumeDiscount = (req, res, next) => {
    let orderId = req.body.order_id;
    let updateData = [];
    let shopDetail = null;
    if (!orderId) return next(new BadRequestError("order_id is null"));
    async.auto({
        getShopDetail: function (cb) {
            shopDetailModel.getCustomShopDetailInfo({}, (err, shopDetailInfo) => {
                cb(err, shopDetailInfo);
            })
        },
        resumeOrdersInfo: ['getShopDetail', function (reply, cb) {
            let orderUpdate = {order: []};
            shopDetail = reply.getShopDetail;

            let sql = `select * from tb_order where id = '${orderId}' or parent_order_id = '${orderId}'`;
            customSqlModel.getAllCustomSqlInfo(sql, (err, ordersInfo) => {
                if (ordersInfo.length <= 0) return res.json(new ErrorModel("Order does not exist！"));

                let orderState = false
                for (let i = 0; i < ordersInfo.length; i++)
                    if (ordersInfo[i].order_state < 2) orderState = true
                if (orderState == true) {
                    orderState == false
                } else {
                    return res.json(new ErrorModel("Already Payment Recovery Discount Fail!"))
                }

                let item_arr = ordersInfo.filter((item) => item.parent_order_id == null || item.parent_order_id == '');
                if (item_arr[0].erase_money == 0 && item_arr[0].pos_discount > 99) {
                    return cb(null, false);
                }
                let amount_with_children = 0;
                let meal_all_number = 0;
                for (let i = 0; i < ordersInfo.length; i++) {
                    amount_with_children += ordersInfo[i].origin_money || ordersInfo[i].order_money || 0;
                    meal_all_number += ordersInfo[i].meal_all_number;
                }
                if (ordersInfo.length <= 1) { // 只有主订单没有amount_with_children
                    amount_with_children = 0;
                }
                async.eachLimit(ordersInfo, 1, (orderInfo, e_cb) => {
                    if (orderInfo.origin_money != null) {
                        let tmp = {};
                        tmp.id = orderInfo.id;
                        tmp.orderMoney = orderInfo.origin_money;
                        tmp.paymentAmount = orderInfo.origin_money;
                        tmp.posDiscount = 100;
                        tmp.orderPosDiscountMoney = 0;
                        tmp.eraseMoney = 0;
                        tmp.realEraseMoney = 0;
                        tmp.reduceMoney = 0;
                        tmp.noDiscountMoney = 0;
                        tmp.servicePrice = shopDetail.is_use_service_price && !orderInfo.parent_order_id && orderInfo.service_price > 0 ? shopDetail.service_price * orderInfo.customer_count : 0;
                        tmp.sauceFeePrice = shopDetail.is_open_sauce_fee && !orderInfo.parent_order_id && orderInfo.service_price > 0 ? shopDetail.sauce_fee_price * Number(orderInfo.sauce_fee_count) : 0;    //酱料
                        tmp.towelFeePrice = shopDetail.is_open_towel_fee && !orderInfo.parent_order_id && orderInfo.service_price > 0 ? shopDetail.towel_fee_price * Number(orderInfo.towel_fee_count) : 0;   //纸巾
                        tmp.tablewareFeePrice = shopDetail.is_open_tableware_fee && !orderInfo.parent_order_id && orderInfo.service_price > 0 ? shopDetail.tableware_fee_price * Number(orderInfo.tableware_fee_count) : 0;   //餐具
                        tmp.mealFeeNnumber = shopDetail.is_meal_fee && !orderInfo.parent_order_id ? shopDetail.meal_fee_price * meal_all_number : 0;
                        tmp.amountWithChildren = !orderInfo.parent_order_id && ordersInfo.length > 0 ? amount_with_children : 0;
                        tmp.originMoney = 0;
                        orderUpdate.order.push(tmp);
                        tmp.syncState = 0;
                        tmp.lastSyncTime = moment().format('x');
                        orderModel.updateById(tmp.id, tmp, (err, reply) => {
                            return e_cb(err, reply);
                        });
                    } else {
                        return e_cb(err);
                    }
                }, (err) => {
                    if (orderUpdate.order.length > 0) {
                        updateData.push(orderUpdate);
                    }
                    return cb(err, ordersInfo);
                })
            });
        }],
        resumeOrderItem: ['getShopDetail', 'resumeOrdersInfo', function (reply, cb) {
            if (reply.resumeOrdersInfo == false) return cb(null, false);
            let orderItemsUpdate = {orderItem: []};
            let ordersInfo = reply.resumeOrdersInfo;
            let ids = [];
            for (let i = 0; i < ordersInfo.length; i++) {
                ids.push(`'${ordersInfo[i].id}'`);
            }
            let sql = `select * from tb_order_item where order_id in (${ids.toString()}) and count > 0;`;
            customSqlModel.getAllCustomSqlInfo(sql, (err, orderItemsInfo) => {
                async.eachLimit(orderItemsInfo, 1, (orderItem, e_cb) => {
                    if (orderItem.no_discount_price != null) {
                        let tmp = {};
                        tmp.id = orderItem.id;
                        tmp.finalPrice = orderItem.no_discount_price;
                        tmp.unitPrice = orderItem.no_discount_price / orderItem.orgin_count;
                        tmp.posDiscount = 100;
                        tmp.noDiscountMoney = 0;
                        tmp.grantCount = 0;
                        orderItemsUpdate.orderItem.push(tmp);
                        orderItemModel.updateById(tmp.id, tmp, (err, reply) => {
                            e_cb(err)
                        });
                    } else {
                        e_cb(err)
                    }
                }, (err) => {
                    if (orderItemsUpdate.orderItem.length > 0) {
                        updateData.push(orderItemsUpdate);
                    }
                    cb(err);
                });
            });
        }]
    }, (err, data) => {
        if (err) return next(err);
        res.json(new SuccessModel(null, null));

        emitter.emit('resumeOrder', {type: 'resumeOrder', socketId: req.session.socketId, orderId: orderId});
        restoApiPublishModel.orderResumeDiscountPublish(orderId);
    });
};

//新退菜 或改单
exports.refundOrder = (req, res, next) => {
    let orderId = req.body.id;  //主订单id
    let refundRemark = req.body.refundRemark;        //退菜备注
    let refundItems = req.body.orderItems || [];        //退菜list
    let refundMoney = req.body.refundMoney || 0;        //  退菜总金额
    if (!orderId) return next(new BadRequestError(`id is null`));
    if (!refundRemark) return next(new BadRequestError(`refundRemark is null`));
    if (refundItems.length == 0) return next(new BadRequestError(`orderItems is null`));

    let refundList = [];            //
    let refundPaymentItemList = []; // 返回前端的退菜支付项

    let restoApiPaymentItemList = [];    //得到线上退款支付项
    async.waterfall([
        (done) => {
            let sql = `select * from tb_order where id = '${orderId}' `;
            customSqlModel.getOneCustomSqlInfo(sql, (error, order_info) => {
                if (error) return done(error);
                if (!order_info) return res.json(new ErrorModel(`Not This Order！`));
                if (order_info.order_state == 9) return res.json(new ErrorModel(`Order Already Cancel！`));
                if (+order_info.erase_money != 0) return res.json(new ErrorModel(`抹零不支持退菜`));
                done(null, order_info)
            })
        },
        (order_info, done) => {    //
            if (order_info.order_state == orderState.NO_PAY || refundMoney == 0) {   //改单
                async.waterfall([
                    (cb) => {
                        refundServicePrice(refundItems,cb)       //服务费操作
                    },
                    (cb) => {
                        changeOrderItem(res, refundItems, order_info, cb)
                    },
                    (cb) => {
                        shopDetailModel.getCustomShopDetailInfo('', (error, shopInfo) => {
                            if (error) return cb(error);
                            async.eachLimit(refundItems, 1, (item, ef) => {
                                let remark = {
                                    type: 1,
                                    article_id: item.articleId,
                                    order_id: orderId,
                                    refund_remark_id: refundRemark.split("_")[0],
                                    refund_remark: refundRemark.split("_")[1],
                                    remark_supply: "",
                                    refund_count: item.count,
                                    shop_id: shopInfo.id,
                                    brand_id: shopInfo.brand_id,
                                    create_time: dateUtil.timestamp()
                                };
                                customSqlModel.insertSelective(`tb_order_refund_remark`, remark, ef);
                            }, (error) => cb(error))
                        })
                    },
                ], (error) => done(error));
            } else {
                async.waterfall([
                    (cb) => {//获取订单支付项
                        let order_arr = _.map(_.unionBy(refundItems, 'orderId'), (o) => o.orderId);
                        order_arr.push(orderId);
                        order_arr = _.uniq(order_arr);

                        order_arr = _.map(order_arr, (o) => `'${o}'`)
                        let order_str = order_arr.join(',');
                        let sql = `SELECT * from tb_order_payment_item WHERE order_id in (${order_str})`;
                        customSqlModel.getAllCustomSqlInfo(sql, (error, order_payment_list_info) => {
                            if (error) return cb(error);
                            cb(null,order_payment_list_info);
                        })
                    },
                    (order_payment_list_info,cb) => {//判断如何退款
                        // let refund_money = _.sumBy(refundItems,(o)=>+o.count * +o.unitPrice);      //得到需要退款的金额
                        let payment_list = _.map(_.unionBy(order_payment_list_info, 'payment_mode_id'), (o) => o.payment_mode_id);
                        if(payment_list.length == 1 && payment_list[0] == payModel.EXEMPTION_PAY){
                            return res.json(new ErrorModel("Free Sheet Cannot retreat!"));
                        }else { //走线上拿退款支付项
                            let param = {
                                order_id:orderId,
                                order_items:refundItems,
                                refund_money:refundMoney
                            };
                            restoApiPublishModel.getOrderRefundPaymentItemPublish(param,(err,result)=>{
                                if (err || result.flag != '0000') {
                                    let payment = {
                                        id: generalUtil.randomUUID(),
                                        order_id: orderId,
                                        pay_time: new Date().getTime(),
                                        pay_value: -Number(refundMoney),
                                        result_data: "",
                                        payment_mode_id: 12,
                                        remark: `线下退还现金：-${refundMoney} 元`,
                                    }
                                    customSqlModel.insertSelective('tb_order_payment_item', payment, (error, reply) => {
                                        refundPaymentItemList.push(payment);
                                        cb(error || null);
                                    })
                                } else if (result.flag == '0000' && !result.result.ok) { // 例如，商户平台金额不足以退款
                                    return res.json(new ErrorModel(result.msg || result.result.message))
                                } else {
                                        restoApiPaymentItemList = result.result.data.refund_payment;
                                        async.eachLimit(restoApiPaymentItemList, 1,  (item, ef)=> {
                                            customSqlModel.insertSelective('tb_order_payment_item', item,  (error, reply)=> {
                                                refundPaymentItemList.push(item);
                                                ef(error || null);
                                            })
                                    },  (error)=> cb(error))
                                }
                            });
                        }
                    },
                    (cb) => {//插入退款备注
                        shopDetailModel.getCustomShopDetailInfo('', (error, shopInfo) => {
                            if (error) return cb(error);
                            async.eachLimit(refundItems, 1, (item, ef) => {
                                let remark = {
                                    type: 1,
                                    article_id: item.articleId,
                                    order_id: orderId,
                                    refund_remark_id: refundRemark.split("_")[0],
                                    refund_remark: refundRemark.split("_")[1],
                                    remark_supply: "",
                                    refund_count: item.count,
                                    shop_id: shopInfo.id,
                                    brand_id: shopInfo.brand_id,
                                    create_time: dateUtil.timestamp()
                                };
                                customSqlModel.insertSelective(`tb_order_refund_remark`, remark, ef);
                            }, (error) => cb(error));
                        })
                    },
                    (cb) => {//操作服务费
                        refundServicePrice(refundItems, (err) => cb(err))
                    },
                    (cb) => {//退菜数据
                        refundOrderItem(refundItems, order_info,  cb)
                    }
                ], (error) => done(error));
            }
        },
        (done) => {  //  开始检测订单状态
            let order_arr = _.map(_.unionBy(refundItems, 'orderId'), (o) => o.orderId);
            order_arr.push(orderId);
            order_arr = _.uniq(order_arr);

            order_arr = _.map(order_arr, (o) => `'${o}'`)
            let order_str = order_arr.join(',');

            async.waterfall([
                (cb) => {
                    let sql = `select * from tb_order where id in (${order_str})`;
                    customSqlModel.getAllCustomSqlInfo(sql, cb)
                },
                (orderInfoArr, cb) => {
                    let sql = `select * from tb_order where id = '${orderId}' or parent_order_id = '${orderId}'`;
                    customSqlModel.getAllCustomSqlInfo(sql, (error, orderAll) => {
                        if (error) return cb(error);

                        let article_count_all = _.sumBy(orderAll, 'article_count');
                        let order_money_all = _.sumBy(orderAll, 'order_money');
                        if (article_count_all != 0 || order_money_all != 0) return cb(error || null);
                        async.parallel({
                            updateOrder: (ef) => {
                                // sql = `update tb_order set order_state = ${orderState.CANCEL},production_status = ${productionStatus.REFUND_ARTICLE} where  id = '${orderId}' or parent_order_id = '${orderId}'`;
                                sql = `update tb_order set production_status = ${productionStatus.REFUND_ARTICLE},allow_continue_order=0,allow_appraise=0,allow_continue_order=0,is_refund_order=1 where  id = '${orderId}' or parent_order_id = '${orderId}'`;
                                customSqlModel.getAllCustomSqlInfo(sql, ef);
                            },
                            updateQrcode: (ef) => {
                                sql = `update tb_table_qrcode set table_state = 0 where table_number = ${orderAll[0].table_number} `;
                                customSqlModel.getAllCustomSqlInfo(`${sql}`, ef)
                            },
                        }, (error) => cb(error));
                    });
                }
            ], (error) => done(error));
        },
    ], (err, result) => {
        if (err) return next(err);
        // printUtil.printTotal(orderId, 1, 2, 1, refundItems);
        // printUtil.printKitchen(orderId,1,0,1,refundItems);

        res.json(new SuccessModel(null, {
            refundPaymentItemList: refundPaymentItemList
        }));
        emitter.emit('refundOrder', { orderId: orderId, socketId: req.session.socketId, type: 'refundOrder'})
        // //得到所有订单id
        let order_arr = _.map(_.unionBy(refundItems, 'orderId'), (o) => o.orderId);
        order_arr.push(orderId);
        order_arr = _.uniq(order_arr);
        let order_item_arr = _.map(refundItems, (o) => o.id);
        let order_refund_article = [];
        _.filter(refundItems, (o) => {
            let obj = {};
            if (o.articleId != '') {
                obj.type = 1;
                obj.article_id = o.articleId;
                obj.order_id = orderId;
                obj.refund_remark_id = Number(refundRemark.split('_')[0]);
                obj.refund_remark = refundRemark.split('_')[1];
                obj.refund_count = o.count;
                order_refund_article.push(obj)
            }
        });

        restoApiPublishModel.orderUpdatePublish(orderId, order_arr, order_item_arr, order_refund_article);

    });
};




/**
 * 订单采集
 * @param topic
 * @param msg
 * @param callback
 * @returns {*}
 */
exports.orderGatherBydate = function (topic,msg, callback) {
    if (!msg.date) return callback('order date is null ');
    let where = {
        accounting_time:msg.date
    };
    let content = msg.content;
    let arr = topic.split("/");

    let platform = arr[1],brand_id = arr[2],shop_id = arr[2],group = arr[4], action = arr[5],identification =arr[6] ;

    if(content){
        where = {
            $or : [
                {id : {"$like":`%${content}%`}},
                {serial_number : {"$like":`%${content}%`}},
                {parent_order_id : {"$like":`%${content}%`}},
            ]
        };
    }
    orderModel.findAllIdByConditions(where,(err,arrId)=>{
        if (err) return callback(err);

        if (arrId.length == 0) callback(`arrId  is null`);
        async.eachLimit(arrId, 1, function (item, cb) {
            async.parallel({
                tb_order: (done)=>{
                    customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order WHERE id  = '${item.id}'`, done)
                },
                tb_order_item: (done)=>{
                    customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_item WHERE order_id  = '${item.id}'`, done)
                },
                tb_order_payment_item: (done)=>{
                    customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_payment_item WHERE order_id  = '${item.id}'`, done)
                },
            },(error, results)=>{
                if (error) return cb(error);
                let requestData = {
                    tb_order:results.tb_order,
                    tb_order_item:results.tb_order_item,
                    tb_order_payment_item:results.tb_order_payment_item
                };
                httpClient.admin_put(`new`,requestData,cb)
            });
        }, (err) =>{
            if(err) return callback(err);
            callback();
        });
    })
};

// 根据customer_id
exports.customerInfo = function (req, res, next) {
    let customerId = req.query.customer_id;
    if (!customerId) return next(new BadRequestError("CustomerId is null"));


    let sql = `select * from tb_customer where id = '${customerId}' ;`;
    customSqlModel.getOneCustomSqlInfo(sql, function (error, customerInfo) { // TODO:
        if (error) {
            return next(error)
        }
        return res.json(new SuccessModel(null, customerInfo))
    })
};
