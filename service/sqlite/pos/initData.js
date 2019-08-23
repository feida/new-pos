/**
 * @author wxh on 2018/1/2
 * @copyright
 * @desc
 */
const async = require('async');
const moment = require('moment');
const uuidV4 = require('uuid/v4');
let config = require('../../config/index');
let NODE_ENV = process.env.NODE_ENV;

const sqlite3OrmUtil = require("../../../lib/util/sqlite3OrmUtil")
const sqlite = require('../../sqlite/pos/index').client;
const fs = require("fs");
const path = require("path");
const httpClient = require("../../../lib/util/httpClient");
const generalUtil = require("../../../lib/util/generalUtil");
var timeBegin = new Date().getTime();
var timeEnd = null;
var syncDataUtil = module.exports;
const requestUtil = require("../../../model/ios/requestUtil");
const analyzeDictionary = require("../../../lib/util/analyzeDictionary");

function Deploy(obj) {
    this.url = obj.url;
    this.path = obj.path;
    this.method = obj.method || `get`;
    this.headers = obj.headers || {
        "content-type": "application/json",
    };
    this.brand_id = obj.brand_id;
    this.shop_id = obj.shop_id;
}
syncDataUtil.InitTable = function (callback) {
    sqlite.sync({force: true}).then(function (err) {
        console.log('init sqlite success');
        callback(null)
    });
};


const formatDB = (tableName, obj, callback) => {
    httpClient.get(obj,{},(err,data)=>{
        if (err) return console.error(err.stack);

        if(data.flag != '0000') return console.error(obj.path,data.msg);

        if(!data.result.ok) return console.error(data.message);
        if (data.result.data.length < 0) return callback()
        let resultData = data.result.data;

        if (NODE_ENV == "ios") {
            requestUtil.insert(`DELETE FROM ${tableName}`, (err, response) => {
                async.eachLimit(resultData, 1, (item, cb) => {
                    sqlite3OrmUtil.convertParamsToSql(tableName, item, function (err, sql) {
                        requestUtil.insert(sql, (err, response) => cb())
                    });
                }, (err) => {
                    console.log(`init ios ${tableName} success`);
                    callback(null, null);
                })
            })
        } else {
            const model = sqlite.model(tableName);
            model.sync({force: true}).then(()=> {
                async.eachLimit(resultData, 1,  (item, cb) =>{
                    model.build(generalUtil.convertHumpName(item)).save().then((result)=> cb())
                },  (err, result)=> {
                    if (err) return console.error(err.stack);
                    console.log(`init ${tableName} success`);
                    callback(null, null);
                });
            });
        }
    })
}


syncDataUtil.InitArea = function (callback) {
    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/area/list";
    formatDB('tb_area', obj, function () {
        callback();
    })

};

syncDataUtil.InitArticle = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article/list";
    formatDB('tb_article', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleAttr = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_attr/list";
    formatDB('tb_article_attr', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleFamily = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_family/list";
    formatDB('tb_article_family', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleKitchen = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_kitchen/list";
    formatDB('tb_article_kitchen', obj, function () {
        callback();
    })

};

syncDataUtil.InitArticlePrice = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_price/list";
    formatDB('tb_article_price', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleSupportTime = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_support_time/list";
    formatDB('tb_article_support_time', obj, function () {
        callback();
    })

};

syncDataUtil.InitArticleUnit = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_unit/list";
    formatDB('tb_article_unit', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleUnitDetail = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_unit_detail/list";
    formatDB('tb_article_unit_detail', obj, function () {
        callback();
    })
};

syncDataUtil.InitArticleUnitNew = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/article_unit_new/list";
    formatDB('tb_article_unit_new', obj, function () {
        callback();
    })
};

syncDataUtil.InitKitchen = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/kitchen/list";
    formatDB('tb_kitchen', obj, function () {
        callback();
    })
};

syncDataUtil.InitMealAttr = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/meal_attr/list";
    formatDB('tb_meal_attr', obj, function () {
        callback();
    })
};

syncDataUtil.InitMealItem = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/meal_item/list";
    formatDB('tb_meal_item', obj, function () {
        callback();
    })
};

syncDataUtil.InitPrinter =  (callback) =>{

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/printer/list";
    formatDB('tb_printer', obj, function () {
        callback();
    })

};

syncDataUtil.InitShopDetail = function (callback) {


    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/shop_detail";
    httpClient.get(obj,{},(err,data)=>{
        if (err) return callback(err.stack);

        if(data.flag != '0000') return console.error(obj.path,data.msg);

        if(!data.result.ok) return console.error(data.message);

        if(!data.result.data) return callback();
        let resultData = data.result.data
        if (NODE_ENV == "ios") {
            requestUtil.insert(`DELETE FROM tb_shop_detail`, (err, response) => {
                sqlite3OrmUtil.convertParamsToSql("tb_shop_detail", resultData, function (err, sql) {
                    console.log("sql", sql)
                    requestUtil.insert(sql, (err, response) => {
                        console.log(`init ios tb_shop_detail success`);
                        callback()
                    })
                });
            })
        } else {
            const model = sqlite.model('tb_shop_detail');
            model.sync({force: true}).then(()=> {
                data.result.data.payType = data.result.data.allow_first_pay;
                data.result.data.openPosWeChatPay = data.result.data.open_pos_wechat_pay;
                model.build(generalUtil.convertHumpName(data.result.data)).save().then((result)=> {
                    console.log('init tb_shop_detail success');

                    if (path.resolve().indexOf("resto-newpos/service/sqlite/") == -1 && path.resolve().indexOf("resto-newpos\\service\\sqlite\\") == -1) {
                        let shopDetailPath = path.resolve(__dirname) + "/../../../shopDetail.json";

                        fs.writeFile(shopDetailPath, JSON.stringify(generalUtil.convertHumpName(data.result.data),null, 4), (err) => {
                            if (err) {
                                console.log('同步数据 写入 shopDetail  失败  \n\n' + shopDetailPath + "\n\n" + err.toString());
                            }
                        });
                    } else {
                        let shopDetailPath = "../../../shopDetail.json";
                        fs.writeFile(shopDetailPath, JSON.stringify(generalUtil.convertHumpName(data.result.data),null, 4), (err) => {
                            if (err) {
                                console.log('同步数据 写入 shopDetail111  失败  \n\n' + shopDetailPath + "\n\n" + err.toString());
                            }
                        });
                    }
                    callback();
                });
            });
        }
    });
};

syncDataUtil.InitSupportTime = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/support_time/list";
    formatDB('tb_support_time', obj, function () {
        callback();
    })

};

syncDataUtil.InitTableQrcode = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/table_qrcode/list";
    formatDB('tb_table_qrcode', obj, function () {
        callback();
    })

};

syncDataUtil.InitUnit = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/unit/list";
    formatDB('tb_unit', obj, function () {
        callback();
    })


};

syncDataUtil.InitUnitDetail = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/unit_detail/list";
    formatDB('tb_unit_detail', obj, function () {
        callback();
    })

};

syncDataUtil.InitUser = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/brand_user/list";
    formatDB('tb_user', obj, function () {
        callback();
    })

};

syncDataUtil.InitOrderRemark = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/order_remark/list";
    formatDB('tb_order_remark', obj, function () {
        callback();
    })
};

syncDataUtil.InitRefundRemark = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/refund_remark/list";
    formatDB('tb_refund_remark', obj, function () {
        callback();
    })
};

syncDataUtil.InitBrandSetting = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/brand_setting";
    httpClient.get(obj,{},(err,data)=>{
        if (err) return callback(err.stack);

        if(data.flag != '0000') return console.error(obj.path,data.msg);

        if(!data.result.ok) return console.error(data.message);

        if(!data.result.data || data.result.data == "") return callback();
        if (NODE_ENV == "ios") {
            requestUtil.insert(`DELETE FROM tb_brand_setting`, (err, response) => {
                sqlite3OrmUtil.convertParamsToSql("tb_brand_setting", data.result.data, function (err, sql) {
                    requestUtil.insert(sql, (err, response) => {
                        console.log(`init ios tb_brand_setting success`);
                        callback()
                    })
                });
            })
        } else {
            const model = sqlite.model('tb_brand_setting');

            model.sync({force: true}).then(()=> {
                if(data.result.data)
                    model.build(generalUtil.convertHumpName(data.result.data)).save().then((result)=> {
                        console.log('init tb_brand_setting success');
                        callback();
                    });
            });
        }
    });
};

syncDataUtil.InitShopTvConfig = function (callback) {
    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/shop_tv_config";

    httpClient.get(obj,{},(err,data)=>{
        if (err) return callback(err.stack);

        if(data.flag != '0000') return console.error(obj.path,data.msg);

        if(!data.result.ok) return console.error(data.message);

        if(!data.result.data) return callback();
        if (NODE_ENV == "ios") {
            sqlite3OrmUtil.convertParamsToSql("tb_shop_tv_config", data.result.data, function (err, sql) {
                requestUtil.insert(sql, (err, response) => {
                    console.log(`init ios tb_shop_tv_config success`);
                    callback()
                })
            });
        } else {
            const model = sqlite.model('tb_shop_tv_config');

            model.sync({force: true}).then(()=> {
                if(data.result.data)
                    model.build(generalUtil.convertHumpName(data.result.data)).save().then((result)=> {
                        console.log('init tb_shop_tv_config success');
                        callback();
                    });
            });
        }
    });
};

syncDataUtil.InitWeightPackage = function (callback) {
    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/weight_package/list";
    formatDB('tb_weight_package', obj, function () {
        callback();
    })
};

syncDataUtil.InitWeightPackageDetail = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/weight_package_detail/list";
    formatDB('tb_weight_package_detail', obj, function () {
        callback();
    })
};

syncDataUtil.InitVirtualProductsList = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/virtual_products/list";
    formatDB('tb_virtual_products', obj, function () {
        callback();
    })

};

syncDataUtil.InitVirtualProductsKitchenList = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/virtual_products_kitchen/list";
    formatDB('tb_virtual_products_kitchen', obj, function () {
        callback();
    })
};


syncDataUtil.InitSelectRecommendList = function (callback) {

    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/recommend/list";
    formatDB('tb_recommend', obj, function () {
        callback();
    })
};

syncDataUtil.InitSelectRecommendArticleList = function (callback) {
    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/update/recommend_article/list";
    formatDB('tb_recommend_article', obj, function () {
        callback();
    })
};

syncDataUtil.InitPosConfig = function(config, callback) {
    const model = sqlite.model('tb_pos_config');
    // callback();
    //
    model.sync({force: true}).then(()=> {
        model.build(generalUtil.convertHumpName(config)).save().then((result)=> {
            console.log('InitPosConfig');
            callback();
        });

    });
}

syncDataUtil.allData = function (tableState, callback) {
    let that = this;
    if (tableState == 1) {
        delete require.cache[require.resolve('../../config/exe/index')];
        config = config
    }
    async.waterfall([
        function (cb) {
            tableState ? that.InitTable(cb) : cb(null)
        },
        function (cb) {
            that.InitArea(cb)                //区域表--tb_area
        },
        function (cb) {
            that.InitArticle(cb)             //菜品表——tb_article
        },
        function (cb) {
            that.InitArticleAttr(cb)         //菜品老规格属性表——tb_article_attr
        },
        function (cb) {
            that.InitArticleFamily(cb)       //菜品老规格属性表——tb_article_attr
        },
        function (cb) {
            that.InitArticleKitchen(cb)      //菜品出餐厨房表——tb_article_kitchen
        },
        function (cb) {
            that.InitArticlePrice(cb)        //菜品老规格详情表——tb_article_price
        },
        function (cb) {
            that.InitArticleSupportTime(cb)  //菜品供应时间表——tb_article_support_time
        },
        function (cb) {
            that.InitArticleUnit(cb)         //菜品老规格属性子项（详情）表——tb_article_unit
        },
        function (cb) {
            that.InitArticleUnitDetail(cb)   //菜品新规格属性子项关联表——tb_article_unit_detail
        },
        function (cb) {
            that.InitArticleUnitNew(cb)      //菜品新规格属性关联表——tb_article_unit_new
        },
        function (cb) {
            that.InitKitchen(cb)             //出餐厨房--tb_kitchen
        },
        function (cb) {
            that.InitMealAttr(cb)            //套餐属性表——tb_meal_attr
        },
        function (cb) {
            that.InitMealItem(cb)            //套餐属性子项表——tb_meal_item
        },
        function (cb) {
            that.InitPrinter(cb)             //打印机表--tb_printer
        },
        function (cb) {
            that.InitShopDetail(cb)          //店铺详情表——tb_shop_detail
        },
        function (cb) {
            that.InitSupportTime(cb)         //供应时间表——tb_support_time
        },
        function (cb) {
            that.InitTableQrcode(cb)         //桌位表--tb_table_qrcode
        },
        function (cb) {
            that.InitUnit(cb)                //菜品新规格属性表——tb_unit
        },
        function (cb) {
            that.InitUnitDetail(cb)          //菜品新规格属性子项表——tb_unit_detail
        },
        function (cb) {
            that.InitUser(cb)                //用户表——tb_user
        },
        function (cb) {
            that.InitOrderRemark(cb)        //订单备注表——tb_order_remark
        },
        function (cb) {
            that.InitRefundRemark(cb)        //退菜备注表——tb_refund_remark
        },
        function (cb) {
            that.InitBrandSetting(cb)
        },
        function (cb) {
            that.InitShopTvConfig(cb)
        },
        function (cb) {
            that.InitWeightPackage(cb)   //重量包
        },
        function (cb) {
            that.InitWeightPackageDetail(cb)     //重量包详情
        },
        function (cb) {
            that.InitVirtualProductsList(cb)     //获取虚拟餐包
        },
        function (cb) {
            that.InitVirtualProductsKitchenList(cb)     //获取虚拟餐包厨房信息
        },
        function (cb) {
            that.InitSelectRecommendList(cb)      //推荐餐品表——tb_recommend
        },
        function (cb) {
            that.InitSelectRecommendArticleList(cb)      //推荐餐品关联菜品表——tb_recommend_article
        },
        // function (cb) {
        //     that.InitPosConfig(config, cb)
        // }
    ], function (err, result) {
        if (err) {
            return console.error(err.stack);
        }
        timeEnd = new Date().getTime();
        console.log("总共用时：" + (timeEnd - timeBegin) / 1000 + " s");
        callback && callback();
    });
};



//登陆时同步库存
syncDataUtil.InitStockArticleList = function (callback) {
    let obj = new Deploy(config.api_url);
    obj.path = obj.path + "/newpos/stock/article";
    httpClient.get(obj,{},callback);
};
