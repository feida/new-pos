/**
 * @author wxh on 2019/2/25
 * @copyright
 * @desc
 */
const async = require('async');

const roleWebModel = require('../../model/web/role');

//创建角色
exports.createNewRole = function (req,res,next) {

    if (!req.body.rname) return next(new BadRequestError('角色名为必填'));

    if (!req.body.rval)  return next(new BadRequestError('角色值，用于权限判断为必填'));

    let role = {
        id:randomUUID(),
        rname: req.body.rname,
        rdesc: req.body.rdesc || '',
        rval: req.body.rval,
    };
    roleWebModel.createNewRole(role,(err,role_id)=>{
        if (err) return next(err);
        res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: !!role_id,
                message: role_id ? '创建角色成功' : '创建角色失败',
                role_id: role_id
            }
        });

    });
};


//获取角色列表
exports.getRoleList = function (req, res, next) {

    let pageSkip = req.query.page_skip,
        pageSize = req.query.page_size;
    let condition = {};
    let session  = null;

    if (req.query.content) {
        session = req.query.session;
        var obj={
            'userid':req.query.content,
            'socketName':req.query.content,
            'username':`ces`,
            'content':`11111`
        }


        // emitter.emit("message", obj); //通过

        emitter_socket.id = req.query.content
        emitter.emit("broadcast", obj);  //通过
        // emitter.emit("appoint", obj);  //通过

        condition = {
            $or : [
                { rname: {'$like':`%${req.query.content}%`}},
                { rval: {'$like':`%${req.query.content}%`}},
                { rdesc: {'$like':`%${req.query.content}%`}}
            ]
        }
    }


    async.parallel({
        count: function (cb) {
            roleWebModel.getRoleTotal(condition, cb);
        },
        list: function (cb) {
            roleWebModel.getRoleList(condition, pageSkip, pageSize, cb)
        }
    }, function (err, results) {
        if (err) return next(err);
        res.json({
            flag: '0000',
            msg: '',
            result: {
                ok: true,
                message: ``,
                data: {
                    count: results.count,
                    list: results.list
                },
            }
        });
    })
};