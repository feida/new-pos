/**
 * @author wxh on 2019/2/25
 * @copyright
 * @desc
 */

const NODE_ENV = process.env.NODE_ENV;
const requestUtil = require("../ios/requestUtil");


const posSqlite = require('../../service/sqlite/pos/index').client;
const users = posSqlite.model('tb_user');

exports.userListByNormal =(callback)=> {    //获取正常用户列表 不带分页
    users.findAll({where:{state:1}}).then((result)=> {
        return callback(null,result);
    }).catch(function (err) {
        return callback(err);
    });
};

/**
 * 获取用户列表
 */
exports.userlist = (sql, callback) => {
    posSqlite.query(sql)
        .then(results => {
            return callback(null, results[0])
        }).catch(error => {
        return callback(error)
    })
}

/**
 * 用户登录
 * @param name
 * @param password
 * @param callback
 */
exports.login = function (sql, callback) {
    posSqlite.query(sql, { type: posSqlite.QueryTypes.SELECT }
    ).then(function (results) {

        return callback(null, results);
    }).catch(function (err) {
        return callback(err);
    });
};


//根据token获取管理员详情
exports.getUserDetailByToken = function (user_token, callback) {
    users.findOne({where:{token:user_token}, raw:true}).then((result)=> {
        return callback(null,result);
    }).catch(function (err) {
        return callback(err);
    });
};