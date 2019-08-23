/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */
const WEBPACK = process.env.WEBPACK;

const express = require('express');
const path = require('path');
const io = require('socket.io');
const os = require('os');
const events = require('events');

const config = require('./config');
const logger = require('./lib/logger');
const error = require('./lib/error');
const result = require('./lib/util/result');
const log = logger(config.log);

const app = express();

let onlineUser = {};
let onlineUserInfo = [];

let onlineCount = 0;

// 设置全局变量
global.logger = log;
global.onlineUser = onlineUser;
global.onlineUserInfo = onlineUserInfo;
global.onlineCount = onlineCount;
global.shopDetailStorage = null;
global.emitter = new events.EventEmitter();
global.mqttEmitter = new events.EventEmitter();
global.emitter_socket = null;
global.onlineState = {
    mqtt:false,
    network:false,
    printer:true,
    tvConnect:false
};
global.HttpError = error.HttpError;
global.BadRequestError = error.BadRequestError;
global.UnauthorizedError = error.UnauthorizedError;
global.NotFoundError = error.NotFoundError;

global.ErrorModel = result.ErrorModel;
global.SuccessModel = result.SuccessModel;
global.sessionStorage = {
    task: null,
    taskTime: null
}

global.InternalServerError = error.InternalServerError;
const monitor = require('./lib/monitor');
const timer = require('./lib/timer');   //定时器
monitor.changeItMqtt(global.onlineState);
// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('express-art-template'));
app.set('view options', config.template);
app.set('view engine', 'html');

// ======================================
const body = require('body-parser');
const cookie = require('cookie-parser');
const timeout = require('connect-timeout');
const compression = require('compression');

app.use(compression());
app.use(timeout('30s'));
app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({
    extended: true
}))

// webpack================================
if (WEBPACK === 'dev' || WEBPACK == 'ios') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const webpackHot = require('./middleware/webpack/hot');
    const webpackDev = require('./middleware/webpack/dev');
    const compiler = webpack(webpackConfig);
    app.use(webpackDev(compiler, webpackConfig));
    app.use(webpackHot(compiler, webpackConfig));

} else {
  app.use(express.static(path.join(__dirname, 'static')))
}

// =======================================
const apilog = require('./middleware/log/index');
const pagging = require('./middleware/paging/index');
const session = require('./middleware/session/index');

app.use(apilog());
app.use(session());
app.use(pagging());

// 路由设置=======================================
const socket = require('./router/socket');			// 引入socket的路由
const mqtt = require('./router/mqtt');			// 引入mqtt的路由

const web = require('./router/web');
const print = require('./router/print');
socket.map(app);									// 注册socket的页面路由
mqtt.map(app);									// 注册mqtt的页面路由
web.map(app);
print.map(app);


// 传入socket的参数和路由信息
app.socket = {
    io: io,
    routers: [socket]
};

// 初始化电视叫号
const tv = require("./controller/web/tv");
tv.initTvWebSocket()

// =======================================
const errorHandler = require('./middleware/error/index');

app.use(errorHandler.notFoundHandler());
app.use(errorHandler.serverErrorHandler());

module.exports = app;
