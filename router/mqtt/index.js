/**
 * @author wxh on 2019/3/18
 * @copyright
 * @desc
 */
const _ = require('lodash');
const mqttController = require('../../controller/mqtt');
const mqttInstructController = require('../../controller/web/mqttInstruct');
const orderController = require('../../controller/web/order');

const printUtil = require('../../lib/util/printUtil');
const tvSocket = require("../../lib/util/tvWebSocket")

const config = require('../../service/config');

if(!config && !config.ws_url && config.ws_url.url){
    throw new Error('please provide mqtt config');
}

let MQTT_CONFIG = config.mqtt_config;


exports.map = function (app) {
    mqttEmitter.on('message', (param) => {
        let topic = param.topic;
        let retain = param.retain;
        let message = param.message;
        let arr = topic.split("/");
        let platform = arr[1], brandId = arr[2], shopId = arr[3], group = arr[4], action = arr[5],
            identification = arr[6];
        let topicObj = {
            platform: platform,
            brandId: brandId,
            shopId: shopId,
            group: group,
            action: action,
            identification: identification
        };

        switch (platform) {
            case `${MQTT_CONFIG.receivePlatform[0]}`:       //接收posAdmin消息
                logger.info(platform);
                var obj=message;
                if (action == `upsert`){
                    logger.info(`接收到pos-admin 数据更新查询指令`,`${JSON.stringify(param)}`);
                    mqttInstructController.tableDataUpsert(obj,(err,data)=>{
                        let resultJson = {
                            ok: err ? false : true,
                            callback_channel:"winPos",
                            message_id:obj["message_id"]  || "",
                            message: `${err ? err+" || 数据更新失败" : "数据更新成功"}`,
                        };
                        return mqttController.posAdminPush(group,action,identification,resultJson);
                    });
                }else if (action == `gather`){
                    logger.info(`<==mqtt==开始订单数据采集`, `${param.toString()}`);
                    var timeBegin = new Date().getTime();
                    var timeEnd = null;
                    orderController.orderGatherBydate(param.topic,obj,(err,data)=>{
                        timeEnd = new Date().getTime();
                        let resultJson = {
                            ok: err ? false : true,
                            callback_channel:"winPos",
                            message_id:obj["message_id"]  || "",
                            message: `${err ? err+" || 订单数据采集失败" : "订单数据采集成功"} 总共用时： ${(timeEnd - timeBegin) / 1000}s`,
                        };

                        console.log("数据采集总共用时：" + (timeEnd - timeBegin) / 1000 + " s");
                        logger.info(`<==mqtt==结束订单数据采集`, "订单数据采集总共用时：" + (timeEnd - timeBegin) / 1000 + " s");
                        return mqttController.posAdminPush(group,action,identification,resultJson);
                    })
                }else {
                    return mqttController.posAdminPush(group,action,identification,{ "ok": false,"callback_channel":"winPos","message_id":`${obj["message_id"] || ""}`,"message": `暂时不支持${action}操作 [customSql,upsert]`});
                }

                break;
            case `${MQTT_CONFIG.receivePlatform[1]}`:       //接收resto消息
                if (arr.includes(`order`, 4) && arr.includes(`creator`, 5)) {          //接收创建微信订单
                    mqttController.creatorWechatOrder(topicObj, retain, message, (err) => {
                        if (err) {
                            logger.info(`订单插入失败${identification}`);
                            return;
                        } else {
                            mqttController.pushWechatOrderCallback(identification,message);  //推送微信下单回调

                            mqttController.getShopDetailFindOne((err, shopInfo) => {
                                if (err) {
                                    logger.info(`获取店铺信息失败`);
                                    return;
                                } else {

                                    emitter.emit("orderWeChatCreator", {    //广播到前端
                                        ok: true,
                                        msg: `微信${message.tableNumber ? message.tableNumber + '号桌' : message.verCode + '手机尾号'}${message.parentOrderId?'加菜':'下单'}成功！`,
                                        data: {
                                            order_id: message.parentOrderId?message.parentOrderId:identification  ,
                                            table_number: `${message.tableNumber ? message.tableNumber : message.verCode}`,
                                            order_state: message.orderState,
                                            distribution_mode_id: message.distributionModeId,
                                            production_status: 2,
                                            order_customer_count: message.customerCount,
                                            parent_order_id: message.parentOrderId,
                                            create_time: message.createTime
                                        }
                                    });

                                    console.log("shopInfo", shopInfo)
                                    if (shopInfo.shopMode == 2) { // 电视叫号，将得到的订单推送到TV端
                                        let tvOrder = {
                                            type: "new",
                                            code: message.verCode || message.tableNumber,
                                            orderId: identification,
                                            data: null
                                        }
                                        tvSocket.sendTvMsg(tvOrder, ()=> {})
                                    }


                                    if (message.orderPayment.length == 0) {       //如果有支付项
                                        printUtil.printTotal(identification, 1, 2); // 打印后付消费清单。
                                    } else {
                                        printUtil.printTotal(identification, 1, 1); // 打印先付清单。
                                    }
                                    printUtil.printKitchen(identification, 1) // 厨房打印
                                }
                            })
                        }
                    });
                } else if (arr.includes(`order`, 4) && arr.includes(`payment`, 5)) {          //接收订单支付项
                    mqttController.creatorWechatOrderPaymentItem(topicObj, retain, message, (err, order) => {
                        if (err) {
                            logger.info(`${err}`);
                            return;
                        } else {

                            mqttController.pushWechatOrderPaymentCallback(identification);  //推送微信买单回调

                            emitter.emit("orderWeChatCheck", {    //广播到前端
                                ok: true,
                                msg: `微信${order.tableNumber ? order.tableNumber + '号桌' : order.verCode + '手机尾号'}买单成功！`,
                                data: {
                                    order_id: identification,
                                    table_number: `${order.tableNumber ? order.tableNumber : order.verCode}`,
                                    order_state: order.orderState,
                                    production_status: order.productionStatus,
                                    order_customer_count: order.customerCount,
                                    create_time: order.createTime
                                }
                            });
                            printUtil.printTotal(identification, 1, 3); // 打印后付结算清单。
                        }
                    })
                } else if (arr.includes(`install`, 4) && arr.includes(`table`, 5)) {          //接收店铺设置

                    emitter.emit("wechatShopChange", {    //广播到前端
                        ok: true,
                        msg: `收到店铺设置更新！`,
                        data: message
                    });
                } else if (arr.includes(`order`, 4) && arr.includes(`platform`, 5)){
                    mqttController.createPlatformOrder(topicObj, retain, message, (err, order) => {
                        if (err) {
                            logger.info(`${err}`);
                            return;
                        }
                    })
                }
                break;
            default:
        }


    });
};

