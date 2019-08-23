webpackJsonp([13],{

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(487)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(468),
  /* template */
  __webpack_require__(538),
  /* scopeId */
  "data-v-40d4afa6",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40d4afa6", Component.options)
  } else {
    hotAPI.reload("data-v-40d4afa6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".table-page[data-v-40d4afa6]{width:100%;height:100%}.left[data-v-40d4afa6]{height:100%;position:relative;box-shadow:0 0 20px 0 rgba(0,0,0,.25),0 0 6px 0 rgba(0,0,0,.04)}.right[data-v-40d4afa6]{height:100%}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/table/table.vue"],"names":[],"mappings":"AACA,6BACI,WAAY,AACZ,WAAa,CAChB,AACD,uBACI,YAAa,AACb,kBAAmB,AACnB,+DAA0E,CAC7E,AACD,wBACI,WAAa,CAChB","file":"table.vue","sourcesContent":["\n.table-page[data-v-40d4afa6] {\n    width: 100%;\n    height: 100%;\n}\n.left[data-v-40d4afa6] {\n    height: 100%;\n    position: relative;\n    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);\n}\n.right[data-v-40d4afa6] {\n    height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    watch: {
        '$route.path': function $routePath(path) {
            if (path == "/table") {
                this.$router.push("/table/eatin");
            }
        }
    },
    created: function created() {
        if (this.$route.path == "/table") {
            this.$router.push("/table/eatin");
        }
    },
    mounted: function mounted() {},

    methods: {}
});

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("09a1f3de", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(416, function() {
     var newContent = __webpack_require__(416);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table-page"
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-40d4afa6", module.exports)
  }
}

/***/ })

});