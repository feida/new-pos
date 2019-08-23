/**
 * @author wxh on 2019/7/29
 * @copyright
 * @desc
 */

const {log} = require('../util/fileUtil');
const shopTvConfigModel = require("../../model/web/shopTvConfig")
const customSqlModel = require("../../model/web/customSql")
const tv = require("../../controller/web/tv")
const async = require("async")
const moment = require("moment")

const restoApiPublishModel = require("../../model/web/restoApiPublish")

const WebSocket = require('ws');

//  定时任务ID
let taskId = 0;
let lastCallNumberTime = new Date().getTime();
let wsUrl = null;	// websocket链接
var tvWebSocketClient = module.exports;

let client = {
    ws: null,
    webSocketOpen: false,//避免重复连接
};
tvWebSocketClient.client = client;
tvWebSocketClient.createWebSocket = (shop_info) => {
    if (!shopDetailStorage) {
        shopDetailStorage = shop_info;
    }
    wsUrl = `ws://${shopDetailStorage.tv_ip}:8000`;
    try {
        client.ws = new WebSocket(wsUrl);
        websocketInit();
    } catch (e) {
        console.log('catch');
        websocketReconnect(wsUrl);
    }
}

let websocketInit = () => {
    // 建立 web socket 连接成功触发事件
    client.ws.onopen = (evt) => {
        onOpen(evt);
    };
    // 断开 web socket 连接成功触发事件
    client.ws.onclose = (evt) => {
        websocketReconnect(wsUrl);
        onlineState.tvConnect = false;
        console.log("电视连接已关闭...");
    };
    // 接收服务端数据时触发事件
    client.ws.onmessage = (event) => {
        let msg = JSON.parse(event.data);
        if (msg.type == 'scan' && msg.data) {// 扫码叫号模式
            shopTvConfigModel.callNumber(msg.data, (err, resultData) => {

                tvWebSocketClient.taskPush(resultData)
                tvWebSocketClient.taskPush(resultData)

                if (resultData.orderId) {
                    restoApiPublishModel.pushOrderCallNumberPublish(resultData.orderId)
                }

                emitter.emit('notifyAll', {
                    type: 'callNumber',
                    message: '订单叫号成功！',
                    data: resultData
                })
            })
        }
        heartCheck.start();
    };
    // 通信发生错误时触发
    client.ws.onerror = (evt) => {
        websocketReconnect(wsUrl);
        console.log('电视通信错误：' + evt.data);
    };
};

let onOpen = (evt) => {
    console.log("建立链接");
    onlineState.tvConnect = true;
    initTvConfig()
    //心跳检测重置
    heartCheck.start();
}
let websocketReconnect = () => {
    if (client.webSocketOpen) {       // 是否已经执行重连
        return;
    };

    client.webSocketOpen = true;
    //没连接上会一直重连，设置延迟避免请求过多
    tt && clearTimeout(tt);
    var tt = setTimeout(() => {
        tvWebSocketClient.createWebSocket();
        client.webSocketOpen = false;
    }, 5000);
}

//心跳检测
let heartCheck = {
    timeout: 30000,
    timeoutObj: null,
    start: () => {
        this.timeoutObj && clearTimeout(this.timeoutObj);
        this.timeoutObj = setTimeout(() => {
            client.ws.send(JSON.stringify({type: "heartbeat"}));
        }, this.timeout)
    }
};


// 初始化电视配置，并推送未叫号订单
const initTvConfig = () => {
    let sql = `SELECT id,table_number,amount_with_children,order_money,create_time,customer_count,ver_code,order_state,production_status,pay_mode,call_times, serial_number, distribution_mode_id, customer_id
            from tb_order where distribution_mode_id in(1,3)
            and (parent_order_id is null or parent_order_id ='') and order_state not in (1,9) and production_status in (1,2)
            and accounting_time=strftime('%Y-%m-%d', datetime('now','localtime')) order by create_time asc`;
    let waitCallOrder = []
    customSqlModel.getAllCustomSqlInfo(sql, (error, data) => {
        async.eachLimit(data, 1, (item, e_cb) => {
            waitCallOrder.push({
                orderId: item.id,
                code: item.ver_code
            });
            e_cb(null, null)
        }, (err, result) => {
            tv.getTvConfig((err, result) => {
                let data = {
                    type: "open",
                    orderNew: waitCallOrder,
                    shopTvConfig: result
                };
                tvWebSocketClient.startCallOrderTask();
                client.ws.send(JSON.stringify(data));
            })
        })
    });
};


tvWebSocketClient.sendTvMsg = (data, cb) => {
    if (onlineState.tvConnect) {
        client.ws.send(JSON.stringify(data));
        cb && cb();
    } else {
        if (onlineState.tvConnect) {
            client.ws.send(JSON.stringify(data));
            cb && cb();
        } else {
            log("【TV】", "当前店铺未连接电视端");
        }
    }
};

/**
 * 新订单
 */
tvWebSocketClient.newOrder = (order, cb) => {
    let tvOrder = {
        type: "new",
        code: order.verCode,
        orderId: order.id,
        data: null
    }
    this.sendTvMsg(tvOrder, cb);
};

tvWebSocketClient.taskPush = (data) => {
    let task = sessionStorage.task;
    if (!task) {
        task = JSON.stringify(data)
    } else {
        task += `||${JSON.stringify(data)}`
    }
    sessionStorage = {
        task: task,
        taskTime: new Date().getTime()
    };
},

/**
 * 开始叫号任务
 */
tvWebSocketClient.taskPerform = () => {
    let task = sessionStorage.task || '';
    let taskTime = +sessionStorage.taskTime + 5 * 1000;
    var taskArray = [];
    if (!task)   return null;
    taskArray = task.split("||");
    let data = taskArray[0];
    if (taskId == false && new Date().getTime() > lastCallNumberTime + 5 * 1000) {
        taskArray.splice(0, 1);
        sessionStorage = {
            task: taskArray.join("||"),
            taskTime: new Date().getTime()
        }
        return data;
    } else if(new Date().getTime() > taskTime && onlineState.tvConnect) {
        taskArray.splice(0, 1);
        sessionStorage = {
            task: taskArray.join("||"),
            taskTime: new Date().getTime()
        }
        return data;
    } else {
        return null;
    }
};

tvWebSocketClient.startCallOrderTask =  ()=> {

    let that = this;
    let task = JSON.parse(this.taskPerform());
    if (task) {
        taskId = true
        tvWebSocketClient.sendTvMsg(task);
        that.startCallOrderTask();
        lastCallNumberTime = new Date().getTime()
    } else {
        taskId = false
        setTimeout(()=> {
            that.startCallOrderTask();
        }, 1000);
    }
};


/**
 * 叫号，执行一次叫号操作，会默认叫两次
 * order:{
 *  code（取餐码）,
 *  orderId（订单ID）,
 * data（订单项列表）
 * }
 * @param order
 * @param cb
 */
tvWebSocketClient.callNumber =  (order, cb)=> {
    let data = {
        type: "call",
        createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    data = Object.assign(data, order);

    if (callOrderTask.length === 0) {
        clearInterval(taskId);
        // tvWebSocketClient.sendTvMsg(data);
        callOrderTask.push(data);
        tvWebSocketClient.startCallOrderTask();
    } else {
        callOrderTask.push(data);
    }
    cb && cb();
};


/**
 * 移除叫号
 **/
tvWebSocketClient.removeNumber =  (order, cb)=> {
    let orderInfo = {
        type: "remove",
        code: order.ver_code,
        orderId: order.id,
        data: null
    }
    this.sendTvMsg(orderInfo, cb);
}
