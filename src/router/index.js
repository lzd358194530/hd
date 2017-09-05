import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import user from '../pages/user'
import base from '../pages/user/base'
import msg from '../pages/user/msg'
import shop from '../pages/user/shop'
import center from '../pages/user/center'



import mask from '../components/mask'

Vue.use(Router)

import store from '../store'
export default new Router({
  routes: [
    {
      path: '/',
      component: app,
      children:[
        {
          path: '',
          component: user,
          children:[
            {
              path: '',
              component: base,
            },
            {
              path: 'msg',
              component: msg,
            },
            {
              path: 'shop',
              component: shop,
            },
            {
              path: 'center',
              component: center,
            },
          ]
        }
      ]
    }
  ],
})

