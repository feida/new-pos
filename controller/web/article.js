/**
 * @Description:
 * @author guofeng
 * @date 2019-04-19 14:00
 */

const customSql = require("../../model/web/customSql");

const articlePriceModel = require("../../model/web/articlePrice");

const shopDetailModel = require('../../model/web/shopDetail');

const articleModel = require('../../model/web/article');
const serverApiModel = require('../../model/web/serverApi');
const restoApiPublishModel = require("../../model/web/restoApiPublish")


const {ErrorModel, SuccessModel} = require('../../lib/util/result');

const {parseRequestParam} = require('../../lib/util/parseParamUtil');
const moment = require("moment");
const async = require("async");

/**
 * @desc 上下架
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.articleUpOrDown = (req, res, next) => {
    let id = req.query.id;
    let activated = req.query.activated || 0;
    if (!id) return next(new BadRequestError('id is null'));
    // 手动上下架
    articleModel.updateById(id, {activated: activated},  (err)=> {
        if (err) return next(err.toString());
        res.json(new SuccessModel(null, null));
        let condition = {
            article_id:id,
            article_activated:activated
        };
        restoApiPublishModel.articleManagementPublish(condition);
    });
}

/**
 * @desc 手动沽清
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.articleIsEmpty = (req, res, next) => {
    let id = req.body.id;
    let empty = req.body.empty || 0;
    //数据非空验证
    if (!id) return next(new BadRequestError('id is null'));
    if (!empty) return next(new BadRequestError('empty is null'));

    //手动沽清
    let paramArticle = {
        isEmpty: empty,
        currentWorkingStock: 0 //对应库存设置为0
    };
    //沽清
    articleModel.updateById(id, paramArticle, function (err) {
        if (err) return next(err.toString());
        res.json(new SuccessModel(null, null));

        let condition = {
            article_id:id,
            article_name:"",
            current_working_stock:0,
            table_name:`tb_article`
        };
        serverApiModel.newposStockArticleUpdate(condition)
    });
}


/**
 * @desc 编辑库存
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.articleStock = (req, res, next) => {
    let id = req.query.id;
    let currentStock = req.query.current_stock;

    //数据非空验证
    if (!id) return next(new BadRequestError('id is null'));
    if (!currentStock) return next(new BadRequestError('current_stock is null'));

    //库存参数
    let paramArticle = {
        currentWorkingStock: currentStock > 0 ? currentStock : 0,
        isEmpty: currentStock <= 0 ? 1 : 0
    };

    //手动修改库存
    articleModel.updateById(id, paramArticle, (err) => {
        if (err) return next(err.toString())
        res.json(new SuccessModel(next));

        let condition = {
            article_id:id,
            article_name:"",
            current_working_stock:currentStock,
            table_name:`tb_article`
        }
        serverApiModel.newposStockArticleUpdate(condition)
    });
}

/**
 * @desc 批量恢复所有库存
 * @param req
 * @param res
 * @param next
 */
exports.recoveryArticle = function (req, res, next) {
    let sql = "";
    if (`${moment().format('d')}` == (5 || 6)) {
        sql = "update tb_article set  current_working_stock= stock_weekend ,is_empty = 0 WHERE activated = 1";
    } else {
        sql = "update tb_article set  current_working_stock= stock_working_day ,is_empty = 0 WHERE activated = 1";
    }
    customSql.getOneCustomSqlInfo(sql, function (err) {
        if (err) return next(err.toString());
        res.json(new SuccessModel(null, null));
    })
}

/**
 * @desc 获取称重菜品
 * @param req
 * @param res
 * @param next
 */
exports.getOpenCatty=  (req, res, next) => {
    articleModel.findAllInfoByConditions({},(err, relv)=>{
        if (err) next(err)
        let obj = {
            status:false
        };
        if (relv.length == 0 )  return res.json(new SuccessModel(null, obj));
        let item =  relv.filter((item) =>  item.openCatty ==1);
        if (item.length == 0) {
            return res.json(new SuccessModel(null, obj));
        }else {
            obj.status = true;
            return res.json(new SuccessModel(null, obj));
        }
    })
}

//套餐可售 -- 套餐和子品所有库存全部恢复
exports.batchRecoveryArticle = (req, res, next) =>{
    let articleIds = req.body.article_ids;
    let sql = '';
    let ids = [];
    if (`${moment().format('d')}` == (5 || 6)) {
        sql = "update tb_article set  current_working_stock= 100 ,is_empty = 0 WHERE activated = 1";
    } else {
        sql = "update tb_article set  current_working_stock= 100 ,is_empty = 0 WHERE activated = 1";
    }
    let list = "'" + articleIds.join("','") + "'"
    if (list && list.length > 0 ) {
        sql += ` and id in (${list})`
    }
    customSql.getOneCustomSqlInfo(sql,  (err, articleInfo)=> {
        async.eachLimit(articleIds, 1, item =>{
            let condition = {
                article_id: item,
                article_name: "",
                current_working_stock: 100,
                table_name:`tb_article`
            };
            serverApiModel.newposStockArticleUpdate(condition)
        })

        if (err) return next(err)
        return res.json(new SuccessModel(null, null))
    })
}