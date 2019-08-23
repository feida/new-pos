webpackJsonp([4],{

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(484)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  "data-v-367dd99e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/children/eatin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] eatin.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-367dd99e", Component.options)
  } else {
    hotAPI.reload("data-v-367dd99e", Component.options)
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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".table-wrapper[data-v-31cdd315]{display:flex;justify-content:start;flex-wrap:wrap}.table-item[data-v-31cdd315]{background-color:#fff;text-align:center;position:relative;width:19%;height:24%;margin:.5%;cursor:pointer;padding-top:18px;padding-bottom:18px}.table-number[data-v-31cdd315]{width:100%;font-size:34px;text-align:center}.table-card-active[data-v-31cdd315]{box-shadow:-1px 0 #ffbf34,0 -1px 0 #ffbf34,0 1px 0 #ffbf34,1px 0 0 #ffbf34;border:1px solid #ffbf34;color:#ffbf34}.table-card-pay-order[data-v-31cdd315]{background:green}.table-card-no-pay[data-v-31cdd315],.table-card-pay-order[data-v-31cdd315]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-no-pay[data-v-31cdd315]{background:#ef5350}.table-card-paying[data-v-31cdd315]{background:#ffbf34}.table-card-paying[data-v-31cdd315],.table-card-wait-order[data-v-31cdd315]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-wait-order[data-v-31cdd315]{background:#025ebb}.detail[data-v-31cdd315]{text-align:center}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/table-Item.vue"],"names":[],"mappings":"AACA,gCACE,aAAc,AACd,sBAAuB,AACvB,cAAe,CAChB,AACD,6BACE,sBAA0B,AAG1B,kBAAmB,AACnB,kBAAmB,AAEnB,UAAW,AACX,WAAY,AACZ,WAAa,AAIb,eAAgB,AAChB,iBAAkB,AAClB,mBAAqB,CACtB,AACD,+BACE,WAAY,AAEZ,eAAgB,AAEhB,iBAAmB,CACpB,AACD,oCACE,2EAA+E,AAC/E,yBAA0B,AAC1B,aAAe,CAChB,AACD,uCAQE,gBAAiB,CAIlB,AACD,2EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,oCAQE,kBAAoB,CAIrB,AACD,oCAQE,kBAAoB,CAIrB,AACD,4EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,wCAQE,kBAAoB,CAIrB,AACD,yBACE,iBAAmB,CACpB","file":"table-Item.vue","sourcesContent":["\n.table-wrapper[data-v-31cdd315] {\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap\n}\n.table-item[data-v-31cdd315] {\n  background-color: #FFFFFF;\n  /*margin-left: 10px;*/\n  /*margin-top: 10px;*/\n  text-align: center;\n  position: relative;\n  /*height: 17vh;*/\n  width: 19%;\n  height: 24%;\n  margin: 0.5%;\n  /*width: 88px;*/\n  /*margin-bottom: 5px;*/\n  /*margin-top: 5px;*/\n  cursor: pointer;\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n.table-number[data-v-31cdd315] {\n  width: 100%;\n  /*font-size: 4vh;*/\n  font-size: 34px;\n  /*font-weight: bold;*/\n  text-align: center;\n}\n.table-card-active[data-v-31cdd315] {\n  box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;\n  border: 1px solid #ffbf34;\n  color: #ffbf34;\n}\n.table-card-pay-order[data-v-31cdd315] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background:green;\n  border-radius: 50%;\n  /*border-top: 50px solid #26bb02;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-no-pay[data-v-31cdd315] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ef5350;\n  border-radius: 50%;\n  /*border-top: 50px solid #bb0202;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-paying[data-v-31cdd315]{\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ffbf34;;\n  border-radius: 50%;\n  /*border-top: 50px solid #F7BA2A;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-wait-order[data-v-31cdd315] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #025ebb;;\n  border-radius: 50%;\n  /*border-top: 50px solid #025ebb;*/\n  /*border-left: 30px solid transparent;*/\n}\n.detail[data-v-31cdd315] {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".eatin[data-v-367dd99e]{width:100%;height:100%}.left[data-v-367dd99e]{height:100%;position:relative;background-color:#fff}.right[data-v-367dd99e]{height:100%;padding-bottom:50px;position:relative}.table-wrapper[data-v-367dd99e]{height:100%;background-color:#eee}.table-info[data-v-367dd99e]{height:100%;overflow-y:auto;overflow-x:hidden;margin-top:5px;padding:5px}.table-card[data-v-367dd99e]{height:17vh;cursor:pointer}.table-card-active[data-v-367dd99e]{box-shadow:-1px 0 #ffbf34,0 -1px 0 #ffbf34,0 1px 0 #ffbf34,1px 0 0 #ffbf34;border:1px solid #ffbf34;color:#ffbf34}.table-card-pay-order[data-v-367dd99e]{background:green}.table-card-no-pay[data-v-367dd99e],.table-card-pay-order[data-v-367dd99e]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-no-pay[data-v-367dd99e]{background:#ef5350}.table-card-paying[data-v-367dd99e]{background:#ffbf34}.table-card-paying[data-v-367dd99e],.table-card-wait-order[data-v-367dd99e]{position:absolute;top:0;right:0;width:0;height:0;width:15px;height:15px;border-radius:50%}.table-card-wait-order[data-v-367dd99e]{background:#025ebb}.table-number[data-v-367dd99e]{width:100%;font-size:34px;text-align:center}.detail[data-v-367dd99e]{text-align:center}.area-wrapper[data-v-367dd99e]{height:100%;background-color:#fff;overflow-y:hidden;overflow-x:hidden;text-align:center;position:absolute;right:0;padding-bottom:60px}.area-list[data-v-367dd99e]{width:100%;padding:0;margin:0;height:350px;overflow-y:hidden}.area-item[data-v-367dd99e]{width:100%;min-height:50px;padding:5px;padding-top:15px;padding-bottom:15px;font-size:18px;line-height:20px;white-space:normal;position:relative;border:none}.page-button-item[data-v-367dd99e]{width:80%;text-align:center;margin-bottom:10px;padding-left:15px;color:#1f2d3d;border:1px solid #666}.area-wrapper .btn-active[data-v-367dd99e]{color:#333!important;background-color:#eee;border-radius:0!important;border:none;border-left:5px solid #ffbf34!important}.area-wrapper button[data-v-367dd99e]{border:none;color:#333;font-size:18px;padding:10px}.area-wrapper button[data-v-367dd99e]:hover{border-color:#ffbf34;color:#333}.pageButton[data-v-367dd99e]{padding:0;margin:0;width:100%;position:absolute;left:0;bottom:50px}.btn-number[data-v-367dd99e]{width:100%;height:50px;margin-top:15px;background-color:#f6f6f6;font-size:22px;font-weight:700}#tableInfo[data-v-367dd99e]{overflow-y:auto}#tableInfo[data-v-367dd99e]::-webkit-scrollbar{width:4px;height:4px}#tableInfo[data-v-367dd99e]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#tableInfo[data-v-367dd99e]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.pageButtonActive[data-v-367dd99e]{background-color:#ffbf34;color:#fff!important;border:none!important}button[data-v-367dd99e]:disabled{border:1px solid #ddd;background-color:#eef1f6;color:#bfcbd9}.el-badge__content.is-fixed[data-v-367dd99e]{top:8px;right:15px;z-index:9999}.el-badge__content[data-v-367dd99e]{height:20px;line-height:20px}.order-page-wrapper-nomal[data-v-367dd99e],.order-page-wrapper[data-v-367dd99e]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-367dd99e]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-367dd99e],.order-page-wrapper>.pre-page[data-v-367dd99e]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/children/eatin.vue"],"names":[],"mappings":"AACA,wBACE,WAAY,AACZ,WAAa,CACd,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,qBAAuB,CAExB,AACD,wBACE,YAAa,AACb,oBAAqB,AACrB,iBAAmB,CACpB,AAED,gCACE,YAAa,AACb,qBAAuB,CACxB,AACD,6BACE,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,WAAa,CACd,AACD,6BACE,YAAa,AAIb,cAAgB,CACjB,AACD,oCACE,2EAA+E,AAC/E,yBAA0B,AAC1B,aAAe,CAChB,AACD,uCAQE,gBAAiB,CAIlB,AACD,2EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,oCAQE,kBAAoB,CAIrB,AACD,oCAQE,kBAAoB,CAIrB,AACD,4EAZE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,QAAS,AACT,SAAU,AACV,WAAW,AACX,YAAa,AAEb,iBAAmB,CAgBpB,AAZD,wCAQE,kBAAoB,CAIrB,AACD,+BACE,WAAY,AAEZ,eAAgB,AAEhB,iBAAmB,CACpB,AACD,yBACE,iBAAmB,CACpB,AAID,+BACE,YAAa,AACb,sBAA0B,AAE1B,kBAAmB,AACnB,kBAAmB,AACnB,kBAAmB,AACnB,kBAAmB,AACnB,QAAS,AACT,mBAAqB,CACtB,AACD,4BACE,WAAY,AACZ,UAAW,AACX,SAAU,AACV,aAAc,AACd,iBAAmB,CACpB,AACD,4BACE,WAAY,AAGZ,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,oBAAqB,AACrB,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CACd,AACD,mCACE,UAAW,AAEX,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,cAAe,AACf,qBAAuB,CACxB,AACD,2CACE,qBAAuB,AACvB,sBAAuB,AACvB,0BAA4B,AAC5B,YAAa,AACb,uCAA0C,CAC3C,AACD,sCACE,YAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,YAAmB,CACpB,AACD,4CACE,qBAAsB,AACtB,UAAY,CACb,AACD,6BACE,UAAW,AACX,SAAU,AACV,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,WAAa,CACd,AAED,6BACE,WAAW,AACX,YAAY,AACZ,gBAAiB,AACjB,yBAA0B,AAC1B,eAAe,AACf,eAAkB,CACnB,AAGD,4BACE,eAAiB,CAClB,AACD,+CACE,UAAW,AACX,UAAY,CACb,AACD,qDACE,kBAAmB,AACnB,gDAAkD,AAClD,yBAA4B,CAE7B,AACD,qDACE,gDAAkD,AAClD,gBAAiB,AACjB,yBAA4B,CAC7B,AAED,mCACE,yBAA0B,AAC1B,qBAAsB,AACtB,qBAAuB,CACxB,AACD,iCACE,sBAAsB,AACtB,yBAAyB,AACzB,aAAe,CAChB,AACD,6CACE,QAAS,AACT,WAAY,AACZ,YAAc,CACf,AACD,oCACE,YAAa,AACb,gBAAkB,CACnB,AAOD,gFACE,kBAAmB,AACnB,QAAQ,AACR,WAAY,AACZ,UAAY,CACb,AACD,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAA0B,AAC1B,WAAY,AACZ,kBAAkB,AAElB,eAAgB,AAChB,UAAa,CAad","file":"eatin.vue","sourcesContent":["\n.eatin[data-v-367dd99e]{\n  width: 100%;\n  height: 100%;\n}\n.left[data-v-367dd99e]{\n  height: 100%;\n  position: relative;\n  background-color: #fff;\n  /*box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);*/\n}\n.right[data-v-367dd99e]{\n  height: 100%;\n  padding-bottom: 50px;\n  position: relative;\n}\n/*  table   begin   */\n.table-wrapper[data-v-367dd99e] {\n  height: 100%;\n  background-color: #eee;\n}\n.table-info[data-v-367dd99e] {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-top: 5px;\n  padding: 5px;\n}\n.table-card[data-v-367dd99e] {\n  height: 17vh;\n  /*width: 88px;*/\n  /*margin-bottom: 5px;*/\n  /*margin-top: 5px;*/\n  cursor: pointer;\n}\n.table-card-active[data-v-367dd99e] {\n  box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;\n  border: 1px solid #ffbf34;\n  color: #ffbf34;\n}\n.table-card-pay-order[data-v-367dd99e] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background:green;\n  border-radius: 50%;\n  /*border-top: 50px solid #26bb02;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-no-pay[data-v-367dd99e] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ef5350;\n  border-radius: 50%;\n  /*border-top: 50px solid #bb0202;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-paying[data-v-367dd99e]{\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #ffbf34;;\n  border-radius: 50%;\n  /*border-top: 50px solid #F7BA2A;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-card-wait-order[data-v-367dd99e] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 0;\n  height: 0;\n  width:15px;\n  height: 15px;\n  background: #025ebb;;\n  border-radius: 50%;\n  /*border-top: 50px solid #025ebb;*/\n  /*border-left: 30px solid transparent;*/\n}\n.table-number[data-v-367dd99e] {\n  width: 100%;\n  /*font-size: 4vh;*/\n  font-size: 34px;\n  /*font-weight: bold;*/\n  text-align: center;\n}\n.detail[data-v-367dd99e] {\n  text-align: center;\n}\n/*  table   end   */\n\n/*  area  bagin   */\n.area-wrapper[data-v-367dd99e] {\n  height: 100%;\n  background-color: #FFFFFF;\n  /*border: 2px solid #F2F2F2;*/\n  overflow-y: hidden;\n  overflow-x: hidden;\n  text-align: center;\n  position: absolute;\n  right: 0;\n  padding-bottom: 60px;\n}\n.area-list[data-v-367dd99e]{\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  height: 350px;\n  overflow-y: hidden;\n}\n.area-item[data-v-367dd99e] {\n  width: 100%;\n  /*margin-top: 5px;\n  margin-bottom: 10px;*/\n  min-height: 50px;\n  padding: 5px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 18px;\n  line-height: 20px;\n  white-space: normal;\n  position: relative;\n  border: none;\n}\n.page-button-item[data-v-367dd99e] {\n  width: 80%;\n  /*background-color: #FFBF34;*/\n  text-align: center;\n  margin-bottom: 10px;\n  padding-left: 15px;\n  color: #1f2d3d;\n  border: 1px solid #666;\n}\n.area-wrapper .btn-active[data-v-367dd99e]{\n  color: #333 !important;\n  background-color: #eee;\n  border-radius: 0 !important;\n  border: none;\n  border-left: 5px solid #ffbf34 !important;\n}\n.area-wrapper button[data-v-367dd99e] {\n  border:none;\n  color: #333;\n  font-size: 18px;\n  padding: 10px 10px;\n}\n.area-wrapper button[data-v-367dd99e]:hover {\n  border-color: #ffbf34;\n  color: #333;\n}\n.pageButton[data-v-367dd99e] {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 50px;\n}\n/*  area  end   */\n.btn-number[data-v-367dd99e]{\n  width:100%;\n  height:50px;\n  margin-top: 15px;\n  background-color: #f6f6f6;\n  font-size:22px;\n  font-weight: bold;\n}\n\n/*  滚动条   begin   */\n#tableInfo[data-v-367dd99e]{\n  overflow-y: auto;\n}\n#tableInfo[data-v-367dd99e]::-webkit-scrollbar {/*滚动条整体样式*/\n  width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/\n  height: 4px;\n}\n#tableInfo[data-v-367dd99e]::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.2);\n  /*background: rgba(0,0,0,0.5);*/\n}\n#tableInfo[data-v-367dd99e]::-webkit-scrollbar-track {/*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n/*  滚动条   end*/\n.pageButtonActive[data-v-367dd99e]{\n  background-color: #ffbf34;\n  color: #fff!important;\n  border: none!important;\n}\nbutton[data-v-367dd99e]:disabled{\n  border:1px solid #DDD;\n  background-color:#eef1f6;\n  color: #bfcbd9;\n}\n.el-badge__content.is-fixed[data-v-367dd99e] {\n  top: 8px;\n  right: 15px;\n  z-index: 9999;\n}\n.el-badge__content[data-v-367dd99e] {\n  height: 20px;\n  line-height: 20px;\n}\n.order-page-wrapper[data-v-367dd99e]{\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper-nomal[data-v-367dd99e] {\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-367dd99e]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-367dd99e]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n"],"sourceRoot":""}]);

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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_order_toolbar_vue__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_order_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__component_order_toolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_table_Item_vue__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_table_Item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__component_table_Item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_bottom_toolbar_vue__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_bottom_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__component_bottom_toolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_basic_pagination__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_basic_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__component_basic_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_tableApi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'eatin',
  components: {
    orderToolbar: __WEBPACK_IMPORTED_MODULE_2__component_order_toolbar_vue___default.a,
    bottomToolbar: __WEBPACK_IMPORTED_MODULE_4__component_bottom_toolbar_vue___default.a,
    tableItem: __WEBPACK_IMPORTED_MODULE_3__component_table_Item_vue___default.a,
    pagination: __WEBPACK_IMPORTED_MODULE_5__component_basic_pagination___default.a
  },
  data: function data() {
    return {
      fullscreenLoading: false,
      areaMap: {},
      currentAreaId: null,
      orderStateCountObj: {},
      selectCurrentPages: "3",
      tableMap: {},
      tableMapKeyOfNum: {}, // table map key 为 桌号
      tables: [],
      currentTable: {},
      changeTableDialog: {
        show: false,
        newTableNum: ""
      },

      tableSort: true,
      currentPage: '',

      shopModel: '',

      tvOrderList: [],
      callCount: {
        waitCallCount: 0,
        hasCalledCount: 0
      },
      refreshCount: 0,
      isActiveButton: '',
      currentOrderType: "all", // wait：待叫号  ； called：已叫号
      shopDet: {},
      page_index: 1,
      totalPage: 0,
      curPage: 0,
      clientWidth: 0,
      tableTotalPage: 0,
      tableNumber: '',
      searchKey: "",
      syncOrderIfo: '',
      familyWrapperHeight: 0,
      isUpdate: true
    };
  },

  watch: {},
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_vuex__["a" /* mapGetters */])({
    areaList: 'areaList',
    tableAndOrderList: 'tableAndOrderList',
    orderInfo: 'orderInfo',
    pageInfo: 'pageInfo'
  })),
  created: function created() {
    this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_auth__["c" /* getSessionShopDet */])());
    this.shopModel = this.shopDet.shopMode;
  },
  mounted: function mounted() {
    var that = this;
    this.initTableAndOrderList();
    this.getClientWidth();
    if (this.shopModel != 2) {
      this.familyWrapperHeight = document.body.clientHeight - 230 - document.getElementById("pageButton").offsetHeight;
    }
  },
  beforeDestroy: function beforeDestroy() {
    // this.removeEventListen();
  },

  methods: {
    changeOrderType: function changeOrderType(type) {
      this.currentOrderType = type;
      this.$store.commit("setOrderType", type);
      this.$router.push("/table/eatin" + "?orderType=" + type);
    },
    initTableAndOrderList: function initTableAndOrderList() {
      this.currentOrderType = this.$route.query.type || 'waitOrder';
      // if (this.currentOrderType == 'undefined') this.currentOrderType = 'all'
      if (this.shopModel == 2 || this.shopModel == 7) {
        if (this.currentOrderType == 'all') {
          //this.$router.push('/tvorder?orderType=all');
        } else if (this.currentOrderType == 'waitOrder') {
          var Obj = { search_code: this.searchKey };
          this.$store.dispatch('getWaitCallTPOrderList', Obj);
        } else if (this.currentOrderType == 'payOrder') {
          var Obj = { search_code: this.searchKey };
          this.$store.dispatch('getHasCallTPOrderList', Obj);
        }
      } else {
        console.log('this.currentOrderType', this.currentOrderType);
        //if (this.currentOrderType !== 'all') return
        this.$store.dispatch('getAreaList');
        var pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
        var query = {
          page_size: 20,
          page_index: pageIndex,
          search_code: '',
          distribution_mode_id: 1
        };
        this.$store.dispatch('getAllTableAndOrderList', query);
      };
    },
    getClientWidth: function getClientWidth() {
      this.clientWidth = document.getElementById("tableInfo").clientWidth;
    },
    choseAllTable: function choseAllTable() {
      this.currentAreaId = null;
      var Obj = { distribution_mode_id: 1, page_index: this.pageInfo.pageIndex, page_size: 20, search_code: this.searchKey };
      this.$store.dispatch('getAllTableAndOrderList', Obj);
    },
    choseTableArea: function choseTableArea(area) {
      this.$router.push('/table/eatin?orderType=all');
      this.currentAreaId = area.id;
      var query = {
        page_index: 1,
        area_id: area.id
      };
      this.$store.dispatch('getAllTableAndOrderByAreaId', query);
    },
    getPages: function getPages(pageNumbers) {
      this.currentPage = pageNumbers;
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
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money);
    },
    searchTable: function searchTable(searchKey) {
      var orderType = this.$route.params.orderType;
      if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "payOrder") {
        this.payOrder();
      } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "waitOrder") {
        this.waitOrder();
      } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "noPayOrder") {
        this.noPayOrder();
      } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "payingOrder") {
        this.payingOrder();
      } else {
        var Obj = { distributionModeId: 1, pageIndex: 1, searchKey: searchKey };
        this.$store.dispatch('getAllTableAndOrderList', Obj);
      }
    }
  }
});

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_tableApi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_auth__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "tableItem",
  props: ['tableAndOrderList'],
  data: function data() {
    return {
      clientWidth: 0,
      currentTable: {},
      shopModel: 6,
      tempInfo: {}
    };
  },
  created: function created() {
    this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_auth__["c" /* getSessionShopDet */])());
    this.shopModel = this.shopDet.shopMode;
  },
  mounted: function mounted() {
    this.clientWidth = document.getElementById("tableInfo").clientWidth;
    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$on("choose", function () {
      this.choseTable(this.tableAndOrderList[0]);
    });
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$off("choose");
  },

  watch: {
    tableAndOrderList: function tableAndOrderList(params) {
      this.autoChoseTable();
    },
    currentTable: function currentTable(newValue, oldValue) {
      this.$emit('update:currentTable', newValue);
    }
  },
  methods: {
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money);
    },
    choseTable: function choseTable(table) {
      var _this = this;

      this.currentTable = table;
      var orderType = this.$route.query.orderType;
      if (this.shopModel == 2 || this.shopModel == 7) {
        //if(!table.ver_code) return;
        this.$router.push('/table/eatin/detail/' + table.id + '?verCode=' + table.ver_code + '&type=' + orderType);
      } else if (table.order_id) {
        this.$router.push('/table/eatin/detail/' + table.order_id + '?tableNumber=' + table.table_number + '&orderType=' + orderType);
      } else {
        var query = {
          table_number: table.table_number,
          distribution_mode_id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_auth__["b" /* getSession */])("distribution_mode_id")
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_tableApi__["g" /* getTableInfo */])(query).then(function (res) {
          console.log('getTableInfo', res);
          if (res.ok) {
            var resultData = res.data[0];
            _this.tempInfo = res.data[0];
            if (resultData.order_id) {
              _this.$router.push('/table/eatin/detail/' + resultData.order_id + '?tableNumber=' + resultData.table_number + '&orderType=' + orderType);
            } else {
              _this.$router.push('/table/eatin/console/' + table.table_number + '?orderType=' + orderType);
            }
          }
        });
      }
    },
    cardActiveClass: function cardActiveClass(table) {
      if (this.shopModel == 2) {
        return { 'table-card-active': this.currentTable.id == table.id };
      } else {
        if (table.order_id) {
          return { 'table-card-active': table.order_id == this.$route.params.orderId
            //return {'table-card-active' : (this.currentTable.id + (this.currentTable.order_id ? this.currentTable.order_id : "")) == (table.id + table.order_id)};
          };
        } else {
          //return {'table-card-active' : this.currentTable.id == table.id};
          return { 'table-card-active': table.table_number == this.$route.params.tableNumber };
        }
      }
    },
    tableCardClass: function tableCardClass(table) {
      var cardClass = [];
      if (table.order_id) {
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
        var tables = this.tableAndOrderList && this.tableAndOrderList.length > 0 && this.tableAndOrderList.map(function (item) {
          return item;
        }).filter(function (item) {
          return item.table_number == tableNumber;
        });
        if (tables && tables.length > 0) {
          this.choseTable(tables[0]);
        } else {
          if (this.tableAndOrderList && this.tableAndOrderList.length > 0) {
            this.choseTable(this.tableAndOrderList[0]);
          } else {
            this.$router.push("/table/eatin?orderType=all");
          }
          //this.choseTable(this.tableAndOrderList[0]);
        }
      } else if (orderId && orderId != 'undefined') {
        //  路由参数中添加 tableNumber 查询参数，在这里直接定位到桌位，然后自动选择。
        var _num = this.$route.query.tableNumber;
        if (_num && _num != "undefined") {
          var tables = this.tableAndOrderList && this.tableAndOrderList.length > 0 && this.tableAndOrderList.map(function (item) {
            return item;
          }).filter(function (item) {
            return item.table_number == _num;
          });
          if (tables && tables.length > 0) {
            this.choseTable(tables[0]);
          } else {
            if (this.tableAndOrderList && this.tableAndOrderList.length > 0) {
              this.choseTable(this.tableAndOrderList[0]);
            } else {
              this.$router.push("/table/eatin?orderType=all");
            }
          }
        } else {
          if (this.shopModel == 2) {
            this.$router.push("/table/eatin/detail/" + orderId + '?type=waitOrder');
          } else {
            this.$router.push("/table/eatin/detail/" + orderId + '?orderType=all');
          }
        }
      } else {
        if (this.tableAndOrderList && this.tableAndOrderList.length > 0) {
          this.choseTable(this.tableAndOrderList[0]);
        } else {
          this.$router.push("/table/eatin?orderType=all");
        }
      }
    },
    getTimeDiff: function getTimeDiff(date) {
      //  得到相差的分钟值
      var currentDate = new Date().getTime();
      var diff = currentDate - date;
      var m = parseInt(diff / (1000 * 60));
      if (diff <= 0) {
        return this.$t('tableItem.justNow');
      } else if (m == 0) {
        return parseInt(diff / 1000) + this.$t('tableItem.sec');
      } else if (m < 60) {
        return m + this.$t('tableItem.min');
      } else {
        return parseInt(m / 60) + this.$t('tableItem.hours');
      }
    }
  }
});

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("bac63bbc", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(412, function() {
     var newContent = __webpack_require__(412);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(413);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("5690eabc", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(413, function() {
     var newContent = __webpack_require__(413);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(483)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(534),
  /* scopeId */
  "data-v-31cdd315",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/table-Item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table-Item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31cdd315", Component.options)
  } else {
    hotAPI.reload("data-v-31cdd315", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.shopModel == 2 || _vm.shopModel == 7) ? _c('div', {
    staticClass: "table-wrapper"
  }, _vm._l((_vm.tableAndOrderList), function(table, index) {
    return (_vm.tableAndOrderList.length > 0) ? _c('div', {
      key: index,
      staticClass: "table-item",
      class: _vm.cardActiveClass(table),
      on: {
        "click": function($event) {
          return _vm.choseTable(table)
        }
      }
    }, [(table.call_times > 0) ? _c('el-badge', {
      staticClass: "item",
      staticStyle: {
        "position": "absolute",
        "margin-left": "45px"
      },
      attrs: {
        "value": table.call_times
      }
    }) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "table-number",
      staticStyle: {
        "font-size": "28px"
      }
    }, [_vm._v(_vm._s(table.ver_code || table.table_number || _vm.$t('tableItem.unknown')))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-top": "30px"
      }
    }), _vm._v(" "), _c('div', [(table.distribution_mode_id == 1) ? _c('span', [_vm._v(_vm._s(_vm.$t('tableItem.eatin')))]) : _vm._e(), _vm._v(" "), (table.distribution_mode_id == 3) ? _c('span', [_vm._v(_vm._s(_vm.$t('tableItem.packaging')))]) : _vm._e()]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.getTimeDiff(table.create_time)))])], 1) : _vm._e()
  }), 0) : _c('div', {
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
    }, [(table.order_id) ? _c('div', {
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
    }, [_c('p', {
      staticStyle: {
        "margin-top": "39px",
        "font-size": "2em"
      }
    }, [_vm._v(_vm._s(_vm.$t('tableItem.empty')))])])])
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-31cdd315", module.exports)
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading.fullscreen.lock",
      value: (_vm.fullscreenLoading),
      expression: "fullscreenLoading",
      modifiers: {
        "fullscreen": true,
        "lock": true
      }
    }],
    staticClass: "eatin"
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
    staticClass: "table-wrapper",
    staticStyle: {
      "padding": "0px",
      "margin": "0px"
    }
  }, [_c('el-col', {
    staticClass: "table-info",
    staticStyle: {
      "padding": "0px",
      "margin": "0px"
    },
    attrs: {
      "span": (this.shopModel == 2 || this.shopModel == 7) ? 24 : 20,
      "id": "tableInfo"
    }
  }, [_c('el-row', [
    [_c('tableItem', {
      attrs: {
        "tableAndOrderList": _vm.tableAndOrderList,
        "currentTable": _vm.currentTable
      },
      on: {
        "update:currentTable": function($event) {
          _vm.currentTable = $event
        },
        "update:current-table": function($event) {
          _vm.currentTable = $event
        }
      }
    })]
  ], 2)], 1), _vm._v(" "), (this.shopModel != 2 && this.shopModel != 7) ? _c('el-col', {
    staticClass: "area-wrapper",
    attrs: {
      "span": 4,
      "id": "areaList"
    }
  }, [_c('ul', {
    staticClass: "area-list",
    style: ({
      height: _vm.familyWrapperHeight + 'px'
    }),
    attrs: {
      "id": "familyWrapper"
    }
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.choseAllTable(null)
      }
    }
  }, [_c('el-button', {
    staticClass: "area-item",
    class: {
      'btn-active': _vm.currentAreaId == null
    }
  }, [_vm._v(_vm._s(_vm.$t('common.all')))])], 1), _vm._v(" "), _vm._l((_vm.areaList), function(area, key) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.currentOrderType == 'all'),
        expression: "currentOrderType == 'all'"
      }],
      key: key,
      on: {
        "click": function($event) {
          return _vm.choseTableArea(area)
        }
      }
    }, [_c('el-button', {
      staticClass: "area-item",
      class: {
        'btn-active': _vm.currentAreaId == area.id
      }
    }, [_vm._v(_vm._s(area.name))])], 1)
  })], 2), _vm._v(" "), _c('ul', {
    staticClass: "pageButton",
    attrs: {
      "id": "pageButton"
    }
  }, [_c('li', [_c('el-button', {
    staticClass: "page-button-item",
    class: _vm.selectCurrentPages == 0 ? 'pageButtonActive' : '',
    staticStyle: {
      "border": "1px solid #666"
    },
    on: {
      "click": function($event) {
        return _vm.getPages(0)
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('common.prePage')) + "\n            ")])], 1), _vm._v(" "), _c('li', [_c('el-button', {
    staticClass: "page-button-item ",
    class: _vm.selectCurrentPages == 1 ? 'pageButtonActive' : '',
    staticStyle: {
      "border": "1px solid #666"
    },
    on: {
      "click": function($event) {
        return _vm.getPages(1)
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('common.nextPage')) + "\n            ")])], 1)])]) : _vm._e()], 1), _vm._v(" "), _c('bottomToolbar', {
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
     __webpack_require__(2).rerender("data-v-367dd99e", module.exports)
  }
}

/***/ })

});