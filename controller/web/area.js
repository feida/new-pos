const { SuccessModel } = require('../../lib/util/result')

const customer = require('../../model/web/customSql');

/***
 * 获取 餐位区域 几何
 * @param req
 * @param res
 * @param next
 */
exports.areaList = (req, res, next) => {
    let sql = `SELECT id, name FROM tb_area`
    customer.getAllCustomSqlInfo(sql, (err, data) => {
        if(err) return next(err);
        return res.json(new SuccessModel('', data))
    });
}