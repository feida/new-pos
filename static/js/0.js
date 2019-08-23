webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(485)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(536),
  /* scopeId */
  "data-v-39df732f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/car/detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39df732f", Component.options)
  } else {
    hotAPI.reload("data-v-39df732f", Component.options)
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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/symbols-meiyoushangpin.png";

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".panel-title[data-v-39df732f]{height:50px;line-height:50px;font-size:22px;text-align:center;background-color:#fff;color:#000}.panel-content[data-v-39df732f]{height:40px;line-height:40px;font-size:14px;color:#666;padding-left:15px;background-color:#fff}.mask-layer[data-v-39df732f]{width:100%;position:absolute;background-color:#000;opacity:.3}.car-footer[data-v-39df732f]{position:absolute;bottom:0;width:100%;background-color:#fff;border-top:8px solid #f5f5f5}.order-payment[data-v-39df732f]{font-size:16px;width:100%;height:40px;margin-left:18px;margin-right:18px;line-height:50px;color:#666}.order-payment-num[data-v-39df732f]{font-size:20px;color:#ef5350;line-height:24px}.order-operate-button[data-v-39df732f]{font-size:1em;width:100%;height:50px;color:#fff}.operate-button[data-v-39df732f]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;padding:10px 15px;border:none;background:#d8d8d8;border-radius:5px;color:#666;height:40px;width:100%;font-size:16px;font-weight:700}.operate-button-push-order[data-v-39df732f]{width:70%;background:#ffbf34;border-radius:5px;color:#fff}.car-total[data-v-39df732f]{height:50px;line-height:50px;border-top:5px solid #f2f2f2;font-size:22px;font-weight:700;text-align:center}.car-table[data-v-39df732f]{width:100%;font-size:12px}.car-table-title-tr[data-v-39df732f]{background-color:#eef1f6;height:40px;font-size:17px;color:#9b9b9b}.car-table-body-tr[data-v-39df732f]{text-align:center;height:40px;cursor:pointer}.car-table-body-tr td[data-v-39df732f],th[data-v-39df732f]{border-bottom:1px solid #dfe6ec}.car-table-body-package-tr[data-v-39df732f]{text-align:center;height:40px;background-color:#fff}.car-table-body-tr-selected[data-v-39df732f]{background-color:#e5e9f2}.have-order[data-v-39df732f]{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#032df9}#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar{width:1px;height:1px}#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1)}.order-page-wrapper[data-v-39df732f]{position:absolute;top:35%;right:30px;z-index:10}.order-page-wrapper>.pre-page[data-v-39df732f]{margin-bottom:50px}.order-page-wrapper>.next-page[data-v-39df732f],.order-page-wrapper>.pre-page[data-v-39df732f]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.6}.refund-page-wrapper[data-v-39df732f]{position:absolute;top:25%;right:50px;z-index:10}.refund-page-wrapper>.pre-page[data-v-39df732f]{margin-bottom:50px}.refund-page-wrapper>.next-page[data-v-39df732f],.refund-page-wrapper>.pre-page[data-v-39df732f]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#000;color:#fff;border-radius:50%;cursor:pointer;opacity:.4}.change-order-content[data-v-39df732f]{margin:0 auto;width:100%}.change-order-content[data-v-39df732f]::-webkit-scrollbar{display:none}.change-order-content>li[data-v-39df732f]{width:100%;height:50px;font-size:16px;font-weight:700;text-align:center;border-bottom:1px dashed #e0e0e0}.change-order-content>li>span[data-v-39df732f]{display:inline-block;height:50px;line-height:50px;font-size:18px;color:#666;font-weight:700}.change-order-content:not(:first-child)>li>span[data-v-39df732f]{height:50px;line-height:50px;font-size:16px}.article-item[data-v-39df732f]{display:inline-block;color:#666;font-size:16px}.control-count[data-v-39df732f]{display:inline-block;width:30px;height:30px;margin-top:2px;line-height:28px;font-size:25px;text-align:center;color:#fff;background-color:#a9a9a9;border-radius:50%}.change-item[data-v-39df732f]{font-size:16px;font-weight:700;height:40px}.car-title[data-v-39df732f]{width:100%;color:#666}.car-title .car-title-item[data-v-39df732f]{font-size:14px;display:inline-block;padding-top:1%;padding-bottom:1%}.car-content-item[data-v-39df732f],.details-item[data-v-39df732f]{font-size:14px;word-wrap:break-word;color:#666}.details-item[data-v-39df732f]{margin-top:8px}.details-button[data-v-39df732f]{border:1px solid #000;color:#000}.details-button-active[data-v-39df732f]{border:none;background-color:#ffbf34;color:#fff}.btn-number[data-v-39df732f]{width:90%;height:60px;margin:5px;background-color:#fff;font-size:22px;font-weight:700}.weight-article[data-v-39df732f]{color:#ffbf34}.el-dialog__wrap>.el-dialog__body[data-v-39df732f],.el-dialog__wrap>.el-dialog__header[data-v-39df732f]{padding:0}.el-dialog__wrap>.el-dialog__headerbtn[data-v-39df732f]{position:absolute;top:15px;right:15px}.dialog-title-warp[data-v-39df732f]{height:48px;line-height:48px;text-align:center}.dialog-title[data-v-39df732f]{font-family:SourceHanSansCN-Medium;font-size:22px;color:#666;font-weight:700;vertical-align:middle}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/component/car/detail.vue"],"names":[],"mappings":"AACA,8BACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAEhB,kBAAmB,AACnB,sBAA0B,AAC1B,UAAa,CAChB,AACD,gCACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AAEnB,qBAA0B,CAG7B,AAGD,6BAEI,WAAY,AACZ,kBAAmB,AACnB,sBAAwB,AACxB,UAAa,CAChB,AACD,6BACI,kBAAmB,AACnB,SAAY,AACZ,WAAY,AACZ,sBAA0B,AAC1B,4BAA8B,CACjC,AACD,gCACI,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,iBAAkB,AAClB,UAAY,CACf,AACD,oCACI,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACrB,AACD,uCACI,cAAe,AACf,WAAY,AACZ,YAAa,AACb,UAAY,CACf,AACD,iCACI,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAEhB,kBAAmB,AACnB,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,WAAe,AACf,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,eAAkB,CACrB,AACD,4CACI,UAAW,AAGX,mBAAoB,AACpB,kBAAmB,AACnB,UAAe,CAClB,AACD,4BACI,YAAa,AACb,iBAAkB,AAClB,6BAA8B,AAC9B,eAAgB,AAChB,gBAAkB,AAClB,iBAAmB,CACtB,AAGD,4BACI,WAAY,AACZ,cAAgB,CAEnB,AACD,qCACI,yBAA0B,AAC1B,YAAa,AACb,eAAgB,AAChB,aAAe,CAClB,AACD,oCACI,kBAAmB,AACnB,YAAa,AACb,cAAgB,CACnB,AACD,2DAEI,+BAAiC,CACpC,AACD,4CACI,kBAAmB,AACnB,YAAa,AACb,qBAA0B,CAC7B,AACD,6CACI,wBAA0B,CAC7B,AAID,6BACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,wBAA0B,CAC7B,AAKD,0DACI,UAAW,AACX,UAAY,CACf,AACD,gEACI,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAClC,AACD,gEACI,gDAAqD,AACrD,gBAAiB,AACjB,yBAA+B,CAClC,AAGD,qCACI,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,UAAY,CACf,AACD,+CASI,kBAAoB,CAGvB,AACD,+FAZI,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAmB,AAEnB,eAAgB,AAChB,UAAa,CAahB,AAGD,sCACI,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,UAAY,CACf,AACD,gDASI,kBAAoB,CAGvB,AACD,iGAZI,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,WAAY,AACZ,kBAAmB,AAEnB,eAAgB,AAChB,UAAa,CAahB,AACD,uCACI,cAAe,AACf,UAAY,CACf,AACD,0DACI,YAAa,CAChB,AACD,0CACI,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,gBAAkB,AAClB,kBAAmB,AACnB,gCAAkC,CACrC,AAID,+CACI,qBAAsB,AACtB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,eAAkB,CACrB,AAQD,iEACI,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AACD,+BACI,qBAAsB,AACtB,WAAY,AACZ,cAAgB,CACnB,AACD,gCACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,yBAA2B,AAC3B,iBAAmB,CACtB,AACD,8BACI,eAAgB,AAChB,gBAAkB,AAClB,WAAa,CAChB,AACD,4BACI,WAAY,AACZ,UAAY,CACf,AACD,4CACI,eAAgB,AAChB,qBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CACtB,AASD,kEAJI,eAAgB,AAChB,qBAAsB,AACtB,UAAY,CAOf,AALD,+BACI,cAAgB,CAInB,AACD,iCACI,sBAAwB,AACxB,UAAa,CAChB,AACD,wCACI,YAAa,AACb,yBAA0B,AAC1B,UAAe,CAClB,AACD,6BACI,UAAW,AACX,YAAa,AACb,WAAY,AACZ,sBAA0B,AAC1B,eAAgB,AAChB,eAAkB,CACrB,AACD,iCACI,aAAe,CAClB,AAID,wGACI,SAAa,CAChB,AACD,wDACI,kBAAmB,AACnB,SAAU,AACV,UAAY,CACf,AACD,oCACI,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACtB,AACD,+BACI,mCAAsC,AACtC,eAAgB,AAChB,WAAY,AACZ,gBAAkB,AAClB,qBAAuB,CAC1B","file":"detail.vue","sourcesContent":["\n.panel-title[data-v-39df732f] {\n    height: 50px;\n    line-height: 50px;\n    font-size: 22px;\n    /*font-weight: bold;*/\n    text-align: center;\n    background-color: #FFFFFF;\n    color: black;\n}\n.panel-content[data-v-39df732f] {\n    height: 40px;\n    line-height: 40px;\n    font-size: 14px;\n    color: #666;\n    padding-left: 15px;\n    /*padding-bottom: 2em;*/\n    background-color: #FFFFFF;\n    /*border-bottom: 3px dashed transparent;*/\n    /*repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);*/\n}\n\n/* 遮罩层 */\n.mask-layer[data-v-39df732f] {\n    /*height:100%;*/\n    width: 100%;\n    position: absolute;\n    background-color: black;\n    opacity: 0.3;\n}\n.car-footer[data-v-39df732f] {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    background-color: #FFFFFF;\n    border-top: 8px solid #f5f5f5;\n}\n.order-payment[data-v-39df732f] {\n    font-size: 16px;\n    width: 100%;\n    height: 40px;\n    margin-left: 18px;\n    margin-right: 18px;\n    line-height: 50px;\n    color: #666;\n}\n.order-payment-num[data-v-39df732f] {\n    font-size: 20px;\n    color: #ef5350;\n    line-height: 24px;\n}\n.order-operate-button[data-v-39df732f] {\n    font-size: 1em;\n    width: 100%;\n    height: 50px;\n    color: #fff;\n}\n.operate-button[data-v-39df732f] {\n    display: inline-block;\n    line-height: 1;\n    white-space: nowrap;\n    cursor: pointer;\n    /*margin: 5px 0px 0px 0px;*/\n    padding: 10px 15px;\n    border: none;\n    background: #D8D8D8;\n    border-radius: 5px;\n    color: #666666;\n    height: 40px;\n    width: 100%;\n    font-size: 16px;\n    font-weight: bold;\n}\n.operate-button-push-order[data-v-39df732f] {\n    width: 70%;\n    /*padding: 3px;*/\n    /*margin-left: 10px;*/\n    background: #FFBF34;\n    border-radius: 5px;\n    color: #ffffff;\n}\n.car-total[data-v-39df732f] {\n    height: 50px;\n    line-height: 50px;\n    border-top: 5px solid #F2F2F2;\n    font-size: 22px;\n    font-weight: bold;\n    text-align: center;\n}\n\n/*    购物车 table 样式    begin   */\n.car-table[data-v-39df732f] {\n    width: 100%;\n    font-size: 12px;\n    /*border: 1px solid #dfe6ec;*/\n}\n.car-table-title-tr[data-v-39df732f] {\n    background-color: #eef1f6;\n    height: 40px;\n    font-size: 17px;\n    color: #9B9B9B;\n}\n.car-table-body-tr[data-v-39df732f] {\n    text-align: center;\n    height: 40px;\n    cursor: pointer;\n}\n.car-table-body-tr td[data-v-39df732f], th[data-v-39df732f] {\n    /*border-top: 1px solid #dfe6ec;*/\n    border-bottom: 1px solid #dfe6ec;\n}\n.car-table-body-package-tr[data-v-39df732f] {\n    text-align: center;\n    height: 40px;\n    background-color: #FFFFFF;\n}\n.car-table-body-tr-selected[data-v-39df732f] {\n    background-color: #E5E9F2;\n}\n.car-table td[data-v-39df732f] {\n    /*border-bottom: 1px solid #dfe6ec;*/\n}\n.have-order[data-v-39df732f] {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: #032df9;\n}\n\n/*    购物车 table 样式    end   */\n\n/** 订单详情  滚动条  begin  **/\n#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar {\n    width: 1px;\n    height: 1px;\n}\n#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    background: rgba(0, 0, 0, 0.2);\n}\n#order-detail-wrapper[data-v-39df732f]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.1);\n}\n\n/** 订单详情  滚动条  end  **/\n.order-page-wrapper[data-v-39df732f] {\n    position: absolute;\n    top: 35%;\n    right: 30px;\n    z-index: 10;\n}\n.order-page-wrapper > .pre-page[data-v-39df732f] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background-color: #000;\n    color: #FFF;\n    border-radius: 50%;\n    margin-bottom: 50px;\n    cursor: pointer;\n    opacity: 0.6;\n}\n.order-page-wrapper > .next-page[data-v-39df732f] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background-color: #000;\n    color: #FFF;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.6;\n}\n\n/* 退菜弹窗样式*/\n.refund-page-wrapper[data-v-39df732f] {\n    position: absolute;\n    top: 25%;\n    right: 50px;\n    z-index: 10;\n}\n.refund-page-wrapper > .pre-page[data-v-39df732f] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background-color: #000;\n    color: #FFF;\n    border-radius: 50%;\n    margin-bottom: 50px;\n    cursor: pointer;\n    opacity: 0.4;\n}\n.refund-page-wrapper > .next-page[data-v-39df732f] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background-color: #000;\n    color: #FFF;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.4;\n}\n.change-order-content[data-v-39df732f] {\n    margin: 0 auto;\n    width: 100%;\n}\n.change-order-content[data-v-39df732f]::-webkit-scrollbar {\n    display: none\n}\n.change-order-content > li[data-v-39df732f] {\n    width: 100%;\n    height: 50px;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 1px dashed #E0E0E0;\n}\n.change-order-content > li[data-v-39df732f]:nth-child(2n) {\n    /*background-color: #F8F8F8;*/\n}\n.change-order-content > li > span[data-v-39df732f] {\n    display: inline-block;\n    height: 50px;\n    line-height: 50px;\n    font-size: 18px;\n    color: #666;\n    font-weight: bold;\n}\n.change-order-content:nth-of-type(1) > li > span[data-v-39df732f] {\n    /*height: 50px;\n    line-height: 50px;\n    font-size: 18px;\n    color: #666;*/\n    /*font-weight: bold;*/\n}\n.change-order-content:not(:first-child) > li > span[data-v-39df732f] {\n    height: 50px;\n    line-height: 50px;\n    font-size: 16px;\n}\n.article-item[data-v-39df732f] {\n    display: inline-block;\n    color: #666;\n    font-size: 16px;\n}\n.control-count[data-v-39df732f] {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin-top: 2px;\n    line-height: 28px;\n    font-size: 25px;\n    text-align: center;\n    color: #fff;\n    background-color: darkgray;\n    border-radius: 50%;\n}\n.change-item[data-v-39df732f] {\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n}\n.car-title[data-v-39df732f] {\n    width: 100%;\n    color: #666;\n}\n.car-title .car-title-item[data-v-39df732f] {\n    font-size: 14px;\n    display: inline-block;\n    padding-top: 1%;\n    padding-bottom: 1%;\n}\n.car-content[data-v-39df732f] {\n    /*border-top: dashed 1px black;*/\n}\n.car-content-item[data-v-39df732f] {\n    font-size: 14px;\n    word-wrap: break-word;\n    color: #666;\n}\n.details-item[data-v-39df732f] {\n    margin-top: 8px;\n    font-size: 14px;\n    word-wrap: break-word;\n    color: #666;\n}\n.details-button[data-v-39df732f] {\n    border: 1px solid black;\n    color: black;\n}\n.details-button-active[data-v-39df732f] {\n    border: none;\n    background-color: #ffbf34;\n    color: #FFFFFF;\n}\n.btn-number[data-v-39df732f] {\n    width: 90%;\n    height: 60px;\n    margin: 5px;\n    background-color: #FFFFFF;\n    font-size: 22px;\n    font-weight: bold;\n}\n.weight-article[data-v-39df732f] {\n    color: #ffbf34;\n}\n.el-dialog__wrap > .el-dialog__body[data-v-39df732f] {\n    padding: 0px;\n}\n.el-dialog__wrap > .el-dialog__header[data-v-39df732f] {\n    padding: 0px;\n}\n.el-dialog__wrap > .el-dialog__headerbtn[data-v-39df732f] {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n}\n.dialog-title-warp[data-v-39df732f] {\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n}\n.dialog-title[data-v-39df732f] {\n    font-family: \"SourceHanSansCN-Medium\";\n    font-size: 22px;\n    color: #666;\n    font-weight: bold;\n    vertical-align: middle;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_orderApi__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_car_detail_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_car_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__basic_car_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_auth__ = __webpack_require__(15);



var _methods;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'detail',
    components: { CarDetail: __WEBPACK_IMPORTED_MODULE_4__basic_car_detail_vue___default.a },
    data: function data() {
        return {
            innerVisible: false,
            orderId: null,
            maskHeight: 0, // 遮罩层的高度
            panelTitleHeight: 0, // 客单的高度
            showDetails: false,
            totalPrice: 0,
            amountCount: 0,
            carTableHeight: 0,
            orderInfo: {},
            car: [],

            // 退菜开始需要的选项
            changeOrder: { // 退菜
                isClick: false,
                isCheck: false,
                isCheckOne: false,
                flags: false,
                currentIndex: 0,
                show: false // 退菜弹窗显示
            },
            currentCarTableRow: {
                index: 0,
                info: {}
            },
            checkAllFlag: false,
            changeOrderItem: [],
            refundRemarks: [],
            refundCommand: '', // 退菜口令
            refundMoneyMessage: '暂无消息', // 退菜提醒，比如，退了多少钱
            refundList: [], // 退菜数组
            shopDet: {},
            orderPaymentList: [],
            refund: {},
            localRefund: {},
            refundMoney: 0, // 退的所有的钱
            refundAllCount: 0,
            refundMealAllNumber: 0, // 退掉的总的 餐盒个数
            refundMealAllPrice: 0, // 退掉的总的 餐盒钱数
            tipRefundMoney: 0,
            refundRemark: '',
            currentInput: false,
            radio: 0,
            refundPaymentList: [],
            shopModel: '',
            customerInfo: {},
            hasSaveRefund: false,
            refundLoading: false,
            weightDialog: { // 称重包编辑弹窗
                show: false,
                title: '',
                article: {}
            },
            refundService: {},
            shopId: '',
            articleItemCount: false,
            identityModal: false,
            identityPassword: '',
            grantRemarks: [],
            grantRemark: '',
            grantLoading: false,
            isPrintKitchen: false,
            isPrintTotal: false
        };
    },

    watch: {
        '$route.params': function $routeParams(params) {
            this.$message.closeAll();
            this.orderId = params.orderId || null;
            this.initOrder();
            this.closeChangeOrderDialog();
        }
    },
    created: function created() {
        this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_auth__["c" /* getSessionShopDet */])());
        this.shopModel = this.shopDet.shopMode;
    },
    mounted: function mounted() {
        var _this = this;

        var that = this;
        // 初始化 购物车 Table 的高度
        this.carTableHeight = document.body.clientHeight - 300;
        this.orderId = this.$route.params.orderId || null;
        this.initOrder();
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("changeOrder", function (change) {

            if (that.changeOrderItem.length <= 0) return that.$message.warning("请选择菜品");
            /*if (that.orderInfo.order_pos_discount_money > 0) return that.$message.warning(`【折扣：￥${that.orderInfo.order_pos_discount_money}】折扣订单，暂不允许退菜！`);
            if (that.orderInfo.erase_money > 0) return that.$message.warning(`【抹零：￥${that.orderInfo.erase_money}】抹零订单，暂不允许退菜！`);
            var exemptionMoney = +that.orderInfo.exemption_money;*/
            that.changedOrder(0);
            that.refundCommand = "";
            that.changeOrder.show = true;
        });
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('refund-command', function (value) {
            that.refundCommand = value;
        });
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("checkedWeight", function () {
            if (that.changeOrderItem.length > 1) {
                return that.$message.warning("核重每次只能编辑一种菜品");
            }
            if (that.changeOrderItem.length < 1) {
                return that.$message.warning("请选择需要核重的菜品");
            }
            if (that.changeOrderItem[0].type != 8) {
                return that.$message.warning('\u3010' + that.changeOrderItem[0].name + '\u3011\u975E\u79F0\u91CD\u83DC\u54C1\uFF0C\u65E0\u9700\u540E\u53A8\u786E\u8BA4');
            }
            that.weightDialog.show = true;
            that.weightDialog.article = that.changeOrderItem[0];
        });

        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("rushOrder", function () {
            if (that.changeOrderItem.length <= 0) {
                that.$message.warning("请选择菜品");
                return;
            }
            that.rushOrder();
        });
        //bus.$on("refundOrder", msgInfo => this.initOrder())
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('articleCount', function (count) {
            if (count == 0) {
                _this.articleItemCount = true;
            } else {
                _this.articleItemCount = false;
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on("grantOrder", function () {
            if (that.changeOrderItem.length <= 0) {
                that.$message.warning("请选择菜品");
                return;
            } else {
                var arr = that.changeOrderItem.filter(function (item) {
                    return item.type != 1 && item.type != 2 && item.type != 5;
                });
                if (arr.length > 0) {
                    that.$message.warning("只能赠单品、新规格、老规格");
                    return;
                }
            }
            that.grantOrderInit();
            that.identityPassword = '';
            that.identityModal = true;
        });
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('close-business', function (value) {
            that.identityPassword = value;
        });

        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$on('updateOrder', function (value) {
            that.initOrder();
            that.identityModal = false;
            that.weightDialog.show = false;
            that.changeOrder.show = false;
        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off('checkedWeight');
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off('changeOrder');
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("refund-command");
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("rushOrder");
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("grantOrder");
        //bus.$off("refundOrder")
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("article");
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("close-business");
        __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$off("updateOrder");
    },


    methods: (_methods = {
        get: function get(key) {
            this.refundCommand = key == 'del' ? this.refundCommand.substring(0, this.refundCommand.length - 1) : this.refundCommand += key;
        },

        //===============================
        //  初始化购物车
        //===============================
        initOrder: function initOrder() {
            var that = this;
            var query = this.orderId;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["g" /* getOrderDetail */])(query).then(function (res) {
                if (res.ok && res.data) {
                    that.orderInfo = res.data;
                    that.initCar(that.orderInfo);
                }
            });
        },
        initCar: function initCar(orderInfo) {
            var orderItemMap = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(orderInfo.order_item_list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
                        orderItemId: orderItem.id,
                        weight: orderItem.weight,
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

                        needRemind: orderItem.need_remind,
                        type: orderItem.type,
                        name: orderItem.article_name,
                        price: +orderItem.final_price,
                        tempPrice: +orderItem.final_price,

                        isOpen: false,
                        status: orderItem.status,

                        extraPrice: 0, // 新增 额外费用
                        grantCount: orderItem.grant_count,
                        tempGrantCount: orderItem.grant_count
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
                        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(orderItemMap[key].mealItems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
            //子项订单遍历
            var chrildrenItemMap = {};
            if (orderInfo.childreorder_item_list.length > 0) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(orderInfo.childreorder_item_list), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
                            orderItemId: childrenOrderItem.id,
                            ownId: childrenOrderItem.id, // 订单ID
                            orderId: childrenOrderItem.order_id, // 主订单ID
                            unitPrice: childrenOrderItem.unit_price, // 单价
                            payModeId: childrenOrderItem.payment_mode_id, //
                            originCount: childrenOrderItem.orgin_count,

                            mealFeeNumber: childrenOrderItem.meal_fee_number, // 每一项所有的餐盒数量
                            mealFeeNumberOne: childrenOrderItem.meal_fee_number / childrenOrderItem.count, // 每一项的餐盒个数
                            refundChange: 0, // 这个字段用来计算每一个菜品项需要退多少餐盒

                            count: childrenOrderItem.count, // 数量
                            tempCount: childrenOrderItem.count, // 剩余数量

                            tempRefundCount: childrenOrderItem.refund_count,

                            needRemind: childrenOrderItem.need_remind,
                            type: childrenOrderItem.type, // 类型
                            name: childrenOrderItem.article_name,
                            price: childrenOrderItem.final_price,
                            tempPrice: childrenOrderItem.final_price,

                            isOpen: false,
                            notes: '(加菜)',
                            status: childrenOrderItem.status,
                            weight: childrenOrderItem.weight,
                            extraPrice: 0, // 新增 额外费用(餐盒费，服务费等) 注意，初代版本不要求，所以是0
                            grantCount: childrenOrderItem.grant_count,
                            tempGrantCount: childrenOrderItem.grant_count

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
                            for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(chrildrenItemMap[_key].mealItems), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
            if (orderInfo.service_price && this.shopDet.serviceType == 0) {
                this.car.push({
                    time: this.$utils.generateUUID(),
                    serverPrice: true,
                    count: orderInfo.customer_count,
                    name: "服务费",
                    tempCount: orderInfo.customer_count,
                    status: 1,
                    type: 0,
                    unitPrice: orderInfo.service_price / orderInfo.customer_count,
                    tempPrice: orderInfo.service_price,
                    price: orderInfo.service_price
                });
            }
            if (orderInfo.service_price && this.shopDet.serviceType == 1) {
                var upgradeService = [{
                    name: this.shopDet.sauceFeeName,
                    count: orderInfo.sauce_fee_count,
                    price: orderInfo.sauce_fee_price,
                    type: 10
                }, {
                    name: this.shopDet.towelFeeName,
                    count: orderInfo.towel_fee_count,
                    price: orderInfo.towel_fee_price,
                    type: 11
                }, {
                    name: this.shopDet.tablewareFeeName,
                    count: orderInfo.tableware_fee_count,
                    price: orderInfo.tableware_fee_price,
                    type: 12
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
                            type: upgradeService[i].type,
                            unitPrice: upgradeService[i].price / upgradeService[i].count,
                            tempPrice: upgradeService[i].price,
                            price: upgradeService[i].price
                        });
                    }
                }
            }

            // 餐盒费
            if (orderInfo.meal_all_number && orderInfo.meal_fee_price) {
                this.car.push({
                    time: this.$utils.generateUUID(),
                    serverPrice: true,
                    count: orderInfo.meal_all_number,
                    name: "餐盒费",
                    price: orderInfo.meal_fee_price
                });
            }
        },
        showDetail: function showDetail() {
            this.showDetails = !this.showDetails;
            this.getCustomerInfo(this.orderInfo.customer_id);
        },
        saveCheckedWeight: function saveCheckedWeight() {
            if (weight = '') return this.$message.warning("重量不能为空");
            var that = this;
            // let orderId = this.weightDialog.article.orderItemId;
            var weight = this.weightDialog.article.weight;
            var weightArr = this.weightDialog.article.weight.toString().split('.');
            var jin = weightArr[0] + '斤';
            var liang = weightArr[1];
            liang = liang > 0 ? liang + '两' : '';
            var articleName = this.weightDialog.article.name.split('(')[0].toString() + '(' + jin + liang + ')';
            var qurey = {
                order_item_id: this.weightDialog.article.orderItemId,
                weight: weight,
                article_name: articleName
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["k" /* checkWeight */])(qurey).then(function (res) {
                if (res.ok) {
                    that.weightDialog.show = false;
                    that.recoverData();
                    that.initOrder();
                    that.$message("核重成功");
                    //                        bus.$emit("weightSuccess");
                    //                        bus.$emit("refresh-turnover");
                }
            });
        },
        dialogKeyBoard: function dialogKeyBoard(number) {
            var count = this.weightDialog.article.weight.toString();
            if (number == "←") {
                var len = count.length;
                this.weightDialog.article.weight = count.substring(0, len - 1);
            } else {
                var tempNumber = count.split('.')[1];
                if (tempNumber && tempNumber.length >= 1) {
                    return this.$message.warning("最多只能保留一位小数点");
                }
                this.weightDialog.article.weight = count + number;
            }
        },

        // 获取用户信息
        getCustomerInfo: function (_getCustomerInfo) {
            function getCustomerInfo(_x) {
                return _getCustomerInfo.apply(this, arguments);
            }

            getCustomerInfo.toString = function () {
                return _getCustomerInfo.toString();
            };

            return getCustomerInfo;
        }(function (customerId) {
            var that = this;
            if (!customerId) return;
            getCustomerInfo(customerId, function (customerInfo) {
                that.customerInfo = customerInfo;
            });
        }),

        //===============================
        //  退菜功能
        //===============================

        // 关闭弹窗
        changeClose: function changeClose(done) {
            this.$confirm('确认关闭？').then(function (_) {
                return done();
            }).catch(function (_) {});
        },
        choseCarTableRow: function choseCarTableRow(article, index) {
            //  展开套餐，出现单选和全选
            if (article.serverPrice) return;
            if (article.type === 3) {
                // 套餐
                article.isOpen = !article.isOpen;
            }
            this.changeOrder.isClick = true;
            this.currentCarTableRow.info = article;
            this.currentCarTableRow.index = index;
        },


        checkOne: function checkOne(item) {
            // 单选
            if (item.count <= 0) {
                this.$message.warning("当前所选菜品数量为0");
                return;
            }
            if (item.name == '餐盒费') {
                return this.$message.warning("餐盒费不能单独退");
            }

            if (typeof item.checked == 'undefined' || item.checked == false) {
                this.$set(item, "checked", true);
                if (item.status != 3) this.changeOrderItem.push(item);
            } else {
                item.checked = !item.checked;
                var that = this;
                this.changeOrderItem.map(function (ordItem, index) {
                    if (!ordItem.checked) {
                        that.changeOrderItem == that.changeOrderItem.splice(index, 1);
                        that.checkAllFlag = false;
                    }
                });
            }
        },

        checkAll: function checkAll(flag) {
            // 全选
            this.checkAllFlag = flag;
            var that = this;
            that.changeOrderItem = [];
            this.car.forEach(function (item, index) {
                if (!item.serverPrice) {
                    if (item.count == 0) {
                        that.$message.warning("当前所选菜品数量有为0项，无法全选");
                        return;
                    }

                    if (typeof item.checked == 'undefined', that.checkAllFlag) {
                        that.$set(item, "checked", that.checkAllFlag);
                        if (item.status != 3) that.changeOrderItem.push(item);
                    } else {
                        item.checked = that.checkAllFlag;
                        that.changeOrderItem = [];
                    }
                }
            });
        },

        changedOrder: function changedOrder() {
            this.getRefundRemarkList(1);
            /*if (this.changeOrderItem.length == 0) {
              this.$message("您还没选择任何菜品");
              return;
            }*/
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.changeOrderItem), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var item = _step5.value;

                    if (item.type == 3) {
                        item.mealItems.map(function (mealItem) {
                            item.tempPrice += mealItem.price;
                        });
                    }

                    item.price = 0;
                    item.currentOriginCount = 0;
                    item.currentOriginPrice = item.price;
                    // item.mealItems = '';
                    item.count = 0;
                    item.refundCount = item.tempCount;
                    item.refundItemCount = item.tempCount;
                    item.refundChange = item.tempCount;
                    item.mealFeeNumber = 0;
                    this.refundAllCount += item.refundCount;
                    this.refundMoney += item.tempPrice;
                    this.refundMealAllNumber += item.mealFeeNumberOne * item.tempCount;
                    this.formatRefundListItem(item);
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

            this.saveFormatData();
        },


        // 初始化退菜 数组
        formatRefundListItem: function formatRefundListItem(item) {
            var newItem = item;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.refundList), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _reListItem = _step6.value;

                    if (newItem.orderId === _reListItem.orderId) {
                        _reListItem.orderId = newItem.orderId;
                        _reListItem.count += newItem.tempCount;
                        _reListItem.price += newItem.tempPrice;
                        return;
                    }
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

            var reListItem = {
                orderId: newItem.orderId,
                price: newItem.tempPrice,
                count: newItem.refundCount
            };
            this.refundList.push(reListItem);
        },


        // 退的份数减一
        cutArticleCount: function cutArticleCount(item) {
            if (item.refundCount <= 1) {
                this.$message('已经减到最少了');
                return;
            }
            // 如果是套餐
            if (item.type == 3 && item.mealItems) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(item.mealItems), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var mealItem = _step7.value;

                        item.unitPrice += mealItem.price;
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
            }

            this.formatAddRefundList(item);
            item.price += item.unitPrice;
            item.refundChange--; // 每一项所菜品所退的个数
            item.count++; // 还剩余的菜品数量
            item.refundCount--;
            item.refundItemCount--;
            item.mealFeeNumber = item.mealFeeNumberOne * item.count;
            this.refundMoney -= item.unitPrice; // 退的所有的钱
            this.refundAllCount--;
            this.refundMealAllNumber -= item.mealFeeNumberOne;
            this.$message('减少一份');

            this.saveFormatData(); //
        },


        // 格式化退菜数组 这是减菜所要调用的
        formatRefundList: function formatRefundList(item) {
            var newItem = item;
            var key = true;
            while (key) {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.refundList), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var _reListItem2 = _step8.value;

                        if (newItem.orderId === _reListItem2.orderId) {
                            _reListItem2.count--;
                            _reListItem2.price -= newItem.unitPrice;
                            key = false;
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

                var reListItem = {
                    orderId: newItem.orderId,
                    price: newItem.refundCount * item.unitPrice,
                    count: newItem.refundCount
                };
                if (key == true) {
                    this.refundList.push(reListItem);
                    key = false;
                }
            }
        },


        // 退的份数加一
        addArticleCount: function addArticleCount(item) {
            if (item.refundItemCount >= item.tempCount) {
                this.$message('退的够多了');
                return;
            } else {
                this.formatRefundList(item);
                item.price -= item.unitPrice;
                item.refundChange++; // 每一项所菜品所退的个数
                item.count--; // 还剩余的菜品数量
                item.refundCount++;
                item.refundItemCount++;
                item.mealFeeNumber = item.mealFeeNumberOne * item.count;
                this.refundMoney += item.unitPrice; // 退的所有的钱
                this.refundAllCount++;
                this.refundMealAllNumber += item.mealFeeNumberOne;
                this.saveFormatData(); //
                this.$message("退的份数加1");
            }
        },

        // 格式化退菜数组 这是+ 所需要调用的
        formatAddRefundList: function formatAddRefundList(item) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.refundList), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var refundListItem = _step9.value;

                    if (refundListItem.orderId === item.orderId && item.type == 3) {
                        refundListItem.price -= item.unitPrice;
                        refundListItem.count--;
                    } else if (refundListItem.orderId === item.orderId) {
                        refundListItem.price -= item.unitPrice;
                        refundListItem.count--;
                    }
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
        },


        // 保存退菜数据格式化
        saveFormatData: function saveFormatData() {
            var that = this;
            var refundOrderItem = [];
            var refundItem = {};

            var localRefundOrderItem = [];
            var localRefundItem = {};

            var _shopDet = this.shopDet,
                mealFeePrice = _shopDet.mealFeePrice,
                isMealFee = _shopDet.isMealFee;

            var mealFeePriceOne = this.orderInfo.distribution_mode_id == 3 ? isMealFee ? mealFeePrice : 0 : 0;
            this.changeOrderItem.forEach(function (item) {
                var serviceType = item.type == 0 || item.type == 10 || item.type == 11 || item.type == 12;
                refundItem = {
                    id: serviceType ? sessionStorage.getItem("shopId") : item.ownId,
                    articleId: serviceType ? '' : item.id,
                    orderId: serviceType ? that.orderInfo.id : item.orderId,
                    type: serviceType ? item.type : 1,
                    count: item.refundChange,

                    refundCount: item.refundCount, // 退的数量
                    refundItemCount: item.originCount - item.count, // 退的单个菜品总个数


                    unitPrice: item.type == 8 ? item.tempPrice : item.unitPrice,
                    mealFeeNumber: item.refundChange * mealFeePriceOne || 0, // 剩余的餐盒数量(剩余的数量 * 每一项每一个所需的餐盒个数)
                    refundMealFeeItemOfPrint: item.mealFeeNumberOne * item.refundCount

                    //extraPrice: serviceType ? 0 : (item.mealFeeNumberOne * item.refundChange || 0) * mealFeePriceOne || 0 // extraPrice 这里是指退的餐盒费（外带和外卖并且开启了餐盒费才会有餐盒费）
                };
                //  如果是套餐，则要在 unitPrice 上面加上套餐子品的差价
                if (item.type == 3) {
                    var _iteratorNormalCompletion10 = true;
                    var _didIteratorError10 = false;
                    var _iteratorError10 = undefined;

                    try {
                        for (var _iterator10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(item.mealItems), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                            var temp = _step10.value;

                            refundItem.unitPrice = (parseFloat(refundItem.unitPrice) + parseFloat(temp.price)).toFixed(2);
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
                }
                refundOrderItem.push(refundItem);
                localRefundItem = {
                    id: item.ownId,
                    articleId: item.id,
                    orderId: item.orderId,
                    type: item.type,
                    mealItems: item.mealItems, // 套餐子项
                    count: item.count, // 剩余的数量
                    refundCount: item.refundCount, // 退的数量
                    refundItemCount: item.originCount - item.count, // 退的单个菜品总个数
                    unitPrice: item.unitPrice,
                    mealFeeNumber: item.count * item.mealFeeNumberOne, // 剩余的餐盒数量(剩余的数量 * 每一项每一个所需的餐盒个数)
                    refundMealFeeItemOfPrint: item.mealFeeNumberOne * item.refundCount
                };
                localRefundOrderItem.push(localRefundItem);
            });
            this.refund = {
                id: this.orderInfo.id,
                refundMoney: (+this.refundMoney).toFixed(2),
                orderItems: refundOrderItem,
                orderRefundRemarks: [],
                remarkSupply: null,
                refundType: this.radio
            };
            // 需要存储在本地的字段
            this.localRefund = {
                id: this.orderInfo.id,
                refundWay: this.radio,
                orderPaymentList: this.orderPaymentList, // 支付项列表
                refundMoney: this.refundMoney || 0, // 退的，所有菜品的钱数
                refundAllCount: this.refundAllCount || 0, // 退的所有的数量
                payModeId: 12,
                orderItems: localRefundOrderItem,
                refundMealAllNumber: this.refundMealAllNumber, // 退掉的总的 餐盒个数
                refundMealAllPrice: this.refundMealAllNumber * mealFeePriceOne, // 退掉的总的 餐盒钱数
                isMealFee: isMealFee, // 是否开启 餐盒费 0 未开启 1 开启
                refundList: this.refundList, // 退的 菜品归类处理，同一类型归同一类
                refundRemark: this.refundRemark //  退菜 备注
            };
        },
        getRefundRemarkList: function getRefundRemarkList(type) {
            var _this2 = this;

            // 退菜原因type=1 或 赠菜原因type=2
            this.refundRemarks = [];
            this.grantRemarks = [];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["l" /* getRemarks */])(type).then(function (res) {
                console.log('getRemarks', res);
                if (res.ok && res.data && res.data.length > 0) {
                    if (type == 1) {
                        _this2.refundRemark = res.data[0].id + "_" + res.data[0].name;
                        res.data.map(function (item) {
                            return _this2.refundRemarks.push(item);
                        });
                    } else if (type == 2) {
                        _this2.grantRemark = res.data[0].id + "_" + res.data[0].name;
                        res.data.map(function (item) {
                            return _this2.grantRemarks.push(item);
                        });
                    }
                }
            });
        },
        saveChange: function saveChange() {
            var that = this;
            var superPwd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_auth__["b" /* getSession */])("superPwd");
            var inputSuperPwd = this.$utils.pwdEncryption(this.refundCommand);

            if (inputSuperPwd == '') {
                this.$message.warning('退菜口令不能为空');
                return;
            }
            console.log('inputSuperPwd', inputSuperPwd);
            if (inputSuperPwd != superPwd) {
                this.$message.error('退菜口令错误');
                return;
            }

            if (that.orderInfo.order_pos_discount_money && that.orderInfo.order_pos_discount_money > 0) {
                that.$message.warning("订单已经折扣，请重新选择菜品");
                return;
            }
            this.refundLoading = true;
            this.hasSaveRefund = true;
            this.refund.refundRemark = this.refundRemark;
            that.refundOrderCover();
        },
        refundOrderCover: function refundOrderCover() {
            var _this3 = this;

            var that = this;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["m" /* refundOrderNew */])(that.refund).then(function (res) {
                that.refundLoading = false;
                if (!res.ok || !res.data) return that.$message.error(res.message);
                that.refund.refundType = that.radio;
                delete that.refund.refundRemark;
                var query = {
                    order_id: _this3.orderId,
                    auto_print: 1,
                    total_type: 2,
                    refund: 1,
                    order_item_arr: _this3.refund.orderItems
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["d" /* printTotal */])(query).then(function (res) {
                    console.log('printTotal', res);
                });
                var query1 = {
                    order_id: _this3.orderId,
                    auto_print: 1,
                    kitchen_type: 0,
                    refund: 1,
                    order_item_arr: _this3.refund.orderItems
                };
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["n" /* printKitchenTotal */])(query1).then(function (res) {
                    console.log('printKitchenTotal', res);
                });
                that.serverRefundSuccess(res.data.refundPaymentItemList);
            }).catch(function (err) {
                that.refundLoading = false;
            });
        },
        serverRefundSuccess: function serverRefundSuccess(refundPaymentItemList) {
            var that = this;
            that.$message.success("退菜成功！");
            that.hasSaveRefund = false;
            that.changeOrder.show = false;
            that.recoverData();
            that.initOrder();
            var refundMsg = [];
            if (refundPaymentItemList.length == 0) return;
            var h = that.$createElement;
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(refundPaymentItemList), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var item = _step11.value;

                    refundMsg.push(h('p', null, item.remark));
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            that.$msgbox({
                title: '退菜结果',
                message: h('p', null, refundMsg),
                confirmButtonText: '确定'
            }).then(function (action) {});
        },
        recoverData: function recoverData() {
            this.currentInput = false; // 关闭键盘弹窗

            this.changeOrder.show = false;
            this.changeOrder.isClick = false;
            this.changeOrder.isCheck = false;
            this.changeOrder.isCheckOne = false;
            this.changeOrder.flags = false;
            this.checkAllFlag = false;
            this.changeOrder.currentIndex = 0;

            this.changeOrderItem = [];

            this.refundMoney = 0;
            this.refundAllCount = 0;
            this.refundMealAllNumber = 0;
            this.refundList = [];
            this.refundService = {};
        },
        closeChangeOrderDialog: function closeChangeOrderDialog() {
            // 取消退菜
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.changeOrderItem), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var item = _step12.value;

                    item.checked = false;
                    item.count = item.tempCount;
                    item.price = item.tempPrice;
                    if (item.type == 3) {
                        item.mealItems.map(function (mealItem) {
                            item.tempPrice -= mealItem.price;
                        });
                    }
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            this.recoverData();
        },
        toTablePage: function toTablePage(order) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.changeOrderItem), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var item = _step13.value;

                    item.checked = false;
                }
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                        _iterator13.return();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            this.recoverData();
            var path = this.$router.push("/table/eatin/detail/" + order.id + "?tableNumber=" + order.table_number);
            this.$router.push("/table/eatin/detail/" + order.id + "?tableNumber=" + order.table_number);
            __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("hasChanged", path);
            __WEBPACK_IMPORTED_MODULE_3__utils_bus__["a" /* default */].$emit("refresh-turnover");
        },
        changeOrderPages: function changeOrderPages(operation) {
            var changePages = document.getElementById('change-pages');
            if (operation == 1) {
                changePages.scrollTop += changePages.clientHeight;
            }
            if (operation == -1) {
                changePages.scrollTop -= changePages.clientHeight;
            }
        },
        focus: function focus() {
            this.refundCommand = "";
            this.currentInput = true;
        },
        changeInput: function changeInput(val) {
            // 退菜口令键盘相关
            this.refundCommand = val;
        },
        closeKeyBoard: function closeKeyBoard() {
            // 关闭键盘
            this.currentInput = false;
        },

        //=================================
        //退菜结束
        //=================================
        orderItemListToMap: function orderItemListToMap(itemList) {
            var itemMap = {};
            for (var i in itemList) {
                var item = itemList[i];
                itemMap[item.id] = item;
            }
            return itemMap;
        },
        orderPageOperation: function orderPageOperation(operation) {
            var orderDetailWrapper = document.getElementById("order-detail-wrapper");
            var car = document.getElementById("car");
            if (operation == 1) {
                // 下一页
                orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
            } else {
                //  上一页
                orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
            }
        },
        formatDate: function (_formatDate) {
            function formatDate(_x2) {
                return _formatDate.apply(this, arguments);
            }

            formatDate.toString = function () {
                return _formatDate.toString();
            };

            return formatDate;
        }(function (date) {
            return formatDate(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
        }),
        printTotal: function printTotal() {
            var _this4 = this;

            var query = {
                order_id: this.orderId,
                auto_print: this.shopDet.autoPrintTotal,
                total_type: 1,
                refund: 0,
                order_item_arr: []
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["d" /* printTotal */])(query).then(function (res) {
                _this4.isPrintTotal = false;
                console.log('printTotal', res);
            });
        },
        clickPrintTotal: function clickPrintTotal() {
            var _this5 = this;

            this.isPrintTotal = true;
            this.$confirm('此操作将打印总单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this5.printTotal();
            }).catch(function () {
                _this5.isPrintTotal = false;
            });
        },
        printKitchen: function printKitchen() {
            var _this6 = this;

            this.isPrintKitchen = true;
            this.$confirm('此操作将打印厨打, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this6._printKitchenTotal();
            }).catch(function () {
                _this6.isPrintKitchen = false;
            });
        },
        _printKitchenTotal: function _printKitchenTotal() {
            var _this7 = this;

            // this.dialogVisible = false
            var query = {
                order_id: this.orderId,
                auto_print: this.shopDet.autoPrintTotal,
                kitchen_type: 0,
                refund: 0,
                order_item_arr: []
            };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["n" /* printKitchenTotal */])(query).then(function (res) {
                _this7.isPrintKitchen = false;
                console.log('printKitchenTotal', res);
                if (res.ok) {}
            });
        },
        formatMoney: function formatMoney(money) {
            return this.$utils.formatMoney(money || 0);
        },

        //催菜
        rushOrder: function rushOrder() {
            if (!this.shopDet.enableDuoDongXian) {
                return this.$message.warning("动线不允许催菜");
            }

            var that = this;
            var data = [];
            var orderItemArr = [];
            data = this.changeOrderItem.filter(function (item, i) {
                return item.type != 'servicePrice';
            });
            if (data.length > 0) {
                data.map(function (item, i) {
                    var temp = {
                        articleId: item.id,
                        id: item.orderItemId,
                        orderId: item.orderId
                    };
                    orderItemArr.push(temp);
                });
                var rushData = {
                    orderId: this.orderId,
                    orderItemArr: orderItemArr
                };
                console.log('rushData', rushData);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["o" /* reminderPrint */])(rushData).then(function (res) {
                    console.log('reminderPrint', res);
                    if (res.ok) {
                        data = [];
                        orderItemArr = [];
                        that.$message.success("催菜成功");
                    }
                });
            } else {
                that.$message.warning("请选择菜品");
            }
        }
    }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'focus', function focus() {
        this.identityPassword = "";
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'identityDialog', function identityDialog() {
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
            for (var _iterator14 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.changeOrderItem), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var item = _step14.value;

                item.checked = false;
                item.count = item.tempCount;
                item.price = item.tempPrice;
                if (item.type == 3) {
                    item.mealItems.map(function (mealItem) {
                        item.tempPrice -= mealItem.price;
                    });
                }
            }
        } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion14 && _iterator14.return) {
                    _iterator14.return();
                }
            } finally {
                if (_didIteratorError14) {
                    throw _iteratorError14;
                }
            }
        }

        this.identityModal = false;
        this.changeOrderItem = [];
        this.grantLoading = false;
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'grantOrderInit', function grantOrderInit() {
        this.getRefundRemarkList(2);
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
            for (var _iterator15 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.changeOrderItem), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var item = _step15.value;

                item.count = 0;
                item.grantCount = item.tempCount;
            }
        } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                    _iterator15.return();
                }
            } finally {
                if (_didIteratorError15) {
                    throw _iteratorError15;
                }
            }
        }
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'cutArticleCount1', function cutArticleCount1(item) {
        if (item.grantCount <= 1) {
            this.$message('已经减到最少了');
            return;
        }
        item.count++; // 还剩余的菜品数量
        item.grantCount--;
        this.$message('减少一份');
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'addArticleCount1', function addArticleCount1(item) {
        if (item.grantCount >= item.tempCount) {
            this.$message('赠的够多了');
            return;
        } else {
            item.grantCount++; // 每一项所菜品所退的个数
            item.count--; // 还剩余的菜品数量
            this.$message("赠的份数加1");
        }
    }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_methods, 'grantOrder', function grantOrder() {
        var that = this;
        var superPwd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_auth__["b" /* getSession */])("superPwd");
        var inputSuperPwd = this.$utils.pwdEncryption(this.identityPassword);
        if (inputSuperPwd == '') {
            this.$message.warning('身份口令不能为空');
            return;
        }
        if (inputSuperPwd != superPwd) {
            this.$message.error('身份口令错误');
            return;
        }
        if (that.orderInfo.order_pos_discount_money && that.orderInfo.order_pos_discount_money > 0) {
            that.$message.warning("订单已经折扣，请重新选择菜品");
            return;
        }
        this.grantLoading = true;
        var orderItemArr = [];

        if (this.changeOrderItem.length > 0) {
            this.changeOrderItem.map(function (item, i) {
                if (item.type != 1 && item.type != 2 && item.type != 5) {
                    return false;
                }
                var temp = {
                    articleId: item.id,
                    id: item.orderItemId,
                    orderId: item.orderId,
                    type: item.type,
                    count: item.grantCount
                };
                orderItemArr.push(temp);
            });
            var obj = {};
            orderItemArr = orderItemArr.reduce(function (item, next) {
                obj[next.id] ? '' : obj[next.id] = true && item.push(next);
                return item;
            }, []);

            var grantData = {
                id: this.orderId,
                orderItems: orderItemArr,
                remark: that.grantRemark

            };
            if (orderItemArr.length == 0) {
                that.$message.warning("只能赠菜品");
                return false;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_orderApi__["p" /* grantArticleByOrderIdAndOrderItems */])(grantData).then(function (res) {
                console.log('赠菜', res);
                that.grantLoading = false;
                if (res.ok) {
                    that.identityModal = false;
                    that.initOrder();
                    that.changeOrderItem = [];
                    that.identityPassword = '';
                    that.$message.success("赠菜成功");
                }
            }).catch(function (err) {
                that.grantLoading = false;
            });
        } else {
            that.identityPassword = '';
            that.grantLoading = false;
            that.$message.warning("请选择菜品");
        }
    }), _methods)
});

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(472), __esModule: true };

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(470);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(473);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("ec61b254", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(414, function() {
     var newContent = __webpack_require__(414);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.orderInfo.id) ? _c('div', {
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
      "overflow-y": "auto",
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
  })])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "car"
    }
  }, [_c('ul', {
    staticClass: "car-title"
  }, [(_vm.checkAllFlag == false) ? _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "15%",
      "text-align": "center",
      "text-indent": "9px"
    },
    on: {
      "click": function($event) {
        return _vm.checkAll(true)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.all')) + "\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.checkAllFlag == true) ? _c('li', {
    staticClass: "car-title-item",
    staticStyle: {
      "width": "15%",
      "text-align": "center",
      "text-indent": "9px"
    },
    on: {
      "click": function($event) {
        return _vm.checkAll(false)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')) + "\n                    ")]) : _vm._e(), _vm._v(" "), _c('li', {
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
      staticClass: "car-title car-content",
      on: {
        "click": function($event) {
          return _vm.checkOne(article)
        }
      }
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
      class: (article.type == 8 && article.needRemind) ? 'weight-article' : '',
      staticStyle: {
        "width": "40%"
      }
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "80%"
      }
    }, [_vm._v(_vm._s(article.name))]), _vm._v(" "), (article.notes && article.grantCount == 0) ? _c('span', {
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
    }, [_vm._v("\n                    加\n            ")]) : _vm._e()]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      class: (article.type == 8 && article.needRemind) ? 'weight-article' : '',
      staticStyle: {
        "width": "15%",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                            " + _vm._s(article.count) + "\n                        ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      class: (article.type == 8 && article.needRemind) ? 'weight-article' : '',
      staticStyle: {
        "width": "20%",
        "text-align": "right",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                            ¥" + _vm._s(_vm.formatMoney(article.price || 0)) + "\n                        ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item) {
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
      }, [_vm._v(_vm._s(item.name))])]), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "15%",
          "vertical-align": "top"
        }
      }, [_vm._v("\n                            " + _vm._s(item.count) + "\n                        ")]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "text-align": "right",
          "vertical-align": "top"
        }
      }, [_vm._v("¥" + _vm._s(_vm.formatMoney(item.price)) + "\n                        ")])]) : _vm._e()
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
    }, [_vm._v("\n                            " + _vm._s(article.tempRefundCount) + "\n                        ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-decoration": "line-through",
        "text-align": "right",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                            ¥ " + _vm._s(_vm.formatMoney((article.tempRefundCount * article.unitPrice || 0))) + "\n                        ")])]), _vm._v(" "), _c('div', {
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
    }, [_vm._v("\n                            " + _vm._s(article.tempGrantCount) + "\n                        ")]), _vm._v(" "), _c('li', {
      staticClass: "car-title-item car-content-item",
      staticStyle: {
        "width": "20%",
        "text-decoration": "line-through",
        "text-align": "right",
        "color": "#999999",
        "vertical-align": "top"
      }
    }, [_vm._v("\n                            ¥ " + _vm._s(_vm.formatMoney((article.tempGrantCount * article.unitPrice || 0))) + "\n                        ")])]), _vm._v(" "), _vm._l((article.mealItems), function(item) {
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
      }, [_vm._v("\n                            " + _vm._s(item.count) + "\n                        ")]), _vm._v(" "), _c('li', {
        staticClass: "car-title-item car-content-item",
        staticStyle: {
          "width": "20%",
          "vertical-align": "top",
          "text-decoration": "line-through",
          "color": "#999999",
          "text-align": "right"
        }
      }, [_vm._v("\n                            ¥" + _vm._s(_vm.formatMoney(item.price)) + "\n                        ")])]) : _vm._e()
    })], 2)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "car-footer"
  }, [_c('el-row', {
    staticClass: "order-payment"
  }, [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('order.article')) + ":"), _c('span', {
    staticClass: "order-payment-num"
  }, [_vm._v(_vm._s(_vm.orderInfo.count_with_child || _vm.orderInfo.article_count))])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('order.totalNum')) + ":"), _c('span', {
    staticClass: "order-payment-num"
  }, [_vm._v("￥" + _vm._s(_vm.formatMoney(_vm.orderInfo.amount_with_children || _vm.orderInfo.order_money || 0)))])])], 1), _vm._v(" "), _c('hr', {
    staticStyle: {
      "border": "1px dashed #dfdfdf",
      "width": "90%"
    }
  }), _vm._v(" "), _c('el-row', {
    staticClass: "order-operate-button",
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
  }, [_c('el-button', {
    staticClass: "operate-button operate-button-push-order",
    attrs: {
      "disabled": _vm.articleItemCount,
      "loading": _vm.isPrintKitchen
    },
    on: {
      "click": _vm.printKitchen
    }
  }, [_vm._v(_vm._s(_vm.$t('detail.printKitchen')) + "\n                    ")])], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": 12
    }
  }, [_c('el-button', {
    staticClass: "operate-button operate-button-push-order",
    attrs: {
      "disabled": _vm.articleItemCount,
      "loading": _vm.isPrintTotal
    },
    on: {
      "click": _vm.clickPrintTotal
    }
  }, [_vm._v(_vm._s(_vm.$t('detail.printTotal')) + "\n                    ")])], 1)], 1)], 1)], 1) : _c('div', [_vm._m(0)]), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.changeOrder.show,
      "width": "90%",
      "close-on-click-modal": false,
      "before-close": _vm.closeChangeOrderDialog,
      "id": "refundDialog"
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.changeOrder, "show", $event)
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.$t('detail.refund')))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.refundLoading),
      expression: "refundLoading"
    }],
    staticStyle: {
      "padding": "0px 20px"
    },
    attrs: {
      "element-loading-text": "Loading..."
    }
  }, [_c('div', {
    staticStyle: {
      "background-color": "#F3F5F9",
      "border": "1px solid #333",
      "border-radius": "5px"
    }
  }, [_c('ul', {
    staticClass: "change-order-content"
  }, [_c('li', [_c('span', {
    staticStyle: {
      "width": "35%",
      "text-align": "left"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleName')))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "25%"
    }
  }, [_vm._v(_vm._s(_vm.$t('detail.price')))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "30%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleNum')))])])]), _vm._v(" "), _c('ul', {
    staticClass: "change-order-content",
    staticStyle: {
      "overflow-y": "scroll",
      "height": "180px",
      "max-height": "220px"
    },
    attrs: {
      "id": "change-pages"
    }
  }, _vm._l((_vm.changeOrderItem), function(item, index) {
    return _c('li', [_c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "35%",
        "text-align": "left",
        "line-height": "50px"
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "25%",
        "line-height": "50px"
      }
    }, [_vm._v(_vm._s((item.tempPrice /
      item.tempCount).toFixed(2)) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "30%",
        "line-height": "50px"
      }
    }, [_c('p', {
      staticClass: "control-count",
      on: {
        "click": function($event) {
          return _vm.cutArticleCount(item)
        }
      }
    }, [_vm._v("-")]), _vm._v("\n                             " + _vm._s(item.refundCount) + " \n                            "), _c('p', {
      staticClass: "control-count",
      on: {
        "click": function($event) {
          return _vm.addArticleCount(item)
        }
      }
    }, [_vm._v("+")])])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "refund-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.changeOrderPages(-1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-top",
    staticStyle: {
      "font-size": "26px",
      "margin-left": "2px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.changeOrderPages(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px",
      "margin-top": "4px",
      "margin-left": "2px"
    }
  })])])]), _vm._v(" "), (_vm.refundRemarks && _vm.refundRemarks.length > 0) ? _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "width": "60%"
    }
  }, [_c('h3', {
    staticStyle: {
      "margin-left": "5px",
      "display": "inline-block",
      "width": "20%",
      "font-size": "20px",
      "color": "#666666"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('detail.whyRefund')) + ":")]), _vm._v(" "), _c('el-select', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "placeholder": _vm.$t('common.selectPla')
    },
    model: {
      value: (_vm.refundRemark),
      callback: function($$v) {
        _vm.refundRemark = $$v
      },
      expression: "refundRemark"
    }
  }, _vm._l((_vm.refundRemarks), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id + '_' + item.name
      }
    })
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "width": "60%"
    }
  }, [_c('h3', {
    staticStyle: {
      "margin-left": "5px",
      "display": "inline-block",
      "width": "20%",
      "font-size": "20px",
      "color": "#666666"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('detail.refundPsd')) + ":")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.refundCommand),
      expression: "refundCommand"
    }],
    staticStyle: {
      "display": "inline-block",
      "border": "1px solid grey",
      "height": "34px",
      "border-radius": "5px",
      "width": "50%"
    },
    attrs: {
      "type": "password",
      "autocomplete": "new-password",
      "readonly": "",
      "onfocus": "this.removeAttribute('readonly');",
      "data-name": "refundCommand"
    },
    domProps: {
      "value": (_vm.refundCommand)
    },
    on: {
      "click": function($event) {
        return _vm.focus()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.refundCommand = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('span', {
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
        return _vm.closeChangeOrderDialog()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v("\n          \n      "), _c('el-button', {
    staticStyle: {
      "background-color": "#000",
      "color": "#fff"
    },
    attrs: {
      "disabled": _vm.hasSaveRefund
    },
    on: {
      "click": _vm.saveChange
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)])]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.weightDialog.show
    },
    on: {
      "update:visible": function($event) {
        return _vm.$set(_vm.weightDialog, "show", $event)
      }
    }
  }, [
    [_c('span', {
      staticStyle: {
        "font-size": "24px",
        "margin-left": "20px"
      }
    }, [_vm._v(_vm._s(_vm.weightDialog.article.name))]), _vm._v("：\n            "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.weightDialog.article.weight),
        expression: "weightDialog.article.weight"
      }],
      staticStyle: {
        "height": "40px",
        "border": "1px solid black",
        "font-size": "24px",
        "width": "50%"
      },
      attrs: {
        "type": "text",
        "readonly": "",
        "autofocus": "true"
      },
      domProps: {
        "value": (_vm.weightDialog.article.weight)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.weightDialog.article, "weight", $event.target.value)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "24px"
      }
    }, [_vm._v("斤")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-top": "5px",
        "margin-bottom": "5px"
      }
    }, [_c('el-col', {
      attrs: {
        "span": 24,
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
    }, [_c('div', {
      staticStyle: {
        "width": "100%",
        "text-align": "right",
        "margin-top": "20px"
      }
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.weightDialog.show = false
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.saveCheckedWeight
      }
    }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)])
  ], 2), _vm._v(" "), _c('el-dialog', {
    staticClass: "el-dialog__wrap",
    attrs: {
      "visible": _vm.identityModal,
      "width": "90%",
      "close-on-click-modal": false,
      "before-close": _vm.identityDialog,
      "id": "businessDialog"
    },
    on: {
      "update:visible": function($event) {
        _vm.identityModal = $event
      }
    }
  }, [_c('div', {
    staticClass: "dialog-title-warp"
  }, [_c('span', {
    staticClass: "dialog-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.$t('detail.grant')))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.grantLoading),
      expression: "grantLoading"
    }],
    staticStyle: {
      "padding": "0px 20px"
    },
    attrs: {
      "element-loading-text": "Loading ..."
    }
  }, [_c('div', {
    staticStyle: {
      "background-color": "#F3F5F9",
      "border": "1px solid #333",
      "border-radius": "5px"
    }
  }, [_c('ul', {
    staticClass: "change-order-content"
  }, [_c('li', [_c('span', {
    staticStyle: {
      "width": "35%",
      "text-align": "left"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleName')))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "25%"
    }
  }, [_vm._v(_vm._s(_vm.$t('detail.price')))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "width": "30%"
    }
  }, [_vm._v(_vm._s(_vm.$t('order.articleNum')))])])]), _vm._v(" "), _c('ul', {
    staticClass: "change-order-content",
    staticStyle: {
      "overflow-y": "scroll",
      "height": "180px",
      "max-height": "220px"
    },
    attrs: {
      "id": "change-pages"
    }
  }, _vm._l((_vm.changeOrderItem), function(item, index) {
    return _c('li', [_c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "35%",
        "text-align": "left",
        "line-height": "50px"
      }
    }, [_vm._v("\n                            " + _vm._s(item.name) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "25%",
        "line-height": "50px"
      }
    }, [_vm._v(_vm._s((item.tempPrice /
      item.tempCount).toFixed(2)) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "article-item",
      staticStyle: {
        "width": "30%",
        "line-height": "50px"
      }
    }, [_c('p', {
      staticClass: "control-count",
      on: {
        "click": function($event) {
          return _vm.cutArticleCount1(item)
        }
      }
    }, [_vm._v("-")]), _vm._v("\n                             " + _vm._s(item.grantCount) + " \n                            "), _c('p', {
      staticClass: "control-count",
      on: {
        "click": function($event) {
          return _vm.addArticleCount1(item)
        }
      }
    }, [_vm._v("+")])])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "refund-page-wrapper"
  }, [_c('div', {
    staticClass: "pre-page",
    on: {
      "click": function($event) {
        return _vm.changeOrderPages(-1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-top",
    staticStyle: {
      "font-size": "26px",
      "margin-left": "2px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-page",
    on: {
      "click": function($event) {
        return _vm.changeOrderPages(1)
      }
    }
  }, [_c('span', {
    staticClass: "el-icon-caret-bottom",
    staticStyle: {
      "font-size": "26px",
      "margin-top": "4px",
      "margin-left": "2px"
    }
  })])])]), _vm._v(" "), (_vm.grantRemarks && _vm.grantRemarks.length > 0) ? _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "width": "60%"
    }
  }, [_c('h3', {
    staticStyle: {
      "margin-left": "5px",
      "display": "inline-block",
      "width": "20%",
      "font-size": "20px",
      "color": "#666666"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('detail.whyGrant')) + ":")]), _vm._v(" "), _c('el-select', {
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "placeholder": _vm.$t('common.selectPla')
    },
    model: {
      value: (_vm.grantRemark),
      callback: function($$v) {
        _vm.grantRemark = $$v
      },
      expression: "grantRemark"
    }
  }, _vm._l((_vm.grantRemarks), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id + '_' + item.name
      }
    })
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "width": "60%"
    }
  }, [_c('h3', {
    staticStyle: {
      "margin-left": "5px",
      "display": "inline-block",
      "width": "20%",
      "font-size": "20px",
      "color": "#666666"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('detail.grantPsd')) + ":")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.identityPassword),
      expression: "identityPassword"
    }],
    staticStyle: {
      "display": "inline-block",
      "border": "1px solid grey",
      "height": "34px",
      "border-radius": "5px",
      "width": "50%"
    },
    attrs: {
      "type": "password",
      "autocomplete": "new-password",
      "readonly": "",
      "onfocus": "this.removeAttribute('readonly');",
      "data-name": "closeBusiness"
    },
    domProps: {
      "value": (_vm.identityPassword)
    },
    on: {
      "click": function($event) {
        return _vm.focus()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.identityPassword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px",
      "width": "60%"
    }
  }, [_c('p', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                    （" + _vm._s(_vm.$t('detail.grantTips')) + "\n                ")])])]), _vm._v(" "), _c('span', {
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
        return _vm.identityDialog()
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('common.cancel')))]), _vm._v("\n          \n      "), _c('el-button', {
    staticStyle: {
      "background-color": "#000",
      "color": "#fff"
    },
    on: {
      "click": _vm.grantOrder
    }
  }, [_vm._v(_vm._s(_vm.$t('common.sure')))])], 1)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin": "0 auto"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "200px",
      "margin-top": "150px",
      "margin-left": "60px"
    },
    attrs: {
      "src": __webpack_require__(395),
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-39df732f", module.exports)
  }
}

/***/ })

});