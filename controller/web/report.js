//------------------------- 报表相关代码 ------------------

const async = require("async");
const _ = require("lodash");
const customSqlModel = require("../../model/web/customSql");
const shopDetailModel = require("../../model/web/shopDetail");
const orderItemModel = require("../../model/web/orderItem");
const orderModel = require("../../model/web/order")
const dateUtil = require("../../lib/util/dateUtil");
const generalUtil = require("../../lib/util/generalUtil");

const mqttPublishModel = require("../../model/web/mqttPublish");

const restoApiPublishModel = require("../../model/web/restoApiPublish");


const payMode = require("../../lib/constant/PayMode");
const {SuccessModel, ErrorModel} = require('../../lib/util/result');
const lodash = require('lodash');
const dailyLogOperation = require("../../model/web/dailyLogOperation");
const paymentReview = require("../../model/web/paymentReview");
const moment = require("moment");
const httpClient = require("../../lib/util/httpClient")

/**
 * 今日数据
 * @param req
 * @param res
 * @param next
 */
exports.report = (req, res, next) => {
    let date = req.query.date;
    reportData(date, (err, reply) => {
        if (err) return next(err);
        return res.json(new SuccessModel(null, reply))
    })

}


var reportData = (date, callback) => {
    let resourcePaymentList = []
    let item = {};
    let allOrderPayments = [];
    async.waterfall([
        function (cb) {
            let sql = `select * from tb_order where order_state = 2 and production_status !=6  and accounting_time=strftime('%Y-%m-%d', '${date}')`
            customSqlModel.getAllCustomSqlInfo(sql, (err, allOrderList) => {
                if (err) return (err, null);
                let totalAmount = 0, customerAmount = 0, grantAmount = 0, orderAmount = 0, orderIdAll = [];
                allOrderList.map(item => {
                    if (item.parent_order_id == null || item.parent_order_id == "") orderAmount += 1;
                    orderIdAll.push(`'${item.id}'`);
                    grantAmount += +item.grantAmount || 0;
                    totalAmount += +item.order_money + ( +item.order_pos_discount_money || +item.member_discount_money || 0) + (+item.grant_money || 0) + (+ item.erase_money || 0);
                    customerAmount += item.customer_count;

                })
                item.orderIdAll = orderIdAll;
                item.orderList = {
                    date: date,    // 日期
                    totalAmount: +totalAmount.toFixed(2) || 0,
                    orderAmount: orderAmount || 0, // 订单总数
                    orderAverage: (totalAmount / orderAmount) || 0, // 单均
                    customerAmount: customerAmount || 0, // 就餐人数
                    grantAmount: grantAmount
                };
                cb(null, allOrderList);
            })
        },
        function (orderAll, cb) { // TODO:
            orderModel.getOrderPaymentListById(item.orderIdAll, function (error, orderPaymentList) {
                orderModel.getRefundPaymentListById(item.orderIdAll, (error, orderRefundPayment) => {
                    resourcePaymentList = orderPaymentList
                    allOrderPayments = orderRefundPayment;
                    if (error) return cb(error);
                    let obj = {
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


                    let refundMap = {}
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
                            obj.refundsItems[12] = (Number(obj.refundsItems[12] || 0) + Number(Math.abs(orderRefundPayment[i].pay_value))).toFixed(2);
                            obj.canceledOrderAmount = (Number(obj.canceledOrderAmount) + Number(Math.abs(orderRefundPayment[i].pay_value))).toFixed(2);
                        }
                    }
                    lodash.forEach(orderPaymentList, function (value) {
                        if ([2, 3, 7, 8, 17, 22, 24, 26, 28].indexOf(value.payment_mode_id) != -1) { //折扣

                            obj.discountAmount = (Number(obj.discountAmount) + Number(value.pay_value)).toFixed(2);
                            obj.discountItems[value.payment_mode_id] = Number(value.pay_value).toFixed(2);
                        } else if ([11, 19, 25].indexOf(value.payment_mode_id) != -1) {   //退款
                            obj.canceledOrderAmount = (Number(obj.canceledOrderAmount) + Math.abs(Number(value.pay_value))).toFixed(2);
                            obj.refundsItems[value.payment_mode_id] = Math.abs(Number(value.pay_value).toFixed(2));
                        } else {
                            obj.incomeItems[value.payment_mode_id] = Number(value.pay_value).toFixed(2);
                        }
                    });


                    for (let key in obj.incomeItems) {
                        if ([1, 2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 15, 20, 21].indexOf(Number(key) == -1)) { // 除了这些全之外部都是退现金的
                            let rs = obj.incomeItems[key], dst = Math.abs(refundMap[key]) || 0
                            obj.incomeItems[key] = Number(rs - dst).toFixed(2)
                            obj.incomeAmount = Number(Number(obj.incomeAmount) + Number(obj.incomeItems[key])).toFixed(2)
                        }
                    }

                    lodash.forEach(orderRefundPayment, function (item) {
                        if (item.pay_value < 0 && [1, 10].indexOf(item.payment_mode_id) !== -1 && !item.result_data) {
                            let tempValue = obj.underline[item.payment_mode_id] - Math.abs(item.pay_value);
                            obj.underline[item.payment_mode_id] = tempValue
                        }
                    });
                    obj.incomeItems[1] = Number(Number(obj.incomeItems[1] || 0) - Number(obj.underline[1] || 0)).toFixed(2);
                    obj.incomeItems[10] = Number(Number(obj.incomeItems[10] || 0) - Number(obj.underline[10] || 0)).toFixed(2);
                    let conditions = {
                        accountingTime: date,
                        orderState: ['2', '10']
                    };
                    orderModel.getDayOrder(conditions, function (err, membersAndPosDiscount) {
                        if (err) return cb(err);
                        if (lodash.sumBy(membersAndPosDiscount, (o) => {
                            return Number(o.orderPosDiscountMoney) + Number(o.eraseMoney) + Number(o.exemptionMoney) + Number(o.grantMoney)
                        }) > 0) {
                            obj.discountAmount = Number(obj.discountAmount) + lodash.sumBy(membersAndPosDiscount, (o) => {
                                return Number(o.orderPosDiscountMoney) + Number(o.eraseMoney) + Number(o.grantMoney)
                            });
                            obj.discountItems['pos'] = (lodash.sumBy(membersAndPosDiscount, (o) => {
                                return Number(o.orderPosDiscountMoney) + Number(o.eraseMoney) + Number(o.exemptionMoney)
                            })).toFixed(2).toString()

                        }
                        if (lodash.sumBy(membersAndPosDiscount, (o) => {
                            return Number(o.memberDiscountMoney)
                        }) > 0) {
                            obj.discountAmount = Number(obj.discountAmount) + lodash.sumBy(membersAndPosDiscount, (o) => {
                                return Number(o.orderPosDiscountMoney)
                            });
                            obj.discountItems['member'] = (lodash.sumBy(membersAndPosDiscount, (o) => {
                                return Number(o.memberDiscountMoney)
                            })).toFixed(2).toString();
                        }
                        //支付源
                        var sql = `SELECT is_pos_pay isPosPay, Count(CASE WHEN (parent_order_id =''  or parent_order_id is null) THEN 1 END) orderCount, SUM(order_money) orderMoney FROM tb_order WHERE accounting_time = '${date}' AND distribution_mode_id IN(1,3) AND order_state in(2,10,11) and production_status !=6 and exemption_money ==0 GROUP BY is_pos_pay`;
                        customSqlModel.getAllCustomSqlInfo(sql, function (err, paymentSource) {
                            if (err) return cb(err.toString())
                            paymentSource.map(function (item) {
                                if (item.isPosPay == 0) {
                                    obj.discountItems["posSettleAccounts"] = Number(item.orderMoney)
                                } else {
                                    obj.discountItems["wechatSettleAccounts"] = Number(item.orderMoney)
                                }
                            });
                        });
                        item.orderPaymentList = obj;
                        cb(null, orderAll);
                    });
                })
            })
        },
        function (orderList, cb) {
            //订餐源
            var sql = `SELECT distribution_mode_id payModeId,SUM(order_money) orderMoney,SUM(order_pos_discount_money) orderPosDiscountMoney,SUM(member_discount_money) 
                        memberDiscountMoney, SUM(erase_money) eraseMoney, SUM(exemption_money) exemptionMoney, SUM(grant_money) grantMoney, COUNT(CASE WHEN (parent_order_id =''  or parent_order_id is null) THEN 1 END) orderCount 
                        FROM tb_order  WHERE distribution_mode_id in(1,3) AND accounting_time = '${date}' AND order_state in (2,10,11) 
                        and production_status != 6 GROUP BY distribution_mode_id`;
            customSqlModel.getAllCustomSqlInfo(sql, function (err, orderingSource) { //TODO:
                if (err) result.error(next, err.toString(), null);
                let obj = {
                    eatIn: {},
                    packaging: {},
                    eatOut: {}
                }

                orderingSource.map(function (item) {
                    switch (item.payModeId) {
                        case 1:
                            obj.eatIn = {
                                orderCount: item.orderCount,
                                orderMoney: Number(item.orderMoney) + Number(item.orderPosDiscountMoney) + Number(item.memberDiscountMoney || 0) + Number(item.eraseMoney || 0) + Number(item.grantMoney || 0)
                            };
                            break;
                        case 2:
                            obj.packaging = {
                                orderCount: item.orderCount,
                                orderMoney: Number(item.orderMoney) + Number(item.orderPosDiscountMoney) + Number(item.memberDiscountMoney || 0) + Number(item.memberDiscountMoney) + Number(item.eraseMoney || 0) + Number(item.grantMoney || 0)
                            };
                            break;
                        case 3:
                            obj.eatOut = {
                                orderCount: item.orderCount,
                                orderMoney: Number(item.orderMoney) + Number(item.orderPosDiscountMoney) + Number(item.memberDiscountMoney || 0) + Number(item.memberDiscountMoney) + Number(item.eraseMoney || 0) + Number(item.grantMoney || 0)
                            };
                            break
                    }
                });
                item.orderOrderingSource = obj;
                cb(null, orderList);
            })
        },
        function (orderList, cb) {  //菜品销量
            orderItemModel.getOrderItemListById(item.orderIdAll, function (error, orderItemList) {
                if (error) return cb(error);
                let obj = {
                    saledProductAmount: lodash.sumBy(orderItemList, 'total_count') || 0,    //菜品总销量
                    saledProducts: []                                                           //菜品list
                };
                let nameType = lodash.unionBy(orderItemList, 'name');

                lodash.forEach(nameType, function (value) {
                    let orderItemListByName = lodash.filter(orderItemList, ['name', value.name]);
                    let arr = [{productName: value.name, subtotal: lodash.sumBy(orderItemListByName, 'total_count')}];
                    lodash.forEach(orderItemListByName, function (val) {
                        arr.push({
                            product: "  " + val.article_name,
                            subtotal: val.total_count
                        })
                    });
                    obj.saledProducts.push(...arr)
                });
                item.orderItemList = obj;
                cb(null, orderItemList);
            })
        },
        function (orderList, cb) {  //退菜数量
            orderItemModel.getOrderItemRefundListById(item.orderIdAll, function (error, refundList) {
                if (error) return cb(error);
                let obj = {
                    canceledProductCount: lodash.sumBy(refundList, 'refund_count') || 0,      //退菜总数量
                    canceledProducts: []                                                        //退菜list
                };
                if (refundList.length > 0) {
                    let nameType = lodash.unionBy(refundList, 'name');
                    lodash.forEach(nameType, function (value) {
                        let orderItemListByName = lodash.filter(refundList, ['name', value.name]);

                        let arr = [{
                            productName: value.name,
                            subtotal: lodash.sumBy(orderItemListByName, 'refund_count')
                        }];
                        lodash.forEach(orderItemListByName, function (val) {
                            arr.push({
                                productName: "  " + val.article_name,
                                subtotal: val.refund_count
                            })
                        });
                        obj.canceledProducts.push(...arr)
                    });
                }
                item.OrderItemRefundList = obj;
                cb(null, orderList);
            });
        },
        function (orderList, cb) {  //退菜金额及订单数
            orderModel.getOrderRefundAmountListById(item.orderIdAll, function (error, amountList) {
                if (error) return cb(error);
                let obj = {
                    canceledOrderAmount: Number(lodash.sumBy(amountList, 'total_value')).toFixed(2) || 0,
                    canceledOrderCount: amountList.length || 0,
                    canceledOrders: []
                };
                if (amountList.length > 0) {
                    lodash.forEach(amountList, function (value) {
                        obj.canceledOrders.push({
                            orderNumber: value.order_id,
                            tel: value.telephone || '-',
                            subtotal: Number(value.total_value).toFixed(2)
                        })
                    });
                }
                item.OrderRefundAmountList = obj;
                cb(null, orderList);
            })
        },
        function (orderInfo, cb) { //设置店铺信息
            shopDetailModel.getCustomShopDetailInfo('', function (error, shopDetail) {
                if (error) return cb(error);
                item.shopDetail = shopDetail;
                cb(null, orderInfo);
            });
        },
    ], function (error, results) {
        if (error) {
            return callback(error, null)
        } else {
            let param = {};
            param.resetAurantName = item.shopDetail.name || '-';              //店名
            param.date = item.orderList.date;                            //日期
            param.totalAmount = item.orderList.totalAmount;          // 总额
            param.orderAmount = item.orderList.orderAmount;          //订单总数
            param.orderAverage = item.orderList.orderAverage;        //订单均额
            param.customerAmount = item.orderList.customerAmount;    //就餐人数
            param.customerAverage = item.orderList.customerAmount ? Number(item.orderList.totalAmount / item.orderList.customerAmount).toFixed(2) : 0;                  //人均消费
            param.incomeAmount = Number(item.orderPaymentList.incomeAmount).toFixed(2) || 0;   //实收金额
            param.incomeItems = item.orderPaymentList.incomeItems || [];    // 实收list
            param.underline = item.orderPaymentList.underline;
            param.discountAmount = Number(item.orderPaymentList.discountAmount).toFixed(2) || 0;   //折扣金额
            param.discountItems = item.orderPaymentList.discountItems;  //折扣金额 list
            param.canceledProductCount = item.OrderItemRefundList.canceledProductCount;                  //退菜数量
            param.canceledProducts = item.OrderItemRefundList.canceledProducts;  //退菜品 list
            param.canceledOrderAmount = Math.abs(item.orderPaymentList.canceledOrderAmount);                  //退菜金额
            param.refundsItems = item.orderPaymentList.refundsItems;                  //退菜list
            param.canceledOrderCount = item.OrderRefundAmountList.canceledOrderCount;                  //退菜订单数
            param.canceledOrders = item.OrderRefundAmountList.canceledOrders;
            param.eatIn = item.orderList.eatIn;
            param.packaging = item.orderList.packaging;
            param.eatOut = item.orderList.eatOut;
            param.orderOrderingSource = item.orderOrderingSource;
            param.resourcePaymentList = resourcePaymentList
            param.grantAmount = item.orderList.grantAmount
            callback(null, param);
        }
    });
}

/**
 * 是否开启结店审核
 * @param req
 * @param res
 * @param next
 */
exports.isOpenPaymentReview = (req, res, next) => {
    let sql = `SELECT open_audit openAudit FROM tb_brand_setting`;
    customSqlModel.getOneCustomSqlInfo(sql, (error, reply) => {
        if (error) next(error)
        res.json(new SuccessModel(null, reply))
    })
}


/**
 * 发送结店短信
 * @param req
 * @param res
 * @param next
 */
exports.sendMessage = (req, res, next) => {
    let operator = req.query.operator || ""
    let dailyLogId = req.query.daily_log_id || ""
    httpClient.javaSendMessage({
        path: '/posCheckOut',
        operator: operator,
        dailyLogId: dailyLogId
    }, (err, result) => {
        if (err) return res.json(new ErrorModel(err, null))
        res.json(new SuccessModel(null, null))
    })
}


/**
 * 查询所有的支付项 复核金额初始化
 * @param msg
 * @param session
 * @param next
 */
exports.findAllPaymentList = function (req, res, next) {
    let date = req.query.date;
    if (!date) date =  moment().format("YYYY-MM-DD");
    findAllPaymentList(date, (err, reply) => {
        if (err) return next(err)
        if (reply && reply.length > 0) {
            reply.filter(item => {
                if (item.money < 0) {
                    item.money = -item.money
                    item.auditMoney = -item.auditMoney
                }
                if (item.money == 0 && (item.paymentModeId != 29 || item.paymentModeId != 30)) {
                    return
                }
            })
        }
        return res.json(new SuccessModel(null, reply))
    });
};

const findAllPaymentList = function (date, callback) {
    let paymentList = []
    let businessData = {}
    let that = this;
    var createTime = dateUtil.formatDateTime("yyyy-MM-dd HH:mm:ss")
    async.waterfall([
        function (cb) {
            reportData(date, (err, reply) => {
                if (err) return callback(err, null)
                businessData = reply;
                paymentList.push({ // 营收总额
                    sort: 1,
                    name: '营收总额',
                    money: reply.totalAmount,
                    paymentModeId: payMode.TOTAL_AMOUNT,
                    operator: "SYS",
                    auditMoney: reply.totalAmount,
                    editStatus: false,
                    createTime: createTime
                })

                paymentList.push({ // 折扣金额
                    sort: paymentList.length + 1,
                    name: '折扣金额',
                    money: reply.discountAmount,
                    paymentModeId: payMode.EMERSION_DISCOUNT,
                    operator: "SYS",
                    auditMoney: reply.discountAmount,
                    editStatus: false,
                    createTime: createTime
                })

                paymentList.push({ // 销售净额
                    sort: paymentList.length + 1,
                    name: '净销售额',
                    money: reply.incomeAmount,
                    paymentModeId: payMode.TORAL_NET_INCOME,
                    operator: "SYS",
                    auditMoney: reply.incomeAmount,
                    editStatus: false,
                    createTime: createTime
                })

                paymentList.push({ // 退款金额
                    sort: paymentList.length + 1,
                    name: '退款金额',
                    money: reply.canceledOrderAmount,
                    paymentModeId: payMode.TOTAL_REFUND,
                    operator: "SYS",
                    auditMoney: reply.canceledOrderAmount,
                    editStatus: false,
                    createTime: createTime
                })
                cb(null, reply)
            });
        },
        function (reply, cb) {
            var pyList = reply.resourcePaymentList;
            var filterList = [13, 3, 7, 8, 17, 24, 28, 19, 25, 11, 26, 2]

            var paymentItemList = pyList.filter(item => {

                if (filterList.indexOf(item.payment_mode_id) == -1) {
                    return item;
                }
            })
            for (let i = 0; i < paymentItemList.length; i++) {
                paymentList.push({ // 退款金额
                    sort: paymentList.length + 1,
                    name: payMode.getPaymentNameById(paymentItemList[i].payment_mode_id),
                    money: paymentItemList[i].payment_mode_id == 12 ? businessData.incomeItems[12] : Number(paymentItemList[i].pay_value),
                    paymentModeId: paymentItemList[i].payment_mode_id,
                    operator: "SYS",
                    auditMoney: paymentItemList[i].payment_mode_id == 12 ? businessData.incomeItems[12] : Number(paymentItemList[i].pay_value),
                    editStatus: true,
                    createTime: createTime
                })

            }
            paymentList.push({ // 门店浮出零用金
                sort: paymentList.length + 1,
                name: '门店浮出零用金',
                money: 0,
                paymentModeId: payMode.EMERSION_CASH_PAY,
                operator: "SYS",
                auditMoney: 0,
                editStatus: true,
                createTime: createTime
            })
            paymentList.push({ // 门店找出零用金
                sort: paymentList.length + 1,
                name: '门店浮出零找金',
                money: 0,
                paymentModeId: payMode.EMERSION_INCOME_PAY,
                operator: "SYS",
                auditMoney: 0,
                editStatus: true,
                createTime: createTime
            })

            paymentList.push({ // 现金合计
                sort: paymentList.length + 1,
                name: '现金合计',
                money: businessData.incomeItems[12] || 0,
                paymentModeId: payMode.CASH_AMOUNT,
                operator: "SYS",
                auditMoney: businessData.incomeItems[12] || 0,
                editStatus: false,
                createTime: createTime
            })

            paymentList.push({ // 银行卡合计
                sort: paymentList.length + 1,
                name: '银行卡合计',
                money: businessData.incomeItems[5] || 0,
                paymentModeId: payMode.BANK_CARD_TOTAL,
                operator: "SYS",
                auditMoney: businessData.incomeItems[5] || 0,
                editStatus: false,
                createTime: createTime
            })

            let otherMoney = Number(businessData.totalAmount
                - (businessData.incomeItems[12] || 0)
                - (businessData.incomeItems[5] || 0)).toFixed(2)
            paymentList.push({ // 其它券卡支付 除去现金和银行卡支付
                sort: paymentList.length + 1,
                name: '其它卡券支付',
                money: otherMoney,
                paymentModeId: payMode.RESTS_COUPON_TOTAL || 0,
                operator: "SYS",
                auditMoney: otherMoney,
                editStatus: false,
                createTime: createTime
            })

            paymentList.push({ // 合计
                sort: paymentList.length + 1,
                name: '合计',
                money: businessData.totalAmount || 0,
                paymentModeId: payMode.TORTAL_MONEY,
                operator: "SYS",
                auditMoney: businessData.totalAmount || 0,
                editStatus: false,
                createTime: createTime
            })
            cb(null, paymentList);
        },
        function (paymentList, cb) {
            let sql = `SELECT id FROM tb_daily_log_operation ORDER BY create_time desc`
            customSqlModel.getAllCustomSqlInfo(sql, (error, dialyLogList) => {
                if (error) return cb(error);
                if (dialyLogList && dialyLogList.length <= 0) {
                    cb(null, [])
                } else {
                    let dialyLogId = dialyLogList[0].id
                    if (error) return callback(error);
                    if (dialyLogList && dialyLogList.length <= 0) return cb(null, [])
                    let sql = `SELECT * FROM tb_payment_review WHERE daily_log_id = '${dialyLogId}'`
                    customSqlModel.getAllCustomSqlInfo(sql, (error, paymentReviewList) => {
                        if (error) return cb(error);
                        cb(null, paymentReviewList)
                    })
                }
            })
        },
        function (paymentReviewList, cb) {
            if (paymentReviewList && paymentReviewList.length <= 0) {
                cb(null, paymentList)
            } else {
                paymentReviewList.map(item => {
                    paymentList.map(paymentItem => {
                        paymentItem.money = Number(paymentItem.money).toFixed(2)
                        paymentItem.auditMoney = Number(paymentItem.auditMoney).toFixed(2)
                        if (item.payment_mode_id == paymentItem.paymentModeId) {
                            paymentItem.operator = item.operator;
                        }
                    })
                })
                cb(null, paymentList)
            }
        }
    ], function (error, paymentList) {
        if (error) {
            callback(error)
            // appendFile(`paymentReview`, `${msg.__route__}=>【复合金额数据初始化失败】：,\n,${error.toString()}`);
        } else {
            // appendFile(`paymentReview`, `${msg.__route__}=>【复合金额初始化成功；,\n,${JSON.stringify(paymentList)}`);
            callback(null, paymentList)
        }
    })
}


/**
 * @desc  确定复核金额
 * @param msg
 * @param callback
 */
exports.confirmCheckReport = function (req, res, next) {

    var paymentList = req.body.paymentList;
    var username = req.body.operator || "system";
    if (!paymentList || paymentList.length < 0) return next(new BadRequestError("审核列表不存在"))
    async.waterfall([ // 插入日志记录
        function (cb) {
            shopDetailModel.getShopDetailFindOne((err, reply) => {
                if (err) return cb(err, null)
                cb(null, reply)
            })
        },
        function (shopDetail, cb) {
            let dailyLog = {
                id: generalUtil.randomUUID(),
                shopId: shopDetail.id,
                brandId: shopDetail.brandId,
                operator: username,
                closeStatus: 1,
                createTime: paymentList[0].createTime
            }
            dailyLogOperation.upsert(dailyLog, function (error, result) {
                cb(null, dailyLog)
            })
        },
        function (dailyLog, cb) {
            let paymentReviewList = []
            let dailogId = dailyLog.id
            async.each(paymentList, (item, e_cb) => {
                var payment = {
                    id: generalUtil.randomUUID(),
                    sort: item.sort,
                    dailyLogId: dailogId,
                    paymentModeId: item.paymentModeId,
                    reportMoney: Number(item.money).toFixed(2),
                    auditMoney: Number(item.auditMoney).toFixed(2),
                    operator: item.operator,
                    createTime: item.createTime
                };
                paymentReviewList.push(payment);
                paymentReview.upsert(payment, function (error, result) {
                    e_cb(error || null, null);
                })
            })
            var reply = {
                dailyLogOperation: dailyLog,
                paymentReview: paymentReviewList
            }
            cb(null, reply)
        }
    ], function (error, reply) {
        if (error) {
            return next(error)
        } else {
            reply.dailyLogOperation.auditOrderItems = reply.paymentReview

            reply.dailyLogOperation.auditOrderItems.map(item => {
                item.reportMoney = item.reportMoney.toString()
                item.auditMoney = item.auditMoney.toString()
            })
            // appendFile(`正在同步结店数据`, `${msg.__route__}=>【数据列表】：,\n,${JSON.stringify(reply.dailyLogOperation)}`);
            httpClient.javaServicePost({
                path: '/paymentReview',
                dailyLogOperation: reply.dailyLogOperation
            },  (err, data) => {
                // appendFile(`结店同步数据`, `${msg.__route__}=> ${JSON.parse(data).success? '成功' : '失败'}：,\n,${data}`);
                if (err) res.json(new ErrorModel("审核失败，请稍后重试", null))
                res.json(new SuccessModel(null,  reply))
            });
        }
    })
}



/**
 * 打印时间上传
 * */
exports.checkPrint = function (req, res, next) {
    let operator = req.body.operator || "system";
    httpClient.javaServicePost( {
        path: '/insertPrintLog',
        printDate: dateUtil.formatDateTime("yyyy-MM-dd HH:mm:ss"),
        operator: operator,
    }, (err, data) => {
        if (err) return next(err)
        res.json(new SuccessModel("打印成功", null))
    });
}



exports.checkSuccess = function (req, res, next) {
    console.log("date", req.query.date)
    let date = req.query.date
    var sql = `SELECT * FROM tb_payment_review WHERE create_time = (SELECT  create_time FROM tb_payment_review WHERE create_time like '%${date}%' ORDER BY create_time DESC LIMIT 1) `
    customSqlModel.getAllCustomSqlInfo(sql, (err, reply) => {
        if (err) return next(err)
        if (reply && reply.length <=0) return res.json(new ErrorModel("暂无数据"))
        let paymentList = []
        if (reply && reply.length > 0) {
            for (let i = 0; i < reply.length; i++ ) {
                paymentList.push({
                    name: payMode.getPaymentNameById(reply[i].payment_mode_id),
                    money : reply[i].report_money,
                    auditMoney: reply[i].audit_money,
                    createTime: reply[i].create_time,
                    operator: reply[i].operator
                })
            }
        }
       res.json(new SuccessModel(null, paymentList))
    })
}



/**
 * 根据article_family_id获取菜品及库存
 * @param msg
 * @param callback
 * @returns {*}
 */
exports.getArticleBySearchKey =  (req, res , callback) => {
    let searchKey = req.query.search_key;
    // if (!articleFamilyId)  return callback("缺少 article_family_id 参数~");

    async.parallel({
        articlesInfo:(cb)=> {
            /**
             * st.begin_time,st.end_time,st.support_week_bin,st.discount,a.id,a.name,a.article_family_id,a.price,a.fans_price,a.article_type,a.has_unit,a.is_empty, a.current_working_stock,a.meal_fee_number,a.weight_package_id,a.open_catty,a.catty_money  from tb_article a
             LEFT JOIN tb_article_support_time  ast on ast.article_id = a.id
             LEFT JOIN tb_support_time  st on st.id = ast.support_time_id
             WHERE article_family_id='${articleFamilyId}' and activated = 1 ORDER BY a.sort ASC
             * @type {string}
             */
            let sql = `
                select st.begin_time,st.end_time,st.support_week_bin,st.discount,a.id,a.name,a.article_family_id,a.price,a.fans_price,a.article_type,a.has_unit,a.is_empty,
                a.current_working_stock,a.meal_fee_number,a.weight_package_id,a.open_catty,a.catty_money, a.activated, a.initials,
                CASE
                    WHEN (a.has_unit != ' ' and a.has_unit is not null)
                    THEN
                        '2' 
                    ELSE
                        (CASE WHEN (SELECT id from tb_article_unit_new where article_id =  a.id) is not null THEN '5' ELSE	'' END)
                    END article_unit
                from tb_article a
                LEFT JOIN tb_article_support_time  ast on ast.article_id = a.id 
                LEFT JOIN tb_support_time  st on st.id = ast.support_time_id
                WHERE initials like '%${searchKey}%' or a.name like '%${searchKey}%' ORDER BY a.sort ASC`;
            customSqlModel.getAllCustomSqlInfo(sql,  (err, articlesInfo)=> {
                if (err) return cb(err);
                cb(null,articlesInfo)
            });
        },
        shopDetail: (cb)=> {
            shopDetailModel.getShopDetailFindOne((err, shopDetail)=> {
                if (err) return cb(err);
                cb(null, shopDetail);
            });
        },
    },function(error, results){
        if (error) return callback(error);
        let resultObj = [];
        async.eachLimit(results.articlesInfo, 1,  function(articleInfo, e_cb){
            if (!articleInfo.begin_time || !articleInfo.end_time || !articleInfo.support_week_bin) {
                articleInfo.current_working_stock = 0;
                let resultItem = lodash.find(resultObj, (o)=> {  return o.id ==articleInfo.id;});
                if (resultItem == undefined){ resultObj.push(articleInfo); }
                return e_cb()
            }
            let begin_time = `${moment().format('YYYY-MM-DD')} ${articleInfo.begin_time}`;
            let end_time = `${moment().format('YYYY-MM-DD')} ${articleInfo.end_time}`;
            if (dateUtil.isWeekDay(articleInfo.support_week_bin) && dateUtil.isBetween(begin_time,end_time)){
                if (results.shopDetail.posPlusType == 0){
                    if (articleInfo.fans_price){
                        articleInfo.fans_price = +(articleInfo.fans_price * articleInfo.discount * 0.01).toFixed(2);
                    }
                    let resultItem = lodash.find(resultObj, (o)=> {  return o.id ==articleInfo.id;});
                    if (resultItem == undefined){
                        resultObj.push(articleInfo);
                    }else {
                        if (resultItem.current_working_stock<articleInfo.current_working_stock){
                            resultItem.current_working_stock = articleInfo.current_working_stock;
                            resultItem.begin_time = articleInfo.begin_time;
                            resultItem.end_time = articleInfo.end_time;
                            resultItem.support_week_bin = articleInfo.support_week_bin;
                            resultItem.discount = articleInfo.discount;
                            resultItem.fans_price = (+articleInfo.fans_price).toFixed(2);
                        }
                    }
                    return e_cb()
                }else {
                    let resultItem = lodash.find(resultObj, (o)=> {  return o.id ==articleInfo.id;});
                    if (resultItem == undefined){
                        resultObj.push(articleInfo);
                    }else {
                        if (resultItem.current_working_stock<articleInfo.current_working_stock){
                            resultItem.current_working_stock = articleInfo.current_working_stock;
                            resultItem.begin_time = articleInfo.begin_time;
                            resultItem.end_time = articleInfo.end_time;
                            resultItem.support_week_bin = articleInfo.support_week_bin;
                            resultItem.discount = articleInfo.discount;
                        }
                    }
                    return e_cb()
                }
            }else {
                articleInfo.current_working_stock = 0;
                let resultItem = lodash.find(resultObj, (o)=> {  return o.id ==articleInfo.id;});
                if (resultItem == undefined){ resultObj.push(articleInfo); }
                return e_cb()
            }
        }, (err) => {
            if (err) return next(err);
            return res.json(new SuccessModel(null,resultObj))
        });
    });
};