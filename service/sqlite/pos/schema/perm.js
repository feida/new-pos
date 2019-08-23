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
     * @desc 权限
     * */
    sqlite.models.TbPerm = sqlite.define('tb_perm', {
        id              : {type: Sequelize.TEXT,    primaryKey: true  },        //id
        pval            : {type: Sequelize.TEXT,    field: 'pval'},             //权限值，shiro的权限控制表达式
        parent          : {type: Sequelize.TEXT,    field: 'parent'},          //父权限id
        pname           : {type: Sequelize.TEXT,    field: 'pname'},            //权限名称
        ptype           : {type: Sequelize.INTEGER,    field: 'ptype'},            //权限类型：1.菜单 2.按钮 3.接口 4.特殊
        leaf            : {type: Sequelize.INTEGER,    field: 'leaf'},            //是否叶子节点
    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return sqlite;
};