import request from '@/utils/request'

import {URL} from '@/config/index'


//编辑库存
export function getArticleStock(data) {
  return request({url: URL + '/stock/update', method: 'put', params: data})
}

//沽清库存
export function getArticleIsEmpty(data) {
    return request({url: URL + '/stock/empty', method: 'put', data: data})
}

//编辑老规格库存
export function getArticlePriceStock(data) {
    return request({url: URL + '/stock/update_price', method: 'put', params: data})
}
//老规格沽清
export function getArticlePriceIsEmpty(data) {
    return request({url: URL + '/stock/empty_price', method: 'put', data: data})
}
//上下架
export function getArticleUpOrDown(data) {
    return request({url: URL + '/stock/up_down', method: 'put', params: data})
}

//套餐可售
export function batchRecoveryArticle(data) {
    return request({url: URL + '/stock/batch_recovery', method: 'put', data: {article_ids:data}})
}

// 搜索菜
export function getArticleBySearchKey(data) {
    return request({url: URL + '/article/search', method: 'get', params: {search_key: data}})
}