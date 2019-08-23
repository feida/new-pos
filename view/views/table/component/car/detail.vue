<template>
    <div>
        <div v-if="orderInfo.id" style="background-color: #eee">
            <CarDetail :orderInfo="orderInfo" :shopModel="shopModel"></CarDetail>
            <div :style="{ height: carTableHeight + 'px' }"
                 style="overflow-y: auto;background-color: #FFFFFF; margin-top: 5px;" id="order-detail-wrapper">
                <div class="order-page-wrapper" id="order-page-wrapper">
                    <div class="pre-page" @click="orderPageOperation(-1)"><span class="el-icon-caret-top"
                                                                                style="font-size: 26px;"></span></div>
                    <div class="next-page" @click="orderPageOperation(1)"><span class="el-icon-caret-bottom"
                                                                                style="font-size: 26px;"></span></div>
                </div>
                <!--购物车 菜品详情-->
                <div id="car">
                    <ul class="car-title">
                        <li class="car-title-item" style="width: 15%;text-align: center; text-indent: 9px;"
                            v-if="checkAllFlag == false" @click="checkAll(true)">{{$t('common.all')}}
                        </li>
                        <li class="car-title-item" style="width: 15%; text-align: center; text-indent: 9px;"
                            v-if="checkAllFlag == true" @click="checkAll(false)">{{$t('common.cancel')}}
                        </li>
                        <li class="car-title-item" style="width: 40%;">{{$t('order.articleName')}}</li>
                        <li class="car-title-item" style="width: 15%;">{{$t('order.articleNum')}}</li>
                        <li class="car-title-item" style="width: 20%;text-align:right;">{{$t('order.articlePrice')}}</li>
                    </ul>
                    <!--购物车 内容-->
                    <ul class="car-title car-content" v-for="(article, index) in car" @click="checkOne(article)">
                        <hr style="border:1px dashed #E0E0E0; width: 90%;">
                        <div v-show="(article.type == 3 && !!article.tempRefundCount)? false: true ">
                            <li class="car-title-item car-content-item" style="width: 15%;text-align: center;"
                                v-if="article.checked">
                                <svg style="width: 14px;height: 14px;" aria-hidden="true">
                                    <use xlink:href="#icon-duihao"></use>
                                </svg>
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-align: center;visibility: hidden" v-else>
                                <svg style="width: 14px;height: 14px;" aria-hidden="true">
                                    <use xlink:href="#icon-duihao"></use>
                                </svg>
                            </li>

                            <li class="car-title-item car-content-item" style="width: 40%;"
                                :class="(article.type==8 && article.needRemind)?'weight-article':''">
                                <span style="display: inline-block;width: 80%;">{{article.name}}</span>
                                <span style="display: inline-block;
                 width: 20px;height: 20px;
                 text-align: center;vertical-align: top;
                 background-color: #75C2AF;color: #FFFFFF;
                 border-radius:50%;margin-left: -4%;"
                                      v-if="article.notes && article.grantCount == 0">
                        加
                </span>
                                <!--<span style="display: inline-block;
                                 width: 20px;height: 20px;
                                 text-align: center;vertical-align: top;
                                 background-color: #75C2AF;color: #FFFFFF;
                                 border-radius:50%;margin-left: -4%;"
                                      v-if="article.grantCount > 0">
                                        赠
                                </span>-->
                            </li>
                            <li class="car-title-item car-content-item"
                                :class="(article.type==8 && article.needRemind)?'weight-article':''"
                                style="width: 15%;vertical-align: top;">
                                {{article.count}}
                            </li>
                            <li class="car-title-item car-content-item"
                                :class="(article.type==8 && article.needRemind)?'weight-article':''"
                                style="width: 20%;text-align: right; vertical-align: top">
                                ¥{{formatMoney(article.price||0)}}
                            </li>
                        </div>

                        <div v-if="article.type==3 && !article.tempRefundCount" style="margin-left: 5px;"
                             v-for="item in article.mealItems">
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-align: center;visibility: hidden">
                            <li class="car-title-item car-content-item" style="width: 40%;">
                                <span style="display: inline-block;width: 80%;">{{item.name}}</span>
                            <li class="car-title-item car-content-item" style="width: 15%;vertical-align: top;">
                                {{item.count}}
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 20%;text-align: right; vertical-align: top">¥{{formatMoney(item.price)}}
                            </li>
                        </div>


                        <div v-show="article.tempRefundCount">
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-align: center;visibility: hidden;">
                                <svg style="width: 14px;height: 14px;" aria-hidden="true">
                                    <use xlink:href="#icon-duihao"></use>
                                </svg>
                            </li>
                            <li class="car-title-item car-content-item" style="width: 40%;color: #999999; ">
                                <span style="display: inline-block;width: 80%;text-decoration: line-through;">{{article.name}}</span>
                                <span style="display: inline-block; width: 20px;height: 20px;margin-left: -4%;
                        text-align: center;vertical-align: top;
                       background-color: #ef5350;color: #FFFFFF;border-radius:50%;"
                                      v-show="article.tempRefundCount">退</span>
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-decoration: line-through;color:#999999 ;vertical-align: top;">
                                {{article.tempRefundCount}}
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 20%;text-decoration: line-through;text-align: right; color: #999999;vertical-align: top;">
                                ¥ {{formatMoney((article.tempRefundCount * article.unitPrice || 0))}}
                            </li>
                        </div>

                        <div v-show="article.tempGrantCount">
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-align: center;visibility: hidden;">
                                <svg style="width: 14px;height: 14px;" aria-hidden="true">
                                    <use xlink:href="#icon-duihao"></use>
                                </svg>
                            </li>
                            <li class="car-title-item car-content-item" style="width: 40%;color: #999999; ">
                                <span style="display: inline-block;width: 80%;text-decoration: line-through;">{{article.name}}</span>
                                <span style="display: inline-block; width: 20px;height: 20px;margin-left: -4%;
                        text-align: center;vertical-align: top;
                       background-color: #75C2AF;color: #FFFFFF;border-radius:50%;"
                                      v-show="article.tempGrantCount">赠</span>
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-decoration: line-through;color:#999999 ;vertical-align: top;">
                                {{article.tempGrantCount}}
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 20%;text-decoration: line-through;text-align: right; color: #999999;vertical-align: top;">
                                ¥ {{formatMoney((article.tempGrantCount * article.unitPrice || 0))}}
                            </li>
                        </div>

                        <div v-if="article.type==3 && article.tempRefundCount" style="margin-left: 5px;"
                             v-for="item in article.mealItems">
                            <li class="car-title-item car-content-item"
                                style="width: 15%;text-align: center;visibility: hidden">
                            <li class="car-title-item car-content-item" style="width: 40%;">
                                <span style="display: inline-block;width: 80%;text-decoration: line-through;color:#999999 ;">{{item.name}}</span>
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 15%;vertical-align: top;text-decoration: line-through;color:#999999 ;">
                                {{item.count}}
                            </li>
                            <li class="car-title-item car-content-item"
                                style="width: 20%;vertical-align: top;text-decoration: line-through;color:#999999 ; text-align: right;">
                                ¥{{formatMoney(item.price)}}
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div class="car-footer">
                <el-row class="order-payment">
                    <el-col :span="12">
                      {{$t('order.article')}}:<span
                            class="order-payment-num">{{ orderInfo.count_with_child || orderInfo.article_count }}</span>
                    </el-col>
                    <el-col :span="12">
                      {{$t('order.totalNum')}}:<span class="order-payment-num">￥{{ formatMoney(orderInfo.amount_with_children || orderInfo.order_money || 0) }}</span>
                    </el-col>
                </el-row>
                <hr style="border: 1px dashed #dfdfdf; width: 90%;">
                <el-row type="flex" justify="space-around" class="order-operate-button">
                    <el-col :span="12" style="text-align: center;">
                        <el-button class="operate-button operate-button-push-order" @click="printKitchen"
                                :disabled="articleItemCount" :loading="isPrintKitchen">{{$t('detail.printKitchen')}}
                        </el-button>
                    </el-col>
                    <el-col :span="12" style="text-align: center;">
                        <el-button class="operate-button operate-button-push-order" @click="clickPrintTotal"
                                :disabled="articleItemCount" :loading="isPrintTotal">{{$t('detail.printTotal')}}
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div v-else>
            <div style="margin: 0 auto;">
                <img src="../../../../assets/shaolei_img/symbols-meiyoushangpin.png" alt=""
                     style="width: 200px;width: 200px;margin-top: 150px;margin-left: 60px">
            </div>
        </div>

        <!-- 退菜弹窗-->
        <el-dialog :visible.sync="changeOrder.show" width="90%" :close-on-click-modal="false"
                   :before-close="closeChangeOrderDialog" id="refundDialog" class="el-dialog__wrap">
            <div class="dialog-title-warp">
                <span slot="title" class="dialog-title">{{$t('detail.refund')}}</span>
            </div>
            <div v-loading="refundLoading" element-loading-text="Loading..." style="padding: 0px 20px;">
                <div style="background-color: #F3F5F9; border: 1px solid #333;border-radius: 5px;">
                    <ul class="change-order-content" style="">
                        <li>
                            <span style="width: 35%; text-align: left;">{{$t('order.articleName')}}</span>
                            <span style="width: 25%;">{{$t('detail.price')}}</span>
                            <span style="width: 30%;">{{$t('order.articleNum')}}</span>
                        </li>
                    </ul>
                    <ul class="change-order-content" id="change-pages"
                        style="overflow-y: scroll;height:180px;max-height: 220px;">
                        <li v-for="(item,index) in changeOrderItem">
                            <div class="article-item" style="width: 35%; text-align: left;line-height: 50px;">
                                {{item.name}}
                            </div>
                            <div class="article-item" style="width: 25%;line-height: 50px">{{(item.tempPrice /
                                item.tempCount).toFixed(2)}}
                            </div>
                            <div class="article-item" style="width: 30%; line-height: 50px;">
                                <p class="control-count" @click="cutArticleCount(item)">-</p>
                                &nbsp;{{item.refundCount}}&nbsp;
                                <p class="control-count" @click="addArticleCount(item)">+</p>
                            </div>
                        </li>
                    </ul>
                    <div class="refund-page-wrapper">
                        <div class="pre-page" @click="changeOrderPages(-1)"><span class="el-icon-caret-top"
                                                                                  style="font-size: 26px;margin-left: 2px;"></span>
                        </div>
                        <div class="next-page" @click="changeOrderPages(1)"><span class="el-icon-caret-bottom"
                                                                                  style="font-size: 26px;margin-top: 4px;margin-left: 2px;"></span>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 10px; width: 60%;" v-if="refundRemarks && refundRemarks.length > 0">
                    <h3 style="margin-left: 5px;display: inline-block;width: 20%;font-size: 20px;color: #666666;">
                      {{$t('detail.whyRefund')}}:</h3>
                    <el-select v-model="refundRemark" :placeholder="$t('common.selectPla')" style="width: 50%;">
                        <el-option
                                v-for="item in refundRemarks"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id + '_' + item.name">
                        </el-option>
                    </el-select>
                </div>

                <div style="margin-top: 10px; width: 60%;">
                    <h3 style="margin-left: 5px;display: inline-block;width: 20%;font-size: 20px;color: #666666;">
                      {{$t('detail.refundPsd')}}:</h3>
                    <input type="password" autocomplete="new-password" readonly
                           onfocus="this.removeAttribute('readonly');"
                           style="display: inline-block; border:1px solid grey; height: 34px;border-radius: 5px;width: 50%;"
                           data-name="refundCommand" v-model="refundCommand" @click="focus()">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
        <div style="width: 100%;margin-top: 20px;text-align: center;">
          <el-button @click="closeChangeOrderDialog()">{{$t('common.cancel')}}</el-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <el-button @click="saveChange" :disabled="hasSaveRefund"
                     style="background-color: #000;color: #fff;">{{$t('common.sure')}}</el-button>
        </div>
      </span>
        </el-dialog>

        <!--称重，编辑菜品-->
        <el-dialog :visible.sync="weightDialog.show">
            <template>
                <span style="font-size: 24px;margin-left: 20px;">{{weightDialog.article.name}}</span>：
                <input type="text" style="height: 40px; border: 1px solid black; font-size: 24px; width: 50%;"
                       readonly
                       v-model="weightDialog.article.weight" autofocus="true"> <span style="font-size: 24px;">斤</span>
                <div style="margin-top: 5px;margin-bottom: 5px;">
                    <el-col :span="24" :offset="1">
                        <el-col :span="8" v-for="i in 9" :key="i">
                            <el-button class="btn-number" @click="dialogKeyBoard(i)">{{i}}</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button class="btn-number" @click="dialogKeyBoard('.')">.</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button class="btn-number" @click="dialogKeyBoard('0')">0</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button class="btn-number" @click="dialogKeyBoard('←')">←</el-button>
                        </el-col>
                    </el-col>
                </div>

            </template>
            <span slot="footer" class="dialog-footer">
        <div style="width: 100%;text-align: right;margin-top: 20px;">
        <el-button @click="weightDialog.show=false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="saveCheckedWeight">{{$t('common.sure')}}</el-button>
        </div>
      </span>
        </el-dialog>
        <!--赠菜弹框-->

        <el-dialog :visible.sync="identityModal" width="90%" :close-on-click-modal="false"
                   :before-close="identityDialog" id="businessDialog" class="el-dialog__wrap">
            <div class="dialog-title-warp">
                <span slot="title" class="dialog-title">{{$t('detail.grant')}}</span>
            </div>
            <div v-loading="grantLoading" element-loading-text="Loading ..." style="padding: 0px 20px;">
                <div style="background-color: #F3F5F9; border: 1px solid #333;border-radius: 5px;">
                    <ul class="change-order-content" style="">
                        <li>
                            <span style="width: 35%; text-align: left;">{{$t('order.articleName')}}</span>
                            <span style="width: 25%;">{{$t('detail.price')}}</span>
                            <span style="width: 30%;">{{$t('order.articleNum')}}</span>
                        </li>
                    </ul>
                    <ul class="change-order-content" id="change-pages"
                        style="overflow-y: scroll;height:180px;max-height: 220px;">
                        <li v-for="(item,index) in changeOrderItem">
                            <div class="article-item" style="width: 35%; text-align: left;line-height: 50px;">
                                {{item.name}}
                            </div>
                            <div class="article-item" style="width: 25%;line-height: 50px">{{(item.tempPrice /
                                item.tempCount).toFixed(2)}}
                            </div>
                            <div class="article-item" style="width: 30%; line-height: 50px;">
                                <p class="control-count" @click="cutArticleCount1(item)">-</p>
                                &nbsp;{{item.grantCount}}&nbsp;
                                <p class="control-count" @click="addArticleCount1(item)">+</p>
                            </div>
                        </li>
                    </ul>
                    <div class="refund-page-wrapper">
                        <div class="pre-page" @click="changeOrderPages(-1)"><span class="el-icon-caret-top"
                                                                                  style="font-size: 26px;margin-left: 2px;"></span>
                        </div>
                        <div class="next-page" @click="changeOrderPages(1)"><span class="el-icon-caret-bottom"
                                                                                  style="font-size: 26px;margin-top: 4px;margin-left: 2px;"></span>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 10px; width: 60%;" v-if="grantRemarks && grantRemarks.length > 0">
                    <h3 style="margin-left: 5px;display: inline-block;width: 20%;font-size: 20px;color: #666666;">
                      {{$t('detail.whyGrant')}}:</h3>
                    <el-select v-model="grantRemark" :placeholder="$t('common.selectPla')" style="width: 50%;">
                        <el-option
                                v-for="item in grantRemarks"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id + '_' + item.name">
                        </el-option>
                    </el-select>
                </div>

                <div style="margin-top: 10px; width: 60%;">
                    <h3 style="margin-left: 5px;display: inline-block;width: 20%;font-size: 20px;color: #666666;">
                      {{$t('detail.grantPsd')}}:</h3>
                    <input type="password" autocomplete="new-password" readonly
                           onfocus="this.removeAttribute('readonly');"
                           style="display: inline-block; border:1px solid grey; height: 34px;border-radius: 5px;width: 50%;"
                           data-name="closeBusiness" v-model="identityPassword" @click="focus()">
                </div>
                <div style="margin-top: 10px; width: 60%;">
                    <p style="color:red;">
                        （{{$t('detail.grantTips')}}
                    </p>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
        <div style="width: 100%;margin-top: 20px;text-align: center;">
          <el-button @click="identityDialog()">{{$t('common.cancel')}}</el-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <el-button @click="grantOrder" style="background-color: #000;color: #fff;">{{$t('common.sure')}}</el-button>
        </div>
      </span>
        </el-dialog>
    </div>
</template>

<script>
    import {
        getOrderDetail,
        refundOrderNew,
        grantArticleByOrderIdAndOrderItems,
        getRemarks,
        reminderPrint,
        printTotal,
        printKitchenTotal,
        checkWeight
    } from '../../../../api/orderApi';
    import bus from '../../../../utils/bus'
    import CarDetail from '../basic/car-detail.vue'
    import {getSessionShopDet, getSession} from '@/utils/auth'

    export default {
        name: 'detail',
        components: {CarDetail},
        data() {
            return {
                innerVisible: false,
                orderId: null,
                maskHeight: 0, // 遮罩层的高度
                panelTitleHeight: 0, // 客单的高度
                showDetails: false,
                totalPrice: 0,
                amountCount: 0,
                carTableHeight: 0,
                orderInfo: {},
                car: [],

                // 退菜开始需要的选项
                changeOrder: { // 退菜
                    isClick: false,
                    isCheck: false,
                    isCheckOne: false,
                    flags: false,
                    currentIndex: 0,
                    show: false, // 退菜弹窗显示
                },
                currentCarTableRow: {
                    index: 0,
                    info: {}
                },
                checkAllFlag: false,
                changeOrderItem: [],
                refundRemarks: [],
                refundCommand: '', // 退菜口令
                refundMoneyMessage: '暂无消息', // 退菜提醒，比如，退了多少钱
                refundList: [], // 退菜数组
                shopDet: {},
                orderPaymentList: [],
                refund: {},
                localRefund: {},
                refundMoney: 0, // 退的所有的钱
                refundAllCount: 0,
                refundMealAllNumber: 0,// 退掉的总的 餐盒个数
                refundMealAllPrice: 0,  // 退掉的总的 餐盒钱数
                tipRefundMoney: 0,
                refundRemark: '',
                currentInput: false,
                radio: 0,
                refundPaymentList: [],
                shopModel: '',
                customerInfo: {},
                hasSaveRefund: false,
                refundLoading: false,
                weightDialog: { // 称重包编辑弹窗
                    show: false,
                    title: '',
                    article: {},
                },
                refundService: {},
                shopId: '',
                articleItemCount: false,
                identityModal: false,
                identityPassword: '',
                grantRemarks: [],
                grantRemark: '',
                grantLoading: false,
                isPrintKitchen: false,
                isPrintTotal: false,
            };
        },
        watch: {
            '$route.params': function (params) {
                this.$message.closeAll();
                this.orderId = params.orderId || null;
                this.initOrder();
                this.closeChangeOrderDialog();
            }
        },
        created() {
            this.shopDet = JSON.parse(getSessionShopDet())
            this.shopModel = this.shopDet.shopMode;
        },
        mounted() {
            let that = this;
            // 初始化 购物车 Table 的高度
            this.carTableHeight = document.body.clientHeight - 300;
            this.orderId = this.$route.params.orderId || null;
            this.initOrder();
            bus.$on("changeOrder", function (change) {

                if (that.changeOrderItem.length <= 0) return that.$message.warning("请选择菜品");
                /*if (that.orderInfo.order_pos_discount_money > 0) return that.$message.warning(`【折扣：￥${that.orderInfo.order_pos_discount_money}】折扣订单，暂不允许退菜！`);
                if (that.orderInfo.erase_money > 0) return that.$message.warning(`【抹零：￥${that.orderInfo.erase_money}】抹零订单，暂不允许退菜！`);
                var exemptionMoney = +that.orderInfo.exemption_money;*/
                that.changedOrder(0);
                that.refundCommand = "";
                that.changeOrder.show = true;
            });
            bus.$on('refund-command', function (value) {
                that.refundCommand = value;
            })
            bus.$on("checkedWeight", function () {
                if (that.changeOrderItem.length > 1) {
                    return that.$message.warning("核重每次只能编辑一种菜品");
                }
                if (that.changeOrderItem.length < 1) {
                    return that.$message.warning("请选择需要核重的菜品");
                }
                if (that.changeOrderItem[0].type != 8) {
                    return that.$message.warning(`【${that.changeOrderItem[0].name}】非称重菜品，无需后厨确认`);
                }
                that.weightDialog.show = true;
                that.weightDialog.article = that.changeOrderItem[0]
            })

            bus.$on("rushOrder", function () {
                if (that.changeOrderItem.length <= 0) {
                    that.$message.warning("请选择菜品");
                    return;
                }
                that.rushOrder();

            })
            //bus.$on("refundOrder", msgInfo => this.initOrder())
            bus.$on('articleCount', count => {
                if (count == 0) {
                    this.articleItemCount = true
                } else {
                    this.articleItemCount = false
                }
            })
            bus.$on("grantOrder", function () {
                if (that.changeOrderItem.length <= 0) {
                    that.$message.warning("请选择菜品");
                    return;
                } else {
                    let arr = that.changeOrderItem.filter(item => item.type != 1 && item.type != 2 && item.type != 5)
                    if (arr.length > 0) {
                        that.$message.warning("只能赠单品、新规格、老规格");
                        return;
                    }
                }
                that.grantOrderInit();
                that.identityPassword = '';
                that.identityModal = true


            })
            bus.$on('close-business', function (value) {
                that.identityPassword = value;
            });

            bus.$on('updateOrder', function (value) {
                that.initOrder();
                that.identityModal = false
                that.weightDialog.show = false;
                that.changeOrder.show = false;
            });

        },

        beforeDestroy() {
            bus.$off('checkedWeight')
            bus.$off('changeOrder')
            bus.$off("refund-command")
            bus.$off("rushOrder")
            bus.$off("grantOrder")
            //bus.$off("refundOrder")
            bus.$off("article")
            bus.$off("close-business");
            bus.$off("updateOrder");

        },

        methods: {
            get(key) {
                this.refundCommand = (key == 'del' ? this.refundCommand.substring(0, this.refundCommand.length - 1) : this.refundCommand += key);
            },
            //===============================
            //  初始化购物车
            //===============================
            initOrder() {
                let that = this;
                let query = this.orderId
                getOrderDetail(query)
                    .then(res => {
                        if (res.ok && res.data) {
                            that.orderInfo = res.data;
                            that.initCar(that.orderInfo);
                        }
                    })
            },
            initCar(orderInfo) {
                let orderItemMap = {};
                for (let orderItem of orderInfo.order_item_list) {
                    let item = {};
                    // 套餐主项
                    if (orderItem.type === 3) {
                        let packageItem = orderItemMap[orderItem.id];
                        if (packageItem && packageItem.id) {
                            orderItem.mealItems = packageItem.mealItems;
                        }
                    }
                    // 套餐子项
                    if (orderItem.type === 4) {
                        let packageItem = orderItemMap[orderItem.parent_id] || {};
                        packageItem.mealItems = (packageItem.mealItems || []);
                        packageItem.mealItems.push({
                            id: orderItem.article_id,
                            count: orderItem.count,
                            name: orderItem.article_name,
                            price: orderItem.original_price
                        });
                        if (!packageItem.id) {
                            packageItem.id = orderItem.parent_id;
                            orderItemMap[packageItem.id] = packageItem;
                        }
                        continue;
                    }
                    item = {
                        time: this.$utils.generateUUID(),
                        id: orderItem.article_id,
                        orderItemId: orderItem.id,
                        weight: orderItem.weight,
                        ownId: orderItem.id, // 新增，订单id
                        orderId: orderItem.order_id, // 主订单id
                        unitPrice: orderItem.unit_price, // 新增 unitPrice
                        payModeId: orderItem.payment_mode_id, // 支付类型
                        originCount: orderItem.orgin_count, // 原始的菜品数量

                        mealFeeNumber: orderItem.meal_fee_number, // 每一项所有的餐盒数量
                        mealFeeNumberOne: orderItem.meal_fee_number / orderItem.count, // 每一项的每一道菜所需要的餐盒个数
                        refundChange: 0, // 这个字段用来计算每一个菜品项需要退多少餐盒

                        count: orderItem.count,   // 剩余的菜品数量
                        tempCount: orderItem.count,
                        tempRefundCount: orderItem.refund_count,

                        needRemind: orderItem.need_remind,
                        type: orderItem.type,
                        name: orderItem.article_name,
                        price: +orderItem.final_price,
                        tempPrice: +orderItem.final_price,

                        isOpen: false,
                        status: orderItem.status,

                        extraPrice: 0, // 新增 额外费用
                        grantCount: orderItem.grant_count,
                        tempGrantCount: orderItem.grant_count,
                    };
                    if (item.type === 3) {
                        item.mealItems = orderItem.mealItems;
                    }
                    orderItemMap[orderItem.id] = item;
                }
                this.car = [];  // 清空购物车
                // 插入购物车
                for (let key in orderItemMap) {
                    // 套餐总价（加上子项差价）
                    if (orderItemMap[key].type === 3) {
                        for (let items of orderItemMap[key].mealItems) {
                            if (items.count > 0) {
                                orderItemMap[key].price += items.price;
                            }
                        }
                    }
                    this.car.push(orderItemMap[key]);
                }
                //子项订单遍历
                let chrildrenItemMap = {};
                if (orderInfo.childreorder_item_list.length > 0) {
                    for (let childrenOrderItem of orderInfo.childreorder_item_list) {
                        let childrenItem = {};
                        // 套餐主项
                        if (childrenOrderItem.type === 3) {
                            let packageItem = orderItemMap[childrenOrderItem.id];
                            if (packageItem && packageItem.id) {
                                childrenOrderItem.mealItems = packageItem.mealItems;
                            }
                        }
                        // 套餐子项
                        if (childrenOrderItem.type === 4) {
                            let packageItem = orderItemMap[childrenOrderItem.parent_id] || {};
                            packageItem.mealItems = (packageItem.mealItems || []);
                            packageItem.mealItems.push({
                                id: childrenOrderItem.article_id,
                                count: childrenOrderItem.count,
                                name: childrenOrderItem.article_name,
                                price: childrenOrderItem.original_price
                            });

                            if (!packageItem.id) {
                                packageItem.id = childrenOrderItem.parent_id;
                                orderItemMap[packageItem.id] = packageItem;
                            }
                            continue;
                        }
                        childrenItem = {
                            time: this.$utils.generateUUID(),
                            id: childrenOrderItem.article_id,
                            orderItemId: childrenOrderItem.id,
                            ownId: childrenOrderItem.id, // 订单ID
                            orderId: childrenOrderItem.order_id, // 主订单ID
                            unitPrice: childrenOrderItem.unit_price, // 单价
                            payModeId: childrenOrderItem.payment_mode_id,//
                            originCount: childrenOrderItem.orgin_count,


                            mealFeeNumber: childrenOrderItem.meal_fee_number, // 每一项所有的餐盒数量
                            mealFeeNumberOne: childrenOrderItem.meal_fee_number / childrenOrderItem.count, // 每一项的餐盒个数
                            refundChange: 0, // 这个字段用来计算每一个菜品项需要退多少餐盒

                            count: childrenOrderItem.count, // 数量
                            tempCount: childrenOrderItem.count, // 剩余数量

                            tempRefundCount: childrenOrderItem.refund_count,

                            needRemind: childrenOrderItem.need_remind,
                            type: childrenOrderItem.type, // 类型
                            name: childrenOrderItem.article_name,
                            price: childrenOrderItem.final_price,
                            tempPrice: childrenOrderItem.final_price,

                            isOpen: false,
                            notes: '(加菜)',
                            status: childrenOrderItem.status,
                            weight: childrenOrderItem.weight,
                            extraPrice: 0, // 新增 额外费用(餐盒费，服务费等) 注意，初代版本不要求，所以是0
                            grantCount: childrenOrderItem.grant_count,
                            tempGrantCount: childrenOrderItem.grant_count,


                        };
                        if (childrenItem.type === 3) {
                            childrenItem.mealItems = childrenOrderItem.mealItems;
                        }
                        chrildrenItemMap[childrenOrderItem.id] = childrenItem;
                    }
                    for (let key in chrildrenItemMap) {
                        if (chrildrenItemMap[key].type === 3) {
                            for (let items of chrildrenItemMap[key].mealItems) {
                                if (items.count) {
                                    chrildrenItemMap[key].price += items.price;
                                }
                            }
                        }
                        this.car.push(chrildrenItemMap[key]);
                    }
                }
                if (orderInfo.service_price && this.shopDet.serviceType == 0) {
                    this.car.push({
                        time: this.$utils.generateUUID(),
                        serverPrice: true,
                        count: orderInfo.customer_count,
                        name: "服务费",
                        tempCount: orderInfo.customer_count,
                        status: 1,
                        type: 0,
                        unitPrice: orderInfo.service_price / orderInfo.customer_count,
                        tempPrice: orderInfo.service_price,
                        price: orderInfo.service_price,
                    });
                }
                if (orderInfo.service_price && this.shopDet.serviceType == 1) {
                    var upgradeService = [
                        {
                            name: this.shopDet.sauceFeeName,
                            count: orderInfo.sauce_fee_count,
                            price: orderInfo.sauce_fee_price,
                            type: 10
                        },
                        {
                            name: this.shopDet.towelFeeName,
                            count: orderInfo.towel_fee_count,
                            price: orderInfo.towel_fee_price,
                            type: 11
                        },
                        {
                            name: this.shopDet.tablewareFeeName,
                            count: orderInfo.tableware_fee_count,
                            price: orderInfo.tableware_fee_price,
                            type: 12
                        }
                    ]
                    for (let i = 0; i < upgradeService.length; i++) {
                        if (upgradeService[i].price > 0) {
                            this.car.push({
                                time: this.$utils.generateUUID(),
                                serverPrice: true,
                                count: upgradeService[i].count,
                                name: upgradeService[i].name,
                                tempCount: upgradeService[i].count,
                                status: 1,
                                type: upgradeService[i].type,
                                unitPrice: upgradeService[i].price / upgradeService[i].count,
                                tempPrice: upgradeService[i].price,
                                price: upgradeService[i].price,
                            });
                        }
                    }
                }

                // 餐盒费
                if (orderInfo.meal_all_number && orderInfo.meal_fee_price) {
                    this.car.push({
                        time: this.$utils.generateUUID(),
                        serverPrice: true,
                        count: orderInfo.meal_all_number,
                        name: "餐盒费",
                        price: orderInfo.meal_fee_price,
                    });
                }

            },

            showDetail() {
                this.showDetails = !this.showDetails;
                this.getCustomerInfo(this.orderInfo.customer_id);
            },

            saveCheckedWeight() {
                if (weight = '') return this.$message.warning("重量不能为空")
                let that = this;
                // let orderId = this.weightDialog.article.orderItemId;
                let weight = this.weightDialog.article.weight;
                let weightArr = this.weightDialog.article.weight.toString().split('.');
                let jin = weightArr[0] + '斤';
                let liang = weightArr[1];
                liang = liang > 0 ? liang + '两' : '';
                let articleName = this.weightDialog.article.name.split('(')[0].toString() + '(' + jin + liang + ')';
                let qurey = {
                    order_item_id: this.weightDialog.article.orderItemId,
                    weight: weight,
                    article_name: articleName
                }
                checkWeight(qurey)
                    .then(res => {
                        if(res.ok) {
                            that.weightDialog.show = false;
                            that.recoverData();
                            that.initOrder();
                            that.$message("核重成功");
//                        bus.$emit("weightSuccess");
//                        bus.$emit("refresh-turnover");
                        }

                    })
            },
            dialogKeyBoard(number) {
                let count = this.weightDialog.article.weight.toString()
                if (number == "←") {
                    let len = count.length
                    this.weightDialog.article.weight = count.substring(0, len - 1);
                } else {
                    let tempNumber = count.split('.')[1];
                    if (tempNumber && tempNumber.length >= 1) {
                        return this.$message.warning("最多只能保留一位小数点")
                    }
                    this.weightDialog.article.weight = count + number;
                }
            },
            // 获取用户信息
            getCustomerInfo(customerId) {
                let that = this;
                if (!customerId) return;
                getCustomerInfo(customerId, function (customerInfo) {
                    that.customerInfo = customerInfo;
                })
            },
            //===============================
            //  退菜功能
            //===============================

            // 关闭弹窗
            changeClose(done) {
                this.$confirm('确认关闭？').then(_ => done()).catch(_ => {
                });
            },

            choseCarTableRow(article, index) {  //  展开套餐，出现单选和全选
                if (article.serverPrice) return;
                if (article.type === 3) { // 套餐
                    article.isOpen = !article.isOpen;
                }
                this.changeOrder.isClick = true;
                this.currentCarTableRow.info = article;
                this.currentCarTableRow.index = index;
            },

            checkOne: function (item) { // 单选
                if (item.count <= 0) {
                    this.$message.warning("当前所选菜品数量为0")
                    return
                }
                if (item.name == '餐盒费') {
                    return this.$message.warning("餐盒费不能单独退")
                }

                if (typeof item.checked == 'undefined' || item.checked == false) {
                    this.$set(item, "checked", true);
                    if (item.status != 3) this.changeOrderItem.push(item);
                } else {
                    item.checked = !item.checked;
                    let that = this;
                    this.changeOrderItem.map(function (ordItem, index) {
                        if (!ordItem.checked) {
                            that.changeOrderItem == that.changeOrderItem.splice(index, 1);
                            that.checkAllFlag = false;
                        }
                    })
                }
            },

            checkAll: function (flag) {// 全选
                this.checkAllFlag = flag;
                var that = this;
                that.changeOrderItem = [];
                this.car.forEach(function (item, index) {
                    if (!item.serverPrice) {
                        if (item.count == 0) {
                            that.$message.warning("当前所选菜品数量有为0项，无法全选")
                            return
                        }

                        if (typeof item.checked == 'undefined', that.checkAllFlag) {
                            that.$set(item, "checked", that.checkAllFlag);
                            if (item.status != 3) that.changeOrderItem.push(item);
                        } else {
                            item.checked = that.checkAllFlag;
                            that.changeOrderItem = [];
                        }
                    }
                })
            },

            changedOrder() {
                this.getRefundRemarkList(1);
                /*if (this.changeOrderItem.length == 0) {
                  this.$message("您还没选择任何菜品");
                  return;
                }*/
                for (var item of this.changeOrderItem) {
                    if (item.type == 3) {
                        item.mealItems.map(function (mealItem) {
                            item.tempPrice += mealItem.price;
                        })
                    }

                    item.price = 0;
                    item.currentOriginCount = 0;
                    item.currentOriginPrice = item.price;
                    // item.mealItems = '';
                    item.count = 0;
                    item.refundCount = item.tempCount;
                    item.refundItemCount = item.tempCount;
                    item.refundChange = item.tempCount;
                    item.mealFeeNumber = 0;
                    this.refundAllCount += item.refundCount;
                    this.refundMoney += item.tempPrice;
                    this.refundMealAllNumber += (item.mealFeeNumberOne * item.tempCount);
                    this.formatRefundListItem(item)
                }
                this.saveFormatData()
            },

            // 初始化退菜 数组
            formatRefundListItem(item) {
                let newItem = item;
                for (let reListItem of this.refundList) {
                    if (newItem.orderId === reListItem.orderId) {
                        reListItem.orderId = newItem.orderId
                        reListItem.count += newItem.tempCount;
                        reListItem.price += newItem.tempPrice;
                        return;
                    }
                }
                let reListItem = {
                    orderId: newItem.orderId,
                    price: newItem.tempPrice,
                    count: newItem.refundCount,
                };
                this.refundList.push(reListItem)
            },

            // 退的份数减一
            cutArticleCount(item) {
                if (item.refundCount <= 1) {
                    this.$message('已经减到最少了');
                    return;
                }
                // 如果是套餐
                if (item.type == 3 && item.mealItems) {
                    for (let mealItem of item.mealItems) {
                        item.unitPrice += mealItem.price;
                    }
                }

                this.formatAddRefundList(item);
                item.price += item.unitPrice;
                item.refundChange--; // 每一项所菜品所退的个数
                item.count++; // 还剩余的菜品数量
                item.refundCount--;
                item.refundItemCount--;
                item.mealFeeNumber = item.mealFeeNumberOne * item.count;
                this.refundMoney -= item.unitPrice; // 退的所有的钱
                this.refundAllCount--;
                this.refundMealAllNumber -= item.mealFeeNumberOne;
                this.$message('减少一份');

                this.saveFormatData() //

            },

            // 格式化退菜数组 这是减菜所要调用的
            formatRefundList(item) {
                let newItem = item;
                var key = true;
                while (key) {
                    for (let reListItem of this.refundList) {
                        if (newItem.orderId === reListItem.orderId) {
                            reListItem.count--;
                            reListItem.price -= newItem.unitPrice;
                            key = false;
                        }
                    }
                    let reListItem = {
                        orderId: newItem.orderId,
                        price: newItem.refundCount * item.unitPrice,
                        count: newItem.refundCount,
                    }
                    if (key == true) {
                        this.refundList.push(reListItem)
                        key = false;
                    }
                }
            },

            // 退的份数加一
            addArticleCount(item) {
                if (item.refundItemCount >= item.tempCount) {
                    this.$message('退的够多了');
                    return;
                } else {
                    this.formatRefundList(item);
                    item.price -= item.unitPrice
                    item.refundChange++; // 每一项所菜品所退的个数
                    item.count--; // 还剩余的菜品数量
                    item.refundCount++;
                    item.refundItemCount++;
                    item.mealFeeNumber = item.mealFeeNumberOne * item.count;
                    this.refundMoney += item.unitPrice; // 退的所有的钱
                    this.refundAllCount++;
                    this.refundMealAllNumber += item.mealFeeNumberOne;
                    this.saveFormatData() //
                    this.$message("退的份数加1");
                }
            },
            // 格式化退菜数组 这是+ 所需要调用的
            formatAddRefundList(item) {
                for (var refundListItem of this.refundList) {
                    if (refundListItem.orderId === item.orderId && item.type == 3) {
                        refundListItem.price -= item.unitPrice
                        refundListItem.count--;
                    } else if (refundListItem.orderId === item.orderId) {
                        refundListItem.price -= item.unitPrice
                        refundListItem.count--;
                    }
                }
            },

            // 保存退菜数据格式化
            saveFormatData() {
                let that = this;
                let refundOrderItem = [];
                let refundItem = {};

                let localRefundOrderItem = [];
                let localRefundItem = {};

                let {mealFeePrice, isMealFee} = this.shopDet;
                let mealFeePriceOne = this.orderInfo.distribution_mode_id == 3 ? (isMealFee ? mealFeePrice : 0) : 0;
                this.changeOrderItem.forEach(function (item) {
                    var serviceType = item.type == 0 || item.type == 10 || item.type == 11 || item.type == 12;
                    refundItem = {
                        id: serviceType ? sessionStorage.getItem("shopId") : item.ownId,
                        articleId: serviceType ? '' : item.id,
                        orderId: serviceType ? that.orderInfo.id : item.orderId,
                        type: serviceType ? item.type : 1,
                        count: item.refundChange,

                        refundCount: item.refundCount, // 退的数量
                        refundItemCount: item.originCount - item.count, // 退的单个菜品总个数


                        unitPrice: item.type == 8 ? item.tempPrice : item.unitPrice,
                        mealFeeNumber: item.refundChange * mealFeePriceOne || 0,     // 剩余的餐盒数量(剩余的数量 * 每一项每一个所需的餐盒个数)
                        refundMealFeeItemOfPrint: item.mealFeeNumberOne * item.refundCount,

                        //extraPrice: serviceType ? 0 : (item.mealFeeNumberOne * item.refundChange || 0) * mealFeePriceOne || 0 // extraPrice 这里是指退的餐盒费（外带和外卖并且开启了餐盒费才会有餐盒费）
                    };
                    //  如果是套餐，则要在 unitPrice 上面加上套餐子品的差价
                    if (item.type == 3) {
                        for (let temp of item.mealItems) {
                            refundItem.unitPrice = (parseFloat(refundItem.unitPrice) + parseFloat(temp.price)).toFixed(2)
                        }
                    }
                    refundOrderItem.push(refundItem);
                    localRefundItem = {
                        id: item.ownId,
                        articleId: item.id,
                        orderId: item.orderId,
                        type: item.type,
                        mealItems: item.mealItems, // 套餐子项
                        count: item.count, // 剩余的数量
                        refundCount: item.refundCount, // 退的数量
                        refundItemCount: item.originCount - item.count, // 退的单个菜品总个数
                        unitPrice: item.unitPrice,
                        mealFeeNumber: item.count * item.mealFeeNumberOne,     // 剩余的餐盒数量(剩余的数量 * 每一项每一个所需的餐盒个数)
                        refundMealFeeItemOfPrint: item.mealFeeNumberOne * item.refundCount
                    };
                    localRefundOrderItem.push(localRefundItem);
                });
                this.refund = {
                    id: this.orderInfo.id,
                    refundMoney: (+this.refundMoney).toFixed(2),
                    orderItems: refundOrderItem,
                    orderRefundRemarks: [],
                    remarkSupply: null,
                    refundType: this.radio
                };
                // 需要存储在本地的字段
                this.localRefund = {
                    id: this.orderInfo.id,
                    refundWay: this.radio,
                    orderPaymentList: this.orderPaymentList, // 支付项列表
                    refundMoney: this.refundMoney || 0, // 退的，所有菜品的钱数
                    refundAllCount: this.refundAllCount || 0, // 退的所有的数量
                    payModeId: 12,
                    orderItems: localRefundOrderItem,
                    refundMealAllNumber: this.refundMealAllNumber,// 退掉的总的 餐盒个数
                    refundMealAllPrice: this.refundMealAllNumber * mealFeePriceOne,  // 退掉的总的 餐盒钱数
                    isMealFee: isMealFee,    // 是否开启 餐盒费 0 未开启 1 开启
                    refundList: this.refundList, // 退的 菜品归类处理，同一类型归同一类
                    refundRemark: this.refundRemark //  退菜 备注
                };
            },

            getRefundRemarkList(type) { // 退菜原因type=1 或 赠菜原因type=2
                this.refundRemarks = [];
                this.grantRemarks = [];
                getRemarks(type)
                    .then(res => {
                        console.log('getRemarks', res)
                        if (res.ok && res.data && res.data.length > 0) {
                            if (type == 1) {
                                this.refundRemark = res.data[0].id + "_" + res.data[0].name;
                                res.data.map((item) => this.refundRemarks.push(item));
                            } else if (type == 2) {
                                this.grantRemark = res.data[0].id + "_" + res.data[0].name;
                                res.data.map((item) => this.grantRemarks.push(item));
                            }

                        }
                    });
            },

            saveChange() {
                let that = this;
                var superPwd = getSession("superPwd");
                var inputSuperPwd = this.$utils.pwdEncryption(this.refundCommand);

                if (inputSuperPwd == '') {
                    this.$message.warning('退菜口令不能为空');
                    return;
                }
                console.log('inputSuperPwd', inputSuperPwd)
                if (inputSuperPwd != superPwd) {
                    this.$message.error('退菜口令错误');
                    return;
                }

                if (that.orderInfo.order_pos_discount_money && that.orderInfo.order_pos_discount_money > 0) {
                    that.$message.warning("订单已经折扣，请重新选择菜品");
                    return;
                }
                this.refundLoading = true;
                this.hasSaveRefund = true;
                this.refund.refundRemark = this.refundRemark;
                that.refundOrderCover()
            },

            refundOrderCover() {
                let that = this;
                refundOrderNew(that.refund).then(res => {
                    that.refundLoading = false;
                    if(!res.ok || !res.data) return that.$message.error(res.message);
                    that.refund.refundType = that.radio;
                    delete that.refund.refundRemark;
                    let query = {
                        order_id: this.orderId,
                        auto_print: 1,
                        total_type: 2,
                        refund: 1,
                        order_item_arr: this.refund.orderItems
                    }
                    printTotal(query).then(res => {
                        console.log('printTotal', res)
                    })
                    let query1 = {
                        order_id: this.orderId,
                        auto_print: 1,
                        kitchen_type: 0,
                        refund: 1,
                        order_item_arr: this.refund.orderItems
                    }
                    printKitchenTotal(query1).then(res => {
                            console.log('printKitchenTotal', res)
                        })
                    that.serverRefundSuccess(res.data.refundPaymentItemList);

                }).catch(err => {
                    that.refundLoading = false;
                })

            },

            serverRefundSuccess(refundPaymentItemList) {
                let that = this;
                that.$message.success("退菜成功！");
                that.hasSaveRefund = false;
                that.changeOrder.show = false;
                that.recoverData();
                that.initOrder();
                let refundMsg = [];
                if(refundPaymentItemList.length == 0) return
                const h = that.$createElement;
                for (let item of refundPaymentItemList) {
                    refundMsg.push(h('p', null, item.remark))
                }
                that.$msgbox({
                    title: '退菜结果',
                    message: h('p', null, refundMsg),
                    confirmButtonText: '确定',
                }).then(action => {

                });

            },

            recoverData() {
                this.currentInput = false; // 关闭键盘弹窗

                this.changeOrder.show = false;
                this.changeOrder.isClick = false;
                this.changeOrder.isCheck = false;
                this.changeOrder.isCheckOne = false;
                this.changeOrder.flags = false;
                this.checkAllFlag = false;
                this.changeOrder.currentIndex = 0;

                this.changeOrderItem = [];

                this.refundMoney = 0;
                this.refundAllCount = 0;
                this.refundMealAllNumber = 0;
                this.refundList = [];
                this.refundService = {};
            },

            closeChangeOrderDialog() { // 取消退菜
                for (var item of this.changeOrderItem) {
                    item.checked = false;
                    item.count = item.tempCount;
                    item.price = item.tempPrice;
                    if (item.type == 3) {
                        item.mealItems.map(function (mealItem) {
                            item.tempPrice -= mealItem.price;
                        })
                    }
                }
                this.recoverData();
            },

            toTablePage(order) {
                for (var item of this.changeOrderItem) {
                    item.checked = false;
                }
                this.recoverData();
                var path = this.$router.push("/table/eatin/detail/" + order.id + "?tableNumber=" + order.table_number)
                this.$router.push("/table/eatin/detail/" + order.id + "?tableNumber=" + order.table_number);
                bus.$emit("hasChanged", path);
                bus.$emit("refresh-turnover");
            },

            changeOrderPages(operation) {
                var changePages = document.getElementById('change-pages')
                if (operation == 1) {
                    changePages.scrollTop += changePages.clientHeight;
                }
                if (operation == -1) {
                    changePages.scrollTop -= changePages.clientHeight;
                }
            },

            focus() {
                this.refundCommand = "";
                this.currentInput = true;
            },

            changeInput(val) { // 退菜口令键盘相关
                this.refundCommand = val
            },

            closeKeyBoard() {// 关闭键盘
                this.currentInput = false;
            },
            //=================================
            //退菜结束
            //=================================
            orderItemListToMap(itemList) {
                var itemMap = {};
                for (var i in itemList) {
                    var item = itemList[i];
                    itemMap[item.id] = item;
                }
                return itemMap;
            },
            orderPageOperation(operation) {
                var orderDetailWrapper = document.getElementById("order-detail-wrapper");
                var car = document.getElementById("car");
                if (operation == 1) {  // 下一页
                    orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
                } else {  //  上一页
                    orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
                }
            },
            formatDate(date) {
                return formatDate(new Date(parseInt(date)), 'yyyy-MM-dd hh:mm:ss');
            },
            printTotal() {
                let query = {
                    order_id: this.orderId,
                    auto_print: this.shopDet.autoPrintTotal,
                    total_type: 1,
                    refund: 0,
                    order_item_arr: []
                }
                printTotal(query)
                    .then(res => {
                        this.isPrintTotal = false
                        console.log('printTotal', res)
                    })

            },
            clickPrintTotal() {
                this.isPrintTotal = true
                this.$confirm('此操作将打印总单, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.printTotal()
                }).catch(() => {
                    this.isPrintTotal = false
                });

            },
            printKitchen() {
                this.isPrintKitchen = true
                this.$confirm('此操作将打印厨打, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._printKitchenTotal()
                }).catch(() => {
                    this.isPrintKitchen = false
                });
            },
            _printKitchenTotal() {
                // this.dialogVisible = false
                let query = {
                    order_id: this.orderId,
                    auto_print: this.shopDet.autoPrintTotal,
                    kitchen_type: 0,
                    refund: 0,
                    order_item_arr: []
                }
                printKitchenTotal(query)
                    .then(res => {
                        this.isPrintKitchen = false
                        console.log('printKitchenTotal', res)
                        if (res.ok) {

                        }
                    })
            },
            formatMoney(money) {
                return this.$utils.formatMoney(money || 0);
            },
            //催菜
            rushOrder() {
                if (!this.shopDet.enableDuoDongXian) {
                    return this.$message.warning("动线不允许催菜")
                }

                let that = this
                let data = []
                let orderItemArr = []
                data = this.changeOrderItem.filter((item, i) => {
                    return item.type != 'servicePrice'
                })
                if (data.length > 0) {
                    data.map((item, i) => {
                        let temp = {
                            articleId: item.id,
                            id: item.orderItemId,
                            orderId: item.orderId
                        }
                        orderItemArr.push(temp)
                    })
                    let rushData = {
                        orderId: this.orderId,
                        orderItemArr: orderItemArr
                    }
                    console.log('rushData', rushData)
                    reminderPrint(rushData)
                        .then(res => {
                            console.log('reminderPrint', res)
                            if (res.ok) {
                                data = []
                                orderItemArr = []
                                that.$message.success("催菜成功");
                            }
                        })
                } else {
                    that.$message.warning("请选择菜品");
                }
            },

            focus() {
                this.identityPassword = "";
            },
            identityDialog() {
                for (var item of this.changeOrderItem) {
                    item.checked = false;
                    item.count = item.tempCount;
                    item.price = item.tempPrice;
                    if (item.type == 3) {
                        item.mealItems.map(function (mealItem) {
                            item.tempPrice -= mealItem.price;
                        })
                    }
                }
                this.identityModal = false;
                this.changeOrderItem = [];
                this.grantLoading = false
            },


            grantOrderInit() {
                this.getRefundRemarkList(2);
                for (var item of this.changeOrderItem) {
                    item.count = 0;
                    item.grantCount = item.tempCount;
                }
            },

            // 赠的份数减一
            cutArticleCount1(item) {
                if (item.grantCount <= 1) {
                    this.$message('已经减到最少了');
                    return;
                }
                item.count++; // 还剩余的菜品数量
                item.grantCount--;
                this.$message('减少一份');
            },

            // 赠的份数加一
            addArticleCount1(item) {
                if (item.grantCount >= item.tempCount) {
                    this.$message('赠的够多了');
                    return;
                } else {
                    item.grantCount++; // 每一项所菜品所退的个数
                    item.count--; // 还剩余的菜品数量
                    this.$message("赠的份数加1");
                }
            },
            //赠菜
            grantOrder() {
                let that = this;
                var superPwd = getSession("superPwd");
                var inputSuperPwd = this.$utils.pwdEncryption(this.identityPassword);
                if (inputSuperPwd == '') {
                    this.$message.warning('身份口令不能为空');
                    return;
                }
                if (inputSuperPwd != superPwd) {
                    this.$message.error('身份口令错误');
                    return;
                }
                if (that.orderInfo.order_pos_discount_money && that.orderInfo.order_pos_discount_money > 0) {
                    that.$message.warning("订单已经折扣，请重新选择菜品");
                    return;
                }
                this.grantLoading = true
                let orderItemArr = []

                if (this.changeOrderItem.length > 0) {
                    this.changeOrderItem.map((item, i) => {
                        if (item.type != 1 && item.type != 2 && item.type != 5) {
                            return false
                        }
                        let temp = {
                            articleId: item.id,
                            id: item.orderItemId,
                            orderId: item.orderId,
                            type: item.type,
                            count: item.grantCount,
                        }
                        orderItemArr.push(temp)
                    })
                    let obj = {}
                    orderItemArr = orderItemArr.reduce(function (item, next) {
                        obj[next.id] ? '' : obj[next.id] = true && item.push(next);
                        return item;
                    }, []);

                    let grantData = {
                        id: this.orderId,
                        orderItems: orderItemArr,
                        remark: that.grantRemark

                    }
                    if (orderItemArr.length == 0) {
                        that.$message.warning("只能赠菜品");
                        return false
                    }
                    grantArticleByOrderIdAndOrderItems(grantData)
                        .then(res => {
                            console.log('赠菜', res)
                            that.grantLoading = false
                            if (res.ok) {
                                that.identityModal = false;
                                that.initOrder()
                                that.changeOrderItem = []
                                that.identityPassword = ''
                                that.$message.success("赠菜成功");
                            }
                        }).catch(err => {
                          that.grantLoading = false
                        })
                } else {
                    that.identityPassword = ''
                    that.grantLoading = false
                    that.$message.warning("请选择菜品");
                }
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .panel-title {
        height: 50px;
        line-height: 50px;
        font-size: 22px;
        /*font-weight: bold;*/
        text-align: center;
        background-color: #FFFFFF;
        color: black;
    }

    .panel-content {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        padding-left: 15px;
        /*padding-bottom: 2em;*/
        background-color: #FFFFFF;
        /*border-bottom: 3px dashed transparent;*/
        /*repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);*/
    }

    /* 遮罩层 */
    .mask-layer {
        /*height:100%;*/
        width: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.3;

    }

    .car-footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
        background-color: #FFFFFF;
        border-top: 8px solid #f5f5f5;
    }

    .order-payment {
        font-size: 16px;
        width: 100%;
        height: 40px;
        margin-left: 18px;
        margin-right: 18px;
        line-height: 50px;
        color: #666;
    }

    .order-payment-num {
        font-size: 20px;
        color: #ef5350;
        line-height: 24px;
    }

    .order-operate-button {
        font-size: 1em;
        width: 100%;
        height: 50px;
        color: #fff;
    }

    .operate-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        /*margin: 5px 0px 0px 0px;*/
        padding: 10px 15px;
        border: none;
        background: #D8D8D8;
        border-radius: 5px;
        color: #666666;
        height: 40px;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
    }

    .operate-button-push-order {
        width: 70%;
        /*padding: 3px;*/
        /*margin-left: 10px;*/
        background: #FFBF34;
        border-radius: 5px;
        color: #ffffff;
    }

    .car-total {
        height: 50px;
        line-height: 50px;
        border-top: 5px solid #F2F2F2;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
    }

    /*    购物车 table 样式    begin   */
    .car-table {
        width: 100%;
        font-size: 12px;
        /*border: 1px solid #dfe6ec;*/
    }

    .car-table-title-tr {
        background-color: #eef1f6;
        height: 40px;
        font-size: 17px;
        color: #9B9B9B;
    }

    .car-table-body-tr {
        text-align: center;
        height: 40px;
        cursor: pointer;
    }

    .car-table-body-tr td, th {
        /*border-top: 1px solid #dfe6ec;*/
        border-bottom: 1px solid #dfe6ec;
    }

    .car-table-body-package-tr {
        text-align: center;
        height: 40px;
        background-color: #FFFFFF;
    }

    .car-table-body-tr-selected {
        background-color: #E5E9F2;
    }

    .car-table td {
        /*border-bottom: 1px solid #dfe6ec;*/
    }

    .have-order {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #032df9;
    }

    /*    购物车 table 样式    end   */

    /** 订单详情  滚动条  begin  **/
    #order-detail-wrapper::-webkit-scrollbar {
        width: 1px;
        height: 1px;
    }

    #order-detail-wrapper::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }

    #order-detail-wrapper::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
    }

    /** 订单详情  滚动条  end  **/

    .order-page-wrapper {
        position: absolute;
        top: 35%;
        right: 30px;
        z-index: 10;
    }

    .order-page-wrapper > .pre-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #000;
        color: #FFF;
        border-radius: 50%;
        margin-bottom: 50px;
        cursor: pointer;
        opacity: 0.6;
    }

    .order-page-wrapper > .next-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #000;
        color: #FFF;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.6;
    }

    /* 退菜弹窗样式*/

    .refund-page-wrapper {
        position: absolute;
        top: 25%;
        right: 50px;
        z-index: 10;
    }

    .refund-page-wrapper > .pre-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #000;
        color: #FFF;
        border-radius: 50%;
        margin-bottom: 50px;
        cursor: pointer;
        opacity: 0.4;
    }

    .refund-page-wrapper > .next-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #000;
        color: #FFF;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.4;
    }

    .change-order-content {
        margin: 0 auto;
        width: 100%;
    }

    .change-order-content::-webkit-scrollbar {
        display: none
    }

    .change-order-content > li {
        width: 100%;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px dashed #E0E0E0;
    }

    .change-order-content > li:nth-child(2n) {
        /*background-color: #F8F8F8;*/
    }

    .change-order-content > li > span {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #666;
        font-weight: bold;
    }

    .change-order-content:nth-of-type(1) > li > span {
        /*height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #666;*/
        /*font-weight: bold;*/
    }

    .change-order-content:not(:first-child) > li > span {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
    }

    .article-item {
        display: inline-block;
        color: #666;
        font-size: 16px;
    }

    .control-count {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-top: 2px;
        line-height: 28px;
        font-size: 25px;
        text-align: center;
        color: #fff;
        background-color: darkgray;
        border-radius: 50%;
    }

    .change-item {
        font-size: 16px;
        font-weight: bold;
        height: 40px;
    }

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

    .details-item {
        margin-top: 8px;
        font-size: 14px;
        word-wrap: break-word;
        color: #666;
    }

    .details-button {
        border: 1px solid black;
        color: black;
    }

    .details-button-active {
        border: none;
        background-color: #ffbf34;
        color: #FFFFFF;
    }

    .btn-number {
        width: 90%;
        height: 60px;
        margin: 5px;
        background-color: #FFFFFF;
        font-size: 22px;
        font-weight: bold;
    }

    .weight-article {
        color: #ffbf34;
    }

    .el-dialog__wrap > > > .el-dialog__body {
        padding: 0px;
    }

    .el-dialog__wrap > > > .el-dialog__header {
        padding: 0px;
    }

    .el-dialog__wrap > > > .el-dialog__headerbtn {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .dialog-title-warp {
        height: 48px;
        line-height: 48px;
        text-align: center;
    }

    .dialog-title {
        font-family: "SourceHanSansCN-Medium";
        font-size: 22px;
        color: #666;
        font-weight: bold;
        vertical-align: middle;
    }
</style>
