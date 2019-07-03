/* 引入Vue框架 */
import Vue from 'vue'
/* 引入资源请求插件 */
import axios from 'axios'
import { stringify } from 'qs'
import { Toast } from 'mand-mobile';
axios.defaults.timeout = 10000 //设置超时
axios.defaults.withCredentials = false
Vue.prototype.$http = axios; //表示跨域请求时是否用凭证
//请求拦截器
axios.interceptors.request.use(
  config => {
    config.header['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error(error)
  })
  
  //添加响应拦截器
  axios.interceptors.response.use(function (response) {
    //对响应数据回应
    return response
  },function (error) {
    Toast.failed('响应过程出错')
    return Promise.reject(error)
  })
  // http请求方式
export const http = {}
const methods = ['get', 'post', 'put', 'delete']
methods.forEach(method => {
  http[method] = (url, params = {}) => {
    if (method === 'get') {
      return request({ url, params, method })
    }
    return request({ url, body: stringify(params), method })
  }
})

export default function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        const obj = {
          get: http['get'],
          post: http['post'],
          put: http['put'],
          delete: http['delete']
        }
        return obj
      }
    }
  })
}