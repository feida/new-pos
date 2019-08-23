/**
 * @author wxh on 2019/3/20
 * @copyright
 * @desc
 */
const fileUtil = require("../../lib/util/fileUtil");
const queuefun = require('queue-fun');
const uuidV4 = require('uuid/v4');
const Queue = queuefun.Queue();
const q = queuefun.Q;  //配合使用的Promise流程控制类，也可以使用原生Promise也可以用q.js代替
//实列化一个最大并发为1的队列
const queue1 = new Queue(1, {
    "event_succ": function (data) {
    }  //成功
    , "event_err": function (err) {
    }  //失败
});
const Printer = require('./lib/Printer').Printer;

const LabelPrinter = require('./lib/LabelPrinter').LabelPrinter;

const posSqlite = require('../sqlite/pos').client;
const printRecord = posSqlite.model('tb_print_record');

const printerModel = require("../../model/web/printer");


/**
 * @desc 小票通用打印
 * */
exports.receiptsPrint = (PRINTERIP, PRINTERPORT, PRINTTEMPLATE, PRINTOBJECT, callback) => {
    let TotalTemplate = (data, printPath) => {

        let deferred = q.defer();
        let printer = new Printer(PRINTERIP, PRINTERPORT || 'ETH');
        printer.print(printPath, data, (res) => {
            deferred.resolve({code: 200, msg: res.msg});
        });
        return deferred.promise;
    };

    queue1.go(TotalTemplate, [PRINTOBJECT, PRINTTEMPLATE]).then(function (ben) {
        if (ben.code != 200) return callback(ben.msg);
        return callback(null, ben.msg);
    });
};


/**
 * @desc 贴纸通用打印
 * */
exports.stickersPrint = function (PRINTERIP, PRINTERPORT, PRINTTEMPLATE, PRINTOBJECT, callback) {
    let TotalTemplate = (data, printPath) => {

        let deferred = q.defer();
        let printer = new LabelPrinter(PRINTERIP, PRINTERPORT || 'ETH');
        printer.print(printPath, data, (res) => {
            deferred.resolve({code: 200, msg: res.msg});
        });
        return deferred.promise;
    };

    queue1.go(TotalTemplate, [PRINTOBJECT, PRINTTEMPLATE]).then(function (ben) {
        if (ben.code != 200) return callback(ben.msg);
        return callback(null, ben.msg);
    });
};


/**
 * @desc 票据通用打印无队列
 * */
exports.billPrint = (PRINTERIP, PRINTERPORT, PRINTTEMPLATE, PRINTOBJECT, callback) => {
    let printer = new Printer(PRINTERIP, PRINTERPORT || 'ETH');

    printer.print(PRINTTEMPLATE, PRINTOBJECT, (res) => callback(null,res));
};

/**
 * @desc 标签通用打印无队列
 * */
exports.labelPrint = (PRINTERIP, PRINTERPORT, PRINTTEMPLATE, PRINTOBJECT, callback) => {
    let printer = new LabelPrinter(PRINTERIP, PRINTERPORT || 'ETH');
    printer.print(PRINTTEMPLATE, PRINTOBJECT, (res) => callback(null,res));
};