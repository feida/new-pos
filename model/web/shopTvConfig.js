const posSqlite = require('../../service/sqlite/pos').client;
const shopTvConfig = posSqlite.model('tb_shop_tv_config');
const async = require('async');
const sqlite3OrmUtil = require("../../lib/util/sqlite3OrmUtil");
const tvWebSocket = require("../../lib/util/tvWebSocket");
const productionStatus = require("../../lib/constant/ProductionStatus");
const dateUtil = require("../../lib/util/dateUtil");
const moment = require("moment")

/**
 * @desc
 * */
exports.getShopTvConfigInfo = function (callback) {
    shopTvConfig.findOne({raw: true}).then(function (result) {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });
};

exports.callNumber = (serialNumber, callback) => {
    async.waterfall([
        (cb) => { // 根据 serialNumber 查询订单信息
            let sql = `select * from tb_order where serial_number like  '%${serialNumber}%' and  accounting_time=strftime('%Y-%m-%d', datetime('now','localtime'))`;
            posSqlite.query(`${sql}`,{type: posSqlite.QueryTypes.SELECT}
            ).then(function (results) {
                return cb(null, results ? results[0] : null);
            }).catch(function (err) {
                return cb(err);
            });
        },

        (orderInfo, cb) => { // 更改本地订单状态
            let param = {
                id: orderInfo.id,
                call_times: +orderInfo.call_times + 2
            };
            if (orderInfo.production_status == (productionStatus.HAS_PRINT || productionStatus.PUSH_ORDER)) {
                param.production_status = productionStatus.HAS_CALL;
            }
            param.call_number_time = moment().format('YYYY-MM-DD HH:mm:ss');
            let sql = `update tb_order set call_times = ${param.call_times}, production_status = 3, call_number_time='${param.call_number_time }' where id = '${param.id}'`
            param = sqlite3OrmUtil.formatParam(param);
            console.log(sql)
            posSqlite.query(`${sql}`,{replacements: param, type: posSqlite.QueryTypes.UPDATE}
            ).then(function (results) {
                return cb(null, orderInfo);
            }).catch(function (err) {

                return cb(err);
            });
        },

        (orderInfo, cb) => { // 查询菜品项
            let sql = `SELECT * from tb_order_item where order_id = '${orderInfo.id}'  ORDER BY type DESC`;
            posSqlite.query(`${sql}`,{type: posSqlite.QueryTypes.SELECT}
            ).then(function (results) {
                let resultData = {
                    verCode: orderInfo.ver_code,
                    orderId: orderInfo.id,
                    orderItemList: results
                };
                return cb(null, resultData)
            }).catch(function (err) {
                console.log("err, see", err)
                return cb(err);
            });
        },

        (resultData, cb) => {// 对数据进行封装，并且压到 叫号队列
            let orderItemList = resultData.orderItemList;
            let articleItem = [];
            if(orderItemList && orderItemList.length){
                for(let item of orderItemList){
                    articleItem.push({
                        articleName: item.article_name.length > 10 ? item.article_name.substring(0,9) + "..." : item.article_name,
                        count: item.count
                    });
                }
            }
            let data = {
                type: "call",
                code: resultData.verCode,
                orderId: resultData.orderId,
                data: articleItem,
                createTime: new Date()
            };
            return cb(null, data)
        }
    ],function (err, data) {
        // 把叫号信息推送到服务器端
        console.log("error", err)
        if (err) callback(err, null)
        return callback(null, data)
    })
}
