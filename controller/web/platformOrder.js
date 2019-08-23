/**
 * @Description:
 * @author guofeng
 * @date 2019-07-29 14:08
 */
const async = require("async");
const platformOrderModel = require("../../model/web/platformOrder");
const platformOrderDetailModel = require("../../model/web/platformOrderDetail");
const platformOrderExtraModel = require("../../model/web/platformOrderExtra");
const { SuccessModel } = require("../../lib/util/result");
const dataUtil = require("../../lib/util/dateUtil");
const printUtil = require("../../lib/util/printUtil");
const moment = require("moment")
const _ = require("lodash")


/**
 * @desc  获取外卖订单列表
 * @param req {@type 外卖类型 1 饿了么 2 美团 3 百度, @page_skip @page_size}
 * @param res
 * @param next
 */
exports.platformOrderList = (req, res, next) => {

    let condition = {
        type: req.query.type,
        page_skip: req.query.page_skip,
        page_size: req.query.page_size
    }
    platformOrderModel.findAllInfoByConditions(condition, (err, result) => {
        if (err) return next(err);
        let list  = _.map(result,(o)=>{

            return {
                order_number: o.order_number,
                name: o.name,
                address: o.address,
                phone: o.phone,
                order_create_time: moment(+o.order_create_time).format(`YYYY-MM-DD HH:mm:ss`),
                platform_order_id: o.platform_order_id,
                remark: o.remark,
            }
        })
        res.json(new SuccessModel(null, list))
    })
}


/***
 * @desc 根据平台订单id获取订单详情
 * @param req {@req.query.platform_id}
 * @param res
 * @param next
 */
exports.platformOrder = (req, res, next) => {
    let platformId = req.query.platform_id;
    if (!platformId) return next(new BadRequestError('platformId is null'));
    platformOrderDetailModel.findAllInfoByConditions({platformOrderId: platformId}, (err, result) => {
        if (err) return next(err);
        platformOrderExtraModel.findAllInfoByConditions({platformOrderId: platformId}, (err, reply) => {
            if (err) return next(err);
            res.json(new SuccessModel(null,  result.concat(reply)))
        })
    })
}


/**
 * @desc 服务器第三方外卖平台订单
 * @param result
 * @param cb
 */
exports.insertPlatform = function (result, callback) {
    let platformOrder = result.platformOrder || {};
    let orderDetailList = result.platformDetail || [];
    let orderExtraList = result.platformExtra || [];
    emitter.emit('platformOrder', platformOrder)
    async.waterfall([
        (cb) => {  //  基础校验
            platformOrderModel.findOneInfoById(platformOrder.platformOrderId,  (error, order) => {
                console.log(`外卖订单已存在：${platformOrder.id},${platformOrder.platformOrderId}`);
                if (error || order) return cb(error || `外卖订单已存在：${platformOrder.id},${platformOrder.platformOrderId}`, null);
                platformOrderModel.selectTodayPlatformOrderCount( (error, orderCount) => {
                    platformOrder.orderNumber = ++orderCount;
                    cb(null, platformOrder);
                })
            });
        },
        (platformOrder, cb) => {  //  插入外卖主订单

            platformOrder.createTime = moment(platformOrder.createTime).format('YYYY-MM-DD')
            platformOrder.orderCreateTime = moment(platformOrder.orderCreateTime).format('x')
            platformOrder.productionStatus = 2; // 无论打印成功不成功， 外卖的都改成2 2019-08-02日确定
            platformOrderModel.save(platformOrder, (error) =>   cb(error || null));
        },
        (cb) => {  //  插入外卖订单项
            async.eachLimit(orderDetailList, 1, (orderDetail, eachCB) => {
                platformOrderDetailModel.save(orderDetail,  (error) => eachCB(error || null));
            }, function (error) {
                cb(error || null);
            })
        },
        (cb) => {  //  插入外卖支付项
            async.eachLimit(orderExtraList, 1,  (orderExtra, eachCB) => {
                platformOrderExtraModel.save(orderExtra,  (error) =>  eachCB(error || null));
            },  (error) => {
                cb(error || null);
            })
        },
        (cb) => { // 打印写在这里，防止服务端多次推送导致多次打印
            let orderId = platformOrder.platformOrderId;
            printUtil.printPlatformTotal(orderId, (err, result) => {})
            printUtil.printPlatformKitchen(orderId,(err, result) => {})
            cb(null)
        }
    ],  (error) => {
        callback(error || null, null);
    });
};
