/**
 * @Description:
 * @author guofeng
 * @date 2019-05-20 11:28
 */

const request = require("request");
const sqlite3OrmUtil = require("../../lib/util/sqlite3OrmUtil");
let url = `http://127.0.0.1:12345`;


exports.getSqliteDbPath = (callback) => {
    request({
        url: url + `/dbPath`,
        method: "POST",
        json: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: ""
    }, function (err, response, body) {
        if (err) return callback(err);
        if (!body.success) return callback(null, null);
        return callback(null, body);
    })
}

/**
 * 查询 sql
 * @param sql
 * @param callback
 */
exports.querySql = (sql, callback) => {
    sql = `sql=${sql}`
    request({
        url: url + `/querySql`,
        method: "POST",
        json: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: sql
    }, function (err, response, body) {
        if (err) return callback(err);
        if (!body.success) return callback(null, null);
        return callback(null, body);
    })
}


/***
 * @desc 创建数据库，并且创建相应的表
 * @param path
 * @param callback
 */
exports.createIosDb = (path, callback) => {
    let sql = `sql=${path}`
    request({
        url: url + `/importSql`,
        method: "POST",
        json: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: sql
    }, function (error, response, body) {
        console.log("err", error, body)
        if (error) return callback(error);
        if (!body) return callback(`ios 数据库返回错误:${JSON.stringify({
            body: body,
            params: params
        })}`, null)
        if (!body.success) return callback(null, null);
        return callback(null, body);
    })
}


/**
 * @desc  插入记录
 * @param params {sqlPath, sql, tableNumber}
 * @param callback
 */
exports.insert = (params, callback) => {
    let sql = `sql=${params}`
    request({
        url: url + `/executeSql`,
        method: "POST",
        json: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: sql
    }, function (error, response, body) {
        if (error) return callback(error);
        if (!body) return callback(`ios 数据库返回错误:${JSON.stringify({
            body: body,
            params: params
        })}`, null)
        if (!body.success) return callback(null, null);
        return callback(null, body);
    })
}

/**
 *
 * @param params {sqlPath, sql}
 * @param callback
 */
exports.executeOrmSql = (params, callback) => {
    let url = `http://127.0.0.1:12345`;
    request({
        url: url + `/executeSql`,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: params
    }, function (error, response, body) {
        console.log("err", error, body)
        if (error) return callback(error);
        if (!body) return callback(`ios 数据库返回错误:${JSON.stringify({
            body: body,
            params: params
        })}`, null)
        if (!body.success) return callback(null, null);
        return callback(null, body);
    })
}