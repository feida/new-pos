webpackJsonp([2],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(489)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(456),
  /* template */
  __webpack_require__(540),
  /* scopeId */
  "data-v-4c6cf2a1",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/pay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c6cf2a1", Component.options)
  } else {
    hotAPI.reload("data-v-4c6cf2a1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".detail-wrapper[data-v-54fe6d6e]{text-align:center;height:54px;line-height:54px;background-color:#fff;padding-left:18px;padding-right:18px}.details-item[data-v-54fe6d6e]{margin-top:8px;font-size:14px;word-wrap:break-word;padding-bottom:10px;color:#666}.detail-button[data-v-54fe6d6e]{width:68px;height:36px;font-size:16px;border-radius:5px;border:1px solid #000;background-color:#fff}.details-button-active[data-v-54fe6d6e]{border:none;background-color:#ffbf34;color:#fff}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/basic/car-detail.vue"],"names":[],"mappings":"AACA,iCACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,sBAA0B,AAC1B,kBAAmB,AACnB,kBAAoB,CACrB,AACD,+BACE,eAAgB,AAChB,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,UAAY,CACb,AACD,gCACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,sBAAuB,AACvB,qBAAuB,CACxB,AACD,wCACE,YAAa,AACb,yBAA0B,AAC1B,UAAe,CAChB","file":"car-detail.vue","sourcesContent":["\n.detail-wrapper[data-v-54fe6d6e] {\n  text-align: center;\n  height: 54px;\n  line-height: 54px;\n  background-color: #FFFFFF;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n.details-item[data-v-54fe6d6e] {\n  margin-top: 8px;\n  font-size: 14px;\n  word-wrap: break-word;\n  padding-bottom: 10px;\n  color: #666;\n}\n.detail-button[data-v-54fe6d6e] {\n  width: 68px;\n  height: 36px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  background-color: #fff;\n}\n.details-button-active[data-v-54fe6d6e] {\n  border: none;\n  background-color: #ffbf34;\n  color: #FFFFFF;\n}\n"],"sourceRoot":""}]);

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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_orderApi__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_generalUtil__ = __webpack_require__(382);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'car-detail',
  props: ['orderInfo', 'shopModel'],
  data: function data() {
    return {
      showDetails: false,
      customerInfo: {},
      detailList: [],
      customer_status: false
    };
  },

  watch: {
    orderInfo: {
      handler: function handler(orderInfo) {
        // this.getCustomerInfo(orderInfo.customer_id);
      },
      deep: true
    }
  },
  methods: {
    showDetail: function showDetail() {
      this.showDetails = !this.showDetails;
      this.getCustomerInfo(this.orderInfo.customer_id);
    },
    getCustomerInfo: function getCustomerInfo(customerId) {
      var _this = this;

      var that = this;
      this.detailList = [];
      if (customerId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_orderApi__["f" /* getCustomerInfo */])(customerId).then(function (res) {
          if (res.ok) {
            that.detailList.push({ name: _this.$t('carDetail.telphone'), "value": !!res.data ? res.data.telephone : '无' }, { name: _this.$t('carDetail.serialNumber'), "value": that.orderInfo.serial_number || '无' }, { name: _this.$t('carDetail.createTime'), "value": that.formatDate(that.orderInfo.create_time) || '无' }, { name: _this.$t('carDetail.posDiscount'), "value": '￥' + that.orderInfo.order_pos_discount_money || '0' }, { name: _this.$t('carDetail.posErase'), "value": '￥' + that.orderInfo.erase_money || '0' }, { name: _this.$t('carDetail.remark'), "value": that.orderInfo.remark || '无' });
          }
        });
      } else {
        that.detailList.push({ name: this.$t('carDetail.telphone'), "value": '无' }, { name: this.$t('carDetail.serialNumber'), "value": that.orderInfo.serial_number || '无' }, { name: this.$t('carDetail.createTime'), "value": that.formatDate(that.orderInfo.create_time) || '无' }, { name: this.$t('carDetail.posDiscount'), "value": '￥' + that.orderInfo.order_pos_discount_money || '0' }, { name: this.$t('carDetail.posErase'), "value": '￥' + that.orderInfo.erase_money || '0' }, { name: this.$t('carDetail.remark'), "value": that.orderInfo.remark || '无' });
      }
    },

    formatDate: function formatDate(date) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_generalUtil__["a" /* formatDate */])(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
    }

  }
});

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(381);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("10693b60", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(381, function() {
     var newContent = __webpack_require__(381);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(392)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(389),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  "data-v-54fe6d6e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/basic/car-detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] car-detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54fe6d6e", Component.options)
  } else {
    hotAPI.reload("data-v-54fe6d6e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "detail-wrapper"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('span', {
    staticStyle: {
      "display": "inline-block"
    }
  }, [(_vm.orderInfo.data_origin == 1) ? _c('span', [_c('i', {
    staticClass: "iconfont icon-shouji",
    staticStyle: {
      "font-size": "28px"
    }
  })]) : _c('i', {
    staticClass: "iconfont icon-computer3diannao",
    staticStyle: {
      "font-size": "28px"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('span', {
    staticStyle: {
      "display": "inline-block",
      "width": "68px",
      "height": "36px",
      "line-height": "36px",
      "font-size": "20px"
    }
  }, [_vm._v("\n          " + _vm._s((_vm.shopModel == 2 || _vm.shopModel == 7) ? _vm.orderInfo.ver_code : (_vm.orderInfo.table_number || _vm.$t('common.none'))) + "\n        ")])]), _vm._v(" "), _c('button', {
    staticClass: "detail-button",
    class: _vm.showDetails == true ? 'details-button-active' : 'details-button',
    on: {
      "click": function($event) {
        return _vm.showDetail()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('carDetail.detail')))])], 1)], 1), _vm._v(" "), (_vm.showDetails == true) ? _c('div', {
    staticStyle: {
      "height": "5px",
      "background-color": "#eee"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showDetails == true) ? _c('div', {
    staticStyle: {
      "padding": "5px 18px",
      "background-color": "#FFFFFF"
    }
  }, [_c('ul', {}, [(_vm.orderInfo.distribution_mode_id == 1) ? _c('li', {
    staticClass: " details-item",
    staticStyle: {
      "display": "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.$t('console.tanshi')) + " " + _vm._s(_vm.orderInfo.table_number))]) : _c('li', {
    staticClass: " details-item",
    staticStyle: {
      "display": "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.$t('console.waidai')) + " " + _vm._s(_vm.orderInfo.table_number))]), _vm._v(" "), _c('li', {
    staticClass: " details-item",
    staticStyle: {
      "display": "inline-block",
      "float": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t('console.peopleNum')) + " :" + _vm._s(_vm.orderInfo.customer_count || _vm.$t('common.none')))]), _vm._v(" "), _c('li', {
    staticClass: " details-item"
  }, [_vm._v(_vm._s(_vm.$t('carDetail.verCode')) + "  " + _vm._s(_vm.orderInfo.ver_code || _vm.$t('common.none')))]), _vm._v(" "), _vm._l((_vm.detailList), function(name, index) {
    return _c('li', {
      staticClass: " details-item"
    }, [_vm._v(_vm._s(_vm.detailList[index].name) + ":" + _vm._s(_vm.detailList[index].value))])
  })], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-54fe6d6e", module.exports)
  }
}

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".el-form-item__label{font-size:18px}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/discountPay.vue"],"names":[],"mappings":"AACA,qBACE,cAAgB,CACjB","file":"discountPay.vue","sourcesContent":["\n.el-form-item__label {\n  font-size: 18px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".discount-package-item-activate[data-v-043762ce]{border:none;background-color:#ffbf34;border:2px solid #ffbf34;color:#fff}.discount-package-item[data-v-043762ce]{border:1px solid #000;height:40px;line-height:40px;font-size:18px;text-align:center;margin:15px}.pay_el-form-item__label [data-v-043762ce]{font-size:20px!important;text-align:right!important}.discount-input[data-v-043762ce]{font-size:22px;height:40px;text-align:right}.discount-input[data-v-043762ce]:after{content:\"%\"}.discount-input[data-v-043762ce]:after,.not-discount-input[data-v-043762ce]:after{display:inline-block;position:absolute;right:1px;font-size:22px;color:#999}.btn-number[data-v-043762ce]{width:90%;height:60px;margin:5px;background-color:#fff;font-size:22px;font-weight:700}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/discountPay.vue"],"names":[],"mappings":"AACA,iDACI,YAAa,AACb,yBAAoC,AACpC,yBAAoC,AACpC,UAA0B,CAC7B,AACD,wCACI,sBAAwB,AACxB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,WAAa,CAChB,AACD,2CACI,yBAA2B,AAC3B,0BAA6B,CAChC,AACD,iCACI,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACrB,AACD,uCAII,WAAa,CAGhB,AACD,kFAPI,qBAAsB,AACtB,kBAAmB,AACnB,UAAW,AAEX,eAAgB,AAChB,UAAY,CASf,AACD,6BACI,UAAW,AACX,YAAa,AACb,WAAY,AACZ,sBAA0B,AAC1B,eAAgB,AAChB,eAAkB,CACrB","file":"discountPay.vue","sourcesContent":["\n.discount-package-item-activate[data-v-043762ce] {\n    border: none;\n    background-color: rgb(255, 191, 52);\n    border: 2px solid rgb(255, 191, 52);\n    color: rgb(255, 255, 255);\n}\n.discount-package-item[data-v-043762ce] {\n    border: 1px solid black;\n    height: 40px;\n    line-height: 40px;\n    font-size: 18px;\n    text-align: center;\n    margin: 15px;\n}\n.pay_el-form-item__label *[data-v-043762ce] {\n    font-size: 20px !important;\n    text-align: right !important;\n}\n.discount-input[data-v-043762ce] {\n    font-size: 22px;\n    height: 40px;\n    text-align: right;\n}\n.discount-input[data-v-043762ce]::after {\n    display: inline-block;\n    position: absolute;\n    right: 1px;\n    content: '%';\n    font-size: 22px;\n    color: #999;\n}\n.not-discount-input[data-v-043762ce]:after {\n    display: inline-block;\n    position: absolute;\n    right: 1px;\n    /*content: '元';*/\n    font-size: 22px;\n    color: #999;\n}\n.btn-number[data-v-043762ce] {\n    width: 90%;\n    height: 60px;\n    margin: 5px;\n    background-color: #FFFFFF;\n    font-size: 22px;\n    font-weight: bold;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".pay-title[data-v-2054c884]{color:#666;padding-left:22px;height:80px;line-height:80px;font-weight:700}.pay-wrap[data-v-2054c884]{width:100%;height:262px;display:flex;justify-content:start;flex-wrap:wrap}.pay-type-info-item[data-v-2054c884]{width:33%;height:110px}.icon[data-v-2054c884]{width:40px;height:40px;vertical-align:-.15em;fill:currentColor;overflow:hidden}.pay-type-item-details[data-v-2054c884]{text-align:center;width:90%;margin:0;margin-top:5px;padding:0}.delete-pay[data-v-2054c884]{width:60%;margin-top:5px;display:inline-block;border:1px solid #000;border-radius:5px;color:#666}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/hasPayArea.vue"],"names":[],"mappings":"AACA,4BACI,WAAY,AACZ,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,eAAkB,CACrB,AACD,2BACI,WAAY,AACZ,aAAc,AACd,aAAc,AACd,sBAAuB,AACvB,cAAgB,CACnB,AACD,qCAEI,UAAW,AACX,YAAc,CACjB,AACD,uBACI,WAAY,AACZ,YAAa,AACb,sBAAwB,AACxB,kBAAmB,AACnB,eAAiB,CACpB,AACD,wCAEI,kBAAmB,AACnB,UAAW,AACX,SAAY,AACZ,eAAgB,AAChB,SAAW,CACd,AACD,6BACI,UAAW,AACX,eAAgB,AAChB,qBAAsB,AACtB,sBAAwB,AACxB,kBAAmB,AACnB,UAAY,CACf","file":"hasPayArea.vue","sourcesContent":["\n.pay-title[data-v-2054c884] {\n    color: #666;\n    padding-left: 22px;\n    height: 80px;\n    line-height: 80px;\n    font-weight: bold;\n}\n.pay-wrap[data-v-2054c884] {\n    width: 100%;\n    height: 262px;\n    display: flex;\n    justify-content: start;\n    flex-wrap: wrap;\n}\n.pay-type-info-item[data-v-2054c884] {\n    /*margin-top: 32px;*/\n    width: 33%;\n    height: 110px;\n}\n.icon[data-v-2054c884] {\n    width: 40px;\n    height: 40px;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n.pay-type-item-details[data-v-2054c884] {\n    /*border: 1px solid black;*/\n    text-align: center;\n    width: 90%;\n    margin: 0px;\n    margin-top: 5px;\n    padding: 0;\n}\n.delete-pay[data-v-2054c884] {\n    width: 60%;\n    margin-top: 5px;\n    display: inline-block;\n    border: 1px solid black;\n    border-radius: 5px;\n    color: #666;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".pay-info-details[data-v-2338ebd0]{height:40%;border-radius:5px;background-color:#fff}.pay-info-details>li[data-v-2338ebd0]{height:25%}.pay-info-details>li>div[data-v-2338ebd0]{height:45px;line-height:45px;margin-top:5px;font-size:20px;color:#666;text-indent:10px}.pay-info-details>li>div>p[data-v-2338ebd0]:first-of-type{display:inline-block;height:100%;color:#666}.pay-info-details>li>div>p[data-v-2338ebd0]:nth-of-type(2){float:right;margin-right:20px;height:100%;color:#999}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/topLeftArea.vue"],"names":[],"mappings":"AACA,mCACE,WAAY,AACZ,kBAAmB,AACnB,qBAA0B,CAC3B,AACD,sCACE,UAAY,CACb,AACD,0CACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAEhB,eAAgB,AAChB,WAAY,AACZ,gBAAkB,CACnB,AACD,0DACE,qBAAsB,AACtB,YAAa,AACb,UAAW,CACZ,AACD,2DACE,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,UAAW,CACZ","file":"topLeftArea.vue","sourcesContent":["\n.pay-info-details[data-v-2338ebd0] {\n  height: 40%;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n}\n.pay-info-details > li[data-v-2338ebd0] {\n  height: 25%;\n}\n.pay-info-details > li > div[data-v-2338ebd0] {\n  height: 45px;\n  line-height: 45px;\n  margin-top: 5px;\n\n  font-size: 20px;\n  color: #666;\n  text-indent: 10px;\n}\n.pay-info-details > li > div > p[data-v-2338ebd0]:nth-of-type(1){\n  display: inline-block;\n  height: 100%;\n  color:#666;\n}\n.pay-info-details > li > div > p[data-v-2338ebd0]:nth-of-type(2){\n  float: right;\n  margin-right: 20px;\n  height: 100%;\n  color:#999;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".pay-type-item[data-v-2829e5ae]{width:100%;padding:10px 15px;line-height:20px;white-space:normal;position:relative;border:none}.select-pay-type[data-v-2829e5ae]{background-color:#eee;color:#000;border:none;border-radius:0;border-left:5px solid #ffbf34}.icon[data-v-2829e5ae]{width:35px;height:35px;vertical-align:-.15em;fill:currentColor;overflow:hidden}.pageButton[data-v-2829e5ae]{width:100%;position:absolute;bottom:0}.page-button-item[data-v-2829e5ae]{width:80%;text-align:center;margin-bottom:10px;padding-left:15px;color:#1f2d3d;border:1px solid #666}.pageButtonActive[data-v-2829e5ae]{background-color:#ffbf34;color:#fff!important;border:none!important}#familyWrapper[data-v-2829e5ae]{overflow-x:hidden}#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar{width:1px;height:1px}#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/payType.vue"],"names":[],"mappings":"AACA,gCACI,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CAChB,AACD,kCACI,sBAAuB,AACvB,WAAY,AACZ,YAAa,AACb,gBAAmB,AACnB,6BAA+B,CAClC,AACD,uBACI,WAAY,AACZ,YAAa,AACb,sBAAwB,AACxB,kBAAmB,AACnB,eAAiB,CACpB,AACD,6BACE,WAAY,AACZ,kBAAmB,AACnB,QAAU,CACX,AACD,mCACE,UAAW,AAEX,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,cAAe,AACf,qBAAuB,CACxB,AACD,mCACE,yBAA0B,AAC1B,qBAAuB,AACvB,qBAAwB,CACzB,AACD,gCAEE,iBAAmB,CACpB,AACD,mDACE,UAAW,AACX,UAAY,CACb,AACD,yDACE,kBAAmB,AACnB,gDAAkD,AAClD,yBAA4B,CAC7B,AACD,yDACE,gDAAkD,AAClD,gBAAiB,AACjB,yBAA4B,CAC7B","file":"payType.vue","sourcesContent":["\n.pay-type-item[data-v-2829e5ae] {\n    width: 100%;\n    padding: 10px 15px;\n    line-height: 20px;\n    white-space: normal;\n    position: relative;\n    border: none;\n}\n.select-pay-type[data-v-2829e5ae] {\n    background-color: #EEE;;\n    color: #000;\n    border: none;\n    border-radius: 0px;\n    border-left: 5px solid #ffbf34;\n}\n.icon[data-v-2829e5ae] {\n    width: 35px;\n    height: 35px;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n.pageButton[data-v-2829e5ae] {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n.page-button-item[data-v-2829e5ae] {\n  width: 80%;\n  /*background-color: #FFBF34;*/\n  text-align: center;\n  margin-bottom: 10px;\n  padding-left: 15px;\n  color: #1f2d3d;\n  border: 1px solid #666;\n}\n.pageButtonActive[data-v-2829e5ae] {\n  background-color: #ffbf34;\n  color: #fff !important;\n  border: none !important;\n}\n#familyWrapper[data-v-2829e5ae]{\n  /*overflow-y:scroll;*/\n  overflow-x: hidden;\n}\n#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar {/*滚动条整体样式*/\n  width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/\n  height: 1px;\n}\n#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.2);\n}\n#familyWrapper[data-v-2829e5ae]::-webkit-scrollbar-track {/*滚动条里面轨道*/\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".money-input[data-v-427f6130]{border:1px solid #2f2f2f;margin-left:5px;width:97%;height:48px;font-size:30px;text-align:right;padding-right:5px;background-color:#fff}.key-board[data-v-427f6130]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;color:#666;border-radius:4px;width:100%;height:65px;font-size:26px;font-weight:700}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/keyBoard.vue"],"names":[],"mappings":"AACA,8BACI,yBAA0B,AAC1B,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,4BACI,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,gBAAiB,AAEjB,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,eAAkB,CACrB","file":"keyBoard.vue","sourcesContent":["\n.money-input[data-v-427f6130] {\n    border: 1px solid #2f2f2f;\n    margin-left: 5px;\n    width: 97%;\n    height: 48px;\n    font-size: 30px;\n    text-align: right;\n    padding-right: 5px;\n    background-color: #fff;\n}\n.key-board[data-v-427f6130] {\n    display: inline-block;\n    line-height: 1;\n    white-space: nowrap;\n    cursor: pointer;\n    background: #fff;\n    /*border: 1px solid #c4c4c4;*/\n    color: #666;\n    border-radius: 4px;\n    width: 100%;\n    height: 65px;\n    font-size: 26px;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".left-wrapper[data-v-4c6cf2a1]{height:100%;position:relative;background-color:#fff;box-shadow:0 0 20px 0 rgba(0,0,0,.25),0 0 6px 0 rgba(0,0,0,.04)}.panel-title[data-v-4c6cf2a1]{font-size:22px;background-color:#252525;color:#fff}.panel-content[data-v-4c6cf2a1]{height:40px;line-height:40px;font-size:14px;color:#000;padding-left:5px;padding-bottom:2em;border-bottom:3px dashed transparent;background:linear-gradient(#fff,#fff) padding-box,repeating-linear-gradient(-45deg,#ccc,#ccc .25em,#fff 0,#fff .75em)}.car-total[data-v-4c6cf2a1]{height:50px;line-height:50px;border-top:5px solid #f2f2f2;font-size:22px;font-weight:700;text-align:center}.pay-wrapper[data-v-4c6cf2a1],.right-wrapper[data-v-4c6cf2a1]{height:100%}.pay-left-bottom[data-v-4c6cf2a1]{position:absolute;bottom:0}.pay-left-item[data-v-4c6cf2a1]{padding-left:10px;height:30px;line-height:20px;border-bottom:2px dashed #a9a9a9}.pay-left-item-button[data-v-4c6cf2a1]{height:50px;margin-left:30px}.pay-info[data-v-4c6cf2a1]{height:100%;overflow-y:hidden;overflow-x:hidden}.pay-type-wrapper[data-v-4c6cf2a1]{background-color:#fff;text-align:center}\n/*!*margin-top: 5px;*!*/\n/*!*margin-bottom: 10px;*!*/\n  /*!*margin-top: 32px;*!*/.pay-type-item-details[data-v-4c6cf2a1]{text-align:center;width:90%;margin:0;margin-top:5px;padding:0}.bottom-tool[data-v-4c6cf2a1]{position:absolute;bottom:0;width:100%;height:50px;line-height:50px;padding-left:10px;border-top:1px solid #d1dbe5;box-shadow:0 -2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);background-color:#fff}.key-board-panel[data-v-4c6cf2a1]{margin-bottom:10px}.car-table[data-v-4c6cf2a1]{width:100%;font-size:14px}.car-table-title-tr[data-v-4c6cf2a1]{background-color:#eef1f6;height:40px}.car-table-body-tr[data-v-4c6cf2a1]{text-align:center;height:40px;cursor:pointer}.car-table-body-tr td[data-v-4c6cf2a1],th[data-v-4c6cf2a1]{border-bottom:1px solid #dfe6ec}.car-table-body-package-tr[data-v-4c6cf2a1]{text-align:center;height:40px;background-color:#fff}.pay-img[data-v-4c6cf2a1]{width:25px;height:25px}.car-footer[data-v-4c6cf2a1]{position:absolute;bottom:0;width:100%;background-color:#fff;border-top:8px solid #f5f5f5}.operate-item[data-v-4c6cf2a1]{display:flex;justify-content:space-between;height:47px;line-height:47px;padding:0 20px;border-bottom:1px dashed #dfdfdf;color:#666;font-size:16px}.confirm-state[data-v-4c6cf2a1]{padding:1em;border:2px dashed transparent;background:linear-gradient(#fff,#fff) padding-box,repeating-linear-gradient(-45deg,#ccc,#ccc .25em,#fff 0,#fff .75em)}.order-page-wrapper[data-v-4c6cf2a1]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-4c6cf2a1]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-4c6cf2a1],.order-page-wrapper>.pre-page[data-v-4c6cf2a1]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar{width:4px;height:4px}#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.panel-title[data-v-4c6cf2a1]{height:50px;line-height:50px;font-size:20px;font-weight:700;text-align:center;background-color:#fff;color:#333;border-bottom:5px solid #f2f2f2;margin-bottom:10px}.mask-layer[data-v-4c6cf2a1]{width:100%;position:absolute;background-color:#000;opacity:.5}.el-button--primary[data-v-4c6cf2a1]{background-color:#eee;color:#000;border:none;border-radius:0;border-left:5px solid #ffbf34}.pay-info-details[data-v-4c6cf2a1]{height:40%;border-radius:5px;background-color:#fff}.pay-info-details>li[data-v-4c6cf2a1]{height:25%}.pay-info-details>li>div[data-v-4c6cf2a1]{height:45px;line-height:45px;margin-top:5px;font-size:20px;font-weight:700;color:#666;text-indent:10px}.pay-info-details>li>div>p[data-v-4c6cf2a1]:first-of-type{display:inline-block;height:100%;color:#666}.pay-info-details>li>div>p[data-v-4c6cf2a1]:nth-of-type(2){float:right;margin-right:20px;height:100%;color:#999}.pay-show-wrapper[data-v-4c6cf2a1]{margin-top:10px}.car-title[data-v-4c6cf2a1]{width:100%;color:#666}.car-title .car-title-item[data-v-4c6cf2a1]{font-size:14px;display:inline-block;padding-top:1%;padding-bottom:1%}.car-content-item[data-v-4c6cf2a1]{font-size:14px;word-wrap:break-word;color:#666}.bottom-btn-wrap[data-v-4c6cf2a1]{width:83.5%;background-color:#fff;padding:0 10px;height:50px;position:absolute;bottom:0}.operate-footer[data-v-4c6cf2a1]{height:50px;line-height:52px}.operate-footer-button[data-v-4c6cf2a1]{background-color:#000;height:45px;font-size:18px;color:#fff;border-radius:5px}.discount-package-item[data-v-4c6cf2a1]{border:1px solid #000;height:40px;line-height:40px;font-size:18px;text-align:center;margin:15px}.btn-number[data-v-4c6cf2a1]{width:90%;height:60px;margin:5px;background-color:#fff;font-size:22px;font-weight:700}.scan-paying[data-v-4c6cf2a1]{position:absolute;border-radius:14px;left:40%;background-color:#000;opacity:.5;width:200px;height:200px;z-index:999}.details-item[data-v-4c6cf2a1]{margin-top:8px;font-size:14px;word-wrap:break-word;color:#666}.details-button[data-v-4c6cf2a1]{border:1px solid #000;color:#000;background-color:#fff}.details-button-active[data-v-4c6cf2a1]{border:none;background-color:#ffbf34;color:#fff}.pay-btn-style[data-v-4c6cf2a1]{width:70%;font-size:18px}.add-article[data-v-4c6cf2a1]{display:inline-block;width:20px;height:20px;text-align:center;vertical-align:top;background-color:#75c2af;color:#fff;border-radius:50%;margin-left:-4%}.qr-btn[data-v-4c6cf2a1]{width:200px;height:50px;display:inline-block;line-height:35px;text-align:center;color:#606266;border-radius:4px;border:1px solid #dcdfe6;margin-right:8px;position:relative;top:1px;width:80px;height:36px}input[node-type=jsbridge][data-v-4c6cf2a1]{visibility:hidden}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/pay.vue"],"names":[],"mappings":"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","file":"pay.vue","sourcesContent":["\n.left-wrapper[data-v-4c6cf2a1]{\n  height: 100%;\n  position: relative;\n  background-color: #FFFFFF;\n  box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);\n}\n.panel-title[data-v-4c6cf2a1] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  background-color: #252525;\n  color: #FFFFFF;\n  /*border-bottom: 5px solid #F2F2F2;*/\n  /*margin-bottom: 10px;*/\n}\n.panel-content[data-v-4c6cf2a1] {\n\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  color: black;\n  padding-left: 5px;\n  padding-bottom: 2em;\n  border-bottom: 3px dashed transparent;\n  background: linear-gradient(white,white) padding-box,\n  repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);\n}\n.car-total[data-v-4c6cf2a1] {\n  height: 50px;\n  line-height: 50px;\n  border-top: 5px solid #F2F2F2;\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n}\n.right-wrapper[data-v-4c6cf2a1] {\n  height: 100%;\n  /*border-left: 6px solid #eee;*/\n}\n.pay-wrapper[data-v-4c6cf2a1] {\n  height: 100%;\n  /*padding-bottom: 50px;*/\n}\n.pay-left-bottom[data-v-4c6cf2a1] {\n  position: absolute;\n  bottom:0px;\n}\n.pay-left-item[data-v-4c6cf2a1]{\n  padding-left: 10px;\n  height: 30px;\n  line-height: 20px;\n  border-bottom: 2px dashed darkgrey;\n}\n.pay-left-item-button[data-v-4c6cf2a1]{\n  height: 50px;\n  /*line-height: 40px;*/\n  margin-left: 30px;\n}\n.pay-info[data-v-4c6cf2a1] {\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  /*margin-top: 10px;*/\n  /*padding: 10px;*/\n}\n.pay-type-wrapper[data-v-4c6cf2a1] {\n  /*height: 100%;*/\n  background-color: #FFFFFF;\n  /*overflow-y: hidden;*/\n  /*overflow-x: hidden;*/\n  text-align: center;\n}\n\n/*.pay-type-item {*/\n/*width: 100%;*/\n/*!*margin-top: 5px;*!*/\n/*!*margin-bottom: 10px;*!*/\n/*padding: 10px 15px;*/\n/*line-height: 20px;*/\n/*white-space: normal;*/\n/*position: relative;*/\n/*border: none;*/\n/*}*/\n\n/*.pay-type-info-item {*/\n  /*!*margin-top: 32px;*!*/\n  /*width: 33%;*/\n  /*height: 110px;*/\n/*}*/\n.pay-type-item-details[data-v-4c6cf2a1] {\n  /*border: 1px solid black;*/\n  text-align: center;\n  width: 90%;\n  margin:0px;\n  margin-top: 5px;\n  padding:0;\n}\n.bottom-tool[data-v-4c6cf2a1] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding-left: 10px;\n  border-top: 1px solid #d1dbe5;\n  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);\n  background-color: #FFFFFF;\n}\n.key-board-panel[data-v-4c6cf2a1] {\n  margin-bottom: 10px;\n}\n\n\n\n/*    购物车 table 样式    begin   */\n.car-table[data-v-4c6cf2a1] {\n  width: 100%;\n  font-size: 14px;\n}\n.car-table-title-tr[data-v-4c6cf2a1] {\n  background-color: #eef1f6;\n  height: 40px\n}\n.car-table-body-tr[data-v-4c6cf2a1] {\n  text-align: center;\n  height: 40px;\n  cursor: pointer;\n}\n.car-table-body-tr td[data-v-4c6cf2a1], th[data-v-4c6cf2a1] {\n  border-bottom: 1px solid #dfe6ec;\n}\n.car-table-body-package-tr[data-v-4c6cf2a1] {\n  text-align: center;\n  height: 40px;\n  background-color: #FFFFFF;\n}\n.pay-img[data-v-4c6cf2a1]{\n  width:25px;\n  height:25px;\n}\n.car-footer[data-v-4c6cf2a1] {\n  /*width: 100%;*/\n  /*position: absolute;*/\n  /*bottom:0px;*/\n  /*border-top: 5px solid #eee;*/\n  position: absolute;\n  bottom:0px;\n  width: 100%;\n  background-color: #FFFFFF;\n  border-top: 8px solid #f5f5f5;\n}\n.operate-item[data-v-4c6cf2a1] {\n  display: flex;\n  justify-content: space-between;\n  height: 47px;\n  line-height: 47px;\n  padding: 0px 20px;\n  border-bottom:1px dashed #dfdfdf;\n  color: #666;\n  font-size: 16px;\n}\n.confirm-state[data-v-4c6cf2a1]{\n  padding: 1em;\n  border: 2px dashed transparent;\n  background: linear-gradient(white,white) padding-box,\n  repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);\n}\n/*    购物车 table 样式    end   */\n\n\n/*  订单详情 翻页 begin*/\n.order-page-wrapper[data-v-4c6cf2a1]{\n  position: absolute;\n  top:35%;\n  right: 30px;\n  z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-4c6cf2a1]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  margin-bottom: 50px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-4c6cf2a1]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  background-color: #000000;\n  color: #FFF;\n  border-radius:50%;\n  cursor: pointer;\n  opacity: 0.6;\n}\n/*  订单详情 翻页 end*/\n\n/** 订单详情  滚动条  begin  **/\n#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  background: rgba(0,0,0,0.2);\n}\n#order-detail-wrapper[data-v-4c6cf2a1]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius: 0;\n  background: rgba(0,0,0,0.1);\n}\n/** 订单详情  滚动条  end  **/\n.panel-title[data-v-4c6cf2a1] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  background-color: #FFFFFF;\n  color: #333333;\n  border-bottom: 5px solid #F2F2F2;\n  margin-bottom: 10px;\n}\n/* 遮罩层 */\n.mask-layer[data-v-4c6cf2a1] {\n  /*height:100%;*/\n  width:100%;\n  position: absolute;\n  background-color: black;\n  opacity: 0.5;\n}\n.el-button--primary[data-v-4c6cf2a1] {\n  background-color: #EEE;;\n  color: #000;\n  border: none;\n  border-radius: 0px;\n  border-left: 5px solid #ffbf34;\n}\n\n/*.select-pay-type {*/\n/*background-color: #EEE;;*/\n/*color: #000;*/\n/*border: none;*/\n/*border-radius: 0px;*/\n/*border-left: 5px solid #ffbf34;*/\n/*}*/\n.pay-info-details[data-v-4c6cf2a1] {\n  height: 40%;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n}\n.pay-info-details > li[data-v-4c6cf2a1] {\n  height: 25%;\n}\n.pay-info-details > li > div[data-v-4c6cf2a1] {\n  height: 45px;\n  line-height: 45px;\n  margin-top: 5px;\n\n  font-size: 20px;\n  font-weight: bold;\n  color: #666;\n  text-indent: 10px;\n}\n.pay-info-details > li > div > p[data-v-4c6cf2a1]:nth-of-type(1){\n  display: inline-block;\n  height: 100%;\n  color:#666;\n}\n.pay-info-details > li > div > p[data-v-4c6cf2a1]:nth-of-type(2){\n  float: right;\n  margin-right: 20px;\n  height: 100%;\n  color:#999;\n}\n.pay-show-wrapper[data-v-4c6cf2a1] {\n  margin-top: 10px;\n  /*height: 55%;*/\n}\n\n/*.icon {*/\n/*width: 40px;*/\n/*height: 40px;*/\n/*vertical-align: -0.15em;*/\n/*fill: currentColor;*/\n/*overflow: hidden;*/\n/*}*/\n.car-title[data-v-4c6cf2a1] {\n  width: 100%;\n  color: #666;\n}\n.car-title .car-title-item[data-v-4c6cf2a1] {\n  font-size: 14px;\n  display: inline-block;\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n.car-content[data-v-4c6cf2a1] {\n  /*border-top: dashed 1px black;*/\n}\n.car-content-item[data-v-4c6cf2a1] {\n  font-size: 14px;\n  word-wrap: break-word;\n  color: #666;\n}\n.bottom-btn-wrap[data-v-4c6cf2a1] {\n  width: 83.5%;\n  background-color: #FFFFFF;\n  padding: 0 10px;\n  height: 50px;\n  position: absolute;\n  bottom: 0;\n}\n.operate-footer[data-v-4c6cf2a1] {\n  height: 50px;\n  line-height: 52px;\n}\n.operate-footer-button[data-v-4c6cf2a1]{\n  background-color: #000;\n  height: 45px;\n  font-size: 18px;\n  color: #fff;\n  border-radius: 5px;\n}\n.discount-package-item[data-v-4c6cf2a1] {\n  border:1px solid black;\n  height: 40px;\n  line-height:40px;\n  font-size: 18px;\n  text-align: center;\n  margin: 15px;\n}\n.btn-number[data-v-4c6cf2a1]{\n  width:90%;\n  height:60px;\n  margin:5px;\n  background-color: #FFFFFF;\n  font-size:22px;\n  font-weight: bold;\n}\n.scan-paying[data-v-4c6cf2a1]{\n  position: absolute;\n  border-radius:14px;\n  left:40%;\n  background-color: black;\n  opacity: 0.5;\n  width:200px;\n  height:200px;\n  z-index: 999;\n}\n.details-item[data-v-4c6cf2a1] {\n  margin-top: 8px;\n  font-size: 14px;\n  word-wrap: break-word;\n  color: #666;\n}\n.details-button[data-v-4c6cf2a1] {\n  border: 1px solid black;\n  color: black;\n  background-color: #fff;\n}\n.details-button-active[data-v-4c6cf2a1] {\n  border: none;\n  background-color: #ffbf34;\n  color: #FFFFFF;\n}\n.pay-btn-style[data-v-4c6cf2a1] {\n  width: 70%;\n  font-size: 18px;\n}\n.add-article[data-v-4c6cf2a1] {\n  display: inline-block;\n  width: 20px;height: 20px;\n  text-align: center;vertical-align: top;\n  background-color: #75C2AF;color: #FFFFFF;\n  border-radius:50%;margin-left: -4%;\n}\n.qr-btn[data-v-4c6cf2a1]{\n\n  width:200px;\n  height:50px;\n  display: inline-block;\n  /*background-color:#157EFB ;*/\n  line-height: 35px;\n  text-align: center;\n  color:#606266;\n  border-radius: 4px;\n  border: 1px solid  #dcdfe6;\n  margin-right: 8px;\n  position: relative;\n  top: 1px;\n  width: 80px;\n  height: 36px;\n}\ninput[node-type=jsbridge][data-v-4c6cf2a1]{\n  visibility: hidden;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".icon[data-v-63a44935]{width:40px;height:40px;vertical-align:-.15em;fill:currentColor;overflow:hidden}.car-title[data-v-63a44935]{width:100%;color:#666}.car-title .car-title-item[data-v-63a44935]{font-size:14px;display:inline-block;padding-top:1%;padding-bottom:1%}.car-content-item[data-v-63a44935]{font-size:14px;word-wrap:break-word;color:#666}.add-article[data-v-63a44935]{display:inline-block;width:20px;height:20px;text-align:center;vertical-align:top;background-color:#75c2af;color:#fff;border-radius:50%;margin-left:-4%}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/payCar.vue"],"names":[],"mappings":"AACA,uBACI,WAAY,AACZ,YAAa,AACb,sBAAwB,AACxB,kBAAmB,AACnB,eAAiB,CACpB,AACD,4BACI,WAAY,AACZ,UAAY,CACf,AACD,4CACI,eAAgB,AAChB,qBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACtB,AAID,mCACI,eAAgB,AAChB,qBAAsB,AACtB,UAAY,CACf,AACD,8BACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,yBAA0B,AAC1B,WAAe,AACf,kBAAmB,AACnB,eAAiB,CACpB","file":"payCar.vue","sourcesContent":["\n.icon[data-v-63a44935] {\n    width: 40px;\n    height: 40px;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n.car-title[data-v-63a44935] {\n    width: 100%;\n    color: #666;\n}\n.car-title .car-title-item[data-v-63a44935] {\n    font-size: 14px;\n    display: inline-block;\n    padding-top: 1%;\n    padding-bottom: 1%;\n}\n.car-content[data-v-63a44935] {\n    /*border-top: dashed 1px black;*/\n}\n.car-content-item[data-v-63a44935] {\n    font-size: 14px;\n    word-wrap: break-word;\n    color: #666;\n}\n.add-article[data-v-63a44935] {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    vertical-align: top;\n    background-color: #75C2AF;\n    color: #FFFFFF;\n    border-radius: 50%;\n    margin-left: -4%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".pay-info-details[data-v-7beb955d]{height:40%;border-radius:5px;background-color:#fff}.pay-info-details>li[data-v-7beb955d]{height:25%}.pay-info-details>li>div[data-v-7beb955d]{height:45px;line-height:45px;margin-top:5px;font-size:20px;color:#666;text-indent:10px}.pay-info-details>li>div>p[data-v-7beb955d]:first-of-type{display:inline-block;height:100%;color:#666}.pay-info-details>li>div>p[data-v-7beb955d]:nth-of-type(2){float:right;margin-right:20px;height:100%;color:#999}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/topRightArea.vue"],"names":[],"mappings":"AACA,mCACE,WAAY,AACZ,kBAAmB,AACnB,qBAA0B,CAC3B,AACD,sCACE,UAAY,CACb,AACD,0CACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAEhB,eAAgB,AAChB,WAAY,AACZ,gBAAkB,CACnB,AACD,0DACE,qBAAsB,AACtB,YAAa,AACb,UAAW,CACZ,AACD,2DACE,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,UAAW,CACZ","file":"topRightArea.vue","sourcesContent":["\n.pay-info-details[data-v-7beb955d] {\n  height: 40%;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n}\n.pay-info-details > li[data-v-7beb955d] {\n  height: 25%;\n}\n.pay-info-details > li > div[data-v-7beb955d] {\n  height: 45px;\n  line-height: 45px;\n  margin-top: 5px;\n\n  font-size: 20px;\n  color: #666;\n  text-indent: 10px;\n}\n.pay-info-details > li > div > p[data-v-7beb955d]:nth-of-type(1){\n  display: inline-block;\n  height: 100%;\n  color:#666;\n}\n.pay-info-details > li > div > p[data-v-7beb955d]:nth-of-type(2){\n  float: right;\n  margin-right: 20px;\n  height: 100%;\n  color:#999;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);
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
//
//
//
//
//
//
//
//



/*import {
    verificationOfOrders
} from '../../api/api'*/

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "discountPay",
    data: function data() {
        return {
            regNumber: '0',
            flag: true
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        orderInfo: 'orderInfo',
        discountPackage: 'discountPackage',
        formatDiscount: 'formatDiscount',
        schemaDialog: 'schemaDialog',
        autoFocus: 'autoFocus',
        currentOrderInfo: 'currentOrderInfo',
        payInfo: 'payInfo'
    })),
    directives: {
        focus: {
            update: function update(el, _ref) {
                var value = _ref.value;

                if (value) {
                    el.focus();
                }
            }
        }
    },
    watch: {
        schemaDialog: {
            handler: function handler(newVal) {
                if (newVal.onDiscountDialog) {
                    var select = Number(this.discountPackage.selectDiscountActive);
                    if (select == 0) {
                        this.$nextTick(function () {
                            document.getElementById("select-input-discount").focus();
                        });
                    } else if (select == 1) {
                        this.$nextTick(function () {
                            document.getElementById("select-input-reduce").focus();
                        });
                    }
                }
                if (newVal.onErasingDialog) {
                    this.$nextTick(function () {
                        document.getElementById("select-input-eras").focus();
                    });
                }
            },
            deep: true
        }
    },
    methods: {
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        },
        selectInput: function selectInput(str) {
            // 选择输入框
            this.selectDiscountString = str;
        },
        dialogKeyBoard: function dialogKeyBoard(number) {
            if (number == "←") {
                if (this.selectDiscountString == "select-input-discount") {
                    // 折扣
                    var disCount = "" + this.formatDiscount.onDiscount.discountRate.length;
                    document.getElementById("select-input-discount").focus();
                    this.formatDiscount.onDiscount.discountRate = this.regNumber.substring(0, disCount - 1);
                } else if (this.selectDiscountString == "select-input-remove") {
                    // 不打折
                    document.getElementById("select-input-remove").focus();
                    var remCount = this.formatDiscount.onDiscount.removeMoney.length;
                    this.formatDiscount.onDiscount.removeMoney = this.formatDiscount.onDiscount.removeMoney.substring(0, remCount - 1);
                } else if (this.selectDiscountString == "select-input-reduce") {
                    // 按金额优惠
                    document.getElementById("select-input-reduce").focus();
                    var redCount = this.formatDiscount.onReduceMoney.reduceMoney.length;
                    this.formatDiscount.onReduceMoney.reduceMoney = this.formatDiscount.onReduceMoney.reduceMoney.toString().substring(0, redCount - 1);
                } else if (this.selectDiscountString == "select-input-eras") {
                    // 抹零
                    document.getElementById("select-input-eras").focus();
                    var _redCount = this.formatDiscount.onErasing.erasing.length;
                    this.formatDiscount.onErasing.erasing = this.formatDiscount.onErasing.erasing.toString().substring(0, _redCount - 1);
                    if (this.formatDiscount.onErasing.erasing == 0 || this.formatDiscount.onErasing.erasing == '0') this.formatDiscount.onErasing.erasing = '0';
                }
            } else {
                if (this.selectDiscountString == "select-input-discount") {
                    // 折扣输入

                    this.regNumber = this.formatDiscount.onDiscount.discountRate || "";
                    if (this.regNumber == 100) {
                        this.regNumber = '';
                    }
                    this.regNumber += number.toString();
                    if (/^[0-9]{1,2}$/.test(this.regNumber)) {
                        this.formatDiscount.onDiscount.discountRate = this.regNumber;
                    } else {
                        return this.$message.warning("折扣必须为100之内的正整数");
                    }
                } else if (this.selectDiscountString == "select-input-remove") {
                    // 不参与打折金额
                    document.getElementById("select-input-remove").focus();
                    this.regNumber = this.formatDiscount.onDiscount.removeMoney || "";

                    if ((this.regNumber == 0 || this.regNumber == '0') && number !== '.' && this.regNumber.indexOf(".") === -1) {
                        this.regNumber = '';
                    }
                    this.regNumber += '' + number;
                    if (/^\d*\.{0,1}\d{0,2}$/.test(+this.regNumber)) {
                        if (+this.regNumber <= +this.formatDiscount.totalMoney) {
                            this.formatDiscount.onDiscount.removeMoney = this.regNumber;
                        } else if (+this.regNumber > +this.formatDiscount.totalMoney) {
                            return this.$message("最大不能超过总金额");
                        }
                    } else {
                        return this.$message("只能为纯数字，并且小数点为两位");
                    }
                } else if (this.selectDiscountString == "select-input-reduce") {
                    // 优惠金额
                    document.getElementById("select-input-reduce").focus();
                    this.regNumber = this.formatDiscount.onReduceMoney.reduceMoney.toString();
                    if ((this.regNumber == 0 || this.regNumber == '0') && number !== '.' && this.regNumber.indexOf(".") === -1) {
                        this.regNumber = '';
                    } else if (this.regNumber == "" && number == ".") {
                        return this.formatDiscount.onReduceMoney.reduceMoney = "0.";
                    }
                    this.regNumber += '' + number;
                    if (/^\d*\.{0,1}\d{0,2}$/.test(this.regNumber)) {
                        if (+this.regNumber <= +this.payInfo.amountMoney) {
                            this.formatDiscount.onReduceMoney.reduceMoney = this.regNumber; //.substring(0, this.regNumber.indexOf(".") + 3);
                        } else {
                            return this.$message("最大不能超过总金额");
                        }
                    } else {
                        return this.$message("只能为纯数字，并且小数点为两位");
                    }
                } else if (this.selectDiscountString == "select-input-eras") {
                    // 抹零
                    document.getElementById("select-input-eras").focus();
                    this.regNumber = this.formatDiscount.onErasing.erasing || "";
                    if ((this.regNumber == 0 || this.regNumber == '0') && number !== '.' && this.regNumber.indexOf(".") === -1) {
                        this.regNumber = '';
                    }
                    this.regNumber += number.toString();
                    if (/^\d*\.{0,1}\d{0,2}$/.test(this.regNumber)) {
                        if (this.regNumber <= +(this.currentOrderInfo.amount_with_children || this.currentOrderInfo.order_money)) {
                            this.formatDiscount.onErasing.erasing = this.regNumber;
                        } else {
                            return this.$message("最大不能超过总金额");
                        }
                    } else {
                        return this.$message("只能为纯数字，并且小数点为两位");
                    }
                }
            }
            this.calcDiscountMoney();
        },
        calcDiscountMoney: function calcDiscountMoney() {
            // 第一步 不参与折扣的钱 this.formatDiscount.onDiscount.removeMoney
            // 第二步 参与打折的钱 = 订单总额 - 不参与折扣的钱
            var tempMoney = Number(this.formatDiscount.onDiscount.removeMoney).toFixed(2) > 0 ? (Number(this.payInfo.amountMoney) - Number(this.formatDiscount.onDiscount.removeMoney).toFixed(2)).toFixed(2) : Number(this.payInfo.amountMoney).toFixed(2);
            // 第三步 打折后应付的钱 = 参与打折的钱 x 折扣率 + 不参与折扣的钱 - 按金额优惠的钱 - 抹零的钱
            this.formatDiscount.amountMoney = (Number(tempMoney) * Number(this.formatDiscount.onDiscount.discountRate || 100).toFixed(2) / 100 + Number(this.formatDiscount.onDiscount.removeMoney) - Number(this.formatDiscount.onReduceMoney.reduceMoney) - Number(this.formatDiscount.onErasing.erasing)).toFixed(2);
            // 第四步 打折的钱 = 订单总额 - 打折后应付的钱
            this.formatDiscount.discountMoney = +this.formatDiscount.totalMoney - +this.formatDiscount.amountMoney;
            // 第五步 真实折扣率 = 打折后应付的钱 / 订单总额 * 100
            this.formatDiscount.onDiscount.realDiscountRate = +this.formatDiscount.amountMoney / +this.formatDiscount.totalMoney * 100;
        },
        saveDiscount: function saveDiscount() {
            var that = this;
            if (!this.flag) return;
            this.flag = false;
            that.$store.commit('saveDiscountScheama', this.formatDiscount);
            setTimeout(function () {
                that.flag = true;
            }, 1000);
            /*if (navigator.onLine) {
                let verInfo = {
                    orderId: this.orderInfo.id,
                    type: ''
                }
                verificationOfOrders(verInfo, function (result) {
                    let data = JSON.parse(result);
                    if (data.success) {
                        var verInfo = {
                            orderId: that.orderInfo.id,
                            type: 1,
                        }
                        verificationOfOrders(verInfo, (result) => {
                            let data = JSON.parse(result);
                            if (data.success) {
                                that.$store.commit('saveDiscountScheama');
                                bus.$emit("getUserBalance")
                                that.formatDiscount.onDiscount.discountRate = 100
                                that.formatDiscount.discountMoney = 0
                                setTimeout(() => {
                                    that.flag = true
                                }, 1000)
                            } else {
                                that.$message.warning(data.message)
                                that.formatDiscount.onDiscount.discountRate = 100
                                that.formatDiscount.discountMoney = 0
                                setTimeout(() => {
                                    that.flag = true
                                }, 1000)
                            }
                        })
                    } else {
                        that.$message.warning(data.message)
                        that.formatDiscount.onDiscount.discountRate = 100
                        that.formatDiscount.discountMoney = 0
                        setTimeout(() => {
                            that.flag = true
                        }, 1000)
                    }
                })
            } else {
                this.$store.commit('saveDiscountScheama');
                bus.$emit("getUserBalance")
                setTimeout(() => {
                    that.flag = true
                }, 1000)
            }*/
        }
    }
});

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "hasPayArea",
    data: function data() {
        return {};
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        orderInfo: 'orderInfo',
        orderPayType: 'orderPayType',
        currentPayType: 'currentPayType',
        paymentItems: 'paymentItems'
    })),
    methods: {
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        },
        deletePayType: function deletePayType(index, item) {
            if (item.isOccupation != 'undefined' && item.isOccupation) {
                this.$socket.deletePayType(item.toPayId);
                this.$store.commit("deletePaymentItems", item.toPayId);
                console.log("移除占用优惠券", this.paymentItems);
            }
            this.$store.commit('deletePayType', { index: index, item: item });
        }
    }
});

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "keyBoard",
    data: function data() {
        return {
            keyBoard: { 1: [1, 2, 3, '←'], 2: [4, 5, 6, this.$t('common.clear')], 3: [7, 8, 9, this.$t('common.sure')], 4: [0, '00', '.'] }
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        currentPayType: 'currentPayType',
        orderPayType: 'orderPayType'
    })),
    methods: {
        keyBoardHandler: function keyBoardHandler(key) {
            if (typeof key === 'number') {
                this.$store.commit('calcAdd', key);
                this.$store.commit('reSetCurrentPayType');
                // if(this.orderPayType.length > 0 || this.currentPayType.id != 12 ) {
                //   return;
                // }
                // this.currentPayType.money += key;
            } else {
                switch (key) {
                    case '00':
                        if (this.currentPayType.id == 12 || this.currentPayType.money.length > 0) {
                            // this.currentPayType.money += key;
                            this.$store.commit("calcAdd", key);
                        }
                        break;
                    case '.':
                        if (this.currentPayType.money !== '' && this.currentPayType.money.indexOf('.') === -1) {
                            // this.currentPayType.money += key;
                            this.$store.commit("calcAdd", key);
                        }
                        break;
                    case '←':
                        this.$store.commit("calcDel");
                        // if (this.currentPayType.id == 12 && this.currentPayType.money.length > 0) {
                        //   let count = this.currentPayType.money;
                        //   this.currentPayType.money = count.substring(0, count.length - 1);
                        // }
                        break;
                    case this.$t('common.clear'):
                        // if(this.currentPayType.id == 12) {
                        //   this.currentPayType.money = '';
                        // }
                        this.$store.commit("calcEmpty");
                        break;
                    case this.$t('common.sure'):
                        if (this.cardMoney > 0) return;

                        // if(!this.scanPay.currentType.id){
                        //   return this.$message.warning("请选择支付方式！");
                        // }
                        // if(this.currentPayType.id == 1 || this.currentPayType.id == 10 || this.currentPayType.id == 2){  //  微信支付 或 支付宝
                        //
                        //   if(this.currentPayType.id == 10 && this.isLocalAlipay == true) {
                        //     this.isLocalAlipay = false;
                        //   } else {
                        //     return this.scanPay.dialogVisible = true;
                        //   }
                        // }
                        this.$store.commit('calcConfirm');
                    // let money = parseFloat(this.currentPayType.money || 0);
                    // let tempMoney = 0
                    // 先判断是否已存在
                    // for (let type of this.orderPayType) {
                    //   tempMoney += type.money
                    //   if(tempMoney >= this.needPay) return;
                    //   if (type.type === this.currentPayType.id) {
                    //     type.money += money;
                    //     this.currentPayType.money = '';
                    //     return;
                    //   }
                    // }
                    // 默认追加
                    // this.orderPayType.push({
                    //   type: this.currentPayType.id,
                    //   name: this.payType[this.currentPayType.id],
                    //   money: money,
                    //   icon: this.icon[this.currentPayType.id]
                    // });
                    // this.currentPayType.money = +(this.currentPayType.money - money).toFixed(2)
                    //  设置 payMode
                    // if(this.currentPayType.id == 1 || this.currentPayType.id == 10 ){  //  微信支付 或 支付宝
                    //   this.payMode = this.currentPayType.id;
                    // }else if(this.payMode != 1 && this.payMode != 10 && (this.currentPayType.id == 12 || this.currentPayType.id == 5)){ //  现金 或 银行卡
                    //   this.payMode = this.currentPayType.id;
                    // }else{
                    //   this.payMode = this.currentPayType.id;
                    // }
                }
            }
        }
    }
});

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "payCar",
    props: ['shopDetail', 'orderInfo'],
    mounted: function mounted() {
        var _this = this;

        console.log('payCar', this.car);
        //this.$store.commit("setShopDetail", this.shopDetail)
        this.$store.commit("setOrderInfo", this.orderInfo);
        var orderId = this.$route.params.orderId;
        this.$store.dispatch('getOrderItemlistByOrderId', orderId);
        __WEBPACK_IMPORTED_MODULE_2__utils_bus__["a" /* default */].$on("padCreatedOrder", function (result) {
            var orderId = _this.$route.params.orderId;
            _this.$store.commit("setOrderInfo", _this.orderInfo);
            _this.$store.dispatch('getOrderItemlistByOrderId', orderId);
        });
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        car: 'car'
    })),
    methods: {
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        }
    }
});

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "payType",
    data: function data() {
        return {
            pageButtonList: [this.$t('common.prePage'), this.$t('common.nextPage')],
            familyWrapperHeight: 0,
            selectCurrentPages: 2,

            icon: { // icon 支付项展示图标
                1: '#icon-wechatpay',
                10: '#icon-zhifubao',
                12: '#icon-xianjin',
                5: '#icon-yinlian',
                16: "#icon-xinmeida1",
                17: '#icon-chongzhi2',
                2: '#icon-chongzhi2',
                3: '#icon-youhuiquan',
                26: '#icon-miandan',
                27: "#icon-tuangou",
                28: "#icon-daijinquan"
            }
        };
    },
    mounted: function mounted() {
        this.familyWrapperHeight = document.body.clientHeight - 150 - document.getElementById("pageButton").offsetHeight;
    },
    created: function created() {
        this.$store.commit('setShopValidPayMode');
        console.log('payType', this.payType);
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        payType: 'payType',
        currentPayType: 'currentPayType'
    })),
    methods: {
        selectPayType: function selectPayType(key) {
            this.$store.commit("setSelectPayType", key);
        },
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
        }
    }
});

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // props:['formatMoney'],
  name: "topLeftArea",
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
    orderInfo: 'orderInfo',
    discountInfo: 'discountInfo',
    payInfo: 'payInfo',
    currentOrderInfo: 'currentOrderInfo',
    formatDiscount: 'formatDiscount'
  })),
  methods: {
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money || 0);
    }
  }
});

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "topRightArea",
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapGetters */])({
        cardMoney: 'cardMoney',
        payInfo: 'payInfo'
    })),
    methods: {
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        }
    }
});

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_generalUtil__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_component_basic_car_detail__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_component_basic_car_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__table_component_basic_car_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_keyBoard__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_keyBoard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__component_keyBoard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_payType__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_payType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__component_payType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_payCar__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_payCar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__component_payCar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_hasPayArea__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_hasPayArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__component_hasPayArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_topLeftArea__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_topLeftArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__component_topLeftArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_topRightArea__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_topRightArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__component_topRightArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_discountPay__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_discountPay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__component_discountPay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_orderApi__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_jquery__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_jquery__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import payMode from '../../utils/payMode'












//import '@/scan/qrcode1.js'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pay',
  components: {
    CarDetail: __WEBPACK_IMPORTED_MODULE_4__table_component_basic_car_detail___default.a,
    payType: __WEBPACK_IMPORTED_MODULE_6__component_payType___default.a,
    payCar: __WEBPACK_IMPORTED_MODULE_7__component_payCar___default.a,
    keyBoard: __WEBPACK_IMPORTED_MODULE_5__component_keyBoard___default.a,
    hasPayArea: __WEBPACK_IMPORTED_MODULE_8__component_hasPayArea___default.a,
    topLeftArea: __WEBPACK_IMPORTED_MODULE_9__component_topLeftArea___default.a,
    topRightArea: __WEBPACK_IMPORTED_MODULE_10__component_topRightArea___default.a,
    discountPay: __WEBPACK_IMPORTED_MODULE_11__component_discountPay___default.a
  },
  data: function data() {
    return {
      maskHeight: 0, // 遮罩层的高度
      panelTitleHeight: 0, // 客单的高度
      confirmOrderPay: 0, // 微信银行卡或者现金支付本地需要支付的
      cardMoney: 0,
      reMoney: 0,
      coupanPay: 0, // 优惠券
      orderPaymentMap: {},
      showDetails: false,
      needPay: 0,
      carTableHeight: 0,
      payTableHeight: 0,
      orderId: null,
      totalMoney: '',
      payType: {},
      payProgress: 0, // 支付金额 进度
      oddChange: 0, // 找零
      payMode: 1, //  支付方式：  微信支付/支付宝支付 > 银联 > 现金 > 大众点评 > 积分
      shopDet: {},
      shopModel: '',
      customerInfo: {},
      // onErasingDialogVisible: false,
      discountTitle: '',
      selectDiscountActive: '',
      labelPosition: 'left',
      tempNeedPay: 0,
      tempDiscountMoney: '0',
      selectDiscountString: '',
      newNumber: '',
      autoFocus: true,
      regNumber: '',
      isCloseScanDialog: true,

      isPaying: false,

      loading: false,
      isLocalAlipay: false,
      wechatInfo: {},
      remindMoney: 0, // 剩余需要支付的
      showMoney: {
        earsMoney: 0
      },
      // paymentItems:[],
      occupyValue: 0,
      customerId: '',
      isReadCardPay: false,
      timeDifference: 500,
      isClickAccount: false,
      wsConnect: false,
      isIpad: true
    };
  },

  watch: {
    orderPayType: {
      handler: function handler(newVal) {
        this.$store.commit('setPayTypeChange');
      },
      deep: true
    },
    orderInfo: {
      handler: function handler(newVal) {},
      deep: true
    },
    currentOrderInfo: {
      handler: function handler(newVal) {
        this.$store.commit("setPayInfo", newVal);
        this.$store.commit("setPayTypeChange");
      },
      deep: true
    },
    scanPay: {
      handler: function handler(newVal) {
        var _this = this;

        if (!newVal.dialogVisible) return;
        // document.getElementById("scanPayInput").focus();
        //console.log('document.getElementById("scanPayInput")',document.getElementById("scanPayInput"))
        this.$nextTick(function () {
          if (!_this.isIpad) {
            document.getElementById("scanPayInput").focus();
          }
        });
      },
      deep: true
    },
    payInfo: {
      handler: function handler(newVal) {},
      deep: true
    }
  },
  created: function created() {
    this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils_auth__["c" /* getSessionShopDet */])());
    this.$store.commit("setShopDetail", this.shopDet);
    this.shopModel = this.shopDet.shopMode;
    this.$store.commit('setFormatDiscount');
    this.$store.commit('setOrderPayType');
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_vuex__["a" /* mapGetters */])({
    orderPayType: 'orderPayType',
    orderInfo: 'orderInfo',
    currentPayType: 'currentPayType',
    payInfo: 'payInfo',
    scanPay: 'scanPay',
    formatDiscount: 'formatDiscount',
    currentOrderInfo: 'currentOrderInfo',
    icon: 'icon',
    paymentItems: 'paymentItems',
    discountInfo: 'discountInfo'
  })),

  directives: {
    focus: {
      update: function update(el, _ref) {
        var value = _ref.value;

        if (value) {
          el.focus();
        }
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    var that = this;
    this.isIpad = navigator.userAgent.indexOf("iPad") > -1;
    if (this.isIpad) {
      Qrcode.init(__WEBPACK_IMPORTED_MODULE_15_jquery___default()('[node-type=qr-btn]'));
    }
    this.orderId = this.$route.params.orderId;
    this.initOrder();
    this.initHeight();
    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("scanCode", function (data) {
      console.log('回调', data);
      if (data.length == 18) {
        _this2.scanPay.scanValue = data;
        _this2.getScanValue();
      } else {
        _this2.$message.error('扫码失败请重新扫码');
      }
    });
    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("hasPayMesBox", function () {
      _this2.$alert('该订单已支付', '提示', {
        confirmButtonText: '确定',
        callback: function callback(action) {
          if (_this2.shopModel == 2 || _this2.shopModel == 7) {
            _this2.$router.push('/tvorder?payConfirm=true&orderType=all');
          } else {
            _this2.$router.push('/table?payConfirm=true&orderType=all');
          }
        }
      });
    });

    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("resetOrder", function () {
      //重置订单
      that.initOrder();
      that.$store.dispatch('getOrderItemlistByOrderId', _this2.orderId);
      that.cancelScanPay();
    });

    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("getUserBalance", function () {
      setTimeout(function () {
        _this2.getUserBalance();
      }, 500);
    });
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("getUserBalance");
    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("hasPayMesBox");
    __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("resetOrder");
  },

  methods: {
    initOrder: function initOrder() {
      var currentOrderId = this.$route.query.suborderId || this.orderId;
      if (this.shopModel == 6 && this.shopDet.allowAfterPay == 0) {
        currentOrderId = this.orderId;
      }
      //this.$store.commit('setOrderId', this.orderId);
      this.$store.commit('setCurrentOrderId', currentOrderId);
      this.$store.dispatch('getOrderDetail', this.orderId);
      this.$store.dispatch('getCurrentOrderDetail', currentOrderId);
      this.$store.dispatch('getDiscountInfo', currentOrderId);
    },
    formatDate: function formatDate(date) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_generalUtil__["a" /* formatDate */])(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
    },
    cancel: function cancel() {
      var that = this;
      var cancleOrderId = this.$route.query.suborderId || this.orderId;
      this.$confirm('是否取消支付？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["a" /* cancelOrder */])(cancleOrderId).then(function (res) {
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
    skipIndex: function skipIndex() {
      // 如果是后付模式
      var cancleOrderId = this.$route.query.suborderId;
      if (this.orderInfo.order_state == 2 && cancleOrderId) {
        var that = this;
        this.$confirm('是否取消支付？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["a" /* cancelOrder */])(cancleOrderId).then(function (res) {
            if (res.ok) {
              that.$router.push('/table?payConfirm=true&orderType=all');
            } else {
              that.$message.error(res.message);
            }
          });
        }).catch(function () {});
      } else {
        this.$router.push("/table?payConfirm=false&orderType=all");
      }
    },
    getOrderPayMode: function getOrderPayMode(orderPaymentItem) {
      for (var i = 0; i < orderPaymentItem.length; i++) {
        var item = orderPaymentItem[i];
        var orderPayMode = { 1: 1, 5: 3, 10: 2, 12: 4, 2: 0, 26: 8, 27: 9, 28: 10 };
        return orderPayMode[item.type];
      }
    },
    confirmPay: function confirmPay() {
      var _this3 = this;

      var that = this;
      if (that.orderPayType.length <= 0) return that.$message.warning('请选择支付项');
      var hasPay = 0;

      this.orderPayType.map(function (item) {
        hasPay += item.money;
      });
      if (Number(this.payInfo.remainMoney).toFixed(2) > 0) {
        return that.$message.warning('\u5269\u4F59 \u3010' + this.formatMoney(this.payInfo.amountMoney) + '\u3011 \u5143\u9700\u8981\u652F\u4ED8\u624D\u80FD\u4E70\u5355');
      }

      this.loading = true;
      var data = this.orderInfo;
      if ((data.pay_mode == 3 || data.pay_mode == 4) && data.order_state == 1) {
        // 本地 Pos 确认微信端发起的 现金支付或银联支付
        var orderPayMode = {
          id: data.id,
          is_pos_pay: 1, // 即使这里是微信端发起的支付请求，但是是pos端确认的所以仍然认为是pos端结算
          order_state: 2
        };
        updateRemoteOrderPaymode(orderPayMode, function () {
          //  先付情况下，确认支付后  打印厨打
          if (that.shopDet.allowFirstPay == 0) {
            // printKitchenTotal(that.orderId,1, 0);
            // 判断是否开启多动线 enable_duo_dong_xian 0 是开启
            if (that.shopDet.enableDuoDongXian) {
              printKitchenTotal(that.orderId, 1, null, null, null, function (data) {});
            } else {
              getNewKitchenTemplate(that.orderId, 1, null, null, null, function (data) {});
            }
          }
          if (this.shopDet.is_open_emq_push) {
            var sendInfo = {
              group: 'order',
              action: 'ConfirmOrder',
              orderId: data.id,
              data: {
                type: "confirmOrder",
                isPosPay: 1,
                orderId: data.id
              }
            };
            emqttSend(sendInfo, function () {});
          } else {
            that.$socket.confirmOrder(data.id);
          }
          that.$router.push('/table?payConfirm=true&orderType=all');
          __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("refresh-turnover");
        });
      } else {
        // 如果支付项中有现金支付，则把支付项中所有的金额相加 然后比较是否超出应付金额，如果超出应付金额，则现金支付项需要改成剩余需要支付的钱
        this.verifiCashMoney();
        var formatOrderId = that.$route.query.suborderId || that.orderId;

        var _orderPayMode = that.getOrderPayMode(that.orderPayType);
        if (that.orderPayType.length > 1) _orderPayMode = 99;
        this.formatDiscount.customerId = this.orderInfo.customer_id;
        var list = that.orderPayType.filter(function (item) {
          return !item.isOccupation;
        });
        var payOrderQuery = {
          orderId: formatOrderId,
          paymentItems: list,
          payMode: _orderPayMode,
          formatDiscount: this.formatDiscount
        };

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["b" /* payOrder */])(payOrderQuery).then(function (res) {
          console.log('payOrder买单', res);
          _this3.loading = false;
          _this3.$message(res.message);
          if (res.ok) {
            if (that.shopModel == 2 || that.shopModel == 7) {
              that.$router.push("/table/eatin?type=waitOrder&payConfirm=true&orderType=all");
            } else {
              that.$router.push('/table?payConfirm=true&orderType=all');
            }
          }
        });
      }
    },
    verifiCashMoney: function verifiCashMoney() {
      var money = 0;
      var totalMoney = 0;
      var cashMoney = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.orderPayType), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          totalMoney += +item.money;
          if (item.type != 12) money += +item.money;
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

      cashMoney = Math.abs(this.payInfo.totalMoney - money - Number(this.discountInfo.discountMoney) - Number(this.discountInfo.easyMoney));

      if (this.orderPayType.length == 1 && this.orderPayType[0].type == 12 && this.orderPayType[0].money != 0) this.orderPayType[0].money = this.currentOrderInfo.amount_with_children || this.currentOrderInfo.order_money;

      if (totalMoney > this.payInfo.totalMoney) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.orderPayType), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (item.type == 12) item.money = cashMoney;
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
    formatMoney: function formatMoney(money) {
      return this.$utils.formatMoney(money || 0);
    },


    //=============================
    //======== 整单折扣区开始 ========
    //=============================
    orderDiscount: function orderDiscount() {
      this.$store.commit('initDiscount');
    },

    //=============================
    //======== 整单折扣区结束 ========
    //=============================

    //=============================
    //======== 扫码支付 =============
    //==============================
    cancelScanPay: function cancelScanPay() {
      if (this.scanPay.paying == true) {
        this.$message.warning("订单支付中，请勿取消支付");
        return;
      }
      this.$store.commit("setSelectPayType", null);
      this.scanPay.dialogVisible = false;
      this.scanPay.paying = false; // 关闭弹窗
      this.scanPay.scanValue = ''; // 清空二维码接受框
    },
    scan: function scan() {
      this.scanPay.scanValue = '';
    },
    localAlipay: function localAlipay() {
      this.isLocalAlipay = true;
      this.scanPay.dialogVisible = false;
      this.scanPay.paying = false; // 关闭弹窗
      this.scanPay.scanValue = ''; // 清空二维码接受框
    },

    validateScanValue: function validateScanValue(value) {
      if (!value.toString().trim()) {
        this.$message("扫码或者输入不能为空！");
        return false;
      }
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value) && this.currentPayType.id == 2) {
        this.$message.warning("手机号码格式错误，请从新扫描或输入");
        return false;
      }
      if (value.toString().trim().length != 18 && (this.currentPayType.id == 1 || this.currentPayType.id == 10)) {
        this.$message.warning("付款码格式错误，请重新扫码或者手动输入");
        return false;
      }
      return true;
    },

    getScanValue: function getScanValue() {
      var that = this;
      if (this.scanPay.paying == true) return this.$message("正在支付中，请勿重复扫码");
      var scanPayValue = this.scanPay.scanValue;
      if (!this.validateScanValue(scanPayValue)) return;
      this.hideScanValue(scanPayValue);
      this.scanData(scanPayValue, function (scanData) {
        that.remoteScanData(scanData);
      });
    },


    // 格式化扫码支付数据
    scanData: function scanData(authCode, cb) {
      var payMode = 0,
          that = this;
      if (this.currentPayType.id == 1) {
        payMode = 1; // 微信支付
      } else if (this.currentPayType.id == 10) {
        payMode = 2; // 支付宝支付
      } else if (this.currentPayType.id == 2) {
        payMode = 0; // 余额支付
      }
      var id = that.$route.query.suborderId || that.orderId;
      var orderPaymentList = [];

      var hasPayMonet = 0;
      that.orderPayType.map(function (item) {
        if (item.type == 2 && item.toPayId) {
          orderPaymentList.push({ toPayId: item.toPayId, paymentModeId: 2, payValue: item.money });
        }
        if (item.type == 3 && item.toPayId && !item.isOccupation) {
          orderPaymentList.push({ toPayId: item.toPayId, paymentModeId: 3, payValue: item.money });
        }
      });
      var scanData = {
        shopId: sessionStorage.getItem("shopId"),
        brandId: sessionStorage.getItem("brandId"),
        authCode: authCode,
        order: {
          id: id,
          payMode: payMode,
          orderPaymentItems: orderPaymentList || []
        }
      };
      cb(scanData);
    },

    // 将获取到的码给隐藏掉
    hideScanValue: function hideScanValue(scanValue) {
      this.scanPay.paying = true;
      var q = scanValue.substring(4);
      var h = scanValue.substring(scanValue.length - 4);
      var ss = "************************".substring(0, scanValue.substring(4).length - 4);
      this.scanPay.scanValue = this.scanPay.scanValue.replace(q, ss) + h;
      if (this.scanPay.paying = true) {
        this.isPaying = true;
      }
    },

    getOrderPayType: function getOrderPayType() {
      var convertPaytype = 0;
      if (this.currentPayType.id == 1) {
        convertPaytype = 0; // 微信支付
      } else if (this.currentPayType.id == 10) {
        convertPaytype = 1; // 支付宝支付
      } else if (this.currentPayType.id == 2) {
        convertPaytype = 2; // R+支付
      }
      return convertPaytype;
    },
    // 扫码支付 第一次请求
    remoteScanData: function remoteScanData(scanData, cb) {
      var _this4 = this;

      var paymentAmount = this.payInfo.amountMoney;
      var payType = this.getOrderPayType();
      console.log('scanData', scanData);
      var query = {
        scan_type: payType,
        total_money: paymentAmount,
        scan_code: scanData.authCode,
        order_id: scanData.order.id
      };
      console.log('query', query);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["c" /* scanPayMoney */])(query).then(function (res) {
        if (res.ok) {
          _this4.scanPaySuccess();
        } else {
          _this4.scanPayError(res.message);
        }
      }).catch(function (err) {
        _this4.scanPayError(res.message);
      });
    },

    // 扫码支付成功
    scanPaySuccess: function scanPaySuccess(payMentInfo, cb) {
      var _this5 = this;

      var that = this;
      var isScanPay = true;
      // 更新本地订单
      var payMode = 0;
      if (this.currentPayType.id == 1) {
        payMode = 0; // 微信支付
      } else if (this.currentPayType.id == 10) {
        payMode = 1; // 支付宝支付
      } else if (this.currentPayType.id == 2) {
        payMode = 2; // 余额支付
      };
      var id = this.$route.query.suborderId || this.orderId;
      if (this.orderPayType.length > 0) payMode = 99;
      var list = that.orderPayType.filter(function (item) {
        return !item.isOccupation;
      });
      var payOrderQuery = {
        orderId: id,
        paymentItems: list,
        payMode: payMode,
        formatDiscount: this.formatDiscount
      };
      console.log('混合支付', payOrderQuery);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["b" /* payOrder */])(payOrderQuery).then(function (res) {
        console.log('扫码payOrder买单', res);
        _this5.$message(res.message);
        if (res.ok) {
          that.scanPay.paying = false; // 关闭弹窗
          that.scanPay.dialogVisible = false;
          that.scanPay.scanValue = ''; // 清空二维码接受框
          that.$store.commit("setSelectPayType", null);
          _this5.$router.push('/table?payConfirm=true&orderType=all');
        }
      });
    },
    // 扫码支付失败
    scanPayError: function scanPayError(errorMsg) {
      this.isPaying = false;
      this.scanPay.paying = false; // 关闭弹窗
      this.scanPay.dialogVisible = false;
      this.scanPay.scanValue = ''; // 清空二维码接受框
      this.$store.commit("setSelectPayType", null);
      if (errorMsg) {
        this.$message.error(errorMsg);
      }
    },
    initHeight: function initHeight() {
      this.carTableHeight = document.body.clientHeight - 300;
      this.payTableHeight = document.body.clientHeight - 470;
    },
    continueOrder: function continueOrder() {
      // 继续点餐
      var id = this.$route.params.orderId;
      var suborderId = this.$route.query.suborderId || null;
      this.$router.push('/order/' + id + '?' + (suborderId ? "suborderId=" + suborderId + '&' : "") + 'addArticle=true');
    },
    printPreOrder: function printPreOrder() {
      // 打印预结单
      var that = this;
      var suborderId = this.$route.query.suborderId || null;
      var printOrderId = suborderId || this.orderId;
      var query = {
        order_id: printOrderId,
        auto_print: 0,
        total_type: 2,
        refund: 0,
        order_item_arr: []
      };
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["d" /* printTotal */])(query).then(function (res) {
        console.log('printTotal', res);
      });
    },
    resumeDiscount: function resumeDiscount() {
      var _this6 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__api_orderApi__["e" /* resumeDiscount */])(this.orderId).then(function (res) {
        console.log('resumeDiscount', res);
        if (res.ok) {
          _this6.$store.dispatch('getCurrentOrderDetail', _this6.orderId);
          _this6.$store.dispatch('getOrderDetail', _this6.orderId);
          _this6.$store.dispatch('getDiscountInfo', _this6.orderId);
        }
      });
    }
  }
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("8c92579a", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(403, function() {
     var newContent = __webpack_require__(403);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("50f4236d", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(404, function() {
     var newContent = __webpack_require__(404);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("c33a6346", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(407, function() {
     var newContent = __webpack_require__(407);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("28dad934", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(408, function() {
     var newContent = __webpack_require__(408);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("3a5ce90d", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(411, function() {
     var newContent = __webpack_require__(411);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("455e678c", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(417, function() {
     var newContent = __webpack_require__(417);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("0970b976", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(418, function() {
     var newContent = __webpack_require__(418);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("537a1463", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(423, function() {
     var newContent = __webpack_require__(423);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(428);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("f1af7102", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(428, function() {
     var newContent = __webpack_require__(428);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/failed.png";

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(475)
__webpack_require__(474)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(526),
  /* scopeId */
  "data-v-043762ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/discountPay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] discountPay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-043762ce", Component.options)
  } else {
    hotAPI.reload("data-v-043762ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(478)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(450),
  /* template */
  __webpack_require__(529),
  /* scopeId */
  "data-v-2054c884",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/hasPayArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hasPayArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2054c884", Component.options)
  } else {
    hotAPI.reload("data-v-2054c884", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(488)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(539),
  /* scopeId */
  "data-v-427f6130",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/keyBoard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] keyBoard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-427f6130", Component.options)
  } else {
    hotAPI.reload("data-v-427f6130", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(494)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(452),
  /* template */
  __webpack_require__(545),
  /* scopeId */
  "data-v-63a44935",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/payCar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] payCar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63a44935", Component.options)
  } else {
    hotAPI.reload("data-v-63a44935", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(482)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(453),
  /* template */
  __webpack_require__(533),
  /* scopeId */
  "data-v-2829e5ae",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/payType.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] payType.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2829e5ae", Component.options)
  } else {
    hotAPI.reload("data-v-2829e5ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(479)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(454),
  /* template */
  __webpack_require__(530),
  /* scopeId */
  "data-v-2338ebd0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/topLeftArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topLeftArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2338ebd0", Component.options)
  } else {
    hotAPI.reload("data-v-2338ebd0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(499)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(550),
  /* scopeId */
  "data-v-7beb955d",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/pay/component/topRightArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topRightArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7beb955d", Component.options)
  } else {
    hotAPI.reload("data-v-7beb955d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-dialog', {
    attrs: {
      "title": _vm.$t('discountModel.discountPlan'),
      "visible": _vm.discountPackage.centerDialogVisible,
      "width": "30%",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.discountPackage, "centerDialogVisible", $event)
      }
    }
  }, [
    [_c('ul', {
      staticStyle: {
        "margin": "0 auto",
        "width": "60%"
      }
    }, _vm._l((_vm.discountPackage.discountType), function(item, index) {
      return _c('li', {
        staticClass: "discount-package-item",
        class: _vm.discountPackage.selectDiscountActive == index ? 'discount-package-item-activate' : '',
        on: {
          "click": function($event) {
            return _vm.$store.commit('selectDiscountScheme', {
              index: index,
              item: item
            })
          }
        }
      }, [_vm._v("\n                    " + _vm._s(item) + "\n                ")])
    }), 0)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.discountPackage.centerDialogVisible = false
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), (_vm.discountPackage.selectDiscountActive == 2) ? _c('el-button', {
      staticStyle: {
        "background-color": "#000",
        "color": "#fff"
      },
      on: {
        "click": function($event) {
          return _vm.$store.commit('confirmFreeOrder')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.sure')))]) : _c('el-button', {
      staticStyle: {
        "background-color": "#000",
        "color": "#fff"
      },
      on: {
        "click": function($event) {
          return _vm.$store.commit('confirmDiscountSchema')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.nextStep')))])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.discountPackage.discountTitle,
      "visible": _vm.schemaDialog.onDiscountDialog,
      "width": "70%",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.schemaDialog, "onDiscountDialog", $event)
      }
    }
  }, [
    [_c('el-row', [_c('el-col', {
      attrs: {
        "span": 12
      }
    }, [_c('el-form', {
      attrs: {
        "label-position": "left",
        "label-width": "180px",
        "model": _vm.formatDiscount
      }
    }, [(_vm.discountPackage.selectDiscountActive == 0) ? _c('div', [_c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.discountRate')
      }
    }, [_c('el-input', {
      staticClass: "discount-input",
      attrs: {
        "id": "select-input-discount",
        "readonly": ""
      },
      on: {
        "focus": function($event) {
          return _vm.selectInput('select-input-discount')
        }
      },
      model: {
        value: (_vm.formatDiscount.onDiscount.discountRate),
        callback: function($$v) {
          _vm.$set(_vm.formatDiscount.onDiscount, "discountRate", $$v)
        },
        expression: "formatDiscount.onDiscount.discountRate"
      }
    }), _vm._v(" "), _c('p', {
      staticStyle: {
        "color": "#999",
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('discountModel.rateTips')))])], 1), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.noDiscountmoney')
      }
    }, [_c('el-input', {
      staticClass: "not-discount-input",
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        "id": "select-input-remove",
        "readonly": ""
      },
      on: {
        "focus": function($event) {
          return _vm.selectInput('select-input-remove')
        }
      },
      model: {
        value: (_vm.formatDiscount.onDiscount.removeMoney),
        callback: function($$v) {
          _vm.$set(_vm.formatDiscount.onDiscount, "removeMoney", $$v)
        },
        expression: "formatDiscount.onDiscount.removeMoney"
      }
    })], 1)], 1) : (_vm.discountPackage.selectDiscountActive == 1) ? _c('div', [_c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.reduceMoney')
      }
    }, [_c('el-input', {
      staticClass: "not-discount-input",
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        "id": "select-input-reduce",
        "readonly": ""
      },
      on: {
        "focus": function($event) {
          return _vm.selectInput('select-input-reduce')
        }
      },
      model: {
        value: (_vm.formatDiscount.onReduceMoney.reduceMoney),
        callback: function($$v) {
          _vm.$set(_vm.formatDiscount.onReduceMoney, "reduceMoney", $$v)
        },
        expression: "formatDiscount.onReduceMoney.reduceMoney"
      }
    }), _vm._v(" "), _c('p', {
      staticStyle: {
        "color": "#999",
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('discountModel.reducetips')))])], 1)], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.totalMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.totalMoney)))])]), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.reduceMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.discountMoney)))])]), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.amountMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.amountMoney)))])])], 1)], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 9,
        "offset": 1
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
            return _vm.dialogKeyBoard(i)
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
          return _vm.dialogKeyBoard('.')
        }
      }
    }, [_vm._v(".")])], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 8
      }
    }, [_c('el-button', {
      staticClass: "btn-number",
      on: {
        "click": function($event) {
          return _vm.dialogKeyBoard('0')
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
          return _vm.dialogKeyBoard('←')
        }
      }
    }, [_vm._v("←")])], 1)], 2)], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          return _vm.$store.commit('lastStep')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.preStep')))]), _vm._v(" "), _c('el-button', {
      on: {
        "click": function($event) {
          return _vm.saveDiscount()
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.save')))])], 1)
  ], 2), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.discountPackage.discountTitle,
      "visible": _vm.schemaDialog.onErasingDialog,
      "width": "70%",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.schemaDialog, "onErasingDialog", $event)
      }
    }
  }, [
    [_c('el-row', [_c('el-col', {
      attrs: {
        "span": 12
      }
    }, [_c('el-form', {
      attrs: {
        "label-position": "left",
        "label-width": "180px",
        "model": _vm.formatDiscount
      }
    }, [_c('div', [_c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.eraseMoney')
      }
    }, [_c('el-input', {
      staticClass: "not-discount-input",
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        "readonly": "",
        "id": "select-input-eras",
        "autofocus": _vm.autoFocus
      },
      on: {
        "focus": function($event) {
          return _vm.selectInput('select-input-eras')
        }
      },
      model: {
        value: (_vm.formatDiscount.onErasing.erasing),
        callback: function($$v) {
          _vm.$set(_vm.formatDiscount.onErasing, "erasing", $$v)
        },
        expression: "formatDiscount.onErasing.erasing"
      }
    }), _vm._v(" "), _c('p', {
      staticStyle: {
        "color": "#999",
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('discountModel.eraseTips')))])], 1)], 1), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.totalMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.totalMoney)))])]), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.reduceMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.onErasing.erasing)))])]), _vm._v(" "), _c('el-form-item', {
      staticClass: "pay_el-form-item__label",
      attrs: {
        "label": _vm.$t('discountModel.amountMoney')
      }
    }, [_c('p', [_vm._v(_vm._s(_vm.formatMoney(_vm.formatDiscount.amountMoney)))])])], 1)], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 9,
        "offset": 1
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
            return _vm.dialogKeyBoard(i)
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
          return _vm.dialogKeyBoard('.')
        }
      }
    }, [_vm._v(".")])], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 8
      }
    }, [_c('el-button', {
      staticClass: "btn-number",
      on: {
        "click": function($event) {
          return _vm.dialogKeyBoard('0')
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
          return _vm.dialogKeyBoard('←')
        }
      }
    }, [_vm._v("←")])], 1)], 2)], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          return _vm.$store.commit('setFormatDiscount')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
      staticStyle: {
        "background-color": "#000",
        "color": "#fff"
      },
      on: {
        "click": _vm.saveDiscount
      }
    }, [_vm._v(_vm._s(_vm.$t('common.save')))])], 1)
  ], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-043762ce", module.exports)
  }
}

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', {
    staticClass: "pay-title"
  }, [_vm._v(_vm._s(_vm.$t('pay.hasPay')) + "：")]), _vm._v(" "), _c('div', {
    staticClass: "pay-wrap"
  }, _vm._l((_vm.orderPayType), function(item, index) {
    return _c('div', {
      staticClass: "pay-type-info-item",
      attrs: {
        "disabled": (_vm.orderPayType.length) > 0 ? true : false
      }
    }, [_c('p', {
      staticClass: "pay-type-item-details"
    }, [_c('svg', {
      staticClass: "icon",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": item.icon
      }
    })])]), _vm._v(" "), _c('p', {
      staticClass: "pay-type-item-details"
    }, [_c('span', [_vm._v("¥" + _vm._s(_vm.formatMoney(item.money)))])]), _vm._v(" "), (((_vm.orderInfo.pay_mode == 3 || _vm.orderInfo.pay_mode == 4) && _vm.orderInfo.order_state < 2)) ? _c('p') : _c('p', {
      staticClass: "pay-type-item-details",
      on: {
        "click": function($event) {
          return _vm.deletePayType(index, item)
        }
      }
    }, [_c('span', {
      staticClass: "delete-pay"
    }, [_vm._v(_vm._s(_vm.$t('common.remove')))])])])
  }), 0)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-2054c884", module.exports)
  }
}

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "width": "50%",
      "float": "left",
      "border-right": "1px dashed #e0e0e0"
    }
  }, [_c('ul', {
    staticClass: "pay-info-details"
  }, [_c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.orderMoney')))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#EF5350",
      "font-size": "28px"
    }
  }, [_vm._v("\n          ¥" + _vm._s(_vm.orderInfo.amount_with_children > 0 ? _vm.formatMoney(_vm.orderInfo.amount_with_children + _vm.discountInfo.discountMoney + _vm.discountInfo.easyMoney) : _vm.formatMoney(_vm.orderInfo.order_money + _vm.discountInfo.discountMoney + _vm.discountInfo.easyMoney)) + "\n        ")])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.vipDiscount')))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "20px"
    }
  }, [_vm._v("\n          ¥00.00\n        ")])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.orderDiscount')))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(_vm.formatMoney((_vm.discountInfo.discountMoney || 0))))])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.eraseBtn')))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(_vm.formatMoney(_vm.discountInfo.easyMoney || 0)))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-2338ebd0", module.exports)
  }
}

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background-color": "#fff",
      "padding-bottom": "112px",
      "position": "relative"
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
  }, _vm._l((_vm.payType), function(type, key) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectPayType(key)
        }
      }
    }, [_c('div', {
      staticClass: "pay-type-item",
      class: (_vm.currentPayType.id == key) ? 'select-pay-type' : ''
    }, [_c('svg', {
      staticClass: "icon",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": _vm.icon[key]
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(type))])])])
  }), 0), _vm._v(" "), _c('ul', {
    staticClass: "pageButton",
    staticStyle: {
      "background-color": "#fff"
    },
    attrs: {
      "id": "pageButton"
    }
  }, _vm._l((_vm.pageButtonList), function(item, index) {
    return _c('li', [_c('div', {
      staticStyle: {
        "width": "100%"
      }
    }, [_c('el-button', {
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
    }, [_vm._v(_vm._s(item) + "\n        ")])], 1)])
  }), 0)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-2829e5ae", module.exports)
  }
}

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentPayType.money),
      expression: "currentPayType.money"
    }],
    staticClass: "money-input",
    attrs: {
      "type": "text",
      "readonly": "",
      "placeholder": "00.00",
      "disabled": (_vm.orderPayType.length > 0 || _vm.currentPayType.id != 12) ? true : false
    },
    domProps: {
      "value": (_vm.currentPayType.money)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.currentPayType, "money", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.currentPayType,
      "label-position": 'left',
      "label-width": "55px"
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
          "rowspan": key == _vm.$t('common.sure') ? 2 : 1
        }
      }, [_c('button', {
        staticClass: "key-board",
        style: (key == _vm.$t('common.sure') ? 'height:138px;background-color:#ffbf34;color:#FFFFFF' : ''),
        attrs: {
          "type": "button"
        },
        on: {
          "click": function($event) {
            return _vm.keyBoardHandler(key)
          }
        }
      }, [_vm._v("\n                                " + _vm._s(key) + "\n                            ")])])
    }), 0)
  }), 0)])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-427f6130", module.exports)
  }
}

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "pay",
    staticStyle: {
      "height": "100%",
      "background-color": "#eee"
    }
  }, [_c('el-col', {
    staticClass: "left-wrapper",
    attrs: {
      "span": 7
    }
  }, [(_vm.orderInfo.id) ? _c('div', {
    staticStyle: {
      "background-color": "#eee"
    }
  }, [_c('CarDetail', {
    attrs: {
      "orderInfo": _vm.orderInfo,
      "shopModel": _vm.shopModel
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "overflow-y": "hidden",
      "background-color": "#FFFFFF",
      "margin-top": "5px"
    },
    style: ({
      height: _vm.carTableHeight + 'px'
    }),
    attrs: {
      "id": "order-detail-wrapper"
    }
  }, [_c('div', {
    staticClass: "order-page-wrapper",
    attrs: {
      "id": "order-page-wrapper"
    }
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
  })])]), _vm._v(" "), _c('payCar', {
    attrs: {
      "shopDetail": _vm.shopDet,
      "orderInfo": _vm.orderInfo
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "car-footer"
  }, [_c('el-row', [_c('el-col', {
    staticClass: "operate-item",
    attrs: {
      "span": 24
    }
  }, [_c('div', [_vm._v("\n            " + _vm._s(_vm.$t('pay.article')) + ": "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(!!_vm.orderInfo.count_with_child ? _vm.orderInfo.count_with_child : _vm.orderInfo.article_count))])]), _vm._v(" "), _c('div', [_vm._v("\n            " + _vm._s(_vm.$t('pay.totalNum')) + ": "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.orderInfo.amount_with_children || _vm.orderInfo.order_money)))])])])], 1), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "height": "45px",
      "margin-top": "5px"
    },
    attrs: {
      "type": "flex",
      "justify": "space-around"
    }
  }, [_c('el-col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": 12
    }
  }, [(_vm.shopDet.allowAfterPay == 0 && _vm.orderInfo.distribution_mode_id == 1) ? _c('el-button', {
    staticClass: "pay-btn-style",
    on: {
      "click": _vm.skipIndex
    }
  }, [_vm._v(_vm._s(_vm.$t('common.goBack')))]) : _vm._e(), _vm._v(" "), (_vm.shopDet.allowAfterPay == 0 && _vm.orderInfo.distribution_mode_id == 3) ? _c('el-button', {
    staticClass: "pay-btn-style",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]) : _vm._e(), _vm._v(" "), (_vm.shopDet.allowFirstPay == 0) ? _c('el-button', {
    staticClass: "pay-btn-style",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]) : _vm._e()], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": 12
    }
  }, [(_vm.shopDet.allowFirstPay == 0 && _vm.orderInfo.order_state < 2) ? _c('el-button', {
    staticClass: "pay-btn-style",
    staticStyle: {
      "background-color": "#ffbf34",
      "color": "#ffffff"
    },
    attrs: {
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirmPay
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.settleAndOrder')))]) : _vm._e(), _vm._v(" "), (_vm.shopDet.allowFirstPay == 0 && _vm.orderInfo.order_state >= 2) ? _c('el-button', {
    staticClass: "pay-btn-style",
    staticStyle: {
      "background-color": "#ffbf34",
      "color": "#ffffff"
    },
    attrs: {
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirmPay
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.settle')))]) : _vm._e(), _vm._v(" "), (_vm.shopDet.allowAfterPay == 0) ? _c('el-button', {
    staticClass: "pay-btn-style",
    staticStyle: {
      "background-color": "#ffbf34",
      "color": "#ffffff"
    },
    attrs: {
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirmPay
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.settle')))]) : _vm._e()], 1)], 1)], 1)]), _vm._v(" "), _c('el-col', {
    staticClass: "right-wrapper",
    attrs: {
      "span": 17
    }
  }, [_c('el-row', {
    staticClass: "pay-wrapper"
  }, [_c('el-col', {
    staticClass: "pay-info",
    attrs: {
      "span": 20,
      "id": "payInfo"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "0 10px"
    }
  }, [_c('el-row', [_c('topLeftArea'), _vm._v(" "), _c('topRightArea')], 1), _vm._v(" "), _c('el-row', {
    staticClass: "pay-show-wrapper"
  }, [_c('el-col', {
    staticStyle: {
      "background-color": "#fff"
    },
    attrs: {
      "span": 10
    }
  }, [_c('div', {
    attrs: {
      "id": "aaa"
    }
  }), _vm._v(" "), _c('hasPayArea')], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "100%",
      "background-color": "#eee",
      "border-left": "12px solid #eee"
    },
    attrs: {
      "span": 14
    }
  }, [_c('keyBoard')], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "bottom-btn-wrap"
  }, [_c('div', {
    staticStyle: {
      "height": "50px"
    }
  }, [_c('el-col', {
    staticClass: "operate-footer",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    staticClass: "operate-footer-button",
    attrs: {
      "size": "large"
    },
    on: {
      "click": function($event) {
        return _vm.orderDiscount()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.discountBtn')))]), _vm._v(" "), _c('el-button', {
    staticClass: "operate-footer-button",
    attrs: {
      "size": "large",
      "disabled": false
    },
    on: {
      "click": function($event) {
        return _vm.$store.commit('initonErasing')
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.eraseBtn')))]), _vm._v(" "), _c('el-button', {
    staticClass: "operate-footer-button",
    attrs: {
      "size": "large",
      "disabled": false
    },
    on: {
      "click": function($event) {
        return _vm.printPreOrder()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.printPre')))]), _vm._v(" "), (_vm.shopDet.allowAfterPay == 0) ? _c('el-button', {
    staticClass: "operate-footer-button",
    attrs: {
      "size": "large",
      "disabled": (_vm.orderPayType.length) > 0 ? true : false
    },
    on: {
      "click": function($event) {
        return _vm.resumeDiscount()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('pay.resumeDiscountBtn')))]) : _vm._e()], 1)], 1)])], 1), _vm._v(" "), _c('el-col', {
    staticClass: "pay-type-wrapper",
    attrs: {
      "span": 4
    }
  }, [_c('payType')], 1)], 1)], 1), _vm._v(" "), _c('discountPay'), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": _vm.$t('pay.scanpay'),
      "visible": _vm.scanPay.dialogVisible,
      "close-on-click-modal": false,
      "width": "80%",
      "before-close": _vm.cancelScanPay,
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.scanPay, "dialogVisible", $event)
      }
    }
  }, [
    [_c('el-row', [_c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('h2', [_vm._v(_vm._s(_vm.$t('pay.needpay')) + "：￥" + _vm._s(_vm.formatMoney(this.currentPayType.money)))])])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('h2', {
      staticStyle: {
        "margin": "15px 0"
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.payType')) + "：")])])], 1), _vm._v(" "), _c('el-row', [(_vm.scanPay.currentType.id == 1) ? _c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('el-col', {
      attrs: {
        "span": 8,
        "offset": 8
      }
    }, [_c('div', {
      staticStyle: {
        "margin": "15px 20px",
        "padding": "20px 0",
        "text-align": "center"
      }
    }, [_c('div', [_c('svg', {
      staticClass: "icon",
      staticStyle: {
        "width": "60px",
        "height": "60px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": _vm.icon[1]
      }
    })])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.weChatPay')))])])])], 1) : _vm._e(), _vm._v(" "), (_vm.scanPay.currentType.id == 10) ? _c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('div', {
      staticStyle: {
        "margin": "15px 20px",
        "padding": "20px 0",
        "text-align": "center"
      }
    }, [_c('div', [_c('svg', {
      staticClass: "icon",
      staticStyle: {
        "width": "60px",
        "height": "60px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": _vm.icon[10]
      }
    })])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.aliPay')))])])]) : _vm._e(), _vm._v(" "), (_vm.scanPay.currentType.id == 2) ? _c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('div', {
      staticStyle: {
        "margin": "15px 20px",
        "padding": "20px 0",
        "text-align": "center"
      }
    }, [_c('div', [_c('svg', {
      staticClass: "icon",
      staticStyle: {
        "width": "60px",
        "height": "60px"
      },
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": _vm.icon[2]
      }
    })])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "22px"
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.RPay')))])])]) : _vm._e(), _vm._v(" "), (_vm.scanPay.paying == true) ? _c('div', {
      staticClass: "scan-paying",
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('img', {
      staticStyle: {
        "margin-top": "15px"
      },
      attrs: {
        "src": __webpack_require__(510),
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "color": "#FFFFFF",
        "text-align": "center",
        "font-size": "22px"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t('pay.orderPaying')) + "\n          ")])]) : _vm._e(), _vm._v(" "), (_vm.scanPay.failed == true) ? _c('div', {
      staticClass: "scan-paying",
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('img', {
      staticStyle: {
        "margin-top": "15px"
      },
      attrs: {
        "src": __webpack_require__(507),
        "alt": ""
      }
    })]) : _vm._e()], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
      attrs: {
        "span": 24
      }
    }, [_c('el-input', {
      directives: [{
        name: "focus",
        rawName: "v-focus"
      }],
      attrs: {
        "disabled": _vm.isPaying,
        "autofocus": !_vm.isIpad,
        "placeholder": _vm.$t('pay.scanPla'),
        "id": "scanPayInput"
      },
      nativeOn: {
        "keyup": function($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
          return _vm.getScanValue($event)
        }
      },
      model: {
        value: (_vm.scanPay.scanValue),
        callback: function($$v) {
          _vm.$set(_vm.scanPay, "scanValue", $$v)
        },
        expression: "scanPay.scanValue"
      }
    })], 1)], 1)], _vm._v(" "), _c('span', {
      staticClass: "dialog-footer",
      attrs: {
        "slot": "footer"
      },
      slot: "footer"
    }, [(_vm.isIpad) ? _c('span', {
      staticClass: "qr-btn",
      attrs: {
        "node-type": "qr-btn"
      },
      on: {
        "click": function($event) {
          return _vm.scan()
        }
      }
    }, [_c('span', {
      staticStyle: {
        "font-size": "14px",
        "font-weight": "500"
      }
    }, [_vm._v("扫一扫")]), _vm._v(" "), _c('input', {
      staticStyle: {
        "position": "absolute",
        "left": "0",
        "top": "0",
        "width": "80px",
        "height": "36px"
      },
      attrs: {
        "node-type": "jsbridge",
        "type": "file",
        "name": "myPhoto",
        "value": "扫一扫"
      }
    })]) : _vm._e(), _vm._v(" "), (_vm.scanPay.currentType.id == 10 && _vm.shopModel != 7) ? _c('el-button', {
      on: {
        "click": function($event) {
          return _vm.localAlipay()
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.localAli')))]) : _vm._e(), _vm._v(" "), (_vm.scanPay.currentType.id == 1 && _vm.shopModel != 7) ? _c('el-button', {
      on: {
        "click": function($event) {
          return _vm.localAlipay()
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('pay.localWeChat')))]) : _vm._e(), _vm._v(" "), _c('el-button', {
      on: {
        "click": _vm.cancelScanPay
      }
    }, [_vm._v(_vm._s(_vm.$t('common.cancel')))])], 1)
  ], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-4c6cf2a1", module.exports)
  }
}

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "car-title"
  }, [_c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "15%",
      "text-align": "center",
      "text-indent": "9px"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "40%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleName')))]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "15%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleNum')))]), _vm._v(" "), _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "20%",
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articlePrice')))])]), _vm._v(" "), _vm._l((_vm.car), function(article, index) {
    return _c('ul', {
      staticClass: "car-title car-content"
    }, [_c('hr', {
      staticStyle: {
        "border": "1px dashed #E0E0E0",
        "width": "90%"
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((article.type == 3 && !!article.tempRefundCount) ? false : true),
        expression: "(article.type == 3 && !!article.tempRefundCount)? false: true "
      }]
    }, [_c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-align": "center"
      }
    }, [_vm._v("\n                " + _vm._s(index + 1) + "\n            ")]), _vm._v(" "), _c('li', {
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
      staticClass: "add-article"
    }, [_vm._v("加\n            ")]) : _vm._e()]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "vertical-align": "top"
      }
    }, [_vm._v(_vm._s(article.count) + "\n            ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-align": "right",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                ¥" + _vm._s(_vm.formatMoney(article.price || 0)) + "\n            ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item) {
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
      }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "vertical-align": "top"
        }
      }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "text-align": "right",
          "vertical-align": "top"
        }
      }, [_vm._v("\n                ¥" + _vm._s(_vm.formatMoney(item.price)) + "\n            ")])]) : _vm._e()
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
        "margin-left": "-4%",
        "text-align": "center",
        "vertical-align": "top",
        "background-color": "#ef5350",
        "color": "#FFFFFF",
        "border-radius": "50%"
      }
    }, [_vm._v("退")])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-decoration": "line-through",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                " + _vm._s(article.tempRefundCount) + "\n            ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-decoration": "line-through",
        "text-align": "right",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                ¥ " + _vm._s(_vm.formatMoney((article.tempRefundCount * article.unitPrice || 0))) + "\n            ")])]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (article.tempGrantCount),
        expression: "article.tempGrantCount"
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
        value: (article.tempGrantCount),
        expression: "article.tempGrantCount"
      }],
      staticStyle: {
        "display": "inline-block",
        "width": "20px",
        "height": "20px",
        "margin-left": "-4%",
        "text-align": "center",
        "vertical-align": "top",
        "background-color": "#75C2AF",
        "color": "#FFFFFF",
        "border-radius": "50%"
      }
    }, [_vm._v("赠")])]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "15%",
        "text-decoration": "line-through",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                " + _vm._s(article.tempGrantCount) + "\n            ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-decoration": "line-through",
        "text-align": "right",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                ¥ " + _vm._s(_vm.formatMoney((article.tempGrantCount * article.unitPrice || 0))) + "\n            ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item) {
      return (article.type == 3 && article.tempRefundCount) ? _c('div', {
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
      }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "vertical-align": "top",
          "text-decoration": "line-through",
          "color": "#999999"
        }
      }, [_vm._v(_vm._s(item.count) + "\n            ")]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "vertical-align": "top",
          "text-decoration": "line-through",
          "color": "#999999",
          "text-align": "right"
        }
      }, [_vm._v("\n                ¥" + _vm._s(_vm.formatMoney(item.price)) + "\n            ")])]) : _vm._e()
    })], 2)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-63a44935", module.exports)
  }
}

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "width": "50%",
      "float": "left"
    }
  }, [_c('ul', {
    staticClass: "pay-info-details"
  }, [_c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.amountMoney')))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#EF5350",
      "font-size": "28px"
    }
  }, [_vm._v("¥" + _vm._s(_vm.formatMoney(_vm.payInfo.amountMoney)))])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.actuallyPay')))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "20px"
    }
  }, [_vm._v("\n                    ¥" + _vm._s(_vm.cardMoney > 0 ? _vm.formatMoney(_vm.cardMoney) : _vm.formatMoney(_vm.payInfo.actuallyPay)) + "\n                ")])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.remainMoney')))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(_vm.formatMoney(_vm.payInfo.remainMoney)))])])]), _vm._v(" "), _c('li', [_c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('pay.changeMoney')))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(_vm.formatMoney(_vm.payInfo.changeMoney)))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-7beb955d", module.exports)
  }
}

/***/ })

});