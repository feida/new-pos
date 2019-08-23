<template>
    <div class="app-wrapper" :class="classObj">
        <div class="main-container">
            <Header></Header>
            <app-main></app-main>
            <Footer></Footer>
            <socketComponent></socketComponent>
        </div>
    </div>
</template>
<script>
    import { AppMain,  Header, Footer} from './components'
    import {getSession,setSession} from '@/utils/auth'
    import {Message, MessageBox} from 'element-ui'
    import store from '@/store'
    import socketComponent from '@/views/component/socketComponent'
    export default {
        name: 'layout',
        components: {
            AppMain,
            Header,
            Footer,
            socketComponent
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        created() {
            console.log(`--------登陆`)
            this.$socket.emit('login', {userid: getSession('userId'),username: getSession('username')});
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', {withoutAnimation: false})
            }
        },
        sockets: {


        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
