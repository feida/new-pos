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
     * @desc pos配置文件
     * */
    sqlite.models.TbPosConfig = sqlite.define('tb_pos_config', {
        id                           : {type: Sequelize.TEXT,    primaryKey: true  },
        sqlite                       : {type: Sequelize.TEXT,    field: 'sqlite'},
        apiUrl                       : {type: Sequelize.TEXT,    field: "api_url"  },
        javaHttpUrl                  : {type: Sequelize.TEXT,    field: "java_http_url"  },
        wsUrl                        : {type: Sequelize.TEXT,    field: "ws_url"  },
        adminServerDb                : {type: Sequelize.TEXT,    field: "admin_server_db"  },
        mqttConfig                   : {type: Sequelize.TEXT,    field: "mqtt_config"  },
    }, {
        freezeTableName: true, //默认为false，当为false时，如果你数据库中已有表a的话，sequelize会修改你的表名，后缀加个s
        timestamps:true   //默认为true，它会为你的表添加两个额外的字段“createdAt”、"updatedAt"。
    });

    return sqlite;
};
