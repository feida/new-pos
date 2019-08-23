/**
 * @author wxh on 2019/6/19
 * @copyright
 * @desc
 */

const async = require("async");
const _ = require("lodash");
const moment = require("moment");

const customSqlModel = require("../../model/web/customSql");
const orderModel = require("../../model/web/order");
const orderItemModel = require("../../model/web/orderItem");
const orderPaymentItemModel = require("../../model/web/orderPaymentItem")
const restoApiPublishModel = require("../../model/web/restoApiPublish")

const config = require("../../service/config/index");
const httpClient = require("../../lib/util/httpClient");
//离线订单检测
exports.offlineOrderInspection = () => {
    customSqlModel.getOneCustomSqlInfo(`SELECT id from tb_order WHERE sync_state =0 and accounting_time in('${moment().subtract(2,'days').format('YYYY-MM-DD')}','${moment().subtract(1,'days').format('YYYY-MM-DD')}','${moment().format('YYYY-MM-DD')}')  and create_time < ${moment().subtract(5, 'minutes').format('x')} and (parent_order_id ='' or parent_order_id is null ) and  (order_state !=1 or  production_status !=0) order by create_time desc`, (err, result) => {
        if (err) return logger.error(`${err.toString()}`);
        if (!result) return logger.info(`没有需要同步的订单！`);

        logger.info(`检测到需要同步的订单=>${result.id}`);
        let requestData = {
            order_id: result.id,
            order_arr: [],
            order_item: [],
            order_payment_item: [],
            order_refund_remark: [],

        };
        async.waterfall([
            (done) => {
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order WHERE id  = '${result.id}' or parent_order_id = '${result.id}'`, (err, order_all) => {
                    if (err) return done(err);
                    requestData.order_arr.push(...order_all);
                    return done(err);
                })
            },
            (done) => {
                let order_item_str = (_.map(requestData.order_arr, (o) => `'${o.id}'`).join(','));
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_item WHERE order_id  in (${order_item_str})`, (err, order_item_all) => {
                    if (err) return done(err);
                    requestData.order_item.push(...order_item_all);
                    return done(err);
                })
            },
            (done) => {
                let order_item_str = (_.map(requestData.order_arr, (o) => `'${o.id}'`).join(','));
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_payment_item WHERE order_id  in (${order_item_str})`, (err, order_payment_item_all) => {
                    if (err) return done(err);
                    requestData.order_payment_item.push(...order_payment_item_all);
                    return done(err);
                })
            },
            (done) => {
                let order_item_str = (_.map(requestData.order_arr, (o) => `'${o.id}'`).join(','));
                customSqlModel.getAllCustomSqlInfo(`SELECT * from tb_order_refund_remark WHERE order_id  in (${order_item_str})`, (err, order_refund_remark_all) => {
                    if (err) return done(err);
                    requestData.order_refund_remark.push(...order_refund_remark_all);
                    return done(err);
                })
            }
        ], (err) => {
            if (err) return logger.error(`${err.toString()}`);

            restoApiPublishModel.postSyncOrderByShopIdAndOrderIdPublish(requestData)    //同步到线上
        });
    })
};