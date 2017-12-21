// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { setGlobalFontSize } from './util/js/tools'
import store from './store'
import './util/css/reset.css'
import './util/css/common.css'

//引入插件
import toast from './plugs/toast'
Vue.use(toast,{
  pos:'bottom', //默认位置
  delay:1500    //默认消失时间
});


// mint ui
import 'mint-ui/lib/style.css'
import { Cell,CellSwipe,InfiniteScroll,Picker,Popup,Actionsheet} from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Cell.name, Cell);
Vue.component(Picker.name, Picker);
Vue.component(Actionsheet.name, Actionsheet);
Vue.use(InfiniteScroll);


// 高德地图控件
import VueAMap from 'vue-amap';
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
});

//设置字体大小
setGlobalFontSize(16);
Vue.config.productionTip = false


//优先执行  状态检查        
store.dispatch('checkLogin')

//检查登陆状态
router.beforeEach((to, from, next) => {
  let isLogin = store.getters.getLogin;
  if (isLogin || to.path === '/login'|| to.path === '/password') {
    next()
  }else{
    next({path:'/login'})
  }
})

//全局指令
Vue.directive('back',{
  bind:(el,binding)=>{
    el.addEventListener('click',()=>{
      if(binding.value==undefined){
        router.go(-1);
      }else{
        router.replace(binding.value)
      }
    })
  },
  //使用缓存 keepalive 时候 起效
  // unbind:()=>{
  //   el.removeEventListener('click',()=>{
  //     if(binding.value==undefined){
  //       router.go(-1);
  //     }else{
  //       router.replace(binding.value)
  //     }
  //   })
  // }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
