import request from '@/utils/request'

import {URL} from '@/config/index'



//营业数据
export function businessData(data) {
    return request({url: URL + '/business/report', method: 'get', params: {date: data}})
}


/**
 * 打印日结小票
 * @param order
 * @param cb
 */

export function printStoreReport(data) {
    return request({url: URL + '/print/daily/report', method: 'post', data: {dates: data}})
}


/**
 * 是否开启结店审核
 * @param order
 * @param cb
 */

export function isOpenPaymentReview() {
    return request({url: URL + '/business/open_payment_review', method: 'get'})
}


/**
 * 结店短信
 * @param order
 * @param cb
 */

export function sendMessage() {
    return request({url: URL + '/business/message', method: 'get'})
}

/**
 * 结店审核获取所有支付项
 * @param order
 * @param cb
 */

export function findAllPaymentList(params) {
    return request({url: URL + '/business/payment_list', method: 'get',params: params})
}

/**
 * 结店审核
 * @param order
 * @param cb
 */

export function checkReport(params) {
    return request({url: URL + '/business/check', method: 'post',data: params})
}

/**
 * 结店成功查询数据
 * @param order
 * @param cb
 */

export function checkSuccess(params) {
    return request({url: URL + '/business/check_success', method: 'get',params: {date: params}})
}


/**
 * 结店成功打印
 * @param order
 * @param cb
 */

export function checkPrint(params) {
    return request({url: URL + '/business/check/print', method: 'post',data: params})
}