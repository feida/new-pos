/**
 * @author wxh on 2019/4/16
 * @copyright
 * @desc
 */


//------- 获取mqtt状态
exports.getOnLineState = (req, res, next) => {
    return res.json({
        flag: '0000',
        msg: '',
        result: {
            ok: true,
            message: '',
            data: onlineState
        }
    })
};