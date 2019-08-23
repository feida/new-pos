/**
 * @Description:
 * @author guofeng
 * @date 2019-04-19 14:25
 */

const parseRequestParam = (req, ...args) => {
    let map = new Map;
    for (let item of args) {
        if (item && req.body.item) {
            map.set(item, req.query.item)
        }
    }
    return map;
}



module.exports = {
  parseRequestParam
}