import request from '@/utils/request'

import {URL} from '@/config/index'


//根据customer_id获取用户详情
export function getCustomerInfo(customer_id) {
    return request({url: URL + '/order/customer', method: 'get',params: {customer_id: customer_id}})
}

//获取订单信息
export function getOrderDetail(orderId) {
  return request({url: URL + '/order/detail', method: 'get',params: {orderId: orderId}})
}


//下单
export function pushOrder(data) {
  return request({url: URL + '/push/order', method: 'post', data: data})
}

//获取订单内所有菜品项
export function getOrderItemlistByOrderId(data) {
    return request({url: URL + '/order/order_items', method: 'get', params: {order_id: data}})
}

//获取订单折扣信息
export function getDiscountInfo(data) {
    return request({url: URL + '/order/discount_info', method: 'get', params: {order_id: data}})
}


//换桌
export function changeTable(data) {
    return request({url: URL + '/order/change_order', method: 'PUT', data: data})
}

//买单
export function payOrder(data) {
    return request({url: URL + '/order/pay', method: 'post', data: data})
}

//扫码支付
export function scanPayMoney(data) {
    return request({url: URL + '/order/scan', method: 'post', data: data})
}

//取消订单
export function cancelOrder(data) {
    return request({url: URL + '/order/cancel', method: 'get', params: {orderId: data}})
}

//折扣
export function orderDiscount(data) {
    return request({url: URL + '/order/discount', method: 'post',data: data})
}


//恢复原价
export function resumeDiscount(data) {
    return request({url: URL + '/order/resume_discount', method: 'PUT',data: {order_id:data}})
}


//退菜
export function refundOrderNew(data) {
    return request({url: URL + '/order/refund', method: 'post',data: data})
    // return request({url: URL + '/order/refund/new', method: 'post',data: data})
}

//赠菜
export function grantArticleByOrderIdAndOrderItems(data) {
    return request({url: URL + '/order/grant', method: 'post',data: data})
}


//退菜或赠菜 备注
export function getRemarks(data) {
    return request({url: URL + '/remark/order/refund', method: 'get', params: {type: data}})
}



//催菜
export function reminderPrint(data) {
    return request({url: URL + '/order/prompt', method: 'post',data: data})
}

//核重
export function checkWeight(data) {
    return request({url: URL + '/order/check_weight', method: 'PUT',data: data})
}

//打印总单
export function printTotal(data) {
    return request({url: URL + '/print/total', method: 'post',data: data})
}

//打印厨房票据
export function printKitchenTotal(data) {
    return request({url: URL + '/print/kitchen', method: 'post',data: data})
}


//叫号
export function callNumber(data) {
    return request({url: URL + '/tv/call_number', method: 'get',params: {serial_number:data}})
}


//外卖打印总单
export function takeOutPrintTotal(data) {
    return request({url: URL + '/print/platform_total', method: 'get',params: data})
}

//外卖打印厨房票据
export function takeOutPrintKitchenTotal(data) {
    return request({url: URL + '/print/platform_kitchen', method: 'get',params: data})
}

