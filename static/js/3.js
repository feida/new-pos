webpackJsonp([3],{

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(495)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(546),
  /* scopeId */
  "data-v-644d19b8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/children/packaging.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] packaging.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-644d19b8", Component.options)
  } else {
    hotAPI.reload("data-v-644d19b8", Component.options)
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

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".order-page-wrapper-nomal[data-v-4991409e],.order-page-wrapper[data-v-4991409e]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-4991409e]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-4991409e],.order-page-wrapper>.pre-page[data-v-4991409e]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/basic/pagination.vue"],"names":[],"mappings":"AAOA,gFACE,kBAAmB,AACnB,QAAQ,AACR,WAAY,AACZ,UAAY,CACb,AACD,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAA0B,AAC1B,WAAY,AACZ,kBAAkB,AAElB,eAAgB,AAChB,UAAa,CAad","file":"pagination.vue","sourcesContent":["\n.order-page-wrapper[data-v-4991409e]{\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper-nomal[data-v-4991409e] {\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-4991409e]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-4991409e]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".bottomToolbar[data-v-ced15bc8]{bottom:0;width:100%;height:60px;line-height:60px;padding-left:10px;background-color:#fff}.bottomToolbarBtn[data-v-ced15bc8]{background-color:#000;width:80px;height:44px;font-size:18px;color:#fff;border-radius:5px}button[data-v-ced15bc8]:disabled{border:1px solid #ddd;background-color:#eef1f6;color:#bfcbd9}.btn-number[data-v-ced15bc8]{width:100%;height:50px;margin-top:15px;background-color:#f6f6f6;font-size:22px;font-weight:700}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/bottom-toolbar.vue"],"names":[],"mappings":"AACA,gCACI,SAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,mCACI,sBAAuB,AACvB,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CACtB,AACD,iCACI,sBAAuB,AACvB,yBAA0B,AAC1B,aAAe,CAClB,AACD,6BACI,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,yBAA0B,AAC1B,eAAgB,AAChB,eAAkB,CACrB","file":"bottom-toolbar.vue","sourcesContent":["\n.bottomToolbar[data-v-ced15bc8] {\n    bottom: 0px;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    padding-left: 10px;\n    background-color: #fff;\n}\n.bottomToolbarBtn[data-v-ced15bc8] {\n    background-color: #000;\n    width: 80px;\n    height: 44px;\n    font-size: 18px;\n    color: #fff;\n    border-radius: 5px;\n}\nbutton[data-v-ced15bc8]:disabled {\n    border: 1px solid #DDD;\n    background-color: #eef1f6;\n    color: #bfcbd9;\n}\n.btn-number[data-v-ced15bc8] {\n    width: 100%;\n    height: 50px;\n    margin-top: 15px;\n    background-color: #f6f6f6;\n    font-size: 22px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);

// exports


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

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_auth__ = __webpack_require__(15);

//
//
//
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
  name: "pagination",
  data: function data() {
    return {
      pageIndex: 1,
      pageSize: 20,
      currentPage: 1,
      shopModel: 0
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
    pageInfo: 'pageInfo'
  })),
  mounted: function mounted() {},
  created: function created() {
    this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["c" /* getSessionShopDet */])());
    this.shopModel = this.shopDet.shopMode;
  },

  methods: {
    pagination: function pagination(page) {
      var orderType = this.$route.query.orderType;
      var path = this.$route.path;
      this.toPages(path, orderType);
      if (page == -1) {
        this.pageIndex = this.pageInfo.currentPage - 1;
        if (this.pageIndex < 1) {
          this.pageIndex = 1;
          return this.$message.warning(this.$t('pagination.preTips'));
        }
        this.getPages(path, orderType);
      }
      if (page == 1) {
        this.pageIndex = this.pageInfo.currentPage + 1;
        if (this.pageIndex > this.pageInfo.totalPage) {
          this.pageIndex -= 1;
          return this.$message.warning(this.$t('pagination.nextTips'));
        }
        this.getPages(path, orderType);
      }
    },
    getPages: function getPages(path, orderType) {
      var page = { pageIndex: this.pageIndex };
      this.$store.commit('setPageIndex', page);
      sessionStorage.setItem("pageIndex", this.pageIndex);
      var ObjT = { distributionModeId: 1, page_index: this.pageIndex, search_code: '', page_size: 20 };
      var ObjP = { distributionModeId: 3, pageIndex: this.pageIndex, searchKey: '', tableNumber: '', pageSize: 20 };
      if (orderType == 'all') {
        if (path.indexOf('packaging') != -1) {
          this.$store.dispatch('getWaitAndNoPayOrderList', ObjP);
        } else if (this.shopModel == 2 || this.shopModel == 7) {} else {
          this.$store.dispatch('getAllTableAndOrderList', ObjT);
        }
      }
      if (orderType == 'payOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$store.dispatch('getPayOrder', ObjP);
        } else if (this.shopModel == 2 || this.shopModel == 7) {
          this.$store.dispatch('getHasCallTPOrderList', ObjT);
        } else {
          this.$store.dispatch('getPayOrder', ObjT);
        }
      }
      if (orderType == 'waitOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$store.dispatch('getWaitOrderList', ObjP);
        } else if (this.shopModel == 2 || this.shopModel == 7) {
          console.log("电视叫号 翻页");
          this.$store.dispatch('getWaitCallTPOrderList', ObjT);
        } else {
          console.log("普通 翻页");
          this.$store.dispatch('getWaitOrderList', ObjT);
        }
      }
      if (orderType == 'noPayOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$store.dispatch('getNoPayOrderList', ObjP);
        } else {
          this.$store.dispatch('getNoPayOrderList', ObjT);
        }
      }
      if (orderType == 'payingOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$store.dispatch('getPayingOrderList', ObjP);
        } else {
          this.$store.dispatch('getPayingOrderList', ObjT);
        }
      }
    },
    toPages: function toPages(path, orderType) {
      if (orderType == 'undefined') orderType = 'all';
      if (orderType == 'all') {
        if (path.indexOf('packaging') != -1) {
          this.$router.push('/table/packaging?orderType=all');
        } else {
          this.$router.push('/table/eatin?orderType=all');
        }
      } else if (orderType == 'payOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$router.push('/table/packaging?orderType=payOrder');
        } else {
          this.$router.push('/table/eatin?orderType=payOrder');
        }
      } else if (orderType == 'waitOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$router.push('/table/packaging?orderType=waitOrder');
        } else {
          this.$router.push('/table/eatin?orderType=waitOrder');
        }
      } else if (orderType == 'noPayOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$router.push('/table/packaging?orderType=noPayOrder');
        } else {
          this.$router.push('/table/eatin?orderType=noPayOrder');
        }
      } else if (orderType == 'payingOrder') {
        if (path.indexOf('packaging') != -1) {
          this.$router.push('/table/packaging?orderType=payingOrder');
        } else {
          this.$router.push('/table/eatin?orderType=payingOrder');
        }
      }
    }
  }
});

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_tableApi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_orderApi__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_auth__ = __webpack_require__(15);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/**
 * todo  后续优化
 * 操作事件，可对应更改为 even bus 事件传递，更为方便
 * 不同状态的对应操作按钮：https://sfault-image.b0.upaiyun.com/999/127/999127784-5acf13819be67_articlex
 * lmx
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bottomToolbar',
    props: ['currentTable'],
    data: function data() {
        return {
            shopDet: {},
            shopModel: '',
            bottomToolBtns: {
                callNumberBtn: false,
                orderBtn: false,
                payBtn: false,
                changeTableBtn: false,
                changeOrderBtn: false,
                canCelBtn: false,
                rushBtn: false,
                grantBtn: false
            },
            // currentTable: {},
            changeTableDialog: {
                show: false,
                newTableNum: ""
            }
        };
    },

    watch: {
        "$route.params": {
            handler: function handler(_ref) {
                var orderId = _ref.orderId;

                this.changeOrder(orderId);
            },

            deep: true
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_auth__["c" /* getSessionShopDet */])());
        this.shopModel = this.shopDet.shopMode;
        setTimeout(function () {
            _this.changeOrder(_this.$route.params.orderId);
        }, 500);
        __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$on("weightSuccess", function () {
            _this.changeOrder(_this.$route.params.orderId);
        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$off("weightSuccess");
        __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$off("normalOrder");
    },

    methods: {
        changeOrder: function changeOrder(orderId) {
            this.bottomToolBtns = {
                callNumberBtn: false,
                orderBtn: false,
                payBtn: false,
                changeTableBtn: false,
                changeOrderBtn: false,
                canCelBtn: false,
                checkedWeightBtn: false,
                rushBtn: false
            };
            if (!orderId) {
                return;
            }
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_tableApi__["f" /* getOrderInfoTest */])(orderId).then(function (res) {
                console.log('getOrderInfoTest', res);
                if (!res.ok) return;
                var orderInfo = res.data;
                var count = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(orderInfo.orderItemList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        count += item.count;
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

                __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit('articleCount', count);
                var orderState = orderInfo.order_state;
                var productionStatus = orderInfo.production_status;
                var payMode = orderInfo.pay_mode;
                var orderPayMode = orderInfo.pay_mode == 3 || orderInfo.pay_mode == 4;
                if (that.shopModel == 2 || that.shopModel == 7) {
                    //  电视叫号
                    that.bottomToolBtns = {
                        callNumberBtn: productionStatus == 2 || productionStatus == 3, //  待叫号 || 已叫号
                        changeOrderBtn: productionStatus == 2 || productionStatus == 3 //  待叫号 || 已叫号
                    };
                } else if (that.shopModel == 6) {
                    //  大BOSS
                    if (that.shopDet.allowFirstPay == 0) {
                        //  先付
                        that.bottomToolBtns = {
                            orderBtn: productionStatus == 0 || productionStatus == 2 && !orderPayMode || productionStatus == 2 && orderState == 2, //  待下单 || 已支付
                            payBtn: productionStatus != 0 && (orderState == 1 || orderState == 1 && (payMode == 3 || payMode == 4)), //  !待下单 && 未支付 || 付款中
                            changeTableBtn: orderState == 2, //  已消费 || 付款中
                            changeOrderBtn: orderState == 2,
                            canCelBtn: productionStatus != 2, //  待下单 || 未支付 || 付款中
                            rushBtn: productionStatus == 2
                        };
                    } else if (that.shopDet.allowAfterPay == 0) {
                        //  后付
                        that.bottomToolBtns = {
                            orderBtn: (orderState == 0 || orderState == 1) && payMode != 3 && payMode != 4, //  待下单 || 未支付  ；#3536 2018年4月24日 今日接到需求，后付款模式如果已支付则暂时不支持加菜
                            payBtn: productionStatus != 0 && (orderState == 1 || orderState == 1 && (payMode == 3 || payMode == 4)) && count > 0 || productionStatus != 0 && (orderState == 1 || orderState == 1 && (payMode == 3 || payMode == 4)) && orderInfo.grant_money > 0 && count == 0, //  未支付 || 付款中
                            changeTableBtn: orderState == 1, //  未支付 || 已消费
                            changeOrderBtn: productionStatus != 0 && (orderState == 1 || productionStatus == 2) || orderState == 2, //  已消费
                            canCelBtn: productionStatus == 0 && (orderState == 1 || orderState == 0), //  待下单 || 未支付 || 付款中
                            //canCelBtn: productionStatus != 2,                                                                               //  待下单 || 未支付 || 付款中
                            checkedWeightBtn: orderInfo.need_confirm_order_item, //  只要订单未核重，则都可以
                            rushBtn: productionStatus != 0 && (orderState == 1 || productionStatus == 2),
                            //grantBtn: productionStatus != 0 &&(orderState < 2 || productionStatus == 2),
                            grantBtn: orderState != 2
                        };
                    }
                }
                //  外带情况下 不允许加菜，换桌，取消订单操作
                if (that.$route.path.indexOf("/table/packaging") != -1) {
                    that.bottomToolBtns.orderBtn = orderState == 1;
                    that.bottomToolBtns.changeTableBtn = false;
                    that.bottomToolBtns.canCelBtn = false;
                }
            });
        },
        operation: function operation(type) {
            console.log(type);
            console.log('this.$route.params.orderId', this.$route.params.orderId);
            this.$emit(type);
        },
        toOrderPage: function toOrderPage() {
            if (this.shopModel == 2 || this.shopModel == 7) {} else {
                var orderId = this.$route.params.orderId;
                this.$router.push('/order/' + orderId);
            }
        },
        toPayPage: function toPayPage() {
            var that = this;
            var orderId = this.$route.params.orderId;
            that.$router.push('/pay/' + orderId);
        },
        releaseTable: function (_releaseTable) {
            function releaseTable() {
                return _releaseTable.apply(this, arguments);
            }

            releaseTable.toString = function () {
                return _releaseTable.toString();
            };

            return releaseTable;
        }(function () {
            var _this2 = this;

            var orderId = this.currentTable.order_id;
            var tableNumber = this.currentTable.table_number;
            releaseTable(orderId, tableNumber, function () {
                _this2.getOrderStateCount();
                _this2.$socket.updateTableState(tableNumber, true);
                _this2.$message("取消成功~");
                _this2.allOrder(false);
            });
        }),
        canCelOrder: function canCelOrder() {
            var _this3 = this;

            var cancelTitle = this.shopModel == 2 || this.shopModel == 7 ? "取餐码" : "桌位";
            var that = this;
            this.$confirm('\u662F\u5426\u8981\u53D6\u6D88   ' + cancelTitle + '   \u4E3A  \u3010' + this.currentTable.table_number + '\u3011 \u7684\u8BA2\u5355\u5417\uFF1F', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info'
            }).then(function () {
                var orderId = _this3.currentTable.order_id;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["a" /* cancelOrder */])(orderId).then(function (res) {
                    if (res.ok) {
                        that.$message.success(res.message);
                        __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit('cancelOrder');
                    } else {
                        that.$message.error(res.message);
                    }
                });
            }).catch(function () {});
        },
        changeOrder1: function changeOrder1() {
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["q" /* getDiscountInfo */])(this.currentTable.order_id).then(function (res) {
                console.log('getDiscountInfo', res);
                if (res.ok && res.data) {
                    if (res.data.discountMoney > 0) {
                        that.$message.warning('\u3010\u6298\u6263\uFF1A\uFFE5' + res.data.discountMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u6298\u6263\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u9000\u83DC\uFF01');
                        return;
                    }
                    if (res.data.easyMoney > 0) {
                        that.$message.warning('\u3010\u62B9\u96F6\uFF1A\uFFE5' + res.data.easyMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u62B9\u96F6\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u9000\u83DC\uFF01');
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit("changeOrder", "isChange");
                }
            });
        },
        callNumber: function callNumber() {
            var _this4 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["r" /* callNumber */])(this.currentTable.serial_number).then(function (res) {
                if (res.ok) {
                    console.log('callNumber', res);
                    //this.getOrderStateCount();
                    _this4.$store.commit("setCallNumber", _this4.currentTable);
                    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit('callNumber');
                }
            });
        },
        checkedWeight: function checkedWeight() {
            __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit("checkedWeight", "checkedWeight");
        },
        rushOrder: function rushOrder() {
            __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit("rushOrder", "rushOrder");
        },
        grantOrder: function grantOrder() {
            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["q" /* getDiscountInfo */])(this.currentTable.order_id).then(function (res) {
                console.log('getDiscountInfo', res);
                if (res.ok && res.data) {
                    if (res.data.discountMoney > 0) {
                        that.$message.warning('\u3010\u6298\u6263\uFF1A\uFFE5' + res.data.discountMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u6298\u6263\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u8D60\u83DC\uFF01');
                        return;
                    }
                    if (res.data.easyMoney > 0) {
                        that.$message.warning('\u3010\u62B9\u96F6\uFF1A\uFFE5' + res.data.easyMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u62B9\u96F6\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u8D60\u83DC\uFF01');
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit("grantOrder", "grantOrder");
                }
            });
        },
        openChangeTableDialog: function openChangeTableDialog() {
            this.changeTableDialog.show = true;
            this.changeTableDialog.newTableNum = "";
        },
        changeTable: function changeTable() {
            var _this5 = this;

            var tableInfo = {
                order_id: this.currentTable.order_id,
                from_table_number: this.currentTable.table_number,
                to_table_number: this.changeTableDialog.newTableNum
            };
            console.log('换桌参数', tableInfo);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_orderApi__["s" /* changeTable */])(tableInfo).then(function (res) {
                if (res.ok) {
                    _this5.$message("换桌成功!");
                    _this5.changeTableDialog.show = false;
                    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$emit('resetAllOrder');
                } else {
                    _this5.$message.warning(res.message);
                }
            });
        },
        changeTableKeyBoard: function changeTableKeyBoard(number) {
            var reg = /^[0-9]*[0-9][0-9]*$/g;
            if (reg.exec(number)) {
                this.changeTableDialog.newTableNum += number.toString();
            }
            if (number == "cleaAll") {
                this.changeTableDialog.newTableNum = "";
            }
            if (number == 'x') {
                if (this.changeTableDialog.newTableNum.length > 0) {
                    var count = this.changeTableDialog.newTableNum;
                    this.changeTableDialog.newTableNum = count.substring(0, count.length - 1);
                }
            }
        }
    }
});

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".table-wrapper[data-v-07dc3ebd]{display:flex;justify-content:start;flex-wrap:wrap}.table-item[data-v-07dc3ebd]{background-color:#fff;text-align:center;position:relative;width:19%;height:24%;margin:.5%;cursor:pointer;padding-top:18px;padding-bottom:18px}.table-number[data-v-07dc3ebd]{width:100%;font-size:34px;text-align:center}.table-card-active[data-v-07dc3ebd]{box-shadow:-1px 0 #ffbf34,0 -1px 0 #ffbf34,0 1px 0 #ffbf34,1px 0 0 #ffbf34;border:1px solid #ffbf34;color:#ffbf34}.table-card-pay-order[data-v-07dc3ebd]{background:green}.table-card-no-pay[data-v-07dc3ebd],.table-card-pay-order[data-v-07dc3ebd]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-no-pay[data-v-07dc3ebd]{background:#ef5350}.table-card-paying[data-v-07dc3ebd]{background:#ffbf34}.table-card-paying[data-v-07dc3ebd],.table-card-wait-order[data-v-07dc3ebd]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-wait-order[data-v-07dc3ebd]{background:#025ebb}.detail[data-v-07dc3ebd]{text-align:center}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/package-item.vue"],"names":[],"mappings":"AACA,gCACE,aAAc,AACd,sBAAuB,AACvB,cAAe,CAChB,AACD,6BACE,sBAA0B,AAG1B,kBAAmB,AACnB,kBAAmB,AAEnB,UAAW,AACX,WAAY,AACZ,WAAa,AAIb,eAAgB,AAChB,iBAAkB,AAClB,mBAAqB,CACtB,AACD,+BACE,WAAY,AAEZ,eAAgB,AAEhB,iBAAmB,CACpB,AACD,oCACE,2EAA+E,AAC/E,yBAA0B,AAC1B,aAAe,CAChB,AACD,uCAQE,gBAAiB,CAIlB,AACD,2EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,oCAQE,kBAAoB,CAIrB,AACD,oCAQE,kBAAoB,CAIrB,AACD,4EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,wCAQE,kBAAoB,CAIrB,AACD,yBACE,iBAAmB,CACpB","file":"package-item.vue","sourcesContent":["\n.table-wrapper[data-v-07dc3ebd] {\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap\n}\n.table-item[data-v-07dc3ebd] {\n  background-color: #FFFFFF;\n  /*margin-left: 10px;*/\n  /*margin-top: 5px;*/\n  text-align: center;\n  position: relative;\n  /*height: 17vh;*/\n  width: 19%;\n  height: 24%;\n  margin: 0.5%;\n  /*width: 88px;*/\n  /*margin-bottom: 5px;*/\n  /*margin-top: 5px;*/\n  cursor: pointer;\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n.table-number[data-v-07dc3ebd] {\n  width: 100%;\n  /*font-size: 4vh;*/\n  font-size: 34px;\n  /*font-weight: bold;*/\n  text-align: center;\n}\n.table-card-active[data-v-07dc3ebd] {\n  box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;\n  border: 1px solid #ffbf34;\n  color: #ffbf34;\n}\n.table-card-pay-order[data-v-07dc3ebd] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background:green;\n  border-radius: 50%;\n  /*border-top: 50px solid #26bb02;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-no-pay[data-v-07dc3ebd] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ef5350;\n  border-radius: 50%;\n  /*border-top: 50px solid #bb0202;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-paying[data-v-07dc3ebd]{\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ffbf34;;\n  border-radius: 50%;\n  /*border-top: 50px solid #F7BA2A;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-wait-order[data-v-07dc3ebd] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #025ebb;;\n  border-radius: 50%;\n  /*border-top: 50px solid #025ebb;*/\n  /*border-left: 30px solid transparent;*/\n}\n.detail[data-v-07dc3ebd] {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".packaging[data-v-644d19b8]{width:100%;height:100%}.left[data-v-644d19b8]{height:100%;position:relative;box-shadow:0 0 20px 0 rgba(0,0,0,.25),0 0 6px 0 rgba(0,0,0,.04)}.right[data-v-644d19b8]{height:100%;padding-bottom:50px;position:relative}.order-wrapper[data-v-644d19b8]{height:100%;background-color:#eee;min-width:665px}.order-info[data-v-644d19b8]{height:100%;overflow-y:auto;overflow-x:hidden}.order-card[data-v-644d19b8]{margin-bottom:15px;cursor:pointer}.order-card-active[data-v-644d19b8]{box-shadow:-1px 0 #ffbf34,0 -1px 0 #ffbf34,0 1px 0 #ffbf34,1px 0 0 #ffbf34;border:1px solid #ffbf34;color:#ffbf34}.order-card-pay-order[data-v-644d19b8]{position:absolute;top:0;right:0;width:15px;height:15px;background-color:#26bb02;border-radius:50%}.order-card-paying[data-v-644d19b8]{background-color:#f7ba2a}.order-card-no-pay[data-v-644d19b8],.order-card-paying[data-v-644d19b8]{position:absolute;top:0;right:0;width:15px;height:15px;border-radius:50%}.order-card-no-pay[data-v-644d19b8]{background-color:#bb0202}.order-card-wait-order[data-v-644d19b8]{position:absolute;top:0;right:0;width:15px;height:15px;background-color:#025ebb;border-radius:50%}.order-number[data-v-644d19b8]{width:100%;font-size:4vh;font-weight:700;text-align:center}.detail[data-v-644d19b8]{text-align:center}.bottom-tool[data-v-644d19b8]{bottom:0;width:100%;height:60px;line-height:60px;padding-left:10px;background-color:#f6f6f6}.order-page-wrapper[data-v-644d19b8]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-644d19b8]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-644d19b8],.order-page-wrapper>.pre-page[data-v-644d19b8]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/children/packaging.vue"],"names":[],"mappings":"AACA,4BACE,WAAY,AACZ,WAAa,CACd,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,+DAA0E,CAC3E,AACD,wBACE,YAAa,AACb,oBAAqB,AACrB,iBAAmB,CACpB,AAED,gCACE,YAAa,AACb,sBAA0B,AAC1B,eAAiB,CAClB,AACD,6BACE,YAAa,AACb,gBAAiB,AACjB,iBAAmB,CAGpB,AACD,6BACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,oCACE,2EAA+E,AAC/E,yBAA0B,AAC1B,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,iBAAmB,CAGpB,AACD,oCAME,wBAA0B,CAI3B,AACD,wEAVE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,WAAY,AACZ,YAAa,AAEb,iBAAmB,CAepB,AAXD,oCAME,wBAA0B,CAK3B,AACD,wCACE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,iBAAmB,CAGpB,AACD,+BACE,WAAY,AACZ,cAAe,AACf,gBAAkB,AAClB,iBAAmB,CACpB,AACD,yBACE,iBAAmB,CACpB,AAED,8BAEE,SAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,wBAA0B,CAC3B,AACD,qCACE,kBAAmB,AACnB,QAAQ,AACR,WAAY,AACZ,UAAY,CACb,AACD,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAA0B,AAC1B,WAAY,AACZ,kBAAkB,AAElB,eAAgB,AAChB,UAAa,CAad","file":"packaging.vue","sourcesContent":["\n.packaging[data-v-644d19b8]{\n  width: 100%;\n  height: 100%;\n}\n.left[data-v-644d19b8]{\n  height: 100%;\n  position: relative;\n  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);\n}\n.right[data-v-644d19b8]{\n  height: 100%;\n  padding-bottom: 50px;\n  position: relative;\n}\n/*  table   begin   */\n.order-wrapper[data-v-644d19b8] {\n  height: 100%;\n  background-color: #eeeeee;\n  min-width: 665px;\n}\n.order-info[data-v-644d19b8] {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  /*margin-top: 5px;*/\n  /*padding: 5px;*/\n}\n.order-card[data-v-644d19b8] {\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.order-card-active[data-v-644d19b8] {\n  box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;\n  border: 1px solid #ffbf34;\n  color: #ffbf34;\n}\n.order-card-pay-order[data-v-644d19b8] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 15px;\n  height: 15px;\n  background-color: #26bb02;\n  border-radius: 50%;\n  /*border-top: 50px solid #26bb02;*/\n  /*border-left: 30px solid transparent;*/\n}\n.order-card-paying[data-v-644d19b8]{\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 15px;\n  height: 15px;\n  background-color: #F7BA2A;\n  border-radius: 50%;\n  /*border-top: 50px solid #F7BA2A;*/\n  /*border-left: 30px solid transparent;*/\n}\n.order-card-no-pay[data-v-644d19b8] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 15px;\n  height: 15px;\n  background-color: #bb0202;\n  border-radius: 50%;\n\n  /*border-top: 50px solid #bb0202;*/\n  /*border-left: 30px solid transparent;*/\n}\n.order-card-wait-order[data-v-644d19b8] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 15px;\n  height: 15px;\n  background-color: #025ebb;\n  border-radius: 50%;\n  /*border-top: 50px solid #025ebb;*/\n  /*border-left: 30px solid transparent;*/\n}\n.order-number[data-v-644d19b8] {\n  width: 100%;\n  font-size: 4vh;\n  font-weight: bold;\n  text-align: center;\n}\n.detail[data-v-644d19b8] {\n  text-align: center;\n}\n/*  table   end   */\n.bottom-tool[data-v-644d19b8] {\n  /*position: absolute;*/\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  padding-left: 10px;\n  background-color: #F6F6F6;\n}\n.order-page-wrapper[data-v-644d19b8]{\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-644d19b8]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-644d19b8]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(384);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("4c3a175a", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(384, function() {
     var newContent = __webpack_require__(384);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("371a961c", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(385, function() {
     var newContent = __webpack_require__(385);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(433)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(396),
  /* template */
  __webpack_require__(437),
  /* scopeId */
  "data-v-4991409e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/basic/pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4991409e", Component.options)
  } else {
    hotAPI.reload("data-v-4991409e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(434)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(397),
  /* template */
  __webpack_require__(438),
  /* scopeId */
  "data-v-ced15bc8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/bottom-toolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bottom-toolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ced15bc8", Component.options)
  } else {
    hotAPI.reload("data-v-ced15bc8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.pageInfo.totalPage > 1) ? _c('div', {
    staticClass: "order-page-wrapper",
    staticStyle: {
      "right": "10%"
    }
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.pagination(-1)
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
        return _vm.pagination(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px"
    }
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-4991409e", module.exports)
  }
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.bottomToolBtns.callNumberBtn || _vm.bottomToolBtns.orderBtn || _vm.bottomToolBtns.payBtn || _vm.bottomToolBtns.payBtn || _vm.bottomToolBtns.changeOrderBtn || _vm.bottomToolBtns.changeTableBtn || _vm.bottomToolBtns.rushBtn || _vm.bottomToolBtns.checkedWeightBtn || _vm.bottomToolBtns.canCelBtn) ? _c('el-row', {
    staticClass: "bottomToolbar"
  }, [((_vm.shopModel == 2 || _vm.shopModel == 7) && _vm.bottomToolBtns.callNumberBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.callNumberBtn
    },
    on: {
      "click": _vm.callNumber
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.callBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.orderBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.orderBtn
    },
    on: {
      "click": _vm.toOrderPage
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.orderBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.payBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.payBtn
    },
    on: {
      "click": _vm.toPayPage
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.payBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.bottomToolBtns.changeOrderBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.changeOrderBtn
    },
    on: {
      "click": _vm.changeOrder1
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.changeOrderBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.changeTableBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.changeTableBtn
    },
    on: {
      "click": function($event) {
        return _vm.openChangeTableDialog()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.changeTableBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.rushBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.rushBtn
    },
    on: {
      "click": _vm.rushOrder
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.rushBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.grantBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.grantBtn
    },
    on: {
      "click": _vm.grantOrder
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.grantBtn')) + "\n  ")]) : _vm._e(), _vm._v(" "), ((_vm.shopModel != 2 && _vm.shopModel != 7) && _vm.bottomToolBtns.canCelBtn) ? _c('el-button', {
    staticClass: "bottomToolbarBtn",
    attrs: {
      "size": "large",
      "disabled": !_vm.bottomToolBtns.canCelBtn
    },
    on: {
      "click": _vm.canCelOrder
    }
  }, [_vm._v(_vm._s(_vm.$t('bottomBar.canCelBtn')) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.$t('bottomBar.currentTable') + _vm.currentTable.table_number,
      "visible": _vm.changeTableDialog.show,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.changeTableDialog, "show", $event)
      }
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": _vm.$t('common.placeholder')
    },
    model: {
      value: (_vm.changeTableDialog.newTableNum),
      callback: function($$v) {
        _vm.$set(_vm.changeTableDialog, "newTableNum", $$v)
      },
      expression: "changeTableDialog.newTableNum"
    }
  })], 1)])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_vm._l((9), function(i) {
    return _c('el-col', {
      key: i,
      attrs: {
        "span": 8
      }
    }, [_c('el-button', {
      staticClass: "btn-number",
      on: {
        "click": function($event) {
          return _vm.changeTableKeyBoard(i)
        }
      }
    }, [_vm._v(_vm._s(i))])], 1)
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-button', {
    staticClass: "btn-number",
    on: {
      "click": function($event) {
        return _vm.changeTableKeyBoard(0)
      }
    }
  }, [_vm._v("0")])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-button', {
    staticClass: "btn-number",
    on: {
      "click": function($event) {
        return _vm.changeTableKeyBoard('cleaAll')
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.clear')))])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-button', {
    staticClass: "btn-number",
    on: {
      "click": function($event) {
        return _vm.changeTableKeyBoard('x')
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-backspace",
    staticStyle: {
      "font-size": "28px"
    }
  })])], 1)], 2), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.changeTableDialog.show = false
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.changeTable
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-ced15bc8", module.exports)
  }
}

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_order_toolbar_vue__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_order_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_order_toolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_bottom_toolbar_vue__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_bottom_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__component_bottom_toolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_package_item__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_package_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__component_package_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_basic_pagination__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_basic_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__component_basic_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bus__ = __webpack_require__(19);

//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'packaging',
  components: {
    orderToolbar: __WEBPACK_IMPORTED_MODULE_1__component_order_toolbar_vue___default.a,
    bottomToolbar: __WEBPACK_IMPORTED_MODULE_2__component_bottom_toolbar_vue___default.a,
    packageItem: __WEBPACK_IMPORTED_MODULE_3__component_package_item___default.a,
    pagination: __WEBPACK_IMPORTED_MODULE_4__component_basic_pagination___default.a
  },
  data: function data() {
    return {
      orderList: [],
      currentOrder: {},
      currentTable: {
        table_number: ''
      },
      orderStateCountObj: {
        payOrderCount: 0,
        waitOrderCount: 0,
        noPayOrderCount: 0,
        payingOrderCount: 0
      },
      searchKey: "",
      shopDet: {},
      shopModel: '',
      callCount: {
        waitCallCount: 0,
        hasCalledCount: 0
      },
      page_index: 1,
      totalPage: 0,
      curPage: 0,
      clientWidth: 0,
      currentOrderType: "all"
    };
  },
  created: function created() {
    this.shopDet = JSON.parse(sessionStorage.getItem("shopDet"));
    this.shopModel = this.shopDet.shopMode;
    //this.allOrder()
    //this.removeEventListen();
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["a" /* mapGetters */])({
    tableAndOrderList: 'tableAndOrderList',
    orderInfo: 'orderInfo',
    pageInfo: 'pageInfo'
  })),
  mounted: function mounted() {
    var that = this;
    //this.startEventListen();
    this.getClientWidth();
    this.initTableAndOrderList();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeEventListen();
  },

  methods: {
    changeOrderType: function changeOrderType(type) {
      this.currentOrderType = type;
      this.$store.commit("setOrderType", type);
      this.$router.push("/table/packaging" + "?orderType=" + type);
    },
    initTableAndOrderList: function initTableAndOrderList() {
      this.currentOrderType = this.$route.query.orderType;
      if (this.currentOrderType == 'undefined') this.currentOrderType = 'all';
      if (this.shopModel == 2 || this.shopModel == 7) {
        if (this.currentOrderType == 'all') {
          this.$router.push('/tvorder?orderType=all');
        } else if (this.currentOrderType == 'wait') {}
      } else {
        console.log('this.currentOrderType', this.currentOrderType);
        //this.$store.dispatch('getAreaList')
        var pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
        var query = {
          page_index: pageIndex,
          ver_code: '',
          table_number: '',
          distribution_mode: 3
        };
        this.$store.dispatch('getWaitAndNoPayOrderList', query);
      };
    },
    getClientWidth: function getClientWidth() {
      this.clientWidth = document.getElementById("tableInfo").clientWidth;
    },

    /*allOrder (){
      let pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
      var Obj = {distributionModeId: 3, pageIndex: pageIndex, searchKey: "", tableNumber: ""}
      this.$store.dispatch('getWaitAndNoPayOrderList', Obj);
      this.getOrderStateCount();
      this.currentOrderType = 'all'
      this.$router.push("/table/packaging"+"?orderType=all");
    },
    payOrder (){
      var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
      this.$store.dispatch('getPayOrder', Obj)
      this.getOrderStateCount();
      this.currentOrderType = 'payOrder'
      this.$router.push("/table/packaging"+"?orderType=payOrder");
    },
    waitOrder (){
      var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
      this.$store.dispatch('getWaitOrderList', Obj)
      this.getOrderStateCount();
      this.currentOrderType = 'waitOrder'
      this.$router.push("/table/packaging"+"?orderType=waitOrder");
    },
    noPayOrder (){
      var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
      this.$store.dispatch('getNoPayOrderList', Obj)
      this.currentOrderType = 'noPayOrder'
      this.getOrderStateCount();
      this.$router.push("/table/packaging"+"?orderType=noPayOrder");
    },
    payingOrder (){
      var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
      this.$store.dispatch('getPayingOrderList', Obj)
      this.$router.push("/table/packaging"+"?orderType=payingOrder");
      this.currentOrderType = 'payingOrder'
      this.getOrderStateCount();
    },
     getOrderStateCount(){
      orderStateCount(3, (data)=>{
        this.orderStateCountObj = data;
      })
    },*/

    startEventListen: function startEventListen() {
      var _this = this;

      var that = this;
      __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$on('wsNewOrder', function () {
        _this.allOrder(true);
        _this.getOrderStateCount();
      });
      __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$on('searchKey', function (searchKey) {
        setTimeout(function () {
          if (that.shopModel == 2 || that.shopModel == 7 || that.shopModel == 6 && that.shopDet.allowFirstPay == 0) {
            // 先付
            that.searchKey = searchKey;
            that.tableNumber = searchKey;
          } else if (that.shopModel == 6 && that.shopDet.allowAfterPay == 0) {
            // 后付 结算单
            that.tableNumber = searchKey;
          }
          that.searchTable();
        }, 50);
      });
    },
    removeEventListen: function removeEventListen() {
      // 清除注册的监听事件  避免重复注册，重复触发
      __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$off("wsNewOrder");
      __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$off("searchKey");
    },
    searchTable: function searchTable() {
      var path = this.$route.path;
      if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "payOrder") {
        this.payOrder();
      } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "waitOrder") {
        this.waitOrder();
      } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "noPayOrder") {
        this.noPayOrder();
      } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "payingOrder") {
        this.payingOrder();
      } else if (path.indexOf("table/packaging") != -1 && (this.currentOrderType == "all" || this.currentOrderType == "undefined")) {
        var Obj = { distributionModeId: 3, pageIndex: 1, searchKey: this.searchKey };
        this.$store.dispatch('getWaitAndNoPayOrderList', Obj);
      }
    },
    changeOrder: function changeOrder() {
      // 改单 退菜
      var that = this;
      selectOrderDiscount(this.$route.params.orderId, function (discountInfo) {
        if (discountInfo.orderPosDiscountMoney > 0) {
          that.$message.warning('\u3010\u6298\u6263\uFF1A\uFFE5' + discountInfo.orderPosDiscountMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u6298\u6263\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u9000\u83DC\uFF01');
          return;
        }
        if (discountInfo.eraseMoney > 0) {
          that.$message.warning('\u3010\u62B9\u96F6\uFF1A\uFFE5' + discountInfo.eraseMoney + '\u3011\u4E3B\u8BA2\u5355\u6216\u8005\u5B50\u8BA2\u5355\u8FDB\u884C\u8FC7\u62B9\u96F6\u64CD\u4F5C\uFF0C\u6682\u4E0D\u5141\u8BB8\u9000\u83DC\uFF01');
          return;
        }
        __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$emit("changeOrder", "isChange");
      });
    }
  }
});

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "package-item",
  props: ['tableAndOrderList'],
  data: function data() {
    return {
      clientWidth: 0,
      currentTable: {},
      shopModel: 6
    };
  },
  created: function created() {
    this.shopDet = JSON.parse(sessionStorage.getItem("shopDet"));
    this.shopModel = this.shopDet.shopMode;
  },
  mounted: function mounted() {
    this.clientWidth = document.getElementById("tableInfo").clientWidth;
  },

  watch: {
    tableAndOrderList: function tableAndOrderList(params) {
      this.autoChoseTable();
    },
    currentTable: function currentTable(newValue, oldValue) {
      this.$emit('update:currentTable', newValue);
    }
  },
  beforeDestroy: function beforeDestroy() {},

  methods: {
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money);
    },
    choseTable: function choseTable(table) {
      this.currentTable = table;
      var orderType = this.$route.query.orderType;
      if (table.id) {
        this.$router.push('/table/packaging/detail/' + table.id + '?tableNumber=' + table.table_number + '&orderType=' + orderType);
      } else {
        this.$router.push('/table/packaging/console/' + table.table_number + '?orderType=' + orderType);
      }
    },
    cardActiveClass: function cardActiveClass(table) {
      if (table.id) {
        return { 'table-card-active': this.currentTable.id + (this.currentTable.id ? this.currentTable.id : "") == table.id + table.id };
      } else {
        return { 'table-card-active': this.currentTable.id == table.id };
      }
    },
    tableCardClass: function tableCardClass(table) {
      var cardClass = [];
      if (table.id) {
        if (table.production_status === 0) {
          //  待下单
          cardClass.push("table-card-wait-order");
        } else if (table.order_state === 1 && (table.pay_mode === 3 || table.pay_mode === 4)) {
          //  付款中
          cardClass.push("table-card-paying");
        } else if (table.order_state === 1) {
          //  未支付
          cardClass.push("table-card-no-pay");
        } else {
          //  已支付
          cardClass.push("table-card-pay-order");
        }
      }
      return cardClass;
    },
    autoChoseTable: function autoChoseTable() {
      // 自动定位桌号
      var tableNumber = this.$route.params.tableNumber;
      var orderId = this.$route.params.orderId;

      if (tableNumber) {
        var tables = this.tableAndOrderList.map(function (item) {
          return item;
        }).filter(function (item) {
          return item.table_number == tableNumber;
        });
        if (tables && tables.length > 0) {
          this.choseTable(tables[0]);
        } else {
          this.choseTable(this.tableAndOrderList[0]);
        }
      } else if (orderId && orderId != 'undefined') {
        //  路由参数中添加 tableNumber 查询参数，在这里直接定位到桌位，然后自动选择。
        var _num = this.$route.query.tableNumber;
        if (_num && _num != "undefined") {
          var tables = this.tableAndOrderList.map(function (item) {
            return item;
          }).filter(function (item) {
            return item.table_number == _num;
          });
          if (tables && tables.length > 0) {
            this.choseTable(tables[0]);
          } else {
            this.choseTable(this.tableAndOrderList[0]);
          }
        } else {

          this.$router.push("/table/packaging/detail/" + orderId + '?orderType=all');
        }
      } else {
        if (this.tableAndOrderList && this.tableAndOrderList.length > 0) {
          this.choseTable(this.tableAndOrderList[0]);
        } else {
          this.$router.push("/table/packaging?orderType=all");
        }
      }
    },
    getTimeDiff: function getTimeDiff(date) {
      //  得到相差的分钟值
      var currentDate = new Date().getTime();
      var diff = currentDate - date;
      var m = parseInt(diff / (1000 * 60));
      if (diff <= 0) {
        return "刚刚";
      } else if (m == 0) {
        return parseInt(diff / 1000) + " 秒";
      } else if (m < 60) {
        return m + " 分钟";
      } else {
        return parseInt(m / 60) + " 小时";
      }
    }
  }
});

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(405);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("384ee592", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(405, function() {
     var newContent = __webpack_require__(405);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(424);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("127faeb7", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(424, function() {
     var newContent = __webpack_require__(424);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(476)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(527),
  /* scopeId */
  "data-v-07dc3ebd",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/package-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] package-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07dc3ebd", Component.options)
  } else {
    hotAPI.reload("data-v-07dc3ebd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table-wrapper"
  }, _vm._l((_vm.tableAndOrderList), function(table, index) {
    return _c('div', {
      key: index,
      staticClass: "table-item",
      class: _vm.cardActiveClass(table),
      on: {
        "click": function($event) {
          return _vm.choseTable(table)
        }
      }
    }, [(table.id) ? _c('div', {
      class: _vm.tableCardClass(table)
    }) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "table-number"
    }, [_vm._v(_vm._s(table.table_number || _vm.$t('tableItem.unknown')))]), _vm._v(" "), (table.order_id) ? _c('div', {
      staticClass: "detail"
    }, [_c('p', {
      staticStyle: {
        "margin-top": "19px"
      }
    }, [_c('strong', [_vm._v(_vm._s(table.order_customer_count || '-') + " / " + _vm._s(table.customer_count))])]), _vm._v(" "), (table.production_status == 0) ? _c('p', {
      staticStyle: {
        "height": "20px"
      }
    }, [_vm._v(_vm._s(_vm.$t('tableItem.waitOrder')))]) : _c('p', {
      staticStyle: {
        "height": "20px"
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.getTimeDiff(table.create_time)))])]) : _c('div', {
      staticClass: "detail"
    }, [_c('h1', {
      staticStyle: {
        "margin-top": "21px"
      }
    }, [_vm._v(_vm._s(_vm.$t('tableItem.empty')))])])])
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-07dc3ebd", module.exports)
  }
}

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "packaging"
  }, [_c('el-col', {
    staticClass: "left",
    attrs: {
      "span": 7
    }
  }, [_c('router-view')], 1), _vm._v(" "), _c('el-col', {
    staticClass: "right",
    attrs: {
      "span": 17
    }
  }, [_c('pagination', {
    staticStyle: {
      "right": "18%"
    }
  }), _vm._v(" "), _c('order-toolbar', {
    on: {
      "changeCurrentOrderType": _vm.changeOrderType
    }
  }), _vm._v(" "), _c('el-row', {
    staticClass: "order-wrapper",
    staticStyle: {
      "padding": "0px",
      "margin": "0px"
    }
  }, [_c('el-col', {
    staticClass: "order-info",
    attrs: {
      "span": 24,
      "id": "tableInfo"
    }
  }, [_c('el-row', [
    [_c('packageItem', {
      attrs: {
        "tableAndOrderList": _vm.tableAndOrderList,
        "currentTable": _vm.currentOrder
      },
      on: {
        "update:currentTable": function($event) {
          _vm.currentOrder = $event
        },
        "update:current-table": function($event) {
          _vm.currentOrder = $event
        }
      }
    })]
  ], 2)], 1)], 1), _vm._v(" "), _c('bottomToolbar', {
    staticStyle: {
      "position": "absolute",
      "bottom": "0",
      "left": "0"
    },
    attrs: {
      "currentTable": _vm.currentTable
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-644d19b8", module.exports)
  }
}

/***/ })

});