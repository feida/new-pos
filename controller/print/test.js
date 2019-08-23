/**
 * @author wxh on 2019/3/20
 * @copyright
 * @desc
 */

const test = require('../../model/print/test');


//获取
exports.printBillTestByIp = (req, res, next) => {

    let ip = req.query.ip;
    test.printBillTestByIp(ip,(err,result)=>{
        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: result
            }
        })
    })
};


//获取
exports.printQrcodeTestByIp = (req, res, next) => {

    let ip = req.query.ip;
    test.printQrcodeTestByIp(ip,(err,result)=>{
        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: result
            }
        })
    })
};

//获取
exports.printLabelTestByIp = (req, res, next) => {

    let ip = req.query.ip;
    test.printLabelTestByIp(ip,(err,result)=>{
        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: result
            }
        })
    })
};

