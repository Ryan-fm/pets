const pets = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/view/index/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/appoint',
    name: 'Appoint',
    component: () => import('@/view/appoint/index'),
    meta: {
      title: '预约'
    }
  },
]
export default pets