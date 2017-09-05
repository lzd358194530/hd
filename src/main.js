// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { setGlobalFontSize } from './util/js/tools'
import store from './store'
import './util/css/reset.css'
import './util/css/common.css'

setGlobalFontSize(16);
Vue.config.productionTip = false

//优先执行  状态检查        
store.dispatch('checkLogin')

//检查登陆状态
router.beforeEach((to, from, next) => {
  let isLogin = store.getters.getLogin;
  if (isLogin || to.path === '/login') {
    next()
  }else{
    next({path:'/login'})
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
