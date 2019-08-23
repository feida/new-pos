/**
 * @Description:
 * @author guofeng
 * @date 2019-05-24 18:30
 */

exports.updateModel = (id, tableName, params, callback) => {
    if (id || tableName || params == {}) callback({id: id, tableName: tableName, params: params})
    let sql = `update ${tableName} set `
    for (let item in params) {
        sql += ` item=${params[item]}, `
    }
    sql += ` 1=1 ` // 注意，假如 params 为空， 这样写不至于 报错
    callback(null, sql)
}