import {req, reqGet,reqFloorList} from '../api'
// import {commit} from 'vuex'

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATE(state,categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList) {
        state.floorList = floorList
    }
}
const actions={
    async categoryList({commit}) {
        let result = await req()
        if(result.code === 200){
            commit("CATE",result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGet()
        if(result.code===200) {
            commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList()
        if(result.code === 200) {
            commit("GETFLOORLIST",result.data)
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