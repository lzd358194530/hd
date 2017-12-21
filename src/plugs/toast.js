/**
 * Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
 * 
 */
  // MyPlugin.install = function (Vue, options) {
  //   //  1. 添加全局方法或属性
  //   Vue.myGlobalMethod = function () {
  //     // 逻辑...
  //   }

  //   // 2. 添加全局资源
  //   Vue.directive('my-directive', {
  //     bind (el, binding, vnode, oldVnode) {
  //       // 逻辑...
  //     }
  //     //...
  //   })

  //   // 3. 注入组件
  //   Vue.mixin({
  //     created: function () {
  //       // 逻辑...
  //     }
  //     //...
  //   })

  //   // 4. 添加实例方法
  //   Vue.prototype.$myMethod = function (methodOptions) {
  //     // 逻辑...
  //   }
  // }

/**
 * 使用插件
 * 通过全局方法 Vue.use() 使用插件： Vue.use(MyPlugin)
 * 也可以传入一个选项对象： Vue.use(MyPlugin, { someOption: true })
 * 
 */


//通过添加实例来实现

// import style from './toast-style.scss';
import toTpl from './toast-tpl.vue';
const Toast = {
  install(Vue,options){
    Vue.prototype.$toast = (tips)=>{
      clearTimeout(this.timeId);
      tips = {...options,...tips};
      let {msg,delay,icon,pos} = tips;  
      let toastTpl = Vue.extend(toTpl);
      // 1 如果实例存在 则不创建 不存在则创建然后保存为对象的属性（全局变量）
      if(!this.vmToast){ 
        this.vmToast = new toastTpl();     
      };
      // 2、创建实例，挂载到body
      let tpl = this.vmToast.$mount().$el;
      Vue.set( this.vmToast, 'options', {
        ...this.vmToast.options,
        ...tips,
        isShow:true
      })
      document.body.appendChild(tpl);        
      // 3、把创建的实例添加到body中
      // 4、延迟delay秒后移除该提示
      this.timeId = setTimeout(()=>{         
        Vue.set( this.vmToast, 'options', {
          ...this.vmToast.options,
          isShow:false
        })
        clearTimeout(this.timeId);
      }, delay)
    }
  },
};
export default Toast