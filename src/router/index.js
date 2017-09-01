import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import user from '../pages/user'
import shop from '../pages/shop'
import login from '../pages/login'

Vue.use(Router)

import store from '../store'
export default new Router({
  routes: [{
      path: '/',
      component: app,
      children:[
        {
          path: '',
          component: user,
        },
        {
          path: 'login',
          component: login,
        },
        {
          path: 'shop',
          component: shop,
        }
      ]
    }
  ],
})

