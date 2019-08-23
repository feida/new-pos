<template>
  <div class="sync-loding" v-show="getLoading">
    <div class="ldbox">
      <el-progress type="circle"  :percentage="schedule"></el-progress>
      <div class="text">
        <p>{{user}}发起了更新数据！</p>
        <p>数据更新中...一会就好</p>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import socketMixin from '@/views/component/socketMixin/socketMixin'

    export default {
        mixins: [socketMixin],
        data() {
            return {
                getLoading: false,
                schedule: 0,
                user: ''
            }
        },

    }
</script>

<style lang="less" rel="stylesheet/less">
  .sync-loding {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    background-color: #fff;
    -webkit-overflow-scrolling: none;
    pointer-events: auto;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    .loading {
      display: block;
      //width: .8rem;
      //height: .8rem;
      border: 3px solid #fff;
      top: 50%;
      left: 50%;
      margin-left: -.4rem;
      margin-top: -.6rem;
      position: absolute;
      border-radius: 50%;
      border-top-color: transparent;
      animation: rotate .5s linear infinite;
    }
    .text {
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
      color: red;
    }
    .ldbox {
      //font-size: .5rem;
      width: 200px;
      height: 170px;
      text-align: center;
      //width: 3rem;
      //height: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      //background: rgba(0, 0, 0, 0.39);
      //border-radius: 5px;
    }
  }
</style>
