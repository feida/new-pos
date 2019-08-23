/**
 * @Description:
 * @author guofeng
 * @date 2019-04-16 17:37
 */

let  customSqlModel  = require('../../model/pos/customSql');
let  generalUtil = require('../../lib/util/generalUtil');

exports.getPaymentSelectByOrderId = (req, res, next) => {
    let orderId = req.query.orderId;
    var sql = `SELECT payment_mode_id, sum(pay_value) pay_value, result_data, to_pay_id from tb_order_payment_item where order_id in 
                ( SELECT id FROM tb_order WHERE parent_order_id = '${orderId}' or id = '${orderId}' ) 
                and payment_mode_id not in ('13','14','15','20','21')  GROUP BY payment_mode_id`;
    customSqlModel.getAllCustomSqlInfo(sql, function (err, data) {
        let orderPayments = [];
        for (let item of data) {
            orderPayments.push(generalUtil.convertHumpName(item));
        }
        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: orderPayments || []
            }
        })
    });
}
