import request from '@/utils/request'

import {URL} from '@/config/index'

//获取桌位区域
export function getAreaList() {
  return request({url: URL + '/area', method: 'get'})
}

//根据区域ID获取桌位列表
export function getAllTableAndOrderByAreaId(params) {
    return request({url: URL + '/table/list_by_id', method: 'get',params: params})
}

//获取所有桌位
export function getAllTableAndOrderList(params) {
  return request({url: URL + '/table/list', method: 'get',params: params})
}

//绑定桌位
export function bindTable(data) {
  return request({url: URL + '/bind/table', method: 'post', data: data})
}

//已支付订单
export function payOrderList(data) {
    return request({url: URL + '/order/pay', method: 'get', params: data})
}

//待下单
export function waitOrderList(data) {
    return request({url: URL + '/order/wait_order', method: 'get', params: data})
}

//未支付
export function noPayOrderList(data) {
    return request({url: URL + '/order/no_pay', method: 'get', params: data})
}

//支付中
export function payingOrderList(data) {
    return request({url: URL + '/order/paying', method: 'get', params: data})
}

//待下单和未支付 || 外带
export function waitAndNoPayOrderList(data) {
    return request({url: URL + '/order/wait_and_nopay', method: 'get', params: data})
}

//分类获取订单个数
export function orderStateCountApi(data) {
    return request({url: URL + '/order/order_state_count', method: 'get', params: {distribution_mode_id: data}})
}

//控制订单显示状态
export function getOrderInfoTest(data) {
    return request({url: URL + '/order/get_order_test', method: 'get', params: {order_id: data}})
}



//获取桌位信息、包括未支付订单
export function getTableInfo(data) {
    return request({url: URL + '/table/number', method: 'get', params: data})
}




//分类获取订单个数  电视叫号
export function waitCallTPAndhasCallTPOrderCount(data) {
    return request({url: URL + '/tv/count', method: 'get' })
}


//获取堂食待叫号
export function waitCallTPOrderList(data) {
    return request({url: URL + '/tv/wait', method: 'get', params: data})
}

//已叫号
export function hasCallTPOrderList(data) {
    return request({url: URL + '/tv/called', method: 'get', params: data})
}



//外卖列表
export function platformTodayList(data) {
    return request({url: URL + '/order/platform/list', method: 'get', params: data})
}


//获取外卖订单详情
export function platformByOrderId(data) {
    return request({url: URL + '/order/platform/order', method: 'get', params: data})
}