// const WebSocket = require('ws');
// const shopDetail = require('../../shopDetail');
// const { log } = require('../util/fileUtil');
// const shopTvConfigModel = require("../../model/web/shopTvConfig")
// const customSqlModel = require("../../model/web/customSql")
// const tv = require("../../controller/web/tv")
// const async = require("async")
// const moment = require("moment")
//
// const restoApiPublishModel = require("../../model/web/restoApiPublish")
//
// //  定时任务ID
// let taskId = 0;
//
//
// var tvWebSocketClient = module.exports;
// tvWebSocketClient.callOrderTask = []
//
// let client = {
//     ws: null,
//     webSocketOpen: false,
//     network: false,
//     data: {
//         brandId: shopDetail.brandId,
//         shopId: shopDetail.id,
//     },
//     callBackMap: {},
//     heartbeat: {
//         id: 0,
//         reconnectCounts: 10,
//         interval: 15000,  //  心跳间隔时间 （毫秒）
//     },
// };
// tvWebSocketClient.client = client;
// tvWebSocketClient.init = function (cb) {
//     let that = this;
//     console.log(`-----shopDetail.tvIp---`,shopDetail.tvIp)
//     client.ws = new WebSocket(`ws://${shopDetail.tvIp}:8000`, null, null);
//
//     client.ws.onopen = function () {
//         log(`【TV】`, `连接成功， tvip: ${shopDetail.tvIp}`);
//         client.webSocketOpen = true;
//         tvWebSocketClient.startCallOrderTask();
//         initTvConfig();
//         cb && cb();
//     };
//     client.ws.onmessage = function (event) {
//         let msg = JSON.parse(event.data);
//         if (msg.type == 'scan' && msg.data) {// 扫码叫号模式
//             shopTvConfigModel.callNumber(msg.data, (err, resultData) => {
//                 this.callOrderTask.push(resultData)
//                 this.callOrderTask.push(resultData)
//
//                 if(resultData.orderId){
//                     restoApiPublishModel.pushOrderCallNumberPublish(resultData.orderId)
//                 }
//
//                 emitter.emit('notifyAll', {
//                     type: 'callNumber',
//                     message: '订单叫号成功！',
//                     data: resultData
//                 })
//             })
//         }
//     };
//
//     client.ws.onerror = function (event) {
//         log(`【TV】`, `内容:ws报错`);
//     };
//
//     client.ws.onclose = function (event) {
//         client.webSocketOpen = false;
//         log(`【TV】`, `ws与服务器断开连接`);
//
//         //todo  断开之后，自动重连
//         that.stopHeartbeat();
//         that.reconnect();
//     };
// };
//
//
// // 初始化电视配置，并推送未叫号订单
// const initTvConfig = () => {
//     var sql = `SELECT id,table_number,amount_with_children,order_money,create_time,customer_count,ver_code,order_state,production_status,pay_mode,call_times, serial_number, distribution_mode_id, customer_id
//             from tb_order where distribution_mode_id in(1,3)
//             and (parent_order_id is null or parent_order_id ='') and order_state not in (1,9) and production_status in (1,2)
//             and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) order by create_time asc
//
//             `;
//
//     let waitCallOrder = []
//     customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
//         async.eachLimit(data, 1, (item, e_cb) => {
//             waitCallOrder.push({
//                 orderId: item.id,
//                 code: item.ver_code
//             });
//             e_cb(null, null)
//         }, (err, result) => {
//             tv.getTvConfig((err, result)=>{
//                 let data = {
//                     type : "open",
//                     orderNew: waitCallOrder,
//                     shopTvConfig : result
//                 };
//                 console.log("data", data)
//                 client.ws.send(JSON.stringify(data));
//             })
//         })
//     });
// }
//
// tvWebSocketClient.sendTvMsg = function (data, cb) {
//     if(client.webSocketOpen){
//         client.ws.send(JSON.stringify(data));
//         cb && cb();
//     }else{
//         this.reconnect();
//         if(client.webSocketOpen) {
//             client.ws.send(JSON.stringify(data));
//             cb && cb();
//         } else {
//             log("【TV】","当前店铺未连接电视端");
//         }
//     }
// };
//
// /**
//  * 开始心跳
//  */
// tvWebSocketClient.startHeartbeat = function () {
//     client.heartbeat.id = setInterval(() => {
//         this.sendTvMsg({ type: "heartbeat" });
//     }, client.heartbeat.interval);
// };
//
// /**
//  * 停止心跳
//  */
// tvWebSocketClient.stopHeartbeat = function () {
//     clearInterval(client.heartbeat.id);
// };
//
// tvWebSocketClient.reconnect = function () {
//     // if(navigator.onLine){ //只有联网的时候，才进行重连
//     //  如果默认链接次数大于 0 ，则 1.5秒重连一次，否则 30秒重连一次
//     var timer = 5;
//     this.reconnectByTime(timer);
//     // }
// };
//
// tvWebSocketClient.reconnectByTime = function (timer) {
//     let that = this;
//     setTimeout(function () {
//         client.heartbeat.reconnectCounts--;
//         that.init(function () {
//             // that.login(function () {
//             that.startHeartbeat();
//             client.heartbeat.reconnectCounts = 1000;
//             // });
//         });
//     }, timer);
// };
//
// /**
//  * 新订单
//  */
// tvWebSocketClient.newOrder= function (order, cb) {
//     let tvOrder = {
//         type: "new",
//         code: order.verCode,
//         orderId: order.id,
//         data: null
//     }
//     this.sendTvMsg(tvOrder, cb);
// };
//
// /**
//  * 初始化TV信息
//  * @param data
//  */
// tvWebSocketClient.initTv = function (data) {
//     this.sendTvMsg(data);
//     this.startCallOrderTask();
// };
//
//
// tvWebSocketClient.taskPush = (data) => {
//     var task = sessionStorage.task
//     if(!task){
//         task = JSON.stringify(data)
//     }else {
//         task += `||${JSON.stringify(data)}`
//     }
//     sessionStorage = {
//         task: task,
//         taskTime: new Date().getTime()
//     };
// },
//
// /**
//  * 开始叫号任务
//  */
// tvWebSocketClient.taskPerform =  () => {
//     var task = sessionStorage.task || '';
//     // console.log("task", task)
//     let taskTime = +sessionStorage.taskTime + 5*1000;
//     var taskArray = [];
//     if(task){
//         taskArray = task.split("||");
//         let data = taskArray[0];
//         if(new Date().getTime() > taskTime && client.webSocketOpen){
//             taskArray.splice(0,1);
//             sessionStorage = {
//                 task: taskArray.join("||"),
//                 taskTime: new Date().getTime()
//             }
//
//             console.log("正在执行", data);
//             return data;
//         }else {
//             console.log("等待执行");
//             return null;
//         }
//     }else {
//         return null;
//     }
// },
//
// tvWebSocketClient.startCallOrderTask = function () {
//     var that = this;
//     var task = JSON.parse(this.taskPerform());
//     if(task){
//         tvWebSocketClient.sendTvMsg(task);
//         that.startCallOrderTask();
//     }else{
//         setTimeout(function () {
//             that.startCallOrderTask();
//         }, 1000);
//     }
// };
//
//
//
// /**
//  * 叫号，执行一次叫号操作，会默认叫两次
//  * order:{
//  *  code（取餐码）,
//  *  orderId（订单ID）,
//  * data（订单项列表）
//  * }
//  * @param order
//  * @param cb
//  */
// tvWebSocketClient.callNumber = function (order, cb) {
//     let data = {
//         type: "call",
//         createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
//     };
//     data = Object.assign(data, order);
//
//
//     if(callOrderTask.length === 0){
//         clearInterval(taskId);
//         // tvWebSocketClient.sendTvMsg(data);
//         callOrderTask.push(data);
//         tvWebSocketClient.startCallOrderTask();
//     }else{
//         callOrderTask.push(data);
//     }
//     cb && cb();
// };
//
//
// /**
//  * 移除叫号
//  **/
// tvWebSocketClient.removeNumber = function (order, cb) {
//     let orderInfo = {
//         type: "remove",
//         code: order.ver_code,
//         orderId: order.id,
//         data: null
//     }
//     this.sendTvMsg(orderInfo, cb);
// }
