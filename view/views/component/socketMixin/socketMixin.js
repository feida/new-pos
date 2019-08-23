export default {
    inject: ['reload'],
    methods: {
        updateDataStart(value){
            this.getLoading = true
            this.user = value.username
        },
        updateDataEnd(){
            let that = this
            this.getLoading = false
            this.user = ''
            this.schedule = 0
            localStorage.setItem("wsServerDataChangeCount", 0);
            this.$store.commit('set_wsServerDataChangeCount',0);
            that.$store.dispatch('FedLogOut').then(() => {
                if(that.$router.history.current.path == '/login'){
                    that.reload()
                } else {
                    that.$router.push({path: '/login'});
                }
                //that.$router.go(0);
                //location.reload()
            })
        },
    },
    sockets: {
        updateDataUser(value) {
            console.log(`${value.username}发起了更新数据！`)
            console.log(`updateDataUser->开始${JSON.stringify(value)}`)
            this.updateDataStart(value)
        },
        updateDataPace(value) {
            console.log(`当前进度${value.schedule}%`)
            this.schedule = value.schedule
        },
        updateDataFulfil(value) {
            console.log(`${value.username}完成了更新数据！`)
            this.updateDataEnd()
        },

        wechatShopChange(value) {     //收到店铺更新设置
            console.log('收到店铺更新设置',value)
            if(value.ok) {
                let wsServerDataChangeCount = localStorage.getItem("wsServerDataChangeCount") || 0;
                wsServerDataChangeCount ++ ;
                localStorage.setItem("wsServerDataChangeCount", wsServerDataChangeCount);
                this.$store.commit('set_wsServerDataChangeCount',wsServerDataChangeCount)
            }
        },
    },
}
