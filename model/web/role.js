/**
 * @author wxh on 2019/2/25
 * @copyright
 * @desc
 */
const posSqlite = require('../../service/sqlite/pos').client;

const NODE_ENV  = process.env.NODE_ENV;
const requestUtil = require('../ios/requestUtil');
const sqlite3OrmUtil = require("../../lib/util/sqlite3OrmUtil");
const Role = posSqlite.model('tb_role');

exports.createNewRole =(role,callback)=> {    //创建角色

    // 验证角色是否重复
    let condition = {
        where:{
            rname: role.rname
        }
    };
    Role.findOne(condition).then((rname)=> {
        if (rname) {
            return callback(new BadRequestError('此角色已存在！'));
        } else {
            let doc = {
                id:role.id,
                rname: role.rname,
                rdesc: role.rdesc ,
                rval: role.rval ,
                create_time: new Date(),
                update_time: new Date()
            };
            Role.build(doc).save().then((result) =>{
                return callback(null, result);
            }).catch(function (err) {
                return callback(err);
            });
        }
    }).catch(function (err) {
        return callback(err);
    });
};
exports.getRoleTotal =(condition,callback)=> {    //获取角色总数
    Role.count({where:condition}).then((result)=> {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });

};

exports.getRoleList =(condition,pageSkip,pageSize,callback)=> {  //获取角色
    Role.findAll({
        where:condition,
        offset: pageSkip,
        limit: pageSize
    }).then((result)=> {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });

};

