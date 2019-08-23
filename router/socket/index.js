const _ = require('lodash');
const socketController = require('../../controller/socket');

//进入socket的页面路由
exports.map = function (app) {
	app.get('/socket', socketController.getSocketPage)
};

//socket路由
exports.mapSocket =  (io) =>{
    io.on('connection', (socket)=>{
        emitter_socket = socket;
        console.log(`有新用户登陆`);
        var toSocket = _.find(io.sockets.sockets, {id: socket.id});
        toSocket.emit('getSocketId', socket.id);

        socket.on('login',(obj)=>socketController.loginConnection(io,socket,obj));                        //监听新用户加入
        socket.on('message',(obj)=>socketController.messageConnection(io,socket,obj));                    //监听用户发布聊天内容
        socket.on('disconnect',(obj)=>socketController.disconnectConnection(io,socket,obj));              //与服务器断开
        socket.on('reconnect',(obj)=>socketController.reconnectConnection(io,socket,obj));                //重新连接到服务器
        socket.on('error',(obj)=>socketController.errorConnection(io,socket,obj));                        //错误发生，并且无法被其他事件类型所处理

        socket.on('updateData',(obj)=>socketController.updateDataConnection(io,socket,obj));                        //更新数据
    });

    emitter.on('message',(obj)=>socketController.messageConnection(io,emitter_socket,obj));                   //监听用户发布聊天内容
    emitter.on('broadcast',(obj)=>socketController.broadcastConnection(io,emitter_socket,obj));                //除自己外发布聊天内容
    emitter.on('appoint',(obj)=>socketController.appointConnection(io,emitter_socket,obj));                     //指定用户发布聊天内容
    emitter.on('forceLogout',(obj)=>socketController.forceLogoutConnectionTest(io,emitter_socket,obj));         //指定用户登出
    emitter.on('logout',(obj)=>socketController.activeLogoutConnection(io,emitter_socket,obj));                   //用户登出
    emitter.on('orderWeChatCreator',(obj)=>socketController.orderWeChatCreatorConnection(io,emitter_socket,obj)); //接收微信订单通知
    emitter.on('orderWeChatCheck',(obj)=>socketController.orderWeChatCheckConnection(io,emitter_socket,obj));    //接收微信订单买单通知
    emitter.on('mqttState',(obj)=>socketController.mqttStateConnection(io,emitter_socket,obj))                  //mqtt在线状态通知
    emitter.on('networkState',(obj)=>socketController.networkStateConnection(io,emitter_socket,obj))             //网络在线状态通知
    emitter.on('printerState',(obj)=>socketController.printerStateConnection(io,emitter_socket,obj))             //打印机在线状态通知
    emitter.on('tvConnectState',(obj)=>socketController.tvConnectStateConnection(io,emitter_socket,obj))             //电视机在线状态通知
    emitter.on('syncStockArticle',(obj)=>socketController.syncStockArticleConnection(io,emitter_socket,obj));    //登陆时同步库存
    emitter.on('wechatShopChange',(obj)=>socketController.wechatShopChangeConnection(io,emitter_socket,obj));    //微信端店铺设置通知发送广播

    //-----------
    emitter.on('bindTable', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 开台
    emitter.on('pushOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 下单
    emitter.on('addOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 加菜
    emitter.on('payOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 买单
    emitter.on('discountOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 买单
    emitter.on('resumeOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 买单
    emitter.on('cancelOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 加菜
    emitter.on('grantOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 赠菜
    emitter.on('refundOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 退菜活改单
    emitter.on('changeOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 换桌
    emitter.on('checkWeightOrder', (obj) => socketController.notifyAll(io, emitter_socket, obj)) // 核重
    emitter.on('platformOrder', (obj) => socketController.platformOrder(io, emitter_socket, obj)) // 核重
};

