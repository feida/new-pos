webpackJsonp([8],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(486)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  "data-v-3ed64105",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/children/business.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] business.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ed64105", Component.options)
  } else {
    hotAPI.reload("data-v-3ed64105", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".business[data-v-3ed64105]{height:100%;width:100%}.tool-bar[data-v-3ed64105]{padding-left:20px;height:60px;line-height:60px;font-weight:700;border-bottom:2px solid #e9e9e9}.tool-title[data-v-3ed64105]{padding-left:20px}.tool-search-btn[data-v-3ed64105]{margin-left:5px;font-size:16px}.el-button--primary[data-v-3ed64105]{background-color:#ffbf34;color:#fff!important;border:none;padding:10px 30px}.business-data[data-v-3ed64105]{width:100%}#business-data[data-v-3ed64105]::-webkit-scrollbar{width:1px;height:1px}#business-data[data-v-3ed64105]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#business-data[data-v-3ed64105]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.data-row[data-v-3ed64105]{height:80px;border-bottom:2px solid #e9e9e9}.data-title[data-v-3ed64105]{line-height:38px;font-size:16px;font-weight:700;padding-left:20px}.data-content[data-v-3ed64105]{height:40px;line-height:40px;text-align:center}.order-page-wrapper[data-v-3ed64105]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-3ed64105]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-3ed64105],.order-page-wrapper>.pre-page[data-v-3ed64105]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}#businessDialog[data-v-3ed64105]{text-align:center}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/children/business.vue"],"names":[],"mappings":"AACA,2BACE,YAAa,AACb,UAAY,CACb,AACD,2BACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,gBAAkB,AAClB,+BAAiC,CAClC,AACD,6BACE,iBAAmB,CACpB,AACD,kCACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qCAGE,yBAA0B,AAC1B,qBAAsB,AACtB,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,UAAY,CACb,AACD,mDACE,UAAW,AACX,UAAY,CACb,AACD,yDACE,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAChC,AACD,yDACE,gDAAqD,AACrD,gBAAiB,AACjB,yBAA+B,CAChC,AACD,2BACE,YAAa,AACb,+BAAiC,CAClC,AACD,6BAEE,iBAAkB,AAClB,eAAgB,AAChB,gBAAkB,AAClB,iBAAmB,CACpB,AACD,+BACE,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACpB,AAID,qCACE,kBAAmB,AACnB,QAAQ,AACR,WAAY,AACZ,UAAY,CACb,AACD,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAkB,AAElB,eAAgB,AAChB,UAAa,CAad,AACD,iCACE,iBAAmB,CACpB","file":"business.vue","sourcesContent":["\n.business[data-v-3ed64105]{\n  height: 100%;\n  width: 100%;\n}\n.tool-bar[data-v-3ed64105]{\n  padding-left: 20px;\n  height: 60px;\n  line-height: 60px;\n  font-weight: bold;\n  border-bottom: 2px solid #E9E9E9;\n}\n.tool-title[data-v-3ed64105]{\n  padding-left: 20px;\n}\n.tool-search-btn[data-v-3ed64105]{\n  margin-left: 5px;\n  font-size: 16px;\n}\n.el-button--primary[data-v-3ed64105]{\n  /*background-color : #000 ;*/\n  /*border-color: #000;*/\n  background-color: #ffbf34;\n  color: #fff!important;\n  border: none;\n  padding: 10px 30px;\n}\n.business-data[data-v-3ed64105]{\n  width: 100%;\n}\n#business-data[data-v-3ed64105]::-webkit-scrollbar { /*滚动条整体样式*/\n  width: 1px; /*高宽分别对应横竖滚动条的尺寸*/\n  height: 1px;\n}\n#business-data[data-v-3ed64105]::-webkit-scrollbar-thumb { /*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.2);\n}\n#business-data[data-v-3ed64105]::-webkit-scrollbar-track { /*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n.data-row[data-v-3ed64105]{\n  height: 80px;\n  border-bottom: 2px solid #E9E9E9;\n}\n.data-title[data-v-3ed64105]{\n  /*line-height: 79px;*/\n  line-height: 38px;\n  font-size: 16px;\n  font-weight: bold;\n  padding-left: 20px;\n}\n.data-content[data-v-3ed64105]{\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n}\n\n\n/*  订单详情 翻页 begin*/\n.order-page-wrapper[data-v-3ed64105]{\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-3ed64105]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-3ed64105]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n#businessDialog[data-v-3ed64105] {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".order-page-wrapper>.pre-page[data-v-59415fe4]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-59415fe4],.order-page-wrapper>.pre-page[data-v-59415fe4]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}#reviewDialog[data-v-59415fe4]{text-align:center}#reviewDialog>.el-dialog[data-v-59415fe4]{width:90%}.tb-edit .el-input[data-v-59415fe4]{display:none}.tb-edit .current-row .el-input[data-v-59415fe4]{display:block}.tb-edit .current-row .el-input+span[data-v-59415fe4]{display:none}.money-input[data-v-59415fe4]{border:1px solid #2f2f2f;margin-left:5px;width:97%;height:48px;font-size:30px;text-align:right;padding-right:5px;background-color:#fff}.key-board[data-v-59415fe4]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#0095c8;color:#fff;border-radius:4px;width:100%;height:65px;font-size:26px;font-weight:700}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/children/reviewDetail.vue"],"names":[],"mappings":"AACA,+CASE,kBAAoB,CAGrB,AACD,+FAZE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAkB,AAElB,eAAgB,AAChB,UAAa,CAad,AACD,+BACE,iBAAmB,CACpB,AACD,0CACE,SAAW,CACZ,AACD,oCACE,YAAa,CACd,AACD,iDACE,aAAc,CACf,AACD,sDACE,YAAa,CACd,AACD,8BACE,yBAAyB,AACzB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,4BACE,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAEhB,mBAA2B,AAE3B,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,eAAkB,CACnB","file":"reviewDetail.vue","sourcesContent":["\n.order-page-wrapper > .pre-page[data-v-59415fe4]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-59415fe4]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n#reviewDialog[data-v-59415fe4] {\n  text-align: center;\n}\n#reviewDialog > .el-dialog[data-v-59415fe4] {\n  width: 90%;\n}\n.tb-edit .el-input[data-v-59415fe4] {\n  display: none\n}\n.tb-edit .current-row .el-input[data-v-59415fe4] {\n  display: block\n}\n.tb-edit .current-row .el-input+span[data-v-59415fe4] {\n  display: none\n}\n.money-input[data-v-59415fe4] {\n  border:1px solid #2f2f2f;\n  margin-left: 5px;\n  width: 97%;\n  height: 48px;\n  font-size: 30px;\n  text-align: right;\n  padding-right: 5px;\n  background-color: #fff;\n}\n.key-board[data-v-59415fe4] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  /*background: #fff;*/\n  background: rgb(0,149,200);\n  /*border: 1px solid #c4c4c4;*/\n  color: #fff;\n  border-radius: 4px;\n  width: 100%;\n  height: 65px;\n  font-size: 26px;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = businessData;
/* harmony export (immutable) */ __webpack_exports__["d"] = printStoreReport;
/* harmony export (immutable) */ __webpack_exports__["b"] = isOpenPaymentReview;
/* harmony export (immutable) */ __webpack_exports__["c"] = sendMessage;
/* harmony export (immutable) */ __webpack_exports__["e"] = findAllPaymentList;
/* harmony export (immutable) */ __webpack_exports__["f"] = checkReport;
/* harmony export (immutable) */ __webpack_exports__["g"] = checkSuccess;
/* harmony export (immutable) */ __webpack_exports__["h"] = checkPrint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(30);




//营业数据
function businessData(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/report', method: 'get', params: { date: data } });
}

/**
 * 打印日结小票
 * @param order
 * @param cb
 */

function printStoreReport(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/print/daily/report', method: 'post', data: { dates: data } });
}

/**
 * 是否开启结店审核
 * @param order
 * @param cb
 */

function isOpenPaymentReview() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/open_payment_review', method: 'get' });
}

/**
 * 结店短信
 * @param order
 * @param cb
 */

function sendMessage() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/message', method: 'get' });
}

/**
 * 结店审核获取所有支付项
 * @param order
 * @param cb
 */

function findAllPaymentList(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/payment_list', method: 'get', params: params });
}

/**
 * 结店审核
 * @param order
 * @param cb
 */

function checkReport(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/check', method: 'post', data: params });
}

/**
 * 结店成功查询数据
 * @param order
 * @param cb
 */

function checkSuccess(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/check_success', method: 'get', params: { date: params } });
}

/**
 * 结店成功打印
 * @param order
 * @param cb
 */

function checkPrint(params) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({ url: __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* URL */] + '/business/check/print', method: 'post', data: params });
}

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_reportApi__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviewDetail_vue__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviewDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__reviewDetail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'business',
  components: {
    reviewDetail: __WEBPACK_IMPORTED_MODULE_3__reviewDetail_vue___default.a
  },
  data: function data() {
    return {
      shopDetails: {},
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick: function onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick: function onClick(picker) {
            var date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick: function onClick(picker) {
            var date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      reportDate: new Date(),
      businessData: {
        incomeItems: {},
        underline: {},
        discountItems: {},
        refundsItems: {},
        orderOrderingSource: {
          eatIn: {},
          eatOut: {},
          packaging: {}
        }
      },
      orderPaymentMap: {},
      orderPosDiscountMoney: 0, // pos端折扣金额
      memberDiscountMoney: 0, // 会员折扣金额（微信端）
      closedBusiness: 'open',
      fullscreenLoadingObj: {
        show: false,
        msg: "正在结店，请稍候 . . ."
      },
      dateHeight: 0,
      totalMoney: 0,
      posClose: 0,
      phoneClose: 0,
      selectDate: new Date(),

      closeBusinessModal: false,
      closeBusinessPassword: '', //结店口令
      isDailyReceipt: false

    };
  },

  created: function created() {
    console.log('this.reportDate', this.reportDate);
    this.getBusinessData();
  },
  mounted: function mounted() {
    var that = this;
    var toolbarHeight = document.getElementById("tool-bar").clientHeight;
    var bodyHeight = document.body.clientHeight - 120 - toolbarHeight;
    this.dateHeight = bodyHeight;
    this.shopDetails = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["c" /* getSessionShopDet */])());

    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$on('close-business', function (value) {
      that.closeBusinessPassword = value;
    });
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_1__utils_bus__["a" /* default */].$off("close-business");
  },

  methods: {
    getBusinessData: function getBusinessData() {
      var that = this;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_reportApi__["a" /* businessData */])(this.$utils.fmtDate(this.reportDate)).then(function (res) {
        console.log('businessData', res);
        if (res.ok && res.data) {
          that.businessData = res.data;
          that.posClose = (+res.data.discountItems["pos"] || 0) + (+res.data.discountItems["posSettleAccounts"] || 0); // pos端折扣 + pos结算
          that.phoneClose = (+res.data.discountItems["member"] || 0) + (+res.data.discountItems["wechatSettleAccounts"] || 0); // phone端折扣 + 手机结算
        }
      });
    },

    //      queryData() {
    //        let that = this
    //        businessData(this.$utils.fmtDate(this.reportDate), function (data) {
    //          that.businessData = data;
    //          that.posClose =  (+data.discountItems["pos"] || 0 ) + (+data.discountItems["posSettleAccounts"] || 0)// pos端折扣 + pos结算
    //          that.phoneClose = (+data.discountItems["member"] || 0)  + (+data.discountItems["wechatSettleAccounts"] || 0) // phone端折扣 + 手机结算
    //        })
    //      },


    closeBusiness: function closeBusiness(param) {
      var _this = this;

      var self = this;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_reportApi__["b" /* isOpenPaymentReview */])().then(function (result) {
        console.log('result', result);
        if (result.ok) {
          if (result.data.openAudit == 1) {
            self.closeBusinessModal = true;
          } else if (result.data.openAudit == 0) {
            _this.$confirm('确定要进行结店操作？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(function () {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_reportApi__["c" /* sendMessage */])().then(function (res) {
                self.closeLoading();
                if (res.ok) {
                  self.$message.success("结店成功");
                } else {
                  // self.$message.warning("无法发送结店短信");
                }
              });
            }).catch(function () {
              self.closeLoading();
            });
            /*getLeftSyncOrder(this.$utils.fmtDate(this.reportDate), (result) => {
                var syncDataList = result;
                this.$confirm('确定要进行结店操作？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let isOpenEmqPush =   self.shopDetails.isOpenEmqPush;
                    if(navigator.onLine){
                        let date = self.$utils.fmtDate(self.reportDate)
                        syncAll(syncDataList, function (result) {
                            self.showLoading();
                            posAdminCheckOut(date, (res) => {
                            })
                            if (isOpenEmqPush) {
                                let sendInfo = {
                                    group: 'order',
                                    orderId:'CheckOut',
                                    action: '',
                                    data: {
                                        type: "checkOut",
                                        operator:  '',
                                        dailyLogId:  '',
                                    }
                                }
                                emqttSend(sendInfo, () => {});
                            } else {
                                self.$socket.posCheckOut('', '', function () {
                                    self.$message.success("结店成功");
                                    self.closedBusiness = param;
                                    self.closeLoading();
                                })
                            }
                        })
                    }else{
                        self.$message.warning("暂无网络，无法发送结店短信!");
                        self.closeLoading();
                    }
                }).catch(() => {
                    self.closeLoading();
                });
            })*/
          }
        }
      });
    },
    dailyReceipt: function dailyReceipt() {
      var _this2 = this;

      this.isDailyReceipt = true;
      var self = this;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_reportApi__["d" /* printStoreReport */])(self.$utils.fmtDate(this.reportDate)).then(function (res) {
        _this2.isDailyReceipt = false;
        console.log('printStoreReport', res);
        if (res.ok) {
          self.$message("发送日报小票"); // 回调成功后调用
          console.log("发送日报小票");
        } else {
          self.$message("发送日报小票失败"); // 失败
          console.log("发送日报小票失败");
        }
      });
    },
    showLoading: function showLoading() {
      var _this3 = this;

      this.fullscreenLoadingObj.show = true;
      setTimeout(function () {
        if (_this3.fullscreenLoadingObj.show) {
          _this3.closeLoading();
          _this3.$message.error("网络繁忙，请稍后重试~~~");
        }
      }, 5000); // 5 秒之后如果还没有成功， loading 页面自动关闭
    },
    closeLoading: function closeLoading() {
      this.fullscreenLoadingObj.show = false;
    },
    pageOptions: function pageOptions(operation) {
      var businessData = document.getElementById("business-data");
      if (operation == 1) {
        // 下一页
        businessData.scrollTop += businessData.clientHeight;
      } else {
        //  上一页
        businessData.scrollTop -= businessData.clientHeight;
      }
    },
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money || 0);
    },
    closeBusinessDialog: function closeBusinessDialog() {
      this.closeBusinessModal = false;
      this.closeBusinessPassword = '';
    },
    focus: function focus() {
      this.closeBusinessPassword = "";
    },
    saveChange: function saveChange() {
      var that = this;
      var superPwd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_auth__["b" /* getSession */])("superPwd");
      var inputSuperPwd = this.$utils.pwdEncryption(this.closeBusinessPassword);
      if (inputSuperPwd == '') {
        this.$message.warning('身份口令不能为空');
        return;
      }
      if (inputSuperPwd != superPwd) {
        this.$message.error('身份口令错误');
        return;
      }

      this.closeBusinessModal = false;
      this.closeBusinessPassword = '';
      this.$refs.reviewDetail.open();
    }
  }
});

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_reportApi__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_bus__ = __webpack_require__(19);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'reviewDetail',
  data: function data() {
    return {
      keyBoard: { 1: [1, 2, 3, '←'], 2: [4, 5, 6, '清空'], 3: [7, 8, 9, '确定'], 4: [0, '00', '.'] },
      number: 0,
      index: null,
      reviewModal: false,
      reportDate: new Date(),
      tableData: [],
      tempTableData: [],
      totalMoney: 0,
      diffMoney: 0,
      compareMoney: 0,
      formerMoney: 0,
      findReviewModal: false,
      findReportDate: new Date(),
      findTableData: []
    };
  },

  computed: {},
  created: function created() {
    var that = this;
    //console.log('props',this.date)
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},

  methods: {
    closeReviewDialog: function closeReviewDialog() {
      this.reviewModal = false;
    },
    closeReviewDialog1: function closeReviewDialog1() {
      this.findReviewModal = false;
    },
    open: function open() {
      var _this = this;

      var that = this;
      var qurey = {
        date: this.$utils.fmtDate(this.reportDate)
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_reportApi__["e" /* findAllPaymentList */])(qurey).then(function (result) {
        if (result.ok) {
          that.tableData = result.data;
          that.tempTableData = [].concat(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(result.data)));
          that.reviewModal = true;
        } else {
          _this.$message.error('查询失败');
        }
        console.log('result', result);
      });
    },
    handleCurrentChange: function handleCurrentChange(row, event, column) {
      console.log('row', row);
      this.index = row.sort - 1;
      if (row.auditMoney > 0) {
        this.number = row.auditMoney;
      } else {
        this.number = '';
      }
    },
    handleEdit: function handleEdit(index, row) {},
    focus: function focus(e, i) {
      this.index = e;
      if (i.auditMoney > 0) {
        this.number = i.auditMoney;
      } else {
        this.number = '';
      }
    },
    saveChange: function saveChange() {
      var _this2 = this;

      var that = this;
      var flag = false;
      if (this.compareMoney != this.formerMoney) return;
      this.$confirm('是否确定要进行结店?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var username = sessionStorage.getItem("username");
        var data = [].concat(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_this2.tableData)));
        data.map(function (v, i) {
          if (Number(_this2.tempTableData[i].auditMoney != Number(v.auditMoney))) {
            flag = true;
          }
        });
        if (flag) {
          data.map(function (v, i) {
            v.operator = username;
          });
        }
        var prams = {
          // date: that.$utils.fmtDate(new Date()),
          operator: username,
          paymentList: data
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_reportApi__["f" /* checkReport */])(prams).then(function (res) {
          if (res.ok) {
            console.log('结店审核', res);
            //console.log('result111',result)
            //let dailyLogId = res.dailyLogId

            that.$alert('审核成功 已结店', '提示', {
              confirmButtonText: '确定',
              type: 'success'
            }).then(function () {
              that.closeReviewDialog();
              that.findReviewModal = true;
              _this2.find();
            }).catch(function () {});
          }
        });
      }).catch(function () {});
    },
    find: function find() {
      var _this3 = this;

      var that = this;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_reportApi__["g" /* checkSuccess */])(this.$utils.fmtDate(this.findReportDate)).then(function (res) {
        if (res.ok) {
          if (res.data.length > 0) {
            that.findTableData = res.data;
          } else if (res.data.length == 0) {
            that.findTableData = res.data;
            _this3.$message('暂无数据');
          } else {
            _this3.$message.error('网络繁忙，请稍后重试');
          }
        }
      });
    },
    keyBoardHandler: function keyBoardHandler(key) {
      var _this4 = this;

      if (typeof key === 'number') {
        if (this.number.length > 0 && this.number.indexOf('.') != -1 || this.number == '' || Number(this.number) > 0) {
          this.number += String(key);
        }
      } else {
        switch (key) {
          case '00':
            if (this.number.length > 0) {
              this.number += key;
            }
            break;
          case '.':
            if (this.number !== '' && this.number.indexOf('.') === -1) {
              this.number += key;
            }
            break;
          case '←':
            if (this.number.toString().length > 0) {
              var count = this.number.toString();
              this.number = count.substring(0, count.length - 1);
            }
            break;
          case '清空':
            this.number = '';
            break;
          case '确定':
            if (this.number == '') {
              this.number = 0;
            }
            if (this.tableData[this.index] && this.tableData[this.index].editStatus) {
              this.tableData[this.index].auditMoney = this.number;
            }
            var a = 0;
            var b = 0;
            this.tableData.map(function (item, i) {
              a += Number(Number(item.auditMoney).toFixed(2));
              _this4.totalMoney = Number(a.toFixed(2));
              if (item.paymentModeId == 33) {
                _this4.formerMoney = Number(Number(item.auditMoney).toFixed(2));
              }

              if (item.paymentModeId == 31 || item.paymentModeId == 32 || item.paymentModeId == 33 || item.paymentModeId == 34 || item.paymentModeId == 35 || item.paymentModeId == 36 || item.paymentModeId == 37 || item.paymentModeId == 38) {
                b += Number(Number(item.auditMoney).toFixed(2));
                _this4.diffMoney = Number(b.toFixed(2));
              }
            });
            this.compareMoney = this.accSub(this.totalMoney, this.diffMoney);

            console.log(' this.totalMoney 全部相加总额', this.totalMoney);
            console.log(' this.diffMoney 被减6项之和', this.diffMoney);
            console.log(' this.compareMoney 减后总额', this.compareMoney);
        }
      }
    },
    accSub: function accSub(arg1, arg2) {
      if (isNaN(arg1)) {
        arg1 = 0;
      }
      if (isNaN(arg2)) {
        arg2 = 0;
      }
      arg1 = Number(arg1);
      arg2 = Number(arg2);

      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
      n = r1 >= r2 ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    print: function print() {
      var that = this;
      var data = {
        // printDate: this.$utils.fmtDate(this.findReportDate),
        operator: sessionStorage.getItem("username")
      };

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_reportApi__["h" /* checkPrint */])(data).then(function (res) {});
      this.myPrint();
    },
    myPrint: function myPrint() {
      var newWindow = window.open("打印窗口", "_blank");
      var shopName = JSON.parse(sessionStorage.getItem('shopDet'));
      var dataList = this.findTableData;
      var paymentList = [];
      var i = 1;
      dataList.map(function (item, index) {
        if (item.money > 0 || item.auditMoney > 0) {
          paymentList.push({
            sort: i++,
            name: item.name,
            money: item.money,
            auditMoney: item.auditMoney,
            operator: item.operator,
            createTime: item.createTime
          });
        }
      });

      var rootNode = document.createElement('div');

      var titleNode = document.createElement('h2');
      titleNode.innerHTML = '<h2>\u73B0\u91D1\u5BA1\u6838\u660E\u7EC6</h2><span>' + shopName.brand_name + '-' + shopName.name + '</span>\n               <p>---------------------------------------------------------------------------</p>';
      rootNode.appendChild(titleNode);
      setTimeout(function () {
        var divNode = document.createElement('div');
        var divString = '\n       <table border=\'2\' width=\'800\' cellpadding=\'5\' cellspacing=\'0\'>\n                  <tr>\n                      <td>\u5E8F\u53F7</td>\n                      <td>\u9879\u76EE</td>\n                      <td>\u4E0A\u62A5\u91D1\u989D</td>\n                      <td>\u590D\u6838\u91D1\u989D</td>\n                      <td>\u66F4\u65B0\u4EBA</td>\n                      <td>\u66F4\u65B0\u65F6\u95F4</td>\n                  </tr>\n       ';

        var containerString = '';
        paymentList.map(function (item, index) {
          if (item.auditMoney > 0 || item.money > 0) {
            containerString = containerString + ('\n          <tr>\n                 <td>' + item.sort + '</td>\n                 <td>' + item.name + '</td>\n                 <td>' + item.money + '</td>\n                 <td>' + item.auditMoney + '</td>\n                 <td>' + item.operator + '</td>\n                 <td>' + item.createTime + '</td>\n          </tr>\n          ');
          }
        });
        divString = divString + containerString;
        divString = divString + '\n        </table>\n       ';

        divNode.innerHTML = divString;
        newWindow.document.write(rootNode.innerHTML);
        newWindow.document.write(divNode.innerHTML);
        newWindow.document.close();
        newWindow.print();
        newWindow.close();
      });
    }
  }

});

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("1d9200c0", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(415, function() {
     var newContent = __webpack_require__(415);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(420);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("0a784a88", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(420, function() {
     var newContent = __webpack_require__(420);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(491)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(458),
  /* template */
  __webpack_require__(542),
  /* scopeId */
  "data-v-59415fe4",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/children/reviewDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reviewDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59415fe4", Component.options)
  } else {
    hotAPI.reload("data-v-59415fe4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', {
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
    staticClass: "business",
    attrs: {
      "element-loading-text": _vm.fullscreenLoadingObj.msg
    }
  }, [_c('el-row', {
    staticClass: "tool-bar",
    attrs: {
      "id": "tool-bar"
    }
  }, [_c('el-col', {
    staticClass: "tool-content",
    attrs: {
      "span": 24
    }
  }, [_c('el-date-picker', {
    attrs: {
      "align": "right",
      "type": "date",
      "editable": false,
      "picker-options": _vm.pickerOptions
    },
    model: {
      value: (_vm.reportDate),
      callback: function($$v) {
        _vm.reportDate = $$v
      },
      expression: "reportDate"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "tool-search-btn",
    staticStyle: {
      "background-color": "#FFBF34",
      "border": "none"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.getBusinessData()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('business.queryBtn')))]), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right",
      "margin-right": "10px"
    }
  }, [_c('el-button', {
    staticClass: "tool-search-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.closeBusiness('isClose')
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('business.closeShop')))]), _vm._v(" "), _c('el-button', {
    staticClass: "tool-search-btn",
    attrs: {
      "type": "primary",
      "loading": _vm.isDailyReceipt
    },
    on: {
      "click": _vm.dailyReceipt
    }
  }, [_vm._v(_vm._s(_vm.$t('business.receipt')))])], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "business-data",
    staticStyle: {
      "overflow-y": "auto"
    },
    style: ({
      height: _vm.dateHeight + 'px'
    }),
    attrs: {
      "id": "business-data"
    }
  }, [(_vm.businessData) ? _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title"
  }, [_vm._v(_vm._s(_vm.$t('business.whole'))), _c('br'), _vm._v(_vm._s(_vm.$t('business.businessData')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.totalAmount')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.totalAmount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.incomeAmount')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeAmount)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.discountAmount')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s((Number(_vm.businessData.discountAmount || 0) - Number(_vm.businessData.refundsItems[11] || 0)).toFixed(2)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.orderAmount')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.businessData.orderAmount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.customerAmount')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.businessData.customerAmount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.customerAverage')))]), _vm._v(" "), (_vm.businessData.customerAverage) ? _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.customerAverage)))]) : _c('p', [_vm._v("---")])])], 1) : _vm._e(), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title"
  }, [_vm._v(_vm._s(_vm.$t('business.paidIn'))), _c('br'), _vm._v(_vm._s(_vm.$t('business.moneyData')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.weChatPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[1] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.aliPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[10] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.localweChatPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.businessData.underline ? Math.abs(_vm.formatMoney(_vm.businessData.underline[1])) : 0))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.localAliPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.businessData.underline ? Math.abs(_vm.formatMoney(_vm.businessData.underline[10])) : 0))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.rechargePay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[6] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.moneyPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[12] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.unionPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[5] || 0)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p'), _vm._v(" "), _c('p')]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.shanhuiPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[16] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.groupPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[27] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.cardPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[23] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.dishangfanPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.incomeItems[20] || 0)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title"
  }, [_vm._v(_vm._s(_vm.$t('business.discount'))), _c('br'), _vm._v(_vm._s(_vm.$t('business.moneyData')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.redPaper')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[2] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.couponPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[3] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.zengsongPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[7] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.dengweiPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[8] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.POSDiscount')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems["pos"] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.vipDiscount')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems["member"] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.integralPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[17] || 0)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p'), _vm._v(" "), _c('p')]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.cardzengsong')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[24] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.cashCouponPay')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.discountItems[28] || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.grantMoney')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.grantAmount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.refundRedPaper')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(-_vm.formatMoney(_vm.businessData.refundsItems[11] || 0)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title"
  }, [_vm._v(_vm._s(_vm.$t('business.refund'))), _c('br'), _vm._v(_vm._s(_vm.$t('business.moneyData')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.refundMoney')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(Math.abs(_vm.formatMoney(_vm.businessData.refundsItems[12] || 0))))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.refundCard')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.refundsItems[25] || 0)))])])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title",
    staticStyle: {
      "line-height": "79px"
    }
  }, [_vm._v(_vm._s(_vm.$t('business.tangshiOrder')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.ordernum')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.businessData.orderOrderingSource.eatIn.orderCount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.totalMoney')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.orderOrderingSource.eatIn.orderMoney || 0)))])])], 1), _vm._v(" "), (_vm.businessData.orderOrderingSource) ? _c('el-row', {
    staticClass: "data-row"
  }, [_c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('p', {
    staticClass: "data-title",
    staticStyle: {
      "line-height": "79px"
    }
  }, [_vm._v(_vm._s(_vm.$t('business.waidaiOrder')))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.ordernum')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.businessData.orderOrderingSource.eatOut.orderCount || 0)))])]), _vm._v(" "), _c('el-col', {
    staticClass: "data-content",
    attrs: {
      "span": 3
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('business.totalMoney')))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.businessData.orderOrderingSource.eatOut.orderMoney || 0)))])])], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "order-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.pageOptions(-1)
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
        return _vm.pageOptions(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px"
    }
  })])])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "身份验证",
      "center": "",
      "visible": _vm.closeBusinessModal,
      "width": "30%",
      "close-on-click-modal": false,
      "before-close": _vm.closeBusinessDialog,
      "id": "businessDialog"
    },
    on: {
      "update:visible": function($event) {
        _vm.closeBusinessModal = $event
      }
    }
  }, [_c('div', [
    [_c('div', {
      staticStyle: {
        "margin-top": "10px"
      }
    }, [_c('h3', {
      staticStyle: {
        "font-weight": "bold",
        "margin-left": "5px",
        "display": "inline-block",
        "padding": "10px"
      }
    }, [_vm._v("请输入口令")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.closeBusinessPassword),
        expression: "closeBusinessPassword"
      }],
      staticStyle: {
        "display": "inline-block",
        "border": "1px solid grey",
        "height": "30px",
        "border-radius": "5px",
        "width": "50%"
      },
      attrs: {
        "type": "password",
        "autocomplete": "off",
        "readonly": "",
        "onfocus": "this.removeAttribute('readonly');",
        "data-name": "closeBusiness"
      },
      domProps: {
        "value": (_vm.closeBusinessPassword)
      },
      on: {
        "click": function($event) {
          return _vm.focus()
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.closeBusinessPassword = $event.target.value
        }
      }
    })])], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('div', {
      staticStyle: {
        "width": "100%",
        "margin-top": "20px",
        "text-align": "center"
      }
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          return _vm.closeBusinessDialog()
        }
      }
    }, [_vm._v("取 消")]), _vm._v("\n            \n        "), _c('el-button', {
      staticStyle: {
        "background-color": "#000",
        "color": "rgb(255, 255, 255)"
      },
      on: {
        "click": _vm.saveChange
      }
    }, [_vm._v("确 定")])], 1)])
  ], 2)]), _vm._v(" "), _c('reviewDetail', {
    ref: "reviewDetail"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-3ed64105", module.exports)
  }
}

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-dialog', {
    attrs: {
      "title": "现金审核付款明细",
      "visible": _vm.reviewModal,
      "width": "80%",
      "close-on-click-modal": false,
      "before-close": _vm.closeReviewDialog,
      "id": "reviewDialog"
    },
    on: {
      "update:visible": function($event) {
        _vm.reviewModal = $event
      }
    }
  }, [_c('div', {
    staticStyle: {
      "width": "70%"
    }
  }, [_c('el-table', {
    staticClass: "tb-edit",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "height": "500",
      "highlight-current-row": ""
    },
    on: {
      "row-click": _vm.handleCurrentChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "sort",
      "label": "序号",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.sort))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "项目",
      "width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.name))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "money",
      "label": "上报金额",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.money))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "auditMoney",
      "label": "复合金额",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.editStatus) ? _c('div', {
          staticStyle: {
            "background": "#eee"
          }
        }, [_c('el-input', {
          attrs: {
            "size": "small",
            "placeholder": "请输入"
          },
          on: {
            "focus": function($event) {
              return _vm.focus(scope.$index, scope.row)
            },
            "change": function($event) {
              return _vm.handleEdit(scope.$index, scope.row)
            }
          },
          model: {
            value: (_vm.number),
            callback: function($$v) {
              _vm.number = $$v
            },
            expression: "number"
          }
        }), _vm._v(" "), _c('span', [_vm._v(_vm._s(scope.row.auditMoney))])], 1) : _c('div', [_c('span', {
          style: ((scope.row.paymentModeId == 33 && _vm.compareMoney != _vm.formerMoney) ? 'color: red;' : '')
        }, [_vm._v(_vm._s(scope.row.auditMoney))])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "operator",
      "label": "更新人",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.operator))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "更新时间",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.createTime))])]
      }
    }])
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "margin-top": "20px",
      "text-align": "center"
    }
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        return _vm.closeReviewDialog()
      }
    }
  }, [_vm._v("取 消")]), _vm._v("\n            \n        "), _c('el-button', {
    style: (_vm.compareMoney != _vm.formerMoney ? 'background-color: #ccc;color: rgb(255, 255, 255);' : 'background-color: #000;color: rgb(255, 255, 255);'),
    on: {
      "click": _vm.saveChange
    }
  }, [_vm._v("结店")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "30%",
      "height": "400px",
      "position": "absolute",
      "right": "0",
      "bottom": "0"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('table', {
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "border-spacing": "5px 5px"
    }
  }, _vm._l((_vm.keyBoard), function(row) {
    return _c('tr', _vm._l((row), function(key) {
      return _c('td', {
        staticStyle: {
          "width": "25%",
          "height": "100%"
        },
        attrs: {
          "rowspan": key == '确定' ? 2 : 1
        }
      }, [_c('button', {
        staticClass: "key-board",
        style: (key == '确定' ? 'height:138px;background-color:#ffbf34;color:#FFFFFF' : ''),
        attrs: {
          "type": "button"
        },
        on: {
          "click": function($event) {
            return _vm.keyBoardHandler(key)
          }
        }
      }, [_vm._v("\n                  " + _vm._s(key) + "\n                ")])])
    }), 0)
  }), 0)])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "查询现金审核付款明细",
      "visible": _vm.findReviewModal,
      "width": "80%",
      "close-on-click-modal": false,
      "before-close": _vm.closeReviewDialog1
    },
    on: {
      "update:visible": function($event) {
        _vm.findReviewModal = $event
      }
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-col', {
    staticClass: "tool-content",
    staticStyle: {
      "margin-bottom": "30px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-date-picker', {
    attrs: {
      "align": "right",
      "type": "date",
      "clearable": false,
      "placeholder": "选择日期",
      "editable": false
    },
    model: {
      value: (_vm.findReportDate),
      callback: function($$v) {
        _vm.findReportDate = $$v
      },
      expression: "findReportDate"
    }
  }), _vm._v(" "), _c('el-button', {
    staticClass: "tool-search-btn",
    staticStyle: {
      "background-color": "#FFBF34",
      "border": "none"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.find()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('el-button', {
    staticClass: "tool-search-btn",
    staticStyle: {
      "background-color": "#FFBF34",
      "border": "none"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.print()
      }
    }
  }, [_vm._v("打印")])], 1), _vm._v(" "), _c('el-table', {
    staticClass: "tb-edit",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.findTableData,
      "border": "",
      "height": "500",
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "项目",
      "width": "180",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.name))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "money",
      "label": "上报金额",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.money))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "auditMoney",
      "label": "复合金额",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.auditMoney))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "operator",
      "label": "更新人",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.operator))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "更新时间",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('span', [_vm._v(_vm._s(scope.row.createTime))])]
      }
    }])
  })], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-59415fe4", module.exports)
  }
}

/***/ })

});