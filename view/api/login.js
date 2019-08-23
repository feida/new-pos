import request from '@/utils/request'

import {URL} from '@/config/index'

//登陆
export function loginByUsername(username, password,force) {
    const data = {
        username,
        password,
        force
    };
    return request({url: URL+'/user/login', method: 'post', data})
}

// 获取正常用户列表
export function getNormalUserList(params) {
  return request({url: URL + '/user/normal/list', method: 'get', params: params})
}

//退出登陆
export function logout(data) {
    return request({url: URL+'/user/logout', method: 'delete',data: data})
}
//获取用户信息
export function getUserInfo(token) {
    return request({url: URL+'/system/info', method: 'get', params: {token}})
}



//获取店铺设置参数
export function getShopInfo(brand_id) {
  return request({url: URL+'/system/shop_detail', method: 'get', params: {brand_id}})
}

// 获取在线状态
export function getOnLineState(params) {
    return request({url: URL + '/on/line/state', method: 'get', params: params})
}


// 获取所有打印机信息
export function getPrintRecord(params) {
    return request({url: URL + '/print/all/info', method: 'get'})
}


// 票据打印测试
export function getBillTest(params) {
    return request({url: URL + '/print/test/bill', method: 'get', params: params})
}

// 标签打印测试
export function getLabelTest(params) {
    return request({url: URL + '/print/test/label', method: 'get', params: params})
}