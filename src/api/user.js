import Vue from 'vue'
import requestPlugin from '../axios/index'
Vue.use(requestPlugin)
let vm = new Vue()
export function getLogin (query) {
  return vm.$http.post({
    url: '/user',
    method: 'post',
    params: query,
  })
}
// 用户注册接口
// export function register (query) {
//   return vm.$http.post({
//     url: '/add',
//     method: 'post',
//     params: query,
//   })
// }
export function register (query) {
  return vm.$http.post('/user/add',query)
}