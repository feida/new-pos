<template>
  <div style="width: 50%;float: left;border-right: 1px dashed #e0e0e0;">
    <ul class="pay-info-details">
      <li>
        <div>
          <p>{{$t('pay.orderMoney')}}</p>
          <p style="color: #EF5350 ;font-size: 28px;">
            ¥{{orderInfo.amount_with_children > 0 ? formatMoney(orderInfo.amount_with_children + discountInfo.discountMoney + discountInfo.easyMoney) : formatMoney(orderInfo.order_money + discountInfo.discountMoney + discountInfo.easyMoney)}}
          </p>
        </div>
      </li>
      <li>
        <div>
          <p>{{$t('pay.vipDiscount')}}</p>
          <p style="font-size: 20px;">
            ¥00.00
          </p>
        </div>
      </li>
      <li>
        <div>
          <p>{{$t('pay.orderDiscount')}}</p>
          <p>¥{{formatMoney((discountInfo.discountMoney || 0))}}</p>
        </div>
      </li>
      <li>
        <div>
          <p>{{$t('pay.eraseBtn')}}</p>
          <p>¥{{formatMoney(discountInfo.easyMoney || 0)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    // props:['formatMoney'],
    name: "topLeftArea",
    computed: {
      ...mapGetters({
        orderInfo: 'orderInfo',
        discountInfo: 'discountInfo',
        payInfo: 'payInfo',
        currentOrderInfo: 'currentOrderInfo',
        formatDiscount: 'formatDiscount'
      })
    },
    methods: {
      formatMoney(money){
        return this.$utils.formatMoney(money || 0);
      },
    },
  }
</script>

<style scoped>
  .pay-info-details {
    height: 40%;
    border-radius: 5px;
    background-color: #FFFFFF;
  }
  .pay-info-details > li {
    height: 25%;
  }
  .pay-info-details > li > div {
    height: 45px;
    line-height: 45px;
    margin-top: 5px;

    font-size: 20px;
    color: #666;
    text-indent: 10px;
  }

  .pay-info-details > li > div > p:nth-of-type(1){
    display: inline-block;
    height: 100%;
    color:#666;
  }
  .pay-info-details > li > div > p:nth-of-type(2){
    float: right;
    margin-right: 20px;
    height: 100%;
    color:#999;
  }

</style>
