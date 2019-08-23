const tableQrcodeMode = require("../../model/web/tableQrcode");
const async = require("async");
const _ = require("lodash");
const resultUtil = require("../../lib/util/resultUtil");
const customSqlModel = require("../../model/web/customSql");
const shopTvConfig = require("../../model/web/shopTvConfig");
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
// const tvWebSocket = require("../../lib/util/tvWebSocket");
const tvWebSocket = require("../../lib/util/tvNewWebSocket");
const shopTvConfigModel = require("../../model/web/shopTvConfig")

exports.initTvWebSocket = () => {
    let sql = `select * from tb_shop_detail`;
    customSqlModel.getOneCustomSqlInfo(sql, (err, result) => {
        if (err) return(err)
        if (result.shop_mode == 2) {
            tvWebSocket.createWebSocket(result)
        }
    })
}


exports.getTvConfig = (cb) => {
    let sql = "select * from tb_shop_tv_config";
    shopTvConfig.getShopTvConfigInfo( (err, data) => {
        if (err) cb(err, null)
        cb(null, data)
    })
}



/***
 * 获取当天堂食+外带的 没有叫号的
 * @param msg
 * @param session
 * @param next
 */
exports.waitCallTPOrderList = function (req , res, next) {
    let search_code = req.query.search_code;

    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;

    let searchCondition = '';
    if (search_code) {
        searchCondition += `and (ver_code like '%${search_code}%' or table_number like '%${search_code}%') `
    }
    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;
    async.parallel({
        waitCallTPOrderList: function (cb) {
            var sql = `SELECT id,table_number,amount_with_children,order_money,create_time,customer_count,ver_code,order_state,production_status,pay_mode,call_times, serial_number, distribution_mode_id, customer_id
            from tb_order where distribution_mode_id in(1,3)
            and (parent_order_id is null or parent_order_id ='') and order_state not in (1,9) and production_status in (1,2)
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition} order by create_time asc
            limit ${condition.page_skip},${condition.page_size}
            `;
            customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data)
            });

        },
        waitCallTPOrderConut: function (cb) {
            var sql = `SELECT count(*) count
            from tb_order where distribution_mode_id in(1,3)
            and (parent_order_id is null or parent_order_id ='') and order_state not in (1,9) and production_status in (1,2)
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition}`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data.count)
            });
        },
    }, function (error, reply) {
        if (error) {
            return next(error)
        }
        let results = {};
        results.waitCallTPOrderList = (reply.waitCallTPOrderList).reverse();
        results.totalPage = Math.ceil(reply.waitCallTPOrderConut / page_size) || 1;
        results.curPage = req.query.page_index;
        results.sizePage = page_size;
        res.json(new SuccessModel(null, results))
    });
};


/***
 * 获取当天堂食+外带的 已经叫号的
 * @param msg
 * @param session
 * @param next
 */
exports.hasCallTPOrderList = function (req, res, next) {
    let searchCondition = '';
    let search_code = req.query.search_code;

    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    if (search_code) {
        searchCondition += `and (ver_code like '%${search_code}%' or table_number like '%${search_code}%') `
    }
    let condition = {};
    condition.page_skip = page_skip;
    condition.page_size = page_size;
    async.parallel({
        hasCallTPOrderList: function (cb) {
            var sql = `SELECT id,table_number,amount_with_children,order_money,create_time,customer_count,ver_code,order_state,production_status,pay_mode,call_times, serial_number, distribution_mode_id, customer_id
            from tb_order where distribution_mode_id in (1,3)
            and (parent_order_id is null or parent_order_id ='')
            and order_state not in (1,9)
            and production_status = 3 and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition} order by create_time desc
            limit ${condition.page_skip},${condition.page_size}
            `;
            // limit ${condition.page_skip},${condition.page_size}
            customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data)
            });
        },
        hasCallTPOrderCount: function (cb) {
            var sql = `SELECT count(*) count from tb_order where distribution_mode_id in (1,3)
            and (parent_order_id is null or parent_order_id ='')
            and order_state not in (1,9)
            and production_status = 3 
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) ${searchCondition} `;

            customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);

                cb(null, data.count)
            });
        },
    }, function (error, reply) {
        if (error) {
            return next(error)
        }
        let results = {};
        results.hasCallTPOrderList = reply.hasCallTPOrderList;
        results.totalPage = Math.ceil(reply.hasCallTPOrderCount / page_size) || 1;
        results.curPage = req.query.page_index;
        results.sizePage = req.query.page_size;
        res.json(new SuccessModel(null, results));
    });
};


/**
 * 叫号
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.callNumber = function (req, res, next) {
    let serialNumber = req.query.serial_number;
    if (!serialNumber) return res.json(new BadRequestError("叫号订单不存在！"));
    shopTvConfigModel.callNumber(serialNumber, (err, resultData) => {
        tvWebSocket.taskPush(resultData)
        tvWebSocket.taskPush(resultData)
        if (err) return next(err)

        if(resultData.orderId){
            restoApiPublishModel.pushOrderCallNumberPublish(resultData.orderId)
        }
        return res.json(new SuccessModel(null, resultData));
    })

};


/***
 * 获取当天堂食+外带的 没有叫号的 and 已经叫号的
 * @param msg
 * @param session
 * @param next
 */
exports.waitCallTPAndhasCallTPOrderCount =  (req, res, next) => {

    async.parallel({
        //没有叫号的
        waitCallTPOrderCount: function (done) {
            var sql = "SELECT count(*) count from tb_order where distribution_mode_id in(1,3) and (parent_order_id =''  or parent_order_id is null) and order_state not in (1,9) and production_status in (1,2) and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) order by create_time desc";
            customSqlModel.getOneCustomSqlInfo(sql, function (error, count) {
                if (error) return done(error);
                done(null, count)
            })
        },
        //已经叫号的
        hasCallTPOrderCount: function (done) {
            var sql = "SELECT count(*) count from tb_order where distribution_mode_id in (1,3) and (parent_order_id =''  or parent_order_id is null) and order_state not in (1,9) and production_status = 3 and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) order by create_time desc";
            customSqlModel.getOneCustomSqlInfo(sql, function (error, count) {
                if (error) return done(error);
                done(null, count)
            })
        },
    }, function (error, resultData) {
        if (error) return next(error, null)
        resultData.waitCallTPOrderCount = resultData.waitCallTPOrderCount.count;
        resultData.hasCallTPOrderCount = resultData.hasCallTPOrderCount.count;
        res.json(new SuccessModel(null, resultData))
    })
}
