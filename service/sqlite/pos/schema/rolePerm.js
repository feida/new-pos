/**
 * @author wxh on 2019/2/18
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');

exports.define = function (sqlite) {
    if (!sqlite.models) {
        sqlite.models = {}
    }
    /**
     * @desc 角色权限关联
     * */
    sqlite.models.TbRolePerm = sqlite.define('tb_role_perm', {
        id              : {type: Sequelize.TEXT,    primaryKey: true  },        //id
        role_id         : {type: Sequelize.TEXT,    field: 'role_id'},             //权限值，shiro的权限控制表达式
        perm_val        : {type: Sequelize.TEXT,    field: 'perm_val'},             //权限值，shiro的权限控制表达式
        perm_type       : {type: Sequelize.INTEGER,    field: 'perm_type'},             //权限值，shiro的权限控制表达式

    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return sqlite;
};