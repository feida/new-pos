<template>
    <el-row class="header">
        <nav>
            <div>
                <span class="tool-btn">
                    <img :src="shopDet.brandLogo" alt="logo" v-if="shopDet.brandLogo" style="border-radius: 50%;"
                         class="logo">
                    <img src="../../../assets/shaolei_img/logo.jpg" alt="logo" class="logo" v-else>
                </span>
                <router-link tag="li" to="" class="tool-btn" :class="{'active':index =='update'}"
                             style="position: relative" @click.native="headerButton('update')">
                    {{$t('header.updataBtn')}}
                    <sup class="el-badge__content is-fixed"
                         v-if="wsServerDataChangeCount>0">{{wsServerDataChangeCount}}</sup>
                </router-link>
                <span @click="goHome()">
                  <router-link v-if="shopModel == 2 || shopModel == 7" tag="li" to="/tvorder?type=all" class="tool-btn"
                             :class="{'active':index =='table'}" @click.native="headerButton('table')">{{$t('header.orderBtn')}}
                  </router-link>
                  <router-link v-else tag="li" :to="{path:'/table/eatin',query:{orderType:'all'}}" class="tool-btn"
                             :class="{'active':index =='table'}"
                             @click.native="headerButton('table')">{{$t('header.orderBtn')}}
                  </router-link>
                </span>

                <router-link tag="li" to="/stock" class="tool-btn" :class="{'active':index =='stock'}"
                             @click.native="headerButton('stock')">{{$t('header.stockBtn')}}
                </router-link>
                <router-link tag="li" to="/report" class="tool-btn" :class="{'active':index =='report'}"
                             @click.native="headerButton('report')">{{$t('header.reportBtn')}}
                </router-link>
                <router-link tag="li" to="/material" class="tool-btn" :class="{'active':index =='material'}"
                             @click.native="headerButton('material')" v-if="shopDet.isOpenScm">原料管理
                </router-link>
                <input class=" input" id="in-search" type="text" :placeholder="$t('header.searchPla')"
                       autocomplete="off"
                       readonly onfocus="this.removeAttribute('readonly');"
                       @click="headerButton('search')" v-model="searchValue" data-name="search-input">
                <i class="el-icon-close clear-search" v-if="searchValue !=='' " @click="clearSearchValue()"> </i>
                <span class="jiange"> </span>
                <router-link tag="li" to="" class="tool-btn opencashbox" v-if="ifCashbox == true"
                             @click.native="openPassword()">
                    <img src="../../../assets/img/cashbox.png" alt="">
                </router-link>
                <router-link tag="li" to="" class="tool-btn refresh" :class="{'':index =='refresh'}"
                             @click.native="headerButton('refresh')">
                    <img src="../../../assets/header_img/symbols-refresh.png" alt="">
                </router-link>
                <div to="" class="tool-btn logout" :class="{'':index =='refresh'}" @click="logout">
                    <img src="../../../assets/header_img/symbols-guanji.png" alt="">
                </div>
            </div>
            <el-col>
            </el-col>
        </nav>
        <el-dialog title="Resto+" :visible.sync="syncDatabaseDialog" :close-on-click-modal="false">
            <span>{{$t('header.updataDialogTit1')}}</span><br/>
            <span style="color: red">{{$t('header.updataDialogTit2')}}</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="syncDatabaseDialog = false">{{$t('common.cancel')}}</el-button>
            <el-button type="primary" @click="syncDatabase">{{$t('common.sure')}}</el-button>
        </span>
      </el-dialog>

    </el-row>
</template>

<script>
    import bus from '@/utils/bus'
    import {getSession, setSession, getSessionShopDet} from '@/utils/auth'
    import {logout} from '@/api/login'
    import {mapGetters} from 'vuex'
    export default {
        name: 'Header',
        data() {
            return {
                index: '',
                userId:getSession('userId'),
                isActive: false,
                currentInput: false,
                name: 'header',
                urls: '',
                syncDatabaseDialog: false,
                loadingObj: {},
                //wsServerDataChangeCount: 0,
                searchValue: '',
                shopModel: '',
                shopDet: {},
                closeBusinessModal: false,
                ifCashbox: false,
                closeBusinessPassword: '',   //结店口令
            };
        },
        computed: {
            ...mapGetters({
                wsServerDataChangeCount: 'wsServerDataChangeCount',
            })
        },
        created() {
            this.shopDet = JSON.parse(getSessionShopDet())
            this.shopModel = this.shopDet.shopMode;
        },

        mounted() {
            let that = this;
            var path = this.$router.history.current.path;
            var pathString = path.split('/').splice(1, 1).toString();
            this.headerButton(pathString);
            this.startEventListen()
            this.getKey();
        },
        beforeDestroy() {
            this.removeEventListen();
        },
        methods: {
            startEventListen() {
                let that = this;
                //  搜索事件监听
                bus.$on("searchKey", (val) => {
                    document.getElementById('in-search').focus();
                    this.searchValue = val;
                });
                bus.$on("scanPaySuccess", () => {
                    this.$notify({title: "Resto+", message: "扫码支付成功", type: "success", duration: 3000});
                })
                bus.$on('close-business', function (value) {
                    that.closeBusinessPassword = value;
                });
            },
            removeEventListen() {
                bus.$off("searchKey");
                bus.$off("scanPaySuccess");
                bus.$off("close-business");
            },

            goHome(){
                setSession("distribution_mode_id", 1);
            },

            headerButton(type) {
                this.index = type;
                if (type == 'update') {
                    console.log(`------点击了更新数据`);
                    return this.syncDatabaseDialog = true;
                }
                if (type == 'serach') {
                    this.currentInput = "true";
                    return bus.$emit("show-keyboard", this.currentInput)
                }
                if (type == 'refresh') return this.getRefresh();


            },
            opencashbox() {
                console.log("---打开钱箱");

            },
            logout() {
                let that = this;
                this.$confirm(this.$t('header.logoutTips'), this.$t('common.tips'), {confirmButtonText: this.$t('common.sure'), cancelButtonText: this.$t('common.cancel'), type: 'info'})
                    .then(() => {
                        logout({user_id:that.userId}).then(response => {
                            if(response.ok){
                                // this.$message.success('已退出登录！');
                                that.$store.dispatch('FedLogOut').then(() => {
                                    that.$router.push({path: '/login'});
                                })
                            }else {
                                this.$message.error('退出登录失败！');
                            }
                        })
                    }).catch(() => {
                });
            },

            //-----------------
            //      搜索 start
            //-----------------
            getKey(searchKey) {

                var that = this;

                /*document.onkeydown = function () {
                    var oEvent = window.event;
                    if (oEvent.keyCode == 70 && event.ctrlKey) {
                        document.getElementById('in-search').focus()
                        that.currentInput = "true";
                    }
                }*/
                var matchSearch;
                var search = function (searchKey) {
                    searchKey = searchKey
                    bus.$emit("searchKey", searchKey);
                };
                document.getElementById('in-search').onkeydown = function () {
                    console.log('in-searchdddd')
                    var self = this;
                    //clearTimeout(search);
                    matchSearch = setTimeout(function () {
                        that.searchValue = self.value
                        search(self.value);
                    }, 200);
                };
            },
            clearSearchValue() {
                // 这里将监听到的值派发出去
                document.getElementById("in-search").value = '';
                this.searchValue = '';
                bus.$emit("searchKey", '')
                bus.$emit("clearValue", "清除")
            },
            //-----------------
            //      搜索 end
            //-----------------


            // 更新数据
            syncDatabase() {
                this.$socket.emit('updateData', {userid: getSession('userId'), username: getSession('userName')});
                this.syncDatabaseDialog = false;
            },

            // 刷新
            getRefresh() {
                var path = this.$router.history.current.path;

                window.location.reload(path);
                //console.log('setSessionsetSession',getSession("distribution_mode_id"))
            },
            getFoodWeight() {
                var that = this;
            },


            openPassword() {
                this.closeBusinessPassword = "";
                this.closeBusinessModal = true;
            },


            closeBusinessDialog() {
                this.closeBusinessModal = false;
                this.closeBusinessPassword = ''
            },
            focus() {
                this.closeBusinessPassword = "";
            },
            saveChange() {
                let that = this;
                var superPwd = JSON.parse(sessionStorage.getItem("superPwd"));
                var inputSuperPwd = this.$utils.pwdEncryption(this.closeBusinessPassword);
                if (inputSuperPwd == '') {
                    this.$message.warning('身份口令不能为空');
                    return;
                }
                if (inputSuperPwd != superPwd) {
                    this.$message.error('身份口令错误');
                    return;
                }

                this.closeBusinessModal = false;
                this.closeBusinessPassword = '';
                this.opencashbox()
            },

        },
        /*sockets: {
            updateDataUser(value) {
                console.log(`${value.username}发起了更新数据！`)
                console.log(`updateDataUser->开始${JSON.stringify(value)}`)
            },
            updateDataPace(value) {
                console.log(`当前进度${value.schedule}%`)
            },
            updateDataFulfil(value) {
                console.log(`${value.username}完成了更新数据！`)
            },
        },*/

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .up-data {
        position: absolute;
        top: 10px;
        left: 100px;
        height: 40px;
        line-height: 20px;
    }

    .header {
        /*position: absolute;*/
        height: 64px;
        width: 100%;
        line-height: 60px;
        background-color: #2f2f2f;
    }

    nav {
        width: 99%;
        margin: 0 auto;
        height: 100%;
    }

    .logo-wrapper {
        height: 100%;
    }

    .logo {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 11px;
        top: 15px;
        border-radius: 50%;
    }

    .tool-bar {
        text-align: left;
    }

    .tool-btn {
        display: inline-block;
        font-weight: bold;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 64px;
        text-align: center;
        /*margin-left: 1%;*/
        margin-left: 10px;
        font-size: 18px;
        color: #fff;
    }

    .tool-btn:hover {
        cursor: pointer;
    }

    .input {
        /*position: absolute;*/
        width: 140px;
        height: 36px;
        border-radius: 5px;
        margin-left: 20px;
        padding-left: 5px;
        top: 14px;
        /*right: 200px;*/
        color: #999;
        background-color: #fff;
        font-size: 16px;
    }

    .active {
        color: #fff;
        background-color: #000;
        height: 64px;
        border-bottom: 5px solid #FFBF34;
    }

    .opencashbox {
        background-color: #2f2f2f;
        height: 100%;
        position: absolute;
        right: 160px;
        color: #fff;
    }

    .opencashbox > img {
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
    }

    .refresh {
        background-color: #2f2f2f;
        height: 100%;
        position: absolute;
        right: 80px;
        color: #fff;
    }

    .refresh > img {
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
    }

    .jiange {
        display: inline-block;
        position: absolute;
        top: 22px;
        right: 70px;
        height: 20px;
        width: 2px;
        background-color: #FFFFFF;
        z-index: 99999;
    }

    .logout {
        background-color: #2f2f2f;;
        height: 100%;
        position: absolute;
        right: 0px;
        color: #fff;
    }

    .logout > img {
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
    }

    .el-badge__content.is-fixed {
        top: 10px;
        right: 15px;
    }

    .el-badge__content {
        border-color: black;
        height: 20px;
        line-height: 20px;
    }

    .clear-search {
        color: #252525;
        /*position: absolute;*/
        top: 25px;
        margin-left: -30px;
        z-index: 1999;
        cursor: pointer;
    }

</style>
