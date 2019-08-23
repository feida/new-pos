<template>
    <div class="login" v-loading.fullscreen.lock="fullscreenLoadingObj.show"
         :element-loading-text="fullscreenLoadingObj.msg">
        <div class="loading-wrap" v-show="loadWrap">
            <img src="../../assets/img/loading.gif" class="loading">
        </div>
        <div class="login-wrap" v-show="!loadWrap">
            <el-row>
                <el-col :span="24">
                    <el-row>
                        <el-col :span="12" :offset="6" class="logo-container">
                            <div class="header-logo" @click="closeKeyboard">
                                <img :src="shopInfo.brand_logo" alt="logo" v-if="isOnLine && shopInfo.brand_logo"
                                     class="logo">
                                <img src="../../assets/shaolei_img/logo.jpg" alt="logo" class="logo" v-else>
                            </div>
                        </el-col>
                        <el-col :span="12" :offset="6" class="login-container">
                            <div class="input-container">
                                <div style="padding-top: 85px; padding-left: 40px;">
                                    <span class="username-img-container"><img
                                            src="../../assets/shaolei_img/zhanghao@2x.png" alt="账号图片"></span>
                                    <input type="text" class="base-input" :placeholder="$t('login.username')"
                                           autocomplete="off"
                                           readonly onfocus="this.removeAttribute('readonly');"
                                           v-model="loginForm.username" @focus="selectInput('loginForm.username')">
                                </div>

                                <div class="password-container">
                                    <span class="username-img-container"><img src="../../assets/shaolei_img/mima@2x.png"
                                                                              alt="密码图片"></span>
                                    <input class="base-input" :placeholder="$t('login.password')"
                                           v-model="loginForm.password"
                                           type='password'
                                           autocomplete="off"
                                           readonly onfocus="this.removeAttribute('readonly');"
                                           ref="password" @focus="selectInput('loginForm.password')"
                                           @keyup.enter="login()">
                                </div>
                                <div class="remember-password">
                                    <i class="icon-font icon-iconfontgouxuan remember-info"></i>
                                </div>
                                <el-button class="login-btn" :loading="loading" @click.native.prevent="login()">
                                    {{$t('login.logIn')}}
                                </el-button>


                            </div>
                        </el-col>
                        <el-col :span="24" style="margin-top: -65px;" v-show="showKeyboard">
                            <keyboard :keyboard-text.sync="loginForm.username" @childKey="get" class="key-board"></keyboard>
                        </el-col>
                    </el-row>
                    <div style="position: absolute; top: 10px; right: 10px">
                        <svg class="icon" aria-hidden="true"
                           style="width:35px; height: 35px; margin-right: 5px;">
                          <use :xlink:href="mqtt ==  true ? '#icon-yunfuwuqi-lianjie1' : '#icon-yunfuwuqi-duankailianjie1'"></use>
                        </svg>
                        <span style="margin-left: 5px;">
                            <img v-if="network" src="../../assets/img/network.png" style="width: 35px; height: 35px;margin-right: 5px;" alt="">
                            <img v-else="" src="../../assets/img/noNetwork.png" style="width: 35px; height: 35px;margin-right: 5px;" alt="">
                        </span>
                        <LangSelect></LangSelect>
                    </div>
                    <div class="avatar-container">
                        <div class="avatar-drop-down" @click="displayAvatars()">
                            <i class="iconfont " :class="displayAvatar? 'icon-arrow-right' : 'icon-arrow-left'"></i>
                            <span>{{displayAvatar == false ? $t('login.openUp') : $t('login.packUp')}}</span>
                        </div>
                        <div class="user-item" v-for="user in userList" @click="choiceAccount(user)"
                             v-if="displayAvatar == true">
                            <img class="user-item-avatar" :src="shopInfo.brand_logo" alt="logo"
                                 v-if="isOnLine && shopInfo.brand_logo">
                            <img alt="logo" src="../../assets/shaolei_img/logo.jpg" class="user-item-avatar" v-else>
                            <span class="user-item-span"
                                  :class="{'user-item-online': user.online_state}">{{user.name}}</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" :offset="6" class="version-wrap">
                    <p>{{$t('login.version')}}:V{{version}} | {{$t('login.company')}}</p>
                    <!--<p>技术服务热线：400-805-1711</p>-->
                    <!--<p>{{$t('login.support')}}：400-805-1711</p>-->
                </el-col>

                <el-dialog itle="提示" :visible.sync="versionLogDialog" :before-close="closeVersionLog">
                    <ul>
                        <li>
                            <h2>版本号：1.5.5</h2>
                        </li>
                    </ul>
                    <span slot="footer" class="dialog-footer">
            <el-button @click="versionLogDialog = false">取 消</el-button>
            <el-button type="primary" @click="versionLogDialog = false">确 定</el-button>
          </span>
                </el-dialog>
            </el-row>
        </div>
        <socketComponent></socketComponent>
    </div>
</template>

<script>
    import {setSession,getSessionShopDet} from '@/utils/auth'
    import {getNormalUserList} from '@/api/login'
    import LangSelect from '@/components/LangSelect'
    import CountDown from './countdown'
    import {mapGetters} from 'vuex'
    import keyboard from "@/components/Keyboard/keyboard.vue";
    import bus from "@/utils/bus";
    import socketComponent from '@/views/component/socketComponent'

    export default {
        components: {LangSelect, keyboard, socketComponent},
        name: 'login',
        data() {
            return {
                loginForm: {        //默认用户名密码
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, pattern: /^(\w){1,30}$/, message: '密码不能少于1位数!', trigger: 'blur'}]
                },

                fullscreenLoadingObj: {show: false, msg: "正在更新数据 ..."},
                loadWrap: false,
                loading: false,
                checked: true,
                inputState: '',
                userList: [],
                keyBoradState: 'username',
                versionLog: false,
                shopInfo: {},
                version: '',
                isOnLine: navigator.onLine,
                displayAvatar: true,
                showKeyboard: false,
                versionLogDialog: false,
            }
        },
        computed: {
            ...mapGetters({
                mqtt: 'mqtt',
                network: 'network',
            })
        },
        mounted() {
            let that = this;
            this.$store.dispatch('getOnLine');
            bus.$on("routerPush", function (value) {
                that.$router.push({path: '/table/eatin?notPrintOrder=true&orderType=all'})
            })
        },
        beforeDestroy() {
            bus.$off("routerPush")
        },
        created() {
            this.getUserList();
        },
        methods: {
            get(key) {
                if (this.inputState == 'loginForm.username') {
                    this.loginForm.username = (key == 'del' ? this.loginForm.username.substring(0, this.loginForm.username.length - 1) : this.loginForm.username += key);
                }
                if (this.inputState == 'loginForm.password') {
                    this.loginForm.password = (key == 'del' ? this.loginForm.password.substring(0, this.loginForm.password.length - 1) : this.loginForm.password += key);
                }
            },
            selectInput(inputState) {
                this.inputState = inputState;
                this.showKeyboard = true;
            },
            closeKeyboard() {
                this.showKeyboard = false;
            },
            closeVersionLog(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },

            displayAvatars() {
                this.displayAvatar = !this.displayAvatar;
            },

            login() {
                this.loading = true;
                this.$store.dispatch('LoginByUsername', this.loginForm).then((response) => {
                    this.loading = false;
                    if (response.ok) {
                        this.shopDet = JSON.parse(getSessionShopDet())
                        if(this.shopDet.shopMode == 6) {
                            return this.$router.push({path: '/table/eatin?notPrintOrder=true&orderType=all'})
                        }else {
                            return this.$router.push({path: '/tvorder?orderType=all'})
                        }
                    }
                    this.$message({
                        type: 'error',
                        message: response.message
                    });
                }).catch(() => {
                    this.loading = false
                })
            },
            getUserList() {
                getNormalUserList().then(response => {
                    if (!response.ok) return this.$message.error(response.message);
                    this.userList = response.data || [];
                    this.loginForm.username = response.data[0].name || '';
                    console.log(response)
                })
            },

            choiceAccount(user) {
                this.loginForm.username = user.name;
                this.loginForm.password = '';
                this.$refs.password.focus();
            },
        },
        sockets: {
            getSocketId() {
                console.log(`------this.$socket.id---`,this.$socket.id)
                setSession(`socketId`, this.$socket.id);

            },
            error() {
                this.$lodash.map(this.userList, (o) => {
                    o['online_state'] = false;
                });
                this.$notify.error(`【error】与系统断开连接！`);
            },
            disconnect() {
                this.$lodash.map(this.userList, (o) => {
                    o['online_state'] = false;
                });
                this.$notify.error(`【disconnect】与系统断开连接！`);
            },
            reconnect() {    //当服务器重启
                this.$notify.success(`重新连接系统！`);
            },
            login(value) {
                this.$lodash.find(this.userList, (o) => {
                    if (o.id == value.user.userid) {
                        o.online_state = true;
                        this.$notify.success(`${value.user.username}进入系统！`);
                    }
                });
            },
            logout(value) {

                this.$lodash.find(this.userList, (o) => {
                    if (o.id == value.user.userid) {
                        o.online_state = false;
                        this.$notify.info(`${o.user.username}退出系统！`);
                    }

                });
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .login {
        background-color: #f5f5f5;
        //height: 3000px;
        height: 100%;
    }

    .login-wrap {
        background-color: #f5f5f5;
    }

    .logo-container {
        margin-top: 65px;
    }

    .header-logo {
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }

    .logo {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        position: absolute;
        border-radius: 50%;
    }

    .login-container {
        margin-top: -40px;
    }

    .input-container {
        width: 380px;
        height: 342px;
        margin: 0 auto;
        background-color: #FFFFFF;
    }

    .user-item-avatar {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        position: absolute;
        left: 13px;
        margin-top: 10px;
    }

    .user-item-span {
        display: inline-block;
    }

    .user-item-online {
        color: #13CE66;
    }

    .avatar-drop-down {
        width: 195px;
        height: 41px;
        line-height: 41px;
        text-align: left;
        text-indent: 20px;
        margin-top: 30px;
        background-color: black;
        border-radius: 20px 0 0 20px;
    }

    .base-input {
        width: 300px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 2px;

        outline: none;

        font-size: 18px;
        text-indent: 45px;
        color: #2f2f2f;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    .username-img-container {
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: black;
    }

    .username-img-container img {
        width: 18px;
        height: 20px;
        margin-left: 11px;
        margin-top: 11px;
    }

    .password-container {
        margin-top: 10px;
        padding-left: 40px;
    }

    .remember-password {
        height: 30px;
        line-height: 30px;
        visibility: hidden;
    }

    .remember-info {
        font-size: 28px;
        width: 28px;
        height: 28px;
        position: absolute;
        display: inline-block;
    }

    .remember-password > span {
        display: inline-block;
        margin-left: 28px;
    }

    .login-btn {
        height: 50px;
        width: 300px;
        background-color: #212121;
        border-radius: 4px;
        color: #FFFFFF;
        font-size: 22px;
        /*line-height: 50px;*/
        text-align: center;
        cursor: pointer;
        margin-left: 40px;
    }

    .login-btn:hover {
        background-color: #212121;
        color: #fff;
    }

    .key-board {
        color: #fff;
        text-align: center;
        margin: 0 auto;
        font-family: Verdana, Sans-Serif;
    }

    .version-wrap {
        text-align: center;
        color: #999;
        text-align: center;
        position: fixed;
        bottom: 0;
        padding-bottom: 10px
    }

    .version-wrap > p {
        font-size: 14px;
    }

    .loading-wrap {
        margin-top: 15%;
        text-align: center;
        background-color: #FFFFFF;
        height: 100%;
    }

    .avatar-container {
        position: absolute;
        top: 25px;
        right: 0px;
        color: #FFFFFF;
    }

    .user-item {
        width: 195px;
        height: 41px;
        line-height: 41px;
        text-align: left;
        text-indent: 20px;
        margin-top: 10px;
        background-color: black;
        border-radius: 8px 0 0 8px;
        position: relative;
    }
</style>

