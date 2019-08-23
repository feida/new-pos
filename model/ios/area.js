/**
 * @Description:
 * @author guofeng
 * @date 2019-05-20 11:08
 */

const requstUtil = require("./requestUtil")
/**
 * 根据座位号寻找打印机
 * @param orderInfo
 * @param cb
 */
exports.getPrintMachineByTableNumber = function (orderInfo, callback) {
    let sql = `SELECT p.* from tb_table_qrcode tq LEFT JOIN tb_area a on tq.area_id = a.id  LEFT JOIN tb_printer p on a.print_id = p.id  where tq.table_number = ? and ${support} = 1  and a.print_id not  null`
    let support = orderInfo.distribution_mode_id == 1 ? 'support_tangshi' : 'support_waidai';  // 1 堂吃  3 外带

    posSqlite.query(content,{replacements: [orderInfo.table_number], type: posSqlite.QueryTypes.SELECT}
    ).then(function (resultsBen = []) {
        posSqlite.query(`SELECT * FROM tb_printer WHERE print_type = 2 and ticket_type = 0 and range  =0  and ${support} = 1 `, {type: posSqlite.QueryTypes.SELECT}
        ).then(function (results = []) {
            return callback(null, results.concat(resultsBen));
        }).catch(function (err) {
            return callback(err);
        });
    }).catch(function (err) {
        return callback(err);
    });
};
