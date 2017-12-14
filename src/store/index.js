import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'
import {vuexToLocalStorage} from '../util/js/tools.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  //vuex 数据本地localStorage 存储
  plugins: [vuexToLocalStorage]
})
 