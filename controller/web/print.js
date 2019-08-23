/**
 * @author wxh on 2019/6/25
 * @copyright
 * @desc
 */
const ping = require('ping');
const async = require('async');


const customSql = require("../../model/web/customSql");


exports.allPrintInfo =  (req, res, next) =>{
    let sql = "SELECT * from tb_printer ";

    customSql.getAllCustomSqlInfo(sql,  (err,data)=> {
        if (err) return next(err.toString());
        if(data.length == 0 ) return res.json(new SuccessModel(null, data));
        async.eachLimit(data, 10,  (item, cb)=> {
            ping.sys.probe(item.ip, (isAlive)=>{
                item.network_state = isAlive;
                cb()
            });
        }, (err)=> {
            res.json(new SuccessModel(null, data));
        });

    })
}

exports.timingPrintCheck =  (callback) =>{
    let sql = "SELECT * from tb_printer ";
    customSql.getAllCustomSqlInfo(sql,  (err,data)=> {
        if (err) return callback(err.toString());
        if(data.length == 0 ) return callback(null, data);
        async.eachLimit(data, 1,  (item, cb)=> {
            ping.sys.probe(item.ip, (isAlive)=>{
                item.network_state = isAlive;
                cb()
            });
        }, (err)=> {
            callback(null, data);
        });

    })
}