/**
 * @author wxh on 2019/5/5
 * @copyright
 * @desc
 */
const { SuccessModel } = require('../../lib/util/result')

const remarkModel = require("../../model/web/remark");

//获取退菜备注
exports.getRemarkOrderRefund = (req, res, next) => {

    let type = req.query.type;

    if (!type) return next(new BadRequestError('type is null'));

    remarkModel.findAllInfoByConditions({type},(err,result)=>{
        if(err) return next(err);
        return res.json(new SuccessModel('获取成功！', result))
    })
};