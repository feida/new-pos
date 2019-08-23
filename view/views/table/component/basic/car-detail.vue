<template>
  <div>
    <div class="detail-wrapper">
      <el-row>
        <el-col :span="8">
          <span style="display: inline-block;">
            <span v-if="orderInfo.data_origin == 1"><i class="iconfont icon-shouji" style="font-size: 28px" ></i></span>
            <i class="iconfont icon-computer3diannao" style="font-size: 28px" v-else></i>
          </span>
        </el-col>
        <el-col :span="8">
          <span style="display: inline-block; width: 68px; height: 36px; line-height: 36px; font-size: 20px; ">
            {{(shopModel == 2 || shopModel == 7) ? orderInfo.ver_code: (orderInfo.table_number|| $t('common.none'))}}
          </span>
        </el-col>
          <button class="detail-button" :class="showDetails == true ? 'details-button-active' : 'details-button' " @click="showDetail()">{{$t('carDetail.detail')}}</button>
        <!--<el-col :span="8">
        </el-col>-->
      </el-row>
    </div>
    <div  v-if="showDetails == true" style="height: 5px; background-color: #eee"></div>
    <div v-if="showDetails == true" style=" padding: 5px 18px; background-color: #FFFFFF">
      <ul style="">
        <li class=" details-item" style="display: inline-block; "  v-if="orderInfo.distribution_mode_id==1">{{$t('console.tanshi')}} {{orderInfo.table_number}}</li>
        <li class=" details-item" style="display: inline-block;" v-else="orderInfo.distribution_mode_id==3">{{$t('console.waidai')}} {{orderInfo.table_number}}</li>
        <li class=" details-item" style="display: inline-block;float: right; ">{{$t('console.peopleNum')}} :{{orderInfo.customer_count|| $t('common.none')}}</li>
        <li class=" details-item">{{$t('carDetail.verCode')}}  {{orderInfo.ver_code|| $t('common.none')}}</li>
        <li class=" details-item" v-for="(name, index) in detailList">{{detailList[index].name}}:{{detailList[index].value}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {getCustomerInfo} from '@/api/orderApi'
  import {formatDate} from '../../../../utils/generalUtil'
  export default {
    name: 'car-detail',
    props:['orderInfo', 'shopModel'],
    data() {
      return {
        showDetails: false,
        customerInfo: {},
        detailList: [],
        customer_status: false
      };
    },
    watch: {
      orderInfo: {
        handler: function (orderInfo) {
          // this.getCustomerInfo(orderInfo.customer_id);
        },
        deep: true
      }
    },
    methods: {
      showDetail: function () {
        this.showDetails = !this.showDetails;
        this.getCustomerInfo(this.orderInfo.customer_id);
      },
      getCustomerInfo: function (customerId) {
        let that = this;
        this.detailList = [];
        if(customerId) {
            getCustomerInfo(customerId)
                .then(res => {
                    if(res.ok) {
                        that.detailList.push(
                            {name: this.$t('carDetail.telphone'), "value": !!res.data?res.data.telephone: '无'},
                            {name: this.$t('carDetail.serialNumber'), "value": that.orderInfo.serial_number || '无'},
                            {name: this.$t('carDetail.createTime'), "value": that.formatDate(that.orderInfo.create_time)||'无'},
                            {name: this.$t('carDetail.posDiscount'), "value":'￥' + that.orderInfo.order_pos_discount_money||'0'},
                            {name: this.$t('carDetail.posErase'), "value":'￥' + that.orderInfo.erase_money ||'0'},
                            {name: this.$t('carDetail.remark'), "value": that.orderInfo.remark||'无'})
                    }
                })
        } else {
            that.detailList.push(
                {name: this.$t('carDetail.telphone'), "value": '无'},
                {name: this.$t('carDetail.serialNumber'), "value": that.orderInfo.serial_number || '无'},
                {name: this.$t('carDetail.createTime'), "value": that.formatDate(that.orderInfo.create_time)||'无'},
                {name: this.$t('carDetail.posDiscount'), "value":'￥' + that.orderInfo.order_pos_discount_money||'0'},
                {name: this.$t('carDetail.posErase'), "value":'￥' + that.orderInfo.erase_money ||'0'},
                {name: this.$t('carDetail.remark'), "value": that.orderInfo.remark||'无'})
        }

      },

      formatDate: function(date) {
        return formatDate(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
      },

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-wrapper {
  text-align: center;
  height: 54px;
  line-height: 54px;
  background-color: #FFFFFF;
  padding-left: 18px;
  padding-right: 18px;
}
.details-item {
  margin-top: 8px;
  font-size: 14px;
  word-wrap: break-word;
  padding-bottom: 10px;
  color: #666;
}
.detail-button {
  width: 68px;
  height: 36px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;

}
.details-button-active {
  border: none;
  background-color: #ffbf34;
  color: #FFFFFF;
}
</style>
