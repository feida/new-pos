/**
 * @Description:
 * @author guofeng
 * @date 2019-04-25 15:14
 */


const customSql = require("../../model/web/customSql");

const {SuccessModel, ErrorModel} = require ("../../lib/util/result");

/**
 * 根据菜品 ID 查询新规格详情
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.selectUnitListByArticleId = function (req, res, next) {
    var articleId = req.query.article_id;
    if (!articleId) {
        return res.json(new ErrorModel("新规格 ID 不存在"));
    }
    let sql = `SELECT aun.id,aun.choice_type,u.name from 
                tb_article_unit_new aun LEFT JOIN tb_unit u on aun.unit_id = u.id where 
                article_id = '${articleId}' and aun.is_used = 1`;
    customSql.getAllCustomSqlInfo(sql, function (error, units) {
        if (error) return next(error)
        sql = "SELECT aud.*,ud.name from tb_article_unit_detail aud LEFT JOIN tb_unit_detail ud on aud.unit_detail_id = ud.id where article_unit_id in (";
        for (let unit of units) {
            sql += "'" + unit.id + "',"
        }
        sql = sql.substring(0, sql.length - 1);
        sql += ") and aud.is_used = 1 ORDER BY aud.sort ASC";
        customSql.getAllCustomSqlInfo(sql, function (error, unitDetails) {
            if (error) return next(error)
            for (var unit of units) {
                unit.details = [];
                for (detail of unitDetails) {
                    if (detail.article_unit_id == unit.id) {
                        // 前端预留字段
                        detail.state = 0;
                        unit.details.push(detail);
                    }
                }
            }
            return res.json(new SuccessModel(null, units));
        })
    })
}