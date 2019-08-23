/**
 * @author wxh on 2019/2/25
 * @copyright
 * @desc
 */


const crypto = require('crypto');
const _ = require('lodash');
const md5 = require('js-md5');
const sha1 = require('js-sha1');
const async = require('async');

const userModel = require('../../model/web/user');
const customerSql = require("../../model/web/customSql")

const shopDetailModel = require('../../model/web/shopDetail');
const {SuccessModel, ErrorModel} = require("../../lib/util/result")

exports.userlist = (req, res, next) => {
    let sql = `select id, name, shop_detail_id, brand_id from tb_user`
    userModel.userlist(sql, (err, result) => {
        if (err) return next(err);
        let arr = _.map(result,  (n)=> {
            n['online_state'] = onlineUser.hasOwnProperty(n['id']);
            return  n
        });
        res.json(new SuccessModel(null, arr))
    })
}

//用户登陆
exports.login = (req, res, next) => {

    let username = req.body.username;
    let password = sha1(md5(req.body.password));
    let force = req.body.force || false;    // false 非强制 true 强制

    if (!username) return next(new BadRequestError('username is null'));
    if (!password) return next(new BadRequestError('password is null'));
    let sql = `select id,name,shop_detail_id,brand_id,super_pwd, token from  tb_user where ( name ='${username}' and (pwd = '${password}' or super_pwd = '${password}') )`
    userModel.login(sql, (err, data) => {
        if (err) return next(err);
        if (data.length == 0) return res.json(new ErrorModel("账户或者密码错误", null))
        let userSocketInfo = _.find(onlineUserInfo, {'userId': data[0].id});
        if (userSocketInfo) {
            if (force) {
                emitter.emit("forceLogout", userSocketInfo);
            } else {
                return res.json({
                    flag: '50102',
                    msg: '检测到您的账户已经登录，是否强制登录！',
                    result: {
                        ok: false,
                        message: '',
                        data: {
                            username:req.body.username,
                            password:req.body.password
                        }
                    }
                });
            }
        }
        let token = crypto.randomBytes(12).toString('hex');
        let resData = data[0];
        resData.token = token;
        customerSql.updateSelective('tb_user', {id: resData.id, token: token}, function (err, data) {
            if (err) return next(err);
            shopDetailModel.getShopDetailFindOne((err, shop_detail)=>{
                if(err) return next(err);

                resData.shop_detail = shop_detail;

                if(!force && onlineUserInfo.length == 0){
                    emitter.emit("syncStockArticle", {});
                }

                return res.json(new SuccessModel(null, resData))
            });
        })
    })
};


//用户退出登陆
exports.logout = function (req, res, next) {

    let userId = req.body.user_id;

    let userSocketInfo = _.find(onlineUserInfo, {'userId': `${userId}`});

    if (userSocketInfo) {
        emitter.emit("logout", userSocketInfo);
    }
    return res.json({
        flag: '0000',
        msg: '',
        result: {
            ok: true,
            message: '',
        }
    })
};


//获取正常用户列表
exports.userListByNormal = function (req, res, next) {
    userModel.userListByNormal((err, result) => {
        if (err) return next(err);
        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: result
            }
        })

    });

};


// 根据token获取管理员详情
exports.getUserDetailByToKen = function (req, res, next) {

    let user_token = req.query.token || req.body.token;

    if (!user_token)  return next(new BadRequestError('请传入用户 token'));

    userModel.getUserDetailByToken(user_token, function (err, result) {
        if (err) return next(err);
        if (!result) {
            return res.json({
                flag: '50008',
                msg: '非法的token请重新登陆！',
                result: {
                    ok: false,
                    message: '',
                }
            });
        }

        if (result.status == 0) {
            return res.json({
                flag: '50013',
                msg: '您的账户已经被锁定',
                result: {
                    ok: false,
                    message: '',
                }
            });
        }
        let administrator = {
            ok: true,
            message: '',
            id: result.id,
            name: result.username,
            shop_detail_id: result.shopDetailId,
            token: result.token,
            roles_id: ['5b978ded439546188feb3fc0'],
            roles: [{
                "id": "5b978ded439546188feb3fc0",
                "name": "超级管理员",
                "rdesc": "具有本系统中最高权限",
                "rval": "root"
            }],
            perms: [{
                "name": "所有权限",
                "val": "*"
            }],
            introduction: `我是用户`,
        };
        res.json({
            flag: '0000',
            msg: '',
            result: administrator
        });
    });
};