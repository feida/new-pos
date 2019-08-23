webpackJsonp([10],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(493)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(544),
  /* scopeId */
  "data-v-6010c0bd",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/stock/stock.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] stock.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6010c0bd", Component.options)
  } else {
    hotAPI.reload("data-v-6010c0bd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        initCar: function initCar(orderInfo, shopDetail) {
            var orderItemMap = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(orderInfo.order_item_list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var orderItem = _step.value;

                    var item = {};
                    // 套餐主项
                    if (orderItem.type === 3) {
                        var _packageItem2 = orderItemMap[orderItem.id];
                        if (_packageItem2 && _packageItem2.id) {
                            orderItem.mealItems = _packageItem2.mealItems;
                        }
                    }
                    // 套餐子项
                    if (orderItem.type === 4) {
                        var _packageItem3 = orderItemMap[orderItem.parent_id] || {};
                        _packageItem3.mealItems = _packageItem3.mealItems || [];
                        _packageItem3.mealItems.push({
                            id: orderItem.article_id,
                            count: orderItem.count,
                            name: orderItem.article_name,
                            price: orderItem.original_price
                        });
                        if (!_packageItem3.id) {
                            _packageItem3.id = orderItem.parent_id;
                            orderItemMap[_packageItem3.id] = _packageItem3;
                        }
                        continue;
                    }

                    item = {
                        time: this.$utils.generateUUID(),
                        id: orderItem.article_id,

                        ownId: orderItem.id, // 新增，订单id
                        orderId: orderItem.order_id, // 主订单id
                        unitPrice: orderItem.unit_price, // 新增 unitPrice
                        payModeId: orderItem.payment_mode_id, // 支付类型
                        originCount: orderItem.orgin_count, // 原始的菜品数量

                        mealFeeNumber: orderItem.meal_fee_number, // 每一项所有的餐盒数量
                        mealFeeNumberOne: orderItem.meal_fee_number / orderItem.count, // 每一项的每一道菜所需要的餐盒个数
                        refundChange: 0, // 这个字段用来计算每一个菜品项需要退多少餐盒

                        count: orderItem.count, // 剩余的菜品数量
                        tempCount: orderItem.count,

                        tempRefundCount: orderItem.refund_count,

                        type: orderItem.type,
                        name: orderItem.article_name,
                        price: orderItem.final_price,
                        tempPrice: orderItem.final_price,

                        isOpen: false,
                        status: orderItem.status,

                        extraPrice: 0 // 新增 额外费用
                    };
                    if (item.type === 3) {
                        item.mealItems = orderItem.mealItems;
                    }
                    orderItemMap[orderItem.id] = item;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.car = []; // 清空购物车
            // 插入购物车
            for (var key in orderItemMap) {
                // 套餐总价（加上子项差价）
                if (orderItemMap[key].type === 3) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(orderItemMap[key].mealItems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var items = _step2.value;

                            if (items.count > 0) {
                                orderItemMap[key].price += items.price;
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                this.car.push(orderItemMap[key]);
            }
            // if(orderInfo.service_price){
            //   this.car.push({
            //     time: this.$utils.generateUUID(),
            //     serverPrice: true,
            //     count: orderInfo.customer_count,
            //     name: "服务费",
            //     tempCount: orderInfo.customer_count,
            //     status: 1,
            //     type: "servicePrice",
            //     unitPrice: orderInfo.service_price / orderInfo.customer_count,
            //     tempPrice: orderInfo.service_price,
            //     price: orderInfo.service_price,
            //   });
            // }
            console.log('orderInfo', orderInfo);
            console.log('shopDetail', shopDetail);

            if (orderInfo.service_price && shopDetail.serviceType == 0) {
                this.car.push({
                    time: this.$utils.generateUUID(),
                    serverPrice: true,
                    count: orderInfo.customer_count,
                    name: "服务费",
                    tempCount: orderInfo.customer_count,
                    status: 1,
                    type: "servicePrice",
                    unitPrice: orderInfo.service_price / orderInfo.customer_count,
                    tempPrice: orderInfo.service_price,
                    price: orderInfo.service_price
                });
            }

            if (orderInfo.service_price && shopDetail.serviceType == 1) {
                var upgradeService = [{
                    name: shopDetail.sauceFeeName,
                    count: orderInfo.sauce_fee_count,
                    price: orderInfo.sauce_fee_price
                }, {
                    name: shopDetail.towelFeeName,
                    count: orderInfo.towel_fee_count,
                    price: orderInfo.towel_fee_price
                }, {
                    name: shopDetail.tablewareFeeName,
                    count: orderInfo.tableware_fee_count,
                    price: orderInfo.tableware_fee_price
                }];
                for (var i = 0; i < upgradeService.length; i++) {
                    if (upgradeService[i].price > 0) {
                        this.car.push({
                            time: this.$utils.generateUUID(),
                            serverPrice: true,
                            count: upgradeService[i].count,
                            name: upgradeService[i].name,
                            tempCount: upgradeService[i].count,
                            status: 1,
                            type: "servicePrice",
                            unitPrice: upgradeService[i].price / orderInfo.count,
                            tempPrice: upgradeService[i].price,
                            price: upgradeService[i].price
                        });
                    }
                }
            }

            //子项订单遍历
            var chrildrenItemMap = {};
            if (orderInfo.childreorder_item_list.length > 0) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(orderInfo.childreorder_item_list), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var childrenOrderItem = _step3.value;

                        var childrenItem = {};
                        // 套餐主项
                        if (childrenOrderItem.type === 3) {
                            var packageItem = orderItemMap[childrenOrderItem.id];
                            if (packageItem && packageItem.id) {
                                childrenOrderItem.mealItems = packageItem.mealItems;
                            }
                        }
                        // 套餐子项
                        if (childrenOrderItem.type === 4) {
                            //              let packageItem = chrildrenItemMap[childrenOrderItem.parent_id] || {};
                            var _packageItem = orderItemMap[childrenOrderItem.parent_id] || {};
                            _packageItem.mealItems = _packageItem.mealItems || [];
                            _packageItem.mealItems.push({
                                id: childrenOrderItem.article_id,
                                count: childrenOrderItem.count,
                                name: childrenOrderItem.article_name,
                                price: childrenOrderItem.original_price
                            });

                            if (!_packageItem.id) {
                                _packageItem.id = childrenOrderItem.parent_id;
                                orderItemMap[_packageItem.id] = _packageItem;
                            }
                            continue;
                        }
                        childrenItem = {
                            time: this.$utils.generateUUID(),
                            id: childrenOrderItem.article_id,

                            ownId: childrenOrderItem.id, // 订单ID
                            orderId: childrenOrderItem.order_id, // 主订单ID
                            unitPrice: childrenOrderItem.unit_price, // 单价
                            payModeId: childrenOrderItem.payment_mode_id, //
                            originCount: childrenOrderItem.orgin_count,

                            mealFeeNumber: childrenOrderItem.meal_fee_number, // 每一项所有的餐盒数量
                            mealFeeNumberOne: childrenOrderItem.meal_fee_number / childrenOrderItem.count, // 每一项的餐盒个数
                            refundChange: 0, // 这个字段用来计算每一个菜品项需要退多少餐盒

                            tempRefundCount: childrenOrderItem.refund_count,

                            count: childrenOrderItem.count, // 数量
                            tempCount: childrenOrderItem.count, // 剩余数量

                            type: childrenOrderItem.type, // 类型
                            name: childrenOrderItem.article_name,
                            price: childrenOrderItem.final_price,
                            tempPrice: childrenOrderItem.final_price,

                            isOpen: false,
                            notes: '(加菜)',
                            status: childrenOrderItem.status,

                            extraPrice: 0 // 新增 额外费用(餐盒费，服务费等) 注意，初代版本不要求，所以是0
                        };
                        if (childrenItem.type === 3) {
                            childrenItem.mealItems = childrenOrderItem.mealItems;
                        }
                        chrildrenItemMap[childrenOrderItem.id] = childrenItem;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                for (var _key in chrildrenItemMap) {
                    if (chrildrenItemMap[_key].type === 3) {
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(chrildrenItemMap[_key].mealItems), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var _items = _step4.value;

                                if (_items.count) {
                                    chrildrenItemMap[_key].price += _items.price;
                                }
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                    this.car.push(chrildrenItemMap[_key]);
                }
            }
        },
        getArticleType: function getArticleType(currentArticle) {
            if (currentArticle.article_type === 1) {
                if (currentArticle.article_unit == 2) {
                    // 老规格
                    return '规格';
                } else if (currentArticle.article_unit == 5) {
                    // 新规格
                    return '规格';
                } else if (currentArticle.open_catty == 1) {
                    return '称重';
                } else {
                    // 普通单品
                    return '单品';
                }
            } else {
                return '套餐';
            }
        },
        articleType: function articleType(currentArticle) {
            if (currentArticle.article_type === 1) {
                if (currentArticle.article_unit == 2) {
                    // 老规格
                    return 'OLD_UNIT_PRICE';
                } else if (currentArticle.article_unit == 5) {
                    // 新规格
                    return 'NEW_UNIT_PRICE';
                } else if (currentArticle.open_catty == 1) {
                    return 'WEIGHT_ARTICLE';
                } else {
                    // 普通单品
                    return 'NORMAL_ARTICLE';
                }
            } else {
                return 'PACKAGE_ARTICLE';
            }
        },


        /**
         *  @desc 用于判断 接收到消息通知后 是否刷新订单
         *  @param eventType String 消息类型
         *  @return boolean
         */
        orderFreshByEventType: function orderFreshByEventType(eventType) {
            var eventTypaArr = ['bindTable', 'orderCreate', 'changeTable', 'orderPay', 'discount', 'grantOrder'];
            if (eventTypaArr.includes(eventType)) {
                return true;
            } else {
                return false;
            }
        }
    }
});

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/symbols-meiyoushangpin.png";

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".el-col-3[data-v-6010c0bd]{width:9.5%}.el-col-13[data-v-6010c0bd]{width:57.16669%}.el-button+.el-button[data-v-6010c0bd]{width:70px}.stock[data-v-6010c0bd]{height:100%}.tool-bar[data-v-6010c0bd]{height:60px;line-height:60px;background-color:#fff}.bar-content[data-v-6010c0bd],.bar-title[data-v-6010c0bd]{padding-left:10px;font-size:22px;font-weight:700}.bar-content[data-v-6010c0bd]{text-align:right;border-left:4px solid #eee;padding-right:15px}.content-info[data-v-6010c0bd]{color:#757575;margin-right:30px;font-weight:700;font-size:20px}.bar-btn-offline[data-v-6010c0bd]{background-color:#fff;border:1px solid #333;color:#333;border-radius:5px}.bar-btn-all[data-v-6010c0bd],.bar-btn-offline[data-v-6010c0bd]{font-family:SourceHanSansCN-Medium;font-size:16px;font-weight:700}.bar-btn-all[data-v-6010c0bd]{background-color:#ffbf34;color:#fff;border-radius:5px}.bar-btn-empty[data-v-6010c0bd]{font-size:20px;font-weight:700;background-color:#e5545c;border-color:#e5545c;color:#fff;border-radius:10px}.stock-content[data-v-6010c0bd]{border-top:4px solid #eee;background-color:#fff;height:100%}.article-preview[data-v-6010c0bd]{height:100%;padding-bottom:113px;background-color:#fff}.article-detail-wrapper[data-v-6010c0bd]{overflow-y:hidden;height:100%}.article-package-title[data-v-6010c0bd]{margin-left:10px;font-size:24px;margin-top:10px}.article-package-meal-list[data-v-6010c0bd]{margin:0 20px;border-bottom:1px dashed #e0e0e0}.article-package-meal-attr[data-v-6010c0bd]{height:44px;line-height:44px;font-size:18px;color:#666;text-align:center}.article-package-meal-item[data-v-6010c0bd]{height:40px;line-height:40px}.meal-item-style[data-v-6010c0bd]{font-size:16px;color:#666}.article-price-item[data-v-6010c0bd]{margin:10px;border-bottom:1px solid #c5c5c5;padding-bottom:10px}.article-price-item-title[data-v-6010c0bd]{height:36px;line-height:36px}.article-price-item-btns[data-v-6010c0bd]{text-align:right;padding-right:5px}.stock-edit-input[data-v-6010c0bd]{display:inline-block;width:80px}.article-unit-item[data-v-6010c0bd]{padding-left:10px;border-bottom:1px solid #c5c5c5;padding-bottom:10px}.article-unit-item>p[data-v-6010c0bd]{height:50px;line-height:50px;margin-top:10px;font-weight:700;font-size:20px}.page-tool[data-v-6010c0bd]{height:53px;line-height:53px;font-size:30px;text-align:right;margin-right:10px}.page-tool>span[data-v-6010c0bd]{font-size:30px}.family-wrapper[data-v-6010c0bd]{overflow-y:auto;padding-bottom:90px;text-align:center;position:relative}.family-item[data-v-6010c0bd]{width:100%;height:50px;padding:5px;padding-top:15px;padding-bottom:15px;font-size:18px;line-height:20px;white-space:normal;position:relative;border:none}.page-button-item[data-v-6010c0bd]{width:80%;height:40px;text-align:center;margin-bottom:10px;padding-left:15px;color:#1f2d3d;border:1px solid #666}.page-button-item-active[data-v-6010c0bd]{background-color:#ffbf34;color:#fff;border:none}.show-article[data-v-6010c0bd]{border-left:4px solid #eee;border-right:4px solid #eee;padding-bottom:113px;height:100%}.show-article-list[data-v-6010c0bd]{width:100%;padding:0 5px;line-height:60px;cursor:pointer;border-bottom:3px solid #eee}#articleWrapper[data-v-6010c0bd]{overflow-y:auto}.meal-attr[data-v-6010c0bd]{font-size:18px;font-weight:700;margin:10px}.meal-attr-list[data-v-6010c0bd]{padding-left:40px}.select-article[data-v-6010c0bd]{background-color:#f4f5f9}.select-article-font[data-v-6010c0bd]{color:#333;font-weight:700}.noSelect-article-font[data-v-6010c0bd]{color:#666}.sold-out[data-v-6010c0bd]{background-color:#eee}hr[data-v-6010c0bd]{width:90%;margin-left:0;height:1px;color:#e7e7e7}.article-button[data-v-6010c0bd]{font-family:宋体;background-color:#c5c5c5}.article-content[data-v-6010c0bd]{color:#999;font-weight:700;text-align:center;margin-top:35%}.article-content>img[data-v-6010c0bd]{width:200px;height:200px}.show-xiajia[data-v-6010c0bd]{background-color:#53b3e5!important;color:#fff;border:none}.gray-btn1[data-v-6010c0bd],.gray-btn[data-v-6010c0bd]{color:#666;border:1px solid #666;background-color:#fff}.gray-btn1[data-v-6010c0bd]{width:64px;margin-left:10px}.gray-btn2[data-v-6010c0bd]{margin-left:10px}.gray-btn[data-v-6010c0bd]:hover{color:#000;background-color:#c5c5c5;border-color:#646464}.s-btn[data-v-6010c0bd]{color:#fff;background-color:#000;border-color:#000}.green-btn[data-v-6010c0bd]{color:#fff;background-color:#ffbf34}.green[data-v-6010c0bd]:hover{color:#fff;background-color:#13ce66;border-color:#13ce66}.el-button--primary[data-v-6010c0bd]{color:#333;border-left:5px solid #ffbf34;background-color:#eee;border-radius:0}.family-item-active[data-v-6010c0bd]{background:#eee;border-left:5px solid #ffbf34!important;border:none;color:#333;border-radius:0}#articleWrapper[data-v-6010c0bd]{overflow-y:scroll}#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar{width:1px;height:4px}#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}#familyWrapper[data-v-6010c0bd]{overflow-y:auto}#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar{width:1px;height:1px}#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.pageButton[data-v-6010c0bd]{width:100%;position:absolute;bottom:0}.attr-tag[data-v-6010c0bd]{background-color:#e7e7e7;display:inline-block;padding:2px 25px;height:30px;line-height:22px;font-size:18px;color:#000;border-radius:154px;box-sizing:border-box;border:1px solid transparent;white-space:nowrap}.el-button[data-v-6010c0bd]{padding:10px}.pre-page[data-v-6010c0bd]{display:inline-block;width:45px;height:45px;color:#666;border-radius:50%;border:1px solid #666;text-align:center;cursor:pointer}.pre-page i[data-v-6010c0bd]{line-height:45px;display:block;margin-left:-4px}.next-page[data-v-6010c0bd]{display:inline-block;width:45px;height:45px;color:#666;border-radius:50%;border:1px solid #666;text-align:center;cursor:pointer}.next-page i[data-v-6010c0bd]{line-height:45px;display:block;margin-left:4px}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/stock/stock.vue"],"names":[],"mappings":"AACA,2BACE,UAAY,CACb,AACD,4BACE,eAAiB,CAClB,AACD,uCACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,2BACE,YAAa,AACb,iBAAkB,AAClB,qBAA0B,CAC3B,AAMD,0DAJE,kBAAmB,AACnB,eAAgB,AAChB,eAAiB,CASlB,AAPD,8BAIE,iBAAkB,AAClB,2BAA4B,AAC5B,kBAAmB,CACpB,AACD,+BACE,cAAe,AACf,kBAAmB,AACnB,gBAAkB,AAClB,cAAgB,CACjB,AACD,kCAIE,sBAAuB,AACvB,sBAAuB,AACvB,WAAY,AACZ,iBAAkB,CACnB,AACD,gEARE,mCAAsC,AACtC,eAAgB,AAChB,eAAkB,CAcnB,AARD,8BAIE,yBAA0B,AAE1B,WAAe,AACf,iBAAkB,CACnB,AACD,gCACE,eAAgB,AAChB,gBAAkB,AAClB,yBAA0B,AAC1B,qBAAsB,AACtB,WAAe,AACf,kBAAmB,CACpB,AACD,gCACE,0BAA2B,AAC3B,sBAA0B,AAC1B,WAAY,CACb,AACD,kCACE,YAAa,AACb,qBAAsB,AACtB,qBAAsB,CACvB,AACD,yCACE,kBAAmB,AACnB,WAAa,CACd,AACD,wCACE,iBAAkB,AAClB,eAAgB,AAChB,eAAiB,CAClB,AACD,4CACE,cAAe,AACf,gCAAkC,CACnC,AACD,4CACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CACpB,AACD,4CACE,YAAa,AACb,gBAAkB,CACnB,AACD,kCACE,eAAgB,AAChB,UAAY,CACb,AACD,qCACE,YAAa,AACb,gCAAiC,AACjC,mBAAqB,CACtB,AACD,2CACE,YAAa,AACb,gBAAkB,CACnB,AACD,0CACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,mCACE,qBAAsB,AACtB,UAAY,CACb,AACD,oCACE,kBAAmB,AACnB,gCAAiC,AACjC,mBAAoB,CACrB,AACD,sCACE,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,gBAAkB,AAClB,cAAe,CAChB,AACD,4BACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,iBAAkB,AAClB,iBAAmB,CACpB,AAID,iCACE,cAAgB,CACjB,AACD,iCAEE,gBAAiB,AACjB,oBAAqB,AAMrB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,8BACE,WAAY,AACZ,YAAa,AAGb,YAAa,AACb,iBAAkB,AAClB,oBAAqB,AACrB,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CACd,AAQD,mCACE,UAAW,AACX,YAAa,AAEb,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,cAAe,AACf,qBAAuB,CACxB,AACD,0CACE,yBAA0B,AAC1B,WAAY,AACZ,WAAa,CACd,AAMD,+BACE,2BAA4B,AAC5B,4BAA6B,AAC7B,qBAAsB,AACtB,WAAa,CACd,AACD,oCACE,WAAY,AACZ,cAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,4BAA8B,CAC/B,AAMD,iCACE,eAAiB,CAElB,AACD,4BACE,eAAgB,AAChB,gBAAkB,AAClB,WAAa,CACd,AACD,iCAEE,iBAAmB,CACpB,AACD,iCACE,wBAA0B,CAC3B,AACD,sCACE,WAAY,AACZ,eAAkB,CACnB,AACD,wCACE,UAAY,CAEb,AACD,2BACE,qBAAuB,CACxB,AACD,oBACE,UAAW,AACX,cAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,iCACE,eAAgB,AAChB,wBAA0B,CAC3B,AACD,kCACE,WAAe,AAEf,gBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACjB,AACD,sCACE,YAAa,AACb,YAAc,CACf,AACD,8BACE,mCAAqC,AACrC,WAAY,AACZ,WAAa,CACd,AAQD,uDAJE,WAAY,AACZ,sBAAuB,AACvB,qBAAuB,CAQxB,AAND,4BAIE,WAAY,AACZ,gBAAkB,CACnB,AACD,4BACE,gBAAkB,CACnB,AACD,iCACE,WAAe,AACf,yBAA0B,AAC1B,oBAAsB,CACvB,AACD,wBACE,WAAe,AACf,sBAAwB,AACxB,iBAAoB,CACrB,AACD,4BACE,WAAe,AAEf,wBAA0B,CAC3B,AACD,8BACE,WAAe,AACf,yBAA0B,AAC1B,oBAAsB,CACvB,AACD,qCACE,WAAe,AACf,8BAA+B,AAC/B,sBAA0B,AAC1B,eAAmB,CACpB,AACD,qCACE,gBAAoB,AACpB,wCAA0C,AAC1C,YAAa,AACb,WAAe,AACf,eAAiB,CAClB,AAGD,iCACE,iBAAmB,CACpB,AACD,oDACE,UAAW,AACX,UAAY,CACb,AACD,0DACE,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAChC,AACD,0DACE,gDAAqD,AACrD,gBAAiB,AACjB,yBAA+B,CAChC,AAKD,gCACE,eAAiB,CAClB,AACD,mDACE,UAAW,AACX,UAAY,CACb,AACD,yDACE,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAChC,AACD,yDACE,gDAAqD,AACrD,gBAAiB,AACjB,yBAA+B,CAChC,AAGD,6BACE,WAAY,AAEZ,kBAAmB,AACnB,QAAY,CACb,AACD,2BACE,yBAA0B,AAC1B,qBAAsB,AACtB,iBAAkB,AAClB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,oBAAqB,AACrB,sBAAuB,AACvB,6BAA8B,AAC9B,kBAAoB,CACrB,AACD,4BACE,YAAmB,CACpB,AACD,2BACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,kBAAmB,AACnB,cAAgB,CACjB,AACD,6BACE,iBAAkB,AAClB,cAAe,AACf,gBAAkB,CACnB,AACD,4BACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,kBAAmB,AACnB,cAAgB,CACjB,AACD,8BACE,iBAAkB,AAClB,cAAe,AACf,eAAiB,CAClB","file":"stock.vue","sourcesContent":["\n.el-col-3[data-v-6010c0bd] {\n  width: 9.5%;\n}\n.el-col-13[data-v-6010c0bd] {\n  width: 57.16669%;\n}\n.el-button + .el-button[data-v-6010c0bd] {\n  width: 70px;\n}\n.stock[data-v-6010c0bd] {\n  height: 100%;\n}\n.tool-bar[data-v-6010c0bd] {\n  height: 60px;\n  line-height: 60px;\n  background-color: #ffffff;\n}\n.bar-title[data-v-6010c0bd] {\n  padding-left: 10px;\n  font-size: 22px;\n  font-weight: bold\n}\n.bar-content[data-v-6010c0bd] {\n  padding-left: 10px;\n  font-size: 22px;\n  font-weight: bold;\n  text-align: right;\n  border-left: 4px solid #eee;\n  padding-right: 15px\n}\n.content-info[data-v-6010c0bd] {\n  color: #757575;\n  margin-right: 30px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.bar-btn-offline[data-v-6010c0bd] {\n  font-family: 'SourceHanSansCN-Medium';\n  font-size: 16px;\n  font-weight: bold;\n  background-color: #fff;\n  border: 1px solid #333;\n  color: #333;\n  border-radius: 5px\n}\n.bar-btn-all[data-v-6010c0bd] {\n  font-family: 'SourceHanSansCN-Medium';\n  font-size: 16px;\n  font-weight: bold;\n  background-color: #FFBF34;\n  /*border: none;*/\n  color: #FFFFFF;\n  border-radius: 5px\n}\n.bar-btn-empty[data-v-6010c0bd] {\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #e5545c;\n  border-color: #e5545c;\n  color: #FFFFFF;\n  border-radius: 10px\n}\n.stock-content[data-v-6010c0bd] {\n  border-top: 4px solid #eee;\n  background-color: #FFFFFF;\n  height: 100%\n}\n.article-preview[data-v-6010c0bd] {\n  height: 100%;\n  padding-bottom: 113px;\n  background-color: #FFF\n}\n.article-detail-wrapper[data-v-6010c0bd] {\n  overflow-y: hidden;\n  height: 100%;\n}\n.article-package-title[data-v-6010c0bd] {\n  margin-left: 10px;\n  font-size: 24px;\n  margin-top: 10px;\n}\n.article-package-meal-list[data-v-6010c0bd] {\n  margin: 0 20px;\n  border-bottom: 1px dashed #E0E0E0;\n}\n.article-package-meal-attr[data-v-6010c0bd] {\n  height: 44px;\n  line-height: 44px;\n  font-size: 18px;\n  color: #666;\n  text-align: center;\n}\n.article-package-meal-item[data-v-6010c0bd] {\n  height: 40px;\n  line-height: 40px;\n}\n.meal-item-style[data-v-6010c0bd] {\n  font-size: 16px;\n  color: #666;\n}\n.article-price-item[data-v-6010c0bd] {\n  margin: 10px;\n  border-bottom: 1px solid #C5C5C5;\n  padding-bottom: 10px;\n}\n.article-price-item-title[data-v-6010c0bd] {\n  height: 36px;\n  line-height: 36px;\n}\n.article-price-item-btns[data-v-6010c0bd] {\n  text-align: right;\n  padding-right: 5px;\n}\n.stock-edit-input[data-v-6010c0bd] {\n  display: inline-block;\n  width: 80px;\n}\n.article-unit-item[data-v-6010c0bd] {\n  padding-left: 10px;\n  border-bottom: 1px solid #C5C5C5;\n  padding-bottom: 10px\n}\n.article-unit-item > p[data-v-6010c0bd] {\n  height: 50px;\n  line-height: 50px;\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 20px\n}\n.page-tool[data-v-6010c0bd] {\n  height: 53px;\n  line-height: 53px;\n  font-size: 30px;\n  text-align: right;\n  margin-right: 10px;\n}\n.page-tool > i[data-v-6010c0bd] {\n  /*font-size: 40px;*/\n}\n.page-tool > span[data-v-6010c0bd] {\n  font-size: 30px;\n}\n.family-wrapper[data-v-6010c0bd] {\n  /*height: 100%;*/\n  overflow-y: auto;\n  padding-bottom: 90px;\n  /*margin-left: -1px;*/\n  /*margin-top: 1px;*/\n  /*border: 5px solid #F2F2F2;*/\n  /*overflow-y: hidden;*/\n  /*overflow-x: hidden;*/\n  text-align: center;\n  position: relative;\n}\n.family-item[data-v-6010c0bd] {\n  width: 100%;\n  height: 50px;\n  /*margin-top: 5px;*/\n  /*margin-bottom: 10px;*/\n  padding: 5px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 18px;\n  line-height: 20px;\n  white-space: normal;\n  position: relative;\n  border: none;\n}\n.family-item-active[data-v-6010c0bd] {\n  background: #EEEEEE;\n  border-left: 5px solid #ffbf34 !important;\n  border: none;\n  color: #333333;;\n  border-radius: 0;\n}\n.page-button-item[data-v-6010c0bd] {\n  width: 80%;\n  height: 40px;\n  /*background-color: #FFBF34;*/\n  text-align: center;\n  margin-bottom: 10px;\n  padding-left: 15px;\n  color: #1f2d3d;\n  border: 1px solid #666;\n}\n.page-button-item-active[data-v-6010c0bd] {\n  background-color: #ffbf34;\n  color: #fff;\n  border: none;\n}\n\n/*.family-item:hover {*/\n/*border-color: #CCB96B;*/\n/*color: #CCB96B;*/\n/*}*/\n.show-article[data-v-6010c0bd] {\n  border-left: 4px solid #eee;\n  border-right: 4px solid #eee;\n  padding-bottom: 113px;\n  height: 100%;\n}\n.show-article-list[data-v-6010c0bd] {\n  width: 100%;\n  padding: 0px 5px;\n  line-height: 60px;\n  cursor: pointer;\n  border-bottom: 3px solid #eee;\n}\n.article-item-stock[data-v-6010c0bd] {\n  /*padding-right: 10px;*/\n  /*margin-left: -5px;*/\n  /*margin-right: 5px;*/\n}\n#articleWrapper[data-v-6010c0bd] {\n  overflow-y: auto;\n  /*height: 100%;*/\n}\n.meal-attr[data-v-6010c0bd] {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 10px;\n}\n.meal-attr-list[data-v-6010c0bd] {\n  /*display: inline-block;*/\n  padding-left: 40px;\n}\n.select-article[data-v-6010c0bd] {\n  background-color: #f4f5f9;\n}\n.select-article-font[data-v-6010c0bd] {\n  color: #333;\n  font-weight: bold;\n}\n.noSelect-article-font[data-v-6010c0bd] {\n  color: #666;\n  /*font-weight: bold;*/\n}\n.sold-out[data-v-6010c0bd] {\n  background-color: #eee;\n}\nhr[data-v-6010c0bd] {\n  width: 90%;\n  margin-left: 0px;\n  height: 1px;\n  color: #e7e7e7;\n}\n.article-button[data-v-6010c0bd] {\n  font-family: 宋体;\n  background-color: #c5c5c5;\n}\n.article-content[data-v-6010c0bd] {\n  color: #999999;\n  /*font-size: 50px;*/\n  font-weight: bold;\n  text-align: center;\n  margin-top: 35%;\n}\n.article-content > img[data-v-6010c0bd] {\n  width: 200px;\n  height: 200px;\n}\n.show-xiajia[data-v-6010c0bd] {\n  background-color: #53B3E5 !important;\n  color: #fff;\n  border: none;\n}\n.gray-btn[data-v-6010c0bd] {\n  /*color: #000000;*/\n  /*background-color: #C5C5C5;*/\n  color: #666;\n  border: 1px solid #666;\n  background-color: #fff;\n}\n.gray-btn1[data-v-6010c0bd] {\n  color: #666;\n  border: 1px solid #666;\n  background-color: #fff;\n  width: 64px;\n  margin-left: 10px;\n}\n.gray-btn2[data-v-6010c0bd] {\n  margin-left: 10px;\n}\n.gray-btn[data-v-6010c0bd]:hover {\n  color: #000000;\n  background-color: #C5C5C5;\n  border-color: #646464;\n}\n.s-btn[data-v-6010c0bd] {\n  color: #FFFFFF;\n  background-color: black;\n  border-color: black;\n}\n.green-btn[data-v-6010c0bd] {\n  color: #FFFFFF;\n  /*background-color: #13ce66;*/\n  background-color: #FFBF34;\n}\n.green[data-v-6010c0bd]:hover {\n  color: #FFFFFF;\n  background-color: #13ce66;\n  border-color: #13ce66;\n}\n.el-button--primary[data-v-6010c0bd] {\n  color: #333333;\n  border-left: 5px solid #FFBF34;\n  background-color: #EEEEEE;\n  border-radius: 0px;\n}\n.family-item-active[data-v-6010c0bd] {\n  background: #EEEEEE;\n  border-left: 5px solid #ffbf34 !important;\n  border: none;\n  color: #333333;;\n  border-radius: 0;\n}\n\n/** 菜品信息  滚动条  begin  **/\n#articleWrapper[data-v-6010c0bd] {\n  overflow-y: scroll;\n}\n#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar { /*滚动条整体样式*/\n  width: 1px; /*高宽分别对应横竖滚动条的尺寸*/\n  height: 4px;\n}\n#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar-thumb { /*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.2);\n}\n#articleWrapper[data-v-6010c0bd]::-webkit-scrollbar-track { /*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n/** 菜品信息  滚动条  end  **/\n\n/** 菜品分类  滚动条  begin  **/\n#familyWrapper[data-v-6010c0bd] {\n  overflow-y: auto;\n}\n#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar { /*滚动条整体样式*/\n  width: 1px; /*高宽分别对应横竖滚动条的尺寸*/\n  height: 1px;\n}\n#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar-thumb { /*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.2);\n}\n#familyWrapper[data-v-6010c0bd]::-webkit-scrollbar-track { /*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n/** 菜品分类  滚动条  end  **/\n.pageButton[data-v-6010c0bd] {\n  width: 100%;\n  /*margin-top: 140px;*/\n  position: absolute;\n  bottom: 0px;\n}\n.attr-tag[data-v-6010c0bd] {\n  background-color: #E7E7E7;\n  display: inline-block;\n  padding: 2px 25px;\n  height: 30px;\n  line-height: 22px;\n  font-size: 18px;\n  color: #000;\n  border-radius: 154px;\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  white-space: nowrap;\n}\n.el-button[data-v-6010c0bd] {\n  padding: 10px 10px;\n}\n.pre-page[data-v-6010c0bd] {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  color: #666;\n  border-radius: 50%;\n  border: 1px solid #666;\n  text-align: center;\n  cursor: pointer;\n}\n.pre-page i[data-v-6010c0bd] {\n  line-height: 45px;\n  display: block;\n  margin-left: -4px;\n}\n.next-page[data-v-6010c0bd] {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  color: #666;\n  border-radius: 50%;\n  border: 1px solid #666;\n  text-align: center;\n  cursor: pointer;\n}\n.next-page i[data-v-6010c0bd] {\n  line-height: 45px;\n  display: block;\n  margin-left: 4px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_stockApi__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_articleApi__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_mixins_mixin__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'order',
    mixins: [__WEBPACK_IMPORTED_MODULE_4__order_mixins_mixin__["a" /* default */]],
    components: {},
    data: function data() {
        return {
            choiceStockCode: null, // 这个用来控制 全部 已下架 已售罄 页面展示
            shopInfo: {},

            articlePriceIsEmpty: {//老规格子项手动沽清

            },
            state: 'true',
            currentId: '',
            editStock: false, //编辑库存
            articleStock: { //库存参数
                oldStock: 0,
                newStock: 0
            },
            articlePriceStock: { //老规格 库存编辑
                oldStock: 0,
                newStock: 0
            },
            currentArticle: {},
            currentIndex: 0,
            pageLoading: false,
            // familyList: [],
            familyMap: {},
            currentFamilyId: null,
            total_current_working_stock: 0,
            articleMap: {},
            selectPageButton: 0,
            articleShelf: {}, //上下架
            outOfStock: {}, //沽清
            page: {
                pageIndex: 0,
                contentHeight: 0, //一共的高度
                onePageHeight: 0, //每一页的高度
                pageSize: 0, //页数
                allPageContentList: {}, //所有的内容
                onePageContentList: {} //每一页展示的内容
            },
            attrWrapperScroll: null,
            pageButtonList: [this.$t('common.prePage'), this.$t('common.nextPage')],
            selectCurrentPages: '2',
            familyWrapperHeight: 0,
            articleWrapperHeight: 0,
            articlePage: {
                currentPage: 1,
                totalPage: 1
            },
            articleDetailPage: {
                currentPage: 1,
                totalPage: 1
            },
            currentInput: null,
            searchKey: '',
            tempCount: 0,
            tempArticle: {},
            allArticleList: [],

            fullscreenLoadingObj: { show: false, msg: "正在更新数据 ..." },
            saleState: '可售',
            isOpenEmqPush: null,
            flag: true
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["a" /* mapGetters */])({
        addCarArticle: 'addCarArticle',
        familyList: 'familyList',
        articleList: 'articleList',
        unitList: 'unitList',
        articlePriceList: 'articlePriceList',
        articlePriceDialog: 'articlePriceDialog',
        articleUnitDialog: 'articleUnitDialog',
        packageDialog: 'packageDialog',
        stockUnitList: 'stockUnitList',
        stockArticlePriceList: 'stockArticlePriceList',
        stockMealAttributionList: 'stockMealAttributionList'
    })),
    created: function created() {
        this.$store.dispatch('getFamilyList');
        // this.isOpenEmqPush = JSON.parse(sessionStorage.getItem("shopDet")).is_open_emq_push;
    },
    mounted: function mounted() {
        var that = this;
        this.familyWrapperHeight = document.body.clientHeight - 174 - document.getElementById("pageButton").offsetHeight;
        this.articleWrapperHeight = document.body.clientHeight - 234;

        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('stockText', function (value) {
            that.tempArticle.current_working_stock = value;
        });

        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('searchKey', function (searchKey) {
            if (searchKey.indexOf("'") !== -1 || searchKey.indexOf("’") !== -1) return;
            console.log("searchKey", searchKey);
            that.searchKey = searchKey.toLowerCase();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["a" /* getArticleBySearchKey */])(that.searchKey).then(function (res) {
                console.log('getArticleBySearchKey', res);
                if (res.ok) {
                    that.$store.commit('setArticleList', res.data);
                }
            });
        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("stockText");
    },

    watch: {
        articleList: function articleList() {
            this.currentIndex = null;
            this.currentArticle = {};
            this.$nextTick(function () {
                var articleWrapper = document.getElementById("articleWrapper");
                this.articlePage.currentPage = 1;
                this.articlePage.totalPage = Math.ceil(articleWrapper.scrollHeight / articleWrapper.clientHeight);
            });
        },

        familyList: function familyList(val) {
            this.$store.dispatch('getArticleListByFamilyId', val[0].id || '');
            this.currentFamilyId = this.familyList[0].id;
        }
    },

    methods: {
        setFamilyId: function setFamilyId(familyId) {
            this.currentFamilyId = familyId;
            this.$store.dispatch('getArticleListByFamilyId', familyId || '');
        },

        // 同步库存
        syncAllArticleStock: function syncAllArticleStock() {
            var _this = this;

            this.fullscreenLoadingObj.show = true;

            setTimeout(function () {
                _this.fullscreenLoadingObj.show = false;
            }, 120 * 1000);
        },
        choseArticle: function choseArticle(currentArticle) {
            // 选择菜品
            if (this.editStock) return;
            console.log('choseArticlechoseArticlechoseArticle');
            this.currentInput = null; // 清空当前选中的文本，并关闭虚拟键盘
            this.currentIndex = currentArticle.id;
            this.currentArticle = currentArticle;
            if (currentArticle.article_type === 1) {
                if (currentArticle.article_unit == 2) {
                    // 老规格
                    this.$store.dispatch('getArticlePrice', currentArticle);
                } else if (currentArticle.article_unit == 5) {// 新规格

                } else if (currentArticle.open_catty == 1) {} else {// 普通单品

                }
            } else {
                this.$store.dispatch('getMeal', currentArticle);
            }

            this.$nextTick(function () {
                var articleDetailWrapper = document.getElementById("articleDetailWrapper");
                this.articleDetailPage.currentPage = 1;
                this.articleDetailPage.totalPage = Math.ceil(articleDetailWrapper.scrollHeight / articleDetailWrapper.clientHeight);
            });
        },


        //上下架
        getArticleUpOrDown: function getArticleUpOrDown(currentArticleId, activated) {
            var _this2 = this;

            this.articleShelf.id = currentArticleId;
            this.articleShelf.activated = activated == true ? 0 : 1;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["b" /* getArticleUpOrDown */])(this.articleShelf).then(function (res) {
                console.log('getArticleUpOrDown', res);
                if (res.ok) {
                    _this2.$store.commit('setArticleUpOrDown', _this2.articleShelf);
                    _this2.$message('操作成功~');
                } else {
                    _this2.$message.error(res.message);
                }
            });
        },


        // 沽清
        getArticleIsEmpty: function getArticleIsEmpty(id, empty, hasUnit) {
            var _this3 = this;

            this.outOfStock.id = id;
            this.outOfStock.empty = 1;
            this.outOfStock.hasArticlePrice = hasUnit == "" || null ? 0 : 1;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["c" /* getArticleIsEmpty */])(this.outOfStock).then(function (res) {
                console.log('getArticleIsEmpty', res);
                if (res.ok) {
                    _this3.$store.commit('setArticleSoldOutStatus', _this3.outOfStock);
                    _this3.$message.success('沽清成功~');
                } else {
                    _this3.$message.error(res.message);
                }
            });
        },


        // 单品老规格沽清
        articlePriceEmpty: function articlePriceEmpty(item) {
            var _this4 = this;

            var id = item.id,
                articleId = item.article_id,
                currentWorkingStock = item.current_working_stock;
            this.articlePriceIsEmpty = {
                id: id,
                article_id: articleId,
                original_stock: currentWorkingStock
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["d" /* getArticlePriceIsEmpty */])(this.articlePriceIsEmpty).then(function (res) {
                console.log('getArticlePriceIsEmpty', res);
                if (res.ok) {
                    _this4.$message.success('沽清成功~');
                    item.current_working_stock = 0;
                } else {
                    _this4.$message.error(res.message);
                }
            });
        },


        //编辑库存
        getArticleStock: function getArticleStock(article, ev) {
            this.editStock = true;
            if (!this.flag) return;
            if (this.editStock) {
                this.flag = false;
                this.tempArticle = article;
                this.currentIndex = article.id;
                //选中当前对象，调出虚拟键盘
                __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("show-keyboard", "stock-input");
                this.currentInput = article;
                this.articleStock.oldStock = this.currentInput.current_working_stock;
                console.log('getArticleStockgetArticleStockgetArticleStock');
            }
        },
        getArticleStockSave: function getArticleStockSave(article, ev) {
            this.editStock = false;
            if (this.flag) return;
            var that = this;
            if (!this.editStock) {
                // 保存操作
                this.flag = true;
                __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("show-keyboard", "");
                __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("clearValue", false);
                // 数据验证
                if (!/^([1-9]\d*|[0]{1,1})$/.test(this.articleStock.newStock)) {
                    this.$message.error('库存不能小于 0 ');
                    article.current_working_stock = this.articleStock.oldStock;
                    return;
                }
                //  本地更改
                this.articleStock = {
                    id: article.id,
                    current_stock: this.articleStock.newStock
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["e" /* getArticleStock */])(this.articleStock).then(function (res) {
                    console.log('getArticleStock', res);
                    if (res.ok) {
                        that.$message.success('编辑成功~');
                        that.currentInput = null;
                        that.$store.commit("setArticleEdit", that.articleStock);
                    } else {
                        that.$message.error(res.message);
                    }
                });
            }
        },


        // 老规格 库存编辑
        getArticlePriceStock: function getArticlePriceStock(articlePrice) {
            this.tempArticle = articlePrice;
            if (this.currentIndex && this.currentIndex != articlePrice.id) return;
            this.editStock = !this.editStock;
            this.currentIndex = articlePrice.id;

            if (this.editStock) {
                //  编辑
                __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("show-keyboard", "stock-input");
                this.articlePriceStock.oldStock = articlePrice.current_working_stock;
                this.currentInput = articlePrice;
            }
            if (!this.editStock) {
                //  保存
                // 数据验证
                if (!/^([1-9]\d*|[0]{1,1})$/.test(articlePrice.current_working_stock)) {
                    this.$message.error('库存不能小于 0 ');
                    articlePrice.current_working_stock = this.articlePriceStock.oldStock;
                    return;
                }
                //格式化 数据类型
                articlePrice.current_working_stock = parseInt(articlePrice.current_working_stock);
                // 封装数据
                this.articlePriceStock.current_stock = articlePrice.current_working_stock;
                this.articlePriceStock.id = articlePrice.id;
                this.articlePriceStock.article_id = articlePrice.article_id;
                this.articlePriceStock.sum_count = this.articlePriceStock.current_stock - this.articlePriceStock.oldStock;

                //本地数据 老规格，编辑库存
                var that = this;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["f" /* getArticlePriceStock */])(this.articlePriceStock).then(function (res) {
                    console.log('getArticlePriceStock', res);
                    if (res.ok) {
                        that.$message.success('编辑成功~');
                        that.currentInput = null;
                        that.$store.commit("setArticlePriceEdit", that.articlePriceStock);
                    } else {
                        that.$message.error(res.message);
                    }
                });
            }
        },
        setSaleState: function setSaleState(article) {
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_articleApi__["a" /* getMealByArticleId */])(article.id).then(function (res) {
                if (!res.ok) return;
                var articleIds = [];
                var mealList = res.data;

                mealList.map(function (attrList) {
                    attrList.mealItemsInfo.map(function (item) {
                        articleIds.push('' + item.article_id);
                    });
                });
                articleIds.push('' + article.id);
                console.log("------", articleIds);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_stockApi__["g" /* batchRecoveryArticle */])(articleIds).then(function (resultData) {
                    if (resultData.ok) {
                        that.$store.commit("setArticlesEdit", {
                            id: article.id,
                            count: 100
                        });
                    }
                });
            });
        },


        //  菜品分页
        articlePages: function articlePages(pageNumbers) {
            var articleWrapper = document.getElementById("articleWrapper");
            console.log('articlePage', this.articlePage);
            switch (pageNumbers) {
                case 0:
                    // 上一页
                    this.articlePage.currentPage > 1 && --this.articlePage.currentPage;
                    articleWrapper.scrollTop -= articleWrapper.clientHeight;
                    break;
                case 1:
                    //  下一页
                    this.articlePage.currentPage < this.articlePage.totalPage && ++this.articlePage.currentPage;
                    articleWrapper.scrollTop += articleWrapper.clientHeight;
                    break;
            }
        },


        //菜品分类分页
        familyPages: function familyPages(pageNumbers) {
            this.selectCurrentPages = pageNumbers;
            var articleInfo = document.getElementById("familyWrapper");
            switch (pageNumbers) {
                case 0:
                    articleInfo.scrollTop -= articleInfo.clientHeight;
                    break;
                case 1:
                    articleInfo.scrollTop += articleInfo.clientHeight;
                    break;
            }
        },


        //菜品详情分页
        detailPage: function detailPage(pageNumbers) {
            var articleDetailWrapper = document.getElementById("articleDetailWrapper");
            switch (pageNumbers) {
                case 0:
                    // 上一页
                    this.articleDetailPage.currentPage > 1 && --this.articleDetailPage.currentPage;
                    articleDetailWrapper.scrollTop -= articleDetailWrapper.clientHeight;
                    break;
                case 1:
                    //  下一页
                    this.articleDetailPage.currentPage < this.articleDetailPage.totalPage && ++this.articleDetailPage.currentPage;
                    articleDetailWrapper.scrollTop += articleDetailWrapper.clientHeight;
                    break;
            }
        },

        //去掉所有空格
        Trim: function Trim(str, is_global) {
            var result;
            result = str.replace(/(^\s+)|(\s+$)/g, "");
            if (is_global.toLowerCase() == "g") {
                result = result.replace(/\s/g, "");
            }
            return result;
        },
        changeInput: function changeInput(val) {
            this.currentInput.current_working_stock = val;
        },
        closeKeyBoard: function closeKeyBoard() {
            this.editStock = false;
            this.currentInput.current_working_stock = this.articlePriceStock.oldStock;
            this.currentInput = null;
        }
    }
});

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getArticleStock;
/* harmony export (immutable) */ __webpack_exports__["c"] = getArticleIsEmpty;
/* harmony export (immutable) */ __webpack_exports__["f"] = getArticlePriceStock;
/* harmony export (immutable) */ __webpack_exports__["d"] = getArticlePriceIsEmpty;
/* harmony export (immutable) */ __webpack_exports__["b"] = getArticleUpOrDown;
/* harmony export (immutable) */ __webpack_exports__["g"] = batchRecoveryArticle;
/* harmony export (immutable) */ __webpack_exports__["a"] = getArticleBySearchKey;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(30);




//编辑库存
function getArticleStock(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/update', method: 'put', params: data });
}

//沽清库存
function getArticleIsEmpty(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/empty', method: 'put', data: data });
}

//编辑老规格库存
function getArticlePriceStock(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/update_price', method: 'put', params: data });
}
//老规格沽清
function getArticlePriceIsEmpty(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/empty_price', method: 'put', data: data });
}
//上下架
function getArticleUpOrDown(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/up_down', method: 'put', params: data });
}

//套餐可售
function batchRecoveryArticle(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/stock/batch_recovery', method: 'put', data: { article_ids: data } });
}

// 搜索菜
function getArticleBySearchKey(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/article/search', method: 'get', params: { search_key: data } });
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("2fc31db2", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(422, function() {
     var newContent = __webpack_require__(422);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    directives: [{
      name: "loading",
      rawName: "v-loading.fullscreen.lock",
      value: (_vm.fullscreenLoadingObj.show),
      expression: "fullscreenLoadingObj.show",
      modifiers: {
        "fullscreen": true,
        "lock": true
      }
    }],
    staticClass: "stock",
    attrs: {
      "element-loading-text": _vm.fullscreenLoadingObj.msg
    }
  }, [_c('el-row', {
    staticClass: "tool-bar"
  }, [_c('el-col', {
    staticClass: "bar-title",
    attrs: {
      "span": 7
    }
  }, [_c('p', {
    staticStyle: {
      "width": "100px",
      "margin": "0 auto"
    }
  }, [_vm._v(_vm._s(_vm.$t('stock.articleDetail')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "bar-content",
    attrs: {
      "span": 17
    }
  }, [_c('el-button', {
    class: _vm.choiceStockCode == null ? 'bar-btn-all' : 'bar-btn-offline',
    on: {
      "click": function($event) {
        _vm.choiceStockCode = null
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.all')) + "\n      ")]), _vm._v(" "), _c('el-button', {
    class: _vm.choiceStockCode == 1 ? 'bar-btn-all' : 'bar-btn-offline',
    staticStyle: {
      "width": "77px"
    },
    on: {
      "click": function($event) {
        _vm.choiceStockCode = 1
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('stock.hasSoldOut')) + "\n      ")]), _vm._v(" "), _c('el-button', {
    class: _vm.choiceStockCode == 2 ? 'bar-btn-all' : 'bar-btn-offline',
    staticStyle: {
      "width": "77px"
    },
    on: {
      "click": function($event) {
        _vm.choiceStockCode = 2
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('stock.hasSellOut')) + "\n      ")])], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "stock-content"
  }, [_c('el-col', {
    staticClass: "article-preview",
    attrs: {
      "span": 7
    }
  }, [_c('el-row', {
    staticClass: "article-detail-wrapper",
    attrs: {
      "id": "articleDetailWrapper"
    }
  }, [(_vm.articleType(_vm.currentArticle) == 'PACKAGE_ARTICLE') ? _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h2', {
    staticClass: "article-package-title"
  }, [_vm._v(_vm._s(_vm.currentArticle.name))]), _vm._v(" "), _vm._l((_vm.stockMealAttributionList), function(item) {
    return _c('div', {
      staticClass: "article-package-meal-list"
    }, [(item.choice_type == 0) ? _c('p', {
      staticClass: "article-package-meal-attr"
    }, [_vm._v("\n              " + _vm._s(item.name) + "  （" + _vm._s(_vm.$t('stock.mustChoose')) + _vm._s(item.choice_count) + "）\n            ")]) : _c('p', {
      staticClass: "article-package-meal-attr"
    }, [_vm._v("\n              " + _vm._s(item.name) + "  （" + _vm._s(_vm.$t('stock.anyChoose')) + "）\n            ")]), _vm._v(" "), _vm._l((item.mealItemsInfo), function(attr) {
      return _c('el-row', {
        key: attr.id,
        staticClass: "article-package-meal-item"
      }, [_c('el-col', {
        attrs: {
          "span": 20
        }
      }, [_c('span', {
        staticClass: "meal-item-style"
      }, [_vm._v(_vm._s(attr.name))])]), _vm._v(" "), _c('el-col', {
        attrs: {
          "span": 4
        }
      }, [_c('span', {
        staticClass: "meal-item-style"
      }, [_vm._v(_vm._s(attr.current_working_stock))])])], 1)
    })], 2)
  })], 2) : (_vm.articleType(_vm.currentArticle) == 'OLD_UNIT_PRICE') ? _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [(_vm.stockArticlePriceList.length > 0) ? [_c('p', {
    staticClass: "article-package-title"
  }, [_vm._v(_vm._s(_vm.$t('stock.stockArticleNum')) + "：" + _vm._s(_vm.stockArticlePriceList.length))]), _vm._v(" "), _vm._l((_vm.stockArticlePriceList), function(item, index) {
    return _c('el-row', {
      key: item.id,
      staticClass: "article-price-item"
    }, [_c('el-col', {
      staticClass: "article-price-item-title",
      attrs: {
        "span": 8
      }
    }, [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v("  \n                "), (_vm.editStock == true && item.id == _vm.currentIndex) ? _c('el-input', {
      staticClass: "stock-edit-input",
      attrs: {
        "name": "stock-input"
      },
      model: {
        value: (item.current_working_stock),
        callback: function($$v) {
          _vm.$set(item, "current_working_stock", $$v)
        },
        expression: "item.current_working_stock"
      }
    }) : _c('label', [_vm._v(_vm._s(item.current_working_stock))])], 1), _vm._v(" "), _c('el-col', {
      staticClass: "article-price-item-btns",
      attrs: {
        "span": 16
      }
    }, [(item.current_working_stock <= 0) ? _c('el-button', {
      attrs: {
        "type": "danger"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.hasSellOut')) + "\n                ")]) : _c('el-button', {
      staticClass: "gray-btn",
      on: {
        "click": function($event) {
          return _vm.articlePriceEmpty(item)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.sellOut')) + "\n                ")]), _vm._v(" "), _c('el-button', {
      class: (_vm.editStock == true && item.id == _vm.currentIndex) ? 'green-btn' : 'gray-btn',
      attrs: {
        "name": "stock-input"
      },
      on: {
        "click": function($event) {
          return _vm.getArticlePriceStock(item)
        }
      }
    }, [_vm._v("\n                  " + _vm._s((_vm.editStock == true && item.id == _vm.currentIndex) ? _vm.$t('common.save') : _vm.$t('common.edit')) + "\n                ")])], 1)], 1)
  })] : _c('div', {
    staticClass: "article-content"
  }, [_vm._v(_vm._s(_vm.$t('stock.noUnit')))])], 2) : (_vm.currentArticle.article_type === 1 && !!_vm.currentArticle.unit_id) ? _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h2', {
    staticClass: "article-package-title"
  }, [_vm._v("红烧牛肉面")]), _vm._v(" "), _c('div', {
    staticClass: "article-unit-item"
  }, [_c('p', [_vm._v("\n              味道\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "attr-tag"
  }, [_vm._v("甜")]), _vm._v(" "), _c('span', {
    staticClass: "attr-tag"
  }, [_vm._v("辣")])])]) : _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [(_vm.currentIndex) ? _c('div', {
    staticClass: "article-content",
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(395),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "18px"
    }
  }, [_vm._v(_vm._s(_vm.$t('stock.info')))])]) : _c('div', {
    staticClass: "article-content"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(395),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "18px"
    }
  }, [_vm._v(_vm._s(_vm.$t('stock.info')))])])])], 1), _vm._v(" "), (_vm.articleDetailPage.totalPage > 1) ? _c('div', {
    staticClass: "page-tool",
    staticStyle: {
      "text-align": "center",
      "margin-right": "0"
    }
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.detailPage(0)
      }
    }
  }, [_c('i', {
    staticClass: " el-icon-caret-left"
  })]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.articleDetailPage.currentPage) + " / " + _vm._s(_vm.articleDetailPage.totalPage))]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.detailPage(1)
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-caret-right"
  })])]) : _vm._e()], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 17
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "show-article",
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    style: ({
      height: _vm.articleWrapperHeight + 'px'
    }),
    attrs: {
      "id": "articleWrapper"
    }
  }, [(_vm.searchKey != '') ? _c('div', _vm._l((_vm.articleList), function(article, index) {
    return (_vm.choiceStockCode == null) ? _c('el-row', {
      key: index,
      staticClass: "show-article-list",
      class: (article.id == _vm.currentIndex) ? 'select-article' : ((article.activated == 0) ? 'sold-out' : ''),
      nativeOn: {
        "click": function($event) {
          return _vm.choseArticle(article)
        }
      }
    }, [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-tag', [_vm._v(_vm._s(_vm.getArticleType(article)))])], 1), _vm._v(" "), _c('el-col', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font',
      attrs: {
        "span": 8
      }
    }, [_vm._v("\n                  " + _vm._s(article.name) + "\n                ")]), _vm._v(" "), _c('el-col', {
      staticClass: "article-item-stock",
      attrs: {
        "span": 4
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('el-input', {
      staticClass: "stock-edit-input",
      attrs: {
        "type": "number",
        "name": "stock-input"
      },
      model: {
        value: (_vm.articleStock.newStock = article.current_working_stock),
        callback: function($$v) {
          _vm.$set(_vm.articleStock.newStock = article, "current_working_stock", $$v)
        },
        expression: "articleStock.newStock=article.current_working_stock"
      }
    }) : _c('label', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font'
    }, [_vm._v(_vm._s(article.current_working_stock))])], 1), _vm._v(" "), _c('el-col', {
      staticStyle: {
        "text-align": "right",
        "padding-right": "10px"
      },
      attrs: {
        "span": 10
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: " green-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStockSave(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.save')) + "\n                                      ")]) : _vm._e()], 1) : _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: "gray-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStock(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.edit')) + "\n                                      ")]) : _vm._e()], 1), _vm._v(" "), (article.is_empty) ? _c('el-button', {
      staticClass: "gray-btn2",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' ',
        "type": "danger"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('stock.hasSellOut')) + "\n                  ")]) : _c('el-button', {
      staticClass: "gray-btn1",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' '
      },
      on: {
        "click": function($event) {
          return _vm.getArticleIsEmpty(article.id, article.is_empty, article.has_unit)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('stock.sellOut')) + "\n                  ")]), _vm._v(" "), _c('el-button', {
      class: article.activated == 1 ? 'gray-btn' : 's-btn',
      on: {
        "click": function($event) {
          return _vm.getArticleUpOrDown(article.id, article.activated)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(article.activated == 0 ? _vm.$t('stock.shelves') : _vm.$t('stock.soldOut')) + "\n                  ")]), _vm._v(" "), (article.article_type == 2 && !article.is_empty) ? _c('el-button', {
      on: {
        "click": function($event) {
          return _vm.setSaleState(article)
        }
      }
    }, [_vm._v(_vm._s(_vm.saleState) + "\n                  ")]) : _vm._e()], 1)], 1) : _vm._e()
  }), 1) : _c('div', _vm._l((_vm.articleList), function(article, index) {
    return (_vm.choiceStockCode == null) ? _c('el-row', {
      key: article.id,
      staticClass: "show-article-list",
      class: (article.id == _vm.currentIndex) ? 'select-article' : ((article.activated == 0) ? 'sold-out' : ''),
      nativeOn: {
        "click": function($event) {
          return _vm.choseArticle(article)
        }
      }
    }, [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-tag', [_vm._v(_vm._s(_vm.getArticleType(article)))])], 1), _vm._v(" "), _c('el-col', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font',
      attrs: {
        "span": 8
      }
    }, [_vm._v("\n                  " + _vm._s(article.name) + "\n                ")]), _vm._v(" "), _c('el-col', {
      staticClass: "article-item-stock",
      attrs: {
        "span": 4
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('el-input', {
      staticClass: "stock-edit-input",
      attrs: {
        "type": "number",
        "name": "stock-input"
      },
      model: {
        value: (_vm.articleStock.newStock = article.current_working_stock),
        callback: function($$v) {
          _vm.$set(_vm.articleStock.newStock = article, "current_working_stock", $$v)
        },
        expression: "articleStock.newStock=article.current_working_stock"
      }
    }) : _c('label', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font'
    }, [_vm._v(_vm._s(article.current_working_stock))])], 1), _vm._v(" "), _c('el-col', {
      staticStyle: {
        "text-align": "right",
        "padding-right": "10px"
      },
      attrs: {
        "span": 10
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: " green-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStockSave(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.save')) + "\n                                      ")]) : _vm._e()], 1) : _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: "gray-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStock(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.edit')) + "\n                                      ")]) : _vm._e()], 1), _vm._v(" "), (article.is_empty) ? _c('el-button', {
      staticClass: "gray-btn2",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' ',
        "type": "danger"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('stock.hasSellOut')) + "\n                  ")]) : _c('el-button', {
      staticClass: "gray-btn1",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' '
      },
      on: {
        "click": function($event) {
          return _vm.getArticleIsEmpty(article.id, article.is_empty, article.has_unit)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('stock.sellOut')) + "\n                  ")]), _vm._v(" "), _c('el-button', {
      class: article.activated == 1 ? 'gray-btn' : 's-btn',
      on: {
        "click": function($event) {
          return _vm.getArticleUpOrDown(article.id, article.activated)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(article.activated == 0 ? _vm.$t('stock.shelves') : _vm.$t('stock.soldOut')) + "\n                  ")]), _vm._v(" "), (article.article_type == 2 && !article.is_empty) ? _c('el-button', {
      on: {
        "click": function($event) {
          return _vm.setSaleState(article)
        }
      }
    }, [_vm._v(_vm._s(_vm.saleState) + "\n                  ")]) : _vm._e()], 1)], 1) : _vm._e()
  }), 1), _vm._v(" "), _vm._l((_vm.articleList), function(article, index) {
    return (_vm.choiceStockCode == 1 && article.activated == 0) ? _c('el-row', {
      key: article.id,
      staticClass: "show-article-list",
      class: {
        'select-article': article.id == _vm.currentIndex
      },
      nativeOn: {
        "click": function($event) {
          return _vm.choseArticle(article)
        }
      }
    }, [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-tag', [_vm._v(_vm._s(_vm.getArticleType(article)))])], 1), _vm._v(" "), _c('el-col', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font',
      attrs: {
        "span": 8
      }
    }, [_vm._v("\n                " + _vm._s(article.name) + "\n              ")]), _vm._v(" "), _c('el-col', {
      staticClass: "article-item-stock",
      attrs: {
        "span": 4
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('el-input', {
      staticClass: "stock-edit-input",
      attrs: {
        "type": "number",
        "name": "stock-input"
      },
      model: {
        value: (_vm.articleStock.newStock = article.current_working_stock),
        callback: function($$v) {
          _vm.$set(_vm.articleStock.newStock = article, "current_working_stock", $$v)
        },
        expression: "articleStock.newStock=article.current_working_stock"
      }
    }) : _c('label', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font'
    }, [_vm._v(_vm._s(article.current_working_stock))])], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 10
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: " green-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStockSave(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.save')) + "\n                                      ")]) : _vm._e()], 1) : _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: "gray-btn1",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStock(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.edit')) + "\n                                      ")]) : _vm._e()], 1), _vm._v(" "), (article.is_empty) ? _c('el-button', {
      staticClass: "gray-btn2",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' ',
        "type": "danger"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.hasSellOut')) + "\n                ")]) : _c('el-button', {
      staticClass: "gray-btn1",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' '
      },
      on: {
        "click": function($event) {
          return _vm.getArticleIsEmpty(article.id, article.is_empty, article.has_unit)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.sellOut')) + "\n                ")]), _vm._v(" "), _c('el-button', {
      class: article.activated == 1 ? 'gray-btn' : 's-btn',
      on: {
        "click": function($event) {
          return _vm.getArticleUpOrDown(article.id, article.activated)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(article.activated == 0 ? _vm.$t('stock.shelves') : _vm.$t('stock.soldOut')) + "\n                ")])], 1)], 1) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.articleList), function(article, index) {
    return (_vm.choiceStockCode == 2 && article.is_empty) ? _c('el-row', {
      key: article.id,
      staticClass: "show-article-list",
      class: {
        'select-article': article.id == _vm.currentIndex
      },
      nativeOn: {
        "click": function($event) {
          return _vm.choseArticle(article)
        }
      }
    }, [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-tag', [_vm._v(_vm._s(_vm.getArticleType(article)))])], 1), _vm._v(" "), _c('el-col', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font',
      attrs: {
        "span": 8
      }
    }, [_vm._v("\n                " + _vm._s(article.name) + "\n              ")]), _vm._v(" "), _c('el-col', {
      staticClass: "article-item-stock",
      attrs: {
        "span": 4
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('el-input', {
      staticClass: "stock-edit-input",
      attrs: {
        "type": "number",
        "name": "stock-input"
      },
      model: {
        value: (_vm.articleStock.newStock = article.current_working_stock),
        callback: function($$v) {
          _vm.$set(_vm.articleStock.newStock = article, "current_working_stock", $$v)
        },
        expression: "articleStock.newStock = article.current_working_stock"
      }
    }) : _c('label', {
      class: (index == _vm.currentIndex) ? 'select-article-font' : 'noSelect-article-font'
    }, [_vm._v(_vm._s(article.current_working_stock))])], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 10
      }
    }, [(_vm.editStock == true && article.id == _vm.currentIndex) ? _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: " green-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStockSave(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.save')) + "\n                                      ")]) : _vm._e()], 1) : _c('span', [(!(article.article_type == 2 || article.has_unit !== ' ')) ? _c('el-button', {
      staticClass: "gray-btn",
      attrs: {
        "disabled": (article.article_type == 2 || article.has_unit !== ' ')
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.getArticleStock(article, $event)
        }
      }
    }, [_vm._v("\n                                          " + _vm._s(_vm.$t('common.edit')) + "\n                                      ")]) : _vm._e()], 1), _vm._v(" "), (article.is_empty) ? _c('el-button', {
      staticClass: "gray-btn2",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' ',
        "type": "danger"
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.hasSellOut')) + "\n                ")]) : _c('el-button', {
      staticClass: "gray-btn1",
      attrs: {
        "disabled": article.article_type == 2 || article.has_unit !== ' '
      },
      on: {
        "click": function($event) {
          return _vm.getArticleIsEmpty(article.id, article.is_empty, article.has_unit)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('stock.sellOut')) + "\n                ")]), _vm._v(" "), _c('el-button', {
      class: article.activated == 1 ? 'gray-btn' : 's-btn',
      on: {
        "click": function($event) {
          return _vm.getArticleUpOrDown(article.id, article.activated)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(article.activated == 0 ? _vm.$t('stock.shelves') : _vm.$t('stock.soldOut')) + "\n                ")])], 1)], 1) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "page-tool"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.articlePages(0)
      }
    }
  }, [_c('i', {
    staticClass: " el-icon-caret-left"
  })]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30px",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(_vm.articlePage.currentPage) + " / " + _vm._s(_vm.articlePage.totalPage))]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.articlePages(1)
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-caret-right"
  })])])]), _vm._v(" "), _c('el-col', {
    staticClass: "family-wrapper",
    attrs: {
      "span": 4
    }
  }, [_c('ul', {
    staticStyle: {
      "overflow-y": "auto"
    },
    style: ({
      height: _vm.familyWrapperHeight + 'px'
    }),
    attrs: {
      "id": "familyWrapper"
    }
  }, _vm._l((_vm.familyList), function(family) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.setFamilyId(family.id)
        }
      }
    }, [_c('el-button', {
      staticClass: "family-item",
      attrs: {
        "size": "large",
        "type": _vm.currentFamilyId == family.id ? 'primary' : ''
      }
    }, [_vm._v("\n                " + _vm._s(family.name) + "\n              ")])], 1)
  }), 0), _vm._v(" "), _c('ul', {
    staticClass: "pageButton",
    attrs: {
      "id": "pageButton"
    }
  }, _vm._l((_vm.pageButtonList), function(item, index) {
    return _c('li', [_c('el-button', {
      staticClass: "page-button-item",
      class: _vm.selectCurrentPages == index ? 'page-button-item-active' : '',
      attrs: {
        "size": "large"
      },
      on: {
        "click": function($event) {
          return _vm.familyPages(index)
        }
      }
    }, [_vm._v(_vm._s(item) + "\n              ")])], 1)
  }), 0)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-6010c0bd", module.exports)
  }
}

/***/ })

});