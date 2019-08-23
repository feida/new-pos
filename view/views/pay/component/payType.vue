<template>
  <div style="background-color: #fff;padding-bottom: 112px; position: relative;">
    <ul :style="{ height: familyWrapperHeight + 'px' }" style="overflow-y: auto" id="familyWrapper">
      <li v-for="(type , key) in payType" @click=" selectPayType(key)">
        <div class="pay-type-item" :class="(currentPayType.id == key)  ? 'select-pay-type' : ''">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href=icon[key]></use>
          </svg>
          <p>{{type}}</p>
        </div>
      </li>
    </ul>
    <ul class="pageButton" id="pageButton" style="background-color: #fff">
      <li v-for="(item,index) in pageButtonList">
        <div style="width: 100%">
          <el-button size="large" class=" page-button-item"
                     :class="selectCurrentPages == index ? 'pageButtonActive' : ''"
                     @click="familyPages(index)">{{item}}
          </el-button>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "payType",
        data() {
            return {
                pageButtonList: [this.$t('common.prePage'), this.$t('common.nextPage')],
                familyWrapperHeight: 0,
                selectCurrentPages: 2,

                icon: { // icon 支付项展示图标
                    1: '#icon-wechatpay',
                    10: '#icon-zhifubao',
                    12: '#icon-xianjin',
                    5: '#icon-yinlian',
                    16: "#icon-xinmeida1",
                    17: '#icon-chongzhi2',
                    2: '#icon-chongzhi2',
                    3: '#icon-youhuiquan',
                    26: '#icon-miandan',
                    27: "#icon-tuangou",
                    28: "#icon-daijinquan"
                },
            }
        },
        mounted() {
            this.familyWrapperHeight = document.body.clientHeight - 150 - document.getElementById("pageButton").offsetHeight;

        },
        created() {
            this.$store.commit('setShopValidPayMode');
            console.log('payType', this.payType)
        },
        computed: {
            ...mapGetters({
                payType: 'payType',
                currentPayType: 'currentPayType'
            }),
        },
        methods: {
            selectPayType: function (key) {
                this.$store.commit("setSelectPayType", key)
            },
            familyPages(pageNumbers) {
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
        },
    }
</script>

<style scoped>
    .pay-type-item {
        width: 100%;
        padding: 10px 15px;
        line-height: 20px;
        white-space: normal;
        position: relative;
        border: none;
    }

    .select-pay-type {
        background-color: #EEE;;
        color: #000;
        border: none;
        border-radius: 0px;
        border-left: 5px solid #ffbf34;
    }

    .icon {
        width: 35px;
        height: 35px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .pageButton {
      width: 100%;
      position: absolute;
      bottom: 0;
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
    .pageButtonActive {
      background-color: #ffbf34;
      color: #fff !important;
      border: none !important;
    }

    #familyWrapper{
      /*overflow-y:scroll;*/
      overflow-x: hidden;

    }
    #familyWrapper::-webkit-scrollbar {/*滚动条整体样式*/
      width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    #familyWrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
    }
    #familyWrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
    }
</style>
