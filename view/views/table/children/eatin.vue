<template>
  <div class="eatin" v-loading.fullscreen.lock="fullscreenLoading">
    <el-col :span="7" class="left">
      <router-view></router-view>
    </el-col>
    <el-col :span="17" class="right">
      <pagination  style="right: 18%"></pagination>
      <!--<order-toolbar v-if="shopModel == 2 || shopModel == 7" :callCount=callCount v-on:all="allOrder(true, true)" v-on:pay="payOrder" v-on:wait="waitOrder"></order-toolbar>-->
      <order-toolbar   v-on:changeCurrentOrderType = "changeOrderType" ></order-toolbar>
      <el-row class="table-wrapper" style="padding: 0px;margin: 0px;">
        <el-col :span="(this.shopModel == 2 || this.shopModel == 7) ? 24 : 20" class="table-info" id="tableInfo" style="padding: 0px;margin: 0px;">
          <el-row >
            <template>
              <tableItem :tableAndOrderList="tableAndOrderList" :currentTable.sync="currentTable"></tableItem>
            </template>
          </el-row>
        </el-col>
        <!--右边区域-->
        <el-col  :span="4" class="area-wrapper" id="areaList" v-if="this.shopModel !=2 && this.shopModel !=7">
          <ul class="area-list" :style="{ height: familyWrapperHeight + 'px' }" id="familyWrapper">
            <li @click="choseAllTable(null)">
              <el-button class="area-item" :class="{'btn-active' : currentAreaId == null}">{{$t('common.all')}}</el-button>
            </li>
            <li v-for="(area, key) in areaList" :key="key" @click="choseTableArea(area)" v-show="currentOrderType == 'all'">
              <el-button class="area-item" :class="{'btn-active' : currentAreaId == area.id}">{{area.name}}</el-button>
            </li>
          </ul>
          <ul class="pageButton" id="pageButton">
            <li>
              <el-button class="page-button-item" style="border: 1px solid #666"  @click="getPages(0)" :class="selectCurrentPages == 0 ? 'pageButtonActive' : ''">
                {{$t('common.prePage')}}
              </el-button>
            </li>

            <li>
              <el-button class="page-button-item " @click="getPages(1)" style="border: 1px solid #666" :class="selectCurrentPages == 1 ? 'pageButtonActive' : ''">
                {{$t('common.nextPage')}}
              </el-button>
            </li>

          </ul>
        </el-col>
      </el-row>

        <!--底部订单操作栏 -->
      <bottomToolbar style="position: absolute; bottom:0;left: 0;"  :currentTable="currentTable"></bottomToolbar>
    </el-col>
  </div>
</template>

<script>
  import bus from '../../../utils/bus'
  import orderToolbar from '../component/order-toolbar.vue';
  import tableItem from '../component/table-Item.vue';
  import bottomToolbar from '../component/bottom-toolbar.vue';
  import pagination from '../component/basic/pagination';
  import {getSessionShopDet} from '@/utils/auth'
  import {orderStateCountApi} from '@/api/tableApi'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'eatin',
    components:{
      orderToolbar,
      bottomToolbar,
      tableItem,
      pagination
    },
    data () {
      return {
        fullscreenLoading: false,
        areaMap: {},
        currentAreaId: null,
        orderStateCountObj:{},
        selectCurrentPages:"3",
        tableMap: {},
        tableMapKeyOfNum: {}, // table map key 为 桌号
        tables: [],
        currentTable: {},
        changeTableDialog: {
          show: false,
          newTableNum: ""
        },

        tableSort: true,
        currentPage: '',

        shopModel: '',

        tvOrderList: [],
        callCount: {
          waitCallCount: 0,
          hasCalledCount: 0,
        },
        refreshCount: 0,
        isActiveButton: '',
        currentOrderType: "all",  // wait：待叫号  ； called：已叫号
        shopDet: {},
        page_index: 1,
        totalPage: 0,
        curPage: 0,
        clientWidth: 0,
        tableTotalPage: 0,
        tableNumber: '',
        searchKey: "",
        syncOrderIfo: '',
        familyWrapperHeight: 0,
          isUpdate: true
      };
    },
    watch: {
    },
    computed: {
      ...mapGetters({
        areaList: 'areaList',
        tableAndOrderList: 'tableAndOrderList',
        orderInfo: 'orderInfo',
        pageInfo: 'pageInfo',
      })
    },
    created: function () {
        this.shopDet = JSON.parse(getSessionShopDet())
        this.shopModel = this.shopDet.shopMode;
    },
    mounted(){
      var that = this;
      this.initTableAndOrderList();
      this.getClientWidth();
      if(this.shopModel != 2) {
          this.familyWrapperHeight = document.body.clientHeight - 230 - document.getElementById("pageButton").offsetHeight;
      }
    },
    beforeDestroy () {
     // this.removeEventListen();
    },
    methods:{
        changeOrderType(type){
            this.currentOrderType = type
            this.$store.commit("setOrderType", type)
            this.$router.push("/table/eatin"+"?orderType=" + type);

        },
      initTableAndOrderList (){
        this.currentOrderType = this.$route.query.type || 'waitOrder';
       // if (this.currentOrderType == 'undefined') this.currentOrderType = 'all'
        if(this.shopModel == 2 || this.shopModel == 7) {
          if(this.currentOrderType == 'all') {
            //this.$router.push('/tvorder?orderType=all');
          } else if (this.currentOrderType == 'waitOrder') {
              var Obj = {search_code: this.searchKey,};
              this.$store.dispatch('getWaitCallTPOrderList', Obj)
          } else if (this.currentOrderType == 'payOrder') {
              var Obj = { search_code: this.searchKey,};
              this.$store.dispatch('getHasCallTPOrderList', Obj);
          }
        } else {
            console.log('this.currentOrderType',this.currentOrderType)
            //if (this.currentOrderType !== 'all') return
            this.$store.dispatch('getAreaList')
            let pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
            let query = {
                page_size: 20,
                page_index: pageIndex,
                search_code: '',
                distribution_mode_id: 1
            }
            this.$store.dispatch('getAllTableAndOrderList',query)
        };
      },

      getClientWidth() {
          this.clientWidth = document.getElementById("tableInfo").clientWidth;
      },

      choseAllTable (){
        this.currentAreaId = null
        var Obj = {distribution_mode_id: 1, page_index:  this.pageInfo.pageIndex, page_size: 20, search_code: this.searchKey}
        this.$store.dispatch('getAllTableAndOrderList', Obj)
      },
      choseTableArea(area){
        this.$router.push('/table/eatin?orderType=all')
        this.currentAreaId = area.id;
        let query = {
            page_index: 1,
            area_id: area.id
        }
        this.$store.dispatch('getAllTableAndOrderByAreaId', query)
      },

      getPages (pageNumbers){
        this.currentPage = pageNumbers;
        this.selectCurrentPages = pageNumbers;
        var articleInfo = document.getElementById("familyWrapper");
        switch (pageNumbers) {
          case 0:
            articleInfo.scrollTop -= articleInfo.clientHeight;
            break;
          case 1:
            articleInfo.scrollTop += articleInfo.clientHeight;
            break;
        }
      },
      formatMoney(money){
        return this.$utils.formatMoney(money);
      },


      searchTable(searchKey) {
        let orderType = this.$route.params.orderType
       if(this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "payOrder"){
          this.payOrder();
        }else if(this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "waitOrder") {
          this.waitOrder()
        }else if(this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "noPayOrder") {
          this.noPayOrder()
        }else if(this.$route.path.indexOf("table/eatin") != -1 && this.currentOrderType == "payingOrder") {
          this.payingOrder()
        } else {
         var Obj = {distributionModeId: 1, pageIndex:  1, searchKey: searchKey}
         this.$store.dispatch('getAllTableAndOrderList', Obj)
       }
      },

      },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .eatin{
    width: 100%;
    height: 100%;
  }
  .left{
    height: 100%;
    position: relative;
    background-color: #fff;
    /*box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);*/
  }
  .right{
    height: 100%;
    padding-bottom: 50px;
    position: relative;
  }
  /*  table   begin   */
  .table-wrapper {
    height: 100%;
    background-color: #eee;
  }
  .table-info {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 5px;
    padding: 5px;
  }
  .table-card {
    height: 17vh;
    /*width: 88px;*/
    /*margin-bottom: 5px;*/
    /*margin-top: 5px;*/
    cursor: pointer;
  }
  .table-card-active {
    box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;
    border: 1px solid #ffbf34;
    color: #ffbf34;
  }
  .table-card-pay-order {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0;
    height: 0;
    width:15px;
    height: 15px;
    background:green;
    border-radius: 50%;
    /*border-top: 50px solid #26bb02;*/
    /*border-left: 30px solid transparent;*/
  }
  .table-card-no-pay {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0;
    height: 0;
    width:15px;
    height: 15px;
    background: #ef5350;
    border-radius: 50%;
    /*border-top: 50px solid #bb0202;*/
    /*border-left: 30px solid transparent;*/
  }
  .table-card-paying{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0;
    height: 0;
    width:15px;
    height: 15px;
    background: #ffbf34;;
    border-radius: 50%;
    /*border-top: 50px solid #F7BA2A;*/
    /*border-left: 30px solid transparent;*/
  }
  .table-card-wait-order {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0;
    height: 0;
    width:15px;
    height: 15px;
    background: #025ebb;;
    border-radius: 50%;
    /*border-top: 50px solid #025ebb;*/
    /*border-left: 30px solid transparent;*/
  }

  .table-number {
    width: 100%;
    /*font-size: 4vh;*/
    font-size: 34px;
    /*font-weight: bold;*/
    text-align: center;
  }
  .detail {
    text-align: center;
  }
  /*  table   end   */

  /*  area  bagin   */
  .area-wrapper {
    height: 100%;
    background-color: #FFFFFF;
    /*border: 2px solid #F2F2F2;*/
    overflow-y: hidden;
    overflow-x: hidden;
    text-align: center;
    position: absolute;
    right: 0;
    padding-bottom: 60px;
  }
  .area-list{
    width: 100%;
    padding: 0;
    margin: 0;
    height: 350px;
    overflow-y: hidden;
  }

  .area-item {
    width: 100%;
    /*margin-top: 5px;
    margin-bottom: 10px;*/
    min-height: 50px;
    padding: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 18px;
    line-height: 20px;
    white-space: normal;
    position: relative;
    border: none;
  }
  .page-button-item {
    width: 80%;
    /*background-color: #FFBF34;*/
    text-align: center;
    margin-bottom: 10px;
    padding-left: 15px;
    color: #1f2d3d;
    border: 1px solid #666;
  }
  .area-wrapper .btn-active{
    color: #333 !important;
    background-color: #eee;
    border-radius: 0 !important;
    border: none;
    border-left: 5px solid #ffbf34 !important;
  }
  .area-wrapper button {
    border:none;
    color: #333;
    font-size: 18px;
    padding: 10px 10px;
  }
  .area-wrapper button:hover {
    border-color: #ffbf34;
    color: #333;
  }
  .pageButton {
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 50px;

  }
  /*  area  end   */

  .btn-number{
    width:100%;
    height:50px;
    margin-top: 15px;
    background-color: #f6f6f6;
    font-size:22px;
    font-weight: bold;
  }

  /*  滚动条   begin   */
  #tableInfo{
    overflow-y: auto;
  }
  #tableInfo::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  #tableInfo::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
    /*background: rgba(0,0,0,0.5);*/
  }
  #tableInfo::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  /*  滚动条   end*/

  .pageButtonActive{
    background-color: #ffbf34;
    color: #fff!important;
    border: none!important;
  }

  button:disabled{
    border:1px solid #DDD;
    background-color:#eef1f6;
    color: #bfcbd9;
  }

  .el-badge__content.is-fixed {
    top: 8px;
    right: 15px;
    z-index: 9999;
  }
  .el-badge__content {
    height: 20px;
    line-height: 20px;
  }
  .order-page-wrapper{
    position: absolute;
    top:35%;
    right: 30px;
    z-index: 10;
  }
  .order-page-wrapper-nomal {
    position: absolute;
    top:35%;
    right: 30px;
    z-index: 10;
  }
  .order-page-wrapper > .pre-page{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #000000;
    color: #FFF;
    border-radius:50%;
    margin-bottom: 50px;
    cursor: pointer;
    opacity: 0.6;
  }
  .order-page-wrapper > .next-page{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #000000;
    color: #FFF;
    border-radius:50%;
    cursor: pointer;
    opacity: 0.6;
  }
</style>
