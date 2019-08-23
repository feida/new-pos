const posSqlite = require('../../service/sqlite/pos').client;
const posConfig = posSqlite.model('tb_pos_config');


/**
 *
 * @param callback
 */
// exports.findOneInfo = (callback)=> {
//     posConfig.findOne({raw: true}).then( (result)=> {
//         callback(null, result);
//     }).catch(function (err) {
//         callback(err);
//     });
// };

/**
 *
 * @param callback
 */
exports.findOneInfo= callback => {
    posConfig.findOne({raw: true}).then( (result)=> {
        if (result) {
            let posConfig = {
                "sqlite":  result.sqlite ? JSON.parse(result.sqlite) : null,
                "api_url": result.apiUrl ? JSON.parse(result.apiUrl) : null,
                "java_http_url": result.javaHttpUrl ? JSON.parse(result.javaHttpUrl) : null,
                "ws_url": result.wsUrl ? JSON.parse(result.wsUrl) : null,
                "admin_server_db": result.adminServerDb ? JSON.parse(result.adminServerDb) : null,
                "mqtt_config": result.mqttConfig ? JSON.parse(result.mqttConfig) : null,
            }
            callback(null, posConfig);
        } else {
            callback(null, null);
        }


    }).catch(function (err) {
        callback(err);
    });
};


/**
 * 新增或者修改数据
 * @param content
 * @param callback
 */
exports.upsert =  (content, callback) =>{
    posConfig.upsert(content).then( (result) =>{
        return callback(null, result);
    }).catch( (err) =>{
        return callback(err);
    });
};

exports.update = (sql, callback) => {
    posSqlite.query(sql, {type: posSqlite.QueryTypes.SELECT})
        .then(function (results) {
            return callback(null, results.length ? results[0].orderNumber : 0);
        }).catch(function (err) {
        return callback(err);
    });
}
