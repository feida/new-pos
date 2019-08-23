<template>
  <div>
    <el-row class="business" v-loading.fullscreen.lock="fullscreenLoadingObj.show" :element-loading-text="fullscreenLoadingObj.msg">
      <el-row class="tool-bar" id="tool-bar">
        <el-col :span="24" class="tool-content">
          <el-date-picker
            v-model="reportDate"
            align="right"
            type="date"
            :editable = "false"
            :picker-options="pickerOptions">
          </el-date-picker>
          <el-button type="primary" class="tool-search-btn" style="background-color: #FFBF34;border: none;" @click="getBusinessData()">{{$t('business.queryBtn')}}</el-button>

          <div style="float: right;margin-right: 10px;">
            <el-button type="primary" class="tool-search-btn" @click="closeBusiness('isClose')">{{$t('business.closeShop')}}</el-button>
            <el-button type="primary" class="tool-search-btn" @click="dailyReceipt" :loading="isDailyReceipt">{{$t('business.receipt')}}</el-button>
          </div>

        </el-col>
      </el-row>
      <el-row class="business-data" id="business-data"  :style="{height: dateHeight + 'px'}" style="overflow-y: auto">
        <el-row class="data-row" v-if="businessData">
          <el-col :span="3">
            <p class="data-title">{{$t('business.whole')}}<br>{{$t('business.businessData')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.totalAmount')}}</p>
            <p>￥{{ formatMoney(businessData.totalAmount||0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.incomeAmount')}}</p>
            <p>￥{{formatMoney( businessData.incomeAmount )}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.discountAmount')}}</p>
            <p>￥{{( Number(businessData.discountAmount||0) - Number(businessData.refundsItems[11]||0)).toFixed(2)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.orderAmount')}}</p>
            <p>{{formatMoney(businessData.orderAmount || 0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.customerAmount')}}</p>
            <p>{{formatMoney(businessData.customerAmount || 0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.customerAverage')}}</p>
            <p v-if="businessData.customerAverage">￥{{ formatMoney(businessData.customerAverage) }}</p>
            <p v-else>-&#45;&#45;</p>
          </el-col>
        </el-row>

        <el-row class="data-row">
          <el-col :span="3">
            <p class="data-title">{{$t('business.paidIn')}}<br>{{$t('business.moneyData')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.weChatPay')}}</p>
            <p>￥{{formatMoney(businessData.incomeItems[1]||0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.aliPay')}}</p>
            <p>￥{{formatMoney( businessData.incomeItems[10]||0 )}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.localweChatPay')}}</p>
            <p>￥{{ businessData.underline ? Math.abs(formatMoney(businessData.underline[1])) : 0 }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.localAliPay')}}</p>
            <p>￥{{ businessData.underline ? Math.abs(formatMoney(businessData.underline[10])) : 0 }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.rechargePay')}}</p>
            <p>￥{{ formatMoney(businessData.incomeItems[6]||0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.moneyPay')}}</p>
            <p>￥{{ formatMoney(businessData.incomeItems[12]||0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.unionPay')}}</p>
            <p>￥{{ formatMoney(businessData.incomeItems[5]||0) }}</p>
          </el-col>

        </el-row>
        <el-row class="data-row">
          <el-col :span="3" class="data-content">
            <p></p>
            <p></p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.shanhuiPay')}}</p>
            <p>￥{{ formatMoney( businessData.incomeItems[16]||0 ) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.groupPay')}}</p>
            <p>￥{{formatMoney( businessData.incomeItems[27]||0 )}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.cardPay')}}</p>
            <p>￥{{formatMoney( businessData.incomeItems[23]||0 )}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.dishangfanPay')}}</p>
            <p>￥{{formatMoney( businessData.incomeItems[20]||0 )}}</p>
          </el-col>
        </el-row>

        <el-row class="data-row">
          <el-col :span="3">
            <p class="data-title">{{$t('business.discount')}}<br>{{$t('business.moneyData')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.redPaper')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[2]||0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.couponPay')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[3]||0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.zengsongPay')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[7]||0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.dengweiPay')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[8]||0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.POSDiscount')}}</p>
            <p>￥{{ formatMoney( businessData.discountItems["pos"]||0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.vipDiscount')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems["member"] || 0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.integralPay')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[17]||0) }}</p>
          </el-col>
        </el-row>
        <el-row class="data-row">
          <el-col :span="3" class="data-content">
            <p></p>
            <p></p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.cardzengsong')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[24]||0) }}</p>
          </el-col>
          <!--<el-col :span="3" class="data-content">-->
          <!--<p>实体卡折扣</p>-->
          <!--<p>￥{{ formatMoney(businessData.discountItems[22]||0) }}</p>-->
          <!--</el-col>-->
          <el-col :span="3" class="data-content">
            <p>{{$t('business.cashCouponPay')}}</p>
            <p>￥{{ formatMoney(businessData.discountItems[28]||0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.grantMoney')}}</p>
            <p>￥{{ formatMoney(businessData.grantAmount || 0) }}</p>
          </el-col>
          <el-col :span="3" class="data-content">
          <p>{{$t('business.refundRedPaper')}}</p>
          <p>￥{{ -formatMoney(businessData.refundsItems[11]||0) }}</p>
          </el-col>
        </el-row>

        <el-row class="data-row">
          <el-col :span="3">
            <p class="data-title">{{$t('business.refund')}}<br>{{$t('business.moneyData')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.refundMoney')}}</p>
            <p>￥{{ Math.abs(formatMoney(businessData.refundsItems[12]||0)) }}</p>
          </el-col>
          <!--<el-col :span="3" class="data-content">-->
            <!--<p>退菜返还红包</p>-->
            <!--<p>￥{{ Math.abs(formatMoney(businessData.refundsItems[11]||0)) }}</p>-->
          <!--</el-col>-->
          <el-col :span="3" class="data-content">
            <p>{{$t('business.refundCard')}}</p>
            <p>￥{{ formatMoney(businessData.refundsItems[25]||0) }}</p>
          </el-col>

        </el-row>
        <el-row class="data-row">
          <el-col :span="3">
            <p class="data-title" style="line-height: 79px;">{{$t('business.tangshiOrder')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.ordernum')}}</p>
            <p>{{formatMoney(businessData.orderOrderingSource.eatIn.orderCount || 0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.totalMoney')}}</p>
            <p>￥{{formatMoney(businessData.orderOrderingSource.eatIn.orderMoney || 0)}}</p>
          </el-col>
        </el-row>
        <el-row class="data-row" v-if="businessData.orderOrderingSource">
          <el-col :span="3">
            <p class="data-title" style="line-height: 79px;">{{$t('business.waidaiOrder')}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.ordernum')}}</p>
            <p>{{formatMoney(businessData.orderOrderingSource.eatOut.orderCount || 0)}}</p>
          </el-col>
          <el-col :span="3" class="data-content">
            <p>{{$t('business.totalMoney')}}</p>
            <p>￥{{formatMoney(businessData.orderOrderingSource.eatOut.orderMoney || 0)}}</p>
          </el-col>
        </el-row>
      </el-row>
      <div class="order-page-wrapper">
        <div class="pre-page" @click="pageOptions(-1)"><span class="el-icon-caret-top" style="font-size: 26px;"></span></div>
        <div class="next-page" @click="pageOptions(1)"><span class="el-icon-caret-bottom" style="font-size: 26px;"></span></div>
      </div>
    </el-row>
    <el-dialog title="身份验证" center :visible.sync="closeBusinessModal"  width="30%" :close-on-click-modal="false" :before-close="closeBusinessDialog" id="businessDialog">
      <div>
        <template>
          <div style="margin-top: 10px;">
            <h3 style="font-weight: bold;margin-left: 5px;display: inline-block;padding: 10px">请输入口令</h3>
            <input type="password"
                   autocomplete="off"
                   readonly onfocus="this.removeAttribute('readonly');"
                   style="display: inline-block; border:1px solid grey; height: 30px;border-radius: 5px;width: 50%;"
                   data-name="closeBusiness"
                   v-model="closeBusinessPassword" @click="focus()">

          </div>
        </template>

        <span slot="footer" class="dialog-footer">
        <div style="width: 100%;margin-top: 20px;text-align: center;">
          <el-button  @click="closeBusinessDialog()">取 消</el-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="background-color: #000;color: rgb(255, 255, 255);" @click="saveChange">确 定</el-button>
        </div>
      </span>
      </div>
    </el-dialog>
    <reviewDetail  ref="reviewDetail"></reviewDetail>
  </div>


</template>

<script>
  import {businessData, printStoreReport, isOpenPaymentReview,sendMessage} from '@/api/reportApi'
  import bus from  '../../../utils/bus'
  import {getSessionShopDet, getSession} from '@/utils/auth'
  import reviewDetail from  './reviewDetail.vue'
  export default {
    name: 'business',
    components: {
      reviewDetail,
    },
    data () {
      return {
        shopDetails:{},
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        reportDate : new Date(),
        businessData : {
          incomeItems: {},
          underline: {},
          discountItems: {},
          refundsItems : {},
          orderOrderingSource:{
            eatIn: {},
            eatOut: {},
            packaging: {}
          }
        },
        orderPaymentMap : {},
        orderPosDiscountMoney:0,  // pos端折扣金额
        memberDiscountMoney:0,    // 会员折扣金额（微信端）
        closedBusiness:'open',
        fullscreenLoadingObj: {
          show: false,
          msg: "正在结店，请稍候 . . ."
        },
        dateHeight :0,
        totalMoney:0,
        posClose: 0,
        phoneClose: 0,
        selectDate: new Date(),

        closeBusinessModal: false,
        closeBusinessPassword: '',   //结店口令
        isDailyReceipt: false,

      };
    },
    created: function(){
      console.log('this.reportDate',this.reportDate)
        this.getBusinessData()
    },
    mounted : function () {
      var that = this;
      var toolbarHeight = document.getElementById("tool-bar").clientHeight;
      var bodyHeight = document.body.clientHeight - 150 - toolbarHeight;
      this.dateHeight = bodyHeight;
      this.shopDetails = JSON.parse(getSessionShopDet())

      bus.$on('close-business', function (value) {
        that.closeBusinessPassword = value;
      });

    },
    beforeDestroy () {
      bus.$off("close-business")
    },
    methods: {
        getBusinessData() {
            let that = this
            businessData(this.$utils.fmtDate(this.reportDate))
                .then(res =>{
                    console.log('businessData',res)
                    if(res.ok && res.data){
                        that.businessData = res.data;
                        that.posClose =  (+res.data.discountItems["pos"] || 0 ) + (+res.data.discountItems["posSettleAccounts"] || 0)// pos端折扣 + pos结算
                        that.phoneClose = (+res.data.discountItems["member"] || 0)  + (+res.data.discountItems["wechatSettleAccounts"] || 0) // phone端折扣 + 手机结算
                    }
                })
        },
//      queryData() {
//        let that = this
//        businessData(this.$utils.fmtDate(this.reportDate), function (data) {
//          that.businessData = data;
//          that.posClose =  (+data.discountItems["pos"] || 0 ) + (+data.discountItems["posSettleAccounts"] || 0)// pos端折扣 + pos结算
//          that.phoneClose = (+data.discountItems["member"] || 0)  + (+data.discountItems["wechatSettleAccounts"] || 0) // phone端折扣 + 手机结算
//        })
//      },



      closeBusiness(param) {
        var self = this;
        isOpenPaymentReview()
            .then(result => {
                console.log('result',result)
                if(result.ok) {
                    if(result.data.openAudit == 1) {
                        self.closeBusinessModal = true;
                    } else if (result.data.openAudit == 0){
                        this.$confirm('确定要进行结店操作？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            sendMessage()
                                .then(res => {
                                    self.closeLoading();
                                    if(res.ok){
                                        self.$message.success("结店成功");
                                    } else {
                                        // self.$message.warning("无法发送结店短信");
                                    }
                                })
                        }).catch(() => {
                            self.closeLoading();
                        });
                        /*getLeftSyncOrder(this.$utils.fmtDate(this.reportDate), (result) => {
                            var syncDataList = result;
                            this.$confirm('确定要进行结店操作？', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                let isOpenEmqPush =   self.shopDetails.isOpenEmqPush;
                                if(navigator.onLine){
                                    let date = self.$utils.fmtDate(self.reportDate)
                                    syncAll(syncDataList, function (result) {
                                        self.showLoading();
                                        posAdminCheckOut(date, (res) => {
                                        })
                                        if (isOpenEmqPush) {
                                            let sendInfo = {
                                                group: 'order',
                                                orderId:'CheckOut',
                                                action: '',
                                                data: {
                                                    type: "checkOut",
                                                    operator:  '',
                                                    dailyLogId:  '',
                                                }
                                            }
                                            emqttSend(sendInfo, () => {});
                                        } else {
                                            self.$socket.posCheckOut('', '', function () {
                                                self.$message.success("结店成功");
                                                self.closedBusiness = param;
                                                self.closeLoading();
                                            })
                                        }
                                    })
                                }else{
                                    self.$message.warning("暂无网络，无法发送结店短信!");
                                    self.closeLoading();
                                }
                            }).catch(() => {
                                self.closeLoading();
                            });
                        })*/
                    }
                }

            })
      },
      dailyReceipt() {
        this.isDailyReceipt = true
        let self = this;
        printStoreReport(self.$utils.fmtDate(this.reportDate))
            .then(res => {
                this.isDailyReceipt = false
                console.log('printStoreReport',res)
                if(res.ok){
                    self.$message("发送日报小票"); // 回调成功后调用
                    console.log("发送日报小票");
                }else {
                    self.$message("发送日报小票失败"); // 失败
                    console.log("发送日报小票失败");
                }
            })
      },

      showLoading(){
        this.fullscreenLoadingObj.show = true;
        setTimeout( ()=> {
          if(this.fullscreenLoadingObj.show){
            this.closeLoading();
            this.$message.error("网络繁忙，请稍后重试~~~");
          }
        }, 5000);// 5 秒之后如果还没有成功， loading 页面自动关闭
      },
      closeLoading(){
        this.fullscreenLoadingObj.show = false;
      },
      pageOptions (operation){
        var businessData = document.getElementById("business-data")
        if(operation == 1){  // 下一页
          businessData.scrollTop += businessData.clientHeight;
        }else{  //  上一页
          businessData.scrollTop -= businessData.clientHeight;
        }
      },
      formatMoney(money){
        return this.$utils.formatMoney(money || 0);
      },


      closeBusinessDialog() {
        this.closeBusinessModal = false;
        this.closeBusinessPassword = ''
      },
      focus() {
        this.closeBusinessPassword = "";
      },

      saveChange(){
        let that = this;
          var superPwd = getSession("superPwd");
        var inputSuperPwd = this.$utils.pwdEncryption(this.closeBusinessPassword);
        if(inputSuperPwd == '') {
          this.$message.warning('身份口令不能为空');
          return;
        }
        if(inputSuperPwd != superPwd) {
          this.$message.error('身份口令错误');
          return;
        }

        this.closeBusinessModal = false;
        this.closeBusinessPassword = ''
        this.$refs.reviewDetail.open();

      },

    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .business{
    height: 100%;
    width: 100%;
  }
  .tool-bar{
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    font-weight: bold;
    border-bottom: 2px solid #E9E9E9;
  }
  .tool-title{
    padding-left: 20px;
  }
  .tool-search-btn{
    margin-left: 5px;
    font-size: 16px;
  }
  .el-button--primary{
    /*background-color : #000 ;*/
    /*border-color: #000;*/
    background-color: #ffbf34;
    color: #fff!important;
    border: none;
    padding: 10px 30px;
  }
  .business-data{
    width: 100%;
  }
  #business-data::-webkit-scrollbar { /*滚动条整体样式*/
    width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  #business-data::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }

  #business-data::-webkit-scrollbar-track { /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  .data-row{
    height: 80px;
    border-bottom: 2px solid #E9E9E9;
  }
  .data-title{
    /*line-height: 79px;*/
    line-height: 38px;
    font-size: 16px;
    font-weight: bold;
    padding-left: 20px;
  }
  .data-content{
    height: 40px;
    line-height: 40px;
    text-align: center;
  }


  /*  订单详情 翻页 begin*/
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
    background-color: #000;
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

  #businessDialog {
    text-align: center;
  }
</style>
