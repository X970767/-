import {reqCarList,reqDelete,reqByid} from '../api'

const state = {
    carlist: []
}
const mutations = {
    GETCARLIST(state,carlist) {
        state.carlist = carlist
    }
}
const actions={
    async getCarList({commit}) {
        let result = await reqCarList()
        if(result.code===200) {
            commit("GETCARLIST",result.data)
        }
    },
    async deleteCar({commit},skuId) {
        let result = await reqDelete(skuId)
        if(result.code = 200){
            return 'ok'
        }else {
            return Promise.reject(new Error("faile"))
        }
    },
    async byid({commit},{skuId,isChecked}) {
        let result = await reqByid(skuId,isChecked)
        if(result.code===200) {
            return 'ok'
        }else {
            return Promise.reject(new Error("faile"))
        }
    },
    async deleteAllCar({dispatch,getters}) {
        let PromiseAll = []
        getters.carlist.cartInfoList.forEach(item => {
            let Promise = item.isChecked===1? dispatch('deleteCar',item.skuId) : ""
            PromiseAll.push(Promise)
        });
        return Promise.all(PromiseAll)
    },
    async allChecked({dispatch,getters},checked) {
        let PromiseAll = []
        getters.carlist.cartInfoList.forEach(item => {
            let promise = dispatch('byid',{skuId:item.skuId,isChecked:checked});
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    }
}
const getters = {
    carlist(state) {
        return state.carlist[0]||{}
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}