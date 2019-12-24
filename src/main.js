import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
// 封装的方法
import  '@/assets/common/store.js'
import  { log } from  '@/assets/common/common.js'
import 'element-ui/lib/theme-chalk/index.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
// 请求拦截器
import requestPlugin from './axios/index'
import './axios/index'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/topic.scss'
// 引入弹窗的组件
import { Toast } from 'mand-mobile'
Vue.prototype.$log = log
Vue.prototype.$toast = Toast
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mandMobile)
Vue.use(requestPlugin)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
