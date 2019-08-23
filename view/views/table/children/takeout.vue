<template>
  <div class="takeout">
    <el-col :span="6" class="left">
      <!--<router-view></router-view>-->
      <p class="panel-title">客单
        <i class="el-icon-arrow-down" v-if="showDetails == false" @click="showDetails = !showDetails"></i>
        <i class="el-icon-arrow-down" v-if="showDetails == true" @click="showDetails = !showDetails"></i>
      </p>
      <div v-if="showDetails == true" class="mask-layer" :style="{ height: carTableHeight + 'px' }"></div>
      <div v-if="showDetails == true" style="position: absolute;width: 100%;">
        <el-row class="panel-content">
          订单备注：{{currentOrderInfo.remark || '无'}}
        </el-row>
        <el-row class="panel-content">
          订单ID：{{currentOrderInfo.platformOrderId || '无'}}
        </el-row>
      </div>

      <div :style="{ height: carTableHeight + 'px' }" style="overflow: hidden" id="order-detail-wrapper">
        <div class="order-page-wrapper">
          <div class="pre-page" @click="orderPageOperation(-1)"><span class="el-icon-caret-top"
                                                                      style="font-size: 26px;"></span></div>
          <div class="next-page" @click="orderPageOperation(1)"><span class="el-icon-caret-bottom"
                                                                      style="font-size: 26px;"></span></div>
        </div>
        <!--购物车 菜品详情-->
        <div style="background-color: #FFFFFF">
          <ul class="car-title">
            <li class="car-title-item" style="width: 15%;text-align: center; text-indent: 9px;">#</li>
            <li class="car-title-item" style="width: 40%;">品名</li>
            <li class="car-title-item" style="width: 15%;">数量</li>
            <li class="car-title-item" style="width: 20%;text-align: right;">小计</li>
          </ul>

          <!--购物车 内容-->
          <ul class="car-title car-content" v-for="(article, index) in carData">
            <hr style="border:1px dashed #E0E0E0; width: 90%;">
            <div>
              <li class="car-title-item car-content-item" style="width: 15%;text-align: center;">
                {{index + 1}}
              </li>
              <li class="car-title-item car-content-item" style="width: 40%;">
                <span style="display: inline-block;width: 80%;">{{article.name}}</span>
              </li>
              <li class="car-title-item car-content-item" style="width: 15%;vertical-align: top;">{{article.quantity}}
              </li>
              <li class="car-title-item car-content-item" style="width: 20%;vertical-align: top;text-align: right;">
                ¥{{formatMoney(article.price)}}
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="car-footer">


        <el-row type="flex" justify="space-around" style="height: 40px;margin-top: 5px;">
          <el-col :span="11">
            <el-button style="width: 100%;" @click="printKitchenTotal" :loading="isPrintKitchen">打印厨打</el-button>
          </el-col>
          <el-col :span="11">
            <el-button style="width: 100%;background-color: #ffbf34;color: #ffffff;"  :loading="isPrintTotal" @click="printTotal">打印总单
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="18">
      <order-toolbar v-on:waimaiSrc="changeType"></order-toolbar>
      <div class="takeout-wrapper">
        <template class="takeout-wrapper">
          <el-table :data="takeOutData" id="take-content-wrapper" :style="{ height: takeOutContentHeight + 'px' }"
                    border style="width: 100%; overflow-y: auto; border-bottom-width: 0px" @row-click='handleRowHandle'>
            <el-table-column prop="index" label="订单编号" align="center" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center" width="150"></el-table-column>
            <el-table-column prop="telephone" label="电话" align="center" width="150"></el-table-column>
            <el-table-column prop="address" label="地址" align="center"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" align="center" width="200"></el-table-column>
          </el-table>
          <div style="display: flex; justify-content: center;">
            <span>
              <el-button class="page-button-item pageButtonActive" @click="pagination(-1)"style="border: 1px solid #666">
                {{$t('common.prePage')}}
              </el-button>
              <el-button class="page-button-item pageButtonActive"  @click="pagination(1)"style="border: 1px solid #666" >
                {{$t('common.nextPage')}}
              </el-button>
            </span>
          </div>
        </template>
        <div class="order-page-wrapper">
          <div class="pre-page" @click="pageOptions(-1)"><span class="el-icon-caret-top"
                                                               style="font-size: 26px;"></span></div>
          <div class="next-page" @click="pageOptions(1)"><span class="el-icon-caret-bottom"
                                                               style="font-size: 26px;"></span></div>
        </div>
      </div>

    </el-col>
  </div>
</template>

<script>
    import orderToolbar from '../component/order-toolbar.vue';
    import {platformTodayList, platformByOrderId} from '@/api/tableApi'
    import {
        takeOutPrintTotal,
        takeOutPrintKitchenTotal,
    } from '@/api/orderApi';
    export default {
        name: 'takeout',
        components: {
            orderToolbar
        },
        data () {
            return {
                takeOutContentHeight: 0,
                showDetails: false,
                carTableHeight: 0,
                takeOutData: [],
                carData: [],
                currentOrderInfo: {},
                query: {
                    type: 1,
                    page_index: 1,
                    page_size: 20
                },
                isPrintKitchen: false,
                isPrintTotal: false,
            };
        },
        created(){
          this.getList()
        },
        mounted(){
            this.initHeight()
            this.carTableHeight = document.body.clientHeight - 300;
        },

        beforeDestroy() {

        },

        methods: {
            // 初始化外卖展示区高度
            initHeight (){
                var contentHeight = document.body.clientHeight - 64 - 49 - 120;
                this.takeOutContentHeight = contentHeight
            },


            getList(){
                let that = this
                platformTodayList(this.query)
                    .then(res => {
                        console.log('platformTodayList', res)
                        if (res.ok) {
                            that.initData(res.data)
                        }
                    })
            },

            changeType(type){
                this.query.type = type;
                this.query.page_index = 1;
                this.getList()
            },

            initData (data) {
                this.takeOutData = []
                for (let dataItem of data) {
                    let item = {
                        index: dataItem.order_number,
                        name: dataItem.name,
                        address: dataItem.address,
                        telephone: dataItem.phone,
                        createTime: dataItem.order_create_time,
                        platformOrderId: dataItem.platform_order_id,
                        remark: dataItem.remark,
                    };
                    this.takeOutData.push(item)
                }
            },

            handleRowHandle(event){
                let that = this;
                let platformOrderId = {
                    platform_id: event.platformOrderId
                }
                this.currentOrderInfo = event;
                platformByOrderId(platformOrderId)
                    .then(res => {
                        console.log('platformByOrderId',res)
                        if(res.ok) {
                            that.carData = res.data;
                        }
                    })
            },

            //========
            // 打印逻辑
            //========
            printKitchenTotal() {
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
                let query = {
                    platform_order_id: this.currentOrderInfo.platformOrderId
                }
                takeOutPrintKitchenTotal(query)
                    .then(res => {
                        this.isPrintKitchen = false
                        console.log('takeOutPrintKitchenTotal', res)
                        if (res.ok) {

                        }
                    })
            },

            printTotal() {
                this.isPrintTotal = true
                this.$confirm('此操作将打印总单, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._printTotal()
                }).catch(() => {
                    this.isPrintTotal = false
                });

            },
            _printTotal() {
                let query = {
                    platform_order_id: this.currentOrderInfo.platformOrderId
                }
                takeOutPrintTotal(query)
                    .then(res => {
                        this.isPrintTotal = false
                        console.log('takeOutPrintTotal', res)
                    })

            },

            //==========
            // 功能操作区
            //==========
            orderPageOperation (operation) {
                var orderDetailWrapper = document.getElementById("order-detail-wrapper");
                if (operation == 1) {  // 下一页
                    orderDetailWrapper.scrollTop += orderDetailWrapper.clientHeight;
                } else {  //  上一页
                    orderDetailWrapper.scrollTop -= orderDetailWrapper.clientHeight;
                }
            },
            formatMoney(money){
                return this.$utils.formatMoney(money || 0);
            },

            pageOptions (operation){
                var takeContentWrapper = document.getElementById("take-content-wrapper")
                if (operation == 1) {  // 下一页
                    takeContentWrapper.scrollTop += takeContentWrapper.clientHeight;
                } else {  //  上一页
                    takeContentWrapper.scrollTop -= takeContentWrapper.clientHeight;
                }
            },

            pagination(page){
                var takeContentWrapper = document.getElementById("take-content-wrapper")
                takeContentWrapper.scrollTop = 0
                if(page == -1) {
                    this.pageIndex = this.query.page_index - 1;
                    this.query.page_index --
                    if(this.pageIndex < 1) {
                        this.query.page_index = 1
                        return this.$message.warning(this.$t('pagination.preTips'))
                    }
                    this.getList()
                }
                if(page == 1) {
                    this.query.page_index ++
                    /*this.pageIndex = this.query.page_index + 1;
                    if(this.pageIndex > this.pageInfo.totalPage) {
                        this.pageIndex -= 1;
                        return this.$message.warning(this.$t('pagination.nextTips'))
                    }*/
                    this.getList()
                }
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .takeout {
    width: 100%;
    height: 100%;
  }

  .left {
    height: 100%;
    position: relative;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, .25), 0 0 6px 0 rgba(0, 0, 0, .04);
  }

  .right {
    height: 100%;
    padding-bottom: 110px;
  }

  .takeout-wrapper {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .panel-title {
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    background-color: #252525;
    color: #FFFFFF;
  }

  .panel-content {

    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: black;
    padding-left: 5px;
    padding-bottom: 2em;
    border-bottom: 3px dashed transparent;
    background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, #ccc 0, #ccc 0.25em, white 0, white 0.75em);
  }

  .car-table-body-tr td, th {
    border-bottom: 1px solid #dfe6ec;
  }

  .car-footer {
    width: 100%;
    position: absolute;
    bottom: 0px;
    border-top: 5px solid #eee;
  }

  /*  订单详情 翻页 begin*/
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

  /*  订单详情 翻页 end*/

  /** 订单详情  滚动条  begin  **/
  #order-detail-wrapper::-webkit-scrollbar {
    width: 4px;
    height: 4px;
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
    width: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.5;

  }

  .icon {
    width: 30px;
    height: 30px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
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
  }

  .car-content-item {
    font-size: 14px;
    word-wrap: break-word;
    color: #666;
  }

  .el-table::before {
    height: 0;
  }

  .pageButtonActive{
    background-color: #ffbf34;
    color: #fff!important;
    border: none!important;
  }
</style>
