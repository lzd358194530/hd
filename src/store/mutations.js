import {cookie} from '../util/js/tools.js'

const LOGIN_OUT = 'LOGIN_OUT'
const LOGIN_IN = 'LOGIN_IN'
const CHECK_LOGIN = 'CHECK_LOGIN'
/**
 *  验证登陆状态 CHECK_LOGIN
 *  退出登陆 LOGIN_OUT
 *  登陆   LOGIN_IN
 */
export default {
  //登陆
  LOGIN_IN(state,userInfo){
    if(!state.login){
      state.login = true
      state.userInfo = {...userInfo}
      cookie.setCookie('userInfo',JSON.stringify(userInfo))
    }
  },
  //退出登陆
  LOGIN_OUT(state){
    if(state.login){
      state.login = false
      state.userInfo = {}
      cookie.delCookie('userInfo')
    }
  },
  //检查登陆状态
  //页面刷新执行一次
  CHECK_LOGIN(state){
    let userInfo = cookie.getCookie('userInfo');
    if(userInfo){
      state.login = true
      state.userInfo = {...JSON.parse(userInfo)}
      cookie.setCookie('userInfo',userInfo)
    }
  }
}