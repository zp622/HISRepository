// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'

import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios // 将axios挂载在Vue实例原型上

// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
// 设置请求头
// axios.defaults.headers.post['Content-type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:53758/'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
axios.defaults.timeout = 15000 // 超时响应
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 配置请求头（推荐）
// axios.defaults.withCredentials = true // axios 默认不发送cookie，需要全局设置true发送cookie

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (to.path !== '/login') { // store.getters.username.length === 0 &&
    next({ path: '/login' })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
