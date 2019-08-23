/**
 * @author wxh on 2019/5/27
 * @copyright
 * @desc
 */
const httpClient = require("../../lib/util/httpClient");
const config = require("../../service/config/index");

exports.newposStockArticleUpdate =  (param,callback)=> {

    if (typeof callback != 'function') {
        callback =  ()=> {};
    }
    httpClient.basePost(config, {
        article_id:param.article_id,
        article_name:param.article_name,
        current_working_stock:param.current_working_stock,
        table_name:param.table_name,
        path: `/newpos/stock/article/update`
    }, callback)
};



exports.newposUpdateCustomPath =  (param,path,callback)=> {
    param.path  = path;
    if (typeof callback != 'function') {
        callback =  ()=> {};
    }
    httpClient.basePost(config, param, callback)
};