import {getOrderDetail, getDiscountInfo} from '../../api/orderApi'

const state = {
    orderInfo: {},
    currentOrderInfo: {},
    discountInfo: {}
}

const getters = {
    orderInfo: state => state.orderInfo,
    currentOrderInfo: state => state.currentOrderInfo,
    allOrderInfo: state => state.allOrderInfo,
    discountInfo: state => state.discountInfo
}

const actions = {
    getOrderDetail({commit}, orderId) {
        getOrderDetail(orderId)
            .then(res => {
                if (res.ok && res.data) {
                    commit('setOrderInfo', res.data)
                }
            })
    },
    getCurrentOrderDetail({commit}, currentOrderId) {
        getOrderDetail(currentOrderId)
            .then(res => {
                if (res.ok && res.data) {
                    commit('setCurrentOrderInfo', res.data)
                }
            })
    },
    getDiscountInfo({commit}, currentOrderId) {
        getDiscountInfo(currentOrderId)
            .then(res => {
                console.log('getDiscountInfo',res)
                if (res.ok && res.data) {
                    commit('setDiscountInfo', res.data)
                }
            })
    }
}


const mutations = {
    setOrderInfo(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    setCurrentOrderInfo(state, currentOrderInfo) {
        state.currentOrderInfo = currentOrderInfo
    },
    setDiscountInfo(state, discountInfo) {
        state.discountInfo = discountInfo
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
