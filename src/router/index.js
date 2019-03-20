import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
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
    }
  ]
})
