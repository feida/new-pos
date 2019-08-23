const async = require('async')
const { SuccessModel } = require('../../lib/util/result');
const tableQrcodeModel = require('../../model/web/tableQrcode');
const customSqlModel = require('../../model/web/customSql')


/**
 * 根据区域 ID 获取 桌位集合
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.listByAreaId = (req, res, next) => {
    let condition = {};
    let page_skip = req.query.page_skip;
    let page_size = req.query.page_size;
    let area_id = req.query.area_id;
    condition.page_skip = page_skip;
    condition.page_size = page_size;
    condition.area_id = area_id;
    if (!area_id) return next(new BadRequestError("area_id is null"));

    async.parallel({
        list: function (cb) {
            let sql = `select * from tb_table_qrcode  where  area_id = ${condition.area_id} order by table_number   asc  limit ${condition.page_skip},${condition.page_size}`;
            customSqlModel.getAllCustomSqlInfo(sql,  (error, data) =>  cb(null, data));
        },
        count: function (cb) {
            let sql = `SELECT count(*) count from tb_table_qrcode where  area_id = ${condition.area_id}`;
            customSqlModel.getOneCustomSqlInfo(sql,  (error, data) =>   cb(error, data.count));
        },
    }, function (error, reply) {
        if (error)   return next(error.toString())
        let results = {};
        results.list = reply.list;
        results.totalPage = Math.ceil(reply.count / page_size) || 1;
        results.curPage = req.query.page_index;
        results.sizePage = page_size;
        return res.json(new SuccessModel(null, results))
    });
}


/**
 * @description 获取所有桌位和订单
 */
exports.getTablesAndOrders = (req, res, next) => {
    let condition = {}
    let searchCondition = '';

    condition.page_size = req.body.page_size || '';
    condition.page_skip = req.body.page_skip || '';
    condition.distributionMode = req.body.distribution_mode_id || 1;

    if (req.body.search_code) {
        searchCondition += `where table_number like '%${req.body.search_code}%'`;
    }

    async.parallel({
        list: function (cb) {
            var sql = `
            SELECT
                tableNumber.id,tableNumber.table_number,tableNumber.customer_count,
                tableNumber.table_state,tableNumber.area_id ,orders.id order_id ,
                orders.totalAmount ,
                orders.customer_count order_customer_count,
                orders.accounting_time,
                orders.order_state,
                orders.production_status,
                orders.article_count,
                orders.serial_number,
                orders.create_time,
                orders.service_price,
                orders.ver_code,
                orders.customer_id
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_table_qrcode tq
                        ${searchCondition}  
                        ORDER BY
                            table_number ASC
                        limit ${condition.page_skip},${condition.page_size}
                    ) tableNumber
                LEFT JOIN (
                    SELECT
                        CASE
                    WHEN r.amount_with_children > 0 THEN
                        r.amount_with_children
                    ELSE
                        r.order_money
                    END totalAmount,
                        r.*
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_order
                        WHERE
                            order_state = 1 and 
                            accounting_time
                            BETWEEN  strftime('%Y-%m-%d', datetime('now','-1 day'))  and strftime('%Y-%m-%d', datetime('now','localtime')) 
                            AND (parent_order_id IS NULL or parent_order_id ='') AND distribution_mode_id = ${condition.distributionMode}
                        ORDER BY
                            create_time DESC
                    ) r
                GROUP BY
                    r.table_number
                ) orders ON tableNumber.table_number = orders.table_number;
            `;
            customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
                console.log('err', error)
                if (error) return cb(error);
                cb(null, data)
            });
        },
        count: function (cb) {
            var sql = `SELECT count(*) count from tb_table_qrcode`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data.count)
            });
        }
    }, function (error, reply) {
        if (error) return next(new BadRequestError(error.toString()));

        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '获取桌位订单列表成功',
                data: reply
            }
        })
    });
}


/**
 * 分页获取 所有桌位 集合
 * @param req
 * @param res
 * @param next
 */
exports.getAllTableAndOrder = function (req, res, next) {
    let searchCondition = '';
    let searchCode = req.query.search_code ||'';
    let pageSize = req.query.page_size;
    let pageSkip = req.query.page_skip;
    let pageIndex = req.query.page_index;
    let distribution = req.query.distribution_mode_id;
    if (searchCondition) {
        searchCondition += `where table_number like '${searchCondition}%'`;
    }
    let condition = {};
    condition.page_skip = pageSkip;
    condition.page_size = pageSize;
    condition.distributionMode = distribution || 1;
    async.parallel({
        list: function (cb) {
            var sql = `
            SELECT
                tableNumber.id,tableNumber.table_number,tableNumber.customer_count,
                tableNumber.table_state,tableNumber.area_id ,orders.id order_id ,
                orders.totalAmount ,
                orders.customer_count order_customer_count,
                orders.accounting_time,
                orders.order_state,
                orders.production_status,
                orders.article_count,
                orders.serial_number,
                orders.create_time,
                orders.service_price,
                orders.ver_code,
                orders.customer_id
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_table_qrcode tq
                        ${searchCondition}  
                        ORDER BY
                            table_number ASC
                        limit ${condition.page_skip},${condition.page_size}
                    ) tableNumber
                LEFT JOIN (
                    SELECT
                        CASE
                    WHEN r.amount_with_children > 0 THEN
                        r.amount_with_children
                    ELSE
                        r.order_money
                    END totalAmount,
                        r.*
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_order
                        WHERE
                            order_state = 1 and 
                            accounting_time
                            BETWEEN  strftime('%Y-%m-%d', datetime('now','-1 day'))  and strftime('%Y-%m-%d', datetime('now','localtime')) 
                            AND (parent_order_id IS NULL or parent_order_id ='') AND distribution_mode_id = ${condition.distributionMode}
                        ORDER BY
                            create_time DESC
                    ) r
                GROUP BY
                    r.table_number
                ) orders ON tableNumber.table_number = orders.table_number;
            `;
            customSqlModel.getAllCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data)
            });
        },
        count: function (cb) {
            var sql = `SELECT count(*) count from tb_table_qrcode`;
            customSqlModel.getOneCustomSqlInfo(sql, function (error, data) {
                if (error) return cb(error);
                cb(null, data.count)
            });
        }
    }, function (error, reply) {
        if (error) return next(error)
        let results = {};
        results.list = reply.list;
        results.totalPage = Math.ceil(reply.count / pageSize) || 1;
        results.curPage = pageIndex ;
        results.sizePage = pageSize;

        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '获取桌位订单列表成功',
                data: results
            }
        })
    });
};

/**
 * 根据桌号获取桌位信息
 * @param req
 * @param res
 * @param next
 */
exports.getTableNumberAndOrder =  (req, res, next)=> {
    let table_number = req.query.table_number;
    let distribution = req.query.distribution_mode_id || 1;
    if (!table_number) return next(new BadRequestError("table_number is null"));
    if (!distribution) return next(new BadRequestError("distribution_mode_id is null"));

    var sql = `
            SELECT
                tableNumber.id,tableNumber.table_number,tableNumber.customer_count,
                tableNumber.table_state,tableNumber.area_id ,orders.id order_id ,
                orders.totalAmount ,
                orders.customer_count order_customer_count,
                orders.accounting_time,
                orders.order_state,
                orders.production_status,
                orders.article_count,
                orders.serial_number,
                orders.create_time,
                orders.service_price,
                orders.ver_code,
                orders.customer_id
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_table_qrcode tq  where table_number = '${table_number}'
                    ) tableNumber
                LEFT JOIN (
                    SELECT
                        CASE
                    WHEN r.amount_with_children > 0 THEN
                        r.amount_with_children
                    ELSE
                        r.order_money
                    END totalAmount,
                        r.*
                FROM
                    (
                        SELECT
                            *
                        FROM
                            tb_order
                        WHERE
                            order_state = 1 and 
                            accounting_time
                            BETWEEN  strftime('%Y-%m-%d', datetime('now','-1 day'))  and strftime('%Y-%m-%d', datetime('now','localtime')) 
                            AND (parent_order_id IS NULL or parent_order_id ='') AND distribution_mode_id = ${distribution}
                        ORDER BY
                            create_time DESC
                    ) r
                GROUP BY
                    r.table_number
                ) orders ON tableNumber.table_number = orders.table_number;
            `;
    customSqlModel.getAllCustomSqlInfo(sql,  (error, data)=> {
        if (error) return next(error);

        if(data.length == 0) return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: false,
                message: '没有找到该桌位信息！',
            }
        });

        return res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: '获取桌位订单成功！',
                data: data
            }
        })
    });
}