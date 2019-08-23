<template>

    <!-- 电视叫号模式 -->
    <div class="table-wrapper" v-if="shopModel == 2 || shopModel == 7">
      <div class="table-item" @click="choseTable(table)"
           v-for="(table, index) in tableAndOrderList" v-if="tableAndOrderList.length > 0" :key="index"  :class="cardActiveClass(table)">
        <!--<img  style="width: 50px; position: absolute; left: 5px;top: 5px;" src="../../../assets/hd_vip.png" v-if="table.flag == 1" />-->

        <el-badge v-if="table.call_times > 0" :value="table.call_times" class="item" style="position: absolute; margin-left: 45px;"></el-badge>
        <p class="table-number" style="font-size: 28px;">{{table.ver_code || table.table_number || $t('tableItem.unknown')}}</p>
        <div style="margin-top: 30px;"></div>
        <div>
          <span v-if="table.distribution_mode_id == 1">{{$t('tableItem.eatin')}}</span>
          <span v-if="table.distribution_mode_id == 3">{{$t('tableItem.packaging')}}</span>
        </div>
        <p>{{getTimeDiff(table.create_time)}}</p>
      </div>
    </div>

  <div class="table-wrapper" v-else>
    <div class="table-item" :class="cardActiveClass(table)"
         v-for="(table, index) in tableAndOrderList" :key="index"  @click="choseTable(table)">
      <div :class="tableCardClass(table)" v-if="table.order_id"></div>
      <p class="table-number">{{table.table_number || $t('tableItem.unknown')}}</p>
      <div class="detail" v-if="table.order_id">
        <p style="margin-top: 19px;"><strong>{{table.order_customer_count || '-'}} / {{table.customer_count}}</strong> </p>
        <p v-if="table.production_status == 0" style="height: 20px">{{$t('tableItem.waitOrder')}}</p>
        <p v-else style="height: 20px"></p>
        <p>{{getTimeDiff(table.create_time)}}</p>
      </div>
      <div class="detail" v-else>
        <p style="margin-top: 39px; font-size: 2em">{{$t('tableItem.empty')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import bus from  '../../../utils/bus'
  import {getTableInfo} from  '@/api/tableApi'
  import {getSessionShopDet, getSession} from '@/utils/auth'
  export default {
        name: "tableItem",
        props: ['tableAndOrderList'],
      data() {
        return {
          clientWidth: 0,
          currentTable: {},
          shopModel: 6,
          tempInfo:{}
        };
      },
      created() {
        this.shopDet = JSON.parse(getSessionShopDet())
        this.shopModel = this.shopDet.shopMode;
      },
      mounted() {
        this.clientWidth = document.getElementById("tableInfo").clientWidth;
        bus.$on("choose",function () {
          this.choseTable(this.tableAndOrderList[0]);
        })
      },
      beforeDestroy () {
        bus.$off("choose")
      },
      watch: {
        tableAndOrderList: function (params) {
          this.autoChoseTable()
        },
        currentTable: function(newValue, oldValue) {
          this.$emit('update:currentTable', newValue)
        }
      },
      methods: {
        formatMoney(money){
          return this.$utils.formatMoney(money);
        },
        choseTable (table) {
          this.currentTable = table;
          let orderType = this.$route.query.orderType;
          if (this.shopModel == 2 || this.shopModel == 7) {
            //if(!table.ver_code) return;
            this.$router.push(`/table/eatin/detail/${table.id}?verCode=${table.ver_code}&type=${orderType}`);
          }else if(table.order_id){
            this.$router.push(`/table/eatin/detail/${table.order_id}?tableNumber=${table.table_number}&orderType=${orderType}`);
          }else{
              let query = {
                  table_number: table.table_number,
                  distribution_mode_id: getSession("distribution_mode_id"),
              }
              getTableInfo(query)
                  .then(res => {
                      console.log('getTableInfo',res)
                      if(res.ok){
                          let resultData = res.data[0]
                          this.tempInfo = res.data[0]
                          if(resultData.order_id){
                              this.$router.push(`/table/eatin/detail/${resultData.order_id}?tableNumber=${resultData.table_number}&orderType=${orderType}`);
                          } else {
                              this.$router.push(`/table/eatin/console/${table.table_number}?orderType=${orderType}`);
                          }
                      }
                  })
          }
        },
        cardActiveClass (table){
          if(this.shopModel == 2 ) {
              return {'table-card-active' : this.currentTable.id == table.id}
          }else {
              if(table.order_id){
                  return { 'table-card-active' : table.order_id == this.$route.params.orderId}
                  //return {'table-card-active' : (this.currentTable.id + (this.currentTable.order_id ? this.currentTable.order_id : "")) == (table.id + table.order_id)};
              }else{
                  //return {'table-card-active' : this.currentTable.id == table.id};
                  return { 'table-card-active' : table.table_number == this.$route.params.tableNumber}
              }
          }

        },
        tableCardClass (table){
          var cardClass = [];
          if(table.order_id){
            if(table.production_status === 0){  //  待下单
              cardClass.push("table-card-wait-order");
            }else if(table.order_state === 1 && (table.pay_mode === 3 || table.pay_mode === 4)){ //  付款中
              cardClass.push("table-card-paying");
            }else if(table.order_state === 1){  //  未支付
              cardClass.push("table-card-no-pay");
            }else{  //  已支付
              cardClass.push("table-card-pay-order");
            }
          }
          return cardClass;
        },

        autoChoseTable(){  // 自动定位桌号
          var tableNumber = this.$route.params.tableNumber;
          var orderId = this.$route.params.orderId;
          if(tableNumber){
            var tables = this.tableAndOrderList && this.tableAndOrderList.length > 0 && this.tableAndOrderList.map(item=>item).filter(item => item.table_number == tableNumber)
            if(tables && tables.length > 0) {
              this.choseTable(tables[0]);
            } else {
              if(this.tableAndOrderList && this.tableAndOrderList.length > 0){
                this.choseTable(this.tableAndOrderList[0]);
              }else{
                this.$router.push("/table/eatin?orderType=all");
              }
              //this.choseTable(this.tableAndOrderList[0]);
            }
          }else if(orderId && orderId!='undefined'){
            //  路由参数中添加 tableNumber 查询参数，在这里直接定位到桌位，然后自动选择。
            var _num = this.$route.query.tableNumber;
            if(_num && _num != "undefined"){
              var tables = this.tableAndOrderList && this.tableAndOrderList.length > 0 && this.tableAndOrderList.map(item=>item).filter(item => item.table_number == _num)
              if(tables && tables.length > 0) {
                this.choseTable(tables[0]);
              } else {
                if(this.tableAndOrderList && this.tableAndOrderList.length > 0){
                  this.choseTable(this.tableAndOrderList[0]);
                }else{
                  this.$router.push("/table/eatin?orderType=all");
                }
              }
            }else{
                if(this.shopModel == 2) {
                    this.$router.push("/table/eatin/detail/" + orderId + '?type=waitOrder');
                }else {
                    this.$router.push("/table/eatin/detail/" + orderId + '?orderType=all');
                }
            }
          }else{
            if(this.tableAndOrderList && this.tableAndOrderList.length > 0){
              this.choseTable(this.tableAndOrderList[0]);
            }else{
              this.$router.push("/table/eatin?orderType=all");
            }
          }

        },

        getTimeDiff(date){  //  得到相差的分钟值
          var currentDate = new Date().getTime();
          var diff = currentDate - date;
          var m = parseInt(diff / (1000*60));
          if(diff <= 0){
            return this.$t('tableItem.justNow');
          }else if(m == 0){
            return parseInt(diff / (1000)) + this.$t('tableItem.sec');
          }else if(m < 60){
            return m + this.$t('tableItem.min');
          }else{
            return parseInt(m / 60) + this.$t('tableItem.hours') ;
          }
        },
      }
    }
</script>

<style scoped>
  .table-wrapper {
    display: flex;
    justify-content: start;
    flex-wrap: wrap
  }
  .table-item {
    background-color: #FFFFFF;
    /*margin-left: 10px;*/
    /*margin-top: 10px;*/
    text-align: center;
    position: relative;
    /*height: 17vh;*/
    width: 19%;
    height: 24%;
    margin: 0.5%;
    /*width: 88px;*/
    /*margin-bottom: 5px;*/
    /*margin-top: 5px;*/
    cursor: pointer;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .table-number {
    width: 100%;
    /*font-size: 4vh;*/
    font-size: 34px;
    /*font-weight: bold;*/
    text-align: center;
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
  .detail {
    text-align: center;
  }
</style>
