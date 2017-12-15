<template>
  <div class="wrap">
    <img 
      src="./logo.png"
      class="logo">
    <div class="login">
      <p>手机号码:</p>
      <input 
        type="text"
        v-model.lazy="userInfo.name">
      <p>密码:</p>
      <input 
        type="password"
        v-model.lazy="userInfo.pwd">
      <router-link 
        to="/password" 
        class="forget">忘记密码</router-link>
      <!-- <span class="forget">忘记密码</span> -->
      <div 
        @click="loginIn" 
        class="btn">登录</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {checkPhoneNumber} from '../../util/js/tools'
import { Toast ,Indicator} from 'mint-ui';
  export default {
    data() {
      return {
        userInfo:{
          name:'',
          pwd:''
        }
      }
    },
    methods:{
      loginIn(){
        let name = this.userInfo.name.trim(),
            pwd = this.userInfo.pwd.trim();
        if(name&&pwd){
          if(checkPhoneNumber(name)){
            Indicator.open('登录中...');
            axios.get('../../../static/login.json')
            .then((res)=> {
              Indicator.close();
              let userInfo = res.data;
              this.$store.dispatch('loginIn',userInfo)
              this.$router.push('/')
            })
            .catch((err)=> {
              console.log(err);
            });
          }else{
            Toast({
             message: '手机号码格式不正确',
             duration: 1000,
           });
          }
        }else{
         Toast({
           message: '请输入账号和密码',
           duration: 1000,
         });
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .wrap{
    padding-top: 1px;
    overflow-y:auto
  }
  .logo{
    display:block;
    margin:20% auto 10%;
    width: 6.016rem;
    height:6.37866667rem;
  }
  .login{
    position:relative;
    padding: 0 1.28rem;
    font-size:.55466667rem;
    color:#8e8e92;
    p{
      margin-top: 1rem
    }
    input{
      display:block;
      height:1.70666667rem;
      width:100%;
      border-bottom: 1px solid #eee;
      background:none;
    }
    input[type="password"]{
      padding-right:3.2rem;
    }
    .btn{
      margin:1rem auto;
    }
    .forget{
      position:absolute;
      padding:.6rem .42666667rem;
      right:1.28rem;
      top:3.84rem;
      color:#8e8e92;
      &:active{
        color:#31302e;
      }
    }
  }
</style>