// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  debugger
  NProgress.start() // start progress bar
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 否则全部重定向到登录页
  }
  next({
    path: '/login',
    query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  })
  NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
})
