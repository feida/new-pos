/**
 * @author wxh on 2018/9/21
 * @copyright
 * @desc
 */
const async = require('async');


const posSqlite = require('../../service/sqlite/pos').client;

exports.upsert = function (tableName,content,callback) {
    posSqlite.model(`${tableName}`).upsert(content).then(function (result) {
        return callback(null,result);
    }).catch(function (err) {
        return callback(err);
    });
};
exports.remove = (tableName,callback)=> {
    posSqlite.model(`${tableName}`).sync({force: true}).then(callback);
};
