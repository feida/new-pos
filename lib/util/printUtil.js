const customSqlModel = require("../../model/pos/customSql");
const PayMode = require("../../lib/constant/PayMode");
const RefundOrderPaymentType = require("../../lib/constant/RefundOrderPaymentType")
const moment = require("moment");
const async = require("async");
const lodash = require("lodash");
const queuefun = require('queue-fun');
const httpClient = require("./httpClient");
const Queue = queuefun.Queue();
const q = queuefun.Q;  //配合使用的Promise流程控制类，也可以使用原生Promise也可以用q.js代替
//实列化一个最大并发为1的队列
const queue1 = new Queue(1);

const result = require("./resultUtil");
const generalUtil = require("./generalUtil");
const {log} = require("./fileUtil");
const printTemplateModel = require("../constant/printTemplateModel");


const orderModel = require("../../model/web/order");
const orderItemModel = require("../../model/web/orderItem");
const printerModel = require("../../model/web/printer");
const areaModel = require("../../model/web/area");
const orderPaymentItemModel = require("../../model/web/orderPaymentItem");
const shopDetailModel = require("../../model/web/shopDetail");
const articleKitchenModel = require("../../model/web/articleKitchen");
const chargeOrderModel = require("../../model/web/chargeOrder");
const platformOrder = require("../../model/web/platformOrder");
const printer = require("../../model/web/printer");


const printerServiceModel = require("../../service/print");

const {SuccessModel, ErrorModel} = require("../util/result")
//  厨打打印次数
let printKitchenExecuteNumber = {};

let printUtil = module.exports;

/**
 * 打印总单
 * @param orderId           订单ID
 * @param totalType         1=先付， 2=后付消费、3= 后付结算
 * @param refund            0 不退菜   or  1 退菜
 * @param orderItemArr      退菜对象    orderItemArr:[ {id:"'df0a6deb982b4e57a894ce57f68211c4'",count:2}]
 * @param autoPrint         1; 自动 0 手动
 * @param callback
 */
printUtil.printTotal = function (orderId, autoPrint = 0, totalType = 1, refund = 0, orderItemArr = [], callback) {
    let refundServicePriceItem = [];
    if (typeof callback != 'function') {
        callback = function () {
        };
    }
    shopDetailModel.getShopDetailInfo('', function (error, shopDetail) {
        if (error || !shopDetail) return callback(error || "未找到店铺信息");
        if (shopDetail.autoPrintTotal != 0 && autoPrint != 0) return callback();
        if (shopDetail.autoPrintConsumeOrder != 1 && totalType == 2 && autoPrint != 0) return callback();
        if (shopDetail.autoPrintCheckOutOrder != 1 && (totalType == 3 || totalType == 1) && autoPrint != 0) return callback();
        if (refund != 0) {

            lodash.forEach(orderItemArr, function (val) {
                var type = [0, 10, 11, 12];
                var articleType = {
                    "0": shopDetail.serviceName + '(退)',
                    "10": shopDetail.sauceFeeName + '(退)',
                    "11": shopDetail.towelFeeName + '(退)',
                    "12": shopDetail.tablewareFeeName + '(退)'
                }
                if (type.includes(val.type)) {
                    let refundItemTmp = {
                        ARTICLE_NAME: articleType[val.type],
                        ARTICLE_COUNT: 0 - val.refundCount,
                        ARTICLE_TOTAL: 0 - val.refundCount,
                        SUBTOTAL: (0 - (val.refundCount * val.unitPrice)).toFixed(2),
                        TOTAL: +(0 - (val.refundCount * val.unitPrice)).toFixed(2)
                    };
                    refundServicePriceItem.push(refundItemTmp)
                }
                lodash.assign(val, {id: "'" + val.id + "'"});
            });
        }

        async.waterfall([
            function (cb) { //关联订单信息
                orderModel.getReceiptsById(orderId, function (error, orderInfo) {
                    if (error || !orderInfo) return cb(error || "订单不存在！");

                    if (!refund) {
                        async.parallel({
                            totalArticleByOrderId: function (done) {
                                orderModel.totalArticleByOrderId(orderId, orderInfo.distribution_mode_id, shopDetail.printOutDetails, function (error, orderItems) {
                                    if (error) return cb(error);
                                    let orderItemList = orderItems;
                                    orderItemList.map(item => {
                                        if (item.grant_count > 0) {
                                            let article = {}
                                            for (it in item) {
                                                if (it == "article_name") {
                                                    article[it] = item[it] + "(赠)"
                                                } else if (it == "orgin_count") {
                                                    article["orgin_count"] = -item["grant_count"]
                                                } else if (it == "original_price") {
                                                    article[`${it}`] = item["original_price"]
                                                } else {
                                                    article.it = item.it
                                                }
                                            }
                                            orderItems.push(article)
                                        }
                                    })
                                    done(null, orderItems)
                                })
                            },
                            refundCountByOrderId: function (done) {
                                if (shopDetail.printOutDetails == 0) return done();
                                orderModel.refundCountByOrderId(orderId, function (error, refundCountItems) {
                                    if (error) return cb(error);
                                    done(null, refundCountItems)
                                });
                            },
                        }, function (error, results) {
                            if (error) return cb(error);

                            if (shopDetail.printOutDetails == 1) {
                                results.totalArticleByOrderId.push(...results.refundCountByOrderId);
                            }

                            printerModel.getArticleSort(results.totalArticleByOrderId, function (e) {
                                orderInfo.orderItems = e;

                                if (!orderInfo.parent_order_id) return cb(null, orderInfo);

                                orderModel.getReceiptsById(orderInfo.parent_order_id, function (error, parentOrderInfo) {
                                    if (error) return cb(error);
                                    orderInfo.parentOrderInfo = parentOrderInfo;
                                    cb(null, orderInfo);
                                })
                            });
                        });
                    } else {
                        orderModel.refundCountByOrderId(orderId, function (error, refundCountItems) {
                            let orderItems = [];
                            lodash.forEach(refundCountItems, function (val) {
                                let orderItemObj = lodash.find(orderItemArr, function (o) {
                                    return o.id == `'${val.id}'` || o.id == `'${val.parent_id}'`
                                });
                                if (orderItemObj) {
                                    if (!val.parent_id || val.type == 6) {
                                        lodash.assign(val, {
                                            refund_count: orderItemObj.refundCount,
                                            original_price: orderItemObj.unitPrice,
                                            meal_fee_number: orderItemObj.refundMealFeeItemOfPrint
                                        });
                                    } else {
                                        lodash.assign(val, {
                                            refund_count: 1,
                                            original_price: val.unit_price,
                                            meal_fee_number: orderItemObj.refundMealFeeItemOfPrint
                                        });
                                    }
                                    orderItems.push(val);
                                }
                            });
                            
                            printerModel.getArticleSort(orderItems, function (e) {
                                orderInfo.orderItems = e;
                                if (!orderInfo.parent_order_id) return cb(null, orderInfo);
                                // 如果存在 父订单，则 订单数量 显示 父订单的值
                                orderModel.getReceiptsById(orderInfo.parent_order_id, function (error, parentOrderInfo) {
                                    orderInfo.parentOrderInfo = parentOrderInfo;
                                    cb(null, orderInfo);
                                })
                            });
                        });
                    }

                });
            },
            function (orderInfo, cb) { //关联打印机
                areaModel.getPrintMachineByTableNumber(orderInfo, function (error, tableInfo) {
                    if (error) return cb(error);
                    orderInfo.printerInfo = tableInfo;
                    cb(null, orderInfo);
                });
            },
            function (orderInfo, cb) { //关联支付项
                orderInfo.paymentItems = [];
                if (!refund) {
                    orderPaymentItemModel.listByOrderId(orderId, function (error, paymentItems) {
                        if (error) return cb(error);
                        orderInfo.paymentItems = paymentItems;
                        cb(null, orderInfo);
                    });
                } else {
                    if (totalType != 1 && orderInfo.order_state != 2 && orderInfo.order_state != 9) return cb(null, orderInfo);
                    orderPaymentItemModel.refundListByOrderId(orderId, function (error, paymentItems) {
                        if (error) return cb(error);
                        let refundAmount = (lodash.sumBy(orderInfo.orderItems, function (o) {
                            return o.refund_count * o.original_price;
                        }));
                        if (refundServicePriceItem.length > 0) {
                            for (let i = refundServicePriceItem.length - 1; i >= 0; i--) {
                                refundAmount += Math.abs(refundServicePriceItem[i].SUBTOTAL);
                            }
                        }
                        let paymentAmount = 0;
                        let obj = [];
                        lodash.forEach(paymentItems, function (val) {
                            paymentAmount += Math.abs(val.pay_value.toFixed(2));
                            obj.push(val);
                            if (paymentAmount.toFixed(2) == refundAmount.toFixed(2)) return false;
                        });

                        orderInfo.paymentItems = obj;
                        orderInfo.paymentss = obj;

                        cb(null, orderInfo);
                    });
                }
            },
            function (orderInfo, cb) { //设置店铺信息
                if (!refund) {
                    if (orderInfo.distribution_mode_id == 1 && shopDetail.isUseServicePrice == 1 && shopDetail.serviceType == 0 && (orderInfo.parent_order_id == "" || orderInfo.parent_order_id == null)) {
                        // 普通版服务费
                        orderInfo.orderItems = [...orderInfo.orderItems, {
                            'article_return': "false",
                            'article_name': shopDetail.serviceName,
                            'count': orderInfo.customer_count,
                            'orgin_count': orderInfo.customer_count,
                            // 'orgin_count': shopDetail.servicePrice == 0 ? orderInfo.customer_count : parseInt(orderInfo.service_price / shopDetail.servicePrice),
                            'original_price': shopDetail.servicePrice
                        }];
                    } else if (orderInfo.distribution_mode_id == 1 && shopDetail.isUseServicePrice == 1 && shopDetail.serviceType == 1 && (orderInfo.parent_order_id == "" || orderInfo.parent_order_id == null)) {
                        // 升级版服务费
                        if (shopDetail.isOpenSauceFee) {
                            orderInfo.orderItems = [...orderInfo.orderItems, {
                                'article_return': "false",
                                'article_name': shopDetail.sauceFeeName,
                                'count': Number(orderInfo.sauce_fee_count),
                                'orgin_count': Number(orderInfo.sauce_fee_count),
                                'original_price': shopDetail.sauceFeePrice
                            }];
                        }

                        if (shopDetail.isOpenTowelFee) {
                            orderInfo.orderItems = [...orderInfo.orderItems, {
                                'article_return': "false",
                                'article_name': shopDetail.towelFeeName,
                                'count': Number(orderInfo.towel_fee_count),
                                'orgin_count': Number(orderInfo.towel_fee_count),
                                'original_price': shopDetail.towelFeePrice
                            }];
                        }
                        if (shopDetail.isOpenTablewareFee) {
                            orderInfo.orderItems = [...orderInfo.orderItems, {
                                'article_return': "false",
                                'article_name': shopDetail.tablewareFeeName,
                                'count': Number(orderInfo.tableware_fee_count),
                                'orgin_count': Number(orderInfo.tableware_fee_count),
                                'original_price': shopDetail.tablewareFeePrice
                            }];
                        }
                    } else if (orderInfo.distribution_mode_id == 3 && shopDetail.isMealFee == 1) {
                        let mealFeeCount = lodash.sumBy(orderInfo.orderItems, function (o) {
                            return o.article_return == 'false' ? o.meal_fee_number : 0
                        });
                        orderInfo.orderItems = [...orderInfo.orderItems, {
                            'article_return': "false",
                            'article_name': shopDetail.mealFeeName,
                            'count': orderInfo.meal_all_number,
                            'orgin_count': orderInfo.meal_all_number,
                            'original_price': shopDetail.mealFeePrice || 1
                        }];
                    }
                } else {
                    if (orderInfo.distribution_mode_id == 3 && shopDetail.isMealFee == 1) {
                        let mealFeeCount = lodash.sumBy(orderInfo.orderItems, function (o) {
                            return o.article_return == 'true' && !o.parent_id ? o.meal_fee_number : 0
                        });
                        let s1 = orderInfo.orderItems;

                        orderInfo.orderItems = [...orderInfo.orderItems, {
                            'article_return': "false",
                            'article_name': shopDetail.mealFeeName,
                            'count': -mealFeeCount,
                            'orgin_count': -mealFeeCount,
                            'original_price': shopDetail.mealFeePrice
                        }];
                        let refundAmount = (lodash.sumBy(s1, function (o) {
                            return o.refund_count * o.original_price;
                        })) + mealFeeCount * shopDetail.mealFeePrice;
                        let paymentAmount = 0;
                        let obj = [];
                        lodash.forEach(orderInfo.paymentss, function (val) {
                            paymentAmount += Math.abs(val.pay_value.toFixed(2));
                            obj.push(val);
                            if (paymentAmount.toFixed(2) == refundAmount.toFixed(2)) return false;
                        });
                        orderInfo.paymentItems = obj;
                    }
                }
                orderInfo.shopDetail = shopDetail;

                cb(null, orderInfo);

            }
        ], function (err, resultData) {

            if (err) {
                log(`数据问题总单打印失败`, `printUtil=>【打印总单--error】orderId：${orderId},totalType：${totalType},refund:${refund},${refund ? "orderItemArr:" + JSON.stringify(orderItemArr) : []},\n,${err.toString()}`);
                callback && callback(err);
            } else {
                if (resultData.parent_order_id && resultData.shopDetail.isOpenAddPrintTotal == 0 && resultData.shopDetail.allowAfterPay == 0) {
                    log(`加菜打印总单设置被关闭`, `【加菜打印总单未开启】`);
                    return callback()
                }

                var CUSTOMER_SATISFACTION = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION) || 0;
                let param = {};
                param.RESTAURANT_NAME = refund != 0 ? resultData.shopDetail.name : getNameInit(resultData.shopDetail.name, totalType);                   //店名
                param.RESTAURANT_ADDRESS = resultData.shopDetail.address;                //地址
                param.RESTAURANT_TEL = `${resultData.shopDetail.phone}`;                 //电话
                param.DISTRIBUTION_MODE = refund != 0 ? '退菜' : (resultData.distribution_mode_id == 1 ? resultData.parent_order_id ? '堂吃(加)' : '堂吃' : '外带');                //堂吃 or 外带
                param.TABLE_NUMBER = resultData.shopDetail.shopMode == 2 || resultData.shopDetail.shopMode == 7 ? resultData.ver_code : resultData.table_number;                              //桌号
                param.CUSTOMER_COUNT = (resultData.parentOrderInfo && resultData.parentOrderInfo.customer_count) || resultData.customer_count;    //就餐人数
                let orderNumber = ((resultData.parentOrderInfo && resultData.parentOrderInfo.order_number) || resultData.order_number || '999').toString();
                param.ORDER_NUMBER = orderNumber.length == 1 ? `00${orderNumber}` : orderNumber.length == 2 ? `0${orderNumber}` : orderNumber;      //订单号
                param.ORDER_ID = resultData.serial_number;                         //交易流水号
                param.BARCODE = resultData.serial_number.substring(8, 18);                         //条形码
                param.DATETIME = `${moment(+resultData.create_time).format('YYYY-MM-DD HH:mm:ss')}`;           //订单时间

                printerModel.getItemsInit(resultData.orderItems, resultData.shopDetail.printOutDetails, function (err, itemasResult) {
                    if (err) return callback && callback(err);
                    param.ITEMS = itemasResult.concat(refundServicePriceItem);
                    param.ARTICLE_COUNT = lodash.sum(lodash.map(param.ITEMS, 'ARTICLE_TOTAL'));
                    param.ORIGINAL_AMOUNT = lodash.sum(lodash.map(param.ITEMS, 'TOTAL')).toFixed(2);                  //原价
                    param.PAYMENT_AMOUNT = refund ? 0 : (resultData.amount_with_children ? (+resultData.amount_with_children).toFixed(2) : (+resultData.order_money).toFixed(2));                       //应付

                    param.REDUCTION_AMOUNT = refund ? 0 : (param.ORIGINAL_AMOUNT - param.PAYMENT_AMOUNT).toFixed(2);                 //折扣
                    printerModel.getPaymentItemsInit(resultData.paymentItems, function (err, paymentResult) {
                        if (err) return callback && callback(err);
                        param.PAYMENT_ITEMS = paymentResult;
                        param.CUSTOMER_SATISFACTION = "★★★★★☆☆☆☆☆".slice(5 - CUSTOMER_SATISFACTION, 10 - CUSTOMER_SATISFACTION);            //客户上次评分分数
                        param.CUSTOMER_SATISFACTION_DEGREE = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION_DEGREE) || 0;     //客户平均评分分数

                        param.CUSTOMER_PROPERTY = resultData.consumeInfo ? `${resultData.consumeInfo.CUSTOMER_STATUS == 1 ? "【VIP】" : ""} ${resultData.consumeInfo.CUSTOMER_PROPERTY}` : "-";                //客服余额
                        param.MEMO = resultData.remark;
                        param.WELCOME = resultData.shopDetail.orderWelcomeMessage;
                        printerModel.getTotalTemplate(param, function (data) {

                            if (resultData.printerInfo.length <= 0) {
                                log(`printLogs`, `printUtil=>【打印总单】：${orderId},未设置打印机！`);
                                return callback && callback(null, {msg: '未设置打印机！'});
                            } else {
                                let datas = [];

                                async.eachLimit(resultData.printerInfo, 1, function (item, ab) {
                                    if (item.print_type == 2) {
                                        if (totalType == 2 && item.bill_of_consumption != 1) {
                                            log(`小票打印机`, `【消费清单打印未开启】==>${item.ip}`);
                                            return ab();
                                        } else if (totalType == 3 && item.bill_of_account != 1) {
                                            log(`小票打印机`, `【结算清单打印未开启】==>${item.ip}`);
                                            return ab();
                                        }
                                    }

                                    param.PRINTERIP = item.ip;
                                    param.PRINTERPORT = item.port;
                                    if (resultData.shopDetail.shopMode == 2 || resultData.shopDetail.shopMode == 7) {
                                        if (resultData.shopDetail.isOpenUserSign == 0) {
                                            param.PRINTTEMPLATE = printTemplateModel.shopObj_not_user_info[resultData.shopDetail.brandId] ? printTemplateModel.shopObj_not_user_info[resultData.shopDetail.brandId] : `${printTemplateModel.REPORT}/${printTemplateModel.TOTAL_BARCODE_TEMPLATE_NOT_USER_INFO_48}`;
                                        } else {
                                            param.PRINTTEMPLATE = printTemplateModel.shopObj[resultData.shopDetail.brandId] ? printTemplateModel.shopObj[resultData.shopDetail.brandId] : `${printTemplateModel.REPORT}/${printTemplateModel.TOTAL_BARCODE_TEMPLATE_48}`;
                                        }
                                    } else {
                                        if (resultData.shopDetail.isOpenUserSign == 0) {
                                            param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.TOTAL_TEMPLATE_NOT_USER_INFO_48}`;
                                        } else {

                                            param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.TOTAL_TEMPLATE_48}`;
                                        }
                                    }

                                    printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, param.PRINTTEMPLATE, data, function (err, ben) {
                                        log(`总单打印最终执行==>`, `【打印总单${err ? "失败error==>" + err : "成功==>" + ben}】 订单ID：${orderId},流水号:${param.ORDER_ID},totalType：${totalType},refund:${refund},${refund ? "orderItemArr:" + JSON.stringify(orderItemArr) : []},\n${JSON.stringify(param)}`);
                                        datas.push(err ? err : ben);
                                        ab()
                                    });
                                }, function (err) {
                                    callback && callback(err, datas);
                                });
                            }
                        });
                    });                  //付款类型列表
                })  //菜品列表
            }
        });
    });

};

/**
 * 厨打
 * @param orderId           订单ID
 * @param kitchenType       0 正常   or  1 精简版
 * @param refund            0 不退菜   or  1 退菜
 * @param orderItemArr      退菜对象    orderItemArr:[ {id:"'df0a6deb982b4e57a894ce57f68211c4'",count:2}]
 * @param autoPrint         // 1; 自动打印 0 手动打印
 * @param callback
 */
printUtil.printKitchen = function (orderId, autoPrint = 0, kitchenType = 0, refund = 0, orderItemArr = [], callback) {

    if (typeof callback != 'function') {
        callback = function () {
        };
    }

    if (generalUtil.isEmpty(orderId)) return callback && callback("请输入订单ID");

    log('厨房打印第一步', `【发起厨房打印】【${autoPrint ? '自动打印' : '手动打印'} 】 orderId：${orderId},refund:${refund},${refund ? "orderItemArr:" + JSON.stringify(orderItemArr) : []}`);

    if (refund != 0) {
        if (typeof orderItemArr != 'object' || orderItemArr.length == 0) {
            return callback && callback("请输入退菜ID");
        } else {
            lodash.forEach(orderItemArr, function (val) {
                lodash.assign(val, {id: "'" + val.id + "'"});
            });
        }
    }

    async.waterfall([
        function (cb) { //关联订单信息
            orderModel.getReceiptsById(orderId, function (error, orderInfo) {
                if (error) return cb(error);
                if (refund == 0) {
                    orderModel.printByOrderId(orderId, orderInfo.distribution_mode_id, function (error, orderItems) {
                        if (error) return cb(error);
                        var orderItems = lodash.filter(orderItems, function (o) {
                            return o.orgin_count != o.refund_count;
                        });
                        printerModel.getArticleSort(orderItems, function (e) {
                            orderInfo.orderItems = e;
                            if (!orderInfo.parent_order_id) return cb(null, orderInfo);
                            // 如果存在 父订单，则 订单数量 显示 父订单的值
                            orderModel.getReceiptsById(orderInfo.parent_order_id, function (error, parentOrderInfo) {
                                if (error) return cb(error);
                                orderInfo.parentOrderInfo = parentOrderInfo;
                                cb(null, orderInfo);
                            })
                        });
                    });
                } else {
                    orderItemModel.printRefundByOrderItemId(orderItemArr, orderInfo.distribution_mode_id, function (error, orderItemsReslut) {
                        if (error) return cb(error);
                        let orderItems = [];
                        lodash.forEach(orderItemsReslut, function (val) {
                            let s1 = lodash.find(orderItemArr, function (o) {
                                return o.id == `'${val.id}'` || o.id == `'${val.parent_id}'`
                            });
                            lodash.assign(val, {count: s1.count});
                            orderItems.push(val);
                        });
                        printerModel.getArticleSort(orderItems, function (e) {
                            orderInfo.orderItems = e;
                            if (!orderInfo.parent_order_id) return cb(null, orderInfo);
                            // 如果存在 父订单，则 订单数量 显示 父订单的值
                            orderModel.getReceiptsById(orderInfo.parent_order_id, function (error, parentOrderInfo) {
                                orderInfo.parentOrderInfo = parentOrderInfo;
                                cb(null, orderInfo);
                            })
                        });
                    });
                }
            });
        },
        function (orderInfo, cb) { //设置店铺信息
            shopDetailModel.getShopDetailInfo(orderInfo.shop_detail_id, function (error, shopDetail) {
                if (error) return cb(error);
                orderInfo.shopDetail = shopDetail;
                cb(null, orderInfo);
            });
        },
        function (orderInfo, cb) { //关联打印机
            let results = [];
            let virtualResults = [];
            let recommendResults = [];
            let stickerResults = [];
            async.eachLimit(orderInfo.orderItems, 1, function (item, ab) {
                if (
                    (item.type != 4 && item.type != 6 && item.virtual_id && item.article_type == 1) ||
                    (item.type == 4 && orderInfo.shopDetail.printType != 0 && item.virtual_id && item.article_type == 1)
                ) {    //虚拟餐品
                    articleKitchenModel.getVirtualKitchenByVirtualId(item.virtual_id, orderInfo.distribution_mode_id, function (error, resBen) {
                        if (error) return ab(error);
                        if (resBen.length == 0) return ab();
                        async.eachLimit(resBen, 1, function (ben, ef) {
                            printerModel.getVirtualKitchenData(item, ben, orderInfo.shopDetail, virtualResults, function (data) {    //厨打不分
                                virtualResults = data;
                                return ef();
                            })
                        }, function (error) {
                            if (error) return ab(error);
                            return ab(null);
                        });
                    })
                } else if (item.type == 6) {         //推荐餐品
                    articleKitchenModel.getRecommendKitchenByRecommendId(item.recommend_id, orderInfo.distribution_mode_id, (error, resBen) => {
                        if (error) return ab(error);
                        if (resBen.length == 0) return ab();
                        async.eachLimit(resBen, 1, function (ben, ef) {
                            if (ben.recommend_print_type == 0) {
                                // articleKitchenModel.selectByArticleId(item.article_id, orderInfo.distribution_mode_id,  (error, resBen)=> {
                                //     if (error) return ab(error);
                                //
                                //     resBen
                                // });
                                return ef();
                            } else {
                                printerModel.getRecommendKitchenData(item, ben, orderInfo.shopDetail, recommendResults, function (data) {    //厨打不分
                                    recommendResults = data;
                                    return ef();
                                })
                            }
                        }, function (error) {
                            if (error) return ab(error);
                            return ab(null);
                        });
                    });
                } else {
                    articleKitchenModel.selectByArticleId(item.article_id, orderInfo.distribution_mode_id, function (error, resBen) {
                        if (error) return ab(error);
                        // orderInfo.shopDetail.splitKitchen = 1;  // 0厨打不分单 1厨打分单
                        // orderInfo.shopDetail.printType = 0;  // 套餐 0：整单出  1：分单出
                        if (resBen.length > 0) {
                            async.eachLimit(resBen, 1, function (ben, ef) {
                                if (+ben.ticket_type == 0 && +item.ticket_type != 1) {
                                    if (orderInfo.shopDetail.splitKitchen && !orderInfo.shopDetail.printType) {  //  厨打分单,套餐不分
                                        printerModel.getArticleSplitKitchenData(item, ben, orderInfo.shopDetail, results, function (data) {
                                            results = data;
                                            return ef();
                                        })
                                    } else if (orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打分单,套餐分=
                                        printerModel.getAllSplitKitchenData(item, ben, orderInfo.shopDetail, results, function (data) {
                                            results = data;
                                            return ef();
                                        })
                                    } else if (!orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打不分单,套餐分=
                                        printerModel.getNotDivideKitchenNotMealData(item, ben, orderInfo.shopDetail, results, function (data) {
                                            results = data;
                                            return ef();
                                        })
                                    } else {
                                        printerModel.getNotDivideKitchenData(item, ben, orderInfo.shopDetail, results, function (data) {    //厨打不分,套餐不分
                                            results = data;
                                            return ef();
                                        })
                                    }
                                } else {
                                    if (orderInfo.shopDetail.splitKitchen && !orderInfo.shopDetail.printType) {  //  厨打分单,套餐不分
                                        printerModel.getStickerArticleSplitKitchenData(item, ben, orderInfo.shopDetail, stickerResults, function (data) {
                                            stickerResults = data;
                                            return ef();
                                        })
                                    } else if (orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打分单,套餐分=
                                        printerModel.getStickerAllSplitKitchenData(item, orderInfo.shopDetail, stickerResults, orderInfo.orderItems, ben, function (data) {
                                            stickerResults = data;
                                            return ef();
                                        })
                                    } else if (!orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打不分单,套餐分=
                                        printerModel.getStickerNotDivideKitchenNotMealData(item, orderInfo.shopDetail, stickerResults, orderInfo.orderItems, ben, function (data) {
                                            stickerResults = data;
                                            return ef();
                                        })
                                    } else {
                                        printerModel.getStickerNotDivideKitchenData(item, ben, orderInfo.shopDetail, stickerResults, function (data) {    //厨打不分,套餐不分
                                            stickerResults = data;
                                            return ef();
                                        })
                                    }
                                }
                            }, function (error) {
                                if (error) return ab(error);
                                return ab(null);
                            });
                        } else {
                            if (+item.ticket_type == 1) {
                                printerModel.getStickerAllSplitKitchenData(item, orderInfo.shopDetail, stickerResults, orderInfo.orderItems, {}, function (data) {
                                    stickerResults = data;
                                    return ab();
                                })
                            } else {
                                if (orderInfo.shopDetail.splitKitchen && !orderInfo.shopDetail.printType) {  //  厨打分单,套餐不分
                                    printerModel.getArticleSplitKitchenData(item, {}, orderInfo.shopDetail, results, function (data) {
                                        results = data;
                                        return ab();
                                    })
                                } else if (orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打分单,套餐分=
                                    printerModel.getAllSplitKitchenData(item, {}, orderInfo.shopDetail, results, function (data) {
                                        results = data;
                                        return ab();
                                    })
                                } else if (!orderInfo.shopDetail.splitKitchen && orderInfo.shopDetail.printType) { //  厨打不分单,套餐分=
                                    printerModel.getNotDivideKitchenNotMealData(item, {}, orderInfo.shopDetail, results, function (data) {
                                        results = data;
                                        return ab();
                                    })
                                } else {
                                    printerModel.getNotDivideKitchenData(item, {}, orderInfo.shopDetail, results, function (data) {    //厨打不分,套餐不分
                                        results = data;
                                        return ab();
                                    })
                                }
                            }
                        }
                    });
                }
            }, function (error) {
                if (error) {
                    return cb(error);
                } else {
                    orderInfo.kitchenPrintList = results.concat(virtualResults, recommendResults);
                    orderInfo.stickerKitchenPrintList = stickerResults;
                    cb(null, orderInfo);
                }
            });
        },
        // function (orderInfo, cb) { //查询用户信息
        //     if (!orderInfo.customer_id || orderInfo.customer_id == 0 || orderInfo.customer_id == 'undefined' || orderInfo.shopDetail.isOpenUserSign == 0) return cb(null, orderInfo);
        //     httpClient.network(function () {
        //         httpClient.post("getCustomerConsumeInfo", {customerId: orderInfo.customer_id}, function (consumeInfo) {
        //             orderInfo.consumeInfo = consumeInfo;
        //             cb(null, orderInfo);
        //         }, function () {
        //             cb(null, orderInfo);
        //         });
        //     }, function () {
        //         cb(null, orderInfo);
        //     })
        // }
    ], function (err, resultData) {
        if (err) {
             callback && callback(err.toString());
        } else {
            let param = {};
            let CUSTOMER_SATISFACTION = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION) || 0;
            param.RESTAURANT_TEL = `${resultData.shopDetail.phone}`;      //电话
            param.DISTRIBUTION_MODE = refund != 0 ? '退菜' : (resultData.distribution_mode_id == 1 ? resultData.parent_order_id ? '堂吃(加)' : '堂吃' : '外带');
            param.TABLE_NUMBER = resultData.shopDetail == 2 || resultData.shopDetail.shopMode == 7 ? resultData.ver_code : resultData.table_number;
            let orderNumber = ((resultData.parentOrderInfo && resultData.parentOrderInfo.order_number) || resultData.order_number || '999').toString();//订单号
            param.ORDER_NUMBER = orderNumber.length == 1 ? `00${orderNumber}` : orderNumber.length == 2 ? `0${orderNumber}` : orderNumber;      //订单号//桌号
            param.ORDER_ID = resultData.serial_number;                         //交易流水号
            param.BARCODE = resultData.serial_number.substring(8, 18);                         //条形码
            param.DATETIME = `${moment(+resultData.create_time).format('YYYY-MM-DD HH:mm:ss')}`;           //订单时间
            param.ORIGINAL_AMOUNT = resultData.original_amount;                  //原价
            param.CUSTOMER_SATISFACTION = "★★★★★☆☆☆☆☆".slice(5 - CUSTOMER_SATISFACTION, 10 - CUSTOMER_SATISFACTION);            //客户上次评分分数           //客户上次评分分数
            param.CUSTOMER_SATISFACTION_DEGREE = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION_DEGREE) || 0;     //客户平均评分分数
            param.CUSTOMER_PROPERTY = resultData.consumeInfo ? `${resultData.consumeInfo.CUSTOMER_STATUS == 1 ? "【VIP】" : ""} ${resultData.consumeInfo.CUSTOMER_PROPERTY}` : "-";                //客服余额
            param.MEMO = resultData.remark || '-';                             //备注
            // 打印控制
            printerModel.getTotalTemplate(param, function (data) {
                async.parallel({
                    kitchenPrintList: function (done) {
                        let prList = [];
                        if (resultData.kitchenPrintList.length == 0) return done(null, prList);
                        async.eachLimit(resultData.kitchenPrintList, 1, function (item, ab) {
                            if (!item.ip) return ab();
                            param.PRINTERIP = item.ip;
                            param.PRINTERPORT = item.port;
                            if (resultData.shopDetail.shopMode == 2 || resultData.shopDetail.shopMode == 7) {
                                if (!kitchenType) {
                                    if (resultData.shopDetail.isOpenUserSign == 0) {
                                        param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_BARCODE_TEMPLATE_NOT_USER_INFO_48}`;
                                    } else {
                                        param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_BARCODE_TEMPLATE_48}`;
                                    }
                                } else {
                                    param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_LRF_BARCODE_TEMPLATE_48}`;
                                }
                            } else {
                                if (!kitchenType) {
                                    if (resultData.shopDetail.isOpenUserSign == 0) {
                                        param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_TEMPLATE_NOT_USER_INFO_48}`;
                                    } else {
                                        param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_TEMPLATE_48}`;
                                    }

                                } else {
                                    param.PRINTTEMPLATE = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_LRF_TEMPLATE_48}`;
                                }
                            }
                            data.ITEMS = item.ITEMS;
                            printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, param.PRINTTEMPLATE, data, function (err, ben) {
                                log(`厨房打印==>`, `【小票打印厨打${err ? "失败error==>" + err : "成功==>" + ben}】 订单ID：${orderId},流水号:${param.ORDER_ID},『${JSON.stringify(param)}』\n【打印数据】:${JSON.stringify(data.ITEMS)}`);
                                err ? prList.push(err) : prList.push(ben);
                                ab()
                            });
                        }, function (err) {
                            if (err) return done(err.toString());
                            return done(null, prList)

                        });
                    },
                    stickerKitchenPrintList: function (done) {
                        let lbList = [];
                        if (resultData.stickerKitchenPrintList.length == 0) return done(null, lbList);
                        let num = 1;
                        let numTotal = resultData.stickerKitchenPrintList.length;
                        async.eachLimit(resultData.stickerKitchenPrintList, 1, function (item, ab) {
                            if (!item.ip) return ab();
                            let lbObj = {
                                ORDER_ID: resultData.serial_number,
                                ip: item.ip,
                                port: item.port,
                                CODE: `${resultData.shopDetail.shopMode == 2 || resultData.shopDetail.shopMode == 7 ? resultData.ver_code : resultData.table_number}`,
                                ARTICLE_NAME: item.ARTICLE_NAME,
                                ARTICLE_COUNT: item.ARTICLE_COUNT,
                                ARTICLE_PRICE: (item.ARTICLE_PRICE * item.ARTICLE_COUNT).toFixed(2),
                                SPEC: item.SPEC,
                                RESTAURANT_NAME: `${resultData.shopDetail.name}`,
                                ARTICLE_NUMBER: `${num}/${numTotal}`,
                                DISTRIBUTION_MODE: refund != 0 ? '退菜' : (resultData.distribution_mode_id == 1 ? resultData.parent_order_id ? '堂吃(加)' : '堂吃' : '外带'),
                                CUSTOMER_TEL: `${resultData.shopDetail.phone}`,
                                PRINTTEMPLATE: `./report/restaurant_label.xml`,
                                DATETIME: `${moment(+resultData.create_time).format('YYYY-MM-DD HH:mm:ss')}`
                            };
                            printerServiceModel.stickersPrint(lbObj.ip, lbObj.port, lbObj.PRINTTEMPLATE, lbObj, function (err, ben) {
                                log(`贴纸打印==>`, `【贴纸打印厨打${err ? "失败error==>" + err : "成功==>" + ben}】：『${orderId}』, 『refund:${refund}』,『${refund ? "orderItemArr:" + JSON.stringify(orderItemArr) : []}』,\n 『${JSON.stringify(lbObj)}』`);
                                err ? lbList.push(err) : lbList.push(ben);
                                num++;
                                ab()
                            })
                        }, function (err) {
                            if (err) return done(err.toString());
                            return done(null, lbList)
                        });
                    },
                }, function (err, results) {
                    callback && callback(err, results);
                });
            });

            delete printKitchenExecuteNumber[orderId];
        }
    });
};

/**
 * 打印第三方平台外卖总单
 * @param platformOrderId
 * @param callback
 */
printUtil.printPlatformTotal = function (platformOrderId, callback) {
    let conditions = {
        platformOrderId: platformOrderId
    };
    async.parallel({
        printer: function (cb) {
            let conditions = {
                printType: 2,
                range: 0,
                ticketType: 0,
                supportWaimai: 1
            };

            printer.getPrinterByPrintType(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data);
            });
        },
        platformOrder: function (cb) {
            platformOrder.getPlatformOrderByPlatformOrderId(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data);
            });
        },
        platformOrderDetail: function (cb) {
            platformOrder.getPlatformOrderDetailByPlatformOrderId(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data);
            });
        },
        shopDetailModel: function (cb) {
            shopDetailModel.getShopDetailInfo(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data)
            });
        }
    }, function (err, results) {
        if (err) {
            log(`printLogs`, `printPlatformTotal =>${results.platformOrder.type == 1 ? "【饿了么外卖】" : "【美团外卖】"}总单-失败：${platformOrderId},\n,${err.toString()}`);
            return callback && callback(err.toString());
        }
        if (!results.printer.length) {
            log(`printLogs`, `printPlatformTotal => 没有找到打印机：${platformOrderId}`);
            return callback && callback("没有找到打印机");
        }
        if (!results.platformOrder) {
            log(`printLogs`, `printPlatformTotal => 没有找到外卖总订单数据：${platformOrderId}`);
            return callback && callback("没有找到外卖总订单数据");
        }
        if (!results.platformOrderDetail.length) {
            log(`printLogs`, `printPlatformTotal => 没有找到外卖订单详情数据：${platformOrderId}`);
            return callback && callback("没有找到外卖订单详情数据");
        }

        let param = {};
        param.RESTAURANT_NAME = results.shopDetailModel.name;              //店名
        param.PLATFORM_NAME = results.platformOrder.type == 1 ? "饿了么外卖" : "美团外卖";              //平台名称
        param.PAYTYPE = results.platformOrder.payType;
        param.RESTAURANT_ADDRESS = results.platformOrder.address;
        let orderNumber = results.platformOrder.orderNumber.toString() || "001";

        param.ORDER_NUMBER = orderNumber.length == 1 ? `00${orderNumber}` : orderNumber.length == 2 ? `0${orderNumber}` : orderNumber;     //001
        param.ORDER_ID = results.platformOrder.platformOrderId;   //流水号
        param.DATETIME = moment(+results.platformOrder.orderCreateTime).format('YYYY-MM-DD HH:mm:ss');  //日期
        param.MEMO = results.platformOrder.remark;                       //日期
        param.ITEMS = [];
        param.CUSTOMER_ADDRESS = results.platformOrder.address;
        param.USER_NAME = results.platformOrder.name;
        param.USER_MOBILE = results.platformOrder.phone;
        param.ARTICLE_COUNT = +lodash.sumBy(results.platformOrderDetail, 'quantity');
        param.ORIGINAL_AMOUNT = results.platformOrder.originalPrice.toFixed(2);
        param.PAYMENT_AMOUNT = results.platformOrder.totalPrice.toFixed(2);
        param.REDUCTION_AMOUNT = (param.ORIGINAL_AMOUNT - param.PAYMENT_AMOUNT).toFixed(2);
        lodash.forEach(results.platformOrderDetail, function (val) {
            let obj = {
                ARTICLE_NAME: val.showName,
                SUBTOTAL: (+val.price * +val.quantity).toFixed(2),
                ARTICLE_COUNT: val.quantity
            };
            param.ITEMS.push(obj)
        });
        let datas = [];
        async.eachLimit(results.printer, 1, function (item, ab) {
            param.PRINTERIP = item.ip;
            param.PRINTERPORT = item.port;
            printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, `${printTemplateModel.REPORT}/${printTemplateModel.PLATFORM_TOTAL_TEMPLATE_48}`, param, function (err, ben) {
                log(`printLogs`, ` printPlatformTotal  =>${results.platformOrder.type == 1 ? "【饿了么外卖】" : "【美团外卖】"}总单：${platformOrderId},\n,${JSON.stringify(param)}`);
                datas.push(err ? err : ben);
                ab()
            });
        }, function (err) {
            callback && callback(err || null, datas);
        });
    });
};

/**
 * 打印第三方外卖平台的厨打
 * @param msg
 * @param session
 * @param next
 */
printUtil.printPlatformKitchen = function (platformOrderId, callback) {

    let conditions = {
        platformOrderId: platformOrderId
    };

    async.parallel({
        platformOrder: function (cb) {
            platformOrder.getPlatformOrderByPlatformOrderId(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data)
            });
        },
        platformOrderDetail: function (cb) {
            platformOrder.getPlatformOrderDetailAndArticleByPlatformOrderId(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data)
            });
        },
        shopDetailModel: function (cb) {
            shopDetailModel.getShopDetailInfo(conditions, function (err, data) {
                if (err) return cb(err);
                cb(null, data)
            });
        },
    }, function (err, results) {
        if (err) {
            return callback && callback(err);
        }
        if (!results.platformOrder) {
            log(`printLogs`, `printPlatformKitchen => 没有找到外卖总订单数据：${platformOrderId}`);
            return callback && callback("没有找到外卖总订单数据");
        }
        if (!results.platformOrderDetail.length) {
            log(`printLogs`, `printPlatformKitchen => 没有找到外卖订单详情数据：${platformOrderId}`);
            return callback && callback("没有找到外卖订单详情数据");
        }

        let param = {};
        param.PLATFORM_NAME = results.platformOrder.type == 1 ? "饿了么外卖" : "美团外卖";              //平台名称
        let orderNumber = results.platformOrder.orderNumber.toString();
        param.ORDER_NUMBER = orderNumber.length == 1 ? `00${orderNumber}` : orderNumber.length == 2 ? `0${orderNumber}` : orderNumber;     //001
        param.ORDER_ID = results.platformOrder.platformOrderId;   //流水号
        param.DATETIME = moment(+results.platformOrder.orderCreateTime).format('YYYY-MM-DD HH:mm:ss');  //日期
        param.MEMO = results.platformOrder.remark;                       //日期                   //日期
        //厨打是否拆分  0  = 不拆分 1 拆分
        param.ITEMS = [];
        if (results.shopDetailModel.splitKitchen) {
            let datas = [];
            let numTotal = lodash.sumBy(results.platformOrderDetail, function (o) {
                return o.ticket_type == 1 ? o.quantity : 0;
            });
            let num = 1;
            async.eachLimit(results.platformOrderDetail, 1, function (item, ab) {
                let i = 0;
                async.whilst(
                    function () {
                        return i < +item.quantity;
                    },
                    function (ef) {
                        if (item.ticket_type == 0) {
                            param.ITEMS = [{'ARTICLE_NAME': item.show_name, 'ARTICLE_COUNT': 1}];
                            param.PRINTERIP = item.ip;
                            param.PRINTERPORT = item.port;
                            printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, `${printTemplateModel.REPORT}/${printTemplateModel.PLATFORM_KITCHEN_TICKET_TEMPLATE_48}`, param, function (err, ben) {
                                datas.push(err ? err : ben);
                                i++;
                                if (i == +item.quantity) return ab();
                                setTimeout(ef, 0);
                            })
                        } else {
                            let lbObj = {
                                ip: item.ip,
                                port: item.port,
                                CODE: `${item.phone.substring(8, 12)}`,
                                ARTICLE_NAME: item.show_name,
                                ARTICLE_COUNT: 1,
                                ARTICLE_PRICE: `￥${item.price.toFixed(2)}`,
                                SPEC: '',
                                BRAND_NAME: `${results.shopDetailModel.brandName}`,
                                RESTAURANT_NAME: `${results.shopDetailModel.name}`,
                                ARTICLE_NUMBER: `${num}/${numTotal}`,
                                DISTRIBUTION_MODE: results.platformOrder.type == 1 ? "饿了么" : "美团",
                                CUSTOMER_TEL: `${results.shopDetailModel.phone}`,
                                PRINTTEMPLATE: `${printTemplateModel.REPORT}/${printTemplateModel.RESTAURANT_PLATFORM_LABEL}`,
                                DATETIME: `${moment(+item.order_create_time).format('YYYY-MM-DD HH:mm:ss')}`
                            };
                            printerServiceModel.stickersPrint(lbObj.ip, lbObj.port, lbObj.PRINTTEMPLATE, lbObj, function (err, ben) {
                                fileUtil.appendFile(`printLogs`, `${msg.__route__}=>${results.platformOrder.type == 1 ? "【饿了么外卖】" : "【美团外卖】" }贴纸厨打：${JSON.stringify(param)}`);
                                datas.push(err ? err : ben);
                                i++;
                                num++;
                                if (i == +item.quantity) return ab();
                                setTimeout(ef, 0);
                            });
                        }
                    },
                    function (err) {
                        return ab(err)
                    }
                );
            }, function (err) {
                callback && callback(err || null, datas);
            });
        } else {
            let datas = [];
            let numTotal = (lodash.filter(results.platformOrderDetail, function (o) {
                return o.ticket_type == 1;
            })).length;
            let num = 1;
            async.eachLimit(results.platformOrderDetail, 1, function (item, ab) {

                if (item.ticket_type == 0) {
                    param.ITEMS = [{'ARTICLE_NAME': item.show_name, 'ARTICLE_COUNT': item.quantity}];
                    param.PRINTERIP = item.ip;
                    param.PRINTERPORT = item.port;
                    printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, `${printTemplateModel.REPORT}/${printTemplateModel.PLATFORM_KITCHEN_TICKET_TEMPLATE_48}`, param, function (err, ben) {
                        datas.push(err ? err : ben);
                        ab()
                    })
                } else {

                    let lbObj = {
                        ip: item.ip,
                        port: item.port,
                        CODE: `${item.phone.substring(8, 12)}`,
                        ARTICLE_NAME: item.show_name,
                        ARTICLE_COUNT: item.quantity,
                        ARTICLE_PRICE: `￥${item.price.toFixed(2)}`,
                        SPEC: '',
                        BRAND_NAME: `${results.shopDetailModel.brandName}`,
                        RESTAURANT_NAME: `${results.shopDetailModel.name}`,
                        ARTICLE_NUMBER: `${num}/${numTotal}`,
                        DISTRIBUTION_MODE: results.platformOrder.type == 1 ? "饿了么" : "美团",
                        CUSTOMER_TEL: `${results.shopDetailModel.phone}`,
                        PRINTTEMPLATE: `${printTemplateModel.REPORT}/${printTemplateModel.RESTAURANT_PLATFORM_LABEL}`,
                        DATETIME: `${moment(+item.order_create_time).format('YYYY-MM-DD HH:mm:ss')}`
                    };
                    printerServiceModel.stickersPrint(lbObj.ip, lbObj.port, lbObj.PRINTTEMPLATE, lbObj, function (err, ben) {
                        err ? datas.push(err) : datas.push(ben);
                        num++;
                        ab()
                    });
                }

            }, function (err) {
                callback && callback(err || null, datas);
            });
        }
    });
};


let getNameInit = function (name, totalType) {
    if (totalType == 2) {
        return name + '\n（消费清单）';
    } else if (totalType == 3) {
        return name + '\n（结账清单）';
    } else {
        return name;
    }
};


/**
 *  日结小票
 * @param dates
 * @param callback
 */
printUtil.getDailyReportTemplate = (dates, callback) => {
    let businessData = {};
    let item = {};
    async.waterfall([
        function (cb) {
            printerModel.getPrintIP(function (error, printerInfo) {
                if (error || printerInfo.length == 0) return cb(error || "未设置打印机！");
                item.printerInfo = [];
                lodash.forEach(printerInfo, function (value) {
                    let obj = {
                        PRINTERIP: value.ip,
                        PRINTERPORT: value.port
                    };
                    item.printerInfo.push(obj);
                });
                cb();
            })
        },
        function (cb) {
            orderModel.getOrderListByDates(dates, function (error, orderList) {
                if (error) return cb(error);
                item.orderIdArr = [];
                let count = 0
                if (orderList.length > 0) {
                    orderList.map(item => {
                        if (item.grant_money > 0) {
                            count++
                        }
                    })
                    lodash.forEach(orderList, function (value) {
                        item.orderIdArr.push(`'${value.id}'`);
                    });
                    let obj = {
                        DATE: dates,    // 日期
                        TOTAL_AMOUNT: lodash.sumBy(orderList, function (o) {
                            return o.amount_with_children ? o.amount_with_children + (+o.order_pos_discount_money || +o.member_discount_money || 0) : o.order_money + (+o.order_pos_discount_money || +o.member_discount_money || 0);
                        }).toFixed(2), // 订单粉丝总额
                        ORDER_AMOUNT: orderList.length,                                           // 订单总数
                        ORDER_AVERAGE:
                            (lodash.sumBy(orderList, function (o) {
                                return o.amount_with_children ?
                                    o.grant_money + o.amount_with_children + (+o.order_pos_discount_money || +o.member_discount_money || 0)
                                    : o.grant_money + o.order_money + (+o.order_pos_discount_money || +o.member_discount_money || 0);
                            })
                                .toFixed(2) / orderList.length).toFixed(2),        // 订单均额
                        CUSTOMER_AMOUNT: lodash.sumBy(orderList, 'customer_count'),        // 就餐人数
                        GRANT_AMOUNT: lodash.sumBy(orderList, function (o) {
                            return o.grant_money
                        }),
                        GRANT_TOTAL: count
                    };
                    item.orderList = obj;
                } else {
                    item.orderList = {
                        DATE: dates,
                        TOTAL_AMOUNT: 0,
                        ORDER_AMOUNT: 0,
                        ORDER_AVERAGE: 0,
                        CUSTOMER_AMOUNT: 0,
                        GRANT_AMOUNT: 0,
                        GRANT_TOTAL: 0
                    }
                }
                cb(null, orderList);
            })
        },
        function (orderList, cb) {
            orderModel.getOrderAllByDates(dates, orderList, function (error, orderAll) {
                if (error) return cb(error);
                item.orderIdAll = [];
                item.newOrderIdAll = [];
                if (orderList.length > 0) {
                    item.orderList.TOTAL_AMOUNT = lodash.sumBy(orderAll, function (o) {
                        return o.order_money + +(+o.order_pos_discount_money) + (+o.member_discount_money) + (+o.erase_money) + Number(o.grant_money)
                    }).toFixed(2), // 订单粉丝总额
                        item.orderList.ORDER_AVERAGE = (item.orderList.TOTAL_AMOUNT / item.orderList.ORDER_AMOUNT).toFixed(2);
                    lodash.forEach(orderAll, function (value) {
                        item.orderIdAll.push(`'${value.id}'`);
                        item.newOrderIdAll.push(`${value.id}`);
                    });
                    orderModel.getOrderPaymentListById(item.orderIdAll, function (error, orderPaymentList) {
                        if (error) return cb(error);
                        orderModel.getRefundPaymentListById(item.orderIdArr, (err, orderRefundPayment) => {
                            if (error) return cb(error);
                            let obj = {
                                INCOME_AMOUNT: 0,  //实收
                                INCOME_ITEMS: [],
                                DISCOUNT_AMOUNT: 0, //折扣
                                DISCOUNT_ITEMS: [], //折扣list
                                CANCELED_ORDER_AMOUNT: 0,   //退款金额
                                REFUNDS_ITEMS: []   //退款list
                            };

                            let temp = {
                                incomeAmount: 0,  // 实收总额
                                incomeItems: {},  // 实收 List
                                discountAmount: 0, //折扣总额
                                discountItems: {}, //折扣list
                                canceledOrderAmount: 0,//退款金额总额
                                refundsItems: {},   //退款list
                                posAndMemberDiscountItems: {},
                                underline: {
                                    1: 0,
                                    10: 0
                                }
                            };
                            lodash.forEach(orderPaymentList, function (value) {
                                if ([2, 3, 7, 8, 17, 26, 28, 11].indexOf(value.payment_mode_id) != -1) { //折扣
                                    obj.DISCOUNT_AMOUNT += +(value.pay_value).toFixed(2);
                                    let ITEMS = {
                                        PAYMENT_MODE: PayMode.getPayModeName(value.payment_mode_id),
                                        SUBTOTAL: value.pay_value.toFixed(2)
                                    };
                                    obj.DISCOUNT_ITEMS.push(ITEMS);
                                } else {
                                    obj.INCOME_AMOUNT += +(value.pay_value).toFixed(2);
                                    let ITEMS = {
                                        PAYMENT_MODE: PayMode.getPayModeName(value.payment_mode_id),
                                        SUBTOTAL: value.pay_value.toFixed(2)
                                    };
                                    obj.INCOME_ITEMS.push(ITEMS);
                                }
                            });

                            let grant = {
                                PAYMENT_MODE: '赠菜金额',
                                SUBTOTAL: Number(item.orderList.GRANT_AMOUNT).toFixed(2)
                            }


                            obj.DISCOUNT_AMOUNT = (Number(obj.DISCOUNT_AMOUNT) + Number(item.orderList.GRANT_AMOUNT)).toFixed(2);
                            obj.DISCOUNT_ITEMS.push(grant)


                            //====================================  新增部分开始 ============================
                            let refundMap = {}
                            orderRefundPayment = orderRefundPayment || [];

                            for (let i = 0; i < orderRefundPayment.length; i++) {
                                let ite = orderRefundPayment[i]
                                if ([1, 10].indexOf(ite.payment_mode_id) != -1 && ite.pay_value > 0 && !ite.result_data) { // 线下支付的金额
                                    obj.underline[ite.payment_mode_id] = obj.underline[ite.payment_mode_id] + ite.pay_value;
                                }

                                if (orderRefundPayment[i].payment_mode_id == 19) {
                                    let refundItem = orderRefundPayment[i];
                                    for (let j = 0; j < orderRefundPayment.length; j++) {
                                        let tempItem = orderRefundPayment[j]
                                        refundMap[tempItem.payment_mode_id] = refundMap[tempItem.payment_mode_id] || 0
                                        if (refundItem.refund_source_id == tempItem.id) {
                                            let rst = refundMap[tempItem.payment_mode_id]
                                            refundMap[tempItem.payment_mode_id] = rst + refundItem.pay_value;
                                        }
                                    }
                                }
                                if (orderRefundPayment[i].payment_mode_id == 12 && orderRefundPayment[i].pay_value < 0) {
                                    temp.refundsItems[12] = (Number(temp.refundsItems[12] || 0) + Number(Math.abs(orderRefundPayment[i].pay_value))).toFixed(2);
                                    temp.canceledOrderAmount = (Number(temp.canceledOrderAmount) + Number(Math.abs(orderRefundPayment[i].pay_value))).toFixed(2);
                                }
                            }
                            lodash.forEach(orderPaymentList, function (value) {
                                if ([2, 3, 7, 8, 17, 22, 24, 26, 28].indexOf(value.payment_mode_id) != -1) { //折扣

                                    temp.discountAmount = (Number(temp.discountAmount) + Number(value.pay_value)).toFixed(2);
                                    temp.discountItems[value.payment_mode_id] = Number(value.pay_value).toFixed(2);
                                } else if ([11, 19, 25].indexOf(value.payment_mode_id) != -1) {   //退款
                                    temp.canceledOrderAmount = (Number(temp.canceledOrderAmount) + Math.abs(Number(value.pay_value))).toFixed(2);
                                    temp.refundsItems[value.payment_mode_id] = Math.abs(Number(value.pay_value).toFixed(2));
                                } else {
                                    temp.incomeItems[value.payment_mode_id] = Number(value.pay_value).toFixed(2);
                                }
                            });


                            for (let key in temp.incomeItems) {
                                if ([1, 2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 15, 20, 21].indexOf(Number(key) == -1)) { // 除了这些全之外部都是退现金的
                                    let rs = temp.incomeItems[key], dst = Math.abs(refundMap[key]) || 0
                                    temp.incomeItems[key] = Number(rs - dst).toFixed(2)
                                    temp.incomeAmount = Number(Number(temp.incomeAmount) + Number(temp.incomeItems[key])).toFixed(2)
                                }
                            }

                            lodash.forEach(orderRefundPayment, function (item) {
                                if (item.pay_value < 0 && [1, 10].indexOf(item.payment_mode_id) !== -1 && !item.result_data) {
                                    let tempValue = temp.underline[item.payment_mode_id] - Math.abs(item.pay_value);
                                    temp.underline[item.payment_mode_id] = tempValue
                                }
                            });
                            temp.incomeItems[1] = Number(Number(temp.incomeItems[1] || 0) - Number(temp.underline[1] || 0)).toFixed(2);
                            temp.incomeItems[10] = Number(Number(temp.incomeItems[10] || 0) - Number(temp.underline[10] || 0)).toFixed(2);
                            businessData = {
                                INCOME_AMOUNT: 0,
                                INCOME_List: [],
                                REFUNDS_ITEMS: [],
                                CANCELED_ORDER_AMOUNT: temp.canceledOrderAmount,
                                discountAmount: temp.discountAmount
                            }

                            businessData.INCOME_AMOUNT = Number(temp.incomeAmount).toFixed(2);
                            businessData.INCOME_ITEMS = []
                            for (let key in temp.incomeItems) {
                                let item = Number(temp.incomeItems[key]).toFixed(2);
                                businessData.INCOME_ITEMS.push({
                                    PAYMENT_MODE: PayMode.getPayModeName(Number(key)),
                                    SUBTOTAL: item
                                })
                            }

                            for (let key in temp.refundsItems) {
                                let item = Number(temp.refundsItems[key]).toFixed(2);
                                businessData.REFUNDS_ITEMS.push({
                                    PAYMENT_MODE: RefundOrderPaymentType.getPaymentNameById(Number(key)),
                                    SUBTOTAL: item
                                })
                            }
                            for (let key in temp.underline) {
                                let item = Number(temp.underline[key]).toFixed(2);
                                businessData.INCOME_ITEMS.push({
                                    PAYMENT_MODE: Number(key) == 1 ? "线下微信支付" : "线下支付宝支付",
                                    SUBTOTAL: item
                                })
                            }
                            //====================================  新增部分优化 ============================
                            let conditions = {
                                accountingTime: `${dates}`,
                                orderState: ['2', '10']
                            };
                            orderModel.getDayOrder(conditions, function (err, membersAndPosDiscount) {
                                if (err) return cb(err);
                                obj.DISCOUNT_AMOUNT = Number(obj.DISCOUNT_AMOUNT)
                                if (lodash.sumBy(membersAndPosDiscount, (o) => {
                                        return +o.orderPosDiscountMoney + (+o.eraseMoney) + (+o.exemptionMoney)
                                    }) > 0) {
                                    obj.DISCOUNT_AMOUNT += lodash.sumBy(membersAndPosDiscount, (o) => {
                                        return +o.orderPosDiscountMoney + (+o.eraseMoney)
                                    });
                                    obj.DISCOUNT_ITEMS.push({
                                        PAYMENT_MODE: 'POS端折扣',
                                        SUBTOTAL: (lodash.sumBy(membersAndPosDiscount, (o) => {
                                            return +o.orderPosDiscountMoney + (+o.eraseMoney)
                                        })).toFixed(2).toString()
                                    });
                                }
                                if (lodash.sumBy(membersAndPosDiscount, (o) => {
                                        return +o.memberDiscountMoney
                                    }) > 0) {
                                    obj.DISCOUNT_AMOUNT += lodash.sumBy(membersAndPosDiscount, (o) => {
                                        return +o.orderPosDiscountMoney
                                    });
                                    obj.DISCOUNT_ITEMS.push({
                                        PAYMENT_MODE: '会员折扣',
                                        SUBTOTAL: (lodash.sumBy(membersAndPosDiscount, (o) => {
                                            return +o.memberDiscountMoney
                                        })).toFixed(2).toString()
                                    });
                                }
                                console.log(`-----------(Number(obj.DISCOUNT_AMOUNT)---------`, Number(obj.DISCOUNT_AMOUNT))
                                item.orderPaymentList = obj;
                                cb(null, orderList);
                            });
                        })
                    })
                } else {
                    item.orderPaymentList = {
                        INCOME_AMOUNT: 0,  //实收
                        INCOME_ITEMS: [],
                        DISCOUNT_AMOUNT: 0, //折扣
                        DISCOUNT_ITEMS: [], //折扣list
                        CANCELED_ORDER_AMOUNT: 0,   //退款金额
                        REFUNDS_ITEMS: []   //退款list
                    };
                    cb(null, orderList);
                }
            });
        },
        function (orderList, cb) {  //充值列表

            cb(null, orderList);

            // httpClient.network( () =>{
            //     httpClient.post("getShopChargeOrder", { date: dates }, function (chargeOrder) {
            //         let obj = {
            //             STORED_VALUE_COUNT: chargeOrder.length || 0,    //充值单数
            //             SALED_PRODUCT_AMOUNT: lodash.sumBy(chargeOrder, `chargeMoney`) || 0,    //充值总金额
            //             STORED_VALUE_ITEMS: []                                             //充值list
            //         };
            //         lodash.forEach(chargeOrder,  (value)=> {
            //             obj.STORED_VALUE_ITEMS.push({
            //                 "TEL": value.telephone,
            //                 "SUBTOTAL": value.chargeMoney
            //             })
            //         });
            //         item.chargeList = obj;
            //         cb(null, orderList);
            //     }, function () {
            //         cb(null, orderList);
            //     });
            // },  ()=> {
            //     cb(null, orderList);
            // })
        },
        function (orderList, cb) {  //菜品销量
            orderItemModel.getOrderItemListById(item.orderIdAll, function (error, orderItemList) {
                if (error) return cb(error);
                let obj = {
                    SALED_PRODUCT_AMOUNT: 0,    //菜品总销量
                    SALED_PRODUCTS: [],//菜品list
                    GRANT_ITEM_TOTAL: lodash.sumBy(orderItemList, (o) => {
                        return o.grant_count
                    }) || 0
                };
                async.parallel({
                    orderJson: (done) => {
                        orderModel.findAllInfoByConditionsNew({id: item.newOrderIdAll}, (err, item_order) => {
                            if (err) return done(err);
                            async.eachLimit(item_order, 1, (item, ab) => {
                                orderItemModel.findAllInfoByConditions({orderId: item.id}, (err, item_article) => {
                                    if (err) return ab(err);
                                    item.orderItems = item_article;
                                    ab()
                                })
                            }, (err) => {
                                done(err, item_order)
                            });
                        })
                    },
                    articleJson: (done) => {
                        let sql = `SELECT article_id from tb_order_item  where count >0  and  order_id in (${item.orderIdAll.join(',')}) GROUP BY article_id`;
                        customSqlModel.getAllCustomSqlInfo(sql, (err, article_arr) => {
                            if (err) return done(err);
                            let article_id_arr = [];
                            lodash.forEach(article_arr, (article_value) => {
                                article_id_arr.push(`'${article_value.article_id.split("@")[0]}'`);
                            });
                            let article_id_str = article_id_arr.join(',');
                            let sql_to = `select taf.id, taf.name, ta.id articleId, ta.name articleName
                            from tb_article_family taf
                            inner join tb_article ta
                            on ta.article_family_id = taf.id
                            where ta.id in (${article_id_str}) ORDER BY  ta.sort asc`;
                            customSqlModel.getAllCustomSqlInfo(sql_to, (err, articleJson) => {
                                if (err) return done(err);
                                let nameType = lodash.unionBy(articleJson, 'id');
                                let obj_item = [];
                                async.eachLimit(nameType, 1, (item, af) => {
                                    let article_star = lodash.filter(articleJson, {'id': item.id});
                                    let arr_item = [];
                                    lodash.forEach(article_star, (article_value) => {
                                        arr_item.push(`'${article_value.articleId}'`);
                                    });
                                    let sql_item = `SELECT id, name, article_type articleType from tb_article WHERE id in(${arr_item.join(',')})`;
                                    customSqlModel.getAllCustomSqlInfo(sql_item, (err, articleList) => {
                                        if (err) return af(err);
                                        obj_item.push({
                                            id: item.id,
                                            name: item.name,
                                            articleList: articleList
                                        });
                                        af(null)
                                    })
                                }, (err) => {
                                    done(err, obj_item);
                                });
                            });
                        });
                    },
                }, (error, results) => {
                    if (error) return cb(error);
                    var orderList = results.orderJson;
                    var articleFamilyList = results.articleJson;
                    // console.log(`------articleFamilyList----\n`,JSON.stringify(articleFamilyList))
                    //筛选出售卖的菜品项
                    var saledOrderItemList = new Array();
                    getArrayContent(orderList, function (order) {
                        var orderItems = order.orderItems;
                        if (orderItems.length > 0) {
                            getArrayContent(orderItems, function (orderItem) {
                                if (orderItem.count > 0) {
                                    saledOrderItemList.push(orderItem);
                                }
                            });
                        }
                    });
                    // console.log("===============saledOrderItemList==============\n" + JSON.stringify(saledOrderItemList));
                    //遍历菜品类别、菜品集合
                    var totalCount = 0;
                    let arr = [];
                    getArrayContent(articleFamilyList, function (articleFamily) {
                        //菜品类别名称
                        var famliyName = articleFamily.name;
                        arr.push({
                            PRODUCT_NAME: `--------------` + lodash.pad(`${famliyName}`, 22 - (famliyName.length), '-'),
                            SUBTOTAL: `--------------`
                        });
                        console.log("-----" + famliyName + "-----");
                        var articleList = articleFamily.articleList;
                        //遍历菜品，找到销售记录
                        getArrayContent(articleList, function (article) {
                            var articleName = article.name;
                            //菜品总销量
                            var count = 0;
                            //得到单品以单品形式售出的数量
                            var unitCount = 0;
                            var isUnitArticle = false;
                            //找到当前菜品的售卖记录
                            var nowArticleArray = new Array();
                            getArrayContent(saledOrderItemList, function (orderItem) {

                                if (orderItem.articleId == article.id || orderItem.articleId.substring(0, orderItem.articleId.indexOf("@") == -1 ? 1 : orderItem.articleId.indexOf("@")) == article.id) {
                                    count += orderItem.count;
                                    if (orderItem.type == 1) {
                                        //产生了单品的售卖记录
                                        unitCount += orderItem.count;
                                        isUnitArticle = true;
                                    }
                                    if (orderItem.type == 4) {
                                        //当前单品以套餐子品形式售卖了
                                        isUnitArticle = true;
                                    }
                                    if (orderItem.type != 4) {
                                        //计算总销量
                                        totalCount += orderItem.count;
                                    }
                                    nowArticleArray.push(orderItem);
                                }
                            });

                            if (isUnitArticle) {
                                //当前菜品是单品
                                count = count + "(" + unitCount + "+" + (count - unitCount) + ")";
                            }
                            arr.push({PRODUCT_NAME: articleName, SUBTOTAL: count});
                            // console.log(articleName + "\t" + count);
                            if (article.articleType == 2) {
                                //找到当前套餐下套餐子品的销售记录
                                var parentOrderItemList = new Array();
                                getArrayContent(nowArticleArray, function (orderItem) {
                                    getArrayContent(saledOrderItemList, function (allOrderItem) {
                                        if ((allOrderItem.parentId == null ? "" : allOrderItem.parentId) == orderItem.id) {
                                            parentOrderItemList.push(allOrderItem);
                                        }
                                    });
                                });
                                //存放查询过的articleId
                                var parentArticleIdList = new Array();
                                getArrayContent(parentOrderItemList, function (parentItem) {
                                    var flg = true;
                                    getArrayContent(parentArticleIdList, function (articleId) {
                                        if (parentItem.articleId == articleId) {
                                            flg = false;
                                        }
                                    });
                                    if (flg) {
                                        var count = 0;
                                        getArrayContent(parentOrderItemList, function (parentItemTwo) {
                                            if (parentItem.articleId == parentItemTwo.articleId) {
                                                count += parentItemTwo.count;
                                            }
                                        });
                                        // console.log("|_" + parentItem.articleName + "\t" + count);
                                        arr.push({PRODUCT_NAME: "|_" + parentItem.articleName, SUBTOTAL: count});
                                    }
                                    parentArticleIdList.push(parentItem.articleId);
                                });
                            } else {
                                //新规格、老规格展示明细
                                var type = nowArticleArray[0].type;
                                if (type == 2) {
                                    //老规格
                                    var priceArticleIdList = new Array();
                                    getArrayContent(nowArticleArray, function (priceOrderItem) {
                                        var flg = true;
                                        getArrayContent(priceArticleIdList, function (articleId) {
                                            if (priceOrderItem.articleId == articleId) {
                                                flg = false;
                                            }
                                        });
                                        if (flg) {
                                            var name = priceOrderItem.articleName;
                                            var form = name.substring(article.name.length);
                                            form = form.substring(1, form.length - 1);
                                            var count = 0;
                                            getArrayContent(nowArticleArray, function (priceOrderItemTwo) {
                                                if (priceOrderItem.articleId == priceOrderItemTwo.articleId) {
                                                    count += priceOrderItemTwo.count;
                                                }
                                            });
                                            // console.log("|_" + form + "\t" + count);
                                            arr.push({PRODUCT_NAME: "|_" + form, SUBTOTAL: count});
                                        }
                                        priceArticleIdList.push(priceOrderItem.articleId);
                                    });
                                } else if (type == 5) {
                                    //新规格
                                    var newUnitArticleNameAndIdList = new Array();
                                    getNewUnitInfoList(nowArticleArray, article, function (allFormNameList, articleId) {
                                        //循环当前所买规格的名称
                                        getArrayContent(allFormNameList, function (newUnitName) {
                                            var flg = true;
                                            getArrayContent(newUnitArticleNameAndIdList, function (nameAndId) {
                                                if (nameAndId == (newUnitName + articleId)) {
                                                    flg = false;
                                                }
                                            });
                                            if (flg) {
                                                var count = 0;
                                                getNewUnitInfoList(nowArticleArray, article, function (allFormNameTwoList, articleIdTwo, countTwo) {
                                                    //循环当前所买规格的名称
                                                    getArrayContent(allFormNameTwoList, function (newUnitNameTwo) {
                                                        if (newUnitNameTwo == newUnitName && articleIdTwo == articleId) {
                                                            count += countTwo;
                                                        }
                                                    });
                                                });
                                                newUnitArticleNameAndIdList.push(newUnitName + articleId);
                                                // console.log("|_" + newUnitName + "\t" + count);
                                                arr.push({PRODUCT_NAME: "|_" + newUnitName, SUBTOTAL: count});
                                            }
                                        });
                                    });
                                }
                            }
                        });
                    });

                    obj.SALED_PRODUCT_AMOUNT += totalCount;
                    // console.log("\n\n总销量：" + totalCount);
                    obj.SALED_PRODUCTS.push(...arr);
                    item.OrderItemList = obj;
                    cb(null, orderList);
                });
            });
        },
        function (orderList, cb) {  //退菜数量
            orderItemModel.getOrderItemRefundListById(item.orderIdAll, function (error, refundList) {
                if (error) return cb(error);
                let obj = {
                    CANCELED_PRODUCT_COUNT: lodash.sumBy(refundList, 'refund_count') || 0,      //退菜总数量
                    CANCELED_PRODUCTS: []                                                        //退菜list
                };
                if (refundList.length > 0) {
                    let nameType = lodash.unionBy(refundList, 'name');
                    lodash.forEach(nameType, function (value) {
                        let orderItemListByName = lodash.filter(refundList, ['name', value.name]);

                        let arr = [{
                            PRODUCT_NAME: value.name,
                            SUBTOTAL: lodash.sumBy(orderItemListByName, 'refund_count')
                        }];
                        lodash.forEach(orderItemListByName, function (val) {
                            arr.push({
                                PRODUCT_NAME: "  " + val.article_name,
                                SUBTOTAL: val.refund_count
                            })
                        });
                        obj.CANCELED_PRODUCTS.push(...arr)
                    });
                }
                item.OrderItemRefundList = obj;
                cb(null, orderList);
            });
        },
        function (orderList, cb) {  //取消订单
            orderModel.getCancelOrderListByDates(dates, function (error, cancelOrderList) {
                if (error) return cb(error);
                let obj = {
                    CANCEL_ORDER_COUNT: cancelOrderList.length || 0,      //取消订单总数量
                    CANCEL_ORDERS: []                                       //取消订单list
                };

                if (cancelOrderList.length > 0) {
                    lodash.forEach(cancelOrderList, function (value) {
                        obj.CANCEL_ORDERS.push({
                            CANCEL_ORDER_NUMBER: value.serial_number
                        })
                    });
                }
                item.CancelOrderList = obj;
                cb(null, orderList);
            });
        },
        function (orderList, cb) {  //退菜金额及订单数
            orderModel.getOrderRefundAmountListById(item.orderIdAll, function (error, amountList) {
                if (error) return cb(error);
                let obj = {
                    CANCELED_ORDER_AMOUNT: (lodash.sumBy(amountList, 'total_value')).toFixed(2) || 0,
                    CANCELED_ORDER_COUNT: amountList.length || 0,
                    CANCELED_ORDERS: []
                };
                if (amountList.length > 0) {
                    lodash.forEach(amountList, function (value) {
                        obj.CANCELED_ORDERS.push({
                            ORDER_NUMBER: value.order_id,
                            TEL: value.telephone || '-',
                            SUBTOTAL: (value.total_value).toFixed(2)
                        })
                    });
                }
                item.OrderRefundAmountList = obj;
                cb(null, orderList);
            })
        },
        function (orderInfo, cb) { //获取设置店铺信息
            shopDetailModel.getCustomShopDetailInfo('', function (error, shopDetail) {
                if (error) return cb(error);
                item.shopDetail = shopDetail;
                cb(null, orderInfo);
            });
        },
        function (orderInfo, cb) {
            let reviewMoney = {}
            let sql = `SELECT open_audit FROM tb_brand_setting`
            customSqlModel.getOneCustomSqlInfo(sql, (error, result) => {
                if (error) return cb(error);
                if (result.open_audit) {
                    let sql = `SELECT id FROM tb_daily_log_operation WHERE create_time LIKE '${dates} %' ORDER BY create_time desc limit 1`

                    customSqlModel.getOneCustomSqlInfo(sql, function (error, result) {
                        if (error) return cb(error)
                        if ((result && result.length <= 0) || !result) {
                            reviewMoney.EMERSION_CASH_PAY = 0.00;
                            reviewMoney.EMERSION_INCOME_PAY = 0.00;
                            cb(null, reviewMoney)
                        } else {
                            let sql = `SELECT *  FROM tb_payment_review  WHERE  daily_log_id = '${result.id}' AND payment_mode_id = 30 OR payment_mode_id = 29`
                            customSqlModel.getAllCustomSqlInfo(sql, (error, result) => {
                                if (error) return cb(error)
                                for (let i = 0; i < result.length; i++) {
                                    if (result[i].payment_mode_id == 29) {
                                        reviewMoney.EMERSION_CASH_PAY = result[i].audit_money;
                                    } else if (result[i].payment_mode_id == 30) {
                                        reviewMoney.EMERSION_INCOME_PAY = result[i].audit_money;
                                    }
                                }
                                cb(null, reviewMoney)
                            })
                        }
                    })
                } else {
                    reviewMoney.EMERSION_CASH_PAY = 0
                    reviewMoney.EMERSION_INCOME_PAY = 0
                    cb(null, reviewMoney)
                }

            })


        },
    ], function (error, reviewMoney) {
        if (error) return callback(error);
        let param = {};
        param.RESTAURANT_NAME = item.shopDetail.name || '-';              //店名
        param.DATE = item.orderList.DATE;                            //日期
        param.TOTAL_AMOUNT = item.orderList.TOTAL_AMOUNT;          // 总额
        param.ORDER_AMOUNT = item.orderList.ORDER_AMOUNT;          //订单总数
        param.ORDER_AVERAGE = item.orderList.ORDER_AVERAGE;        //订单均额
        param.CUSTOMER_AMOUNT = item.orderList.CUSTOMER_AMOUNT;    //就餐人数
        param.CUSTOMER_AVERAGE = item.orderList.CUSTOMER_AMOUNT ? (item.orderList.TOTAL_AMOUNT / item.orderList.CUSTOMER_AMOUNT).toFixed(2) : 0;                  //人均消费
        param.INCOME_AMOUNT = businessData.INCOME_AMOUNT? Number(businessData.INCOME_AMOUNT).toFixed(2) : 0; //实收金额
        param.INCOME_ITEMS = businessData.INCOME_ITEMS || []; // 实收list
        param.DISCOUNT_AMOUNT = Number(item.orderPaymentList.DISCOUNT_AMOUNT).toFixed(2) || 0.00;                  //折扣金额
        param.DISCOUNT_ITEMS = item.orderPaymentList.DISCOUNT_ITEMS;  //折扣金额 list
        // param.STORED_VALUE_COUNT = item.chargeList.STORED_VALUE_COUNT || 0 ;                  //充值单数
        // param.STORED_VALUE_AMOUNT = item.chargeList.SALED_PRODUCT_AMOUNT || 0;                  //充值金额
        // param.STORED_VALUE_ITEMS = item.chargeList.STORED_VALUE_ITEMS || [];  //充值 list
        param.STORED_VALUE_COUNT =  0 ;                  //充值单数
        param.STORED_VALUE_AMOUNT =  0;                  //充值金额
        param.STORED_VALUE_ITEMS =  [];  //充值 list
        param.SALED_PRODUCT_AMOUNT = item.OrderItemList.SALED_PRODUCT_AMOUNT;                  //菜品总销量
        param.SALED_PRODUCTS = item.OrderItemList.SALED_PRODUCTS;  //菜品 list
        param.CANCELED_PRODUCT_COUNT = item.OrderItemRefundList.CANCELED_PRODUCT_COUNT;                  //退菜数量
        param.CANCELED_PRODUCTS = item.OrderItemRefundList.CANCELED_PRODUCTS;  //退菜品 list

        param.CANCELED_ORDER_AMOUNT = businessData.CANCELED_ORDER_AMOUNT;                  //退菜金额

        param.REFUNDS_ITEMS = businessData.REFUNDS_ITEMS;                  //退菜list

        param.CANCELED_ORDER_COUNT = item.OrderRefundAmountList.CANCELED_ORDER_COUNT;                  //退菜订单数
        param.CANCELED_ORDERS = item.OrderRefundAmountList.CANCELED_ORDERS;

        param.CANCEL_ORDER_COUNT = item.CancelOrderList.CANCEL_ORDER_COUNT;                  //取消订单数
        param.CANCEL_ORDERS = item.CancelOrderList.CANCEL_ORDERS;

        param.EMERSION_CASH_PAY = Number(reviewMoney.EMERSION_CASH_PAY || 0).toFixed(2); // 浮出门店零用金
        param.EMERSION_INCOME_PAY = Number(reviewMoney.EMERSION_INCOME_PAY || 0).toFixed(2); // 浮出门店零找金

        param.GRANT_AMOUNT = Number(item.orderList.GRANT_AMOUNT).toFixed(2); // 赠送菜品总金额金额
        param.GRANT_TOTAL = Number(item.orderList.GRANT_TOTAL);   //  赠菜的订单数
        param.GRANT_ITEM_TOTAL = Number(item.OrderItemList.GRANT_ITEM_TOTAL); // 退菜总数量

        if (item.printerInfo.length <= 0) return result.error(next, "未设置打印机！", msg);
        let datas = [];
        async.eachLimit(item.printerInfo, 1, function (item, ab) {
            param.PRINTERIP = item.PRINTERIP;
            param.PRINTERPORT = item.PRINTERPORT;
            printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, `${printTemplateModel.REPORT}/${printTemplateModel.DAILY_REPORT_TEMPLATE_48}`, param, function (err, ben) {
                datas.push(ben);
                ab()
            })
        }, function (err) {
            if (err) return callback(err);

            callback(null, datas)
        });

    });
};


/**
 * 新规格信息
 * @param nowArticleArray
 * @param article
 * @param callBack
 */
function getNewUnitInfoList(nowArticleArray, article, callBack) {
    getArrayContent(nowArticleArray, function (newUnitArticle) {
        var allName = newUnitArticle.articleName;
        var allFormNameList = lodash.map(allName.match(/\((.+?)\)/g), function (n) {
            return n.replace(/\(/, "").replace(/\)/, "")
        });
        console.log(`-----------------allFormNameList-----------\n\n`, allFormNameList)
        callBack && callBack(allFormNameList, newUnitArticle.articleId, newUnitArticle.count);
    });
}

/**
 * 得到数组内容
 */
function getArrayContent(array, callBack) {
    for (var index in array) {
        var content = array[index];
        callBack && callBack(content);
    }
}

/**
 * 催菜打印
 * @param msg
 * @param session
 * @param next
 * @returns {*}
 */
exports.reminderPrint = function (req, res, next) {
    let orderId = req.body.orderId;
    let orderItemArr = req.body.orderItemArr;
    let kitchenType = req.body.kitchenType || 0;   // 0 正常   or  1 精简版
    if (!orderId) return next("orderId 不存在")
    async.auto({
        getShopDetailInfo: function (cb) { // 0、获取店铺信息
            let sql = `select * from tb_shop_detail`;
            customSqlModel.getOneCustomSqlInfo(sql, (err, shopDetailInfo) => {
                return cb(err, shopDetailInfo);
            })
        },
        getOrderInfo: function (cb) { // 1、获取订单信息
            let sql = `select * from tb_order where id = '${orderId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, (err, orderInfo) => {
                return cb(err, orderInfo);
            })
        },
        getPrinterTemplate: ['getShopDetailInfo', function (reply, cb) {
            let template = '';
            if (reply.getShopDetailInfo.shopMode == 2 || reply.getShopDetailInfo.shopMode == 7) { // 获取模板
                if (!kitchenType) {
                    template = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_BARCODE_TEMPLATE_48}`;
                } else {
                    template = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_LRF_BARCODE_TEMPLATE_48}`;
                }
            } else {
                if (!kitchenType) {
                    template = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_TEMPLATE_48}`;
                } else {
                    template = `${printTemplateModel.REPORT}/${printTemplateModel.KITCHEN_TICKET_LRF_TEMPLATE_48}`;
                }
            }
            return cb(null, template);
        }],
        getPrinterItemInfo: ['getShopDetailInfo', function (reply, cb) { // 2、获取每个菜品的厨房信息 (根据店铺设置可能需要拆分)
            let split_kitchen = reply.getShopDetailInfo.split_kitchen; // 是否要拆开菜品打印 0厨打不分单 1厨打分单
            let print_type = reply.getShopDetailInfo.print_type; // 是否要拆开套餐打印 0：整单出  1：分单出
            // split_kitchen = 1;
            // print_type = 1;
            let orderItemResult = {
                orderItems: [],
                stickerPrintCount: 0
            };
            async.eachLimit(orderItemArr, 1, (orderItem, e_cb) => {
                let sql = `SELECT * FROM tb_article WHERE id = substr('${orderItem.articleId}',1,32)`;
                customSqlModel.getOneCustomSqlInfo(sql, (err, articleInfos) => {
                    let sql = `SELECT * FROM tb_printer WHERE id in ( SELECT printer_id FROM tb_kitchen WHERE id in (SELECT kitchen_id from tb_article_kitchen WHERE article_id = substr('${orderItem.articleId}',1,32) ))`;
                    if (articleInfos.virtual_id) {
                        sql = `SELECT * FROM tb_printer WHERE id in ( SELECT printer_id FROM tb_kitchen WHERE id = ( SELECT kitchen_id FROM tb_virtual_products_kitchen WHERE virtual_id = ( SELECT virtual_id FROM tb_article WHERE id = substr('${orderItem.articleId}',1,32) )))`;
                    }
                    // 同时查询虚拟餐包和正常打印的SQL:
                    // let sql = `SELECT * FROM tb_printer WHERE
                    // id in ( SELECT printer_id FROM tb_kitchen WHERE id = ( SELECT kitchen_id FROM tb_virtual_products_kitchen WHERE virtual_id = ( SELECT virtual_id FROM tb_article WHERE id = substr('${orderItem.articleId}',1,32))))
                    // or id in ( SELECT printer_id FROM tb_kitchen WHERE id in (SELECT kitchen_id from tb_article_kitchen WHERE article_id = substr('${orderItem.articleId}',1,32) ))`;
                    customSqlModel.getAllCustomSqlInfo(sql, (err, printerInfos) => {
                        sql = `SELECT * FROM tb_order_item WHERE id = '${orderItem.id}' or parent_id = '${orderItem.id}';`;
                        customSqlModel.getAllCustomSqlInfo(sql, (err, orderItemsInfo) => {
                            orderItemsInfo = orderItemsInfo.sort((a, b) => {
                                return (a.parent_id ? a.parent_id.length : 0) > (b.parent_id ? b.parent_id.length : 0);
                            });
                            for (let n = 0; n < printerInfos.length; n++) { // 一个菜品有可能有多种打印机设置
                                if (printerInfos[n].ticket_type == 1) { // 记录贴纸打印个数
                                    orderItemResult.stickerPrintCount += 1
                                }
                                for (let m = 0; m < orderItemsInfo.length; m++) { //记录菜品
                                    if (orderItemsInfo[m].parent_id) { //子品 名称 加|_
                                        orderItemsInfo[m].article_name = `|_${orderItemsInfo[m].article_name}`
                                    }
                                    // console.log('--------------orderItemsInfo------------------', JSON.stringify(orderItemsInfo))
                                    // console.log('--------------split_kitchen------------------', split_kitchen, print_type)
                                    if (split_kitchen && !print_type && !orderItemsInfo[m].parent_id) { // (1) 拆开数量 且 不拆套餐
                                        for (let i = 0; i < orderItemsInfo[m].count; i++) {
                                            orderItemResult.orderItems.push({
                                                printerInfo: printerInfos[n],
                                                orderItems: orderItemsInfo,
                                                count: 1
                                            });
                                        }
                                    } else if (split_kitchen && print_type) { // (2) 拆开数量 且 拆开套餐
                                        for (let i = 0; i < orderItemsInfo[m].count; i++) {
                                            orderItemResult.orderItems.push({
                                                printerInfo: printerInfos[n],
                                                orderItems: [orderItemsInfo[m]],
                                                count: 1
                                            });
                                        }
                                    } else if (!split_kitchen && print_type) {  // (3) 不拆数量 且 拆开套餐
                                        orderItemResult.orderItems.push({
                                            printerInfo: printerInfos[n],
                                            orderItems: [orderItemsInfo[m]],
                                            count: orderItemsInfo[m].count
                                        });
                                    } else if (!split_kitchen && !print_type && !orderItemsInfo[m].parent_id) { // (4) 不拆数量 且 不拆套餐
                                        orderItemResult.orderItems.push({
                                            printerInfo: printerInfos[n],
                                            orderItems: orderItemsInfo,
                                            count: orderItemsInfo[m].count
                                        });
                                    }
                                }
                            }
                            return e_cb(err);
                        });
                    });
                });
            }, (err) => {
                // console.log('--------------orderItemResult------------------', JSON.stringify(orderItemResult))
                return cb(err, orderItemResult)
            })
        }]
    }, function (err, resultData) {
        let prList = [];
        let param = {};
        let CUSTOMER_SATISFACTION = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION) || 0;
        //店铺信息
        param.RESTAURANT_TEL = `${resultData.getShopDetailInfo.phone}`;      //电话
        param.CUSTOMER_TEL = `${resultData.getShopDetailInfo.phone}`;
        param.DISTRIBUTION_MODE = '催菜';
        //订单信息
        param.TABLE_NUMBER = resultData.getShopDetailInfo.shopMode == 2 || resultData.getShopDetailInfo.shopMode == 7 ? resultData.getOrderInfo.ver_code : resultData.getOrderInfo.table_number;
        let orderNumber = (resultData.getOrderInfo.order_number || '999').toString();//订单号
        param.ORDER_NUMBER = orderNumber.length == 1 ? `00${orderNumber}` : orderNumber.length == 2 ? `0${orderNumber}` : orderNumber;      //订单号//桌号
        param.ORDER_ID = resultData.getOrderInfo.serial_number;                         //交易流水号
        param.BARCODE = resultData.getOrderInfo.serial_number.substring(8, 18);                         //条形码
        param.DATETIME = `${moment(+resultData.getOrderInfo.create_time).format('YYYY-MM-DD HH:mm:ss')}`;           //订单时间
        param.ORIGINAL_AMOUNT = resultData.getOrderInfo.original_amount;                  //原价
        param.CUSTOMER_SATISFACTION = "★★★★★☆☆☆☆☆".slice(5 - CUSTOMER_SATISFACTION, 10 - CUSTOMER_SATISFACTION);            //客户上次评分分数           //客户上次评分分数
        param.CUSTOMER_SATISFACTION_DEGREE = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_SATISFACTION_DEGREE) || 0;     //客户平均评分分数
        param.CUSTOMER_PROPERTY = (resultData.consumeInfo && resultData.consumeInfo.CUSTOMER_PROPERTY) || '-';                //客服余额
        param.MEMO = resultData.getOrderInfo.remark || '-';
        param.CUSTOMER_COUNT = resultData.getOrderInfo.customer_count;
        async.eachLimit(resultData.getPrinterItemInfo.orderItems, 1, (getPrinterItem, e_cb) => {
            let num = 1;
            let numTotal = resultData.getPrinterItemInfo.stickerPrintCount;
            param.PRINTERIP = getPrinterItem.printerInfo.ip;
            param.PRINTERPORT = getPrinterItem.printerInfo.port;
            if (getPrinterItem.printerInfo.ticket_type == 1) { // 贴纸打印
                //模板信息
                for (let i = 0; i < getPrinterItem.orderItems.length; i++) {
                    param.PRINTTEMPLATE = `./report/restaurant_label.xml`;
                    param.CODE = `${resultData.getShopDetailInfo.shopMode == 2 || resultData.getShopDetailInfo.shopMode == 7 ? resultData.getOrderInfo.ver_code : resultData.getOrderInfo.table_number}`;
                    param.ARTICLE_NAME = getPrinterItem.orderItems[i].article_name;
                    param.ARTICLE_COUNT = getPrinterItem.orderItems[i].count;
                    param.ARTICLE_PRICE = getPrinterItem.orderItems[i].unit_price;
                    param.SPEC = getPrinterItem.orderItems[i].article_name.match(/\((.+?)\)/g) || '';
                    param.RESTAURANT_NAME = `${resultData.getShopDetailInfo.name}`;
                    param.ARTICLE_NUMBER = `${num}/${numTotal}`;
                    printerServiceModel.stickersPrint(param.PRINTERIP, param.PRINTERPORT, param.PRINTTEMPLATE, param, function (err, ben) {
                        return e_cb(null, ben);
                    });
                }
            } else { // 普通厨打
                //模板信息
                param.PRINTTEMPLATE = resultData.getPrinterTemplate;
                param.ITEMS = [];
                for (let i = 0; i < getPrinterItem.orderItems.length; i++) {
                    param.ITEMS.push({
                        ARTICLE_COUNT: getPrinterItem.count,
                        ARTICLE_NAME: getPrinterItem.orderItems[i].article_name
                    });
                }
                printerServiceModel.receiptsPrint(param.PRINTERIP, param.PRINTERPORT, param.PRINTTEMPLATE, param, function (err, ben) {
                    return e_cb(null, ben);
                })
            }
        }, (err) => {
            return res.json(new SuccessModel(null, null));
        })
    })
};