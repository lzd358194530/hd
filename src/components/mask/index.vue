<template>
  <div class="mask">
    <div class="msg-box">
      <div class="animate">
        
      </div>
      <slot class="msg">加载中</slot>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .mask{
    display: block
  }
  .msg-box{
    width: 50%;
  }
  .animate{
    
  }
  .msg{
    
  }
</style>