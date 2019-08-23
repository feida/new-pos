/**
 * @author wxh on 2019/3/22
 * @copyright
 * @desc
 */
const printUtil = require('../../lib/util/printUtil');



//根据订单id 打印总订单
exports.printTotalByOrderId = (req, res, next) => {

    let orderId = req.body.order_id;
    let autoPrint = req.body.auto_print || 0;  // 1; 自动 0 手动
    let totalType = req.body.total_type || 1;  //1=先付， 2=后付消费、3= 后付结算

    let refund = req.body.refund || 0;  //0 不退菜   or  1 退菜

    let orderItemArr = req.body.order_item_arr || [];  //退菜对象    orderItemArr:[ {id:"'df0a6deb982b4e57a894ce57f68211c4'",count:2}]

    if (!orderId) return next(new BadRequestError('order_id is null'));

    printUtil.printTotal(orderId,autoPrint,totalType,refund,orderItemArr,(err,result)=>{
        if(err) return next(err);
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

//根据订单id 打印厨房出单
exports.printKitchenByOrderId = (req, res, next) => {

    let orderId = req.body.order_id;
    let autoPrint = req.body.auto_print || 0;  // 1; 自动 0 手动
    let totalType = req.body.kitchen_type || 0;  //0 正常   or  1 精简版

    let refund = req.body.refund || 0;  //0 不退菜   or  1 退菜

    let orderItemArr = req.body.order_item_arr || [];  //退菜对象    orderItemArr:[ {id:"'df0a6deb982b4e57a894ce57f68211c4'",count:2}]

    if (!orderId) return next(new BadRequestError('order_id is null'));

    printUtil.printKitchen(orderId,autoPrint,totalType,refund,orderItemArr,(err,result)=>{
        if(err) return next(err);

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



//根据日期打印日结
exports.printDailyReportByDates = (req, res, next) => {
    let dates = req.body.dates;

    if (!dates) return next(new BadRequestError('dates is null'));

    let  bagin_r = dates.match(/^(\d{4})(-)(\d{2})(-)(\d{2})$/);

    if (!bagin_r) return next(new BadRequestError('请输入正确的开始时间格式,如:2017-01-01'));

    let b_d=new Date(bagin_r[1],bagin_r[3]-1,bagin_r[5]);

    let b_num = (b_d.getFullYear()==bagin_r[1]&&(b_d.getMonth()+1)==bagin_r[3]&&b_d.getDate()==bagin_r[5]);

    if (b_num == 0) return next(new BadRequestError('开始时间不合法,请输入正确的开始时间'));




    printUtil.getDailyReportTemplate(dates,(err,result)=>{
        if(err) return next(err);

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


// 根据 platformOrderId 打印总单
exports.printPlatformOrderTotal = (req, res, next) => {
    let platformId = req.query.platform_order_id;
    printUtil.printPlatformTotal(platformId,(err,result)=>{
        if(err) return next(err);

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
}
// 根据 platformOrderId 打印厨打
exports.printPlatformKitchen = (req, res, next) => {
    let platformId = req.query.platform_order_id;
    printUtil.printPlatformKitchen(platformId, (err, result) => {
        if(err) return next(err);

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
}
