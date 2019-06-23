const tripUser = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/view/login/register'),
    meta: {
      title: '注册'
    }
  },
]
export default tripUser