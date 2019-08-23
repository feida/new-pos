/**
 * @author wxh on 2018/8/19
 * @copyright
 * @desc
 */

const platformOrder = require( "../../controller/web/platformOrder")

const orderItem = require("../../controller/web/orderItem");

const article =require( "../../controller/web/article")

const  articlePrice = require("../../controller/web/articlePrice");

const unit = require("../../controller/web/unit");
const mealItem = require('../../controller/web/mealItem')

const weightPackage = require('../../controller/web/weightPackage')
const user = require('../../controller/web/user');
const role = require('../../controller/web/role');
const area = require('../../controller/web/area');
const table = require('../../controller/web/tabeQrcode');
const order = require("../../controller/web/order");
const report = require("../../controller/web/report");
const remark = require("../../controller/web/remark");
const paymentItem = require("../../controller/web/paymentItem");
const print = require("../../controller/web/print");
const tv = require("../../controller/web/tv");

const articleFamily = require("../../controller/web/articleFamily");

const shop = require("../../controller/web/shop");

const mqtt = require("../../controller/web/mqtt");
const printUtil = require("../../lib/util/printUtil");
const active = require("../../controller/web/active");


exports.map = function (app) {

    //--------------------后台用户--------------------

    app.get('/system/info', user.getUserDetailByToKen); // 根据token获取管理员详情


    app.get('/user/normal/list', user.userlist);  //获取正常用户列表
    app.post('/user/login', user.login);
    app.delete('/user/logout', user.logout)  //用户退出登陆

    //--------------------角色--------------------
    app.put('/role/user', role.createNewRole); // 创建角色

    app.get('/role/list', role.getRoleList); // 获取角色列表

    // app.post('/system/role', role.updateRole); // 修改角色信息
    //
    // app.delete('/system/role', role.deleteRole); // 删除角色信息
    //
    // app.get('/system/role/perms', role.getPermsListByRoleId); // 根据角色Id权限列表

    // app.post('/system/role/perms', role.updateRolePermsByRoleId); // 根据角色Id修改绑定的权限
    //
    // app.put('/system/role/perm', role.addRolePerm); //添加角色的权限
    //
    // app.delete('/system/role/perm', role.deleteRolePerm); //添加角色的权限

    //-----------------------区域---------------------
    app.get('/area', area.areaList);
    app.get('/table/list_by_id', table.listByAreaId); //根据区域 id 获取桌位列表
    app.get('/table/list', table.getAllTableAndOrder);
    app.get('/table/number', table.getTableNumberAndOrder); //获取桌位信息、包括未支付订单

    //----------------------订单---------------------
    app.post('/bind/table', order.bindTable); // 开台
    app.put('/order/change_order', order.changeOrder); // 换桌

    app.post('/push/order', order.pushOrder); // 下单
    app.post('/order/pay', order.orderPay); // 买单
    app.post('/order/scan', order.scanPay); // 扫码支付
    app.get('/order/scan_code', order.scanCode);  // 扫码支付是否成功查询

    app.post('/order/discount', order.discount);//折扣
    app.put('/order/resume_discount', order.resumeDiscount);//恢复折扣
    app.get('/order/discount_info', order.getDiscountInfo);
    app.get('/order/cancel', order.cancelOrder);//撤销订单
    app.get('/order/detail', order.selectById);//获取订单详情

    app.get('/order/wait_order', order.waitOrderList); // 待下单
    app.get('/order/wait_and_nopay', order.waitAndNoPayOrderList); // 待下单和未支付
    app.get('/order/no_pay', order.noPayOrderList); // 未支付订单列表
    app.get('/order/pay', order.payOrderLst); // 已支付订单列表
    app.get('/order/paying', order.paying); //  获取支付中的订单列表
    app.get('/order/get_payment_by_orderId', paymentItem.getPaymentSelectByOrderId);// 根据订单 id获取 支付项列表
    app.get('/order/get_order_test', order.getOrderInfoTest) // 获取订单打印信息
    app.get('/order/order_state_count', order.orderStateCount); // 分类获取订单个数
    app.post('/order/refund', order.refundOrder) //退菜或改单
    app.get('/order/customer', order.customerInfo) //退菜或改单
    // app.post('/order/refund/new', order.refundOrderNew) // 新退菜退菜或改单



    app.get('/order/order_items', order.getAllItems);//获取所有菜品项
    app.get('/order/current_order_items', orderItem.getOrderItemByOrderId); // 根据订单获取当前菜品项
    app.put('/order/check_weight', orderItem.updateOrderItemWeight); // 核重
    app.post('/order/grant', orderItem.grant); // 赠菜
    app.post('/order/prompt', printUtil.reminderPrint); //催菜

    //----------------------------------- 外卖相关 ----------------------
    app.get('/order/platform/list', platformOrder.platformOrderList) // 获取今日外卖列表
    app.get('/order/platform/order', platformOrder.platformOrder) // 根据外卖id获取外卖详情
    //--------------------------------------------店铺信息-------------------------------

    app.get('/system/shop_detail', shop.getShopDetailInFo);     //获取店铺设置参数


    //----------------------菜品---------------------
    app.get('/article/family_list', articleFamily.articleFamilyList); // 获取菜品分类列表
    app.get('/article/article_list', articleFamily.getArticleByFamilyId);// 获取菜品列表
    app.get('/article/weight_package', weightPackage.selectWeightPackageByArticleId); //获取重量包
    app.get('/article/meal_item', mealItem.getMealByArticleId); // 根据菜品id获取套餐子品

    app.get('/article/price', articlePrice.getArticlePriceByArticleId); // 获取老规格详情
    app.get('/article/unit_list', unit.selectUnitListByArticleId)// 新规格详情
    app.get('/article/catty', article.getOpenCatty)// 重量包
    app.get('/article/search', report.getArticleBySearchKey)// 根据searchKey查询菜品


    //----------------------备注相关------------------
    app.get('/remark/order/refund', remark.getRemarkOrderRefund); //获取退菜备注

    //----------------------报表相关------------------
    app.get('/business/report', report.report) //报表
    app.get('/business/message', report.sendMessage) // 结店短信
    app.get('/business/open_payment_review', report.isOpenPaymentReview) // 是否开启结店审核
    app.get('/business/payment_list', report.findAllPaymentList) // 复核金额初始化
    app.post('/business/check', report.confirmCheckReport) // 确定结店
    app.post('/business/check/print', report.checkPrint) // 打印
    app.get('/business/check_success', report.checkSuccess)  // 结店成功，打印后的
    app.get('/business/article_sales', orderItem.articleSales)  // 结店成功，打印后的

    //----------------------在线状态---------------------
    app.get('/on/line/state', mqtt.getOnLineState); // 获取mqtt和网络 状态

    //-----------------------库存 stock----------------
    app.put('/stock/up_down', article.articleUpOrDown); // 上架 下架
    app.put('/stock/empty', article.articleIsEmpty); // 手动沽清库存
    app.put('/stock/update', article.articleStock); // 编辑库存
    app.put('/stock/recovery_all', article.recoveryArticle); // 批量恢复所有库存
    app.put('/stock/empty_price', articlePrice.articlePriceIsEmpty) // 老规格沽清
    app.put('/stock/update_price', articlePrice.articlePriceStock) // 老规格沽清
    app.put('/stock/batch_recovery', article.batchRecoveryArticle) // 套餐可售

    //------------------------激活-------------------------------
    app.get('/activate/config', active.getConfig)
    app.post('/activate/init', active.activate)


    //-----------------------打印 print----------------

    app.get('/print/all/info', print.allPrintInfo);

    //------------------------远程操作pos------------------------
    app.get("/activate/update", active.updatePosConfig)
    app.get("/activate/pos_config_info", active.posConfigInfo)


    //------------------------ TV 模式 --------------------
    app.get("/tv/wait", tv.waitCallTPOrderList)
    app.get("/tv/called", tv.hasCallTPOrderList)
    app.get("/tv/call_number", tv.callNumber)
    app.get("/tv/count", tv.waitCallTPAndhasCallTPOrderCount)
};
