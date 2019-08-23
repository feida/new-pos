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
    sqlite.models.TbRole = sqlite.define('tb_user_role', {
        id               : {type: Sequelize.TEXT,    primaryKey: true  },        //id
        userId           : {type: Sequelize.TEXT,    field: 'user_id'},         //用户id
        roleId           : {type: Sequelize.TEXT,    field: 'role_id'},         //角色id
    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return sqlite;
};