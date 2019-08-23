import router from './router'
import store from './store'
import {Message, MessageBox} from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getSessionToken,getSessionShopDet} from '@/utils/auth'
import {cancelOrder,getOrderDetail} from '@/api/orderApi'
import {activeConfig, activeInit} from '@/api/activate'
NProgress.configure({showSpinner: false});

/**
 * 匹配权限
 * @param userPerms 用户拥有的权限集合，后台返回来，存在vuex，数据类型是数组
 * @param routerPerm 定义的src/router/index.js的路由表asyncRouterMap中
 * @returns {*}
 */
function hasPermission(userPerms, routerPerm) {
    //特殊值，*代表所有资源权限
    if(userPerms.some(p=>p.val=="*")) return true;
    //如果菜单路由上没有声明perm属性，默认显示该菜单，代表所有人可以访问
    if(!routerPerm) return true;
    //判断用户的资源权限集合中是否包含该菜单路由声明的资源权限
    return userPerms.some(p=>p.val==routerPerm)
}

const loginRoute = "/login";
const whiteList = new Set([loginRoute,'/authredirect'])// no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start();
    let token = getSessionToken();
    let hasToken = token != 'undefined' && token != undefined && token !=null && token != '';
    if (hasToken) {
        // 1.有token
        if (to.path == loginRoute) {
            // 1.1 如果是去登录页，有token视为已登录，直接跳到首页
            next({ path: '/' });
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            // 1.2 如果不是去登录页，判断是否有访问权限
            if(store.getters.visitor){
                // 1.2.1 若该标记为true,是因为GetUserInfo返回结果发现用户信息中roles或perms为空数组，即未配置任何角色或权限，0
                // 所以视为游客visitor给放行，放行后游客只能看到公共可以访问的菜单(即src/router/index.js中没有配置perm属性的路由)。
                next()
            }else if (!store.getters.perms || store.getters.perms.length === 0) {
              next()
                // 1.2.2 检查发现不是游客且未加载用户权限信息，应该调用接口加载用户权限信息
                // 用户刷新页面会导致vuex状态清空，或者用户首次登录，vuex中还没有权限信息。都要调用后台接口获得用户信息
                store.dispatch('GetUserInfo').then(res => {
                    const perms = res.perms; // note: roles must be a array! such as: [{name:'菜单1',val:'menu:1'}]
                    store.dispatch('GenerateRoutes', { perms }).then(() => { // 根据roles权限生成可访问的路由表
                        router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
                        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                    })
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        Message.error(err || '获取用户信息失败，请重试');
                        next({ path: '/' })
                    })
                })
            } else {
                // 1.2.3 如果vuex种有权限信息，匹配权限信息，匹配ok则放行
                if (hasPermission(store.getters.perms, to.meta.perm)) {
                    if(from.path.includes("/pay/")){
                        let shopDet = JSON.parse(getSessionShopDet())
                        if(shopDet.shopMode == 6 && shopDet.allowFirstPay == 0) {
                            let cancleOrderId = from.query.suborderId || from.params.orderId;
                            getOrderDetail(cancleOrderId)
                                .then(res => {
                                    if (res.ok && res.data) {
                                        if(res.data.order_state == 1 && res.data.pay_mode != 3 && res.data.pay_mode != 4){
                                            MessageBox.confirm('是否取消支付？', '提示', {
                                                confirmButtonText: '确定',
                                                cancelButtonText: '取消',
                                                type: 'warning'
                                            }).then(() => {
                                                cancelOrder(cancleOrderId)
                                                    .then(res => {
                                                        console.log('cancelOrder',res)
                                                        if (res.ok) {
                                                            next(to.path + "?payConfirm=true&orderType=all");
                                                        } else {
                                                            // that.$message.error(res.message);

                                                        }
                                                    })
                                            }).catch(() => {
                                            });
                                        }else {
                                            next()
                                        }
                                    }
                                })

                        } else {
                            next()
                        }
                    }else {
                        next()
                    }
                    //next()
                } else {
                    next({ path: '/401', replace: true, query: { noGoBack: true }})
                }
            }
        }
    } else {
        // 2.没有token
        // 如果要访问的路由在白名单中，直接进入；否则，重定向到登录页面
        // activeConfig().then(response => {
        //     console.log("=========response========", response)
        //
        //
        //     if (!response.ok) return;
        //     if (!response.data) {
        //         if (to.path == '/activate') {
        //             next()
        //         } else {
        //             next({ path: '/activate' });
        //         }
        //     }
        //
        //
        //     let activateKey = response.data
        //     if (!activateKey || activateKey.length <= 0) {
        //         if (to.path == '/activate') {
        //             next()
        //         } else {
        //             next({ path: '/activate' });
        //         }
        //     } else {
        //         whiteList.has(to.path) ? next() : next(loginRoute);
        //     }
        // })


        whiteList.has(to.path) ? next() : next(loginRoute);
        NProgress.done();
    }
});



router.afterEach(() => {
    NProgress.done() // finish progress bar
});
