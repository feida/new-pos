/**
 * @Description:
 * @author guofeng
 * @date 2019-04-25 15:10
 */

const customSqlModel = require( "../../model/pos/customSql");

const {SuccessModel, ErrorModel} = require( "../../lib/util/result");

exports.getTgs = function (req, res, next) {
    let type = req.query.type;
    if (!type) {
        return res.json(new ErrorModel("缺少 type"));
    }
    var condition = [msg.type];
    let sql = `select * from tb_tag where type = '${condition}' `;
    customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
        if (error) return res.json(new ErrorModel(error, null));
        return res.json(new SuccessModel(null, data))
    })
}