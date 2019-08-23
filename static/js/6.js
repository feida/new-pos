webpackJsonp([6],{

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(503)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(448),
  /* template */
  __webpack_require__(554),
  /* scopeId */
  "data-v-d034a35a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/order/tvmode/tvorder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tvorder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d034a35a", Component.options)
  } else {
    hotAPI.reload("data-v-d034a35a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".order-toolbar[data-v-0425a509]{height:50px;width:100%;line-height:50px;padding-left:5px;background-color:#fff;border-bottom:1px solid #d1dbe5;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)}.order-state[data-v-0425a509]{float:left}.order-state button[data-v-0425a509]{position:relative;margin-left:13px;padding:10px;font-size:16px;border:1px solid #000;color:#333;background-color:#f5f5f5}.order-state-active[data-v-0425a509]{border-radius:5px}.order-state-active[data-v-0425a509],.takeout-type-active[data-v-0425a509]{background-color:#ffbf34!important;color:#fff!important;border:none!important}.order-mode[data-v-0425a509]{text-align:right;padding-right:10px}.order-mode button[data-v-0425a509]:hover{border-color:#fff;color:#333}.order-mode-active[data-v-0425a509]{color:#fff!important;background-color:#ffbf34;border-color:#ffbf34}.el-badge__content.is-fixed[data-v-0425a509]{top:8px;right:12px}.el-badge__content[data-v-0425a509]{height:20px;line-height:20px;z-index:10}button[data-v-0425a509]:disabled{border:1px solid #ddd;background-color:#eef1f6;color:#bfcbd9}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/order-toolbar.vue"],"names":[],"mappings":"AACA,gCACE,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,iBAAkB,AAClB,sBAA0B,AAC1B,gCAAiC,AACjC,gEAAyE,CAC1E,AACD,8BACE,UAAY,CACb,AACD,qCACE,kBAAmB,AACnB,iBAAkB,AAClB,aAAmB,AACnB,eAAgB,AAChB,sBAAwB,AACxB,WAAe,AACf,wBAA0B,CAC3B,AACD,qCAGE,iBAAmB,CAEpB,AACD,2EALE,mCAAqC,AACrC,qBAAuB,AAEvB,qBAAwB,CAMzB,AACD,6BACE,iBAAkB,AAClB,kBAAoB,CACrB,AACD,0CACE,kBAAsB,AACtB,UAAY,CACb,AACD,oCACE,qBAA0B,AAE1B,yBAA0B,AAC1B,oBAAsB,CACvB,AACD,6CACE,QAAS,AACT,UAAY,CACb,AACD,oCACE,YAAa,AACb,iBAAkB,AAClB,UAAY,CACb,AACD,iCACE,sBAAuB,AACvB,yBAA0B,AAC1B,aAAe,CAChB","file":"order-toolbar.vue","sourcesContent":["\n.order-toolbar[data-v-0425a509] {\n  height: 50px;\n  width: 100%;\n  line-height: 50px;\n  padding-left: 5px;\n  background-color: #ffffff;\n  border-bottom: 1px solid #d1dbe5;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);\n}\n.order-state[data-v-0425a509] {\n  float: left;\n}\n.order-state button[data-v-0425a509] {\n  position: relative;\n  margin-left: 13px;\n  padding: 10px 10px;\n  font-size: 16px;\n  border: 1px solid black;\n  color: #333333;\n  background-color: #f5f5f5;\n}\n.order-state-active[data-v-0425a509] {\n  background-color: #ffbf34 !important;\n  color: #fff !important;\n  border-radius: 5px;\n  border: none !important;\n}\n.takeout-type-active[data-v-0425a509] {\n  background-color: #ffbf34 !important;\n  color: #FFFFFF !important;\n  border: none !important;\n}\n.order-mode[data-v-0425a509] {\n  text-align: right;\n  padding-right: 10px;\n}\n.order-mode button[data-v-0425a509]:hover {\n  border-color: #FFFFFF;\n  color: #333;\n}\n.order-mode-active[data-v-0425a509] {\n  color: #FFFFFF !important;\n  /*border:none;*/\n  background-color: #ffbf34;\n  border-color: #ffbf34;\n}\n.el-badge__content.is-fixed[data-v-0425a509] {\n  top: 8px;\n  right: 12px;\n}\n.el-badge__content[data-v-0425a509] {\n  height: 20px;\n  line-height: 20px;\n  z-index: 10;\n}\nbutton[data-v-0425a509]:disabled {\n  border: 1px solid #DDD;\n  background-color: #eef1f6;\n  color: #bfcbd9;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* unused harmony export timeD */
/**
 * 常用工具
 * Created by Lmx on 2017/7/6.
 */

var formatDate = function formatDate(date, fmt) {
  if (!date) {
    date = new Date();
  };
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  }
  return fmt;
};

/**
 * 计算时间间隔
 * @param getDate 创建的时间
 * */
var timeD = function timeD(getDate) {
  console.log('timeDifference', getDate);
  var differenceMinute = Math.floor((new Date().getTime() - getDate) / (60 * 1000)); // 算出来的是分钟
  // return `${differenceMinute}m`;
  return getDate;
};

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_tableApi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_bus__ = __webpack_require__(19);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'order-toolbar',
    //props: ['callCount','orderStateCount',],
    data: function data() {
        return {
            page_index: 1,
            isTakeout: false,
            currentOrderState: "all",
            currentTakeoutType: "eleme",
            shopDet: {},
            shopModel: '',
            switchActive: false,
            searchKey: ''
            //orderStateCount:{},
            /*callCount: {
                waitCallCount: 0,
                hasCalledCount: 0,
            }*/
        };
    },
    created: function created() {
        this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["c" /* getSessionShopDet */])());
        this.shopModel = this.shopDet.shopMode;
        this.getOrderStateCount();
    },
    mounted: function mounted() {
        var _this = this;

        var that = this;
        this.currentOrderState = this.$route.query.orderType;
        if (this.shopModel == 2) {
            this.currentOrderState = this.$route.query.type;
        }
        console.log('currentOrderState', this.currentOrderState);
        var currentPath = this.$route.path;
        if (currentPath == "/table/takeout") {
            this.isTakeout = true;
        }
        console.log('this.$route', this.$route);
        if (this.$route.query && this.$route.query.type) {
            var name = this.$route.query.type;
            this.currentOrderState = name;
            this.$emit(name);
        }

        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$on("callNumber", function (result) {
            _this.getOrderStateCount();
        });
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$on("cancelOrder", function (result) {
            console.log('cancelOrderallOrder');
            _this.allOrder('all');
        });

        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$on("resetAllOrder", function (result) {
            console.log('resetAllOrder');
            _this.allOrder('all');
        });
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$on('searchKey', function (searchKey) {
            console.log('searchKey', searchKey);
            if (searchKey.indexOf("'") !== -1 || searchKey.indexOf("’") !== -1) return;
            if (that.shopModel == 2 || that.shopModel == 7 || that.shopModel == 6 && that.shopDet.allowFirstPay == 0) {
                // 先付
                that.searchKey = searchKey;
                that.searchTable(searchKey);
            } else if (that.shopModel == 6 && that.shopDet.allowAfterPay == 0) {
                // 后付 结算单
                that.searchKey = searchKey;
                that.searchTable(searchKey);
            }
            //that.searchTable(searchKey);

        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$off("cancelOrder");
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$off("resetAllOrder");
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$off("searchKey");
        __WEBPACK_IMPORTED_MODULE_4__utils_bus__["a" /* default */].$off("callNumber");
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        areaList: 'areaList',
        tableAndOrderList: 'tableAndOrderList',
        orderInfo: 'orderInfo',
        pageInfo: 'pageInfo',
        orderStateCount: 'orderStateCount',
        callStateCount: 'callStateCount'
    }), {
        takeoutClass: function takeoutClass() {
            return {
                eleme: this.currentTakeoutType == "eleme" ? "takeout-type-active" : "",
                meituan: this.currentTakeoutType == "meituan" ? "takeout-type-active" : "",
                baidu: this.currentTakeoutType == "baidu" ? "takeout-type-active" : "",
                shopModel: ''
            };
        },
        stateClass: function stateClass() {
            return {
                all: this.currentOrderState == "all" ? "order-state-active" : "",
                pay: this.currentOrderState == "payOrder" ? "order-state-active" : "",
                wait: this.currentOrderState == "waitOrder" ? "order-state-active" : "",
                nopay: this.currentOrderState == "noPayOrder" ? "order-state-active" : "",
                paying: this.currentOrderState == "payingOrder" ? "order-state-active" : ""
            };
        }
    }),
    methods: {
        searchTable: function searchTable() {
            if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "payOrder") {
                this.payOrder(this.currentOrderState);
            } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "waitOrder") {
                this.waitOrder(this.currentOrderState);
            } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "noPayOrder") {
                this.noPayOrder(this.currentOrderState);
            } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "payingOrder") {
                this.payingOrder(this.currentOrderState);
            } else if (this.currentOrderState == "all") {
                this.allOrder('all');
            }
        },
        choseTakeOutType: function choseTakeOutType(name, type) {
            this.currentTakeoutType = name;
            this.$emit('waimaiSrc', type);
        },
        choseOrderState: function choseOrderState(name) {
            if (this.shopModel == 2 || this.shopModel == 7) {
                if (name == "all") {
                    this.$router.push('/tvorder?type=all');
                }
                if (name == "waitOrder") {
                    var Obj = { search_code: this.searchKey };
                    this.$store.dispatch('getWaitCallTPOrderList', Obj);
                    this.getOrderStateCount();
                    this.$emit('changeCurrentOrderType', name);
                    this.$router.push("/table/eatin?type=waitOrder");
                }
                if (name == "payOrder") {

                    this.$router.push("/table/eatin?type=payOrder");
                    var Obj = { search_code: this.searchKey };
                    this.$store.dispatch('getHasCallTPOrderList', Obj);
                    this.getOrderStateCount();
                }
            }
            this.currentOrderState = name;
            this.$emit(name);
        },
        modeActiveClass: function modeActiveClass(name) {
            return this.$route.path.indexOf("/table/" + name) != -1 ? "order-mode-active" : null;
        },
        switchPage: function switchPage(path, mode) {
            this.switchActive = true;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["d" /* setSession */])("distribution_mode_id", mode); // 堂食1  外带3
            if (this.$route.path.indexOf(path) != -1) {
                this.choseOrderState(path);
            } else {
                if (this.shopModel == 2 || this.shopModel == 7) {
                    var currentRoute = path.indexOf("/table/eatin") != -1;
                    if (currentRoute) {
                        this.$router.push("/table/eatin?type=waitOrder");
                    } else {
                        this.$router.push("/table/takeout");
                    }
                } else {
                    this.$router.push(path + '?orderType=all');
                }
            }
        },
        allOrder: function allOrder(name) {
            // 全部 是以 桌位 为基准
            if (this.shopModel == 2 || this.shopModel == 7) {
                this.$router.push('/tvorder?type=all');
            } else {
                var pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
                var query = {
                    page_size: 20,
                    page_index: pageIndex,
                    search_code: this.searchKey,
                    //distribution_mode_id: 1
                    distribution_mode_id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id")
                };
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id") == 1) {
                    this.$store.dispatch('getAllTableAndOrderList', query);
                } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id") == 3) {
                    var params = {
                        page_index: pageIndex,
                        ver_code: '',
                        table_number: this.searchKey,
                        distribution_mode: 3
                    };
                    console.log('getWaitAndNoPayOrderList参数', params);
                    this.$store.dispatch('getWaitAndNoPayOrderList', params);
                }
                this.$emit('changeCurrentOrderType', name);
            }
            this.currentOrderState = name;
            this.getOrderStateCount();
        },
        payOrder: function payOrder(name) {
            // 支付订单 是以 订单为基准
            if (this.shopModel == 2 || this.shopModel == 7) {
                var Obj = { searchKey: this.searchKey };
                this.$store.dispatch('getHasCallTPOrderList', Obj);
            } else {
                var _Obj = {
                    page_index: this.page_index,
                    ver_code: '',
                    table_number: this.searchKey,
                    distribution_mode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id")
                    // var Obj = this.page_index
                };this.$store.dispatch('getPayOrder', _Obj);
                this.currentOrderState = name;
                this.$emit('changeCurrentOrderType', name);
            }

            this.getOrderStateCount();
        },
        waitOrder: function waitOrder(name) {
            //  待下单  是以 订单为基准
            if (this.shopModel == 2 || this.shopModel == 7) {
                var Obj = { searchKey: this.searchKey };
                this.$store.dispatch('getWaitCallTPOrderList', Obj);
            } else {
                // var Obj =  this.page_index
                var _Obj2 = {
                    page_index: this.page_index,
                    ver_code: '',
                    table_number: this.searchKey,
                    distribution_mode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id")
                };
                this.$store.dispatch('getWaitOrderList', _Obj2);
                this.currentOrderState = name;
                this.$emit('changeCurrentOrderType', name);
            }

            this.getOrderStateCount();
        },
        noPayOrder: function noPayOrder(name) {
            //  未支付 是以 订单为基准
            this.currentOrderState = name;
            // var Obj = this.page_index
            var Obj = {
                page_index: this.page_index,
                ver_code: '',
                table_number: this.searchKey,
                distribution_mode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id")
            };
            this.$store.dispatch('getNoPayOrderList', Obj);
            this.currentOrderState = name;
            this.$emit('changeCurrentOrderType', name);
            this.getOrderStateCount();
        },
        payingOrder: function payingOrder(name) {
            //  付款中 是以 订单为基准
            // var Obj = this.page_index
            var Obj = {
                page_index: this.page_index,
                ver_code: '',
                table_number: this.searchKey,
                distribution_mode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id")
            };
            this.$store.dispatch('getPayingOrderList', Obj);
            this.currentOrderState = name;
            this.$emit('changeCurrentOrderType', name);
            this.getOrderStateCount();
        },
        getOrderStateCount: function getOrderStateCount() {
            var _this2 = this;

            var that = this;
            if (this.shopModel == 2 || this.shopModel == 7) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tableApi__["a" /* waitCallTPAndhasCallTPOrderCount */])().then(function (res) {
                    console.log('waitCallTPAndhasCallTPOrderCount', res);
                    if (res.ok) {
                        _this2.$store.commit('setCallStateCount', res.data);
                        //that.callCount.waitCallCount = res.data.waitCallTPOrderCount;
                        //that.callCount.hasCalledCount = res.data.hasCallTPOrderCount;
                    }
                });
            } else {
                var distribution_mode_id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("distribution_mode_id");
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_tableApi__["b" /* orderStateCountApi */])(distribution_mode_id).then(function (res) {
                    console.log('orderStateCount', res);
                    if (res.ok) {
                        //this.orderStateCount = res.data;
                        _this2.$store.commit('setOrderStateCount', res.data);
                    }
                });
            }
        }
    }
});

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("6f6d4976", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(380, function() {
     var newContent = __webpack_require__(380);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(386)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(383),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  "data-v-0425a509",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/order-toolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] order-toolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0425a509", Component.options)
  } else {
    hotAPI.reload("data-v-0425a509", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.shopModel == 2 || _vm.shopModel == 7) ? _c('el-row', {
    staticClass: "order-toolbar"
  }, [(_vm.isTakeout) ? _c('div', {
    staticClass: "order-state"
  }, [_c('el-button', {
    class: _vm.takeoutClass['eleme'],
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('eleme')
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('order_toolbar.elemBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.takeoutClass['meituan'],
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('meituan')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.meituanBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.takeoutClass['baidu'],
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('baidu')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.baiduBtn')) + "\n    ")])], 1) : _c('div', {
    staticClass: "order-state"
  }, [_c('el-button', {
    class: _vm.stateClass['all'],
    on: {
      "click": function($event) {
        return _vm.allOrder('all')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.diandanBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['wait'],
    on: {
      "click": function($event) {
        return _vm.choseOrderState('waitOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.waitCallBtn')) + "\n      "), (_vm.callStateCount && _vm.callStateCount.waitCallTPOrderCount && _vm.callStateCount.waitCallTPOrderCount > 0) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.callStateCount.waitCallTPOrderCount))]) : _vm._e()]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['pay'],
    on: {
      "click": function($event) {
        return _vm.choseOrderState('payOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.hasCalledBtn')) + "\n      "), (_vm.callStateCount && _vm.callStateCount.hasCallTPOrderCount > 0) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.callStateCount.hasCallTPOrderCount))]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "order-mode",
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-badge', {
    staticClass: "item"
  }, [_c('el-button', {
    class: _vm.modeActiveClass('takeout'),
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.switchPage('/table/takeout', 2)
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('order_toolbar.takeoutBtn')) + "\n      ")])], 1), _vm._v(" "), _c('el-badge', {
    staticClass: "item"
  }, [_c('el-button', {
    class: _vm.modeActiveClass('eatin'),
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.switchPage('/table/eatin', 1)
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('order_toolbar.eatinOrPackagingBtn')) + "\n      ")])], 1)], 1)]) : _c('el-row', {
    staticClass: "order-toolbar"
  }, [(_vm.isTakeout) ? _c('div', {
    staticClass: "order-state"
  }, [_c('el-button', {
    class: _vm.takeoutClass['eleme'],
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('eleme', 1)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('order_toolbar.elemBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.takeoutClass['meituan'],
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('meituan', 2)
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.meituanBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.takeoutClass['baidu'],
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choseTakeOutType('baidu', 3)
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.baiduBtn')) + "\n    ")])], 1) : _c('div', {
    staticClass: "order-state"
  }, [_c('el-button', {
    class: _vm.stateClass['all'],
    on: {
      "click": function($event) {
        return _vm.allOrder('all')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.allTableBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['pay'],
    attrs: {
      "disabled": _vm.orderStateCount.payOrderCount > 0 ? false : true
    },
    on: {
      "click": function($event) {
        return _vm.payOrder('payOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.haspayBtn')) + "\n      "), (_vm.orderStateCount.payOrderCount) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.orderStateCount.payOrderCount))]) : _vm._e()]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['wait'],
    attrs: {
      "disabled": _vm.orderStateCount.waitOrderCount > 0 ? false : true
    },
    on: {
      "click": function($event) {
        return _vm.waitOrder('waitOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.waitOrderBtn')) + "\n      "), (_vm.orderStateCount.waitOrderCount) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.orderStateCount.waitOrderCount))]) : _vm._e()]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['nopay'],
    attrs: {
      "disabled": _vm.orderStateCount.noPayOrderCount > 0 ? false : true
    },
    on: {
      "click": function($event) {
        return _vm.noPayOrder('noPayOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.noPayBtn')) + "\n      "), (_vm.orderStateCount.noPayOrderCount) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.orderStateCount.noPayOrderCount))]) : _vm._e()]), _vm._v(" "), _c('el-button', {
    class: _vm.stateClass['paying'],
    attrs: {
      "disabled": _vm.orderStateCount.payingOrderCount > 0 ? false : true
    },
    on: {
      "click": function($event) {
        return _vm.payingOrder('payingOrder')
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.payingBtn')) + "\n      "), (_vm.orderStateCount.payingOrderCount) ? _c('sup', {
    staticClass: "el-badge__content is-fixed"
  }, [_vm._v(_vm._s(_vm.orderStateCount.payingOrderCount))]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "order-mode",
    staticStyle: {
      "float": "right",
      "height": "50px"
    }
  }, [_c('el-button', {
    class: _vm.modeActiveClass('takeout'),
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.switchPage('/table/takeout', 2)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('order_toolbar.waimaiBtn')))]), _vm._v(" "), _c('el-button', {
    class: _vm.modeActiveClass('packaging'),
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.switchPage('/table/packaging', 3)
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.packagingBtn')) + "\n    ")]), _vm._v(" "), _c('el-button', {
    class: _vm.modeActiveClass('eatin'),
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.switchPage('/table/eatin', 1)
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('order_toolbar.eatinBtn')) + "\n    ")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-0425a509", module.exports)
  }
}

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

/***/ 391:
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(399), __esModule: true };

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(402);
module.exports = __webpack_require__(3).Number.parseInt;


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(4).parseInt;
var $trim = __webpack_require__(401).trim;
var ws = __webpack_require__(391);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var defined = __webpack_require__(52);
var fails = __webpack_require__(20);
var spaces = __webpack_require__(391);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var $parseInt = __webpack_require__(400);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".left-wrapper[data-v-d034a35a]{height:100%;position:relative;z-index:1;background-color:#fff;box-shadow:0 0 20px 0 rgba(0,0,0,.25),0 0 6px 0 rgba(0,0,0,.04)}.car-footer[data-v-d034a35a]{position:absolute;bottom:0;width:100%;border-top:5px solid #eee;background-color:#fff}.order-payment[data-v-d034a35a]{font-size:1em;height:40px;line-height:40px;color:#000;border-bottom:1px dashed grey;margin-left:18px;margin-right:18px}.order-payment-num[data-v-d034a35a]{font-size:20px;color:#ef5350;line-height:24px}.operate-article-button[data-v-d034a35a]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;margin:5px 0 0;padding:10px 15px;border:none;border-radius:5px;color:#666;background-color:#fff;height:40px;width:100%;font-size:16px;font-weight:700;border:1px solid #000}.order-operate-button[data-v-d034a35a]{font-size:1em;height:50px;color:#fff}.operate-button[data-v-d034a35a]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;margin:5px 0 0;padding:10px 15px;border:1px solid #000;background:#fff;border-radius:5px;color:#666;height:40px;width:90px;font-size:16px;font-weight:700}.operate-button-push-order[data-v-d034a35a]{background:#ffbf34;border-radius:5px;border:none;color:#fff}.right-wrapper[data-v-d034a35a]{height:100%;background-color:#f6f6f6}.article-wrapper[data-v-d034a35a]{height:100%;background-color:#eee}.article-info[data-v-d034a35a]{height:100%;overflow-y:auto;padding:10px}#familyWrapper[data-v-d034a35a]{overflow-x:hidden}#familyWrapper[data-v-d034a35a]::-webkit-scrollbar{width:1px;height:1px}#familyWrapper[data-v-d034a35a]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#familyWrapper[data-v-d034a35a]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.family-wrapper[data-v-d034a35a]{height:100%;overflow-y:auto;background-color:#fff;text-align:center;position:relative}.family-item[data-v-d034a35a]{width:100%;padding:5px;padding-top:15px;padding-bottom:15px;font-size:18px;line-height:20px;white-space:normal;position:relative;border:none}.family-item-active[data-v-d034a35a]{background:#eee;border-left:5px solid #ffbf34!important;border:none;color:#333;border-radius:0}.pageButton[data-v-d034a35a]{bottom:85px}.page-button-item[data-v-d034a35a]{width:80%;text-align:center;margin-bottom:10px;padding-left:15px;color:#1f2d3d;border:1px solid #666}.pageButtonActive[data-v-d034a35a]{background-color:#ffbf34;color:#fff!important;border:none!important}.bottom-tool[data-v-d034a35a]{position:absolute;bottom:0;width:100%;height:60px;line-height:60px;padding-left:10px;background-color:#f6f6f6}.panel-title[data-v-d034a35a]{height:50px;line-height:50px;font-size:20px;font-weight:700;text-align:center;background-color:#fff;color:#333;border-bottom:5px solid #f2f2f2;margin-bottom:10px}.panel-content[data-v-d034a35a]{height:40px;line-height:40px;font-size:14px;color:#000;padding-left:5px;padding-bottom:2em;border-bottom:3px dashed transparent;background:linear-gradient(#fff,#fff) padding-box,repeating-linear-gradient(-45deg,#ccc,#ccc .25em,#fff 0,#fff .75em)}.mask-layer[data-v-d034a35a]{width:100%;position:absolute;background-color:#000;opacity:.5}.car-total[data-v-d034a35a]{height:50px;line-height:50px;border-top:5px solid #f2f2f2;font-size:22px;font-weight:700;text-align:center}.article-card[data-v-d034a35a]{margin-bottom:7px;width:19%;height:32%;margin-right:1%;cursor:pointer}.article-card>.el-card[data-v-d034a35a]{height:100%}.title-wrapper[data-v-d034a35a]{display:flex;justify-content:center;align-items:center;height:56%}.el-col-21[data-v-d034a35a]{width:85.5%}.el-col-3[data-v-d034a35a]{width:14.5%}.article-name[data-v-d034a35a]{font-size:32px;text-align:center;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.article-count[data-v-d034a35a]{position:relative;top:0;right:0}.el-badge__content.is-fixed[data-v-d034a35a]{top:10px;right:20px}.el-badge__content[data-v-d034a35a]{height:20px;line-height:20px}.family-badge[data-v-d034a35a]{top:10px!important;right:20px!important}.dialog-title-warp[data-v-d034a35a]{height:48px;line-height:48px;text-align:center}.dialog-title[data-v-d034a35a]{font-family:SourceHanSansCN-Medium;font-size:22px;color:#666;font-weight:700;vertical-align:middle}.dialog-content[data-v-d034a35a]{max-height:400px;overflow-y:auto;margin:0 20px;background-color:#eee;padding:0 20px}.dialog-content[data-v-d034a35a]::-webkit-scrollbar{display:none}.dialog-dashed[data-v-d034a35a]{padding:1em;border-top:2px dashed transparent;background:linear-gradient(#fff,#fff) padding-box,repeating-linear-gradient(-45deg,#ccc,#ccc .25em,#fff 0,#fff .75em);margin-bottom:10px}.scrollbar[data-v-d034a35a]::-webkit-scrollbar{width:10px;height:10px}.scrollbar[data-v-d034a35a]::-webkit-scrollbar-track{background-color:#c0ccda}.scrollbar[data-v-d034a35a]::-webkit-scrollbar-thumb{background-color:#475669}.car-table[data-v-d034a35a]{width:100%;font-size:14px}.car-table-title-tr[data-v-d034a35a]{background-color:#eef1f6;height:40px;font-size:17px;color:#9b9b9b}.car-table-body-tr[data-v-d034a35a]{text-align:center;height:40px;cursor:pointer}.car-push-name[data-v-d034a35a]{color:#20a0ff}.car-remove-name[data-v-d034a35a]{color:#ff4949}.car-new-name[data-v-d034a35a]{color:#000}.car-table-body-tr td[data-v-d034a35a],th[data-v-d034a35a]{border-bottom:1px dashed #dfe6ec}.car-table-body-tr-selected[data-v-d034a35a]{background-color:#e5e9f2}.car-table-body-package-tr[data-v-d034a35a]{text-align:center;height:40px;background-color:#fff}.count-article[data-v-d034a35a]{width:30px;height:30px;line-height:30px;color:#fff;border-radius:50%;background-color:#58b7ff;display:inline-block}.red-circle[data-v-d034a35a]{background:red}.blue-circle[data-v-d034a35a],.red-circle[data-v-d034a35a]{position:absolute;top:15px;left:0;width:10px;height:10px;-webkit-border-radius:50%;border-radius:50%}.blue-circle[data-v-d034a35a]{background:#032eff}.yellow-circle[data-v-d034a35a]{position:absolute;top:15px;left:0;width:10px;height:10px;background:#ff4d51;-webkit-border-radius:50%;border-radius:50%}#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar{width:1px;height:1px}#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar-thumb{border-radius:5px;background:rgba(0,0,0,.2)}#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar-track{border-radius:0;background:rgba(0,0,0,.1)}.el-button--primary[data-v-d034a35a]{background-color:#000!important;color:#fff!important;border:none}#articleInfo[data-v-d034a35a]::-webkit-scrollbar{width:4px;height:4px}#articleInfo[data-v-d034a35a]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#articleInfo[data-v-d034a35a]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.pageButton[data-v-d034a35a]{width:100%;position:absolute;bottom:50px}.re-food-tag[data-v-d034a35a]{display:inline-block;height:40px;line-height:40px;padding-left:20px;padding-right:20px;background-color:#a9a9a9;border-radius:5px}.order-page-wrapper[data-v-d034a35a]{position:absolute;top:30%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-d034a35a]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-d034a35a],.order-page-wrapper>.pre-page[data-v-d034a35a]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}.article-page-wrapper[data-v-d034a35a]{position:fixed;top:37%;right:13%;z-index:10}.article-page-wrapper>.pre-page[data-v-d034a35a]{margin-bottom:50px}.article-page-wrapper>.next-page[data-v-d034a35a],.article-page-wrapper>.pre-page[data-v-d034a35a]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}.change-order-content[data-v-d034a35a]{margin:0 auto;width:100%;text-align:center}.change-order-content>li[data-v-d034a35a]:nth-child(2n){background-color:#f8f8f8}.change-order-content>li>span[data-v-d034a35a]{display:inline-block}.change-order-content:first-of-type > li > span[data-v-d034a35a]{height:50px;line-height:50px;font-size:18px;font-weight:700}.change-order-content:not(:first-child)>li>span[data-v-d034a35a]{height:50px;line-height:50px;font-size:16px}.packate-title[data-v-d034a35a]{display:inline-block;margin-top:20px;font-size:18px;color:#666}.package-content-wrap[data-v-d034a35a]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center}.package-items[data-v-d034a35a]{height:84px;font-size:1.1em;text-align:center;margin:15px 10px 10px 3px;padding:0 20px;border-radius:5px;color:#666;background-color:#fff;cursor:pointer;position:relative;padding-top:20px}.webpackPackage-items[data-v-d034a35a]{font-size:1.1em;font-weight:bolder;text-align:center;margin:15px 10px 15px 3px;padding:5px 20px;border-radius:10px;color:#757575;background-color:#f6f6f6;cursor:pointer}.not-sell[data-v-d034a35a]{top:0!important;right:20px!important;z-index:10}.package-item-click[data-v-d034a35a]{color:#ffbf34;border:1px solid #ffbf34}.refund-command[data-v-d034a35a]{border:1px solid #000}.car-title[data-v-d034a35a]{width:100%;color:#666;vertical-align:middle}.car-title .car-title-item[data-v-d034a35a]{font-size:14px;display:inline-block;padding-top:1%;padding-bottom:1%}.car-content-item[data-v-d034a35a]{font-size:14px;word-wrap:break-word;color:#666}.hidden-dom[data-v-d034a35a]{display:none}.details-item[data-v-d034a35a]{margin-top:8px;font-size:14px;word-wrap:break-word;color:#666}.details-button[data-v-d034a35a]{border:1px solid #000;color:#000}.details-button-active[data-v-d034a35a]{border:none;background-color:#ffbf34;color:#fff}.base-btn[data-v-d034a35a]{width:100%;margin-top:5px;border-radius:5px;border:1px solid #000;color:#333;background-color:#fff}.base-btn-active[data-v-d034a35a]{width:100%;margin-top:5px;border-radius:5px;border:none;color:#fff;background-color:#ffbf34}.el-dialog__wrap>.el-dialog__body[data-v-d034a35a],.el-dialog__wrap>.el-dialog__header[data-v-d034a35a]{padding:0}.el-dialog__wrap>.el-dialog__headerbtn[data-v-d034a35a]{position:absolute;top:15px;right:15px}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/order/tvmode/tvorder.vue"],"names":[],"mappings":"AACA,+BACE,YAAa,AACb,kBAAmB,AACnB,UAAW,AACX,sBAA0B,AAC1B,+DAA0E,CAC3E,AACD,6BACE,kBAAmB,AACnB,SAAY,AACZ,WAAY,AACZ,0BAA2B,AAE3B,qBAAuB,CACxB,AACD,gCACE,cAAe,AAEf,YAAa,AACb,iBAAkB,AAElB,WAAa,AACb,8BAA+B,AAC/B,iBAAkB,AAClB,iBAAmB,CACpB,AACD,oCACE,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACnB,AACD,yCACE,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,eAAwB,AACxB,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,WAAe,AACf,sBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,gBAAkB,AAClB,qBAAwB,CACzB,AACD,uCACE,cAAe,AAEf,YAAa,AACb,UAAY,CACb,AACD,iCACE,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,eAAwB,AACxB,kBAAmB,AACnB,sBAAwB,AACxB,gBAAoB,AACpB,kBAAmB,AACnB,WAAe,AACf,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,eAAkB,CACnB,AACD,4CACE,mBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,UAAe,CAChB,AACD,gCACE,YAAa,AACb,wBAA0B,CAE3B,AACD,kCACE,YAAa,AAEb,qBAA0B,CAC3B,AACD,+BACE,YAAa,AACb,gBAAiB,AAGjB,YAAc,CACf,AAGD,gCAEE,iBAAmB,CACpB,AACD,mDACE,UAAW,AACX,UAAY,CACb,AACD,yDACE,kBAAmB,AACnB,gDAAkD,AAClD,yBAA4B,CAC7B,AACD,yDACE,gDAAkD,AAClD,gBAAiB,AACjB,yBAA4B,CAC7B,AAED,iCACE,YAAa,AAEb,gBAAiB,AACjB,sBAA0B,AAC1B,kBAAmB,AACnB,iBAAmB,CACpB,AACD,8BACE,WAAY,AAGZ,YAAa,AACb,iBAAkB,AAClB,oBAAqB,AACrB,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CACd,AACD,qCACE,gBAAoB,AACpB,wCAA0C,AAC1C,YAAa,AACb,WAAe,AACf,eAAiB,CAClB,AACD,6BAGE,WAAa,CACd,AACD,mCACE,UAAW,AAEX,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,cAAe,AACf,qBAAuB,CACxB,AACD,mCACE,yBAA0B,AAC1B,qBAAuB,AACvB,qBAAwB,CACzB,AACD,8BACE,kBAAmB,AACnB,SAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AAGnB,wBAA0B,CAC3B,AACD,8BACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,gBAAkB,AAClB,kBAAmB,AACnB,sBAA0B,AAC1B,WAAe,AACf,gCAAiC,AACjC,kBAAoB,CACrB,AACD,gCAEE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,qCAAsC,AACtC,qHAC8E,CAC/E,AAGD,6BAEE,WAAY,AACZ,kBAAmB,AACnB,sBAAwB,AACxB,UAAa,CACd,AACD,4BACE,YAAa,AACb,iBAAkB,AAClB,6BAA8B,AAC9B,eAAgB,AAChB,gBAAkB,AAClB,iBAAmB,CACpB,AACD,+BACE,kBAAmB,AAEnB,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,cAAgB,CACjB,AACD,wCACE,WAAa,CACd,AACD,gCACE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AAEpB,UAAY,CACb,AACD,4BACE,WAAa,CACd,AACD,2BACE,WAAa,CACd,AACD,+BAEE,eAAgB,AAChB,kBAAmB,AACnB,oBAAqB,AACrB,4BAA6B,AAC7B,qBAAsB,AACtB,eAAiB,CAClB,AACD,gCACE,kBAAmB,AACnB,MAAS,AACT,OAAW,CACZ,AACD,6CACE,SAAU,AACV,UAAY,CACb,AACD,oCACE,YAAa,AACb,gBAAkB,CACnB,AACD,+BACE,mBAAqB,AACrB,oBAAuB,CACxB,AACD,oCACE,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACpB,AACD,+BACE,mCAAsC,AACtC,eAAgB,AAChB,WAAY,AACZ,gBAAkB,AAClB,qBAAuB,CACxB,AACD,iCACE,iBAAkB,AAClB,gBAAiB,AACjB,cAAiB,AACjB,sBAAuB,AACvB,cAAkB,CACnB,AACD,oDACE,YAAa,CACd,AACD,gCACE,YAAa,AACb,kCAAmC,AACnC,sHAC8E,AAC9E,kBAAoB,CACrB,AAGD,+CAEE,WAAY,AACZ,WAAa,CACd,AACD,qDAEE,wBAA0B,CAE3B,AACD,qDAEE,wBAA0B,CAE3B,AAKD,4BACE,WAAY,AACZ,cAAgB,CAEjB,AACD,qCACE,yBAA0B,AAC1B,YAAa,AACb,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,YAAa,AACb,cAAgB,CACjB,AACD,gCACE,aAAe,CAChB,AACD,kCACE,aAAe,CAChB,AACD,+BAEE,UAAa,CACd,AACD,2DAGE,gCAAkC,CACnC,AACD,6CACE,wBAA0B,CAC3B,AACD,4CACE,kBAAmB,AACnB,YAAa,AACb,qBAA0B,CAC3B,AAcD,gCACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,oBAAsB,CACvB,AACD,6BAME,cAAgB,CAGjB,AACD,2DATE,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,YAAa,AAEb,0BAA2B,AAC3B,iBAAmB,CAWpB,AATD,8BAME,kBAAoB,CAGrB,AACD,gCACE,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,0BAA2B,AAC3B,iBAAmB,CACpB,AAGD,0DACE,UAAW,AACX,UAAY,CACb,AACD,gEACE,kBAAmB,AAEnB,yBAA4B,CAC7B,AACD,gEAEE,gBAAiB,AACjB,yBAA4B,CAC7B,AAED,qCACE,gCAAkC,AAClC,qBAAuB,AACvB,WAAa,CACd,AAMD,iDACE,UAAW,AACX,UAAY,CACb,AACD,uDACE,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAChC,AACD,uDACE,gDAAqD,AACrD,gBAAiB,AACjB,yBAA+B,CAChC,AAGD,6BACE,WAAY,AAEZ,kBAAmB,AACnB,WAAa,CACd,AACD,8BACE,qBAAsB,AACtB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,mBAAoB,AACpB,yBAA2B,AAC3B,iBAAmB,CACpB,AACD,qCACE,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,UAAY,CACb,AACD,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAmB,AAEnB,eAAgB,AAChB,UAAa,CAad,AACD,uCACE,eAAgB,AAChB,QAAS,AAET,UAAW,AACX,UAAY,CACb,AACD,iDASE,kBAAoB,CAGrB,AACD,mGAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAmB,AAEnB,eAAgB,AAChB,UAAa,CAad,AACD,uCACE,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB,AACD,wDACE,wBAA0B,CAC3B,AACD,+CACE,oBAAsB,CACvB,AACD,iEACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,eAAkB,CACnB,AACD,iEACE,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AACD,gCACE,qBAAsB,AAEtB,gBAAiB,AACjB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,2BAA4B,AAC5B,kBAAoB,CACrB,AACD,gCACE,YAAa,AAEb,gBAAiB,AACjB,kBAAmB,AACnB,0BAA2B,AAC3B,eAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,eAAgB,AAChB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,uCACE,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA2B,AAC3B,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,yBAA0B,AAC1B,cAAgB,CAEjB,AACD,2BACE,gBAAoB,AACpB,qBAAuB,AACvB,UAAY,CACb,AACD,qCACE,cAAe,AAEf,wBAA0B,CAC3B,AACD,iCACE,qBAAwB,CAEzB,AACD,4BACE,WAAY,AACZ,WAAY,AACZ,qBAAuB,CACxB,AACD,4CACE,eAAgB,AAChB,qBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACpB,AAID,mCACE,eAAgB,AAChB,qBAAsB,AACtB,UAAY,CACb,AACD,6BACE,YAAc,CACf,AACD,+BACE,eAAgB,AAChB,eAAgB,AAChB,qBAAsB,AACtB,UAAY,CACb,AACD,iCACE,sBAAwB,AACxB,UAAa,CACd,AACD,wCACE,YAAa,AACb,yBAA0B,AAC1B,UAAe,CAChB,AACD,2BACE,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,sBAAwB,AACxB,WAAe,AACf,qBAA0B,CAC3B,AACD,kCACE,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,wBAA0B,CAC3B,AAKD,wGACE,SAAa,CACd,AACD,wDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb","file":"tvorder.vue","sourcesContent":["\n.left-wrapper[data-v-d034a35a] {\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  background-color: #FFFFFF;\n  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);\n}\n.car-footer[data-v-d034a35a] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border-top: 5px solid #eee;\n  /*margin-top: 5px;*/\n  background-color: #fff;\n}\n.order-payment[data-v-d034a35a] {\n  font-size: 1em;\n  /*width:100%;*/\n  height: 40px;\n  line-height: 40px;\n  /*padding-left: 7px;*/\n  color: black;\n  border-bottom: 1px dashed grey;\n  margin-left: 18px;\n  margin-right: 18px;\n}\n.order-payment-num[data-v-d034a35a] {\n  font-size: 20px;\n  color: #ef5350;\n  line-height: 24px;\n}\n.operate-article-button[data-v-d034a35a] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 5px 0px 0px 0px;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n  color: #666666;\n  background-color: #FFFFFF;\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  font-weight: bold;\n  border: 1px solid black;\n}\n.order-operate-button[data-v-d034a35a] {\n  font-size: 1em;\n  /*width:100%;*/\n  height: 50px;\n  color: #fff;\n}\n.operate-button[data-v-d034a35a] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  margin: 5px 0px 0px 0px;\n  padding: 10px 15px;\n  border: 1px solid black;\n  background: #FFFFFF;\n  border-radius: 5px;\n  color: #666666;\n  height: 40px;\n  width: 90px;\n  font-size: 16px;\n  font-weight: bold;\n}\n.operate-button-push-order[data-v-d034a35a] {\n  background: #FFBF34;\n  border-radius: 5px;\n  border: none;\n  color: #ffffff;\n}\n.right-wrapper[data-v-d034a35a] {\n  height: 100%;\n  background-color: #F6F6F6;\n  /*border-left: 5px solid #F2F2F2;*/\n}\n.article-wrapper[data-v-d034a35a] {\n  height: 100%;\n  /*padding-bottom: 50px;*/\n  background-color: #eeeeee;\n}\n.article-info[data-v-d034a35a] {\n  height: 100%;\n  overflow-y: auto;\n  /*overflow-x: hidden;*/\n  /*margin-top: 10px;*/\n  padding: 10px;\n}\n\n/** 菜品信息  滚动条  begin  **/\n#familyWrapper[data-v-d034a35a]{\n  /*overflow-y:scroll;*/\n  overflow-x: hidden;\n}\n#familyWrapper[data-v-d034a35a]::-webkit-scrollbar {/*滚动条整体样式*/\n  width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/\n  height: 1px;\n}\n#familyWrapper[data-v-d034a35a]::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.2);\n}\n#familyWrapper[data-v-d034a35a]::-webkit-scrollbar-track {/*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n/** 菜品信息  滚动条  end  **/\n.family-wrapper[data-v-d034a35a] {\n  height: 100%;\n  /*border: 5px solid #F2F2F2;*/\n  overflow-y: auto;\n  background-color: #FFFFFF;\n  text-align: center;\n  position: relative;\n}\n.family-item[data-v-d034a35a] {\n  width: 100%;\n  /*margin-tops: 5px;*/\n  /*margin-bottom: 10px;*/\n  padding: 5px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 18px;\n  line-height: 20px;\n  white-space: normal;\n  position: relative;\n  border: none;\n}\n.family-item-active[data-v-d034a35a] {\n  background: #EEEEEE;\n  border-left: 5px solid #ffbf34 !important;\n  border: none;\n  color: #333333;;\n  border-radius: 0;\n}\n.pageButton[data-v-d034a35a] {\n  width: 100%;\n  position: absolute;\n  bottom: 85px;\n}\n.page-button-item[data-v-d034a35a] {\n  width: 80%;\n  /*background-color: #FFBF34;*/\n  text-align: center;\n  margin-bottom: 10px;\n  padding-left: 15px;\n  color: #1f2d3d;\n  border: 1px solid #666;\n}\n.pageButtonActive[data-v-d034a35a] {\n  background-color: #ffbf34;\n  color: #fff !important;\n  border: none !important;\n}\n.bottom-tool[data-v-d034a35a] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  padding-left: 10px;\n  /*border-top: 1px solid #d1dbe5;*/\n  /*box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);*/\n  background-color: #F6F6F6;\n}\n.panel-title[data-v-d034a35a] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  background-color: #FFFFFF;\n  color: #333333;\n  border-bottom: 5px solid #F2F2F2;\n  margin-bottom: 10px;\n}\n.panel-content[data-v-d034a35a] {\n\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  color: black;\n  padding-left: 5px;\n  padding-bottom: 2em;\n  border-bottom: 3px dashed transparent;\n  background: linear-gradient(white, white) padding-box,\n  repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.25em, white 0, white 0.75em);\n}\n\n/* 遮罩层 */\n.mask-layer[data-v-d034a35a] {\n  /*height:100%;*/\n  width: 100%;\n  position: absolute;\n  background-color: black;\n  opacity: 0.5;\n}\n.car-total[data-v-d034a35a] {\n  height: 50px;\n  line-height: 50px;\n  border-top: 5px solid #F2F2F2;\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n}\n.article-card[data-v-d034a35a] {\n  margin-bottom: 7px;\n  /*width: 119px;*/\n  width: 19%;\n  height: 32%;\n  margin-right: 1%;\n  cursor: pointer;\n}\n.article-card > .el-card[data-v-d034a35a] {\n  height: 100%;\n}\n.title-wrapper[data-v-d034a35a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /*height: 80px;*/\n  height: 56%;\n}\n.el-col-21[data-v-d034a35a] {\n  width: 85.5%;\n}\n.el-col-3[data-v-d034a35a] {\n  width: 14.5%;\n}\n.article-name[data-v-d034a35a] {\n  /*width: 100%;*/\n  font-size: 32px;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.article-count[data-v-d034a35a] {\n  position: relative;\n  top: 0px;\n  right: 0px;\n}\n.el-badge__content.is-fixed[data-v-d034a35a] {\n  top: 10px;\n  right: 20px;\n}\n.el-badge__content[data-v-d034a35a] {\n  height: 20px;\n  line-height: 20px;\n}\n.family-badge[data-v-d034a35a] {\n  top: 10px !important;\n  right: 20px !important;\n}\n.dialog-title-warp[data-v-d034a35a] {\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n}\n.dialog-title[data-v-d034a35a] {\n  font-family: \"SourceHanSansCN-Medium\";\n  font-size: 22px;\n  color: #666;\n  font-weight: bold;\n  vertical-align: middle;\n}\n.dialog-content[data-v-d034a35a] {\n  max-height: 400px;\n  overflow-y: auto;\n  margin: 0px 20px;\n  background-color: #eee;\n  padding: 0px 20px;\n}\n.dialog-content[data-v-d034a35a]::-webkit-scrollbar {\n  display: none\n}\n.dialog-dashed[data-v-d034a35a] {\n  padding: 1em;\n  border-top: 2px dashed transparent;\n  background: linear-gradient(white, white) padding-box,\n  repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.25em, white 0, white 0.75em);\n  margin-bottom: 10px;\n}\n\n/*     滚动条   begin     */\n.scrollbar[data-v-d034a35a]::-webkit-scrollbar {\n  /*    定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸   */\n  width: 10px;\n  height: 10px;\n}\n.scrollbar[data-v-d034a35a]::-webkit-scrollbar-track {\n  /*    定义滚动条的轨道，内阴影及圆角   */\n  background-color: #C0CCDA;\n  /*border-radius:6px;*/\n}\n.scrollbar[data-v-d034a35a]::-webkit-scrollbar-thumb {\n  /*  定义滑块，内阴影及圆角   */\n  background-color: #475669;\n  /*border-radius:6px;*/\n}\n\n/*     滚动条   end     */\n\n/*    购物车 table 样式    begin   */\n.car-table[data-v-d034a35a] {\n  width: 100%;\n  font-size: 14px;\n  /*border: 1px solid #dfe6ec;*/\n}\n.car-table-title-tr[data-v-d034a35a] {\n  background-color: #eef1f6;\n  height: 40px;\n  font-size: 17px;\n  color: #9B9B9B;\n}\n.car-table-body-tr[data-v-d034a35a] {\n  text-align: center;\n  height: 40px;\n  cursor: pointer;\n}\n.car-push-name[data-v-d034a35a] {\n  color: #20A0FF;\n}\n.car-remove-name[data-v-d034a35a] {\n  color: #FF4949;\n}\n.car-new-name[data-v-d034a35a] {\n  /*color: #13CE66;*/\n  color: black;\n}\n.car-table-body-tr td[data-v-d034a35a],\nth[data-v-d034a35a] {\n  /*border-top: 1px solid #dfe6ec;*/\n  border-bottom: 1px dashed #dfe6ec;\n}\n.car-table-body-tr-selected[data-v-d034a35a] {\n  background-color: #E5E9F2;\n}\n.car-table-body-package-tr[data-v-d034a35a] {\n  text-align: center;\n  height: 40px;\n  background-color: #FFFFFF;\n}\n\n/*.car-table-body-package-tr td:last-child{*/\n\n/*border-bottom: 1px solid #dfe6ec;*/\n\n/*}*/\n.car-table td[data-v-d034a35a] {\n  /*border-bottom: 1px solid #dfe6ec;*/\n}\n\n/*    购物车 table 样式    end   */\n\n/*加减样式*/\n.count-article[data-v-d034a35a] {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n  background-color: #58B7FF;\n  display: inline-block;\n}\n.red-circle[data-v-d034a35a] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  background: red;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n.blue-circle[data-v-d034a35a] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  background: #032EFF;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n.yellow-circle[data-v-d034a35a] {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  background: #ff4d51;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n\n/** 订单详情  滚动条  begin  **/\n#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar {\n  width: 1px;\n  height: 1px;\n}\n#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/\n  background: rgba(0,0,0,0.2);\n}\n#order-detail-wrapper[data-v-d034a35a]::-webkit-scrollbar-track {\n  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n/** 订单详情  滚动条  end  **/\n.el-button--primary[data-v-d034a35a] {\n  background-color: #000 !important;\n  color: #fff !important;\n  border: none;\n}\n\n/** 菜品信息 滚动条  **/\n#articleInfo[data-v-d034a35a] {\n  /*overflow-y: scroll;*/\n}\n#articleInfo[data-v-d034a35a]::-webkit-scrollbar { /*滚动条整体样式*/\n  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/\n  height: 4px;\n}\n#articleInfo[data-v-d034a35a]::-webkit-scrollbar-thumb { /*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.2);\n}\n#articleInfo[data-v-d034a35a]::-webkit-scrollbar-track { /*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n/** 菜品信息 滚动条  **/\n.pageButton[data-v-d034a35a] {\n  width: 100%;\n  /*margin-top: 140px;*/\n  position: absolute;\n  bottom: 50px;\n}\n.re-food-tag[data-v-d034a35a] {\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: darkgrey;\n  border-radius: 5px;\n}\n.order-page-wrapper[data-v-d034a35a] {\n  position: absolute;\n  top: 30%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-d034a35a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius: 50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-d034a35a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.article-page-wrapper[data-v-d034a35a] {\n  position: fixed;\n  top: 37%;\n  /*right: 118px;*/\n  right: 13%;\n  z-index: 10;\n}\n.article-page-wrapper > .pre-page[data-v-d034a35a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius: 50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.article-page-wrapper > .next-page[data-v-d034a35a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.change-order-content[data-v-d034a35a] {\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n}\n.change-order-content > li[data-v-d034a35a]:nth-child(2n) {\n  background-color: #F8F8F8;\n}\n.change-order-content > li > span[data-v-d034a35a] {\n  display: inline-block;\n}\n.change-order-content:nth-of-type(1) > li > span[data-v-d034a35a] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.change-order-content:not(:first-child) > li > span[data-v-d034a35a] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 16px;\n}\n.packate-title[data-v-d034a35a] {\n  display: inline-block;\n  /*margin: 0 0 5px 3px;*/\n  margin-top: 20px;\n  font-size: 18px;\n  color: #666;\n}\n.package-content-wrap[data-v-d034a35a] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.package-items[data-v-d034a35a] {\n  height: 84px;\n  /*line-height: 84px;*/\n  font-size: 1.1em;\n  text-align: center;\n  margin: 15px 10px 10px 3px;\n  padding: 0px 20px;\n  border-radius: 5px;\n  color: #666;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative;\n  padding-top: 20px;\n}\n.webpackPackage-items[data-v-d034a35a] {\n  font-size: 1.1em;\n  font-weight: bolder;\n  text-align: center;\n  margin: 15px 10px 15px 3px;\n  padding: 5px 20px;\n  border-radius: 10px;\n  color: #757575;\n  background-color: #f6f6f6;\n  cursor: pointer;\n  /*position: relative;*/\n}\n.not-sell[data-v-d034a35a] {\n  top: 0px !important;\n  right: 20px !important;\n  z-index: 10;\n}\n.package-item-click[data-v-d034a35a] {\n  color: #ffbf34;\n  /*background-color: #ffbf34;*/\n  border: 1px solid #ffbf34;\n}\n.refund-command[data-v-d034a35a] {\n  border: 1px solid black;\n  /*width: 200px;*/\n}\n.car-title[data-v-d034a35a] {\n  width: 100%;\n  color: #666;\n  vertical-align: middle;\n}\n.car-title .car-title-item[data-v-d034a35a] {\n  font-size: 14px;\n  display: inline-block;\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n.car-content[data-v-d034a35a] {\n  /*border-top: dashed 1px black;*/\n}\n.car-content-item[data-v-d034a35a] {\n  font-size: 14px;\n  word-wrap: break-word;\n  color: #666;\n}\n.hidden-dom[data-v-d034a35a] {\n  display: none;\n}\n.details-item[data-v-d034a35a] {\n  margin-top: 8px;\n  font-size: 14px;\n  word-wrap: break-word;\n  color: #666;\n}\n.details-button[data-v-d034a35a] {\n  border: 1px solid black;\n  color: black;\n}\n.details-button-active[data-v-d034a35a] {\n  border: none;\n  background-color: #ffbf34;\n  color: #FFFFFF;\n}\n.base-btn[data-v-d034a35a]{\n  width: 100%;\n  margin-top: 5px;\n  border-radius: 5px;\n  border: 1px solid black;\n  color: #333333;\n  background-color: #FFFFFF;\n}\n.base-btn-active[data-v-d034a35a]{\n  width: 100%;\n  margin-top: 5px;\n  border-radius: 5px;\n  border: none;\n  color: #fff;\n  background-color: #FFBF34;\n}\n/** 地方反复反反复复  **/\n.el-dialog__wrap > .el-dialog__body[data-v-d034a35a] {\n  padding: 0px;\n}\n.el-dialog__wrap > .el-dialog__header[data-v-d034a35a] {\n  padding: 0px;\n}\n.el-dialog__wrap > .el-dialog__headerbtn[data-v-d034a35a] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_parse_int__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_orderApi__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_articleApi__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_tableApi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_generalUtil__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_table_component_order_toolbar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_table_component_order_toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_table_component_order_toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_mixin__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuex__ = __webpack_require__(29);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








//import CarDetail from '../../table/component/basic/car-detail.vue'




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tvOrder',
    mixins: [__WEBPACK_IMPORTED_MODULE_9__mixins_mixin__["a" /* default */]],
    components: { orderToolbar: __WEBPACK_IMPORTED_MODULE_8__views_table_component_order_toolbar___default.a },
    data: function data() {
        return {

            isEditArticle: true,
            editArticleInfo: {},
            currentIndex: null,
            focusState: false, // 是否聚焦

            keyboardShow: false, // 是否显示键盘
            tempCurrentCarRowPrice: 0,

            isFans: false, // 是否开启粉丝价 0 粉丝价 1 原价
            isUseServicePrice: true, //是否开启服务费
            mealFeeNumber: 0, // 每一项菜品中所需要的餐盒的数量
            mealAllNumber: 0, // 总的餐盒的数量
            orderId: '',
            orderInfo: {},
            carTableHeight: 0,
            familyMap: {},
            currentFamilyId: '',
            articleMap: {},
            car: [],
            checkBox: {},
            currentCarTableRow: {
                index: null,
                info: {}
            },
            changeOrder: {
                isClick: false,
                isCheck: false,
                isCheckOne: false,
                flags: false,
                currentIndex: 0
            },
            pageButtonList: [this.$t('common.prePage'), this.$t('common.nextPage')],
            totalCount: 0,
            totalPrice: 0,
            articleWeightPackageDialog: {
                show: false, // 称重包弹层
                title: '', // 规格标题
                article: {}, // 当前菜品
                price: null //  新规格，价格以菜品表价格为基础(tb_article.price)，与 具体属性的差价相加(tb_article_unit_detail.price)
            },

            page: {
                pageIndex: 0,
                contentHeight: 0, //一共的高度
                onePageHeight: 0, //每一页的高度
                pageSize: 0, //页数
                allPageContentList: {}, //所有的内容
                onePageContentList: {} //每一页展示的内容
            },
            tableOrder: {
                distributionModeId: 1,
                tableNumber: 0,
                customerCount: 0,
                remark: '加菜'
            },
            familyWrapperHeight: 0,
            selectCurrentPages: 2,
            shopDet: {},
            shopModel: '',
            addCar: false,
            isCheckedOrder: false
        };
    },

    watch: {
        car: {
            handler: function handler(car) {
                this.totalCount = 0;
                this.totalPrice = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(car), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.count > 0) {
                            this.totalCount += __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_parse_int___default()(item.count);
                            this.totalPrice += item.price;
                        }
                        ;
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

                if (car.length > 0 && !this.currentCarTableRow.info.id) {
                    this.currentCarTableRow.index = null;
                    this.currentCarTableRow.info = [];
                }
            },
            deep: true
        },
        familyList: function familyList(val) {
            this.$store.dispatch('getArticleListByFamilyId', val[0].id || '');
            this.currentFamilyId = this.familyList[0].id;
        },
        articlePriceDialog: function articlePriceDialog(val) {
            console.log("articlePriceDialog", val);
        },
        articleUnitDialog: function articleUnitDialog(val) {
            console.log("单品 新规格", val);
        },
        packageDialog: function packageDialog(val) {
            console.log("套餐", val);
        }
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_vuex__["a" /* mapGetters */])({
        addCarArticle: 'addCarArticle',
        familyList: 'familyList',
        articleList: 'articleList',
        unitList: 'unitList',
        articlePriceList: 'articlePriceList',
        articlePriceDialog: 'articlePriceDialog',
        articleUnitDialog: 'articleUnitDialog',
        packageDialog: 'packageDialog'
    })),
    created: function created() {
        this.$store.dispatch('getFamilyList');
        this.$store.commit('restTempArticleList');
    },
    mounted: function mounted() {
        var that = this;
        this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_auth__["c" /* getSessionShopDet */])());
        this.shopModel = this.shopDet.shopMode;
        // 初始化 购物车 Table 的高度
        this.carTableHeight = document.body.clientHeight - 270;
        this.familyWrapperHeight = document.body.clientHeight - 170 - document.getElementById("pageButton").offsetHeight;
        // this.getFamilyList();
        this.initOrder();
        // 是否开启粉丝价
        this.isFans = this.isFansPrice();
        this.isUseService();
        this.$store.commit('isFans', this.isFans);
        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$on("keyText", function (keyText) {
            that.changeInput(keyText);
        });

        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$on("addOrder", function (result) {
            that.initOrder();
            that.$store.dispatch('getFamilyList');
            that.$store.commit('restTempArticleList');
        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$off('keyText');
        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$off('addOrder');
    },

    directives: {
        // 自动获取焦点
        focus: {
            update: function update(el, _ref) {
                var value = _ref.value;

                if (value) {
                    el.focus();
                }
            }
        }
    },
    methods: {
        // 是否开启粉丝价
        isFansPrice: function isFansPrice() {
            var fansState = this.shopDet.posPlusType;
            return fansState;
        },

        // 是否开启服务费
        isUseService: function isUseService() {
            this.isUseServicePrice = this.shopDet.isUseServicePrice;
        },
        currentFamily: function currentFamily(familyId) {
            this.currentFamilyId = familyId;
            this.$store.dispatch('getArticleListByFamilyId', familyId || '');
        },


        // 选择就餐模式
        choiceMode: function choiceMode(modeId) {
            this.tableOrder.distributionModeId = modeId;
        },

        //初始化订单
        initOrder: function initOrder() {
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["g" /* getOrderDetail */])(this.$route.params.orderId).then(function (res) {
                if (res.ok && res.data) {
                    console.log('getOrderDetail', res);
                    that.orderInfo = res.data;
                    that.initCar(that.orderInfo, that.shopDet);
                }
            });
        },
        choseArticle: function choseArticle(currentArticle) {
            // 选择菜品
            if (currentArticle.count >= currentArticle.current_working_stock) {
                return this.$message.warning(currentArticle.name + ' \u8D85\u51FA\u5E93\u5B58\u3002');
            }
            if (currentArticle.article_type === 1) {
                if (currentArticle.article_unit == 2) {
                    // 老规格
                    this.openArticlePriceDialog(currentArticle);
                } else if (currentArticle.article_unit == 5) {
                    // 新规格
                    this.openArticleUnitDialog(currentArticle);
                } else if (currentArticle.open_catty == 1) {
                    if (this.orderInfo.order_state >= 2) return this.$message.warning("当前订单无法选择重量包");
                    this.openArticleWeightPackageDialog(currentArticle);
                } else {
                    // 普通单品
                    this.addSingleArticleToCar(currentArticle);
                }
            } else {
                // 套餐
                this.openPackageDialog(currentArticle);
            }
        },


        /**
         *  单击此函数 选择菜品 展开套餐 出现选中框
         * */
        choseCarTableRow: function choseCarTableRow(article, index) {
            if (article.type === 3) {
                // 套餐
                article.isOpen = !article.isOpen;
            }
            this.currentCarTableRow.info = article;
            this.currentCarTableRow.index = index;
            this.tempCurrentCarRowPrice = this.currentCarTableRow.info.price;
            if (article.status == 3) {
                this.keyboardShow = true;
            }
            if (article.status != 3) {
                this.changeOrder.isClick = true;
            }
        },


        //===================
        // 编辑菜品开始
        //===================
        saveArticle: function saveArticle() {
            if (this.editArticleInfo.article.count == 0) {
                return this.$message.warning("当前菜品数量不能编辑为0");
            }
            if (this.editArticleInfo.article.checked == true) {
                this.focusState = false;
                this.isEditArticle = !this.isEditArticle;
                this.currentIndex = this.isEditArticle.index;
                this.editArticleInfo.article.checked == false;
            }
            this.keyboardShow = false;
        },
        deleteArticle: function deleteArticle(row) {
            var that = this;
            this.$confirm('是否删除', row.info.name || '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                for (var index in that.car) {
                    var item = that.car[index];
                    if (item.status == 3 && item.checked == true) {
                        that.car.splice(index, 1);
                        that.$store.commit("deleteArticleFromCar", item);
                    }
                }
            }).catch(function () {});
        },
        addArticle: function addArticle() {
            var articleType = this.editArticleInfo.article.type;
            if (articleType == 8 || articleType == 2 || articleType == 5 || articleType == 3) {
                return this.$message.warning(this.editArticleInfo.article.name + ' \u65E0\u6CD5\u76F4\u63A5\u7D2F\u52A0');
            }
            if (this.editArticleInfo.article.checked) {
                // this.focusState = true
                for (var index in this.car) {
                    var item = this.car[index];
                    if (item.status == 3 && item.checked == true) {
                        item.count++;
                        item.price = this.editArticleInfo.price * item.count;
                        this.$store.commit('addArticleToCar', item);
                    }
                }
            }
        },
        cutArticle: function cutArticle() {
            for (var index in this.car) {
                var item = this.car[index];
                if (item.status == 3 && item.checked == true) {
                    if (item.count <= 1) return this.$message.warning("菜品数量无法继续减少，请选择删除操作");
                    item.count--;
                    item.price = this.editArticleInfo.price * item.count;
                    this.$store.commit('cutArticleFromCar', item);
                }
            }
        },
        editInputFocus: function editInputFocus() {
            this.focusState = true;
            console.log('focusStatefocusState');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$emit("show-keyboard", "editArticleCount");
            }, 1);
        },
        editArticle: function editArticle() {
            // 编辑购物车中菜品信息
            var articleType = this.editArticleInfo.article.type;
            if (articleType == 8 || articleType == 2 || articleType == 5 || articleType == 3) {
                return this.$message.warning(this.editArticleInfo.article.name + ' \u65E0\u6CD5\u76F4\u63A5\u7F16\u8F91');
            }
            if (this.editArticleInfo.article.checked) {
                this.focusState = true;
                this.isEditArticle = !this.isEditArticle;
                this.currentIndex = this.isEditArticle.index;
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$emit("show-keyboard", "editArticleCount");
                }, 1);
            }
        },


        // 键盘事件
        changeInput: function changeInput(val) {
            if (val == "") {
                val = 0;
            }
            for (var index in this.car) {
                var item = this.car[index];
                if (item.checked == true && item.status == 3) {
                    // let family = this.familyMap[item.articleFamilyId]
                    // let article = this.articleMap[item.id]
                    // family.count = Math.floor(val);
                    // article.count = Math.floor(val);
                    var param = {
                        item: item,
                        keyValue: val
                    };
                    this.$store.commit("changeInput", param);
                    //this.$store.commit("changeInput", item, val)
                    item.count = +val;
                    item.price = this.editArticleInfo.price * val;
                    // if (val > article.current_working_stock) {
                    //   return this.$message.warning(`【 ${article.name }】 最多能买 ${article.current_working_stock} 份`)
                    // }
                    // if (val == 0) {
                    //   return this.$message.warning(`最少为一份`);
                    // }
                }
            }
        },


        //===================
        // 编辑菜品结束
        //===================


        /**
         * 单选
         * */
        checkOne: function checkOne(item, index) {

            var that = this;
            if (!this.isEditArticle) return;
            if (item.status !== 3) return;
            this.$set(item, "checked", !item.checked);
            this.$set(that.checkBox, "checked", false);
            if (!item.checked) {
                that.checkBox = {};
            } else {
                if (item == that.checkBox) {
                    that.checkBox = {};
                } else {
                    that.editArticleInfo = {
                        index: index,
                        price: item.price != 0 ? item.price / item.count : item.price,
                        article: item
                    };
                    that.checkBox = item;
                }
            }
        },

        // 添加普通单品到购物车
        addSingleArticleToCar: function addSingleArticleToCar(currentArticle) {
            // 添加 普通单品 到购物车
            this.$store.commit('increateArticleCount', currentArticle);
            this.$store.commit('addTempArticleList', currentArticle); //添加到tempArticleList
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(this.car), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;
                    // 如果购物车存在  则直接 +1
                    if (currentArticle.id === _item.id && _item.state === 0) {
                        _item.count++;
                        _item.price += parseFloat(currentArticle.price);
                        return;
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

            var item = {
                time: new Date().getTime(), // 用于区别购物车的菜品
                id: currentArticle.id,
                count: 1,
                type: 1,
                name: currentArticle.name,
                price: parseFloat(currentArticle.price), // 如果开启了粉丝价，并且没有折扣（ discount = 100 取粉丝价，），有折扣，原价*折扣价 ，没有开启粉丝价，原价*折扣价

                articleFamilyId: currentArticle.article_family_id,
                mealFeeNumber: currentArticle.meal_fee_number, // 餐盒费
                class: 'car-new-name',
                state: 0, // 新加入购物车
                status: 3,

                discount: !!currentArticle.discount ? currentArticle.discount : 100, // 折扣价

                isFans: this.isFans, // 是否开启粉丝价
                fansPrice: parseFloat(!!currentArticle.fans_price ? currentArticle.fans_price : 0)
            };
            this.car.push(item);
        },
        openArticlePriceDialog: function openArticlePriceDialog(currentArticle) {
            // 打开老规格弹框
            this.$store.dispatch('getArticlePriceListByArticleId', currentArticle);
        },
        choseArticlePriceItem: function choseArticlePriceItem(articlePrice) {
            // 选择 菜品的老规格
            this.$store.commit('choseArticlePrice', articlePrice);
        },


        //  老规格添加购物车
        addArticlePriceToCar: function addArticlePriceToCar(currentArticle) {
            var _this = this;

            //  老规格 添加到购物车
            this.addCar = true;
            this.$store.commit("addArticlePrceToCar", this.isFans);
            // if(this.addCarArticle.count == undefined || this.addCarArticle.count <=0){
            //   return;
            // }
            this.$store.commit('addTempArticleList', currentArticle); //添加到tempArticleList
            this.car.push(this.addCarArticle);
            this.$store.commit('increateArticleCount', currentArticle);
            setTimeout(function () {
                _this.addCar = false;
            }, 500);
        },
        openArticleUnitDialog: function openArticleUnitDialog(currentArticle) {
            // 打开新规格弹框
            this.$store.dispatch('getUnitListByArticleId', currentArticle);
        },
        choseUnit: function choseUnit(unit, detail) {
            // 选择 新规格
            if (unit.choice_type) {
                // 任选  choice_type = 1
                detail.state = !detail.state;

                this.articleUnitDialog.price = +this.articleUnitDialog.price + (detail.state ? +detail.price : -+detail.price);
            } else if (!unit.choice_type) {
                // 单选 choice_type = 0
                if (!detail.state) {
                    // 当前是 未选中状态  ，如果是选中状态，则不做操作
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(unit.details), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _detail = _step3.value;

                            if (_detail.state == 1) {
                                this.articleUnitDialog.price -= _detail.price;
                            }
                            _detail.state = 0;
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

                    detail.state = 1;
                    this.articleUnitDialog.price = +this.articleUnitDialog.price + +detail.price;
                } else {
                    this.$message.warning('【' + unit.name + '】 至少选择 1 项 ~');
                }
            }
        },


        // 新规格添加购物车
        addArticleUnitToCar: function addArticleUnitToCar(currentArticle) {
            var _this2 = this;

            // 新规格  添加到购物车
            this.addCar = true;
            setTimeout(function () {
                _this2.addCar = false;
            }, 1000);
            if (currentArticle.current_working_stock <= 0) {
                this.$message("当前菜品库存不足");
            }
            this.$store.commit('addUnitToCar', this.isFans);
            this.car.push(this.addCarArticle);
            this.$store.commit('addTempArticleList', currentArticle); //添加到tempArticleList
        },


        // 打开 称重包弹窗
        openArticleWeightPackageDialog: function openArticleWeightPackageDialog(currentArticle) {
            // 打开重量包弹窗
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api_articleApi__["b" /* getWeightPackageList */])(currentArticle.id).then(function (res) {
                console.log('getWeightPackageList', res);
                if (res.ok && res.data) {
                    var weightPackagekList = res.data;
                    that.articleWeightPackageDialog.show = true;
                    that.articleWeightPackageDialog.title = currentArticle.name;
                    var weight = 0;

                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(weightPackagekList), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var unit = _step4.value;
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(unit.list), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var temp = _step5.value;

                                    temp.state = 0;
                                }
                            } catch (err) {
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }

                            unit.list[0].state = 1;
                            that.articleWeightPackageDialog.tempName = unit.name;
                            that.articleWeightPackageDialog.name = unit.name + '(' + unit.list[0].name + ')';
                            weight = unit.list[0].weight;
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

                    currentArticle.weightPackagekList = weightPackagekList;
                    that.articleWeightPackageDialog.article = currentArticle;
                    that.articleWeightPackageDialog.tempPrice = currentArticle.catty_money;
                    that.articleWeightPackageDialog.price = that.articleWeightPackageDialog.tempPrice * weight;
                }
            });
        },


        // 选择称重包
        choiceWeightPackage: function choiceWeightPackage(weightPackagekList, detail) {
            // 选择 新规格
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(weightPackagekList), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var temp = _step6.value;

                    temp.state = 0;
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            detail.state = 1;
            this.articleWeightPackageDialog.name = this.articleWeightPackageDialog.tempName + '(' + detail.name + ')';
            this.articleWeightPackageDialog.price = this.articleWeightPackageDialog.tempPrice * detail.weight;
        },


        // 重量包添加到购物车
        addArticleWeightPackageToCar: function addArticleWeightPackageToCar(currentArticle) {
            var _this3 = this;

            // 称重包  添加到购物车
            this.addCar = true;
            setTimeout(function () {
                _this3.addCar = false;
            }, 500);
            var price = this.articleWeightPackageDialog.tempPrice;
            var articleName = currentArticle.name;
            var weight_package_detail_id = '';
            var weight = 0;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(currentArticle.weightPackagekList), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var unit = _step7.value;
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(unit.list), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var detail = _step8.value;

                            if (detail.state) {
                                weight_package_detail_id = detail.id;
                                price *= detail.weight;
                                articleName += '(' + detail.name + ')';
                                weight = detail.weight;
                            }
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            var article = {
                time: new Date().getTime(),
                id: currentArticle.id,
                weight_package_detail_id: weight_package_detail_id,
                count: 1,
                name: articleName,
                price: price, //
                type: 8, //
                articleFamilyId: currentArticle.article_family_id,
                mealFeeNumber: currentArticle.meal_fee_number || 0, // 餐盒费
                class: 'car-new-name',
                state: 0, // 新加入购物车
                status: 3,
                open_catty: 1,
                weight: weight,

                discount: !!currentArticle.discount ? currentArticle.discount : 100, // 折扣
                fansPrice: !!currentArticle.fans_price ? currentArticle.fans_price : 0,
                isFans: this.isFans // 是否开启粉丝价
            };
            this.car.push(article);
            this.$store.commit('increateArticleCount', currentArticle);
            this.$store.commit('addTempArticleList', currentArticle); //添加到tempArticleList
            this.articleWeightPackageDialog.show = false;
        },
        openPackageDialog: function openPackageDialog(currentArticle) {
            // 打开套餐弹框
            this.$store.dispatch('getMealByArticleId', currentArticle);
        },
        choseAttr: function choseAttr(attr, item) {
            // 选择套餐属性
            this.$store.commit('choseAttr', { attr: attr, item: item });
        },


        // 套餐 加入购物车
        addPackageToCar: function addPackageToCar(currentArticle) {
            var _this4 = this;

            this.addCar = true;
            setTimeout(function () {
                _this4.addCar = false;
            }, 1000);
            this.$store.commit('addAttrToCar', this.isFans);

            if (this.addCarArticle.articleFamilyId) {
                this.car.push(this.addCarArticle);
                this.$store.commit('increateArticleCount', currentArticle);
                this.$store.commit('addTempArticleList', currentArticle); //添加到tempArticleList
            }
        },
        goBack: function goBack() {
            var _this5 = this;

            if (this.car.length) {
                this.$confirm('购物车新增的餐品将会被 <span style="color:red;font-weight: bold;font-size: 14px;">清空</span>  ，确定返回么?', '提示', {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    _this5.$router.go(-1);
                }).catch(function () {});
            } else {
                this.$router.go(-1);
            }
        },
        cancel: function cancel() {
            var that = this;
            var cancleOrderId = this.$route.params.orderId || this.orderId;
            this.$confirm('订单将会被取消,确定取消么？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["a" /* cancelOrder */])(cancleOrderId).then(function (res) {
                    if (res.ok) {
                        if (that.shopModel == 2 || that.shopModel == 7) {
                            that.$router.push('/tvorder?payConfirm=true&orderType=all');
                        } else {
                            that.$router.push('/table?payConfirm=true&orderType=all');
                        }
                    } else {
                        that.$message.error(res.message);
                    }
                });
            }).catch(function () {});
        },
        checkedOrder: function checkedOrder() {
            var that = this;
            this.isCheckedOrder = true;
            var orderItem = [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(this.car), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var item = _step9.value;

                    if (item.state === 0) orderItem.push(item);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            console.log('this.car', this.car);
            console.log('orderItem', orderItem);
            if (orderItem.length == 0) {
                this.isCheckedOrder = false;
                this.$message.warning("请先添加菜品~");
                return;
            }
            that.makeOrder();
        },
        makeOrder: function makeOrder() {
            var _this6 = this;

            // 下单
            var that = this;
            var orderItem = [];
            // 如果是外带模式，则有餐盒费 否则，餐盒费为0
            var _shopDet = this.shopDet,
                mealFeePrice = _shopDet.mealFeePrice,
                isMealFee = _shopDet.isMealFee;

            var mealFeePriceOne = this.orderInfo.distribution_mode_id == 3 ? isMealFee ? mealFeePrice : 0 : 0;
            this.tableOrder.tableNumber = this.orderInfo.table_number;
            //this.tableOrder.distributionModeId = this.orderInfo.distribution_mode_id;
            this.tableOrder.customerCount = this.orderInfo.customer_count;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(this.car), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var item = _step10.value;

                    if (item.state === 0) {
                        this.mealAllNumber += item.mealFeeNumber * item.count;
                        item.mealFeeNumber = this.orderInfo.distribution_mode_id == 3 ? isMealFee ? item.mealFeeNumber * item.count : 0 : 0;
                        if (item.count == 0) {
                            return this.$message.warning('\u3010 ' + item.name + '\u3011 \u6700\u5C11\u4E3A 1 \u4EFD');
                        }
                        orderItem.push(item);
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            this.mealAllNumber = this.orderInfo.distribution_mode_id == 3 ? isMealFee ? this.mealAllNumber : 0 : 0;
            var pushOrderInfo = {
                masterOrderId: null,
                childrenOrderId: null,
                orderItems: orderItem,
                mealFeePrice: mealFeePriceOne * this.mealAllNumber,
                mealAllNumber: this.mealAllNumber,
                distributionModeId: this.tableOrder.distributionModeId,
                customerId: null
                //        let mealFeePriceOne = 1;
            };console.log('pushOrder参数', pushOrderInfo);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["h" /* pushOrder */])(pushOrderInfo).then(function (res) {
                //父id，子Id,订单菜品项
                console.log('pushOrder', res);
                _this6.isCheckedOrder = false;
                if (res.ok) {
                    that.pushOrderSuccess(that.orderInfo, res.data);
                } else {
                    return _this6.$message.warning(res.message);
                }
            });
        },
        pushOrderSuccess: function pushOrderSuccess(order, addOrderId) {
            if (this.shopModel == 2 || this.shopModel == 7) {
                this.$router.push("/pay/" + addOrderId);
            }
            // bus.$emit("refresh-turnover");
        },


        // 菜品分类分页
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
        orderPageOperation: function orderPageOperation(operation) {
            var orderDetailWrapper = document.getElementById("order-detail-wrapper");
            if (operation == 1) {
                // 下一页
                orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
            } else {
                //  上一页
                orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
            }
        },
        articlePageOperation: function articlePageOperation(operation) {
            var articleWrapper = document.getElementById("articleInfo");
            if (operation == 1) {
                // 下一页
                articleWrapper.scrollTop += articleWrapper.clientHeight;
            } else {
                //  上一页
                articleWrapper.scrollTop -= articleWrapper.clientHeight;
            }
        },


        // 套餐弹窗翻页
        combanPage: function combanPage(operation) {
            var orderDetailWrapper = document.getElementById("attrWrapper");
            if (operation == 1) {
                // 下一页
                orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
            } else {
                //  上一页
                orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
            }
        },
        printOrderBtn: function printOrderBtn() {
            printOrder(this.$route.params.orderId);
        },
        printKitchenBtn: function printKitchenBtn() {
            var _this7 = this;

            printKitchenTotal(this.$route.params.orderId, 1, 0, null, null, function () {
                _this7.$notify.success({ message: '打印成功！', duration: 1500 });
            });
        },
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        },
        formatDate: function formatDate(date) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_generalUtil__["a" /* formatDate */])(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
        }
    }
});

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(432);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("e73dc2e6", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(432, function() {
     var newContent = __webpack_require__(432);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('el-col', {
    staticClass: "left-wrapper",
    staticStyle: {
      "padding": "0",
      "margin": "0",
      "background-color": "#fff"
    },
    attrs: {
      "span": 7
    }
  }, [_c('el-row', {
    staticClass: "row-bg",
    staticStyle: {
      "height": "50px"
    },
    attrs: {
      "type": "flex",
      "justify": "space-around"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 9
    }
  }, [_c('el-button', {
    class: _vm.tableOrder.distributionModeId == 1 ? 'base-btn-active' : 'base-btn',
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choiceMode(1)
      }
    }
  }, [_vm._v("堂食\n        ")])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 9
    }
  }, [_c('el-button', {
    class: _vm.tableOrder.distributionModeId == 3 ? 'base-btn-active' : 'base-btn',
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.choiceMode(3)
      }
    }
  }, [_vm._v("外带\n        ")])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "5px",
      "background-color": "#eee"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "overflow-y": "auto",
      "background-color": "#FFFFFF",
      "padding-bottom": "10px"
    },
    style: ({
      height: _vm.carTableHeight + 'px'
    }),
    attrs: {
      "id": "order-detail-wrapper"
    }
  }, [_c('div', {
    staticClass: "order-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.orderPageOperation(-1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-top",
    staticStyle: {
      "font-size": "26px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.orderPageOperation(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px"
    }
  })])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "background-color": "#FFFFFF",
      "padding-left": "18px",
      "padding-right": "18px"
    }
  }, [_c('ul', {
    staticClass: "car-title"
  }, [_c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "20%",
      "text-align": "left",
      "text-indent": "0px"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.options')))]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "30%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleName')))]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleNum')))]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "30%",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articlePrice')))])]), _vm._v(" "), _vm._l((_vm.car), function(article, index) {
    return _c('ul', {
      staticClass: "car-title car-content",
      on: {
        "click": function($event) {
          return _vm.checkOne(article, index)
        }
      }
    }, [_c('hr', {
      staticStyle: {
        "border": "1px dashed #E0E0E0",
        "width": "100%"
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((article.type == 3 && !!article.tempRefundCount) ? false : true),
        expression: "(article.type == 3 && !!article.tempRefundCount)? false: true "
      }]
    }, [(article.checked) ? _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-align": "center"
      }
    }, [_c('svg', {
      staticStyle: {
        "width": "14px",
        "height": "14px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": "#icon-duihao"
      }
    })])]) : _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-align": "center",
        "visibility": "hidden"
      }
    }, [_c('svg', {
      staticStyle: {
        "width": "14px",
        "height": "14px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": "#icon-duihao"
      }
    })])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "40%"
      }
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "80%"
      }
    }, [_vm._v(_vm._s(article.name))]), _vm._v(" "), (article.notes) ? _c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "20px",
        "height": "20px",
        "text-align": "center",
        "vertical-align": "top",
        "background-color": "#75C2AF",
        "color": "#FFFFFF",
        "border-radius": "50%",
        "margin-left": "-4%"
      }
    }, [_c('i', {
      staticStyle: {
        "line-height": "20px",
        "text-align": "center",
        "font-size": "12px"
      }
    }, [_vm._v("加")])]) : _vm._e(), _vm._v(" "), (article.status == 3) ? _c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "20px",
        "height": "20px",
        "text-align": "center",
        "vertical-align": "top",
        "background-color": "#75C2AF",
        "color": "#FFFFFF",
        "border-radius": "50%",
        "margin-left": "-4%"
      }
    }, [_c('i', {
      staticStyle: {
        "line-height": "20px",
        "text-align": "center",
        "font-size": "12px"
      }
    }, [_vm._v("新")])]) : _vm._e()]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "vertical-align": "top",
        "text-align": "-webkit-left"
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (article.count),
        expression: "article.count"
      }],
      class: (!_vm.isEditArticle && article.checked == true) ? '' : 'hidden-dom',
      staticStyle: {
        "border": "1px solid black",
        "text-align": "center",
        "width": "40px"
      },
      attrs: {
        "type": "number"
      },
      domProps: {
        "value": (article.count)
      },
      on: {
        "change": function($event) {
          return _vm.editInputFocus()
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(article, "count", $event.target.value)
        }
      }
    }), _vm._v(" "), _c('span', {
      class: (!_vm.isEditArticle && article.checked == true) ? 'hidden-dom' : '',
      staticStyle: {
        "text-align": "left"
      }
    }, [_vm._v(_vm._s(article.count))])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "22%",
        "vertical-align": "top",
        "text-align": "right"
      }
    }, [_vm._v("\n              ¥" + _vm._s(_vm.formatMoney(article.price)) + "\n            ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item) {
      return (article.type == 3 && !article.tempRefundCount) ? _c('div', {
        staticStyle: {
          "margin-left": "5px"
        }
      }, [_c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "text-align": "center",
          "visibility": "hidden"
        }
      }), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "40%"
        }
      }, [_c('span', {
        staticStyle: {
          "display": "inline-block",
          "width": "80%"
        }
      }, [_vm._v("┕ " + _vm._s(item.name))])]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "vertical-align": "top"
        }
      }, [_vm._v("\n              " + _vm._s(item.count) + "\n            ")]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "vertical-align": "top",
          "text-align": "right"
        }
      }, [_vm._v("¥" + _vm._s(_vm.formatMoney(item.price)) + "\n            ")])]) : _vm._e()
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (article.tempRefundCount),
        expression: "article.tempRefundCount"
      }]
    }, [_c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-align": "center",
        "visibility": "hidden"
      }
    }, [_c('svg', {
      staticStyle: {
        "width": "14px",
        "height": "14px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": "#icon-duihao"
      }
    })])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "40%",
        "color": "#999999"
      }
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "80%",
        "text-decoration": "line-through"
      }
    }, [_vm._v(_vm._s(article.name))]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (article.tempRefundCount),
        expression: "article.tempRefundCount"
      }],
      staticStyle: {
        "display": "inline-block",
        "width": "20px",
        "height": "20px",
        "text-align": "center",
        "vertical-align": "top",
        "background-color": "#ef5350",
        "color": "#FFFFFF",
        "border-radius": "50%",
        "margin": "-4%"
      }
    }, [_c('i', {
      staticStyle: {
        "line-height": "20px",
        "text-align": "center",
        "font-size": "12px"
      }
    }, [_vm._v("退")])])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-decoration": "line-through",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n              " + _vm._s(article.tempRefundCount) + "\n            ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-decoration": "line-through",
        "color": "#999999",
        "vertical-align": "top",
        "text-align": "right"
      }
    }, [_vm._v("\n              ¥ " + _vm._s(_vm.formatMoney(article.tempRefundCount * article.unitPrice)) + "\n            ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item, index) {
      return (article.type == 3 && article.tempRefundCount) ? _c('div', {
        key: index,
        staticStyle: {
          "margin-left": "5px"
        }
      }, [_c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "text-align": "center",
          "visibility": "hidden"
        }
      }), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "40%"
        }
      }, [_c('span', {
        staticStyle: {
          "display": "inline-block",
          "width": "80%",
          "text-decoration": "line-through",
          "color": "#999999"
        }
      }, [_vm._v("┕ " + _vm._s(item.name))])]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "vertical-align": "top",
          "text-decoration": "line-through",
          "color": "#999999"
        }
      }, [_vm._v("\n              " + _vm._s(item.count) + "\n            ")]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "vertical-align": "top",
          "text-decoration": "line-through",
          "color": "#999999",
          "text-align": "right"
        }
      }, [_vm._v("\n              ¥" + _vm._s(_vm.formatMoney(item.price)) + "\n            ")])]) : _vm._e()
    })], 2)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "car-footer"
  }, [_c('el-row', {
    staticClass: "order-operate-button",
    staticStyle: {
      "margin-left": "18px",
      "margin-right": "18px"
    },
    attrs: {
      "type": "flex",
      "justify": "space-between"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 5
    }
  }, [(_vm.isEditArticle == true) ? _c('button', {
    staticClass: "operate-article-button",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.editArticle(_vm.currentCarTableRow)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.edit')) + "\n          ")]) : _c('button', {
    staticClass: "operate-article-button",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.saveArticle(_vm.currentCarTableRow)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.save')) + "\n          ")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('button', {
    staticClass: "operate-article-button",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.deleteArticle(_vm.currentCarTableRow)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.delete')) + "\n          ")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('button', {
    staticClass: "operate-article-button",
    on: {
      "click": function($event) {
        return _vm.addArticle(_vm.currentCarTableRow)
      }
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('button', {
    staticClass: "operate-article-button",
    on: {
      "click": function($event) {
        return _vm.cutArticle(_vm.currentCarTableRow)
      }
    }
  }, [_vm._v("-")])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "order-payment"
  }, [_c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('order.article')) + "："), _c('span', {
    staticClass: "order-payment-num"
  }, [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 14
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('order.totalNum')) + "："), _c('span', {
    staticClass: "order-payment-num"
  }, [_vm._v("¥ " + _vm._s(_vm.formatMoney(_vm.totalPrice)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "order-operate-button",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "type": "flex",
      "justify": "space-around"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 23
    }
  }, [_c('button', {
    staticClass: "operate-button operate-button-push-order",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "loading": _vm.isCheckedOrder
    },
    on: {
      "click": _vm.checkedOrder
    }
  }, [_vm._v(_vm._s(_vm.$t('order.checkedOrder')))])])], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "right-wrapper",
    staticStyle: {
      "position": "relative",
      "padding-top": "50px"
    },
    attrs: {
      "span": 17
    }
  }, [(_vm.shopModel == 2 || _vm.shopModel == 7) ? _c('order-toolbar', {
    staticStyle: {
      "position": "absolute",
      "top": "0",
      "left": "0"
    }
  }) : _vm._e(), _vm._v(" "), _c('el-row', {
    staticClass: "article-wrapper"
  }, [_c('el-col', {
    staticClass: "article-info",
    attrs: {
      "span": 20,
      "id": "articleInfo"
    }
  }, [_c('el-row', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "gutter": 5
    }
  }, [_c('div', {
    staticClass: "article-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.articlePageOperation(-1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-top",
    staticStyle: {
      "font-size": "26px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.articlePageOperation(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px"
    }
  })])]), _vm._v(" "), _vm._l((_vm.articleList), function(article) {
    return (article.activated != 0) ? _c('el-col', {
      key: article.id,
      staticClass: "article-card",
      staticStyle: {
        "padding": "0"
      },
      attrs: {
        "sm": 6,
        "md": 5
      },
      nativeOn: {
        "click": function($event) {
          return _vm.choseArticle(article)
        }
      }
    }, [_c('el-card', {
      staticStyle: {
        "position": "relative"
      },
      attrs: {
        "body-style": {
          padding: '0px',
          height: '100%'
        }
      }
    }, [(article.count > 0) ? _c('sup', {
      staticClass: "el-badge__content is-fixed"
    }, [_vm._v(_vm._s(article.count))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "title-wrapper"
    }, [_c('p', {
      staticClass: "article-name"
    }, [_vm._v("\n                  " + _vm._s(article.name.substring(0, 2)) + "\n                ")])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "text-align": "center",
        "background": "#f5f5f5",
        "height": "44%",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-direction": "column"
      }
    }, [_c('div', [_c('p', {
      staticStyle: {
        "font-size": "14px",
        "text-align": "center",
        "color": "#666"
      }
    }, [_vm._v("\n                    " + _vm._s(article.name.length > 7 ? article.name.substr(0, 7) + '...' : article.name) + "\n                  ")]), _vm._v(" "), (article.current_working_stock <= 0) ? _c('p', {
      staticStyle: {
        "font-size": "14px",
        "color": "red",
        "text-align": "center",
        "font-weight": "bold"
      }
    }, [_vm._v(_vm._s(_vm.$t('order.hasSold')))]) : _c('p', {
      staticStyle: {
        "font-size": "14px",
        "color": "#666",
        "text-align": "center"
      }
    }, [_vm._v("\n                    ¥" + _vm._s(_vm.formatMoney(article.open_catty == 1 ?
      article.catty_money : article.price)))])])])])], 1) : _vm._e()
  })], 2)], 1), _vm._v(" "), _c('el-col', {
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
  }, _vm._l((_vm.familyList), function(family, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.currentFamily(family.id)
        }
      }
    }, [_c('el-button', {
      staticClass: "family-item",
      class: _vm.currentFamilyId == family.id ? 'family-item-active' : '',
      attrs: {
        "size": "large"
      }
    }, [(family.count > 0) ? _c('sup', {
      staticClass: "el-badge__content is-fixed family-badge"
    }, [_vm._v(_vm._s(family.count))]) : _vm._e(), _vm._v("\n              " + _vm._s(family.name) + "\n            ")])], 1)
  }), 0), _vm._v(" "), _c('ul', {
    staticClass: "pageButton",
    attrs: {
      "id": "pageButton"
    }
  }, _vm._l((_vm.pageButtonList), function(item, index) {
    return _c('li', [_c('el-button', {
      staticClass: " page-button-item",
      class: _vm.selectCurrentPages == index ? 'pageButtonActive' : '',
      attrs: {
        "size": "large"
      },
      on: {
        "click": function($event) {
          return _vm.familyPages(index)
        }
      }
    }, [_vm._v(_vm._s(item) + "\n            ")])], 1)
  }), 0)])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.packageDialog.show,
      "width": "90%",
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.packageDialog, "show", $event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('el-tag', [_vm._v(_vm._s(_vm.$t('order.package')))]), _vm._v(" "), _c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.packageDialog.title))])], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-content scrollbar",
    attrs: {
      "id": "attrWrapper"
    }
  }, _vm._l((_vm.packageDialog.mealAttributionList), function(mealAttr) {
    return _c('ul', {
      key: mealAttr.id
    }, [_c('li', [_c('span', {
      staticClass: "packate-title"
    }, [_vm._v(_vm._s(mealAttr.name))]), _vm._v(" "), _c('div', {
      staticClass: "package-content-wrap"
    }, _vm._l((mealAttr.mealItemsInfo), function(item) {
      return _c('div', {
        key: item.id,
        staticClass: "package-items",
        class: item.checkedState ? 'package-item-click' : '',
        on: {
          "click": function($event) {
            return _vm.choseAttr(mealAttr, item)
          }
        }
      }, [(!item.activated) ? _c('sup', {
        staticClass: "el-badge__content is-fixed not-sell"
      }, [_vm._v(_vm._s(_vm.$t('order.soldOut')))]) : (item.isEmpty || item.current_working_stock <= 0) ? _c('sup', {
        staticClass: "el-badge__content is-fixed not-sell"
      }, [_vm._v(_vm._s(_vm.$t('order.hasSold')))]) : _vm._e(), _vm._v("\n              " + _vm._s(item.name)), _c('br'), _vm._v(" "), (item.price_dif > 0) ? _c('p', [_vm._v("￥" + _vm._s(item.price_dif))]) : _c('br')])
    }), 0)])])
  }), 0), _vm._v(" "), (_vm.packageDialog.mealAttributionList.length > 2) ? _c('div', {
    staticClass: "order-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.combanPage(-1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-top",
    staticStyle: {
      "font-size": "26px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.combanPage(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px"
    }
  })])]) : _vm._e(), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('span', {
    staticStyle: {
      "float": "left",
      "font-size": "30px"
    }
  }, [_vm._v("\n           ￥"), _c('font', {
    attrs: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.packageDialog.price))])], 1), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.packageDialog.show = false
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.addCar
    },
    on: {
      "click": function($event) {
        return _vm.addPackageToCar(_vm.packageDialog.article)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)]), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.articlePriceDialog.show,
      "width": "90%",
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.articlePriceDialog, "show", $event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('el-tag', [_vm._v(_vm._s(_vm.$t('order.oldUnit')))]), _vm._v(" "), _c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.articlePriceDialog.title))])], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-content scrollbar",
    attrs: {
      "id": "articlePriceWrapper"
    }
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "package-content-wrap"
  }, _vm._l((_vm.articlePriceList), function(articlePrice) {
    return _c('div', {
      key: articlePrice.id,
      staticClass: "package-items",
      class: articlePrice.checkedState ? 'package-item-click' : '',
      on: {
        "click": function($event) {
          return _vm.choseArticlePriceItem(articlePrice)
        }
      }
    }, [(articlePrice.isEmpty) ? _c('sup', {
      staticClass: "el-badge__content is-fixed not-sell"
    }, [_vm._v(_vm._s(_vm.$t('order.hasSold')))]) : _vm._e(), _vm._v("\n              " + _vm._s(_vm.articlePriceDialog.article.name + articlePrice.name)), _c('br'), _vm._v(" "), (articlePrice.price > 0) ? _c('p', [_vm._v("￥" + _vm._s(_vm.$utils.formatMoney(articlePrice.price)))]) : _c('br')])
  }), 0)])])]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('span', {
    staticStyle: {
      "float": "left",
      "font-size": "30px"
    }
  }, [_vm._v("\n            ￥"), _c('font', {
    attrs: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.articlePriceDialog.price))])], 1), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.articlePriceDialog.show = false
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.addCar
    },
    on: {
      "click": function($event) {
        return _vm.addArticlePriceToCar(_vm.articlePriceDialog.article)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)]), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.articleUnitDialog.show,
      "width": "90%",
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.articleUnitDialog, "show", $event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('el-tag', [_vm._v(_vm._s(_vm.$t('order.oldUnit')))]), _vm._v(" "), _c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.articleUnitDialog.title))])], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-content scrollbar",
    attrs: {
      "id": "articleUnitWrapper"
    }
  }, _vm._l((_vm.articleUnitDialog.unitList), function(unit) {
    return _c('ul', {
      key: unit.id
    }, [_c('li', [_c('span', {
      staticClass: "packate-title"
    }, [_vm._v(_vm._s(unit.name))]), _vm._v(" "), _c('div', {
      staticClass: "package-content-wrap"
    }, _vm._l((unit.details), function(detail) {
      return _c('span', {
        key: detail.id,
        staticClass: "package-items",
        class: detail.state ? 'package-item-click' : '',
        on: {
          "click": function($event) {
            return _vm.choseUnit(unit, detail)
          }
        }
      }, [_vm._v("\n                     " + _vm._s(detail.name)), _c('br'), _vm._v(" "), (detail.price > 0) ? _c('p', [_vm._v("￥" + _vm._s(_vm.$utils.formatMoney(detail.price)))]) : _c('br')])
    }), 0)])])
  }), 0), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('span', {
    staticStyle: {
      "float": "left",
      "font-size": "30px"
    }
  }, [_vm._v("\n            ￥"), _c('font', {
    attrs: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.articleUnitDialog.price))])], 1), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.articleUnitDialog.show = false
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.addCar
    },
    on: {
      "click": function($event) {
        return _vm.addArticleUnitToCar(_vm.articleUnitDialog.article)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)]), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.articleWeightPackageDialog.show,
      "width": "90%",
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.articleWeightPackageDialog, "show", $event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('el-tag', [_vm._v(_vm._s(_vm.$t('order.weightPackage')))]), _vm._v(" "), _c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.articleWeightPackageDialog.title))])], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-content scrollbar"
  }, _vm._l((_vm.articleWeightPackageDialog.article.weightPackagekList), function(weightPackagekList) {
    return _c('ul', {
      key: weightPackagekList.id
    }, [_c('li', [_c('span', {
      staticClass: "packate-title"
    }, [_vm._v(_vm._s(_vm.articleWeightPackageDialog.name))]), _vm._v(" "), _c('div', {
      staticClass: "package-content-wrap"
    }, _vm._l((weightPackagekList.list), function(detail) {
      return _c('span', {
        key: detail.id,
        staticClass: "package-items",
        class: detail.state ? 'package-item-click' : '',
        on: {
          "click": function($event) {
            return _vm.choiceWeightPackage(weightPackagekList.list, detail)
          }
        }
      }, [_vm._v("\n                     " + _vm._s(detail.name)), _c('br')])
    }), 0)])])
  }), 0), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('span', {
    staticStyle: {
      "float": "left",
      "font-size": "30px"
    }
  }, [_vm._v("\n            ￥"), _c('font', {
    attrs: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.articleWeightPackageDialog.price)))])], 1), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.articleWeightPackageDialog.show = false
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.addCar
    },
    on: {
      "click": function($event) {
        return _vm.addArticleWeightPackageToCar(_vm.articleWeightPackageDialog.article)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-d034a35a", module.exports)
  }
}

/***/ })

});