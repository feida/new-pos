/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */
module.exports = {
    sqlite: {
        pos: {
            host: '../../../sqlite/restoPlus.db',
            port: 1433,
            user: '',
            password: '',
            database: '../../../restoPlus.db'
        }
    },

    api_url: {
        // "url": "http://127.0.0.1:8002",
        "url": "http://106.15.50.94:8002",
        "path": "/v1",
        // //  餐加生态M（辉总测试店铺）
        // "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        // "shop_id": "d2ff1bbb8c6f4fd8adb3949f76f8c1b6",

        //今天不打烊
        "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        "shop_id": "63325014c50b4b16a81e50b3623f8d96"

        // 洪森先付
        // "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        // "shop_id": "0a5c40ccb8d14b949c5d5893686ab7c9"

        //重庆火锅-测试
        // "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        // "shop_id": "097091c36ee94f0fb6b4828bb2f6d16b"

        //餐加生态（后付款）
        // "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        // "shop_id": "43be0afc2b544cec87568b7247841107"

    },
    java_http_url: {
        "url": "http://pos.ecosystem.restoplus.cn:80/pos",
        // "url": "http://pos.preproduction.restoplus.cn",
        "path": "/pos/LocalPosSyncData"
    },
    ws_url: {
        "url": "ws://test.emq.restoplus.cn:8083/mqtt"
    },
    admin_server_db: {
        "host": "127.0.0.1",
        "port": 8001,
        "path":"/newpos/order/info/"
    },
    mqtt_config:{
        receivePlatform:[`posAdmin-dev`,`resto-dev`],   //接收
        publishThemeResto:`resto-dev`,
        publishThemePosAdmin:`posAdmin-dev`
    }
};
