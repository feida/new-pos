import {getOnLineState} from '@/api/login'
const socketData = {
    state: {
        mqtt: false,
        network: false,
        printer: false,
        tvConnect: false,
        wsServerDataChangeCount: localStorage.getItem("wsServerDataChangeCount") || 0
    },
    getters: {
        mqtt: state => state.mqtt,
        network: state => state.network,
        printer: state => state.printer,
        tvConnect: state => state.tvConnect,
        wsServerDataChangeCount: state => state.wsServerDataChangeCount,
    },
    mutations: {
        set_mqtt(state,data) {
            state.mqtt = data
        },
        set_network(state,data) {
            state.network = data
        },
        set_printer(state,data) {
            state.printer = data
        },
        set_tvConnect(state,data) {
            state.tvConnect = data
        },
        set_wsServerDataChangeCount(state,data) {
            state.wsServerDataChangeCount = data
        },

    },
    actions: {
        getOnLine({commit}) {
            getOnLineState().then(res => {
                console.log('getOnLineState',res)
                if (res.ok && res.data) {
                    commit("set_mqtt", res.data.mqtt)
                    commit("set_network", res.data.network)
                    commit("set_printer", res.data.printer)
                    commit("set_tvConnect", res.data.tvConnect)
                } else {
                    //return this.$message.error(res.message);
                }
            })
        },
    }
}

export default socketData
