module.exports = {
    "sqlite": {
        "pos": {
            "host": "../../../restoPlus.db",
            "port": 1433,
            "user": "",
            "password": "",
            "database": "../../../restoPlus.db"
        }
    },
    "api_url": {
        "url": "http://106.15.8.194:8002",
        "brand_id": "",
        "shop_id": "",
        "path": "/v1"
    },
    "java_http_url":{
        "url":"",
        "path": "/LocalPosSyncData"
    },
    "ws_url": {"url": "ws://test.emq.restoplus.cn:8083/mqtt"},
    "admin_server_db": {
        "host": "pos-admin.restoplus.cn",
        "port": 80,
        "path":"/newpos/order/info/"
    },
    "mqtt_config": {
        "receivePlatform": ["posAdmin", "resto"],
        "publishThemeResto": "resto",
        "publishThemePosAdmin": "posAdmin"
    }
}