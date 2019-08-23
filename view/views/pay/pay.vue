<template>
  <el-row style="height: 100%; background-color: #eee;" class="pay">
    <!--  左侧订单详情   -->
    <el-col :span="7" class="left-wrapper" >
      <div v-if="orderInfo.id" style="background-color: #eee">
        <CarDetail :orderInfo="orderInfo" :shopModel="shopModel"></CarDetail>
        <div :style="{ height: carTableHeight + 'px' }" style="overflow-y: hidden;background-color: #FFFFFF; margin-top: 5px;" id="order-detail-wrapper" >
          <div class="order-page-wrapper" id="order-page-wrapper">
            <div class="pre-page" @click="orderPageOperation(-1)"><span class="el-icon-caret-top" style="font-size: 26px;"></span></div>
            <div class="next-page" @click="orderPageOperation(1)"><span class="el-icon-caret-bottom" style="font-size: 26px;"></span></div>
          </div>
          <!--购物车 菜品详情-->
          <payCar :shopDetail="shopDet" :orderInfo="orderInfo"></payCar>
        </div>
      </div>

      <div class="car-footer">
        <el-row>
          <el-col :span="24" class="operate-item">
            <div>
              {{$t('pay.article')}}: <span style="color:red;">{{!!orderInfo.count_with_child ? orderInfo.count_with_child : orderInfo.article_count}}</span>
            </div>
            <div>
              {{$t('pay.totalNum')}}: <span style="color:red;">￥{{ formatMoney(orderInfo.amount_with_children || orderInfo.order_money) }}</span>
            </div>
          </el-col>
        </el-row>


        <el-row type="flex" justify="space-around" style="height: 45px;margin-top: 5px">
          <el-col :span="12" style="text-align: center;">
            <el-button class="pay-btn-style"  @click="skipIndex" v-if="shopDet.allowAfterPay == 0 && orderInfo.distribution_mode_id == 1">{{$t('common.goBack')}}</el-button>
            <el-button class="pay-btn-style"  @click="cancel" v-if="shopDet.allowAfterPay == 0 && orderInfo.distribution_mode_id == 3">{{$t('common.cancel')}}</el-button>
            <el-button class="pay-btn-style" @click="cancel" v-if="shopDet.allowFirstPay == 0">{{$t('common.cancel')}}</el-button>
          </el-col>
          <el-col :span="12" style="text-align: center;">
            <el-button class="pay-btn-style" style="background-color: #ffbf34;color: #ffffff;"  @click="confirmPay"   :loading="loading"  v-if="shopDet.allowFirstPay == 0 && orderInfo.order_state <2">{{$t('pay.settleAndOrder')}}</el-button>
            <el-button class="pay-btn-style" style="background-color: #ffbf34;color: #ffffff;"  @click="confirmPay"   :loading="loading"  v-if="shopDet.allowFirstPay == 0 && orderInfo.order_state>=2">{{$t('pay.settle')}}</el-button>
            <el-button class="pay-btn-style" style="background-color: #ffbf34;color: #ffffff;"  @click="confirmPay" :loading="loading"  v-if="shopDet.allowAfterPay == 0">{{$t('pay.settle')}}</el-button>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <!--  支付方式   -->
    <el-col :span="17" class="right-wrapper">
      <el-row class="pay-wrapper">
        <el-col :span="20" class="pay-info" id="payInfo">
          <div style="padding: 0 10px">
            <el-row>
              <!-- 折扣显示区 -->
              <topLeftArea></topLeftArea>
              <!-- 支付显示区 -->
              <topRightArea></topRightArea>
            </el-row>

            <!--支付方式展示区域-->
            <el-row class="pay-show-wrapper">
              <el-col :span="10" style="background-color: #fff;">
                <div id="aaa"></div>
                <hasPayArea></hasPayArea>
              </el-col>
              <!--键盘区域-->
              <el-col :span="14" style="height: 100%; background-color: #eee;border-left: 12px solid #eee;">
                <keyBoard></keyBoard>
              </el-col>
            </el-row>
          </div>


          <el-row class="bottom-btn-wrap">
            <div style="height: 50px">
              <el-col :span="24" class="operate-footer">
                <el-button size="large" class="operate-footer-button" @click="orderDiscount()">{{$t('pay.discountBtn')}}</el-button>

                 <el-button size="large" class="operate-footer-button" @click="$store.commit('initonErasing')" :disabled="false">{{$t('pay.eraseBtn')}}</el-button>
                 <el-button size="large" class="operate-footer-button" @click="printPreOrder()" :disabled="false">{{$t('pay.printPre')}}</el-button>

                <!--<el-button class="operate-footer-button" @click="continueOrder()" v-if="shopDet.allowFirstPay == 0"  :disabled="false">{{$t('pay.continueOrder')}}</el-button>-->
                <el-button size="large" class="operate-footer-button" @click="resumeDiscount()" :disabled="(orderPayType.length ) > 0 ? true : false" v-if="shopDet.allowAfterPay == 0">{{$t('pay.resumeDiscountBtn')}}</el-button>
                <!--<el-button size="large" class="operate-footer-button" v-if="orderInfo.customer_id && orderInfo.customer_id != 0 " @click="getAccountMoney()">{{$t('pay.getAccountBtn')}}</el-button>-->

              </el-col>
            </div>

          </el-row>
        </el-col>

        <!-- 右边区域 -->
        <!--<el-col :span="4" class="pay-type-wrapper" id="wrapper">-->
        <el-col :span="4" class="pay-type-wrapper" >
          <payType></payType>
        </el-col>
      </el-row>
    </el-col>
    <!-- 折扣 -->
    <discountPay></discountPay>
    <!-- 扫码支付弹窗-->
    <el-dialog :title="$t('pay.scanpay') " :visible.sync="scanPay.dialogVisible" :close-on-click-modal="false" width="80%" :before-close="cancelScanPay" center>
      <template>
        <el-row>
          <el-col :span="24"><h2>{{$t('pay.needpay')}}：￥{{formatMoney(this.currentPayType.money )}}</h2></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2 style="margin: 15px 0;">{{$t('pay.payType')}}：</h2>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="24" v-if="scanPay.currentType.id == 1">
            <el-col :span="8" :offset="8">
              <div style="margin: 15px 20px;padding:20px 0;text-align: center">
                <div>
                  <svg class="icon" aria-hidden="true" style="width: 60px; height: 60px;">
                    <use :xlink:href=icon[1]></use>
                  </svg>
                </div>
                <div style="font-size: 22px;">{{$t('pay.weChatPay')}}</div>
              </div>
            </el-col>
          </el-col>

          <el-col :span="24" v-if="scanPay.currentType.id == 10">
            <div style="margin: 15px 20px;padding:20px 0;text-align: center">
              <div>
                <svg class="icon" aria-hidden="true" style="width: 60px; height: 60px;">
                  <use :xlink:href=icon[10]></use>
                </svg>
              </div>
              <div style="font-size: 22px;">{{$t('pay.aliPay')}}</div>
            </div>
          </el-col>
          <el-col :span="24" v-if="scanPay.currentType.id == 2">
            <div style="margin: 15px 20px;padding:20px 0;text-align: center">
              <div>
                <svg class="icon" aria-hidden="true" style="width: 60px; height: 60px;">
                  <use :xlink:href=icon[2]></use>
                </svg>
              </div>
              <div style="font-size: 22px;">{{$t('pay.RPay')}}</div>
            </div>
          </el-col>
          <div style="text-align: center;"  class="scan-paying" v-if="scanPay.paying == true">
            <img src="../../assets/img/payload.gif" alt="" style="margin-top: 15px;">
            <div style="color: #FFFFFF;text-align: center;font-size: 22px;">
              {{$t('pay.orderPaying')}}
            </div>
          </div>
          <div style="text-align: center;"  class="scan-paying" v-if="scanPay.failed == true">
            <img src="../../assets/img/failed.png" alt="" style="margin-top: 15px;">
          </div>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input v-model="scanPay.scanValue" @keyup.enter.native="getScanValue($event)"
                      :disabled = "isPaying"
                      :autofocus="!isIpad" :placeholder="$t('pay.scanPla')"  v-focus id="scanPayInput"></el-input>
          </el-col>
        </el-row>
      </template>
      <span slot="footer" class="dialog-footer">
        <span v-if="isIpad" class="qr-btn" node-type="qr-btn" @click="scan()" style="">
            <span style="font-size: 14px; font-weight: 500;">扫一扫</span>
            <input node-type="jsbridge" type="file" name="myPhoto" value="扫一扫"  style="position: absolute; left: 0;top:0; width: 80px; height: 36px;"/>
        </span>


        <el-button v-if="scanPay.currentType.id == 10 && shopModel != 7" @click="localAlipay()">{{$t('pay.localAli')}}</el-button>
        <el-button v-if="scanPay.currentType.id == 1 && shopModel != 7" @click="localAlipay()">{{$t('pay.localWeChat')}}</el-button>

        <!--<el-button v-if="this.scanPay.currentType.id == 2" @click="readCardpay()" :disabled = "isReadCardPay">{{isReadCardPay ? '支付中' : '读卡支付'}}</el-button>-->

        <el-button  @click="cancelScanPay">{{$t('common.cancel')}}</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
  import {formatDate} from '../../utils/generalUtil';
  import bus from '../../utils/bus'
  // import payMode from '../../utils/payMode'
  import CarDetail from '../table/component/basic/car-detail'
  import keyBoard from './component/keyBoard'
  import payType from './component/payType'
  import payCar from './component/payCar'
  import hasPayArea from './component/hasPayArea'
  import topLeftArea from './component/topLeftArea'
  import topRightArea from './component/topRightArea'
  import discountPay from './component/discountPay'
  import {mapGetters} from 'vuex'
  import {payOrder, scanPayMoney, resumeDiscount, printTotal, cancelOrder} from '@/api/orderApi'
  import {getSessionShopDet} from '@/utils/auth'
  import $ from 'jquery'
  //import '@/scan/qrcode1.js'

  export default {
    name: 'pay',
    components: {
      CarDetail,
      payType,
      payCar,
      keyBoard,
      hasPayArea,
      topLeftArea,
      topRightArea,
      discountPay
    },
    data() {
      return {
        maskHeight: 0, // 遮罩层的高度
        panelTitleHeight: 0, // 客单的高度
        confirmOrderPay: 0, // 微信银行卡或者现金支付本地需要支付的
        cardMoney: 0,
        reMoney: 0,
        coupanPay: 0 ,// 优惠券
        orderPaymentMap:{},
        showDetails: false,
        needPay:0,
        carTableHeight: 0,
        payTableHeight: 0,
        orderId: null,
        totalMoney: '',
        payType: {},
        payProgress: 0,     // 支付金额 进度
        oddChange: 0,     // 找零
        payMode: 1, //  支付方式：  微信支付/支付宝支付 > 银联 > 现金 > 大众点评 > 积分
        shopDet: {},
        shopModel: '',
        customerInfo:{},
        // onErasingDialogVisible: false,
        discountTitle: '',
        selectDiscountActive: '',
        labelPosition: 'left',
        tempNeedPay: 0,
        tempDiscountMoney: '0',
        selectDiscountString:'',
        newNumber:'',
        autoFocus: true,
        regNumber: '',
        isCloseScanDialog: true,

        isPaying: false,

        loading:false,
        isLocalAlipay: false,
        wechatInfo: {},
        remindMoney: 0, // 剩余需要支付的
        showMoney: {
          earsMoney: 0,
        },
        // paymentItems:[],
        occupyValue: 0,
        customerId:'',
        isReadCardPay : false,
        timeDifference : 500,
        isClickAccount: false,
        wsConnect: false,
        isIpad: true
      };
    },
    watch: {
      orderPayType: {
        handler: function (newVal) {
          this.$store.commit('setPayTypeChange')
        },
        deep: true
      },
      orderInfo: {
        handler: function (newVal) {

        },
        deep: true
      },
      currentOrderInfo: {
        handler: function (newVal) {
          this.$store.commit("setPayInfo", newVal)
          this.$store.commit("setPayTypeChange")
        },
        deep: true
      },
      scanPay: {
        handler: function (newVal) {
          if (!newVal.dialogVisible) return;
            // document.getElementById("scanPayInput").focus();
            //console.log('document.getElementById("scanPayInput")',document.getElementById("scanPayInput"))
          this.$nextTick(()=>{
              if(!this.isIpad) {
                  document.getElementById("scanPayInput").focus();
              }
          });
        },
        deep: true
      },
      payInfo: {
        handler: function (newVal) {
        },
        deep: true
      }
    },
    created () {
      this.shopDet = JSON.parse(getSessionShopDet())
      this.$store.commit("setShopDetail", this.shopDet)
      this.shopModel = this.shopDet.shopMode;
      this.$store.commit('setFormatDiscount');
      this.$store.commit('setOrderPayType')
    },
    computed: {
      ...mapGetters({
        orderPayType: 'orderPayType',
        orderInfo: 'orderInfo',
        currentPayType: 'currentPayType',
        payInfo: 'payInfo',
        scanPay: 'scanPay',
        formatDiscount: 'formatDiscount',
        currentOrderInfo: 'currentOrderInfo',
        icon: 'icon',
        paymentItems: 'paymentItems',
        discountInfo: 'discountInfo'
      })
    },

    directives: {
      focus: {
        update: function (el, {value}) {
          if (value) {
            el.focus()
          }
        }
      }
    },

    mounted() {
        let that = this
        this.isIpad = navigator.userAgent.indexOf("iPad") > -1;
        if(this.isIpad) {
            Qrcode.init($('[node-type=qr-btn]'));
        }
      this.orderId = this.$route.params.orderId;
      this.initOrder();
      this.initHeight();
        bus.$on("scanCode", (data) => {
            console.log('回调', data)
            if(data.length == 18){
                this.scanPay.scanValue = data
                this.getScanValue()
            } else {
                this.$message.error('扫码失败请重新扫码');
            }

        })
        bus.$on("hasPayMesBox", () => {
            this.$alert('该订单已支付','提示', {
                confirmButtonText: '确定',
                callback: action => {
                    if (this.shopModel == 2 || this.shopModel == 7) {
                        this.$router.push('/tvorder?payConfirm=true&orderType=all');
                    } else {
                        this.$router.push('/table?payConfirm=true&orderType=all');
                    }
                }
            });
        })

        bus.$on("resetOrder", () => {   //重置订单
            that.initOrder()
            that.$store.dispatch('getOrderItemlistByOrderId', this.orderId);
            that.cancelScanPay()
        })

      bus.$on("getUserBalance", () => {
        setTimeout(() => {
          this.getUserBalance();
        }, 500)
      })
    },
    beforeDestroy () {
      bus.$off("getUserBalance");
      bus.$off("hasPayMesBox");
      bus.$off("resetOrder");
    },
    methods: {
      initOrder() {
          let currentOrderId = this.$route.query.suborderId || this.orderId;
          if (this.shopModel == 6 && this.shopDet.allowAfterPay == 0) {
              currentOrderId = this.orderId
          }
          //this.$store.commit('setOrderId', this.orderId);
          this.$store.commit('setCurrentOrderId', currentOrderId)
          this.$store.dispatch('getOrderDetail', this.orderId)
          this.$store.dispatch('getCurrentOrderDetail', currentOrderId);
          this.$store.dispatch('getDiscountInfo', currentOrderId);

      },

      formatDate(date) {
        return formatDate(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
      },

      cancel() {
        let that = this;
        let cancleOrderId = this.$route.query.suborderId || this.orderId;
        this.$confirm('是否取消支付？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            cancelOrder(cancleOrderId)
                .then(res => {
                    if (res.ok) {
                        if (that.shopModel == 2 || that.shopModel == 7) {
                            that.$router.push('/tvorder?payConfirm=true&orderType=all');
                        } else {
                            that.$router.push('/table?payConfirm=true&orderType=all');
                        }
                    } else {
                        that.$message.error(res.message);
                    }
                })
        }).catch(() => {
        });
      },

      skipIndex() { // 如果是后付模式
        let cancleOrderId = this.$route.query.suborderId
        if(this.orderInfo.order_state == 2 && cancleOrderId) {
          let that = this;
          this.$confirm('是否取消支付？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              cancelOrder(cancleOrderId)
                  .then(res => {
                      if (res.ok) {
                          that.$router.push('/table?payConfirm=true&orderType=all');
                      } else {
                          that.$message.error(res.message);
                      }
                  })
          }).catch(() => {
          });
        } else {
          this.$router.push("/table?payConfirm=false&orderType=all");
        }
      },

      getOrderPayMode (orderPaymentItem) {
        for (var i = 0; i < orderPaymentItem.length; i++) {
          let item = orderPaymentItem[i];
          var orderPayMode = {1:1, 5: 3, 10: 2, 12: 4, 2: 0, 26: 8, 27: 9, 28: 10};
          return orderPayMode[item.type];
        }
      },

      confirmPay() {
        let that = this;
        if(that.orderPayType.length <= 0 ) return that.$message.warning('请选择支付项');
        let hasPay = 0

        this.orderPayType.map(item=>{
          hasPay += item.money
        })
        if (Number(this.payInfo.remainMoney).toFixed(2) > 0) {
          return that.$message.warning(`剩余 【${this.formatMoney(this.payInfo.amountMoney)}】 元需要支付才能买单`);
        }


        this.loading = true;
        let data = this.orderInfo;
        if((data.pay_mode == 3 || data.pay_mode == 4) && data.order_state == 1){// 本地 Pos 确认微信端发起的 现金支付或银联支付
          let orderPayMode = {
            id: data.id,
            is_pos_pay: 1, // 即使这里是微信端发起的支付请求，但是是pos端确认的所以仍然认为是pos端结算
            order_state: 2
          };
          updateRemoteOrderPaymode(orderPayMode, function () {
            //  先付情况下，确认支付后  打印厨打
            if(that.shopDet.allowFirstPay == 0){
              // printKitchenTotal(that.orderId,1, 0);
              // 判断是否开启多动线 enable_duo_dong_xian 0 是开启
              if (that.shopDet.enableDuoDongXian) {
                printKitchenTotal(that.orderId, 1, null, null, null, function (data) {});
              } else {
                getNewKitchenTemplate(that.orderId, 1, null, null, null, function (data) {})
              }
            }
            if (this.shopDet.is_open_emq_push) {
              let sendInfo = {
                group: 'order',
                action: 'ConfirmOrder',
                orderId: data.id,
                data: {
                  type:"confirmOrder",
                  isPosPay: 1,
                  orderId: data.id,
                }
              }
              emqttSend(sendInfo, ()=>{})
            } else {
              that.$socket.confirmOrder(data.id);
            }
            that.$router.push('/table?payConfirm=true&orderType=all');
            bus.$emit("refresh-turnover");
          });
        } else {
          // 如果支付项中有现金支付，则把支付项中所有的金额相加 然后比较是否超出应付金额，如果超出应付金额，则现金支付项需要改成剩余需要支付的钱
          this.verifiCashMoney();
          let formatOrderId = that.$route.query.suborderId || that.orderId;

          let orderPayMode = that.getOrderPayMode(that.orderPayType);
          if (that.orderPayType.length > 1) orderPayMode = 99;
          this.formatDiscount.customerId = this.orderInfo.customer_id;
          var list = that.orderPayType.filter( item => {
            return !item.isOccupation;
          })
            let payOrderQuery = {
                orderId: formatOrderId,
                paymentItems: list,
                payMode: orderPayMode,
                formatDiscount: this.formatDiscount
            }

            payOrder(payOrderQuery)
                .then(res => {
                    console.log('payOrder买单', res)
                    this.loading = false;
                    this.$message(res.message);
                    if(res.ok) {
                        if (that.shopModel == 2 || that.shopModel == 7) {
                            that.$router.push("/table/eatin?type=waitOrder&payConfirm=true&orderType=all")
                        } else {
                            that.$router.push('/table?payConfirm=true&orderType=all');
                        }
                    }
                })
        }
      },

      verifiCashMoney() {
        let money = 0;
        let totalMoney = 0
        let cashMoney = 0;
        for (var item of this.orderPayType) {
          totalMoney += +item.money
          if (item.type != 12) money += +(item.money)
        }

        cashMoney = Math.abs(this.payInfo.totalMoney - money - Number(this.discountInfo.discountMoney) -  Number(this.discountInfo.easyMoney));

        if (this.orderPayType.length == 1 && this.orderPayType[0].type == 12 && this.orderPayType[0].money != 0) this.orderPayType[0].money = this.currentOrderInfo.amount_with_children || this.currentOrderInfo.order_money;

        if (totalMoney > this.payInfo.totalMoney) {
          for (var item of this.orderPayType)
            if (item.type == 12) item.money = cashMoney
        }
      },

      orderPageOperation (operation) {
        var orderDetailWrapper = document.getElementById("order-detail-wrapper");
        if(operation == 1){  // 下一页
          orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
        }else{  //  上一页
          orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
        }
      },
      formatMoney(money){
        return this.$utils.formatMoney(money || 0);
      },

      //=============================
      //======== 整单折扣区开始 ========
      //=============================
      orderDiscount() {
        this.$store.commit('initDiscount');
      },
      //=============================
      //======== 整单折扣区结束 ========
      //=============================

      //=============================
      //======== 扫码支付 =============
      //==============================
      cancelScanPay(){
        if(this.scanPay.paying == true) {
          this.$message.warning("订单支付中，请勿取消支付");
          return;
        }
        this.$store.commit("setSelectPayType", null)
        this.scanPay.dialogVisible = false;
        this.scanPay.paying = false; // 关闭弹窗
        this.scanPay.scanValue = ''; // 清空二维码接受框
      },

        scan(){
          this.scanPay.scanValue = ''
        },

      localAlipay(){
        this.isLocalAlipay = true;
        this.scanPay.dialogVisible = false;
        this.scanPay.paying = false; // 关闭弹窗
        this.scanPay.scanValue = ''; // 清空二维码接受框
      },
      validateScanValue: function(value) {
        if (!value.toString().trim()){
           this.$message("扫码或者输入不能为空！");
           return false
        }
        if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) && this.currentPayType.id == 2) {
            this.$message.warning("手机号码格式错误，请从新扫描或输入");
            return false
        }
        if (value.toString().trim().length != 18 && (this.currentPayType.id == 1 || this.currentPayType.id == 10)) {
          this.$message.warning("付款码格式错误，请重新扫码或者手动输入");
          return false
        }
        return true
      },

      getScanValue(){
        let that = this;
        if(this.scanPay.paying == true)  return this.$message("正在支付中，请勿重复扫码")
        let scanPayValue = this.scanPay.scanValue;
        if (!this.validateScanValue(scanPayValue)) return
        this.hideScanValue(scanPayValue);
        this.scanData(scanPayValue, function (scanData) {
            that.remoteScanData(scanData)
        })
      },



      // 格式化扫码支付数据
      scanData: function (authCode, cb) {
        let payMode = 0, that = this;
        if(this.currentPayType.id == 1) {
          payMode  = 1; // 微信支付
        } else if (this.currentPayType.id == 10) {
          payMode  = 2; // 支付宝支付
        }else if(this.currentPayType.id == 2) {
          payMode  = 0; // 余额支付
        }
        let id = that.$route.query.suborderId || that.orderId;
        let orderPaymentList = [];

        let hasPayMonet = 0
        that.orderPayType.map(function (item) {
          if(item.type == 2 && item.toPayId) {
            orderPaymentList.push({toPayId: item.toPayId, paymentModeId: 2, payValue: item.money})
          }
          if(item.type == 3 && item.toPayId && !item.isOccupation) {
            orderPaymentList.push({toPayId: item.toPayId, paymentModeId: 3, payValue: item.money})
          }
        })
        let scanData = {
          shopId: sessionStorage.getItem("shopId"),
          brandId: sessionStorage.getItem("brandId"),
          authCode: authCode,
          order:{
            id: id,
            payMode: payMode,
            orderPaymentItems: orderPaymentList || [],
          }
        };
        cb(scanData);
      },

      // 将获取到的码给隐藏掉
      hideScanValue: function (scanValue) {
        this.scanPay.paying = true;
        let q = scanValue.substring(4);
        let h = scanValue.substring(scanValue.length - 4);
        let ss = ("************************").substring(0,(scanValue.substring(4).length -4) )
        this.scanPay.scanValue = this.scanPay.scanValue.replace(q,ss) + h
        if(this.scanPay.paying = true) {
          this.isPaying = true
        }
      },

      getOrderPayType : function () {
        let convertPaytype  = 0;
        if(this.currentPayType.id == 1) {
          convertPaytype  = 0; // 微信支付
        } else if (this.currentPayType.id == 10) {
          convertPaytype  = 1; // 支付宝支付
        }else if(this.currentPayType.id == 2) {
          convertPaytype  = 2; // R+支付
        }
        return convertPaytype;
      },
      // 扫码支付 第一次请求
      remoteScanData: function (scanData, cb) {
          let paymentAmount = this.payInfo.amountMoney;
          let payType       = this.getOrderPayType();
          console.log('scanData',scanData)
          let query = {
              scan_type: payType,
              total_money: paymentAmount,
              scan_code: scanData.authCode,
              order_id: scanData.order.id
          }
          console.log('query',query)
          scanPayMoney(query)
              .then(res => {
                if( res.ok ){
                    this.scanPaySuccess()
                }else {
                    this.scanPayError(res.message)
                }
              }).catch(err => {
              this.scanPayError(res.message)
          })
      },

      // 扫码支付成功
      scanPaySuccess: function (payMentInfo ,cb) {
        let that = this;
        let isScanPay = true;
        // 更新本地订单
        let payMode = 0;
        if(this.currentPayType.id == 1) {
          payMode  = 0; // 微信支付
        } else if (this.currentPayType.id == 10) {
          payMode  = 1; // 支付宝支付
        }else if(this.currentPayType.id == 2) {
          payMode  = 2; // 余额支付
        };
        let id = this.$route.query.suborderId || this.orderId;
        if (this.orderPayType.length > 0) payMode = 99
        var list = that.orderPayType.filter( item => {
          return !item.isOccupation;
        })
          let payOrderQuery = {
              orderId: id,
              paymentItems: list,
              payMode: payMode,
              formatDiscount: this.formatDiscount
          }
          console.log('混合支付',payOrderQuery)
          payOrder(payOrderQuery)
              .then(res => {
                  console.log('扫码payOrder买单', res)
                  this.$message(res.message);
                  if(res.ok) {
                      that.scanPay.paying = false; // 关闭弹窗
                      that.scanPay.dialogVisible = false;
                      that.scanPay.scanValue = ''; // 清空二维码接受框
                      that.$store.commit("setSelectPayType", null)
                      this.$router.push('/table?payConfirm=true&orderType=all');
                  }
              })

      },
      // 扫码支付失败
      scanPayError : function (errorMsg) {
            this.isPaying = false;
            this.scanPay.paying = false; // 关闭弹窗
            this.scanPay.dialogVisible = false;
            this.scanPay.scanValue = ''; // 清空二维码接受框
            this.$store.commit("setSelectPayType", null)
            if (errorMsg) {
                this.$message.error(errorMsg);
            }
        },
      initHeight () {
        this.carTableHeight = document.body.clientHeight - 300;
        this.payTableHeight = document.body.clientHeight - 470;
      },

      continueOrder() { // 继续点餐
        let id = this.$route.params.orderId;
        let suborderId = this.$route.query.suborderId || null
        this.$router.push('/order/'+ id+ '?' + (suborderId ? "suborderId=" + suborderId + '&' : "") + 'addArticle=true')
      },

      printPreOrder() { // 打印预结单
        let that = this;
        let suborderId = this.$route.query.suborderId || null;
        let printOrderId = suborderId || this.orderId;
          let query = {
              order_id: printOrderId,
              auto_print: 0,
              total_type: 2,
              refund: 0,
              order_item_arr: []
          }
          printTotal(query)
              .then(res => {
                  console.log('printTotal', res)
              })

      },

      resumeDiscount () {
        resumeDiscount(this.orderId)
            .then(res => {
                console.log('resumeDiscount',res)
                if(res.ok) {
                    this.$store.dispatch('getCurrentOrderDetail', this.orderId)
                    this.$store.dispatch('getOrderDetail', this.orderId)
                    this.$store.dispatch('getDiscountInfo', this.orderId)
                }
            })
      },

      //获取账户余额
      /*getAccountMoney() {
        let that = this
        if(that.isClickAccount) return;
        that.isClickAccount = true;
        let toPayIdList = [];
        this.orderPayType.map(item => {
          if (item.type == 2) {
            toPayIdList.push(item.toPayId);
          }
        })
        if (toPayIdList && toPayIdList.length > 0) {
          that.isClickAccount = false;
          that.$message.warning("已添加余额支付项");
          return;
        }
        //if(!this.orderInfo.customer_id) return;
        let brandId = sessionStorage.getItem("brandId")
        let shopId = sessionStorage.getItem("shopId")
        let customerId = this.orderInfo.customer_id
        let money = this.currentPayType.money
        let isOpenEmqPuhs = this.shopDet.is_open_emq_push;
        if (isOpenEmqPuhs) {
          let sendInfo = {
            group: 'order',
            action: 'GetCustomerAmount',
            orderId: '',
            data: {
              type:"getCustomerAmount",
              brandId: brandId ,
              shopId: shopId,
              customerId: customerId||'',
              money: money
            }
          }
          emqttSend(sendInfo, (result)=>{
            this._overage(result);
          });
        } else {
          that.$socket.getOverage(brandId, shopId, customerId, money, function (result) {
            this._overage(result);
          });
        }
      },
      _overage(result){
        result = JSON.parse(result);
        console.log('result',result)
        this.isClickAccount = false;
        if( result.accountPayValue > 0) {
          this.orderPayType.push({
            toPayId: result.accountId,
            type: 2,
            icon: "#icon-yue",
            money: result.accountPayValue
          })
        } else {
          this.$message.warning("余额为0");
        }
      }*/
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-wrapper{
    height: 100%;
    position: relative;
    background-color: #FFFFFF;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);

  }

  .panel-title {
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    background-color: #252525;
    color: #FFFFFF;
    /*border-bottom: 5px solid #F2F2F2;*/
    /*margin-bottom: 10px;*/
  }

  .panel-content {

    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: black;
    padding-left: 5px;
    padding-bottom: 2em;
    border-bottom: 3px dashed transparent;
    background: linear-gradient(white,white) padding-box,
    repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
  }

  .car-total {
    height: 50px;
    line-height: 50px;
    border-top: 5px solid #F2F2F2;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }

  .right-wrapper {
    height: 100%;
    /*border-left: 6px solid #eee;*/
  }

  .pay-wrapper {
    height: 100%;
    /*padding-bottom: 50px;*/
  }

  .pay-left-bottom {
    position: absolute;
    bottom:0px;
  }
  .pay-left-item{
    padding-left: 10px;
    height: 30px;
    line-height: 20px;
    border-bottom: 2px dashed darkgrey;
  }
  .pay-left-item-button{
    height: 50px;
    /*line-height: 40px;*/
    margin-left: 30px;
  }
  .pay-info {
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    /*margin-top: 10px;*/
    /*padding: 10px;*/
  }

  .pay-type-wrapper {
    /*height: 100%;*/
    background-color: #FFFFFF;
    /*overflow-y: hidden;*/
    /*overflow-x: hidden;*/
    text-align: center;
  }

  /*.pay-type-item {*/
  /*width: 100%;*/
  /*!*margin-top: 5px;*!*/
  /*!*margin-bottom: 10px;*!*/
  /*padding: 10px 15px;*/
  /*line-height: 20px;*/
  /*white-space: normal;*/
  /*position: relative;*/
  /*border: none;*/
  /*}*/

  /*.pay-type-info-item {*/
    /*!*margin-top: 32px;*!*/
    /*width: 33%;*/
    /*height: 110px;*/
  /*}*/

  .pay-type-item-details {
    /*border: 1px solid black;*/
    text-align: center;
    width: 90%;
    margin:0px;
    margin-top: 5px;
    padding:0;
  }

  .bottom-tool {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border-top: 1px solid #d1dbe5;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    background-color: #FFFFFF;
  }

  .key-board-panel {
    margin-bottom: 10px;
  }



  /*    购物车 table 样式    begin   */
  .car-table {
    width: 100%;
    font-size: 14px;
  }

  .car-table-title-tr {
    background-color: #eef1f6;
    height: 40px
  }

  .car-table-body-tr {
    text-align: center;
    height: 40px;
    cursor: pointer;
  }

  .car-table-body-tr td, th {
    border-bottom: 1px solid #dfe6ec;
  }

  .car-table-body-package-tr {
    text-align: center;
    height: 40px;
    background-color: #FFFFFF;
  }

  .pay-img{
    width:25px;
    height:25px;
  }

  .car-footer {
    /*width: 100%;*/
    /*position: absolute;*/
    /*bottom:0px;*/
    /*border-top: 5px solid #eee;*/
    position: absolute;
    bottom:0px;
    width: 100%;
    background-color: #FFFFFF;
    border-top: 8px solid #f5f5f5;
  }
  .operate-item {
    display: flex;
    justify-content: space-between;
    height: 47px;
    line-height: 47px;
    padding: 0px 20px;
    border-bottom:1px dashed #dfdfdf;
    color: #666;
    font-size: 16px;
  }



  .confirm-state{
    padding: 1em;
    border: 2px dashed transparent;
    background: linear-gradient(white,white) padding-box,
    repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
  }
  /*    购物车 table 样式    end   */


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
  /*  订单详情 翻页 end*/

  /** 订单详情  滚动条  begin  **/
  #order-detail-wrapper::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  #order-detail-wrapper::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  #order-detail-wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  /** 订单详情  滚动条  end  **/
  .panel-title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: #FFFFFF;
    color: #333333;
    border-bottom: 5px solid #F2F2F2;
    margin-bottom: 10px;
  }
  /* 遮罩层 */
  .mask-layer {
    /*height:100%;*/
    width:100%;
    position: absolute;
    background-color: black;
    opacity: 0.5;

  }
  .el-button--primary {
    background-color: #EEE;;
    color: #000;
    border: none;
    border-radius: 0px;
    border-left: 5px solid #ffbf34;
  }

  /*.select-pay-type {*/
  /*background-color: #EEE;;*/
  /*color: #000;*/
  /*border: none;*/
  /*border-radius: 0px;*/
  /*border-left: 5px solid #ffbf34;*/
  /*}*/
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
    font-weight: bold;
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
  .pay-show-wrapper {
    margin-top: 10px;
    /*height: 55%;*/
  }

  /*.icon {*/
  /*width: 40px;*/
  /*height: 40px;*/
  /*vertical-align: -0.15em;*/
  /*fill: currentColor;*/
  /*overflow: hidden;*/
  /*}*/


  .car-title {
    width: 100%;
    color: #666;
  }
  .car-title .car-title-item {
    font-size: 14px;
    display: inline-block;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .car-content {
    /*border-top: dashed 1px black;*/
  }
  .car-content-item {
    font-size: 14px;
    word-wrap: break-word;
    color: #666;
  }
  .bottom-btn-wrap {
    width: 83.5%;
    background-color: #FFFFFF;
    padding: 0 10px;
    height: 50px;
    position: absolute;
    bottom: 0;
  }
  .operate-footer {
    height: 50px;
    line-height: 52px;

  }
  .operate-footer-button{
    background-color: #000;
    height: 45px;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
  }
  .discount-package-item {
    border:1px solid black;
    height: 40px;
    line-height:40px;
    font-size: 18px;
    text-align: center;
    margin: 15px;
  }


  .btn-number{
    width:90%;
    height:60px;
    margin:5px;
    background-color: #FFFFFF;
    font-size:22px;
    font-weight: bold;
  }
  .scan-paying{
    position: absolute;
    border-radius:14px;
    left:40%;
    background-color: black;
    opacity: 0.5;
    width:200px;
    height:200px;
    z-index: 999;
  }

  .details-item {
    margin-top: 8px;
    font-size: 14px;
    word-wrap: break-word;
    color: #666;
  }
  .details-button {
    border: 1px solid black;
    color: black;
    background-color: #fff;
  }

  .details-button-active {
    border: none;
    background-color: #ffbf34;
    color: #FFFFFF;
  }
  .pay-btn-style {
    width: 70%;
    font-size: 18px;
  }


  .add-article {
    display: inline-block;
    width: 20px;height: 20px;
    text-align: center;vertical-align: top;
    background-color: #75C2AF;color: #FFFFFF;
    border-radius:50%;margin-left: -4%;
  }
  .qr-btn{

    width:200px;
    height:50px;
    display: inline-block;
    /*background-color:#157EFB ;*/
    line-height: 35px;
    text-align: center;
    color:#606266;
    border-radius: 4px;
    border: 1px solid  #dcdfe6;
    margin-right: 8px;
    position: relative;
    top: 1px;
    width: 80px;
    height: 36px;
  }

  input[node-type=jsbridge]{
    visibility: hidden;
  }
</style>

