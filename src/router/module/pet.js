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
  {
    path: '/pets',
    name: 'pets',
    component: () => import('@/view/pets/index'),
    meta: {
      title: '宠物'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/view/message/index'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/view/home/index'),
    meta: {
      title: '我的'
    }
  },
]
export default pets