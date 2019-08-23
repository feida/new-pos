<template>
  <div class="packaging">
    <el-col :span="7" class="left">
      <router-view></router-view>
    </el-col>
    <el-col :span="17" class="right">
      <pagination style="right: 18%"></pagination>
      <order-toolbar   v-on:changeCurrentOrderType = "changeOrderType" ></order-toolbar>
      <el-row class="order-wrapper" style="padding: 0px;margin: 0px;">
        <el-col :span="24" class="order-info" id="tableInfo">
          <el-row >
            <template>
              <packageItem :tableAndOrderList="tableAndOrderList" :currentTable.sync="currentOrder"></packageItem>
            </template>
          </el-row>
        </el-col>
      </el-row>
      <bottomToolbar style="position: absolute; bottom:0;left: 0;" :currentTable="currentTable" ></bottomToolbar>
    </el-col>
  </div>
</template>

<script>
  import orderToolbar from '../component/order-toolbar.vue';
  import bottomToolbar from '../component/bottom-toolbar.vue';
  import packageItem from '../component/package-item'
  import pagination from '../component/basic/pagination';
  import { mapGetters, mapActions } from 'vuex';
  import bus from '../../../utils/bus'
  export default {
    name: 'packaging',
    components:{
      orderToolbar,
      bottomToolbar,
      packageItem,
      pagination
    },
    data () {
      return {
        orderList: [],
        currentOrder: {},
        currentTable: {
            table_number: '',
        },
        orderStateCountObj:{
          payOrderCount: 0,
          waitOrderCount: 0,
          noPayOrderCount: 0,
          payingOrderCount: 0
        },
        searchKey: "",
        shopDet:{},
        shopModel: '',
        callCount: {
          waitCallCount: 0,
          hasCalledCount: 0,
        },
        page_index: 1,
        totalPage: 0,
        curPage: 0,
        clientWidth: 0,
        currentOrderType: "all",
      };
    },
    created(){
      this.shopDet = JSON.parse(sessionStorage.getItem("shopDet"));
      this.shopModel = this.shopDet.shopMode;
      //this.allOrder()
      //this.removeEventListen();
    },
    computed: {
      ...mapGetters({
        tableAndOrderList: 'tableAndOrderList',
        orderInfo: 'orderInfo',
        pageInfo: 'pageInfo'
      })
    },
    mounted(){
      let that = this;
      //this.startEventListen();
      this.getClientWidth();
      this.initTableAndOrderList()
    },
    beforeDestroy () {
      this.removeEventListen();
    },
    methods:{
        changeOrderType(type){
            this.currentOrderType = type
            this.$store.commit("setOrderType", type)
            this.$router.push("/table/packaging"+"?orderType=" + type);

        },
        initTableAndOrderList (){
            this.currentOrderType = this.$route.query.orderType;
            if (this.currentOrderType == 'undefined') this.currentOrderType = 'all'
            if(this.shopModel == 2 || this.shopModel == 7) {
                if(this.currentOrderType == 'all') {
                    this.$router.push('/tvorder?orderType=all');
                } else if (this.currentOrderType == 'wait') {

                }
            } else {
                console.log('this.currentOrderType',this.currentOrderType)
                //this.$store.dispatch('getAreaList')
                let pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
                let query = {
                    page_index: pageIndex,
                    ver_code: '',
                    table_number: '',
                    distribution_mode: 3
                }
                this.$store.dispatch('getWaitAndNoPayOrderList',query)
            };
        },
      getClientWidth() {
        this.clientWidth = document.getElementById("tableInfo").clientWidth;
      },
      /*allOrder (){
        let pageIndex = sessionStorage.getItem("pageIndex") || this.pageInfo.pageIndex;
        var Obj = {distributionModeId: 3, pageIndex: pageIndex, searchKey: "", tableNumber: ""}
        this.$store.dispatch('getWaitAndNoPayOrderList', Obj);
        this.getOrderStateCount();
        this.currentOrderType = 'all'
        this.$router.push("/table/packaging"+"?orderType=all");
      },
      payOrder (){
        var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
        this.$store.dispatch('getPayOrder', Obj)
        this.getOrderStateCount();
        this.currentOrderType = 'payOrder'
        this.$router.push("/table/packaging"+"?orderType=payOrder");
      },
      waitOrder (){
        var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
        this.$store.dispatch('getWaitOrderList', Obj)
        this.getOrderStateCount();
        this.currentOrderType = 'waitOrder'
        this.$router.push("/table/packaging"+"?orderType=waitOrder");
      },
      noPayOrder (){
        var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
        this.$store.dispatch('getNoPayOrderList', Obj)
        this.currentOrderType = 'noPayOrder'
        this.getOrderStateCount();
        this.$router.push("/table/packaging"+"?orderType=noPayOrder");
      },
      payingOrder (){
        var Obj = {distributionModeId: 3, pageIndex: this.page_index, searchKey: this.searchKey, tableNumber: this.tableNumber}
        this.$store.dispatch('getPayingOrderList', Obj)
        this.$router.push("/table/packaging"+"?orderType=payingOrder");
        this.currentOrderType = 'payingOrder'
        this.getOrderStateCount();
      },

      getOrderStateCount(){
        orderStateCount(3, (data)=>{
          this.orderStateCountObj = data;
        })
      },*/

      startEventListen() {
        let that = this;
        bus.$on('wsNewOrder', ()=>{
          this.allOrder(true);
          this.getOrderStateCount();
        });
        bus.$on('searchKey',function(searchKey){
          setTimeout(function () {
            if(that.shopModel == 2 || that.shopModel == 7 || (that.shopModel == 6 && that.shopDet.allowFirstPay == 0)){  // 先付
              that.searchKey = searchKey
              that.tableNumber = searchKey
            }else if(that.shopModel == 6 && that.shopDet.allowAfterPay == 0){  // 后付 结算单
              that.tableNumber = searchKey
            }
            that.searchTable();
          }, 50)
        });
      },
      removeEventListen() {
        // 清除注册的监听事件  避免重复注册，重复触发
        bus.$off("wsNewOrder");
        bus.$off("searchKey");
      },
      searchTable() {
        let path = this.$route.path;
        if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "payOrder") {
          this.payOrder();
        } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "waitOrder") {
          this.waitOrder()
        } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "noPayOrder") {
          this.noPayOrder()
        } else if (path.indexOf("table/packaging") != -1 && this.currentOrderType == "payingOrder") {
          this.payingOrder()
        } else if(path.indexOf("table/packaging") != -1 && (this.currentOrderType == "all" || this.currentOrderType == "undefined")){
          var Obj = {distributionModeId: 3, pageIndex: 1, searchKey: this.searchKey}
          this.$store.dispatch('getWaitAndNoPayOrderList', Obj);
        }
      },

      changeOrder(){ // 改单 退菜
        let that = this;
        selectOrderDiscount(this.$route.params.orderId, function (discountInfo) {
          if(discountInfo.orderPosDiscountMoney > 0){
            that.$message.warning(`【折扣：￥${discountInfo.orderPosDiscountMoney}】主订单或者子订单进行过折扣操作，暂不允许退菜！`);
            return;
          }
          if(discountInfo.eraseMoney > 0){
            that.$message.warning(`【抹零：￥${discountInfo.eraseMoney}】主订单或者子订单进行过抹零操作，暂不允许退菜！`);
            return;
          }
          bus.$emit("changeOrder","isChange");
        });
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .packaging{
    width: 100%;
    height: 100%;
  }
  .left{
    height: 100%;
    position: relative;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);
  }
  .right{
    height: 100%;
    padding-bottom: 50px;
    position: relative;
  }
  /*  table   begin   */
  .order-wrapper {
    height: 100%;
    background-color: #eeeeee;
    min-width: 665px;
  }
  .order-info {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    /*margin-top: 5px;*/
    /*padding: 5px;*/
  }
  .order-card {
    margin-bottom: 15px;
    cursor: pointer;
  }
  .order-card-active {
    box-shadow:-1px  0 #ffbf34, 0 -1px 0 #ffbf34, 0 1px 0 #ffbf34, 1px 0 0 #ffbf34;
    border: 1px solid #ffbf34;
    color: #ffbf34;
  }
  .order-card-pay-order {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 15px;
    background-color: #26bb02;
    border-radius: 50%;
    /*border-top: 50px solid #26bb02;*/
    /*border-left: 30px solid transparent;*/
  }
  .order-card-paying{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 15px;
    background-color: #F7BA2A;
    border-radius: 50%;
    /*border-top: 50px solid #F7BA2A;*/
    /*border-left: 30px solid transparent;*/
  }
  .order-card-no-pay {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 15px;
    background-color: #bb0202;
    border-radius: 50%;

    /*border-top: 50px solid #bb0202;*/
    /*border-left: 30px solid transparent;*/
  }
  .order-card-wait-order {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 15px;
    background-color: #025ebb;
    border-radius: 50%;
    /*border-top: 50px solid #025ebb;*/
    /*border-left: 30px solid transparent;*/
  }
  .order-number {
    width: 100%;
    font-size: 4vh;
    font-weight: bold;
    text-align: center;
  }
  .detail {
    text-align: center;
  }
  /*  table   end   */

  .bottom-tool {
    /*position: absolute;*/
    bottom: 0px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    background-color: #F6F6F6;
  }

  .order-page-wrapper{
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
