<template>
    <el-row class="bottomToolbar"
            v-if="bottomToolBtns.callNumberBtn || bottomToolBtns.orderBtn || bottomToolBtns.payBtn || bottomToolBtns.payBtn || bottomToolBtns.changeOrderBtn || bottomToolBtns.changeTableBtn || bottomToolBtns.rushBtn || bottomToolBtns.checkedWeightBtn || bottomToolBtns.canCelBtn"
    >
        <!--<el-col :span="21">-->
        <el-button size="large" class="bottomToolbarBtn" @click="callNumber"
                   v-if="(shopModel == 2 || shopModel == 7) && bottomToolBtns.callNumberBtn"
                   :disabled="!bottomToolBtns.callNumberBtn">{{$t('bottomBar.callBtn')}}
        </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="toOrderPage"
                   v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.orderBtn"
                   :disabled="!bottomToolBtns.orderBtn">{{$t('bottomBar.orderBtn')}}
        </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="toPayPage"
                   v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.payBtn"
                   :disabled="!bottomToolBtns.payBtn">{{$t('bottomBar.payBtn')}}
        </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="changeOrder1" v-if="bottomToolBtns.changeOrderBtn"
                   :disabled="!bottomToolBtns.changeOrderBtn">{{$t('bottomBar.changeOrderBtn')}}
        </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="openChangeTableDialog()" v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.changeTableBtn"
                   :disabled="!bottomToolBtns.changeTableBtn">{{$t('bottomBar.changeTableBtn')}}
        </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="rushOrder" v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.rushBtn"
                   :disabled="!bottomToolBtns.rushBtn">{{$t('bottomBar.rushBtn')}}
        </el-button>
        <!--<el-button size="large" class="bottomToolbarBtn" @click="checkedWeight" v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.checkedWeightBtn"-->
                   <!--:disabled="!bottomToolBtns.checkedWeightBtn">{{$t('bottomBar.checkedWeightBtn')}}-->
        <!--</el-button>-->
      <el-button size="large" class="bottomToolbarBtn" @click="grantOrder" v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.grantBtn"
                 :disabled="!bottomToolBtns.grantBtn">{{$t('bottomBar.grantBtn')}}
      </el-button>
        <el-button size="large" class="bottomToolbarBtn" @click="canCelOrder"
                   v-if="(shopModel != 2 && shopModel != 7) && bottomToolBtns.canCelBtn"
                   :disabled="!bottomToolBtns.canCelBtn">{{$t('bottomBar.canCelBtn')}}
        </el-button>
        <!--</el-col>-->
      <el-dialog :title="$t('bottomBar.currentTable') + currentTable.table_number" :visible.sync="changeTableDialog.show" :close-on-click-modal="false">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-input type="number" v-model="changeTableDialog.newTableNum" :placeholder="$t('common.placeholder')"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" v-for="i in 9" :key="i">
            <el-button class="btn-number" @click="changeTableKeyBoard(i)">{{i}}</el-button>
          </el-col>
          <el-col :span="8">
            <el-button class="btn-number" @click="changeTableKeyBoard(0)">0</el-button>
          </el-col>
          <el-col :span="8">
            <el-button class="btn-number" @click="changeTableKeyBoard('cleaAll')">{{$t('common.clear')}}</el-button>
          </el-col>
          <el-col :span="8">
            <el-button class="btn-number" @click="changeTableKeyBoard('x')"><span class="iconfont icon-backspace" style="font-size: 28px"></span></el-button>
          </el-col>
        </el-row>
        <div slot="footer" style="text-align: center">
          <el-button @click="changeTableDialog.show = false">{{$t('common.cancel')}}</el-button>
          <el-button type="primary" @click="changeTable">{{$t('common.sure')}}</el-button>
        </div>
      </el-dialog>
    </el-row>
</template>

<script>
    import bus from '@/utils/bus'
    import {getOrderInfoTest} from '@/api/tableApi';
    import {cancelOrder,changeTable, getDiscountInfo, callNumber} from '@/api/orderApi';
    import {getSessionShopDet} from '@/utils/auth'

    /**
     * todo  后续优化
     * 操作事件，可对应更改为 even bus 事件传递，更为方便
     * 不同状态的对应操作按钮：https://sfault-image.b0.upaiyun.com/999/127/999127784-5acf13819be67_articlex
     * lmx
     */
    export default {
        name: 'bottomToolbar',
        props: ['currentTable'],
        data() {
            return {
                shopDet: {},
                shopModel: '',
                bottomToolBtns: {
                    callNumberBtn: false,
                    orderBtn: false,
                    payBtn: false,
                    changeTableBtn: false,
                    changeOrderBtn: false,
                    canCelBtn: false,
                    rushBtn: false,
                    grantBtn: false
                },
                // currentTable: {},
                changeTableDialog: {
                    show: false,
                    newTableNum: ""
                },
            };
        },
        watch: {
            "$route.params": {
                handler: function ({orderId}) {
                    this.changeOrder(orderId);
                },

                deep: true
            }
        },
        mounted() {
            this.shopDet = JSON.parse(getSessionShopDet())
            this.shopModel = this.shopDet.shopMode;
            setTimeout(() => {
                this.changeOrder(this.$route.params.orderId);
            }, 500)
            bus.$on("weightSuccess", () => {
                this.changeOrder(this.$route.params.orderId);
            });


        },
        beforeDestroy() {
            bus.$off("weightSuccess");
            bus.$off("normalOrder");
        },
        methods: {
            changeOrder(orderId) {
                this.bottomToolBtns = {
                    callNumberBtn: false,
                    orderBtn: false,
                    payBtn: false,
                    changeTableBtn: false,
                    changeOrderBtn: false,
                    canCelBtn: false,
                    checkedWeightBtn: false,
                    rushBtn: false
                };
                if (!orderId) {
                    return;
                }
                let that = this;
                getOrderInfoTest(orderId)
                    .then(res => {
                        console.log('getOrderInfoTest', res)
                        if (!res.ok) return
                        let orderInfo = res.data
                        let count = 0;
                        for (var item of orderInfo.orderItemList) {
                            count += item.count
                        }
                        bus.$emit('articleCount', count)
                        let orderState = orderInfo.order_state;
                        let productionStatus = orderInfo.production_status;
                        let payMode = orderInfo.pay_mode;
                        let orderPayMode = orderInfo.pay_mode == 3 || orderInfo.pay_mode == 4;
                        if (that.shopModel == 2 || that.shopModel == 7) {
                            //  电视叫号
                            that.bottomToolBtns = {
                                callNumberBtn: productionStatus == 2 || productionStatus == 3,        //  待叫号 || 已叫号
                                changeOrderBtn: productionStatus == 2 || productionStatus == 3,       //  待叫号 || 已叫号
                            };
                        } else if (that.shopModel == 6) {                 //  大BOSS
                            if (that.shopDet.allowFirstPay == 0) {        //  先付
                                that.bottomToolBtns = {
                                    orderBtn: productionStatus == 0 || (productionStatus == 2 && !orderPayMode) || (productionStatus == 2 && orderState == 2),                                                       //  待下单 || 已支付
                                    payBtn: productionStatus != 0 && (orderState == 1 || (orderState == 1 && (payMode == 3 || payMode == 4))),      //  !待下单 && 未支付 || 付款中
                                    changeTableBtn: orderState == 2,                   //  已消费 || 付款中
                                    changeOrderBtn: orderState == 2,
                                    canCelBtn: productionStatus != 2,                                                                               //  待下单 || 未支付 || 付款中
                                    rushBtn: productionStatus == 2,
                                };
                            } else if (that.shopDet.allowAfterPay == 0) {  //  后付
                                that.bottomToolBtns = {
                                    orderBtn: (orderState == 0 || orderState == 1) && (payMode != 3 && payMode != 4),                               //  待下单 || 未支付  ；#3536 2018年4月24日 今日接到需求，后付款模式如果已支付则暂时不支持加菜
                                    payBtn: productionStatus != 0 && (orderState == 1 || (orderState == 1 && (payMode == 3 || payMode == 4))) && count > 0 || productionStatus != 0 && (orderState == 1 || (orderState == 1 && (payMode == 3 || payMode == 4))) && orderInfo.grant_money > 0 && count == 0,      //  未支付 || 付款中
                                    changeTableBtn: orderState == 1,                                                       //  未支付 || 已消费
                                    changeOrderBtn: productionStatus != 0 && (orderState == 1 || productionStatus == 2) || orderState == 2,                             //  已消费
                                    canCelBtn: productionStatus == 0 && (orderState == 1 || orderState == 0),                                                                             //  待下单 || 未支付 || 付款中
                                    //canCelBtn: productionStatus != 2,                                                                               //  待下单 || 未支付 || 付款中
                                    checkedWeightBtn: orderInfo.need_confirm_order_item,                                                             //  只要订单未核重，则都可以
                                    rushBtn: productionStatus != 0 && (orderState == 1 || productionStatus == 2),
                                    //grantBtn: productionStatus != 0 &&(orderState < 2 || productionStatus == 2),
                                    grantBtn: orderState != 2,
                                };
                            }
                        }
                        //  外带情况下 不允许加菜，换桌，取消订单操作
                        if (that.$route.path.indexOf("/table/packaging") != -1) {
                            that.bottomToolBtns.orderBtn = orderState == 1;
                            that.bottomToolBtns.changeTableBtn = false;
                            that.bottomToolBtns.canCelBtn = false;
                        }
                    });
            },
            operation(type) {
                console.log(type);
                console.log('this.$route.params.orderId', this.$route.params.orderId);
                this.$emit(type);
            },


            toOrderPage() {
                if (this.shopModel == 2 || this.shopModel == 7) {
                } else {
                    let orderId = this.$route.params.orderId;
                    this.$router.push('/order/' + orderId);
                }
            },

            toPayPage() {
                let that = this;
                let orderId = this.$route.params.orderId
                that.$router.push('/pay/' + orderId);
            },
            releaseTable() {
                var orderId = this.currentTable.order_id;
                var tableNumber = this.currentTable.table_number;
                releaseTable(orderId, tableNumber, () => {
                    this.getOrderStateCount();
                    this.$socket.updateTableState(tableNumber, true);
                    this.$message("取消成功~");
                    this.allOrder(false);
                });
            },
            canCelOrder() {
                let cancelTitle = (this.shopModel == 2 || this.shopModel == 7) ? "取餐码" : "桌位";
                let that = this;
                this.$confirm(`是否要取消   ${cancelTitle}   为  【${this.currentTable.table_number}】 的订单吗？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(() => {
                    var orderId = this.currentTable.order_id;
                    cancelOrder(orderId)
                        .then(res => {
                            if (res.ok) {
                                that.$message.success(res.message);
                                bus.$emit('cancelOrder')
                            } else {
                                that.$message.error(res.message);
                            }
                        })
                }).catch(() => {
                });
            },

            changeOrder1() {
                let that = this;
                getDiscountInfo(this.currentTable.order_id)
                    .then(res => {
                        console.log('getDiscountInfo',res)
                        if (res.ok && res.data) {
                            if(res.data.discountMoney > 0){
                                that.$message.warning(`【折扣：￥${res.data.discountMoney}】主订单或者子订单进行过折扣操作，暂不允许退菜！`);
                                return;
                            }
                            if(res.data.easyMoney > 0){
                                that.$message.warning(`【抹零：￥${res.data.easyMoney}】主订单或者子订单进行过抹零操作，暂不允许退菜！`);
                                return;
                            }
                            bus.$emit("changeOrder","isChange");
                        }
                    })
            },
            callNumber() {
                callNumber(this.currentTable.serial_number)
                    .then(res => {
                        if(res.ok) {
                            console.log('callNumber',res)
                            //this.getOrderStateCount();
                            this.$store.commit("setCallNumber", this.currentTable)
                            bus.$emit('callNumber')
                        }

                    });
            },

            checkedWeight() {
                bus.$emit("checkedWeight", "checkedWeight");
            },
            rushOrder() {
                bus.$emit("rushOrder", "rushOrder");
            },
            grantOrder() {
                let that = this;
                getDiscountInfo(this.currentTable.order_id)
                    .then(res => {
                        console.log('getDiscountInfo',res)
                        if (res.ok && res.data) {
                            if(res.data.discountMoney > 0){
                                that.$message.warning(`【折扣：￥${res.data.discountMoney}】主订单或者子订单进行过折扣操作，暂不允许赠菜！`);
                                return;
                            }
                            if(res.data.easyMoney > 0){
                                that.$message.warning(`【抹零：￥${res.data.easyMoney}】主订单或者子订单进行过抹零操作，暂不允许赠菜！`);
                                return;
                            }
                            bus.$emit("grantOrder", "grantOrder");
                        }
                    })

            },

            openChangeTableDialog() {
                this.changeTableDialog.show = true;
                this.changeTableDialog.newTableNum = "";
            },
            changeTable() {
                let tableInfo = {
                    order_id: this.currentTable.order_id,
                    from_table_number: this.currentTable.table_number,
                    to_table_number: this.changeTableDialog.newTableNum,
                };
                console.log('换桌参数', tableInfo)
                changeTable(tableInfo).then(res => {
                    if (res.ok) {
                        this.$message("换桌成功!");
                        this.changeTableDialog.show = false;
                        bus.$emit('resetAllOrder')
                    } else {
                        this.$message.warning(res.message);
                    }
                });
            },
            changeTableKeyBoard(number) {
                var reg = /^[0-9]*[0-9][0-9]*$/g
                if (reg.exec(number)) {
                    this.changeTableDialog.newTableNum += number.toString()
                }
                if (number == "cleaAll") {
                    this.changeTableDialog.newTableNum = "";
                }
                if (number == 'x') {
                    if (this.changeTableDialog.newTableNum.length > 0) {
                        let count = this.changeTableDialog.newTableNum;
                        this.changeTableDialog.newTableNum = count.substring(0, count.length - 1);
                    }
                }
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottomToolbar {
        bottom: 0px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 10px;
        background-color: #fff;
    }

    .bottomToolbarBtn {
        background-color: #000;
        width: 80px;
        height: 44px;
        font-size: 18px;
        color: #fff;
        border-radius: 5px;
    }

    button:disabled {
        border: 1px solid #DDD;
        background-color: #eef1f6;
        color: #bfcbd9;
    }

    .btn-number {
        width: 100%;
        height: 50px;
        margin-top: 15px;
        background-color: #f6f6f6;
        font-size: 22px;
        font-weight: bold;
    }
</style>
