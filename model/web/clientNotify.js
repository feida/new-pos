const posSqlite = require('../../service/sqlite/pos').client;

exports.generalNotify = (id, callback) => {

    let sql = `select id, table_number, order_state, production_status, customer_count,parent_order_id, distribution_mode_id, create_time, ver_code  from tb_order where id = '${id}'`

    posSqlite.query(`${sql}`,
        {type: posSqlite.QueryTypes.SELECT}
    ).then(function (results) {
        return callback(null, results[0]);
    }).catch(function (err) {
        return callback(err);
    });

}
