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

const mqttClient = require("../../service/mqtt/index").client;

const shopDetail = require('../../shopDetail.json');

const posSqlite = require('../../service/sqlite/pos').client;


const order = posSqlite.model('tb_order');
const orderItem = posSqlite.model('tb_order_item');
const orderPaymentItem = posSqlite.model('tb_order_payment_item');
const NODE_ENV  = process.env.NODE_ENV;
const requestUtil = require('../ios/requestUtil');
const sqlite3OrmUtil = require("../../lib/util/sqlite3OrmUtil");
/**
 * 下单推送消息
 */

exports.pushOrderPublish = (master_order_id)=> {
    if(onlineState.mqtt){
        let topic = `${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}/order/creator/${master_order_id}`;
        let pushObj = {
            master_order_id:master_order_id,
            order_arr:[],
            order_item:[]
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
                    syncState:1
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
                //推送
                logger.info(`推送EMQ:${topic} \n ${JSON.stringify(pushObj)}`);

                mqttClient.publish(topic,JSON.stringify(pushObj), mqttClient.qosConfig)
            }
        });
    }
};



/**
 * 支付推送消息
 */
exports.pushOrderPaymentPublish = (order_id)=> {
    if(onlineState.mqtt){
        let topic = `${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}/order/payment/${order_id}`;
        let pushObj = {
            order_id:order_id,
            order_payment_item:[]
        };
        async.waterfall([
            (done)=>{   //收集订单支付信息
                orderPaymentItem.findAll({
                    where: {
                        orderId:order_id
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
                //推送
                logger.info(`推送EMQ:${topic} \n ${JSON.stringify(pushObj)}`);

                mqttClient.publish(topic,JSON.stringify(pushObj), mqttClient.qosConfig)
            }


        });
    }
};


/**
 * 微信下单回调
 * @param order_id
 * @param order
 */
exports.pushWechatOrderCallback = (order_id,order)=> {
    if(onlineState.mqtt){
        let topic = `${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}/order/callback/${order_id}`;
        let pushObj = {
            ok:true,
            msg:`微信订单下单成功！`,
            type:`creator`,
            data:{
                id:order_id,
                order_state:order.orderState,
                production_status:2,
                serial_number:order.serialNumber,
                customer_id:order.customerId,
                table_number:order.tableNumber,
                order_money:+order.orderMoney,
                amount_with_children:+order.amountWithChildren,
                distribution_mode_id:order.distributionModeId,
                parent_order_id:order.parentOrderId,
                last_sync_time:moment().format('x'),
                allow_continue_order:order.distributionModeId == 1 ?1:0,
                // allow_continue_order:1,
                // confirm_time:moment().format('YYYY-MM-DD HH:mm:ss'),
                print_order_time:moment().format('YYYY-MM-DD HH:mm:ss'),
                allow_cancel:0
            }
        };
        //推送
        logger.info(`推送EMQ:${topic} \n ${JSON.stringify(pushObj)}`);
        emitter.emit("pushEmqWechat", {
           topic: topic,
            pushObj: JSON.stringify(pushObj)
        })
        // mqttClient.publish(topic,JSON.stringify(pushObj), mqttClient.qosConfig) // todo -----------------
    }
};


/**
 * 微信买单回调
 * @param order_id
 */
exports.pushWechatOrderPaymentCallback = (order_id)=> {
    if(onlineState.mqtt){
        let topic = `${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}/order/callback/${order_id}`;
        let pushObj = {
            ok:true,
            msg:`微信订单支付成功！`,
            type:`payment`,
            data:{
                id:order_id,
                order_state:2
            }
        };
        //推送
        logger.info(`推送EMQ:${topic} \n ${JSON.stringify(pushObj)}`);
        mqttClient.publish(topic,JSON.stringify(pushObj), mqttClient.qosConfig)
    }
};


//posAdmin
exports.posAdminPush = (group,action,id, content)=> {
    if(onlineState.mqtt){
        //推送
        mqttClient.publish(`${config.mqtt_config.publishThemePosAdmin}/${group}/${action}/${id}`,JSON.stringify(content),{ qos: 1, retain: true });
    }
};
