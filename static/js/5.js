webpackJsonp([5],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(500)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(551),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec4a10c", Component.options)
  } else {
    hotAPI.reload("data-v-7ec4a10c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".keyboard[data-v-5c3c4276]{width:762px;margin:0 auto;padding:6px;list-style:none;user-select:none;color:#000;font-weight:700;background-color:rgba(0,0,0,.4)}.clearfloat[data-v-5c3c4276]:after{display:block;clear:both;content:\"\";visibility:hidden;height:0}.clearfloat[data-v-5c3c4276]{zoom:1}li[data-v-5c3c4276]{float:left;margin:2px;margin-left:2px;width:48px;height:48px;line-height:50px;text-align:center;background:#fff;border-radius:5px}li[data-v-5c3c4276]:hover{position:relative;border-color:gray;cursor:pointer}li[data-v-5c3c4276]:active{top:1px;left:1px}.delete[data-v-5c3c4276],.tab[data-v-5c3c4276]{width:70px}.capslock[data-v-5c3c4276]{width:80px}.enter[data-v-5c3c4276]{width:90px}.shift[data-v-5c3c4276]{width:111px}.space[data-v-5c3c4276]{clear:left;width:746px}.capsed[data-v-5c3c4276],.shifted[data-v-5c3c4276]{position:relative;top:1px;left:1px;border-color:#e5e5e5;cursor:pointer}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/components/Keyboard/keyboard.vue"],"names":[],"mappings":"AACA,2BAEE,YAAa,AACb,cAAe,AACf,YAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,WAAY,AACZ,gBAAkB,AAClB,+BAAiC,CAClC,AACD,mCACE,cAAc,AACd,WAAW,AACX,WAAW,AACX,kBAAkB,AAClB,QAAQ,CACT,AACD,6BACE,MAAM,CACP,AACD,oBACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AAEjB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,gBAAiB,AAEjB,iBAAmB,CACpB,AACD,0BACE,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACjB,AACD,2BACE,QAAS,AACT,QAAU,CACX,AACD,+CAEE,UAAY,CACb,AACD,2BACE,UAAY,CACb,AACD,wBAEE,UAAY,CACb,AACD,wBAEE,WAAa,CACd,AACD,wBACE,WAAY,AAEZ,WAAa,CACd,AAQD,mDACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,qBAAsB,AACtB,cAAgB,CACjB","file":"keyboard.vue","sourcesContent":["\n.keyboard[data-v-5c3c4276] {\n  /*width: 788px;*/\n  width: 762px;\n  margin: 0 auto;\n  padding: 6px;\n  list-style: none;\n  user-select: none;\n  color: #000;\n  font-weight: bold;\n  background-color: rgba(0,0,0,.4);\n}\n.clearfloat[data-v-5c3c4276]:after {\n  display:block;\n  clear:both;\n  content:\"\";\n  visibility:hidden;\n  height:0\n}\n.clearfloat[data-v-5c3c4276]{\n  zoom:1\n}\nli[data-v-5c3c4276] {\n  float: left;\n  margin: 2px;\n  margin-left: 2px;\n  /*padding:3px;*/\n  width: 48px;\n  height: 48px;\n  line-height: 50px;\n  text-align: center;\n  background: #fff;\n  /*border: 1px solid #e5e5e5;*/\n  border-radius: 5px;\n}\nli[data-v-5c3c4276]:hover {\n  position: relative;\n  border-color: gray;\n  cursor: pointer;\n}\nli[data-v-5c3c4276]:active {\n  top: 1px;\n  left: 1px;\n}\n.tab[data-v-5c3c4276],\n.delete[data-v-5c3c4276] {\n  width: 70px;\n}\n.capslock[data-v-5c3c4276] {\n  width: 80px;\n}\n.enter[data-v-5c3c4276] {\n  /*width: 94px;*/\n  width: 90px;\n}\n.shift[data-v-5c3c4276] {\n  /*width: 114px;*/\n  width: 111px;\n}\n.space[data-v-5c3c4276] {\n  clear: left;\n  /*width: 772px;*/\n  width: 746px;\n}\n.shifted[data-v-5c3c4276] {\n  position: relative;\n  top: 1px;\n  left: 1px;\n  border-color: #e5e5e5;\n  cursor: pointer;\n}\n.capsed[data-v-5c3c4276] {\n  position: relative;\n  top: 1px;\n  left: 1px;\n  border-color: #e5e5e5;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".sendSmsBtn{position:absolute;right:10px;height:34px;line-height:34px;border-radius:3px;border:none;padding:0 6px;color:#fff;display:inline-block;width:110px;top:8px}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/login/countdown.vue"],"names":[],"mappings":"AACA,YACI,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AAEnB,YAAa,AACb,cAAe,AACf,WAAY,AACZ,qBAAsB,AACtB,YAAa,AACb,OAAS,CACZ","file":"countdown.vue","sourcesContent":["\n.sendSmsBtn{\n    position: absolute;\n    right: 10px;\n    height: 34px;\n    line-height: 34px;\n    border-radius: 3px;\n    /*background: #0094ff;*/\n    border: none;\n    padding: 0 6px;\n    color: #fff;\n    display: inline-block;\n    width: 110px;\n    top: 8px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".login{height:100%}.login,.login-wrap{background-color:#f5f5f5}.logo-container{margin-top:65px}.header-logo,.logo{width:80px;height:80px;margin:0 auto}.logo{position:absolute;border-radius:50%}.login-container{margin-top:-40px}.input-container{width:380px;height:342px;margin:0 auto;background-color:#fff}.user-item-avatar{width:23px;height:23px;border-radius:50%;position:absolute;left:13px;margin-top:10px}.user-item-span{display:inline-block}.user-item-online{color:#13ce66}.avatar-drop-down{width:195px;height:41px;line-height:41px;text-align:left;text-indent:20px;margin-top:30px;background-color:#000;border-radius:20px 0 0 20px}.base-input{width:300px;height:40px;border:1px solid #000;border-radius:2px;outline:none;font-size:18px;text-indent:45px;color:#2f2f2f}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset}.username-img-container{position:absolute;display:inline-block;width:40px;height:40px;background-color:#000}.username-img-container img{width:18px;height:20px;margin-left:11px;margin-top:11px}.password-container{margin-top:10px;padding-left:40px}.remember-password{height:30px;line-height:30px;visibility:hidden}.remember-info{font-size:28px;width:28px;height:28px;position:absolute;display:inline-block}.remember-password>span{display:inline-block;margin-left:28px}.login-btn{height:50px;width:300px;border-radius:4px;font-size:22px;text-align:center;cursor:pointer;margin-left:40px}.login-btn,.login-btn:hover{background-color:#212121;color:#fff}.key-board{color:#fff;text-align:center;margin:0 auto;font-family:Verdana,Sans-Serif}.version-wrap{color:#999;text-align:center;position:fixed;bottom:0;padding-bottom:10px}.version-wrap>p{font-size:14px}.loading-wrap{margin-top:15%;text-align:center;background-color:#fff;height:100%}.avatar-container{position:absolute;top:25px;right:0;color:#fff}.user-item{width:195px;height:41px;line-height:41px;text-align:left;text-indent:20px;margin-top:10px;background-color:#000;border-radius:8px 0 0 8px;position:relative}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/login/index.vue"],"names":[],"mappings":"AACA,OAEE,WAAa,CACd,AACD,mBAHE,wBAA0B,CAK3B,AACD,gBACE,eAAiB,CAClB,AAMD,mBAJE,WAAY,AACZ,YAAa,AACb,aAAe,CAQhB,AAND,MAIE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,iBACE,gBAAkB,CACnB,AACD,iBACE,YAAa,AACb,aAAc,AACd,cAAe,AACf,qBAA0B,CAC3B,AACD,kBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,kBAAmB,AACnB,UAAW,AACX,eAAiB,CAClB,AACD,gBACE,oBAAsB,CACvB,AACD,kBACE,aAAe,CAChB,AACD,kBACE,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,sBAAwB,AACxB,2BAA6B,CAC9B,AACD,YACE,YAAa,AACb,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,aAAc,AACd,eAAgB,AAChB,iBAAkB,AAClB,aAAe,CAChB,AACD,uBACE,0CAA+C,CAChD,AACD,wBACE,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,qBAAwB,CACzB,AACD,4BACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAiB,CAClB,AACD,oBACE,gBAAiB,AACjB,iBAAmB,CACpB,AACD,mBACE,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACpB,AACD,eACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,oBAAsB,CACvB,AACD,wBACE,qBAAsB,AACtB,gBAAkB,CACnB,AACD,WACE,YAAa,AACb,YAAa,AAEb,kBAAmB,AAEnB,eAAgB,AAEhB,kBAAmB,AACnB,eAAgB,AAChB,gBAAkB,CACnB,AACD,4BATE,yBAA0B,AAE1B,UAAe,CAUhB,AACD,WACE,WAAY,AACZ,kBAAmB,AACnB,cAAe,AACf,8BAAiC,CAClC,AACD,cAEE,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,SAAU,AACV,mBAAqB,CACtB,AACD,gBACE,cAAgB,CACjB,AACD,cACE,eAAgB,AAChB,kBAAmB,AACnB,sBAA0B,AAC1B,WAAa,CACd,AACD,kBACE,kBAAmB,AACnB,SAAU,AACV,QAAW,AACX,UAAe,CAChB,AACD,WACE,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,sBAAwB,AACxB,0BAA2B,AAC3B,iBAAmB,CACpB","file":"index.vue","sourcesContent":["\n.login {\n  background-color: #f5f5f5;\n  height: 100%;\n}\n.login-wrap {\n  background-color: #f5f5f5;\n}\n.logo-container {\n  margin-top: 65px;\n}\n.header-logo {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n}\n.logo {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  position: absolute;\n  border-radius: 50%;\n}\n.login-container {\n  margin-top: -40px;\n}\n.input-container {\n  width: 380px;\n  height: 342px;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n}\n.user-item-avatar {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  position: absolute;\n  left: 13px;\n  margin-top: 10px;\n}\n.user-item-span {\n  display: inline-block;\n}\n.user-item-online {\n  color: #13CE66;\n}\n.avatar-drop-down {\n  width: 195px;\n  height: 41px;\n  line-height: 41px;\n  text-align: left;\n  text-indent: 20px;\n  margin-top: 30px;\n  background-color: black;\n  border-radius: 20px 0 0 20px;\n}\n.base-input {\n  width: 300px;\n  height: 40px;\n  border: 1px solid #000;\n  border-radius: 2px;\n  outline: none;\n  font-size: 18px;\n  text-indent: 45px;\n  color: #2f2f2f;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px white inset;\n}\n.username-img-container {\n  position: absolute;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: black;\n}\n.username-img-container img {\n  width: 18px;\n  height: 20px;\n  margin-left: 11px;\n  margin-top: 11px;\n}\n.password-container {\n  margin-top: 10px;\n  padding-left: 40px;\n}\n.remember-password {\n  height: 30px;\n  line-height: 30px;\n  visibility: hidden;\n}\n.remember-info {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  position: absolute;\n  display: inline-block;\n}\n.remember-password > span {\n  display: inline-block;\n  margin-left: 28px;\n}\n.login-btn {\n  height: 50px;\n  width: 300px;\n  background-color: #212121;\n  border-radius: 4px;\n  color: #FFFFFF;\n  font-size: 22px;\n  /*line-height: 50px;*/\n  text-align: center;\n  cursor: pointer;\n  margin-left: 40px;\n}\n.login-btn:hover {\n  background-color: #212121;\n  color: #fff;\n}\n.key-board {\n  color: #fff;\n  text-align: center;\n  margin: 0 auto;\n  font-family: Verdana, Sans-Serif;\n}\n.version-wrap {\n  text-align: center;\n  color: #999;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 10px;\n}\n.version-wrap > p {\n  font-size: 14px;\n}\n.loading-wrap {\n  margin-top: 15%;\n  text-align: center;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n.avatar-container {\n  position: absolute;\n  top: 25px;\n  right: 0px;\n  color: #FFFFFF;\n}\n.user-item {\n  width: 195px;\n  height: 41px;\n  line-height: 41px;\n  text-align: left;\n  text-indent: 20px;\n  margin-top: 10px;\n  background-color: black;\n  border-radius: 8px 0 0 8px;\n  position: relative;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(364)(true);
// imports


// module
exports.push([module.i, ".international-icon[data-v-b3c6ee72]{font-size:20px;cursor:pointer;vertical-align:-5px!important}", "", {"version":3,"sources":["/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/components/LangSelect/index.vue"],"names":[],"mappings":"AACA,qCACE,eAAgB,AAChB,eAAgB,AAChB,6BAA+B,CAChC","file":"index.vue","sourcesContent":["\n.international-icon[data-v-b3c6ee72] {\n  font-size: 20px;\n  cursor: pointer;\n  vertical-align: -5px!important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 440:
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
  name: 'keyboard',
  data: function data() {
    return {
      count: 0,
      keyboardText: '',
      keyList: [],
      normalKeyList: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Space'],
      shiftedKeyList: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Space'],
      capsedKeyList: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Space'],
      hasShifted: false,
      hasCapsed: false
    };
  },

  mounted: function mounted() {
    this.keyList = this.normalKeyList;
  },
  methods: {
    send: function send() {
      this.$emit('childKey', this.keyboardText);
      console.log(this.keyboardText);
    },
    clickKey: function clickKey(key) {
      switch (key) {
        case "Delete":
          // let kbt = this.keyboardText;
          this.keyboardText = 'del';
          break;
        case "Tab":
          this.keyboardText = "\t";
          break;
        case "Enter":
          this.keyboardText = "\n";
          break;
        case "Space":
          this.keyboardText = " ";
          break;
        case "Caps":
          this.hasCapsed = !this.hasCapsed;
          this.keyList = this.hasCapsed ? this.capsedKeyList : this.normalKeyList;
          this.keyboardText = '';
          break;
        case "Shift":
          this.hasShifted = !this.hasShifted;
          this.keyList = this.hasShifted ? this.shiftedKeyList : this.normalKeyList;
          this.keyboardText = '';
          break;;
        default:
          this.keyboardText = key.toString();
          break;
      }
      this.send();

      // if (this.girls) {
      //   this.keyboardText = ''
      //   this.girls == false
      // }
    }
  }
});

/***/ }),

/***/ 441:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    language: function language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    handleSetLanguage: function handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch('setLanguage', lang);
      this.$message({
        message: 'switch language success',
        type: 'success'
      });
    }
  }
});

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

var flag = false;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      time: '获取验证码'
    };
  },

  props: {
    start: {
      type: Boolean
    }
  },
  watch: {
    start: function start(value, oldvalue) {
      if (value == true) {
        this.countDown();
      }
    }
  },
  methods: {
    countDown: function countDown() {
      var _this = this;

      this.time = 60;
      var time = setInterval(function () {
        _this.time--;
        flag = true;
        if (_this.time == 0) {
          _this.$emit('countDown');
          _this.time = '获取验证码';

          clearInterval(time);
        }
      }, 1000);
    }
  },
  filters: {
    change: function change(value) {
      if (!value) return "";
      if (!isNaN(value)) {
        if (flag == true) {
          return '\u91CD\u65B0\u53D1\u9001' + value + 'S';
        }
        return value + 'S';
      } else {
        return value;
      }
    }
  }

});

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LangSelect__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LangSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_LangSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__countdown__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Keyboard_keyboard_vue__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Keyboard_keyboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Keyboard_keyboard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_component_socketComponent__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_component_socketComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_component_socketComponent__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { LangSelect: __WEBPACK_IMPORTED_MODULE_3__components_LangSelect___default.a, keyboard: __WEBPACK_IMPORTED_MODULE_6__components_Keyboard_keyboard_vue___default.a, socketComponent: __WEBPACK_IMPORTED_MODULE_8__views_component_socketComponent___default.a },
    name: 'login',
    data: function data() {
        return {
            loginForm: { //默认用户名密码
                username: '',
                password: ''
            },
            loginRules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, pattern: /^(\w){1,30}$/, message: '密码不能少于1位数!', trigger: 'blur' }]
            },

            fullscreenLoadingObj: { show: false, msg: "正在更新数据 ..." },
            loadWrap: false,
            loading: false,
            checked: true,
            inputState: '',
            userList: [],
            keyBoradState: 'username',
            versionLog: false,
            shopInfo: {},
            version: '',
            isOnLine: navigator.onLine,
            displayAvatar: true,
            showKeyboard: false,
            versionLogDialog: false
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["a" /* mapGetters */])({
        mqtt: 'mqtt',
        network: 'network'
    })),
    mounted: function mounted() {
        var that = this;
        this.$store.dispatch('getOnLine');
        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$on("routerPush", function (value) {
            that.$router.push({ path: '/table/eatin?notPrintOrder=true&orderType=all' });
        });
    },
    beforeDestroy: function beforeDestroy() {
        __WEBPACK_IMPORTED_MODULE_7__utils_bus__["a" /* default */].$off("routerPush");
    },
    created: function created() {
        this.getUserList();
    },

    methods: {
        get: function get(key) {
            if (this.inputState == 'loginForm.username') {
                this.loginForm.username = key == 'del' ? this.loginForm.username.substring(0, this.loginForm.username.length - 1) : this.loginForm.username += key;
            }
            if (this.inputState == 'loginForm.password') {
                this.loginForm.password = key == 'del' ? this.loginForm.password.substring(0, this.loginForm.password.length - 1) : this.loginForm.password += key;
            }
        },
        selectInput: function selectInput(inputState) {
            this.inputState = inputState;
            this.showKeyboard = true;
        },
        closeKeyboard: function closeKeyboard() {
            this.showKeyboard = false;
        },
        closeVersionLog: function closeVersionLog(done) {
            this.$confirm('确认关闭？').then(function (_) {
                done();
            }).catch(function (_) {});
        },
        displayAvatars: function displayAvatars() {
            this.displayAvatar = !this.displayAvatar;
        },
        login: function login() {
            var _this = this;

            this.loading = true;
            this.$store.dispatch('LoginByUsername', this.loginForm).then(function (response) {
                _this.loading = false;
                if (response.ok) {
                    _this.shopDet = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["c" /* getSessionShopDet */])());
                    if (_this.shopDet.shopMode == 6) {
                        return _this.$router.push({ path: '/table/eatin?notPrintOrder=true&orderType=all' });
                    } else {
                        return _this.$router.push({ path: '/tvorder?orderType=all' });
                    }
                }
                _this.$message({
                    type: 'error',
                    message: response.message
                });
            }).catch(function () {
                _this.loading = false;
            });
        },
        getUserList: function getUserList() {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_login__["a" /* getNormalUserList */])().then(function (response) {
                if (!response.ok) return _this2.$message.error(response.message);
                _this2.userList = response.data || [];
                _this2.loginForm.username = response.data[0].name || '';
                console.log(response);
            });
        },
        choiceAccount: function choiceAccount(user) {
            this.loginForm.username = user.name;
            this.loginForm.password = '';
            this.$refs.password.focus();
        }
    },
    sockets: {
        getSocketId: function getSocketId() {
            console.log('------this.$socket.id---', this.$socket.id);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["d" /* setSession */])('socketId', this.$socket.id);
        },
        error: function error() {
            this.$lodash.map(this.userList, function (o) {
                o['online_state'] = false;
            });
            this.$notify.error('\u3010error\u3011\u4E0E\u7CFB\u7EDF\u65AD\u5F00\u8FDE\u63A5\uFF01');
        },
        disconnect: function disconnect() {
            this.$lodash.map(this.userList, function (o) {
                o['online_state'] = false;
            });
            this.$notify.error('\u3010disconnect\u3011\u4E0E\u7CFB\u7EDF\u65AD\u5F00\u8FDE\u63A5\uFF01');
        },
        reconnect: function reconnect() {
            //当服务器重启
            this.$notify.success('\u91CD\u65B0\u8FDE\u63A5\u7CFB\u7EDF\uFF01');
        },
        login: function login(value) {
            var _this3 = this;

            this.$lodash.find(this.userList, function (o) {
                if (o.id == value.user.userid) {
                    o.online_state = true;
                    _this3.$notify.success(value.user.username + '\u8FDB\u5165\u7CFB\u7EDF\uFF01');
                }
            });
        },
        logout: function logout(value) {
            var _this4 = this;

            this.$lodash.find(this.userList, function (o) {
                if (o.id == value.user.userid) {
                    o.online_state = false;
                    _this4.$notify.info(o.user.username + '\u9000\u51FA\u7CFB\u7EDF\uFF01');
                }
            });
        }
    }
});

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("281731ba", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(421, function() {
     var newContent = __webpack_require__(421);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(425);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("3467ab90", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(425, function() {
     var newContent = __webpack_require__(425);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("1a4b3de0", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(429, function() {
     var newContent = __webpack_require__(429);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(431);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(365)("084e4b94", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(431, function() {
     var newContent = __webpack_require__(431);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADC0lEQVRoQ+2ZXXLaMBDHtROPX8sNSt87U3oC0hM0OUHTG8CDpeGpyRMj+QFuEHKCpicomR4g9ASFG5BXg72dpRYjjL/IGMt08BODZGl/Wumv3TWwE3/gxO1nZwDbHizlAaVUFwAubRvLGJs5jvPU7/eX2pZcAN/3L6MougeAdgOM1yYsAWDsed4d/ZEJIKW8AoDv8VsLokfEmUUQWsQOAHyIbZhwzr+mAoxGo9ZqtfrDGGsh4oPruj3TbRYhmJSyBwCjzeoDfEoFUErdMMbuGWMLznmTts9m7aSUEwD4QoubCiClvAWAb4h4J4S4tbniaXPT2UTEn7StTx1g9xD7vv85iiKSSzrAbUScA8C8Zg/MEXEqhHjImtfwwD+A+NCS4jRB67XdszAMrweDwd4C7gEopZ5Jompe6cLpaAe4rvsxqYA7AIbiFA5oo0OakCQBpoyxrg3jysxJXhBCvDP7JgGwzEA2+3DOd9TyDFC3NyrxAMUdRYbHt2NRt4PbKwFIDpJmhVLqKOepUgCl1JgxpkPaJMdRLsKqAV4tu4j4GwAomzpItq0A6EmllJRBTcMw7OmwIA5dfjHG3pc5EFYBlFIdzvksNrpNv3X8FQQBBYtviiCqBrhBxL0kh/IH0xBzUinlCAB61I6Ij0KIazMxqRUga7KkAhlbaJsC6neNtk3iVCsABX8A8DY5KSLuZG55RtKd4nneVGd+dQOUUqEzgOGWrEOMiC9Q9vbUgyilrHvAqFk9nRwAyXEQBM9xzt5/DQBVx1ppBy+KorGunFV9Bsjw9XrdjcWiQ9vHdd32wQB5imFuryoBUhTvhYrNdCmWBgCAwgJXFEUksZtLTvdHRArwkkEeVdaofJLWlrdGC0ScuK471ol+aYAirT5me14o/18AUOFo72Y95ooeOnauB3Sl99BBa+z/g3N+lTUfDIfD9sXFBX0LaOSj46ZMAGpoanWuTHl/WzCKv4dtLyLL7iC57AkhHovs2Ps+QFvKcRxrX2UQcamztiLjN/dNmU5N7nMGsO2dswdse+Av5wxjMDHiKPIAAAAASUVORK5CYII="

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhAAEAAaUfAP////f39+/v7+bm5t7e3tbW1s7OzsXFxb29vbW1ta2traWlpZycnJSUlIyMjISEhHt7e3Nzc2tra2NjY1paWlJSUkpKSkJCQjo6OjExMSkpKSEhIRkZGRAQEAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hFDcmVhdGVkIHdpdGggR0lNUAAh+QQFBwAgACwAAAAAAAEAAQAG/kCAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gnQQYMCBASC0BDihQcMDkySsFFjBgsKDAyysIZs5EcFMJ/skBSRLoZJAgyYGjIQcUWEoAiVCdRY8ogADhwQGQBQxoNSDgyNOZUYsUkEC2KtatBmwa+Ur0CASyZB+AHIDWANAibMMOSUB2AlkFIAPUNeBy71C9AAREgCshQte5dZsSyVtkQV+yiD1mRVsYAOUhAxhLgHBTQF21Qj4LcXBZAuqTBOo+9nx4iAHRDjT+7ExEcF3DUIe89Uv2rpECDhwsaKh0a8kjsdHe/cxXAvHlRgQ4uIDhggTsCqNvLWCcyGCTAu4O6KqYcQTeARZYyJABQ3fSC8WjLTBbCF2tBPBWxAAMEMfTEAEgQAEG9NF3H0MBbDZYgEQs1Z8SBTwgF2gS/jDYoIMWvJaQABIOZpyAS4wkhAANXPBhgxhQYABEzQ2W1oVQBKBABR5+iIEFC6C40Eg2pmUFBS/Sd4EDOEIUgH5aCenEAC7CKIFkGJHoHBYMOFjBgRz9l4UAF1jAgJQXBdDkFAmU19ObRqgpwJx01jknFwvkqeeeeSbAlUE1FqmViFds4MGhiCZ6qAYPrMlPoIIaucUFH1Rq6aUfeNBBBuAFBKmghFpBKaaYasopQVpGOigXo5JqqaYXZPaPAASUaGOoVWzAwa689srBBhbICuewxFZBqxYEuLlRhFFi4Rt/HD2JFpZV6EchRv/JZoVpJlqU6mAFoLmEreM5mpC0/kVeSwW6t5pbULbgFrYeFOkhCOW0zBUJLYJaKYvEf519W5e/Bd1rlxH6EewfvgPaSC1CUKrL737+/USSELYKyG5aDx9E66BC2vqYtSuehgSzBUg84p1IcLsVliQLAaWjAdSs0XlDxAyAb2j1BK8B1OoMQMQv8bxVEUIDgHNIMyPN8BAuAxiS0ZISkTQAGYMEpYBXU92xRiV+ffXQFH+01FYojs3zUoEttS/CTxdB4lLiWlSzlGMLcXexRMCrMN/ZbfY24EzQSoC7hCeu+OKMN+7445BHLvnklFdu+eWYZ6755px37vnnoIcu+uikl2766ainrvrqrLfu+uuwxy77POy012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334AsUBAAh+QQFBwA/ACxiAGIAPAA8AAAG/sCfcEgsGo+/QACAbDqfUONgKohar9FBYUsIYL/g4cBALlTD6KRAoEQSyOSzUTAdeNNHwo8gL77hfUMCBgkJCHp4RAGIe3d+cAaBQwoMDAsFiYqMPwN5kJIDCZWWmJlIZkZ/cUUBBgujC5uZAqVCsnufRQOUowmOpntEqESqkYoHo5a3mb/BxLlDBLyVCM3AnUTYttA/AgjJCtrAQ821uIBDBa+jBmkBa5KC5nbb6JyivfFVZfHpBctJigwrVqXVOlJGFil4AOFBLCRa0vFpRouYkCUAALTZlQyBFAQOIkiQEKGBuWwn/zkRhwTfQ0EHGkAYObLkSUGnxHnpYmXA/oIDdwYtmEmz5gKW5JBGC4imoLQHIouSNGlN0ymAVryFlDrygcesAJVaCeCAqwQI4cBUFMYkTQGpERjgCSCu35eaDgxU/bJoCzAJXu2GEfzl67jDaPYiVoSgsePHCA4YQLTTbxOsYSxo3sxZMwUICbr1PJyhtOnTGTBgsOBgAGExpFGjVs26E+al41Tr3r27QgM7EZ/cxiLggvHjyC9YqAAB6OLn0FcqTjwFWIS0pt4RwNQWz4IOGSIgeP2ETi2xWDZ88NABg4MC05t4uRn/yYMP+NdzqMBguCJnR3T3hQEceOBBfgZqMEEC6BFRxU0/FNAgFAEkYEEHByIIXgTOxCExnxtneFFfEWcIwEAGGOa3XgcWMCDWWuVB6KEemxAQwQYGaljBARClxNRFVyySjk4HUFBghh1cYJguMjpozjIF+ZFQAhdgyJ4FSxrBRTxCplNVP0oJ4EAGHITXJCcrzYNEiAJdRoleTT3ZhBwwNvJclzit2cQwiNXJk57yWIRYOeXpIsyEaqnpRCB4AniNMFBI0gefpmyCqCS/UJqJNv7pUwt5VwhAY1YQCYGoWqBq6iCo0cEXHR7bSTjiq0fccSoWQQAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqPwwByyWw6i4IfgfADPK/YrHbLFVKT3fAw6iwojwGBWmxUFrBmNKFQIJDZ2bcwbhwUDAYFd3hXej98RAJ/gIKEQ19MhoiPgIxnjn1GkpdCipUGBFaYT5tFBJ+To5FDkwOfBgOiqk2lrJ8EnKqGQpe1Aa6fg1oCAwNMrkUAyrWelbhIc3W5vEKBu4WsZ6eVjUcIC+AIxm0/r1exyunpzYDo6UoHCgzzDAnjRUoGeQKycpZFBuTRm2ePUKwrig7uSbBg4LwFB4RhCwPg0jeHD8Wp6zfrSDyMDBYkCIVHYpaGGBWk6gKpywCHEE12mbYlQUaFhFqGeTmSI/4emlxWdhyKRE2xo0iLjZK5ZA6gY5gERJhKtepUCAwOACU6RILXr2C/QkjAlOuPsGi9ji1b5N7PtGgfIOBEp65dOqMIQNjLt+/eBwpImh081CfhcxAQsM3iRx8hBhgoNDCw9YkSnWwGXMiA4cKEBZgRhmYjIYNpzhYiFGR87VEYBBYwnDaNocKDiE5+/ZkVIAACCRdkn+4suXWi0QUGVGYiYOyQBRQwCKd9QbVMt0SeDcHeBMGGDhNaOog9HYMFCMaB8utyAMOHDx40MAigzgCE2NQjpC+S/AiwSnd88YwBGHjwXgcVtIbABMGZh55lRyiSHSvZ/BCAAxy85wEHD5yYxAAFFnzGXSJABbANI3fUQoAFBsKHAQJIDIBAT+qwoY4vDGR4YAQjznJNLT8MQEGLHmSgwHJcYOfOMhUOkcAG730A3mij5AKkhQ90oOEG843yHyASXXnIBURaYNxMLYUmZgAN6BhfApjQZZKYUrDoQZFwOsIJTkTQ+cMCGnTAwQV58lYGTQM4ENwDVBK2VTqHQRMpRZMyptwoQQAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqNgaNyyWw6hwTh4EmtVg0Gq3bL7T4FzsLX24z+CtOjuAkmu50BQvZNr1vTdrP9jT/3639aa0J6ez+FXgVthkKDXoF7iE+Fjo+LRQKVWgMARwEDoJdKc0cAkIcEBZpQSUYDqQYFBK1Pp1yKRgKwWAazS6s/tES+TKaErgW8vMRHqUqXBKJMcYufycpYaMJEANZOnVrgutjZ0eBLAAIDmqRdcdfKsgLb07qa9FUA8Lza51WfhWxRERBvQAB/4bz9QMhFjjyGXNIREPgvGj4yB+tkZMTxTkclB0KKHHkgVhppH4cMYMCypUuWCxIASznkpU2YBi7S/HHT5v6CnI12ElnZs2VMMenUgVrKNJQdASSjxjIntKrOqmwkeWlwACsXCRAY0FnXzk0BCWglPFDgTkhZNwEcpEUbwcEWe81QUhmwAMJculzNGoRIJd2BBhH+gl3w5G0/KHqPTEEgxFQCB4nn1qXs6UfZh0WyMHvG4MIFCHjiKHjwNwIDrW6HDS4y00iFDBkwVGBLJEABBn7pvg4zm8kgC6ZNiyEQAQNuDBKMGG4AIUJY2D+WCiBchJMQDB4+fNiwJkEF5xkuNCg14EACBAYiA5j/bwh48eSlPLjwnELXUvNx58Qffdw33hoAHEABehc8UNVoBuYnhAAN8JdbBQl0RAouRHxE6MhZ6GEAASOZDGOEh0UoYIFzGFjA2EeroDgMBCFG95F3RchIhHksVvAfI6PZF96BrjywIgb+MaLKEjoScQAEFFAAwVsYCWDlEhd4oKUGq/iGAAIHULRFgEtUoKUHGGDnVREQbMABBxOIueYPCUgwwQQMXDXnhNfIWUUQACH5BAUHAD8ALGIAYgA8ADwAAAb+wJ9wSCwaj4LkcclsOp2DX6HwrFqvwoIBy+0eqd7wcRBlbp2BH7ks9p6d02nbKABLBcc30z7/FtNFemOCfUQET4RFfIVGBo6Oh4FNBHp4jEOUjwZsQolCAp6XWUSLngGRomaqg6lNi5Y/nouARwG0TJG3RJoGBICJA6FEeAQEnEWoPwQCuspNZKiLe48/sIrX1j+62UTNRgNaRdxCmbwFx0MDAE91RmmUXOFGh7QF3ksAnALJ4k78huO4gGNyb16ic23k7RKyzko+hYz+9ZHWpmAbiWLYWGzVpeEljxxDivwjYECxkyhPohNzKqXLAcyyCGsFgJdNRwgxjox101z+lJU7efZ8hDBoraFElzWE5hIlUC8tm6q0ZbSqkI1YsGYFp5OLgk2FAux7pNVJAgYLEhQIaGUfsjkDGMhFiyAjRbZVFsydq+CANiu/OCbQu1dugpmf4DUJQHExHsYKCstN+6RxkQMaHlwp4MDvpwOEC3/F1YjOBA8fNiyoIkFCAyL5EISemwCoNG4KOHzY3QHC425CWreOkGDe4L21xRC4gPqDhwzFhWSYbmHLgAfCJWh2Z0DBgu8IgL77685Bh90feluyMD1DdQAAEGSPsBqJAQS9yjbK0NzDBc8/sEfdGQI4kN0DiIURQATn7cZBA7QI6N4bBkSQHQMhIbBBfxSe8CFhdUMEsEB2EBwAUiECUNCfBgvc8qEeA0CQ3WupLNBgehIc8yJ8PCYwnwKiDGBBfxnUVcSLRVyXnQNdcWHAhrz5ZsSOPMJ3AIkJWmFABh140AGIU7YHZjcNDPeAZV0QEEEGGljQ4hFIGsEZBA4s0GRWBzTAAFhwtleBJ4ccsIxVQ2BgKAWEYmHBBRZAkKgVB1j4QHSPonEAAoNeEgQAIfkEBQcAPwAsYgBjADwAOwAABv7An3BILBqPxAByyWw6iYRh4Umt/gJKqmCJzVqpg+1xKjSIi4CvWkjwEsk/89Kwbrp/g/FQbowO83VGaVB6ZWeBX4BlilJ7h4hVAXA/BY9wfH9FjJBDj1dvjkWTnEt+naCGpGoCk22NqUKeiF1IAJuKl7Kxdk4Em0OSSLlqprVEdL94x4qAYYGjQwDFbJ9LyUPF16K1A9BHukgB04EB3UYGBYzaSJ50fU0AAuNJqkfrSaz1Tulq5d6ImwoQAAdP3r81AA4GkldPzL0v5VTZ0kdRyKCKGDNySligo0ePbJz9mPdOI5OHJptEIZiy15UBBD7K9EgS4cybQpQA6MKzJ/6Wejt9Cr3YsmUAAwdUsYRYwAEGDKQkDSQ1YIEFDh4+IOBEwAC6AXesBEhAYUPWDx82LGUiwKtbfhANQNBwFq2HDhACJXT7duoTcQ0udEBrt4MGCQnCUvHHt6+TqhWwEv7gYQOFBYDcqdnZrbFXuEcCMMhQl3IHDA4KZDFQQQJKPAsMZIkX07NAxT8qdDh7N0OEA4cgYMhwgcG6AQkYMFBQJIA827quepiuYUKCTQkuZNh+4QGbLAK2VFWuPCkRzgX4VkLyQLuGCgzGDZAwPAMGCuYhSNj/+woC8gwscAR6HfnVRwIIqnYEA9px18AQ+vFn3njkbTWgc+E9Q0F9GLxIAEeEEvT3AwAGACggbpw4tR0GFggI4X4hmveDAAoAmEBGB1jAIQTFgCjiiAWYWI0+EXBYgYUvSphEcuQxR5ECDRLngBE+ysjGAgAiSYoA9K04gZVCVNncAQA6qQoBFTzFIgNHiKlJjcotoNAXBExgwQUWROCNm+cZgOVy+gjAAAQRPKAlEXwSIcABCB7KSTcC6fIAjBCAaZEAA2SKYkYOwPjAnEUZocADEEDAZqhWEIAAgpig+ld4m6oRBAAh+QQFBwA/ACxiAGMAOwA7AAAG/sCfcEgsGo2CIeHIbDqfzUFhmIRar8NAdGgYYL/g4nLofVbDRoDX4BwLy8XAkg1HE9VQ968uxAvZdkd1BWdKRHw/AlN/iIGKT3qIeoSBaY1EkUWPjJVHAYtCej+ZWaKdR35kmIdDqadOck2kP5+rr0ebP4ChrD+unaZGg1WkuVcEhVREoJrMBFrJvEPMYcZ0Rb9N2Y5MyES1V9tC1D+UgeJNWkXkVgFSRgYFl7fho+zB4fhoAqbRX/6+0LizVUkfGgB7pqirtJBeIocQI0qc+GSAAggVLmDYyLGjBYf6CoAyMGGDh5MoU5684JCdEQIGKHDw8KGmzZsfWNJzSYRN/syZOIPqvMWTyx4GFDBo2MC0qdOhFJm4IyCyqtWqUbNqhVJ0KxM1CSJUAPgFoZCG+xBg3MjgFBxvdgw0SIohQ4YL89q9IrBAgka7GTBARWPqGhSwESzUBYyhwgME5/jxREtEwIEHFRbbxWAhgoI+z8o2xAcXm4EIfzdfoNCWCgMHXakU0DMQ3tcEmTc3dhBHrQQJUOQYiFfIbGxfCehyhgBZTIPfvxt4EVBmgBbhww0Ek/wEwIEIFCpIUIAoQFjoEIYcYMCeARs1BbJ3kVXxgP2vBR5Aj7BAfXv3Z8GUXQGU3SLAAhFA9wAR67W3iyLyDWCWQwAYoN9vESTA4H+7jaghnzkODcAAdBLwtqGD38SXnUEC+fZbekU0yN4uvgzwIVmEOUBiayfOGIeAw7FYFgIJvniEjADeAeFwIHYCgAJF8nckh0ZgN1xeZSUAQQQRmGgEkjTKxiSWWFTY3gFMgInKAAS0iWNZ/Bgk4wJhZhHAnV5xsQB7/eV5TAILLKChn1YsSSChh9FSYCBBAAAh+QQFBwA/ACxiAGIAPAA8AAAG/sCfcEgsGo2A32AgCByf0KgU6hwKptis9jocaL9gIzdMPgYIBQLUO1Q/0e7ykWsojIlsYVweLggNBFV4RHt8W35ReT+FP4KGT2eEjkqERQCKj0+IPwaYioxFgZmhRJtCn1F2o0UCm52DbVCvq6ljqLRCZwezU6KUsWR3RgUSGhsWC8I/SU+3k75HBaZGCBcdHh4cEweTkVJezETKR5hDCBgdH+oeGhEGk5vQUQaNWOVCBxbX6h8eHRkNUMmTokpIkgL0tAxgYIGDB379OlhIUEXAuERFEhYpcG9IgAMQMuzjl23bJFoXWSUoNrIfu2mZ1JxMtKCCQ4gP+EyqM2Dm/pQABRxYe7jhUUc5Ag5EELngETMCKcMMSBBh1BWffKLi2srVCgIhFsKKHRsWKxkDaNOq/ZGm5wAHFTDInUt3Li1QGfU8sCA3g9+/gDPQOsqKwN6+gQMPzmIxAQQKFchKvmtPyBWEajOjNdu1s+cnl1ZxDiMAwQMJqzhmAtogggTUj+j4GQ2FwAIIr3PD/ALAFCCtSKaezp3bAe1m0b4kdUA8dwQGB4CH4SkFKAPXzSM4SGAl65M69chdby7hgQIiHxcQRo832sWgzSEw0LjMNgMG3L/9KXevY1DsETQQHSsI3HdfAldVEc5G0nVEAAMPQLDdEb0tYOAC7yihlhvCmrQ3xG6WoQHIEwIkYCB+XWwIhXRlBGDAiU2lmFZ7A60ygAInHoCHit+t1+IBJ56344ykfLgVAPbdt4COQ6JVSCtD8GKViQbm1+SItdxloZIwDcCjLD5+UcCWDHxlhJdEWnLLKGPepwAoaDpphhv0xYRAAgnUKaOcc3RBSwBLHBUnliSyiBJmUn6mxRnSFKToFwEIEOijZCy4ShAAIfkEBQcAPwAsYgBiADwAPAAABv7An3BILBqPAcFxyWw6n78BdEqtBgjVrHZZGGKXgPC2WXhYKAupUfkMqMdMBYbTwSiObCvcqNB4PB0UX0R5TAJdQgQBe0V9Hh8fHAyLhE+DP5eMPwYWjx8eFohDhVBvmj8BDRueHQ6UQqRFr6dLBBQdkB8ZCJVgprRGAQt+kB4Tb7GjopizwAMSuJAbC5TJiUQF1qUEBNYIGJ4eFV/Wh0MGv0QAzUUDDBQVEQl4Dxy5HA2L1plLbk8GES5gwHABggEjBSqEu4Doy6Bf6aoAFJghA4YKDS4FYLAKEoaDUDIBEMCPSQEIFCsOREOEwIQOG3iNcbNsSMQfAhIExFBR5f4FCQiUBFAAQVs/ITRrOSnQgEJKlRYedGFHxZoBLFSNHHhQYWDPlSCBGShws0kCCBZ49pQA7BSBBRMoXii7pVvWKQEMNL3AgNbBAXezCNhKt0rhtogTKw5GQIGDBxAiS54MoeSYAQUya95cJOcDCaBDiw4dOMthWAKIjl4NejEZnKpZj3ZtEtUBBg8i6N7NW7dR0waCCx9+sKaQA8iTKz/wu4qA59CjQ0dFuzqS09aPABiAII1bYCMPLGDAYB6j0lTWFVBAvj12JpazXEnQvj41OM2fbO9ev72CsNkVMZIB4/XHgAIHUBcAAHCUhQWDeIhn4AIIDLJdNlNcqMkA9JPZl0BNARQQnCJNjGScF0cZwWF9//2y3XCIiCEEg9vNdAR3CyyAIHWdiSgcOXg9cRMlJyJFAIyjaPdeFHu8OBwyKWYX4nCX5Eebk8GR1UuASPg4YmdcanekcBhuGaYyTzZj5WKHkImHFuhV5aOWa2RBIi0kZXbTmnrGWdVzWZnzxJqIzRLfmUwsGSCD3CBKhZ9ZBAEAIfkEBQcAPwAsYgBiADwAOwAABv7An3BILBqNAYJhOTg6n9DoU9CgUCQJqXbLJVA4nI2ES44Czk9DxsPGlN/GwSGRMASOh83n49FMBQJwUAcSFBUQBnh6fH5GAAMFBYJQCBUYGBcQTUV5e31SBYGTRZUYGRgWWZyLn1Gho0UFE6anEgSrno1EApJCBrewRQsWtBcMuIxGwEKvwUURtBgUvUKdybFDv85GCZYZpw6iP9atQndEzdtEDxffqAcA1ay6j0QGm29n+k8U0RGb5HQZKXDuCBonAuYoQECgIJEG7b5dUCAvl5MC+IgAEDCg4xMCDCBEiOAAgYB4RSREm3DrAKYL7YTwyrZsCIAAkIg4HEKgQf4ECUAhMDBwkogCYqcsINiSzlxOmuKI9PwJFOgDBQSJQMDEIOqRJD+07arpi4DXIQgcUK1KMsGAcwj+cZkpZCMBatmaHlkAoSrbBgdOnpVy5+bTWBmj+PQblAFZMoftPZaSdq3VnbB+Dd6i4IFfvJkxOgs5Rh1oZw22DTCrbkji1rBjmxGg5IDt27htb4ZDm4Dv38A7ngxQIMECBsiTK0f+WvYQSXcOHF9O/ZhzKE2kV6d+HfuP4gumb2fQ3Hki1vaWqF9vp3XH9/Df7+7e/eY2lK1xZg22umgwuwWINQpKGAWAXz4cBajefFpkVGA++rFnQAEHloHZD2ZVCAVOSrJI+MuFZCSCmH9PAOhhKPFoKMWBp3331hMRSijaELSBeARtu3w0RYfrPSiVEAOoqNNkaezIHnrYqBYWVDfetUSLP+zUC3GRRFLiRUtguBlHA2xWTzabEPecEyLe2ESXk9DFzDliMkOfjmAO0eZ3b95IjYBRUgMlfTU1Neee12V0TxF/1qlTkjrpKQWRzgxKqKKumLdfomO6wqAgSFLq5hFPZfqmQ4AaGqmoIZ5H6huejhIEACH5BAUHAD8ALGIAYgA8ADwAAAb+wJ9wSCwajQABgTAIHJ/QqDSqeDwaiKl2y/1BLJZKpEsuEymYdMXMFioLhQHUkslgLM/BAYEoONtFBQwODgxPCHR2eEYCDRYYFxEHgEUGDxESEQ4CRoh1d0cIFx2kGoaUQwYQEqwRCACwsZ6KRgMRHR4fHhwKqEMEDqysD3JEs6BEAQoZuboZxb4CCpjCC7Gwx4u/Ex0fuh2nvkPBwhAExonIQgEMG80eFpziQwirwgx/P9lEBhbvHAnmFWEgLJMBeum0CXjAwZuuCfkE/jhgb5i8fUIQYHin4SAbAnAICABwZAE1VgmwJRQyQEI3bx0gRBwSgJOAmUMGJFjAMwH+AZw/HhSEIGdfgAUa3j2DAqfAuSM6GUhlsABBkyIJTkpYl+xHy5e7FjACSaRAngRTpyowMDLWgAastLTTVSHANSFmA0ExoCCtWj8khTjIq+XBhizroNWSstMvVZ9/gEYxkO+pEZFaDDT2u+CAPDNvntzc4uRAX86APpe9agbBgrSKzVgWJ6BA44CUKqumxFccWclsgJcJIFyi8SPEBQxYzrz58uJknEsXMNorSAPYs2vHDt34zQEFtovHflxLAPDjxZeXcg59eu2B10OpOWCJ/fv2BdbHj395dfkArhffPEoI1F0ZsQU4BU4HKvjDbEJA6CAjPxA2D3hP/IQKa22ZFGgcZjkNKEUAhDkh4YJHGABiILsdAUAxs50X3mVM6dUgGxZWONkUENrExH4saeHhFMsx0WKGbmy3zolG3MiGAEq6odeERECpHZVM5WNldlNS6dEQW5JHxADbMUmJhT1GudeHUoT5JZZRuNkkAdsduZ6cjFiYICBNxXEEnlQyZ6dqb9YygJ13wtmGATkq2iQ0ezpaBHXEzRMEACH5BAEHAD8ALGIAYgA8ADwAAAb+wJ9wSCwajwGB8shsOp/Pg0KBIECv2OyvAYE8FtqwmAiRmB/j9HDAFgCYEbMEwhQUDIbBW10kJP4HA3BydEYBCRAREQxWfEQFCwwMCwh7RXFmhUUGEhcXFhQJjo+RkguNl4RGAg4XGK8WCKNECpKSCQFGmHNFAAgUGBkZGBSzRAi2kga6qkQDEMHCF2DGQ7W2CgKpmUUJFdEYEtVEB6WSB5Y/u5o/BRHgseNECckLgkPrQwEMFuDs4wEMmGNQCV+zHwYmgKugJokSN0zo2VpQwCC3H6wuCMtwoUE6IQGnKEBVRACBAigJQDQyUEEudc0QfBNGzFCBBhc2aLjw4KP+EDt48BQYEODjgWQMKi75EaARNJoXFBQZsIDCBg9YOWDwifFOUKFEi1xLcI+JII3hiAhIIEFDBw8fPnjocIFrU69fDai0VK7skwESLBwAaQBChrdx43rI0MDJALxfCxAommZw0wYWOMBN7IFDhWxQTuYF+1JMgKpXE8ely8DvE5OQhXLFAgExZw0OCpTO8jivNjUCNnDeMAHB7jABeusdhUCuZ3vGTh5Pg6EjyVm/Rx3QLa+7ljcOH4p/ODvN+PNMjVR0Ul7MdfUEwr73zmc+fTGu7xuxT2TZzwH8DdGePI0MqJ93Bh4IhR7G5OfIPdmNolJ3BSSYxV7mHeEgH0OfTceeE+t1t6EhI47i4RATGhPhFST1pl56R9jRxHSTaVGiGg7690ONWOyWRIAvoshEiFMJ4ZeOTLyEpBNANuFXiEQSORUBQAZg5RhPrtFHeVd6lyVI162ooJGPqDXmgmXqc92NaSxZ5BBSygjniWpIacSXzrhZDZt4NsFdg3rmCaeGJe2J5qCGNDmLhwPoaOd/93V5pjxyTjoGSpZmWE0QADs="

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAAAXNSR0IArs4c6QAAAwtJREFUWAnNmM9vTFEUxzutUCWCVLuqCMVCmkgkNMVCmvqxIRa6kSaoldj5OywaEqxFYmPtR1ERIl0QhOiKxAKxoETit/H5vrlvnNy5rzPvx5ie5Pvuueee8z3feTP3zZ0ptWWwcrm8gLLNYC8YAWuB7CWYBNfA41Kp9IuxeYaQLnAcTIPvIMm0ppxjoLMpiiAeck0YUtkDsocKFQXhKJgNyPhD7D2YcZCvmG+qHS1EFEQHwBevw0fmZ8Eu0A2WOshX7BxQjjVx7M8lCoJ+8M6y4l8Fm+oRkzMAJoG1N0z669UG1yksgcuWDf8KWBIsCATJ1Z1TjTVxlgLpc4coGgQ/DNND/GVzV9WuqgaoNjZxbqvNrBOhaCJmYPwJdtcpSVxWreNgiOx0YnJogZJO8KRSG13vcu0I5TYSUy24FzFVLo8Ygs+n9gTCXuLrzNptnrq/zTyV62pvmqL1+KvMvOomCeomw76Cp9WK7M5zUypu9aixJEEryLRrn2oq0wc+mBK9/SvNvOraptUgzkJgt6b1bV4a33LIXxQqThJUDiUXHAv2SBL0zWv+1Ztnmfocfo+IU+eayNiGegLrbLPRIYq7yynWD9lABn+1VzMG51Ziz8AtduI/gSxsAPdBq2yKxmskWN9XixlvgB0KtNDu0HufBO3B0ZFzPtiIPtQ6G88X2yJBmb+jmvAqOrTLgs+DFM1ekzvt8nWs8HdTCqq2ctJzqFGSiyQOsmVHBfngUqPFobw8gl5AeBIhb2Ni559grrVMlkfQdQR89ru6mH4sZrI8gjI1rFeUR9Awz7AuvwExfQUN+/FG53kEDdDkPAKWx82cf4F53Z9JcY0/5hEkrjGw05DKP2zmqd28gtTQP3ilFmELihBk+XL7RQiyT3rrZxJXhKB595YdYXf1gF5uydFMt8UUVY+wJpbWPUjBdlfUk7bYzy9CkDhzC4mFFfEZirkKGSVophCmYkhmJGgKZD4uFKMjYpGGqXaOC7M44+BVFG7NRb3HnZaKArZtHzgD9D/g/zL1Us+++D78BVPTQngPICrkAAAAAElFTkSuQmCC"

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAAAXNSR0IArs4c6QAAAttJREFUWAnNl01rFEEQhh2NET+DxK+LgooRJIIeVMS4h4h6Uk/iSUEM+Cc8efQHCN4ETwEP5iAGPIkEjPgBUQQPolGzaIioGFyNSdbnXXdlHXdqp3t6J1vwMB/VVfUyM91dEy3ytHK53E3oTtgDa+AHjMHLKIomOOZjCOmDGzAOcxC3IjeG4ERLFVFgI1yDGUhrNxm4I7gwJYUnaVXExr3h+mAwUSTbAI9jRVwvXxPQk1kUSSK4DiHsDkk6M4kigT7gXyHUVHOcaSZocZMBF/B3NBnj4h5AmFkz0UngWioddamWYux+xmy2xiUKIkjTdZ0V7OFbTYwW00SzBK0gamlipJ8jImyTFWoJmiFwzgr29ElUolmCPhD1PTHSz1Em7L0Vagl6S+ArK9jD94mYZ1ZcoiB27FkCB61gD99t8k56xP0JYeprQ30HIWyaJGpVshlJzsF8AEWXsimpi0bMlYyC1D8tq0uZ7ZRkHXAZSuBiauCugta08EbifhiBNPaUQadcVZiLVKNkFNHqfQSOwQHYAktAi2gRHsJdwYwqcXQyZ0Hx7AhUgy+Rswj4Gve7XjsJorg+zOWwCrSGaeWdh5rpXi2n7k9DCaE/awOaHWvBDcchYCUOvZY+OARbQTt22s5P++E30Io/UmUUgW5bEkI64SI8h5Cm9WwMzkO6xo+Bu2EYWm36d+vhqSUbA47Dx1YrqcuvbanQUBGOfTBVNziv0wkK7fpHFDe6wPdHMITweyTR7K1MXR0HYK9OFsj02iq/SPoR1JryCMzmOweho9QoaCHTGmN/7TmooYTeUK8E6VGZCyT+PEyLbb8EHc6jWsoaBX1D2hC1QbaDjesJiXaxbom53y5q0DGsV7adk1vQu8DCHlD/dGV2IWo9F2fhJGyDLlAfLL+6wdCmfz61Jfp+X8AQDKrB+2+6V8VJoPoevVJ98BKpoxoyH1OdKSiCWl0J+QyTiPjC8a/9BtWxljNqAIH3AAAAAElFTkSuQmCC"

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(492)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(440),
  /* template */
  __webpack_require__(543),
  /* scopeId */
  "data-v-5c3c4276",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/components/Keyboard/keyboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] keyboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c3c4276", Component.options)
  } else {
    hotAPI.reload("data-v-5c3c4276", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(502)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(553),
  /* scopeId */
  "data-v-b3c6ee72",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/components/LangSelect/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b3c6ee72", Component.options)
  } else {
    hotAPI.reload("data-v-b3c6ee72", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(496)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(547),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/resto-newpos/view/views/login/countdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] countdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(0), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ebae5eb", Component.options)
  } else {
    hotAPI.reload("data-v-6ebae5eb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "keyboard clearfloat"
  }, _vm._l((_vm.keyList), function(key) {
    return _c('li', {
      class: {
        delete: key === 'Delete', tab: key === 'Tab', capslock: key === 'Caps', enter: key === 'Enter', shift: key === 'Shift', space: key === 'Space', shifted: (key === 'Shift') && _vm.hasShifted, capsed: (key === 'Caps') && _vm.hasCapsed
      },
      staticStyle: {
        "background-color": "#fff"
      },
      domProps: {
        "textContent": _vm._s(key)
      },
      on: {
        "click": function($event) {
          return _vm.clickKey(key)
        }
      }
    })
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-5c3c4276", module.exports)
  }
}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-button', {
    staticClass: "sendSmsBtn",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v(_vm._s(_vm._f("change")(_vm.time)))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-6ebae5eb", module.exports)
  }
}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
    staticClass: "login",
    attrs: {
      "element-loading-text": _vm.fullscreenLoadingObj.msg
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadWrap),
      expression: "loadWrap"
    }],
    staticClass: "loading-wrap"
  }, [_c('img', {
    staticClass: "loading",
    attrs: {
      "src": __webpack_require__(509)
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loadWrap),
      expression: "!loadWrap"
    }],
    staticClass: "login-wrap"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "logo-container",
    attrs: {
      "span": 12,
      "offset": 6
    }
  }, [_c('div', {
    staticClass: "header-logo",
    on: {
      "click": _vm.closeKeyboard
    }
  }, [(_vm.isOnLine && _vm.shopInfo.brand_logo) ? _c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.shopInfo.brand_logo,
      "alt": "logo"
    }
  }) : _c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(85),
      "alt": "logo"
    }
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "login-container",
    attrs: {
      "span": 12,
      "offset": 6
    }
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticStyle: {
      "padding-top": "85px",
      "padding-left": "40px"
    }
  }, [_c('span', {
    staticClass: "username-img-container"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(512),
      "alt": "账号图片"
    }
  })]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginForm.username),
      expression: "loginForm.username"
    }],
    staticClass: "base-input",
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('login.username'),
      "autocomplete": "off",
      "readonly": "",
      "onfocus": "this.removeAttribute('readonly');"
    },
    domProps: {
      "value": (_vm.loginForm.username)
    },
    on: {
      "focus": function($event) {
        return _vm.selectInput('loginForm.username')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.loginForm, "username", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "password-container"
  }, [_c('span', {
    staticClass: "username-img-container"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(511),
      "alt": "密码图片"
    }
  })]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginForm.password),
      expression: "loginForm.password"
    }],
    ref: "password",
    staticClass: "base-input",
    attrs: {
      "placeholder": _vm.$t('login.password'),
      "type": "password",
      "autocomplete": "off",
      "readonly": "",
      "onfocus": "this.removeAttribute('readonly');"
    },
    domProps: {
      "value": (_vm.loginForm.password)
    },
    on: {
      "focus": function($event) {
        return _vm.selectInput('loginForm.password')
      },
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.login()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.loginForm, "password", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "remember-password"
  }, [_c('i', {
    staticClass: "icon-font icon-iconfontgouxuan remember-info"
  })]), _vm._v(" "), _c('el-button', {
    staticClass: "login-btn",
    attrs: {
      "loading": _vm.loading
    },
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.login()
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('login.logIn')) + "\n                            ")])], 1)]), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showKeyboard),
      expression: "showKeyboard"
    }],
    staticStyle: {
      "margin-top": "-65px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('keyboard', {
    staticClass: "key-board",
    attrs: {
      "keyboard-text": _vm.loginForm.username
    },
    on: {
      "update:keyboardText": function($event) {
        return _vm.$set(_vm.loginForm, "username", $event)
      },
      "update:keyboard-text": function($event) {
        return _vm.$set(_vm.loginForm, "username", $event)
      },
      "childKey": _vm.get
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "absolute",
      "top": "10px",
      "right": "10px"
    }
  }, [_c('svg', {
    staticClass: "icon",
    staticStyle: {
      "width": "35px",
      "height": "35px",
      "margin-right": "5px"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": _vm.mqtt == true ? '#icon-yunfuwuqi-lianjie1' : '#icon-yunfuwuqi-duankailianjie1'
    }
  })]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "5px"
    }
  }, [(_vm.network) ? _c('img', {
    staticStyle: {
      "width": "35px",
      "height": "35px",
      "margin-right": "5px"
    },
    attrs: {
      "src": __webpack_require__(135),
      "alt": ""
    }
  }) : _c('img', {
    staticStyle: {
      "width": "35px",
      "height": "35px",
      "margin-right": "5px"
    },
    attrs: {
      "src": __webpack_require__(136),
      "alt": ""
    }
  })]), _vm._v(" "), _c('LangSelect')], 1), _vm._v(" "), _c('div', {
    staticClass: "avatar-container"
  }, [_c('div', {
    staticClass: "avatar-drop-down",
    on: {
      "click": function($event) {
        return _vm.displayAvatars()
      }
    }
  }, [_c('i', {
    staticClass: "iconfont ",
    class: _vm.displayAvatar ? 'icon-arrow-right' : 'icon-arrow-left'
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.displayAvatar == false ? _vm.$t('login.openUp') : _vm.$t('login.packUp')))])]), _vm._v(" "), _vm._l((_vm.userList), function(user) {
    return (_vm.displayAvatar == true) ? _c('div', {
      staticClass: "user-item",
      on: {
        "click": function($event) {
          return _vm.choiceAccount(user)
        }
      }
    }, [(_vm.isOnLine && _vm.shopInfo.brand_logo) ? _c('img', {
      staticClass: "user-item-avatar",
      attrs: {
        "src": _vm.shopInfo.brand_logo,
        "alt": "logo"
      }
    }) : _c('img', {
      staticClass: "user-item-avatar",
      attrs: {
        "alt": "logo",
        "src": __webpack_require__(85)
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "user-item-span",
      class: {
        'user-item-online': user.online_state
      }
    }, [_vm._v(_vm._s(user.name))])]) : _vm._e()
  })], 2)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    staticClass: "version-wrap",
    attrs: {
      "span": 12,
      "offset": 6
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('login.version')) + ":V" + _vm._s(_vm.version) + " | " + _vm._s(_vm.$t('login.company')))])]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "itle": "提示",
      "visible": _vm.versionLogDialog,
      "before-close": _vm.closeVersionLog
    },
    on: {
      "update:visible": function($event) {
        _vm.versionLogDialog = $event
      }
    }
  }, [_c('ul', [_c('li', [_c('h2', [_vm._v("版本号：1.5.5")])])]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.versionLogDialog = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.versionLogDialog = false
      }
    }
  }, [_vm._v("确 定")])], 1)])], 1)], 1), _vm._v(" "), _c('socketComponent')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-7ec4a10c", module.exports)
  }
}

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-dropdown', {
    staticClass: "international",
    attrs: {
      "trigger": "click"
    },
    on: {
      "command": _vm.handleSetLanguage
    }
  }, [_c('div', [_c('img', {
    staticStyle: {
      "width": "30px",
      "height": "30px"
    },
    attrs: {
      "src": __webpack_require__(508),
      "alt": ""
    }
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "zh",
      "disabled": _vm.language === 'zh'
    }
  }, [_vm._v("中文")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "command": "en",
      "disabled": _vm.language === 'en'
    }
  }, [_vm._v("English")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-b3c6ee72", module.exports)
  }
}

/***/ })

});