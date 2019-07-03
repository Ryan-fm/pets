import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
// 请求拦截器
import requestPlugin from './axios/index'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/topic.scss'
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
