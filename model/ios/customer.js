/**
 * @Description:
 * @author guofeng
 * @date 2019-05-20 11:16
 */
const requestUtil = require("./requestUtil")

exports.getAllCustomSqlInfo = function (sql, callback) {
    requestUtil.querySql(sql, (err, result) => {
        if (err) return callback(err)
        return callback(null, result)
    })
};

exports.getOneCustomSqlInfo = function (sql, callback) {

    if (typeof callback != 'function') {
        callback = function () { };
    }
    posSqlite.query(`${sql}`,
        { type: posSqlite.QueryTypes.SELECT }
    ).then(function (results) {
        return callback(null, results ? results[0] : null);
    }).catch(function (err) {
        return callback(err);
    });
};

exports.insertSelective = function (table, param, callback) {

    if (typeof callback != 'function') {
        callback = function () { };
    }

    let sql = sqlite3OrmUtil.generateInsertSelectiveSqlById(`${table}`, param);
    param = sqlite3OrmUtil.formatParam(param);
    posSqlite.query(`${sql}`,
        { replacements: param, type: posSqlite.QueryTypes.INSERT }
    ).then(function (results) {
        return callback(null, results);
    }).catch(function (err) {
        return callback(err);
    });
};
exports.updateSelective = function (table, param, callback) {

    if (typeof callback != 'function') {
        callback = function () { };
    }

    let sql = sqlite3OrmUtil.generateUpdateSelectiveSql(`${table}`, 'id', param);
    param = sqlite3OrmUtil.formatParam(param);
    posSqlite.query(`${sql}`,
        { replacements: param, type: posSqlite.QueryTypes.UPDATE }
    ).then(function (results) {
        return callback(null, results);
    }).catch(function (err) {
        return callback(err);
    });
};

exports.updateSelectiveCondition = function (table, param, condition, callback) {
    let sql = sqlite3OrmUtil.generateUpdateSelectiveConditionSql(`${table}`, condition, param);
    param = sqlite3OrmUtil.formatParam(param);
    condition = sqlite3OrmUtil.formatParam(condition);
    posSqlite.query(`${sql}`,
        { replacements: Object.assign(param, condition), type: posSqlite.QueryTypes.UPDATE }
    ).then(function (results) {
        return callback(null, results);
    }).catch(function (err) {
        return callback(err);
    });
};
