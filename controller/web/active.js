const request = require("request");
const async = require("async");
const fs = require("fs")
const {SuccessModel, ErrorModel} = require('../../lib/util/result');
const customerModel = require("../../model/web/customSql")
const generalUtil = require("../../lib/util/generalUtil")
const configJson = require("../../service/config/index")
const syncInit = require("../../service/sqlite/pos/initData")
const posConfigModel = require("../../model/web/posConfig")
const posSqlite = require('../../service/sqlite/pos').client;
/**
 * 是否需要激活 pos
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.getConfig = (req, res, next) => {
    if (process.env.NODE_ENV != 'exe') {
        return res.json(new SuccessModel(null, {
            api_url: {
                key: true
            }
        }))
    }

    let sql = `select * from tb_pos_config`
    customerModel.getOneCustomSqlInfo(sql, (err, result) => {

        if (err) return res.json(new SuccessModel(null, null))
        try {
            let key = JSON.parse(result.api_url).key
            return res.json(new SuccessModel(null, key))
        }catch(e){
            return res.json(new SuccessModel(null, null))
        }
    })
}

/**
 * 激活
 * @param req
 * @param res
 * @param next
 */
exports.activate = (req, res, next) => {
    let activationKey = req.body.activate

    let url = configJson.api_url.url;

    let options = {
        url: url + '/v1/newpos/activate/shop_detail?key=' + activationKey
    }
    async.waterfall([
        function (cb) {
            request.get(options, (error, response, body) => { // 获取 brandId 和 shop id
                if (error) return res.json(new ErrorModel("Activate Fail"));
                body = JSON.parse(body)
                if (!body.result.ok) {
                    return res.json(new ErrorModel(body.result.message || body.result.msg))
                }
                let id = generalUtil.randomUUID();
                let apiUrl = {
                    url: url,
                    key: activationKey,
                    updateTime: new Date(),
                    path: configJson.api_url.path,
                    brandId: body.result.data.brand_id,
                    shopId: body.result.data.shop_id
                }
                configJson.api_url = {
                    url: url,
                    key: activationKey,
                    update_time: new Date(),
                    path: configJson.api_url.path,
                    brand_id: body.result.data.brand_id,
                    shop_id: body.result.data.shop_id
                }
                fs.writeFile("../../service/config/index", `module.exports=${JSON.stringify(configJson)}`, () => {
                    return cb(null, apiUrl)
                })

            })
        },function (apiUrl, cb) {
            let options = {
                url: apiUrl.url + '/v1/newpos/shop_detail/server/address?brand_id=' + apiUrl.brandId
            }
            request.get(options, (error, response, body) => { // 获取 brandId 和 shop id
                if (error) return res.json(new ErrorModel("Activate Fail"));
                body = JSON.parse(body)
                if (!body.result.ok) {
                    return res.json(new ErrorModel(body.result.message || body.result.msg))
                }
                apiUrl.path =  body.result.data.http_path;
                let config = {
                    apiUrl: JSON.stringify(apiUrl),
                    javaHttpUrl:JSON.stringify( {
                        url: body.result.data.pos_web_url,
                        path: "/pos/LocalPosSyncData"
                    }),
                    wsUrl: body.result.data.pos_mqtt_url,
                    adminServerDb:JSON.stringify( {
                        host: '127.0.0.1',
                        port: 8001,
                        path: "/newpos/order/info/",
                    }),
                    mqttConfig: JSON.stringify({
                        receivePlatform: body.result.data.receive_platform,
                        publishThemeResto: body.result.data.publish_theme_resto,
                        publishThemePosAdmin: body.result.data.publish_theme_pos_admin
                    })

                }

                return cb(null, config)
            })
        }], function (err, config) {
            config.id = generalUtil.randomUUID()
            syncInit.allData(1, config,function (err) {
                return res.json(new SuccessModel(null, null))
            })
        }
    )

}

exports.updatePosConfig = (req, res, next) => {

    let apiUrl = req.query.api_url ;
    let javaHttpUrl = req.query.java_http_url;
    let wsUrl = req.query.ws_url;
    let adminServerDb = req.query.admin_server_db;
    let mqttConfig = req.query.mqtt_config;

    let content = {};

    if(apiUrl){content.apiUrl = JSON.stringify(apiUrl)}
    if(javaHttpUrl){content.javaHttpUrl = JSON.stringify(javaHttpUrl)}
    if(wsUrl){content.wsUrl = JSON.stringify(wsUrl)}
    if(adminServerDb){content.adminServerDb = JSON.stringify(adminServerDb)}
    if(mqttConfig){content.mqttConfig = JSON.stringify(mqttConfig)}

    posConfigModel.findOneInfo((err,result)=>{
        if(err) return next(err);
        content.id = result.id
        posConfigModel.upsert(content, (err, result) => {
            if (err) return next(err);
            return res.json(new SuccessModel(null, result))
        })
    })

}

exports.posConfigInfo = (req, res, next) => {
    posConfigModel.findOneInfo((err, result) => {
        if (err) return next(err)
        return res.json(new SuccessModel(null, result))
    })
}