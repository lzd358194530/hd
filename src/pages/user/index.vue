<template>
  <div class="user-wrap">
    <header>
      <div class="user-pic">
      </div>
      <p class="user-name">真实姓名</p>
      <p class="user-num">账号:12345132</p>
      <i class="user-mail"></i>
      <router-link to="/shop">去shop</router-link> 
      <router-link to="/login">去login</router-link> 
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [{
          text: '基本资料',
          icon: ''
        }]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>