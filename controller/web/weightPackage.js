/**
 * @Description:
 * @author guofeng
 * @date 2019-04-16 18:22
 */

const { SuccessModel, ErrorModel } =require('../../lib/util/result')

let customSql = require('../../model/web/customSql');
const async = require('async')

/**
 * @desc 根据菜品id 查询重量包
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.selectWeightPackageByArticleId = (req, res, next) => {
    let articleId = req.query.article_id;
    if (!articleId) return res.json(new SuccessModel("菜品Id不存在"));

    let sql = `SELECT weight_package_id  FROM tb_article WHERE id = '${articleId}' and open_catty = 1;`;
    customSql.getOneCustomSqlInfo(sql, function (error, weightPackageIdsInfo) {
        if (!weightPackageIdsInfo) return res.json(new ErrorModel('菜品缺失'))
        weightPackageIds = weightPackageIdsInfo.weight_package_id;
        let weightPackageResult = [];
        sql = `SELECT * FROM tb_weight_package WHERE id in (${weightPackageIds.toString()});`
        customSql.getAllCustomSqlInfo(sql, function (error, weightPackageInfo) {
            async.eachLimit(weightPackageInfo, 1, (item, cb) => {
                sql = `SELECT * FROM tb_weight_package_detail WHERE weight_package_id = '${item.id}';`
                customSql.getAllCustomSqlInfo(sql, (err, weightPackageDetailInfo) => {
                    item.list = weightPackageDetailInfo;
                    weightPackageResult.push(item);
                    cb(err, null);
                })
            }, (err) => {
                return res.json(new SuccessModel(null, weightPackageResult))
            });
        })
    })
}