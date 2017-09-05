/**
 *  验证登陆状态 checkLogin
 *  退出登陆 loginOut
 *  登陆   loginIn
 */

//登陆
const loginIn = ({ commit},userInfo)=>{
  commit('LOGIN_IN',userInfo)
}


// 退出登陆
const loginOut = ({commit})=>{
  commit('LOGIN_OUT')
}


//检查登陆状态
const checkLogin=({ commit })=> {
  commit('CHECK_LOGIN');
}

export default {
  loginIn,
  loginOut,
  checkLogin
}