import {getSession,setSession} from '@/utils/auth'
import bus from '@/utils/bus'
export default {
    inject: ['reload'],
    methods: {

    },
    sockets: {
        getSocketId(value) {
            setSession(`socketId`,this.$socket.id);
        },
        error(value) {
            this.$notify.error(`【error】与系统断开连接！`);
        },
        disconnect() {
            this.$notify.error(`【disconnect】与系统断开连接！`);
        },
        reconnect() {    //当服务器重启
            setSession(`socketId`,this.$socket.id);
            this.$notify.success(`重新连接系统！`);
            this.$socket.emit('login', {userid: getSession('userId'),username: getSession('username')});
        },
        login(value) {
            setSession(`socketId`,this.$socket.id);
            this.onlineCount = value.onlineCount;
            if (value.user.username != getSession('userName')) {
                this.$notify.success(`${value.user.username}进入系统！`);
            }
        },
        logout(value) {
            console.log(`----value----`, value)
            this.$notify.info(`${value.user.username}退出系统！`);
        },
        forceLogout(value) {
            this.$notify.info(`${value.msg}`);
            store.dispatch('FedLogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        },
        mqttState(value) {     //mqtt在线状态通知
            this.$store.commit("set_mqtt", value.data.mqtt)
            //this.mqttConnect = value.data.mqtt;
            if (value.ok) {
                this.$notify.success(`${value.msg}`);
            } else {
                this.$notify.error(`${value.msg}`);
            }
        },
        networkState(value) {     //在线状态通知
            // this.mqttConnect = value.data.mqtt;
            this.$store.commit("set_network", value.data.network)
            if (value.ok) {
                this.$notify.success(`${value.msg}`);
            } else {
                this.$notify.error(`${value.msg}`);
            }
        },
        printerState(value) {     //打印机在线状态通知
            console.log(`------printerState`,value)
            this.$store.commit("set_printer", value.data.printer)
        },
        tvConnectState(value) {     //电视机在线状态通知
            console.log(`------tvConnectState`,value)
            this.$store.commit("set_tvConnect", value.data.tvConnect)
        },

        //外卖
        platformOrder(value) {
            console.log(`------platformOrder`,value)
            this.$notify.success(`${value.msg}`);
        },
        //------微信订单相关
        orderWeChatCreator(value) {     //接收到微信订单
            console.log('微信订单',value)
            if(value.ok) {
                this.$store.commit("getOrderWeChat", value)
            }
            this.$notify.success(`${value.msg}`);
        },
        orderWeChatCheck(value) {     //接收到微信订单买单
            console.log('微信订单22222',value)
            if(value.ok) {
                this.$store.commit("getOrderWeChatPay", value.data)
            }
            this.$notify.success(`${value.msg}`);
        },

        // 多终端
        bindTable(value) {
            console.log('开台',value)
            if(value.ok) {
                this.$store.commit("socketBindTable", value)
            }
            this.$notify.success(`${value.msg}`);
        },

        pushOrder(value){
            console.log('下单',value)
            if(value.ok) {
                if((this.$route.path.indexOf('order') != -1 || this.$route.path.indexOf('tvorder') != -1) && value.data.order_id == this.$route.params.orderId){
                    bus.$emit('addOrder')
                } else if(this.$route.path.indexOf('table') != -1) {
                    this.$store.commit("socketPushOrder", value)
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        addOrder(value) {
            console.log('加菜',value)
            if(value.ok) {
                if((this.$route.path.indexOf('order') != -1 ) && value.data.parent_order_id == this.$route.params.orderId){
                    bus.$emit('addOrder')
                } else if(this.$route.path.indexOf('pay') != -1 && value.data.parent_order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                }else if(this.$route.path.indexOf('table') != -1 && value.data.parent_order_id == this.$route.params.orderId){
                    bus.$emit('updateOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        cancelOrder(value) {
            console.log('取消订单',value)
            if(value.ok) {
                this.$store.commit("socketCancelOrder", value.data)
            }
            this.$notify.success(`${value.msg}`);
        },
        payOrder(value){
            console.log('买单',value)
            if(value.ok) {
                if(this.$route.path.indexOf('table') != -1){
                    this.$store.commit("socketPayOrder", value.data)
                } else if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('hasPayMesBox')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        changeOrder(value){
            console.log('换桌',value)
            if(value.ok) {

            }
            this.$notify.success(`${value.msg}`);
        },
        grantOrder(value){
            console.log('赠菜',value)
            if(value.ok) {
                if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                }else if(this.$route.path.indexOf('table') != -1 && value.data.order_id == this.$route.params.orderId){
                    bus.$emit('updateOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        refundOrder(value){
            console.log('退菜',value)
            if(value.ok) {
                if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                } else if(this.$route.path.indexOf('table') != -1 && value.data.order_id == this.$route.params.orderId){
                    bus.$emit('updateOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        checkWeightOrder(value){
            console.log('核重',value)
            if(value.ok) {
                if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                }else if(this.$route.path.indexOf('table') != -1 && value.data.order_id == this.$route.params.orderId){
                    bus.$emit('updateOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        discountOrder(value){
            console.log('折扣',value)
            if(value.ok) {
                if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        },
        resumeOrder(value){
            console.log('恢复折扣',value)
            if(value.ok) {
                if(this.$route.path.indexOf('pay') != -1 && value.data.order_id == this.$route.params.orderId) {
                    bus.$emit('resetOrder')
                }
            }
            this.$notify.success(`${value.msg}`);
        }
    },
}
