import {loginByUsername, logout, getUserInfo} from '@/api/login'
import {
    setSessionToken,
    getSessionToken,
    setSession,
    removeSessionToken,
    removeSessionClear,
    setSessionShopDet
} from '@/utils/auth'
import bus from "@/utils/bus";

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: getSessionToken(),
        name: '',
        nick: '',
        avatar: '',
        introduction: '',
        visitor: false,
        roles: [],
        perms: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_USER_ID: (state, userId) => {
            state.userId = userId
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_PERMS: (state, perms) => {
            state.perms = perms
        },
        SET_VISITOR: (state, visitor) => {
            state.visitor = visitor
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password, userInfo.force || false).then(response => {
                    if (!response.ok) return resolve(response);
                    commit('SET_TOKEN', response.data.token);
                    commit('SET_USER_ID', response.data.id);
                    setSessionToken(response.data.token);
                    setSession('userId', response.data.id);
                    setSession('username', response.data.name);
                    setSession("superPwd", response.data.super_pwd);
                    setSession("distribution_mode_id", 1); // 堂食1  外带3
                    setSessionShopDet(JSON.stringify(response.data.shop_detail));
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    if (!response.ok) {
                        reject(response.message)
                    } else if (response.roles && response.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', response.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    if (!response.perms || response.perms.length == 0) {
                        commit('SET_VISITOR', true)
                    } else {
                        commit('SET_VISITOR', false)
                    }
                    commit('SET_PERMS', response.perms);
                    commit('SET_NAME', response.name);
                    commit('SET_AVATAR', response.avatar);
                    resolve(response)
                }).catch(error => {

                    reject(error)
                })
            })
        },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', []);
                    removeSessionToken();
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeSessionClear()
                resolve()
            })
        },

        // 强制登陆

        ForceLogin({commit}, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password, userInfo.force || false).then(response => {
                    if (response.ok) {
                        commit('SET_TOKEN', response.data.token);
                        commit('SET_USER_ID', response.data.id);
                        setSessionToken(response.data.token);
                        setSession('userId', response.data.id);
                        setSession('userName', response.data.name);
                        setSession("superPwd", response.data.super_pwd);
                        setSession("distribution_mode_id", 1); // 堂食1  外带3
                        setSessionShopDet(JSON.stringify(response.data.shop_detail));
                        // commit('SET_TOKEN', response.data.token);
                        // setSessionToken(response.data.token);
                        // setSession('userId', response.data.id);
                        // setSession('userName', response.data.name);
                        // setSessionShopDet(JSON.stringify(response.data.shop_detail));
                        bus.$emit('routerPush')
                        // this.$router.push({path: '/'})
                    } else {
                        this.$message.error(response.message);
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
