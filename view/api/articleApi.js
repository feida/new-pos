import request from '@/utils/request'

import {URL} from '@/config/index'

//菜品分类列表
export function getFamilyList() {
  return request({url: URL + '/article/family_list', method: 'get'})
}

//根据菜品分类id获取菜品
export function getArticleListByFamilyId(params) {
  return request({url: URL + '/article/article_list', method: 'get',params: params})
}


//根据菜品id获取套餐子品
export function getMealByArticleId(params) {
    return request({url: URL + '/article/meal_item', method: 'get',params: {article_id: params}})
}

//根据菜品id获取老规格子品
export function getArticlePriceListByArticleId(params) {
    return request({url: URL + '/article/price', method: 'get',params: {article_id: params}})
}

//根据菜品id获取新规格子品
export function getUnitListByArticleId(params) {
    return request({url: URL + '/article/unit_list', method: 'get',params: {article_id: params}})
}

//根据菜品id获取称重菜品
export function getWeightPackageList(params) {
    return request({url: URL + '/article/weight_package', method: 'get',params: {article_id: params}})
}
