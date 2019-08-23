/**
 * @author wxh on 2019/5/29
 * @copyright
 * @desc
 */

const internetAvailable = require("internet-available");
const _ = require("lodash");
const orderInspectionController = require("../../controller/web/orderInspection");
const printController = require("../../controller/web/print");

//-------------------------------------------启动定时网络检测
let network = () =>{
    internetAvailable({
        timeout: 4000,
        retries: 10,
        port: 53,
        host: '114.114.114.114'
    }).then(()=>{
        onlineState.network?``:onlineState.network=true;
    }).catch(()=>{
        !onlineState.network?``:onlineState.network=false;
    });
};
network();
setInterval(network, 6*1000);

//-------------------------------------------启动离线订单检测
let order_time = 3*60*1000;
let offlineOrderInspection = () => {
    logger.info(`启动离线订单检测！间隔${order_time}`);
    orderInspectionController.offlineOrderInspection()
};
setInterval(offlineOrderInspection,order_time);

//-------------------------------------------启动定时打印机连接检测
let print_check_time = 4 *60 * 1000;
let timingPrintCheck = () => {
    logger.info(`启动打印机检测！间隔${print_check_time}`);
    printController.timingPrintCheck((err,item)=>{
        if(err) return logger.error(`启动打印机检测！失败=>${err.toString()}`);

        let data = _.find(item, { 'network_state': false})
        if(!data){
            onlineState.printer?``:onlineState.printer=true;
        }else {
            !onlineState.printer?``:onlineState.printer=false;
        }

    })
};
setInterval(timingPrintCheck,print_check_time);