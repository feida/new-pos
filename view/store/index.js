import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import table from './modules/table'
import article from './modules/article'
import pay from './modules/pay'
import orderInfo from './modules/orderInfo'
import detailCar from './modules/detailCar'
import socketData from './modules/socketData'
import stock from './modules/stock'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        errorLog,
        permission,
        tagsView,
        user,
        socketData,
        table,
        article,
        pay,
        orderInfo,
        detailCar,
        stock
    },
    getters
})

export default store
