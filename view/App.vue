<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <loading></loading>
  </div>
</template>

<script>
    import loading from '@/views/component/loading'
  export default{
      name: 'App',
      provide () {
          return {
              reload: this.reload
          }
      },
      components:{loading},
      data () {
          return {
              isRouterAlive: true
          }
      },
      methods: {
          reload (){
              this.isRouterAlive = false
              this.$nextTick(function () {
                  this.isRouterAlive = true
              })
          }
      }
  }
</script>
