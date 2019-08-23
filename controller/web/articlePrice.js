/**
 * @Description:
 * @author guofeng
 * @date 2019-04-25 14:47
 */

const articlePriceModel = require("../../model/web/articlePrice");
const serverApiModel = require("../../model/web/serverApi");
const articleModel = require("../../model/web/article");

const {SuccessModel, ErrorModel} = require("../../lib/util/result");

const customSqlModel = require("../../model/pos/customSql");

/**
 * 根据 菜品 ID 获取 菜品老规格详情
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.getArticlePriceByArticleId = function (req, res, next) {
    let articleId = req.query.article_id;

    //数据非空验证
    if (!articleId) return next(new BadRequestError('article_id is null'));
    let sql = `select * from tb_article_price where article_id = '${articleId}';`
    customSqlModel.getAllCustomSqlInfo(sql, (err, articlePriceInfo) => {
        if (err) return next(err);
        res.json(new SuccessModel(null, articlePriceInfo));
    })
}

/***
 * @desc 沽清老规格
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.articlePriceIsEmpty = (req, res, next) => {
    let id = req.body.id;
    let articleId = req.body.article_id;

    //数据非空验证
    if (!id) return next(new BadRequestError('id is null'));
    if (!articleId) return next(new BadRequestError('article_id is null'));

    let articleMainId = articleId.split('@')[0];
    //更新老规格子项
    articlePriceModel.updateById(id, {currentWorkingStock: 0}, function (err) {
        if (err) return next(err.toString())
        customSqlModel.getOneCustomSqlInfo(`select * from tb_article where id = '${articleId}'`, function (err, article) {
            if (err) return next(err.toString());

            let sql = `SELECT sum(current_working_stock) stock_num FROM tb_article_price  WHERE article_id = '${articleMainId}'`;
            customSqlModel.getOneCustomSqlInfo(sql, function (err, article_mum) {
                if (err) return next(err.toString());
                //获取最新的库存
                let articleCount = article_mum.stock_num;
                let paramArticle = {
                    id: articleMainId,
                    current_working_stock: articleCount > 0 ? articleCount : 0, //菜品数量不能为负数
                    is_empty: articleCount == 0 ? 1 : 0 //菜品数量等于零 自动沽清此菜品
                };
                //更新老规格主项
                customSqlModel.updateSelective('tb_article', paramArticle, function (err, reply) {
                    if (err) return next(err.toString());

                    res.json(new SuccessModel(null, null))

                    let condition = {
                        article_id:id,
                        article_name:"",
                        current_working_stock:0,
                        table_name:`tb_article_price`
                    };
                    serverApiModel.newposStockArticleUpdate(condition)
                });
            });
        });
    });
}

/**
 * @desc 老规格编辑库存
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.articlePriceStock = function (req, res, next) {
    let id = req.query.id;
    let currentStock = req.query.current_stock; // 菜品数量
    let articleId = req.query.article_id;
    //数据非空验证
    if (!id) return next(new BadRequestError('id is null'));
    if (!currentStock) return next(new BadRequestError('current_stock is null '));
    if (!articleId) return next(new BadRequestError('article_id is null'));

    //老规格子项参数
    var paramArticlePrice = {
        id: id,
        current_working_stock: currentStock > 0 ? currentStock : 0
    };

    let articleMainId = articleId.split('@')[0];
    //更新老规格子项目
    customSqlModel.updateSelective('tb_article_price', paramArticlePrice, function (err, reply) {
        if (err) return next(err.toString());
        let sql = `SELECT sum(current_working_stock) stock_num FROM tb_article_price  WHERE article_id = '${articleMainId}'`;
        customSqlModel.getOneCustomSqlInfo(sql, function (err, article_mum) {
            if (err) return next(err.toString());
            //获取最新的库存
            let articleCount = article_mum.stock_num;
            let paramArticle = {
                id: articleMainId,
                current_working_stock: articleCount > 0 ? articleCount : 0, //菜品数量不能为负数
                is_empty: articleCount == 0 ? 1 : 0 //菜品数量等于零 自动沽清此菜品
            };
            //更新老规格主项
            customSqlModel.updateSelective('tb_article', paramArticle, function (err, reply) {
                if (err) return next(err.toString());

                return res.json(new SuccessModel(null, null))

                let condition = {
                    article_id:id,
                    article_name:"",
                    current_working_stock:currentStock,
                    table_name:`tb_article_price`
                }
                serverApiModel.newposStockArticleUpdate(condition)
            });
        });
    });
}
