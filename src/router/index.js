import Vue from 'vue'
import Router from 'vue-router'
import User from './module/user'
import Pets from './module/pet'
import { Toast } from 'mand-mobile'
Vue.use(Router)
let vm = new Vue()
const commonRoutes = [
  { path: '/404', component: () => import('@/components/RouterError/404') },
  { path: '/401', component: () => import('@/components/RouterError/401') },
  {
    path: '/',
    redirect: '/index'
  }
]
/** 分模块的路由，合并传入Router */
let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(User, Pets)
})
// 导航守卫，非登录状态先登录
router.beforeEach((to, from, next) => {
  console.log(to)
  let tmp = vm.getDate('user')
  if (!tmp && to.name !== 'login' && to.name !== 'Register') {
    Toast.succeed('您需要先登录哦！', 1500)
    next({ path: '/login' })
    return
  }
  next()
})
export default router
  