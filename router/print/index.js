/**
 * @author wxh on 2019/3/20
 * @copyright
 * @desc
 */
const test = require("../../controller/print/test");
const print = require("../../controller/print");

exports.map = function (app) {

    //--------------------打印测试--------------------

    app.get('/print/test/bill', test.printBillTestByIp);        //票据打印测试

    app.get('/print/test/qrcode', test.printQrcodeTestByIp);        //票据打印测试

    app.get('/print/test/label', test.printLabelTestByIp);        //标签打印测试

    //--------------------打印订单--------------------

    app.post('/print/total', print.printTotalByOrderId);              //打印票据总单

    app.post('/print/kitchen', print.printKitchenByOrderId);     //打印厨房

    app.post('/print/daily/report', print.printDailyReportByDates);     //打印日结小票

    app.get('/print/platform_total', print.printPlatformOrderTotal) // 打印外卖 总单
    app.get('/print/platform_kitchen', print.printPlatformKitchen) // 打印外卖 总单

};
