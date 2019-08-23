/**
 * @author wxh on 2017/11/1
 * @copyright
 * @desc
 */

const request = require('request');
const toString = require('querystring');

const config = require('../../service/config');
const adminClientConfig = require('../../service/config').admin_server_db;

var httpClient = module.exports;


function Deploy(obj) {
    this.url = obj.url;
    this.path = obj.path;
    this.method = obj.method;
    this.headers = obj.headers;
    this.brandId = obj.brandId;
    this.shopId = obj.shopId;
}
httpClient.get = function (config, param, callback) {

    param.brand_id = config.brand_id;
    param.shop_id = config.shop_id;

    request({
        url: `${config.url}${config.path}`,//请求路径
        method: `GET`,//请求方式，默认为get
        headers: config.headers,
        qs: param
    }, (error,response,body)=>{
        if (!error && response.statusCode == 200) {
            callback(error,JSON.parse(body))
        } else {
            callback(error)
        }
    });
};

httpClient.post = function (config, param, callback) {
    param.brand_id = config.brand_id;
    param.shop_id = config.shop_id;
    request({
        url: `${config.url}${config.path}`,//请求路径
        method: config.method,
        headers:`POST`,
        body: param
    }, callback);
};



httpClient.baseGet = function (config, params, callback) {
    let url = config.api_url.url + config.api_url.path + params.path;
    params.brand_id = config.api_url.brand_id;
    params.shop_id = config.api_url.shop_id;
    console.log("url", url)
    console.log("params", params)
    request({
        url: url,
        method: "GET",
        qs: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
}


httpClient.basePost = function (config, params, callback) {
    let url = config.api_url.url + config.api_url.path + params.path;
    params.brand_id = config.api_url.brand_id;
    params.shop_id = config.api_url.shop_id;
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
};




httpClient.javaSendMessage = function (params, callback) {
    let url = config.java_http_url.url + config.java_http_url.path + params.path;
    params.brandId = config.api_url.brand_id;
    params.shopId = config.api_url.shop_id;
    delete params.path
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        form: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
};


httpClient.javaServicePost = function (params, callback) {
    let url = config.java_http_url.url + config.java_http_url.path + params.path;
    params.brandId = config.api_url.brand_id;
    params.shopId = config.api_url.shop_id;

    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
};



httpClient.admin_put = function (route, param, cb) {
    let path = `http://${adminClientConfig.host}:${adminClientConfig.port}${adminClientConfig.path}${route}`;
    let form = {
        brand_id: config.api_url.brand_id,
        shop_id: config.api_url.shop_id,
    };
    for (let i in param) {
        form[i] = param[i]
    }
    request({
        url: path,
        method: "PUT",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: form
    }, (error, response, body) =>{
        return cb(error, body);
    });
};