import {reqAddressInfo,reqOrderInfo} from '../api'

const state = {
    address: [],
    orderInfo: []
}
const mutations = {
    GETADDRESSINFO(state,address) {
        state.address = address
    },
    GETORDERINFO(state,orderInfo) {
        state.orderInfo = orderInfo
    }
}
const actions = {
    // 获取用户地址信息
    async getaddRessInfo({commit}) {
        let result = await reqAddressInfo()
        if(result.code===200) {
            commit('GETADDRESSINFO',result.data)
        }
    },
    async getOrderInfo({commit}) {
        let result = await reqOrderInfo()
        // console.log(result);
        if(result.code===200) {
            commit('GETORDERINFO',result.data)
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}