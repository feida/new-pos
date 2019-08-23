/**
 * @author wxh on 2018/10/22
 * @copyright
 * @desc
 */

const async = require('async');

const mqttInstructModel = require("../../model/web/mqttInstruct");

/**
 * 传入表名和数据修改内容 (数据 arr)
 * @param param
 * @param callback
 * @returns {*}
 */

exports.tableDataUpsert = function (param,callback) {
    if (!param.table)   return callback("table is null");
    if(!param.data ||typeof param.data != 'object' || typeof param.data.length != 'number') return callback("data is no array type");
    async.map(param.data, function (item, cb) {
        console.log(`----item---`,item)
        mqttInstructModel.upsert(param.table,item,cb)
    },callback);
};

