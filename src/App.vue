<template>
  <div id="app">
    <transition name="pg">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  #app{
    height: 100%;
  }
  .pg-enter{
    transform: translate(-100%);
  }
  .pg-enter-active,
  .pg-leave-active{
    position: absolute;
    top: 0;
    width: 100%;
    transition: all .5s;
  }
  .pg-leave-to{
    transform: translate(100%);
  }
</style>
