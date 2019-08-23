<template>
  <section class="app-main">
    <!--<transition name="fade-transform" mode="out-in">-->
      <keep-alive :include="cachedViews">
        <!--<router-view :key="key"></router-view>-->
        <router-view ></router-view>
      </keep-alive>
    <!--</transition>-->
    <div class="content">
      <smallkeyboard></smallkeyboard>
      <fattykeyboard></fattykeyboard>
    </div>
  </section>
</template>

<script>
    import bus from '@/utils/bus'
    import smallkeyboard from '@/components/Keyboard/smallkeyboard';
    import fattykeyboard from '@/components/Keyboard/fattykeyboard'
    export default {
    name: 'AppMain',
    components: {
      smallkeyboard,
      fattykeyboard
    },
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews
      },
      key() {
        console.log('this.$route.fullPath',this.$route.fullPath)
        return this.$route.fullPath
      }
    },
    mounted(){
       window.addEventListener("click",function (even) {
         var name = even.target.name;
         var data_name = even.target.dataset.name || ''
         var nodeName =  even.target.nodeName;
         var data = even.target.getAttribute("data");
           if(nodeName == 'KBD') {
             bus.$emit('show-keyboard','KBD');
           } else if(data == 'fattykeyboard'){
             bus.$emit('show-keyboard','FKBD');
           }else if(data_name){
             bus.$emit('show-keyboard',data_name);
           }else {
             bus.$emit('show-keyboard', name);
           }
         });

       },
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 80 +34 */
  height: calc(100vh - 144px);
  /*min-height: 654px;*/
  position: relative;
  overflow: hidden;
}

.content{
  /*position: absolute;*/
  /*top: 64px;*/
  /*bottom: 49px;*/
  /*left: 0;*/
  /*right: 0;*/
  /*margin: 0 auto;*/
  /*z-index: -1;*/
}
</style>

