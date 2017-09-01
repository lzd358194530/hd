<template>
  <div class="user-wrap">
    <header>
      我是shop
      <router-link to="/">去user</router-link> 
      <router-link to="/login">去login</router-link> 
      <button @click="loginOut">退出</button>
    </header>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    methods:{
      ...mapMutations({
        add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
      }),
      loginOut(){
        this.$store.dispatch('loginOut')
        this.$router.push({ path: '/login' })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>