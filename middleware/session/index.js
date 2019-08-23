/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

module.exports = function () {
    return function (req, res, next) {

        req.session = {};

        let token = req.get('Pos-Exe-Token');
        let socketId = req.get('Socket-Id-Token');


        req.session.token = token ? token.trim() : null;
        req.session.socketId = socketId ? socketId.trim() : null;

        //没有token未登录,根据业务修改未登录操作
        if(!token){
            return next();
        }
        req.session.token = token;

        if(!socketId) {
            return next();
        }
        req.session.socketId = socketId;

        next();

    }
};
