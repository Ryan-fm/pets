/* 引入Vue框架 */
import Vue from 'vue'
/* 引入资源请求插件 */
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:2000/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;
/* 使用axios插件 */
export default({})