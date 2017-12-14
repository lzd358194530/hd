<template>
  <div>
    <transition name="slide">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <Footbar></Footbar>
  </div>
</template>
<script>
  export default {
    components:{
      Footbar:()=>import('../../components/footbar')
    }
  }
</script>

<style lang="less" scoped>
</style>