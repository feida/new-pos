webpackJsonp([14],{

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(480)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(531),
  /* scopeId */
  "data-v-2587ad62",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/report.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] report.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2587ad62", Component.options)
  } else {
    hotAPI.reload("data-v-2587ad62", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".report[data-v-2587ad62]{height:100%;width:100%}.report-view[data-v-2587ad62]{height:100%}.report-menu[data-v-2587ad62]{height:100%;border-left:2px solid #eaeaea}.menu-wrapper[data-v-2587ad62]{height:100%;text-align:center;color:#666;font-size:20px}.menu-item[data-v-2587ad62]{line-height:55px;height:55px;border-bottom:2px solid #e9e9e9;cursor:pointer}.item-selected[data-v-2587ad62]{background-color:#eee;color:#333;border-left:2px solid #ffbf34}.router-link-active[data-v-2587ad62]{background-color:#eee;color:#333;border-left:5px solid #ffbf34}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/report/report.vue"],"names":[],"mappings":"AACA,yBACE,YAAa,AACb,UAAY,CACb,AACD,8BACE,WAAa,CACd,AACD,8BACE,YAAa,AACb,6BAA+B,CAChC,AACD,+BACE,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CAEjB,AACD,4BACE,iBAAkB,AAClB,YAAa,AACb,gCAAiC,AACjC,cAAgB,CACjB,AACD,gCACE,sBAAuB,AACvB,WAAY,AACZ,6BAA+B,CAChC,AACD,qCACE,sBAAuB,AACvB,WAAY,AACZ,6BAA+B,CAChC","file":"report.vue","sourcesContent":["\n.report[data-v-2587ad62]{\n  height: 100%;\n  width: 100%;\n}\n.report-view[data-v-2587ad62]{\n  height: 100%;\n}\n.report-menu[data-v-2587ad62]{\n  height: 100%;\n  border-left: 2px solid #EAEAEA;\n}\n.menu-wrapper[data-v-2587ad62]{\n  height: 100%;\n  text-align: center;\n  color: #666;\n  font-size: 20px;\n  /*font-weight: bold;*/\n}\n.menu-item[data-v-2587ad62]{\n  line-height: 55px;\n  height: 55px;\n  border-bottom: 2px solid #E9E9E9;\n  cursor: pointer;\n}\n.item-selected[data-v-2587ad62]{\n  background-color: #eee;\n  color: #333;\n  border-left: 2px solid #FFBF34;\n}\n.router-link-active[data-v-2587ad62]{\n  background-color: #eee;\n  color: #333;\n  border-left: 5px solid #FFBF34;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'report',
  data: function data() {
    return {};
  },

  methods: {
    coming: function coming() {
      this.$message({
        message: "暂未开放~",
        duration: 1000,
        showClose: true
      });
    }
  }
});

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("4c35aa48", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(409, function() {
     var newContent = __webpack_require__(409);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "report"
  }, [_c('el-col', {
    staticClass: "report-view",
    attrs: {
      "span": 21
    }
  }, [_c('router-view')], 1), _vm._v(" "), _c('el-col', {
    staticClass: "report-menu",
    attrs: {
      "span": 3
    }
  }, [_c('ul', {
    staticClass: "menu-wrapper"
  }, [_c('router-link', {
    staticClass: "menu-item",
    attrs: {
      "tag": "li",
      "to": "/report/business"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('business.businessData')) + "\n      ")])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-2587ad62", module.exports)
  }
}

/***/ })

});