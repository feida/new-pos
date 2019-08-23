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
        "url": "http://106.15.50.94:8002",
        "path": "/v1",
        //  餐加生态M（辉总测试店铺）
        "brand_id": "2f83afee7a0e4822a6729145dd53af33",
        "shop_id": "d2ff1bbb8c6f4fd8adb3949f76f8c1b6",
    },
    ws_url: {
        "url": "ws://test.emq.restoplus.cn:8083/mqtt"
    },
    mqtt_config:{
        receivePlatform:[`posAdmin`,`resto`],   //接收
        publishThemeResto:`resto`,
        publishThemePosAdmin:`posAdmin`
    }
};