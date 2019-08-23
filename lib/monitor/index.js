/**
 * @author wxh on 2019/4/16
 * @copyright
 * @desc
 */

let monitor = module.exports;
monitor.changeItMqtt =  (object) =>{
    function descripterFun(field,value) {
        return {
            enumerable: true,
            get:  ()=> {
                return value;
            },
            set:  (newvalue)=> {
                value = newvalue;
                console.log(field,value)
                if(field == `mqtt`) {
                    emitter.emit("mqttState", {    //广播到前端
                        ok: newvalue ? true : false,
                        msg: `${newvalue ? '与服务器连接成功！' : '与服务器断开连接!'}`,
                        data: object
                    });
                }else if(field == `printer`){
                    emitter.emit("printerState", {    //广播到前端
                        ok: newvalue ? true : false,
                        msg: `${newvalue ? '所有打印机连接成功！' : '有打印机断开连接!'}`,
                        data: object
                    });
                }else if(field == `tvConnect`){
                    emitter.emit("tvConnectState", {    //广播到前端
                        ok: newvalue ? true : false,
                        msg: `${newvalue ? '电视机连接成功！' : '电视机断开连接!'}`,
                        data: object
                    });
                }else {
                    emitter.emit("networkState", {    //广播到前端
                        ok: newvalue?true:false,
                        msg: `${newvalue?'Internet Connect Success！':'Internet Connect Fail'}`,
                        data: object
                    });
                }
            }
        }
    }
    for(var i in object){
        Object.defineProperty(object, i, descripterFun(i,object[i]))
    }
};

