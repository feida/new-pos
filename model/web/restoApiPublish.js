/**
 * @author wxh on 2019/4/22
 * @copyright
 * @desc
 */

const async = require('async');
const _ = require('lodash');
const moment = require('moment');

const generalUtil = require('../../lib/util/generalUtil');

const config = require('../../service/config');

const shopDetail = require('../../shopDetail.json');

const posSqlite = require('../../service/sqlite/pos').client;

const order = posSqlite.model('tb_order');
const orderItem = posSqlite.model('tb_order_item');
const orderPaymentItem = posSqlite.model('tb_order_payment_item');
const orderRefundRemark = posSqlite.model('tb_order_refund_remark');

const httpClient = require("../../lib/util/httpClient");

/**
 * newpos改单更新推送
 */
exports.orderUpdatePublish = (order_id,order_arr,order_item_arr,order_refund_article,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
        order_payment_item:[],
        order_refund_remark:order_refund_article,
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:order_arr
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单支付信息
            orderPaymentItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_payment_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        }
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                order_payment_item:pushObj.order_payment_item,
                order_refund_remark:pushObj.order_refund_remark,
                path: `/newpos/order/return/article`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`改单推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/return/article】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                         callback(null, results);
                    }).catch( (err) =>{
                         callback(err);
                    });
                }
            })
        }
    });
};


/**
 * newpos换桌更新推送
 */
exports.orderChangeTablePublish = (param,callback)=> {
    if (typeof callback != 'function') {
        callback =  ()=> {};
    }
    httpClient.basePost(config, {
        order_id:param.order_id,
        table_number:param.table_number,
        from_table_number:param.from_table_number,
        path: `/newpos/order/change/table`
    }, (error, resultInfo)=> {
        if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
            logger.error(`换桌推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
        }else {
            logger.info(`【${config.api_url.path}/newpos/order/change/table】==>`,resultInfo.result.message);
            posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${param.order_id}' or parent_order_id = '${param.order_id}'`,
                {type: posSqlite.QueryTypes.UPDATE}
            ).then( (results)=> {
                callback(null, results);
            }).catch( (err) =>{
                callback(err);
            });
        }
    })
}


/**
 * newpos赠菜更新推送
 */
exports.orderGrantArticlePublish = (order_id,order_arr,order_item_arr,order_grant_article,callback)=> {
    if (typeof callback != 'function') {
        callback =  ()=> {};
    }
    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
        order_payment_item:[],
        order_refund_remark:order_grant_article,
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        }
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                order_refund_remark:pushObj.order_refund_remark,
                path: `/newpos/order/grant/article`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`赠菜推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/grant/article】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};


/**
 * newpos折扣更新推送
 */
exports.orderDiscountPublish = (order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                path: `/newpos/order/discount`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`折扣推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/discount】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};


/**
 * newpos恢复原价更新推送
 */
exports.orderResumeDiscountPublish = (order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                path: `/newpos/order/discount/resume`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`恢复原价推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/discount/resume】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};


/**
 * newpos下单-加菜推送
 */
exports.orderPushPublish = (master_order_id,children_order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    let pushObj = {
        master_order_id:master_order_id,
        children_order_id:children_order_id,
        order_arr:[],
        order_item:[],
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: master_order_id},
                        {parentOrderId: master_order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    o.dataValues.syncState = 1;
                    o.dataValues.productionStatus = 2;
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //修改本地订单同步字段
            let update = {
                syncState:0
            };
            let where = {
                '$or': [
                    {id: master_order_id},
                    {parentOrderId: master_order_id}
                ]
            };
            order.update(update, {where: where}).then((result)=> {
                return done(null, result);
            }).catch(function (err) {
                return done(err);
            });
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                master_order_id:pushObj.master_order_id,
                children_order_id:pushObj.children_order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                path: `/newpos/order/push`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`${children_order_id?'加菜':'下单'}推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/push】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${master_order_id}' or parent_order_id = '${master_order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};


/**
 * newpos取消订单更新推送
 */
exports.orderCancelPublish = (order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                path: `/newpos/order/cancel`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`取消推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/cancel】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};

/**
 * 支付推送消息
 */
exports.pushOrderPaymentPublish = (order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }

    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
        order_payment_item:[]
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单支付信息
            orderPaymentItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_payment_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                order_payment_item:pushObj.order_payment_item,
                path: `/newpos/order/payment`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`买单推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/payment】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,
                        {type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};


//菜品上下架推送
exports.articleManagementPublish = (param,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }
    httpClient.basePost(config, {
        article_id:param.article_id,
        article_activated:param.article_activated,
        path: `/newpos/stock/article/management`
    }, (error, resultInfo)=> {
        if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
            logger.error(`上下架推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
        }else {
            logger.info(`【${config.api_url.path}/newpos/stock/article/management】==>`,resultInfo.result.message);
        }
    })
};





//获取退菜支付项
exports.getOrderRefundPaymentItemPublish = (param,callback)=> {
    if (typeof callback != 'function') {
        callback = ()=> {};
    }

    httpClient.basePost(config, {
        order_id:param.order_id,
        order_items:param.order_items,
        refund_money:param.refund_money,
        path: `/newpos/order/refund/payment/item`
    }, (error, resultInfo)=> {
        callback(error, resultInfo)
        // if (error) { //线上退款失败，默认本地退款
        //     logger.error(`获取退款支付项restoApi失败，准备本地退款=>`, error || resultInfo.msg || resultInfo.result.message)
        //     callback(error, null)
        // } else if(resultInfo.flag != '0000' && !resultInfo.result.ok) {
        //     callback(error || resultInfo.msg || resultInfo.result.message)
        // } else if (resultInfo.flag != '0000') { //
        //     callback(error || resultInfo.msg || resultInfo.result.message)
        // } else {
        //     logger.info(`【${config.api_url.path}/newpos/order/refund/payment/item】==>`,resultInfo.result.message);
        //     callback(null, resultInfo.result)
        // }
    })
};



//同步离线订单
exports.postSyncOrderByShopIdAndOrderIdPublish = (param,callback)=> {
    if (typeof callback != 'function') {
        callback = ()=> {};
    }

    httpClient.basePost(config, {
        order_id:param.order_id,
        order_arr:param.order_arr,
        order_item:param.order_item,
        order_payment_item:param.order_payment_item,
        order_refund_remark:param.order_refund_remark,
        path: `/newpos/order/sync`
    }, (error, resultInfo)=> {
        if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
            logger.error(`同步订单推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
        }else {
            logger.info(`【${config.api_url.path}/newpos/order/sync】==>`,JSON.stringify(resultInfo.result));
            posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${resultInfo.result.data.last_sync_time} WHERE id ='${param.order_id}' or parent_order_id = '${param.order_id}'`,
                {type: posSqlite.QueryTypes.UPDATE}
            ).then( (results)=> {
                callback(null, results);
            }).catch( (err) =>{
                callback(err);
            });
        }
    })
};




/**
 * 叫号数据推送消息
 */
exports.pushOrderCallNumberPublish = (order_id,callback)=> {

    if (typeof callback != 'function') {
        callback = ()=> {};
    }

    let pushObj = {
        order_id:order_id,
        order_arr:[],
        order_item:[],
        order_payment_item:[]
    };
    async.waterfall([
        (done)=>{   //收集订单信息
            order.findAll({
                where: {
                    $or: [
                        {id: order_id},
                        {parentOrderId: order_id}
                    ]
                }
            }).then((result)=> {
                pushObj.order_arr = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单菜品信息
            orderItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
        (done)=>{   //收集订单支付信息
            orderPaymentItem.findAll({
                where: {
                    orderId:{
                        $in:_.map(pushObj.order_arr, 'id')
                    }
                }
            }).then((result)=> {
                pushObj.order_payment_item = result.map((o) => {
                    let hump = {};
                    for (let i in o.dataValues) {
                        hump[generalUtil.toLine(i)] = o.dataValues[i];
                    }
                    return hump;
                });
                done(null)
            }).catch((err)=> done(err));
        },
    ],(err)=>{
        if(err){
            logger.error(err)
        }else {
            httpClient.basePost(config, {
                order_id:pushObj.order_id,
                order_arr:pushObj.order_arr,
                order_item:pushObj.order_item,
                order_payment_item:pushObj.order_payment_item,
                path: `/newpos/order/notify/call/number`
            }, (error, resultInfo)=> {
                if(error || resultInfo.flag!=`0000` || !resultInfo.result.ok){
                    logger.error(`叫号推送到restoApi失败=>`,error || resultInfo.msg || resultInfo.result.message)
                }else {
                    logger.info(`【${config.api_url.path}/newpos/order/notify/call/number】==>`,resultInfo.result.message);
                    posSqlite.query(`UPDATE tb_order set sync_state = 1,last_sync_time=${moment().format('x')} WHERE id ='${order_id}' or parent_order_id = '${order_id}'`,{type: posSqlite.QueryTypes.UPDATE}
                    ).then( (results)=> {
                        callback(null, results);
                    }).catch( (err) =>{
                        callback(err);
                    });
                }
            })
        }
    });
};