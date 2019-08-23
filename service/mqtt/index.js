/**
 * @author wxh on 2018/10/17
 * @copyright
 * @desc
 */

let NODE_ENV = process.env.NODE_ENV;
NODE_ENV = NODE_ENV ? NODE_ENV.toLowerCase() : null;

const mqtt = require('mqtt');
const moment = require('moment');
const config = require('../config');

if(!config && !config.ws_url && config.ws_url.url){
    throw new Error('please provide mqtt config');
}

const shopDetail = require('../../shopDetail.json');


let MQTT_CONFIG = {
    url:config.ws_url.url,
    subscribeTheme:`$queue/winPos/+/${shopDetail.brandId}/${shopDetail.id}/+/+/+`,         //newpos/platform/brandId/shopId/group/action/identification
    publishThemePosAdmin:`${config.mqtt_config.publishThemePosAdmin}/${shopDetail.brandId}/${shopDetail.id}`,         //posAdmin/+/+/+/+/+
    publishThemeResto:`${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}`,           //notify/+/+/+/+/+
    requestIdList: [],
    options: {
        username:`winPos-${shopDetail.id}`,
        password:"winPos",
        clientId:`winPos-${shopDetail.brandId}-${shopDetail.id}`,
        keepalive: 10,    // 设置会话心跳时间 60秒，设置0为禁用
        reconnectPeriod: 15 * 1000,    //1000毫秒，两次重新连接之间的间隔
        resubscribe:true,   //如果连接断开并重新连接，则会再次自动订阅已订阅的主题（默认true）
        will:{
            topic:`${config.mqtt_config.publishThemeResto}/${shopDetail.brandId}/${shopDetail.id}/pos/state/${moment().format('x')}`,
            payload:JSON.stringify({state:false}),
            qos:0,
            retain:false
        }
    },
    data: {
        shopId: shopDetail.id,
        brandId: shopDetail.brandId
    },
    qosConfig:{
        qos:0,
        retain:true
    },
    platform:[`weChat`,`posAdmin`,`resto`],
    receivePlatform: config.mqtt_config.receivePlatform   //接收
};

const MQTT_CLIENT = mqtt.connect(MQTT_CONFIG.url,MQTT_CONFIG.options);

MQTT_CLIENT.on('connect',() =>{
    logger.info('mqtt成功连接到：' + MQTT_CONFIG.url);

    MQTT_CLIENT.publish(`${MQTT_CONFIG.options.will.topic}`,JSON.stringify({state:true}),MQTT_CONFIG.qosConfig);

    MQTT_CLIENT.subscribe(`${MQTT_CONFIG.subscribeTheme}`,(err)=>{
        if (err) {
            logger.info(`订阅失败--${MQTT_CONFIG.subscribeTheme}`,`${err.toString()}`)
        }else {
            logger.info(`订阅成功--${MQTT_CONFIG.subscribeTheme}`);
            logger.info(`允许接收的平台=>${MQTT_CONFIG.receivePlatform}`)
            onlineState.mqtt?``:onlineState.mqtt=true;
        }
    })
});
MQTT_CLIENT.on('close',  (connack) =>{
    onlineState.mqtt == false?``:onlineState.mqtt=false;
    logger.error(`==mqtt==close==你已断开连接,${connack?`异常退出`:`正常退出`}`)
});

MQTT_CLIENT.on('reconnect',  () =>{
    logger.error("==mqtt==reconnect==正在尝试重新连接")
});

MQTT_CLIENT.on('message',  (topic, message, packet)=> {
    let arr = topic.split("/");
    let platform = arr[1],group = arr[4], action = arr[5],identification =arr[6] ;
    if(message.toString()!=``){
        MQTT_CLIENT.publish(`${topic}`,``,MQTT_CONFIG.qosConfig);
        try {
            var obj=JSON.parse(packet.payload);
            if(typeof obj == 'object' && obj ){
                if(MQTT_CONFIG.receivePlatform.includes(platform)){
                    mqttEmitter.emit(`message`,{topic:packet.topic,retain:packet.retain,message:obj});
                }else {
                    logger.info(`<==mqtt==${MQTT_CONFIG.url}==收到新消息`, `暂时不支持${platform}平台通讯`);
                }
            }else{

            }
        } catch(e) {

        }
    }
});

exports.client = MQTT_CLIENT;
