import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/CommonComponents/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/homePage',
    name: 'Layout',
    component: () => import('@/views/CommonComponents/Layout'),
    hidden: true,
    meta: {
      title: '布局',
      requireAuth: true
    },
    children: [{
      path: '/homePage',
      component: () => import('@/views/CommonComponents/HomePage'),
      name: 'HomePage',
      meta: {
        requireAuth: true
      }
    }]
  },
  {
    path: '/helloworld',
    name: 'test',
    component: () => import('@/components/HelloWorld')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
