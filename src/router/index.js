import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import router from './router'
import store from '../store'


Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject) {
    if(resolve && reject) {
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject) {
    if(resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}

let route = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {y:0}
    }
})

// 全局守卫
route.beforeEach(async(to,from,next) => {
    next()
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token) {
        if(to.path==='/login'||to.path==='/register') {
            next('/home')
        }else{
            if(name) {
                next()
            }else {
                try {
                    // 获取用户信息在首页展示
                    await store.dispatch('userInfo')
                    next()
                } catch (error) {
                    // token失效了
                    await store.dispatch('userLoginOut')
                    next('/login')
                }
            }
        }
    }else{
        let path = to.path
        if(path==='/trade'||path.indexOf('/pay')!==-1||path.indexOf('/center')!==-1) {
            next('/login?redirect='+path)
        }else {
            next()
        }
    }
})
export default route