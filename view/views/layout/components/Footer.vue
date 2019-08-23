<template>
    <el-row class="footer-page footer-layout">

        <div class="flex-bg" >
            <el-col :span="2" style="margin-left: 15px; height: 80px;">
                <img src="../../../assets/shaolei_img/logo.jpg" style="width: 28px;height: 28px; margin-top: 26px;" alt="">
            </el-col>
            <el-col :span="16">
                <p style="line-height: 80px;">{{currentTime}}</p>
            </el-col>
        </div>

        <div class="flex-bg">
            <el-col :span="24" style="text-align: center;">
                <span style="line-height: 80px;">{{shopDet.name|shopnameMathLength}}</span>
            </el-col>
        </div>

        <div class="flex-bg">
            <el-col :span="14" :offset="10">
                <div style="display:flex;">
                    <div  style="display:flex; flex:1;height: 80px;justify-content: flex-end;">
                      <span class="state_wrap" v-if="shopModel == 2">
                        <div v-if="tvConnect" >
                          <div class="state_img_wrap">
                            <img src="../../../assets/shaolei_img/正常@2x.png" alt="" class="state_img">
                          </div>
                          <div style="font-size: 10px;">电视正常</div>
                        </div>
                        <div v-else >
                          <div class="state_img_wrap">
                            <img src="../../../assets/shaolei_img/异常@2x.png" class="state_img" alt="" >
                          </div>
                          <div style="font-size: 10px; color: red;">电视异常</div>
                        </div>
                      </span>
                      <span class="state_wrap">
                        <div>
                          <div class="state_img_wrap">
                            <svg class="icon state_img" aria-hidden="true">
                                <use :xlink:href="mqtt ? '#icon-yunfuwuqi-lianjie1' : '#icon-yunfuwuqi-duankailianjie1'"></use>
                            </svg>
                          </div>
                          <div style="font-size: 10px;" v-if="mqtt">mqtt正常</div>
                          <div style="font-size: 10px;color: red;" v-else>mqtt异常</div>
                        </div>
                      </span>
                      <span class="state_wrap">
                        <div v-if="network" >
                          <div class="state_img_wrap">
                            <img  src="../../../assets/img/network.png" class="state_img" alt="">
                          </div>
                          <div style="font-size: 10px;">网络正常</div>
                        </div>
                        <div v-else>
                          <div class="state_img_wrap">
                            <img  src="../../../assets/img/noNetwork.png" class="state_img" alt="">
                          </div>
                          <div style="font-size: 10px;color: red;">网络异常</div>
                        </div>
                      </span>
                      <span class="state_wrap">
                        <div v-if="printer" >
                          <div class="state_img_wrap">
                            <img  src="../../../assets/header_img/symbols-dayinji.png" class="state_img" @click="openDialog">
                          </div>
                          <div style="font-size: 10px;">打印正常</div>
                        </div>
                        <div v-else>
                          <div class="state_img_wrap">
                            <img src="../../../assets/header_img/noprint.png" class="state_img" @click="openDialog">
                          </div>
                          <div style="font-size: 10px;color: red;">打印异常</div>
                        </div>
                      </span>
                    </div>
                </div>
            </el-col>
        </div>
      <el-dialog   :visible.sync="syncDatabaseDialog" :close-on-click-modal="false" class="el-dialog__wrap">
        <div style="text-align: center;font-size: 18px; font-weight: bold;margin-bottom: 20px;">打印机</div>
        <el-table
          :data="tableData"
          style="width: 90%;margin: 0 auto;"
          height="340">
          <el-table-column
            align="center"
            prop="network_state"
            label="连接"
            width="120">
            <template slot-scope="scope">
              <img  v-if="scope.row.network_state" src="../../../assets/img/right.png" style="width: 20px;height: 20px;" alt="">
              <img  v-else  src="../../../assets/img/wrong.png"  style="width: 20px;height: 20px;" alt="">
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="名称"
            width="140">
          </el-table-column>
          <el-table-column
            align="center"
            prop="ip"
            label="打印机ip"
            width="140">
          </el-table-column>

          <el-table-column
            align="center"
            prop="ticket_type"
            label="打印机类型"
            width="120">
            <template slot-scope="scope">
              <span >{{scope.row.ticket_type | typeFilter1}}</span>
            </template>
          </el-table-column>

          <el-table-column  align="center" fixed="right" label="操作" width="120" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button type="primary" size="small " @click="handleClick(scope.row)">打印测试</el-button>
            </template>
          </el-table-column>
        </el-table>

        <span slot="footer" class="dialog-footer">
        <el-button @click="syncDatabaseDialog = false" style="margin-right: 20px;">关 闭</el-button>
      </span>
      </el-dialog>
    </el-row>

</template>

<script>
    import {getSessionShopDet} from '@/utils/auth'
    import {mapGetters} from 'vuex'
    import {getPrintRecord,getBillTest,getLabelTest} from '@/api/login'

    //打印机类型
    const calendarTypeOptions1 = [
        {text: '小票', value: 0},
        {text: '贴纸', value: 1}
    ];

    const calendarTypeKeyValue1 = calendarTypeOptions1.reduce((acc, cur) => {
        acc[cur.value] = cur.text;
        return acc
    }, {});
    export default {
        name: 'footer-page',
        data() {
            return {
                shopDet: {},
                weatherInfo: {
                    text: "",
                    imgUrl: ''
                },
                weatherImg: "",
                currentTime: '',
                shopModel: '',
                syncDatabaseDialog: false,
                tableData: [],
                options: [{
                    value: 'serialNumber',
                    label: '订单流水号'
                }, {
                    value: 'tableNumber',
                    label: '座位号或其他'
                }, {
                    value: 'printContent',
                    label: '菜品名称'
                }],
                value: '',
            };
        },
        filters: {
            typeFilter1(type) {
                return calendarTypeKeyValue1[type]
            },

            shopnameMathLength(value) {
                if (!value || value == '') return '';
                return value.length > 3 ? value.substring(0, 20) : value
            }
        },
        computed: {
            ...mapGetters({
                mqtt: 'mqtt',
                network: 'network',
                printer: 'printer',
                tvConnect: 'tvConnect',
            })
        },
        mounted() {
            let that = this;
            this.getDate();
            this.$store.dispatch('getOnLine');
            this.shopDet = JSON.parse(getSessionShopDet())
            this.shopModel = this.shopDet.shopMode;
        },
        methods: {
            getDate() {
                setInterval(() => {
                    this.currentTime = this.$utils.format();
                }, 1000);
            },

            openDialog() {
                this.tableData = []
                this.getPrintList();
                this.syncDatabaseDialog = true;

            },
            getPrintList() {
                let that = this;
                getPrintRecord()
                    .then(res => {
                        console.log('getPrintRecord',res)
                        if(res.ok){
                            that.tableData = res.data
                        }
                    });
            },
            handleClick(row) {
                let query = {
                    ip: row.ip
                }
                if(row.ticket_type == 0) {
                    getBillTest(query)
                        .then(res => {
                            console.log('getBillTest',res)
                        })
                } else if(row.ticket_type == 1) {
                    getLabelTest(query)
                        .then(res => {
                            console.log('getLabelTest',res)
                        })
                }
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer-page {
        font-size: 16px;
        width: 100%;
        height: 80px;
        background-color: #252525;
        color: #FFFFFF;

    }

    .footer-layout {
        display: flex;
        /*display: -webkit-box;*/
        /*-webkit-box-orient: horizontal;*/
        height: 80px;
    }

    .flex-bg {
        height: 80px;
      flex: 1;

    }

    .weather-img img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
        /*margin-left: 11px;*/
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .state_wrap {
      display:flex;
      align-items: center;
      margin-right: 8px;
    }
    .state_img_wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    .state_img {
      width: 30px;
      height: 30px;
    }

    .el-dialog__wrap > > > .el-dialog__body {
        padding: 0px;
    }

    .el-dialog__wrap > > > .el-dialog__header {
        padding: 0px;
    }

    .el-dialog__wrap > > > .el-dialog__footer {
        padding: 0px;
    }

    .el-dialog__wrap > > > .el-dialog__headerbtn {
        position: absolute;
        top: 15px;
        right: 15px;
    }
</style>
