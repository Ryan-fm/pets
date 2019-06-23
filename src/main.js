// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
/* 通过import引入 */
import axios from './axios'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/topic.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mandMobile)
/* eslint-disable no-new */
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
