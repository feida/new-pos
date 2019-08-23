/**
 * @author wxh on 2019/3/20
 * @copyright
 * @desc
 */

const print = require('../../service/print')
const path = require('path')
//获取 打印票据测试
exports.printBillTestByIp = (PRINTERIP,callback) => {
    let param = {};
    param.PRINTERIP =PRINTERIP || '192.168.1.224';              // ip
    param.PRINTERPORT ='ETH';                       //端口
    print.billPrint(param.PRINTERIP,param.PRINTERPORT,path.resolve(__dirname,'../../report/test.xml'),param,callback)
};

let qr = require('qr-image');
let Image = require('../../service/print/lib/image');
let getPixels = require('get-pixels');

//获取 打印票据测试
exports.printQrcodeTestByIp = (PRINTERIP,callback) => {
    let param = {};
    param.PRINTERIP =PRINTERIP || '192.168.1.224';              // ip
    param.PRINTERPORT ='ETH';                       //端口
    param.MEMO = '电饭锅电饭锅电饭锅的';

    var options = { type: 'png', mode: 'dhdw' };
    var buffer = qr.imageSync(`https://doc.oschina.net/resto-pos-table#widget_9206948`, options);
    var type = ['image', options.type].join('/');
    getPixels(buffer, type,  (err, pixels)=> {
        // param.QRCODE = err?"":new Image(pixels).toRaster();
        print.billPrint(param.PRINTERIP,param.PRINTERPORT,path.resolve(__dirname,'../../report/test_qrcode.xml'),param,callback)

    })


};
//获取 打印标签测试
exports.printLabelTestByIp = (PRINTERIP,callback) => {
    let param = {};

    param.RESTAURANT_NAME ='店面';              //店名
    param.ARTICLE_NUMBER ="1";              //001
    param.CUSTOMER_TEL ="13127538810";              //001
    param.DATETIME ='2017-12-22 16:55:00';                       //日期
    param.ARTICLE_NAME ='萝卜汁';
    param.RESTAURANT_ADDRESS='长宁区金钟路968号凌空SOHO二号楼103';

    param.PRINTERIP =PRINTERIP || '192.168.1.201';              // ip
    param.PRINTERPORT ='ETH';                       //端口
    print.stickersPrint(param.PRINTERIP,param.PRINTERPORT,path.resolve(__dirname,'../../report/restaurant_label.xml'),param,callback)
};