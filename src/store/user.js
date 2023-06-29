import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqlogOut} from '../api'

const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const mutations = {
    GETCODE(state,code) {
        state.code = code
    },
    USERLOGIN(state,token) {
        state.token = token
    },
    USERINFO(state,userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.user = {}
        localStorage.removeItem("TOKEN")
    }
}
const actions = {
    // 获取验证码
    async getCode({commit},phone) {
        let result = await reqGetCode(phone)
        if(result.code===200) {
            commit("GETCODE",result.data)
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({commit},user) {
        let result = await reqUserRegister(user)
        if(result.code===200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户登录
    async userLogin({commit},data) {
        let result = await reqUserLogin(data)
        // console.log(result);
        if(result.code===200) {
            commit("USERLOGIN",result.data.token)
            localStorage.setItem("TOKEN",result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async userInfo({commit}) {
        let result = await reqUserInfo()
        // console.log(result.code);
        if(result.code===200) {
            commit("USERINFO",result.data)
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLoginOut({commit}) {
        let result = await reqlogOut()
        // console.log(result);
        if(result.code===200) {
            commit("CLEAR")
            window.location.reload()
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
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