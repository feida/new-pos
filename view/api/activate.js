import request from '@/utils/request'

import {URL} from '@/config/index'

// 获取配置文件
export function activeConfig() {
    return request({url: URL + '/activate/config', method: 'get'})
}

export function activeInit(params) {
    return request({url: URL + '/activate/init', method: 'post',data: params})
}
