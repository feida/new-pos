<template>
  <el-row v-if="shopModel == 2 || shopModel == 7 " class="order-toolbar">

    <div class="order-state" v-if="isTakeout">
      <el-button :class="takeoutClass['eleme']" @click="choseTakeOutType('eleme')">{{$t('order_toolbar.elemBtn')}}
      </el-button>
      <el-button size="large" :class="takeoutClass['meituan']" @click="choseTakeOutType('meituan')">
        {{$t('order_toolbar.meituanBtn')}}
      </el-button>
      <el-button size="large" :class="takeoutClass['baidu']" @click="choseTakeOutType('baidu')">
        {{$t('order_toolbar.baiduBtn')}}
      </el-button>
    </div>

    <div class="order-state" v-else>
      <el-button :class="stateClass['all']" @click="allOrder('all')">
        {{$t('order_toolbar.diandanBtn')}}
      </el-button>
      <el-button :class="stateClass['wait']" @click="choseOrderState('waitOrder')">
        {{$t('order_toolbar.waitCallBtn')}}
        <sup class="el-badge__content is-fixed"
             v-if="callStateCount && callStateCount.waitCallTPOrderCount && callStateCount.waitCallTPOrderCount > 0">{{callStateCount.waitCallTPOrderCount}}</sup>
      </el-button>
      <el-button :class="stateClass['pay']" @click="choseOrderState('payOrder')">
        {{$t('order_toolbar.hasCalledBtn')}}
        <sup class="el-badge__content is-fixed"
             v-if="callStateCount && callStateCount.hasCallTPOrderCount>0">{{callStateCount.hasCallTPOrderCount}}</sup>
      </el-button>
    </div>

    <div class="order-mode" style="float: right;">
      <el-badge  class="item">
        <el-button size="large" :class="modeActiveClass('takeout')" @click="switchPage('/table/takeout',2)">
          {{$t('order_toolbar.takeoutBtn')}}
        </el-button>
      </el-badge>
      <el-badge  class="item">
        <el-button size="large" :class="modeActiveClass('eatin')" @click="switchPage('/table/eatin',1)">
          {{$t('order_toolbar.eatinOrPackagingBtn')}}
        </el-button>
      </el-badge>
    </div>
  </el-row>
  <el-row class="order-toolbar" v-else>
    <div class="order-state" v-if="isTakeout">
      <el-button :class="takeoutClass['eleme']" @click="choseTakeOutType('eleme',1)">{{$t('order_toolbar.elemBtn')}}
      </el-button>
      <el-button size="large" :class="takeoutClass['meituan']" @click="choseTakeOutType('meituan',2)">
        {{$t('order_toolbar.meituanBtn')}}
      </el-button>
      <el-button size="large" :class="takeoutClass['baidu']" @click="choseTakeOutType('baidu',3)">
        {{$t('order_toolbar.baiduBtn')}}
      </el-button>
    </div>
    <div class="order-state" v-else>
      <el-button :class="stateClass['all']" @click="allOrder('all')">
        {{$t('order_toolbar.allTableBtn')}}
      </el-button>
      <el-button :class="stateClass['pay']" @click="payOrder('payOrder')"
                 :disabled="orderStateCount.payOrderCount >0 ? false : true">
        {{$t('order_toolbar.haspayBtn')}}
        <sup class="el-badge__content is-fixed"
             v-if="orderStateCount.payOrderCount">{{orderStateCount.payOrderCount}}</sup>
      </el-button>
      <el-button :class="stateClass['wait']" @click="waitOrder('waitOrder')"
                 :disabled="orderStateCount.waitOrderCount > 0 ? false : true ">
        {{$t('order_toolbar.waitOrderBtn')}}
        <sup class="el-badge__content is-fixed"
             v-if="orderStateCount.waitOrderCount">{{orderStateCount.waitOrderCount}}</sup>
      </el-button>

      <el-button :class="stateClass['nopay']" @click="noPayOrder('noPayOrder')"

                 :disabled="orderStateCount.noPayOrderCount > 0 ? false : true ">
        {{$t('order_toolbar.noPayBtn')}}
        <sup class="el-badge__content is-fixed" v-if="orderStateCount.noPayOrderCount">{{orderStateCount.noPayOrderCount}}</sup>
      </el-button>

      <el-button :class="stateClass['paying']" @click="payingOrder('payingOrder')"
                 :disabled="orderStateCount.payingOrderCount > 0 ? false : true ">
        {{$t('order_toolbar.payingBtn')}}
        <sup class="el-badge__content is-fixed"
             v-if="orderStateCount.payingOrderCount">{{orderStateCount.payingOrderCount}}</sup>
      </el-button>
    </div>
    <div class="order-mode" style="float: right;height: 50px;">
      <el-button size="large" :class="modeActiveClass('takeout')" @click="switchPage('/table/takeout',2)">{{$t('order_toolbar.waimaiBtn')}}</el-button>
      <el-button size="large" :class="modeActiveClass('packaging')" @click="switchPage('/table/packaging',3)">
        {{$t('order_toolbar.packagingBtn')}}
      </el-button>
      <el-button size="large" :class="modeActiveClass('eatin')" @click="switchPage('/table/eatin',1)">
        {{$t('order_toolbar.eatinBtn')}}
      </el-button>
    </div>
  </el-row>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {getSessionShopDet} from '@/utils/auth'
    import {orderStateCountApi, waitCallTPAndhasCallTPOrderCount} from '@/api/tableApi'
    import bus from '../../../utils/bus'
    import {
        setSession,
        getSession,
    } from '@/utils/auth'
    export default {
        name: 'order-toolbar',
        //props: ['callCount','orderStateCount',],
        data () {
            return {
                page_index: 1,
                isTakeout: false,
                currentOrderState: "all",
                currentTakeoutType: "eleme",
                shopDet: {},
                shopModel: '',
                switchActive: false,
                searchKey: '',
                //orderStateCount:{},
                /*callCount: {
                    waitCallCount: 0,
                    hasCalledCount: 0,
                }*/
            };
        },
        created() {
            this.shopDet = JSON.parse(getSessionShopDet())
            this.shopModel = this.shopDet.shopMode;
            this.getOrderStateCount()
        },
        mounted(){
            let that = this;
            this.currentOrderState = this.$route.query.orderType ;
            if(this.shopModel == 2) {
                this.currentOrderState = this.$route.query.type
            }
            console.log('currentOrderState', this.currentOrderState)
            var currentPath = this.$route.path;
            if (currentPath == "/table/takeout") {
                this.isTakeout = true;
            }
            console.log('this.$route', this.$route)
            if (this.$route.query && this.$route.query.type) {
                let name = this.$route.query.type;
                this.currentOrderState = name;
                this.$emit(name);
            }

            bus.$on("callNumber", result => {
                this.getOrderStateCount()
            })
            bus.$on("cancelOrder", result => {
                console.log('cancelOrderallOrder')
                this.allOrder('all');
            })

            bus.$on("resetAllOrder", result => {
                console.log('resetAllOrder')
                this.allOrder('all');
            })
            bus.$on('searchKey', function (searchKey) {
                console.log('searchKey',searchKey)
                if (searchKey.indexOf("'") !== -1 || searchKey.indexOf("’") !== -1) return;
                if ((that.shopModel == 2 || that.shopModel == 7) || (that.shopModel == 6 && that.shopDet.allowFirstPay == 0)) {  // 先付
                    that.searchKey = searchKey
                    that.searchTable(searchKey)
                } else if (that.shopModel == 6 && that.shopDet.allowAfterPay == 0) {  // 后付 结算单
                    that.searchKey = searchKey
                    that.searchTable(searchKey)
                }
                //that.searchTable(searchKey);


            });
        },
        beforeDestroy () {
            bus.$off("cancelOrder");
            bus.$off("resetAllOrder");
            bus.$off("searchKey");
            bus.$off("callNumber");
        },
        computed: {
            ...mapGetters({
                areaList: 'areaList',
                tableAndOrderList: 'tableAndOrderList',
                orderInfo: 'orderInfo',
                pageInfo: 'pageInfo',
                orderStateCount: 'orderStateCount',
                callStateCount: 'callStateCount',
            }),
            takeoutClass (){
                return {
                    eleme: this.currentTakeoutType == "eleme" ? "takeout-type-active" : "",
                    meituan: this.currentTakeoutType == "meituan" ? "takeout-type-active" : "",
                    baidu: this.currentTakeoutType == "baidu" ? "takeout-type-active" : "",
                    shopModel: '',
                }
            },
            stateClass (){
                return {
                    all: this.currentOrderState == "all" ? "order-state-active" : "",
                    pay: this.currentOrderState == "payOrder" ? "order-state-active" : "",
                    wait: this.currentOrderState == "waitOrder" ? "order-state-active" : "",
                    nopay: this.currentOrderState == "noPayOrder" ? "order-state-active" : "",
                    paying: this.currentOrderState == "payingOrder" ? "order-state-active" : "",
                }
            }
        },
        methods: {

            searchTable() {
                if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "payOrder") {
                    this.payOrder(this.currentOrderState);
                } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "waitOrder") {
                    this.waitOrder(this.currentOrderState)
                } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "noPayOrder") {
                    this.noPayOrder(this.currentOrderState)
                } else if (this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderState == "payingOrder") {
                    this.payingOrder(this.currentOrderState)
                } else if(this.currentOrderState == "all"){
                    this.allOrder('all');
                }
            },
            choseTakeOutType (name,type){
                this.currentTakeoutType = name;
                this.$emit('waimaiSrc',type);
            },
            choseOrderState (name){
                if (this.shopModel == 2 || this.shopModel == 7) {
                    if (name == "all") {
                        this.$router.push('/tvorder?type=all');
                    }
                    if (name == "waitOrder") {
                        var Obj = {search_code: this.searchKey,};
                        this.$store.dispatch('getWaitCallTPOrderList', Obj)
                        this.getOrderStateCount();
                        this.$emit('changeCurrentOrderType', name);
                        this.$router.push("/table/eatin?type=waitOrder")
                    }
                    if (name == "payOrder") {

                        this.$router.push("/table/eatin?type=payOrder")
                        var Obj = { search_code: this.searchKey,};
                        this.$store.dispatch('getHasCallTPOrderList', Obj);
                        this.getOrderStateCount();
                    }

                }
                this.currentOrderState = name;
                this.$emit(name);
            },
            modeActiveClass (name){
                return this.$route.path.indexOf("/table/" + name) != -1 ? "order-mode-active" : null;
            },
            switchPage (path, mode){
                this.switchActive = true;
                setSession("distribution_mode_id", mode); // 堂食1  外带3
                if (this.$route.path.indexOf(path) != -1) {
                    this.choseOrderState(path);
                } else {
                    if (this.shopModel == 2 || this.shopModel == 7) {
                        let currentRoute = path.indexOf("/table/eatin") != -1;
                        if (currentRoute) {
                            this.$router.push("/table/eatin?type=waitOrder")
                        } else {
                            this.$router.push("/table/takeout");
                        }
                    } else {
                        this.$router.push(path + '?orderType=all');
                    }
                }
            },

            allOrder (name){  // 全部 是以 桌位 为基准
                if (this.shopModel == 2 || this.shopModel == 7) {
                    this.$router.push('/tvorder?type=all');
                } else {
                    let pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
                    let query = {
                        page_size: 20,
                        page_index: pageIndex,
                        search_code: this.searchKey,
                        //distribution_mode_id: 1
                        distribution_mode_id: getSession("distribution_mode_id")
                    }
                    if (getSession("distribution_mode_id") == 1) {
                        this.$store.dispatch('getAllTableAndOrderList', query)
                    } else if (getSession("distribution_mode_id") == 3) {
                        let params = {
                            page_index: pageIndex,
                            ver_code: '',
                            table_number: this.searchKey,
                            distribution_mode: 3
                        }
                        console.log('getWaitAndNoPayOrderList参数', params)
                        this.$store.dispatch('getWaitAndNoPayOrderList', params)
                    }
                    this.$emit('changeCurrentOrderType', name);
                }
                this.currentOrderState = name;
                this.getOrderStateCount();
            },
            payOrder (name){  // 支付订单 是以 订单为基准
                if (this.shopModel == 2 || this.shopModel == 7) {
                    var Obj = {searchKey: this.searchKey,};
                    this.$store.dispatch('getHasCallTPOrderList', Obj);
                } else {
                    let Obj = {
                        page_index: this.page_index,
                        ver_code: '',
                        table_number: this.searchKey,
                        distribution_mode: getSession("distribution_mode_id")
                    }
                    // var Obj = this.page_index
                    this.$store.dispatch('getPayOrder', Obj);
                    this.currentOrderState = name;
                    this.$emit('changeCurrentOrderType', name);
                }

                this.getOrderStateCount();
            },
            waitOrder (name){   //  待下单  是以 订单为基准
                if (this.shopModel == 2 || this.shopModel == 7) {
                    var Obj = {searchKey: this.searchKey};
                    this.$store.dispatch('getWaitCallTPOrderList', Obj)
                } else {
                    // var Obj =  this.page_index
                    let Obj = {
                        page_index: this.page_index,
                        ver_code: '',
                        table_number: this.searchKey,
                        distribution_mode: getSession("distribution_mode_id")
                    }
                    this.$store.dispatch('getWaitOrderList', Obj)
                    this.currentOrderState = name;
                    this.$emit('changeCurrentOrderType', name);
                }


                this.getOrderStateCount();
            },
            noPayOrder (name){    //  未支付 是以 订单为基准
                this.currentOrderState = name;
                // var Obj = this.page_index
                let Obj = {
                    page_index: this.page_index,
                    ver_code: '',
                    table_number: this.searchKey,
                    distribution_mode: getSession("distribution_mode_id")
                }
                this.$store.dispatch('getNoPayOrderList', Obj)
                this.currentOrderState = name;
                this.$emit('changeCurrentOrderType', name);
                this.getOrderStateCount();
            },
            payingOrder (name){   //  付款中 是以 订单为基准
                // var Obj = this.page_index
                let Obj = {
                    page_index: this.page_index,
                    ver_code: '',
                    table_number: this.searchKey,
                    distribution_mode: getSession("distribution_mode_id")
                }
                this.$store.dispatch('getPayingOrderList', Obj)
                this.currentOrderState = name;
                this.$emit('changeCurrentOrderType', name);
                this.getOrderStateCount();
            },

            getOrderStateCount(){
                let that = this;
                if (this.shopModel == 2 || this.shopModel == 7) {
                    waitCallTPAndhasCallTPOrderCount()
                        .then(res => {
                            console.log('waitCallTPAndhasCallTPOrderCount',res)
                            if(res.ok) {
                                this.$store.commit('setCallStateCount', res.data)
                                //that.callCount.waitCallCount = res.data.waitCallTPOrderCount;
                                //that.callCount.hasCalledCount = res.data.hasCallTPOrderCount;
                            }
                        })
                } else {
                    let distribution_mode_id = getSession("distribution_mode_id")
                    orderStateCountApi(distribution_mode_id)
                        .then(res => {
                            console.log('orderStateCount', res)
                            if (res.ok) {
                                //this.orderStateCount = res.data;
                                this.$store.commit('setOrderStateCount', res.data)
                            }
                        })
                }
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order-toolbar {
    height: 50px;
    width: 100%;
    line-height: 50px;
    padding-left: 5px;
    background-color: #ffffff;
    border-bottom: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  }

  .order-state {
    float: left;
  }

  .order-state button {
    position: relative;
    margin-left: 13px;
    padding: 10px 10px;
    font-size: 16px;
    border: 1px solid black;
    color: #333333;
    background-color: #f5f5f5;
  }

  .order-state-active {
    background-color: #ffbf34 !important;
    color: #fff !important;
    border-radius: 5px;
    border: none !important;
  }

  .takeout-type-active {
    background-color: #ffbf34 !important;
    color: #FFFFFF !important;
    border: none !important;
  }

  .order-mode {
    text-align: right;
    padding-right: 10px;
  }

  .order-mode button:hover {
    border-color: #FFFFFF;
    color: #333;
  }

  .order-mode-active {
    color: #FFFFFF !important;
    /*border:none;*/
    background-color: #ffbf34;
    border-color: #ffbf34;
  }

  .el-badge__content.is-fixed {
    top: 8px;
    right: 12px;
  }

  .el-badge__content {
    height: 20px;
    line-height: 20px;
    z-index: 10;
  }

  button:disabled {
    border: 1px solid #DDD;
    background-color: #eef1f6;
    color: #bfcbd9;
  }
</style>
