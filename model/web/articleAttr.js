/**
 * @author wxh on 2018/2/12
 * @copyright
 * @desc
 */


const posSqlite = require('../../service/sqlite/pos').client;
const articleAttr = posSqlite.model('tb_article_attr');
const async = require('async');

const NODE_ENV  = process.env.NODE_ENV;
const requestUtil = require('../ios/requestUtil');
const sqlite3OrmUtil = require("../../lib/util/sqlite3OrmUtil");
/**
 * 新增数据
 * @param content
 * @param callback
 */
exports.save = function(content, callback) {
    articleAttr.build(content).save().then(function (result) {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });
};



/**
 * 根据Id 修改数据
 * @param id
 * @param update
 * @param callback
 */
exports.updateById = function(id, update, callback) {
    articleAttr.update(update, {where: {id}}).then(function (result) {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });
};
/**
 * 根据id 获取信息
 * @param id
 * @param callback
 */
exports.findOneInfoById = function (id, callback) {
    articleAttr.findOne({ where:{id} }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};

/**
 * 根据条件获取信息
 * @param conditions
 * @param callback
 */
exports.findAllInfoByConditions = function (conditions, callback) {
    articleAttr.findAll({
        where:conditions
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};
