<template>
  <div>
      <div>我是login</div>
      <div>
         <input type="text" placeholder="用户名"
         v-model="userInfo.name"> <br>
         <input type="text" placeholder="密码"
         v-model="userInfo.pwd"> <br>
        <button @click="loginIn">登录</button>
        <button @click="loginOut">退出</button>
      </div>
      <router-link to="/shop">去shop</router-link> 
      <router-link to="/">去user</router-link> 
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'
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
        axios.get('../../../static/login.json')
        .then((res)=> {
          let userInfo = res.data;
          this.$store.dispatch('loginIn',userInfo)
          this.$router.push('/')
        })
        .catch((err)=> {
          console.log(err);
        });
      },
      loginOut(){
        this.$store.dispatch('loginOut')
      }
    }
  }
</script>
<style lang="less" scoped>

</style>