<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      
    </header>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
    }
  }
</script>
<style lang="less" scoped>
  
</style>