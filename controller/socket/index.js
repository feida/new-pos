const _ = require('lodash');
const async = require('async');

const syncDataUtil = require('../../service/sqlite/pos/initData');
const articleModel = require('../../model/web/article');
const articlePriceModel = require('../../model/web/articlePrice');
const clientNotifyModel = require("../../model/web/clientNotify")
const customSqlModel = require("../../model/web/customSql")

exports.getSocketPage = function (req, res, next) {
    res.render('socket', {
        title: 'socket',
    })
};

exports.loginConnection = function (io, socket, obj) {
    socket.userid = obj.userid;

    if (!onlineUser.hasOwnProperty(obj.userid)) { //检查用户在线列表
        onlineUser[obj.userid] = obj.username;
        onlineCount++; //在线人数+1
        onlineUserInfo.push({
            userId: obj.userid,
            username: obj.username,
            terminal: `PC`,
            socketId: socket.id
        })
    }

    //广播消息
    io.emit('login', {onlineUser: onlineUser, onlineCount: onlineCount, user: obj});

};

exports.disconnectConnection = function (io, socket) {
    //将退出用户在在线列表删除

    if (onlineUser.hasOwnProperty(socket.userid)) {
        //退出用户信息
        var obj = {userid: socket.userid, username: onlineUser[socket.userid]};
        //删除
        delete onlineUser[socket.userid];
        //删除
        onlineUserInfo = _.reject(onlineUserInfo, {'userId': socket.userid});
        //在线人数-1
        onlineCount--;

        //广播消息
        io.emit('logout', {onlineUser: onlineUser, onlineCount: onlineCount, user: obj});

    }
};

exports.logoutConnection = function (io, socket, obj) {
    //将退出用户在在线列表删除

    if (onlineUser.hasOwnProperty(socket.userid)) {
        //退出用户信息
        var obj = {userid: socket.userid, username: onlineUser[socket.userid]};
        //删除
        delete onlineUser[socket.userid];
        //删除
        onlineUserInfo = _.reject(onlineUserInfo, {'userId': socket.userid});
        //在线人数-1
        onlineCount--;
        //广播消息
        io.emit('logout', {onlineUser: onlineUser, onlineCount: onlineCount, user: obj});
    }
};


exports.activeLogoutConnection = function (io, socket, obj) {
    //将退出用户在在线列表删除

    if (onlineUser.hasOwnProperty(obj.userId)) {
        //退出用户信息
        var obj_ = {userid: obj.userId, username: onlineUser[obj.userId]};

        //删除
        delete onlineUser[obj_.userid];
        //删除
        onlineUserInfo = _.reject(onlineUserInfo, {'userId': obj.userId});
        //在线人数-1
        onlineCount--;
        //广播消息
        io.emit('logout', {onlineUser: onlineUser, onlineCount: onlineCount, user: obj_});
    }
};


exports.messageConnection = function (io, socket, obj) {
    //向所有客户端广播发布的消息
    io.emit('message', obj);
    console.log(obj.username + '说：' + obj.content);
};

exports.reconnectConnection = function (io, socket, obj) {
    //向所有客户端广播发布的消息
    console.log('9999999')
    console.log(obj)
    // console.log(obj.username+'说：'+obj.content);
};

exports.errorConnection = function (io, socket, obj) {
    //向所有客户端广播发布的消息
    console.log('9999999')
    // console.log(obj)
    // console.log(obj.username+'说：'+obj.content);
};

//指定用户强制登出
exports.forceLogoutConnectionTest = function (io, socket, obj) {
    if (onlineUser.hasOwnProperty(obj.userId)) {
        var toSocket = _.find(io.sockets.sockets, {id: obj.socketId});
        //广播消息
        toSocket.emit('forceLogout', {msg: `你的账户在别处登录了！`});
    }
};

//除自己外发布聊天内容
exports.broadcastConnection = function (io, socket, obj) {
    //广播消息去除自己
    socket.broadcast.emit('message', obj);
};

//指定用户发布聊天内容
exports.appointConnection = function (io, socket, obj) {
    if (onlineUser.hasOwnProperty(obj.userid)) {
        var toSocket = _.find(io.sockets.sockets, {name: obj.userid});
        toSocket.emit('message', obj);
    } else {

    }
};

//接收微信订单通知发送广播
exports.orderWeChatCreatorConnection = function (io, socket, obj) {
    io.emit('orderWeChatCreator', obj);
};


//接收微信订单买单通知发送广播
exports.orderWeChatCheckConnection = function (io, socket, obj) {
    io.emit('orderWeChatCheck', obj);
};

//mqtt在线状态通知
exports.mqttStateConnection =  (io, socket, obj)=> {
    io.emit('mqttState', obj);
};
//网络在线状态通知
exports.networkStateConnection =  (io, socket, obj)=> {
    io.emit('networkState', obj);
};
//打印机在线状态通知
exports.printerStateConnection =  (io, socket, obj)=> {
    io.emit('printerState', obj);
};
//电视机在线状态通知
exports.tvConnectStateConnection =  (io, socket, obj)=> {
    io.emit('tvConnectState', obj);
};


// 多终端 消息通知
exports.notifyOne = (io, socket, obj) => {
    if (obj && obj.type) {
        io.emit(obj.type, obj)
    }
}

exports.notifyAll = (io, socket, obj) => {
    let messageType = {
        bindTable: '开台',
        pushOrder: '下单',
        addOrder: '加菜',
        payOrder: '买单',
        cancelOrder: '取消订单',
        discountOrder: '折扣',
        resumeOrder: '恢复折扣',
        grantOrder: '赠菜',
        refundOrder: '退菜',
        changeOrder: '换桌',
        checkWeightOrder: '核重',
    }
    clientNotifyModel.generalNotify(obj.orderId, (err, results) => {
        if (err) return;
        let data = {
            ok: true,
            msg: `${results.table_number || results.ver_code} 号桌 ${messageType[obj.type]} 成功`,
            data: {
                order_id: results.id,
                table_number: results.table_number || results.ver_code || '',
                order_state: results.order_state,
                production_status: results.production_status,
                customer_count: results.customer_count || 0,
                parent_order_id: results.parent_order_id,
                distribution_mode_id: results.distribution_mode_id || '',
                create_time: results.create_time
            }
        }
        if (obj && obj.socketId) {
            socket.id = obj.socketId
            socket.broadcast.emit(obj.type, data); // 除自己外所有客户端都发送
        } else {
            io.emit(obj.type, data)
        }
    })
}

exports.platformOrder = (io, socket, obj) => {
    console.log("发送消息", obj)
    let data = {
        ok: true,
        msg: `收到外卖新订单`,
        data: obj
    }
    io.emit('platformOrder', data)
}

//更新数据
exports.updateDataConnection = function (io, socket, obj) {
    io.emit('updateDataUser', obj);

    console.log(obj);
    logger.info(`开始更新数据`)
    let tableCount = 30;
    let currentSchedule = 0;
    async.waterfall([
         (cb)=> {
             syncDataUtil.InitArea(()=> {             //  1、区域表
                 currentSchedule+=1;
                 io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                 cb(null)
             })
        },
        (cb)=> {
            syncDataUtil.InitArticle(()=> {          //  2、菜品表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleAttr(()=> {      //  3、菜品老规格属性表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleFamily(()=> {    //  4、菜品分类表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleKitchen(()=> {   //  5、菜品出餐厨房表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticlePrice(()=> {     //  6、菜品老规格详情表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleUnit(()=> {      //  7、菜品老规格属性子项（详情）表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleUnitDetail(()=> {//  8、菜品新规格属性子项关联表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleUnitNew(()=> {   //  9、 菜品新规格属性关联表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitKitchen(()=> {          //  10、出餐厨房表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitMealAttr(()=> {         //  11、套餐属性表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitMealItem(()=> {         //  12、套餐属性子项表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitPrinter(()=> {          //  13、打印机表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitShopDetail(()=> {       //  14、店铺详情表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitTableQrcode(()=> {      //  15、桌位表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitUnit(()=> {             //  16、菜品新规格属性表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitUnitDetail(()=> {       //  17、菜品新规格属性子项表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitUser(()=> {             //  18、用户表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitArticleSupportTime(()=> {//  19、菜品供应时间表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitSupportTime(()=> {      //  20、供应时间表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitOrderRemark(()=> {      //  21、订单备注
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitRefundRemark(()=> {     //  22、退菜备注
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitBrandSetting(()=> {     //  23、品牌设置
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitShopTvConfig(()=> {     //  24、电视设置
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitVirtualProductsList(()=> {     //  25、获取虚拟餐包
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitVirtualProductsKitchenList(()=> {     //  26、获取虚拟餐包厨房信息
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitWeightPackage(()=> {     //  27、重量包
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitWeightPackageDetail(()=> {     //  28、重量包详情
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitSelectRecommendList(()=> {     //  29、//  查询推荐餐品表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        },
        (cb)=> {
            syncDataUtil.InitSelectRecommendArticleList(()=> {     //  30、推荐餐品关联菜品表
                currentSchedule+=1;
                io.emit('updateDataPace', { schedule: parseInt(currentSchedule / tableCount * 100) });
                cb(null)
            })
        }
    ],  (err, result)=> {
        //广播消息
        logger.info(`更新数据完成`)
        onlineUser = {};
        onlineUserInfo = [];
        let sql = `select * from tb_shop_detail`;
        customSqlModel.getOneCustomSqlInfo(sql, (err, result) => {
            if (err) return(err)
            if (result.shop_mode == 2) {
                shopDetailStorage = result;
                const tvWebSocket = require("../../lib/util/tvNewWebSocket");
                tvWebSocket.client.ws.onclose()
            }
        });
        io.emit('updateDataFulfil', obj);
    });
};

//登陆时同步库存
exports.syncStockArticleConnection = function (io, socket, obj) {
    logger.info(`开始同步库存数据`)
    syncDataUtil.InitStockArticleList((err,result)=> {
        if(err){
            logger.error(`同步库存数据失败`,err.stack)
        }else {
           if(result.flag!='0000' ){
               logger.error(`同步库存数据失败`,result.msg)
           }else if(result.result.ok == false){
               logger.error(`同步库存数据失败`,result.result.message)
           }else {
               logger.info(`同步库存数据开始!`)
               let article_list = result.result.data.article_list;
               let article_price_list = result.result.data.article_price_list;

               let tableCount = article_list.length + article_price_list.length;

               let currentSchedule = 0;

                async.waterfall([
                        (done)=>{
                            async.eachLimit(article_list, 1,  (item, cb)=> {
                                currentSchedule+=1;
                                io.emit('syncStockArticle', { schedule: parseInt(currentSchedule / tableCount * 100) });
                                articleModel.updateById(item.id,{currentWorkingStock: item.currentWorkingStock,isEmpty:item.currentWorkingStock>0?0:1},cb)
                            },(err)=>done(err));
                        },
                        (done)=>{

                            async.eachLimit(article_price_list, 1,  (item, cb)=> {
                                currentSchedule+=1;
                                io.emit('syncStockArticle', { schedule: parseInt(currentSchedule / tableCount * 100) });
                                articlePriceModel.updateById(item.id,{currentWorkingStock: item.currentWorkingStock},cb)
                            },(err)=>done(err));
                        },
                    ],(error, result)=>{
                    //广播消息
                    logger.info(`同步库存数据完成!`)
                    io.emit('syncStockArticleFulfil', {ok:true,msg:`同步菜品库存数据完成!`});
                });

           }
        }
    })

};


//微信端店铺设置通知发送广播
exports.wechatShopChangeConnection =  (io, socket, obj)=> {
    io.emit('wechatShopChange', obj);
};
