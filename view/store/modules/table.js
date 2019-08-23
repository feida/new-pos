import {
    getAreaList,
    getAllTableAndOrderList,
    getAllTableAndOrderByAreaId,
    payOrderList,
    payingOrderList,
    noPayOrderList,
    waitOrderList,
    waitAndNoPayOrderList,
    getTableInfo,
    waitCallTPOrderList,
    hasCallTPOrderList
} from '../../api/tableApi'
import {getSession, setSession, getSessionShopDet} from '@/utils/auth'
import async from 'async'
import lodash from 'lodash';

const state = {
    areaList: [],
    tableAndOrderList: [],
    searchKey: '',
    pageInfo: {
        totalPage: 0,
        currentPage: 1,
        pageIndex: 1,
        pageSize: 20,
    },
    orderStateCount: {
        payOrderCount: 0,
        waitOrderCount: 0,
        noPayOrderCount: 0,
        payingOrderCount: 0,
    },
    callStateCount: {
        waitCallTPOrderCount: 0,
        hasCallTPOrderCount: 0,
    },
    orderType: 'all'
}

const getters = {
    areaList: state => state.areaList,
    tableAndOrderList: state => state.tableAndOrderList,
    pageInfo: state => state.pageInfo,
    orderStateCount: state => state.orderStateCount,
    callStateCount: state => state.callStateCount,
    orderType: state => state.orderType,
}

const actions = {
    getAreaList({commit}) {
        getAreaList().then(area => {
            console.log('getAreaList', area.data)
            commit('setAreaList', area.data)
        })
    },

    getAllTableAndOrderByAreaId({commit}, areaId) {
      getAllTableAndOrderByAreaId(areaId)
          .then(tableList => {
              if (tableList.ok && tableList.data) {
                  console.log('tableList',tableList)
                  commit('setTableList', tableList.data)
              }
          })
    },

    getAllTableAndOrderList({commit}, Obj) {
        getAllTableAndOrderList(Obj).then(tableAndOrderList => {
            if (tableAndOrderList.ok && tableAndOrderList.data) {
                console.log('tableAndOrderList',tableAndOrderList)
                commit('setTableAndOrderList', tableAndOrderList.data)
            }

        })
    },

    getWaitAndNoPayOrderList({ commit }, Obj) {
        waitAndNoPayOrderList(Obj).then(waitAndNoPayOrderList => {
            if (waitAndNoPayOrderList.ok && waitAndNoPayOrderList.data) {
                console.log('waitAndNoPayOrderList',waitAndNoPayOrderList)
                commit('setWaitAndNoPayOrderList', waitAndNoPayOrderList.data)
            }

        })
    },

    getPayOrder({commit}, Obj) {
        payOrderList(Obj).then(payOrder => {
            if (payOrder.ok && payOrder.data) {
                console.log('payOrder',payOrder)
                commit('setPayOrderList', payOrder.data)
            }

        })
    },

    getPayingOrderList({commit}, Obj) {
        payingOrderList(Obj).then(payOrder => {
            if (payOrder.ok && payOrder.data) {
                console.log('payingOrderList',payOrder)
                commit('setPayingOrderList', payOrder.data)
            }

        })
    },

    getNoPayOrderList({commit}, Obj) {
        noPayOrderList(Obj).then(payOrder => {
            if (payOrder.ok && payOrder.data) {
                console.log('noPayOrderList',payOrder)
                commit('setNoPayOrderList', payOrder.data)
            }

        })
    },

    getWaitOrderList({commit}, Obj) {
        waitOrderList(Obj).then(payOrder => {
            if (payOrder.ok && payOrder.data) {
                console.log('waitOrderList',payOrder)
                commit('setWaitOrderList', payOrder.data)
            }

        })
    },

    // 电视叫号 模式
    getWaitCallTPOrderList({commit}, Obj) {
        waitCallTPOrderList(Obj).then(waitCallTPOrderList => {
            if (waitCallTPOrderList.ok && waitCallTPOrderList.data) {
                console.log('waitCallTPOrderList',waitCallTPOrderList)
                commit('setWaitCallTPOrderList', waitCallTPOrderList.data)
            }

        })
      //waitCallTPOrderList(Obj.pageIndex, Obj.searchKey, waitCallTPOrderList => commit('setWaitCallTPOrderList', waitCallTPOrderList))
    },

    getHasCallTPOrderList({commit}, Obj) {
        hasCallTPOrderList(Obj).then(hasCallTPOrderList => {
            if (hasCallTPOrderList.ok && hasCallTPOrderList.data) {
                console.log('hasCallTPOrderList',hasCallTPOrderList)
                commit('setHasCallTPOrderList', hasCallTPOrderList.data)
            }

        })
      //hasCallTPOrderList(Obj.pageIndex, Obj.searchKey, hasCallTPOrderList => commit('setHasCallTPOrderList', hasCallTPOrderList))
    },

}
const mutations = {
    setAreaList(state, areaList) {
        state.areaList = areaList
    },

    setTableList(state, tableList) {
        state.tableAndOrderList = tableList.list;
        state.pageInfo.currentPage = tableList.curPage;
        state.pageInfo.totalPage = tableList.totalPage;
    },

    setTableAndOrderList(state, tableAndOrderList) {
        state.tableAndOrderList = tableAndOrderList.list;
        state.pageInfo.currentPage = tableAndOrderList.curPage;
        state.pageInfo.totalPage = tableAndOrderList.totalPage;
        sessionStorage.setItem("pageIndex", tableAndOrderList.curPage)
    },

    // setOrderInfo(state, orderInfo) {
    //   state.orderInfo = orderInfo
    // },

    setPayOrderList(state, payOrder) {
        state.tableAndOrderList = payOrder.payOrderList
        state.pageInfo.currentPage = payOrder.curPage;
        state.pageInfo.totalPage = payOrder.totalPage;
    },

    setPayingOrderList(state, payOrder) {
        state.tableAndOrderList = payOrder.payingOrderList
        state.pageInfo.currentPage = payOrder.curPage;
        state.pageInfo.totalPage = payOrder.totalPage;
    },

    setNoPayOrderList(state, payOrder) {
        state.tableAndOrderList = payOrder.noPayOrderList
        state.pageInfo.currentPage = payOrder.curPage;
        state.pageInfo.totalPage = payOrder.totalPage;
    },

    setWaitOrderList(state, payOrder) {
        state.tableAndOrderList = payOrder.waitOrderList
        state.pageInfo.currentPage = payOrder.curPage;
        state.pageInfo.totalPage = payOrder.totalPage;
    },

    refreshOrderList(state, order) { // 封装刷新数组
        state.tableAndOrderList
    },
    setPageIndex(state, page) { // 设置当前页面
        // state.pageInfo.currentPage = page.currentPage,
        state.pageInfo.pageIndex = page.pageIndex
        // state.pageInfo.totalPage = page.totalPage
    },

    // 电视叫号模式
    setWaitCallTPOrderList(state, waitCallTPOrderList) {
        state.tableAndOrderList = [];
        state.tableAndOrderList = waitCallTPOrderList.waitCallTPOrderList;
        state.pageInfo.currentPage = waitCallTPOrderList.curPage;
        state.pageInfo.totalPage = waitCallTPOrderList.totalPage;
    },

    setHasCallTPOrderList(state, hasCallTPOrderList) {
        state.tableAndOrderList = [];
        state.tableAndOrderList = hasCallTPOrderList.hasCallTPOrderList;
        state.pageInfo.currentPage = hasCallTPOrderList.curPage;
        state.pageInfo.totalPage = hasCallTPOrderList.totalPage;
    },

    setWaitAndNoPayOrderList(state, waitAndNoPayOrderList) {
        state.tableAndOrderList = [];
        state.tableAndOrderList = waitAndNoPayOrderList.waitAndNoPayOrderList;
        state.pageInfo.currentPage = waitAndNoPayOrderList.curPage;
        state.pageInfo.totalPage = waitAndNoPayOrderList.totalPage;
        sessionStorage.setItem("pageIndex", waitAndNoPayOrderList.curPage)
    },
    setCallNumber(state, order) {
        state.tableAndOrderList.map((item, index) => {
            if (item.id == order.id && item.call_times == 0) {
                state.tableAndOrderList.splice(index, 1)
            }
        })
    },
    setTvOrderList(state, order) {

        if (order.parentOrderId == '' || order.parentOrderId == null) {
            state.tableAndOrderList.push({
                id: order.id,
                order_id: order.id,
                table_number: order.tableNumber,
                amount_with_children: order.amountWithChildren,
                order_money: order.orderMoney,
                create_time: order.createTime,
                customer_count: order.customerCount,
                ver_code: order.verCode,
                order_state: order.orderState,
                production_status: order.productionStatus,
                pay_mode: order.payMode,
                call_times: order.callTimes,
                serial_number: order.serialNumber,
                distribution_mode_id: order.distributionModeId
            })
        }
    },

    refundOrder(state, order) {
        let matchOrder = {};
        state.tableAndOrderList.map((item, index) => {
            if (item.order_id == order.id) {
                window.appControl.$notify.success(`${item.table_number} 号桌 退菜成功`)
            }
        })
    },

    getOrderWeChat(state,value) {
        let shopMode = JSON.parse(getSessionShopDet()).shopMode
        if(shopMode == 2) {
            state.callStateCount.waitCallTPOrderCount ++
            if(state.orderType == 'waitOrder') {
                state.tableAndOrderList.unshift(value.data)
            }
            return;
        }
        if(value.data.parent_order_id) return window.appControl.$notify.warning(value.msg)
        if(value.data.distribution_mode_id == 1) {
            if(value.data.order_state == 1) {
                state.orderStateCount.noPayOrderCount++
            } else if(value.data.order_state == 2) {
                state.orderStateCount.payOrderCount++
            }

            if(state.orderType == 'all'){
                let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                    return n.order_id == value.data.order_id || n.table_number == value.data.table_number;
                })
                state.tableAndOrderList.splice(Index,1,value.data)
                //lodash.fill(state.tableAndOrderList,value,Index,Index+1)
            } else if(state.orderType == 'noPayOrder' && value.data.order_state == 1){
                state.tableAndOrderList.unshift(value.data)
            } else if(state.orderType == 'payOrder' && value.data.order_state == 2) {
                state.tableAndOrderList.unshift(value.data)
            }
            //state.orderStateCount.noPayOrderCount++
        }else if(value.data.distribution_mode_id == 3){
            if(state.orderType == 'payOrder'){
                state.tableAndOrderList.unshift(value.data)
            }
            state.orderStateCount.payOrderCount++
        }
        console.log('state.tableAndOrderList',state.tableAndOrderList)

    },

    getOrderWeChatPay(state,value) {
        if(state.orderType == 'all' || state.orderType == 'noPayOrder'){
            console.log('state.tableAndOrderList',state.tableAndOrderList)
            let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                return n.order_id == value.order_id || n.table_number == value.table_number;
            })
            if(state.orderType == 'all') {
                let query = {
                    table_number: value.table_number,
                    distribution_mode_id: getSession("distribution_mode_id"),
                }
                getTableInfo(query)
                    .then(res => {
                        console.log('getTableInfo',res)
                        if(res.ok){
                            let resultData = res.data[0]
                            state.tableAndOrderList.splice(Index,1,resultData)
                        }
                    })
            } else if(state.orderType == 'noPayOrder'){
                state.tableAndOrderList.splice(Index,1)
            }
            state.orderStateCount.noPayOrderCount--
            state.orderStateCount.payOrderCount++
        }
        if(state.orderType == 'payOrder'){
            state.tableAndOrderList.unshift(value)
            state.orderStateCount.payOrderCount++
        }

    },

    setOrderStateCount(state,value) {
        state.orderStateCount = value
    },

    setCallStateCount(state,value) {
        state.callStateCount = value
    },

    setOrderType(state,value){
        state.orderType = value
    },

    socketBindTable(state,value){
        console.log('distribution_mode_id',getSession("distribution_mode_id"))
        let local_mode_id = getSession("distribution_mode_id")
        if(value.data.parent_order_id) return window.appControl.$notify.warning(value.msg)

        if(local_mode_id == value.data.distribution_mode_id) {
            state.orderStateCount.waitOrderCount++
            let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                return n.order_id == value.data.order_id || n.table_number == value.data.table_number;
            })
            if(state.orderType == 'all'){
                state.tableAndOrderList.splice(Index,1,value.data)
            } else if(state.orderType == 'waitOrder' && value.data.order_state == 1){
                state.tableAndOrderList.unshift(value.data)
            }
        }

    },
    socketPushOrder(state,value) {
        let local_mode_id = getSession("distribution_mode_id")
        if(value.data.parent_order_id) return window.appControl.$notify.warning(value.msg)
        if(local_mode_id == value.data.distribution_mode_id) {
            state.orderStateCount.waitOrderCount--
            state.orderStateCount.noPayOrderCount++
            let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                return n.order_id == value.data.order_id || n.table_number == value.data.table_number;
            })
            if(state.orderType == 'all'){
                state.tableAndOrderList.splice(Index,1,value.data)
            } else if(state.orderType == 'waitOrder'){
                state.tableAndOrderList.splice(Index,1)
            }else if(state.orderType == 'noPayOrder'){
                state.tableAndOrderList.unshift(value.data)
            }
        }
    },
    socketPayOrder(state,value) {
        let local_mode_id = getSession("distribution_mode_id")
        if(local_mode_id == value.distribution_mode_id) {
            let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                return n.order_id == value.order_id || n.table_number == value.table_number;
            })
            if(state.orderType == 'all') {
                let query = {
                    table_number: value.table_number,
                    distribution_mode_id: getSession("distribution_mode_id"),
                }
                getTableInfo(query)
                    .then(res => {
                        console.log('getTableInfo',res)
                        if(res.ok){
                            let resultData = res.data[0]
                            state.tableAndOrderList.splice(Index,1,resultData)
                        }
                    })
            } else if(state.orderType == 'noPayOrder'){
                state.tableAndOrderList.splice(Index,1)
            } else if(state.orderType == 'payOrder') {
                state.tableAndOrderList.unshift(value)
            }
            state.orderStateCount.noPayOrderCount--
            state.orderStateCount.payOrderCount++
        }
    },
    socketCancelOrder(state,value) {
        let local_mode_id = getSession("distribution_mode_id")
        if(local_mode_id == value.distribution_mode_id) {
            let Index = lodash.findIndex(state.tableAndOrderList,function(n) {
                return n.order_id == value.order_id || n.table_number == value.table_number;
            })
            if(state.orderType == 'all') {
                let query = {
                    table_number: value.table_number,
                    distribution_mode_id: getSession("distribution_mode_id"),
                }
                getTableInfo(query)
                    .then(res => {
                        console.log('getTableInfo',res)
                        if(res.ok){
                            let resultData = res.data[0]
                            state.tableAndOrderList.splice(Index,1,resultData)
                        }
                    })
            } else if(state.orderType == 'waitOrder'){
                state.tableAndOrderList.splice(Index,1)
            }
            if(state.orderStateCount.waitOrderCount > 0){
                state.orderStateCount.waitOrderCount--
            }
        }
    }



}

export default {
    state,
    getters,
    actions,
    mutations
}

