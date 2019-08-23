import Vue from 'vue'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import './styles/pos-icon/iconfont.css'
import './styles/pos-icon/iconfont'

import Properties from './properties';

import App from './App'
import router from './router'
import store from './store'
import vueUtils from "./utils/vue-utils";
import i18n from './lang'
// import './icons'
import './errorLog'
import './permission' // 权限验证


import './scan/qrcode1' // 权限验证
import './scan/qrcode' // 权限验证
import './scan/qrcode.lib.min.js' // 权限验证

//import './mock' // 模拟数据

import VueSocketio from 'vue-socket.io';

import * as filters from './filters' //全局过滤器


// 权限指令
import hasPerm from '@/directive/permission/hasPerm'
import perm from '@/directive/permission/perm'
// 注册全局的权限判断方法和指令
Vue.prototype.$hasPerm = hasPerm;
Vue.directive('perm', perm);

Vue.use(new VueSocketio({
    debug: true,
    connection: '',
}), store);

Vue.use(Properties);
Vue.use(vueUtils);

Vue.use(Element, {
    size: 'medium', // 设置元素默认大小
    i18n: (key, value) => i18n.t(key, value)
});

// 注册全局实用过滤器。
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;

window.appControl = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {App}
});
