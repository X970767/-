import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router'
//三级联动组件
import TypeNav from './components/TypeNav'
import Carsousel from './components/Carousel'
import Pagination from './components/Pagination'
import { MessageBox } from 'element-ui'

//引入仓库
import store from './store/index'

import '../src/mock/mockServe'

import 'swiper/css/swiper.css'

import *as API from './api'
// 引入表单效验插件
import './plugins/validate'



Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$msgbox = MessageBox

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
