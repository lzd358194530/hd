import tools from '../util/js/tools.js'

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
    state.login = true
    state.userInfo = {...userInfo}
    tools.setCookie('userInfo',JSON.stringify(userInfo))
  },
  //退出登陆
  LOGIN_OUT(state){
    state.login = false
    state.userInfo = {}
    tools.delCookie('userInfo')
  },
  //检查登陆状态
  //页面刷新执行一次
  CHECK_LOGIN(state){
    let userInfo = tools.getCookie('userInfo');
    if(userInfo){
      state.login = true
      state.userInfo = {...JSON.parse(userInfo)}
      tools.setCookie('userInfo',userInfo)
    }
  }
}