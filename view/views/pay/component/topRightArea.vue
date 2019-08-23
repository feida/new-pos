<template>
    <div style="width: 50%;float: left;">
        <ul class="pay-info-details">
            <li>
                <div>
                    <p>{{$t('pay.amountMoney')}}</p>
                    <p style="color: #EF5350 ;font-size: 28px;">¥{{formatMoney(payInfo.amountMoney)}}</p>
                </div>
            </li>
            <li>
                <div>
                    <p>{{$t('pay.actuallyPay')}}</p>
                    <p style="font-size: 20px;">
                        ¥{{cardMoney > 0 ? formatMoney(cardMoney) : formatMoney(payInfo.actuallyPay)}}
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <p>{{$t('pay.remainMoney')}}</p>
                    <p>¥{{formatMoney(payInfo.remainMoney)}}</p>
                </div>
            </li>
            <li>
                <div>
                    <p>{{$t('pay.changeMoney')}}</p>
                    <p>¥{{formatMoney(payInfo.changeMoney)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "topRightArea",
        computed: {
            ...mapGetters({
                cardMoney: 'cardMoney',
                payInfo: 'payInfo'
            })
        },
        methods: {
            formatMoney(money) {
                return this.$utils.formatMoney(money || 0);
            },
        }
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
