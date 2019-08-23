/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const async = require('async');
const initPosModel = require('../../../model/pos/init');


const perm = require('./data/perm');
const role = require('./data/role');
const role_perm = require('./data/role_perm');
const user = require('./data/user');
const user_role = require('./data/user_role');

async.parallel({
    perm: (done)=>{
        initPosModel.remove(`tb_perm`,()=>{
            async.eachLimit(perm, 1,(item, cb)=> {
                initPosModel.upsert(`tb_perm`,item,cb)
            },(err)=> {
                if(err) return done(err);
                done()
            });
        });
    },
    role: (done)=>{
        initPosModel.remove(`tb_role`,()=>{
            async.eachLimit(role, 1,  (item, cb)=> {
                initPosModel.upsert(`tb_role`,item,cb)
            }, (err) =>{
                if(err) return done(err)
                done()
            });
        });
    },
    role_perm: (done)=>{
        initPosModel.remove(`tb_role_perm`,()=>{
            async.eachLimit(role_perm, 1,  (item, cb)=> {
                initPosModel.upsert(`tb_role_perm`,item,cb)
            }, (err) =>{
                if(err) return done(err);
                done()
            });
        });
    },
    user_role: (done)=>{
        initPosModel.remove(`tb_user_role`,()=>{
            async.eachLimit(user_role, 1,  (item, cb)=> {
                initPosModel.upsert(`tb_user_role`,item,cb)
            }, (err) =>{
                if(err) return done(err);
                done()
            });
        });
    },
    user: (done)=>{
        initPosModel.remove(`tb_user`,()=>{
            async.eachLimit(user, 1,  (item, cb)=> {
                initPosModel.upsert(`tb_user`,item,cb)
            }, (err) =>{
                if(err) return done(err);
                done()
            });
        });
    }
},function(error, results){
    if(error){
        console.log(error)
    }
    console.log('数据初始化完毕.');
    process.exit(0);
});
