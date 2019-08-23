const async = require('async');
const path = require("path")
const rootPath = path.resolve();
const requestUtil = require("../../../model/ios/requestUtil")
const config = require('../../config/index');
let NODE_ENV = process.env.NODE_ENV;
const initData = require('./initData');
const sqlite = require('../../sqlite/pos/index').client;
var timeBegin = 0;
var timeEnd = null;
if (NODE_ENV == 'dev') {
    sqlite.sync({ force: true }).then(function (err) {
        console.log('init sqlite success');
        init(()=> {console.warn('init database data success')});
    });
}
if (NODE_ENV == "ios") {
    requestUtil.getSqliteDbPath((err, result) => {
        if (err) {
            console.log("init ios base is fail", err);
            return
        }
        let resStr = result.result;
        if (resStr && resStr.length <= 0) {
            console.log("database path is fail", resStr)
        }
        arr = resStr.split("/")
        let datapath = arr.slice(0, arr.length - 2).join("/") + "/www/resto-newpos/main.sql"
        console.log("data path", datapath)
        requestUtil.createIosDb(`${datapath}`, (err, result) => {
            if (err) return console.log("Init sqlite err", err);
            console.log("Init ios sqlite success", result);
            init(()=>{console.warn("Init database data success")});
        })
    })

}
const init = function(callback) {
    timeBegin = new Date().getTime();
    async.parallel({
        InitArea:  (cb)=> {
            initData.InitArea(cb)                //区域表--tb_area
        },
        InitArticle:  (cb)=> {
            initData.InitArticle(cb)             //菜品表——tb_article
        },
        InitArticleAttr: function (cb) {
            initData.InitArticleAttr(cb)         //菜品老规格属性表——tb_article_attr
        },
        InitArticleFamily: function (cb) {
            initData.InitArticleFamily(cb)       //菜品老规格属性表——tb_article_family
        },
        InitArticleKitchen: function (cb) {
            initData.InitArticleKitchen(cb)      //菜品出餐厨房表——tb_article_kitchen
        },
        InitArticlePrice: function (cb) {
            initData.InitArticlePrice(cb)        //菜品老规格详情表——tb_article_price
        },
        InitArticleSupportTime: function (cb) {
            initData.InitArticleSupportTime(cb)  //菜品供应时间表——tb_article_support_time
        },
        InitArticleUnit: function (cb) {
            initData.InitArticleUnit(cb)         //菜品老规格属性子项（详情）表——tb_article_unit
        },
        InitArticleUnitDetail: function (cb) {
            initData.InitArticleUnitDetail(cb)   //菜品新规格属性子项关联表——tb_article_unit_detail
        },
        InitArticleUnitNew: function (cb) {
            initData.InitArticleUnitNew(cb)      //菜品新规格属性关联表——tb_article_unit_new
        },
        InitKitchen: function (cb) {
            initData.InitKitchen(cb)             //出餐厨房--tb_kitchen
        },
        InitMealAttr: function (cb) {
            initData.InitMealAttr(cb)            //套餐属性表——tb_meal_attr
        },
        InitMealItem: function (cb) {
            initData.InitMealItem(cb)            //套餐属性子项表——tb_meal_item
        },
        InitPrinter: function (cb) {
            initData.InitPrinter(cb)             //打印机表--tb_printer
        },
        InitShopDetail: function (cb) {
            initData.InitShopDetail(cb)          //店铺详情表——tb_shop_detail
        },
        InitSupportTime: function (cb) {
            initData.InitSupportTime(cb)         //供应时间表——tb_support_time
        },
        InitTableQrcode: function (cb) {
            initData.InitTableQrcode(cb)         //桌位表--tb_table_qrcode
        },
        InitUnit: function (cb) {
            initData.InitUnit(cb)                //菜品新规格属性表——tb_unit
        },
        InitUnitDetail: function (cb) {
            initData.InitUnitDetail(cb)          //菜品新规格属性子项表——tb_unit_detail
        },
        InitUser: function (cb) {
            initData.InitUser(cb)                //用户表——tb_user
        },
        InitOrderRemark: function (cb) {
            initData.InitOrderRemark(cb)        //订单备注表——tb_order_remark
        },
        InitRefundRemark: function (cb) {
            initData.InitRefundRemark(cb)        //退菜备注表——tb_refund_remark
        },
        InitBrandSetting: function (cb) {       //品牌设置表——tb_brand_setting
            initData.InitBrandSetting(cb)
        },
        InitShopTvConfig: function (cb) {       //电视配置信息——tb_shop_tv_config
            initData.InitShopTvConfig(cb)
        },
        InitWeightPackage: function (cb) {          //重量包——tb_weight_package
            initData.InitWeightPackage(cb)
        },
        InitWeightPackageDetail: function (cb) {    //重量包详情——tb_weight_package_detail
            initData.InitWeightPackageDetail(cb)
        },
        InitVirtualProductsList: function (cb) {          //获取虚拟餐包——tb_virtual_products
            initData.InitVirtualProductsList(cb)
        },
        InitVirtualProductsKitchenList: function (cb) {     //获取虚拟餐包厨房信息——tb_virtual_products_kitchen
            initData.InitVirtualProductsKitchenList(cb)
        },
        InitSelectRecommendList: function (cb) {             //推荐餐品表——tb_recommend
            initData.InitSelectRecommendList(cb)
        },
        InitSelectRecommendArticleList: function (cb) {             //推荐餐品关联菜品表——tb_recommend_article
            initData.InitSelectRecommendArticleList(cb)
        },
        InitPosConfig: function (cb) {
            initData.InitPosConfig(cb)
        }
    }, function (err, results) {
        if (err) {
            return console.error(err.stack);
        }
        timeEnd = new Date().getTime();
        console.log("total time：" + (timeEnd - timeBegin) / 1000 + " s");
        callback()
    });
}
exports.init = init;
