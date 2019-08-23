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
     * @desc 角色
     * */
    sqlite.models.TbRole = sqlite.define('tb_role', {
        id              : {type: Sequelize.TEXT,    primaryKey: true  },        //id
        rname           : {type: Sequelize.TEXT,    field: 'rname' , unique:true },             //角色名，用于显示
        rdesc           : {type: Sequelize.TEXT,    field: 'rdesc'},            //角色描述
        rval            : {type: Sequelize.TEXT,    field: 'rval'},             //角色值、用于权限判断
    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return sqlite;
};