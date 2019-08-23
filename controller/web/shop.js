/**
 * @author wxh on 2019/3/28
 * @copyright
 * @desc
 */
const shopDetailModel = require('../../model/web/shopDetail');


exports.getShopDetailInFo = (req, res, next) => {
    shopDetailModel.getShopDetailFindOne((err,shop_detail)=>{
        if(err) return next(err);

        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '',
                data: shop_detail
            }
        })
    })
};