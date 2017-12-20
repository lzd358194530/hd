<template>
  <div id="app">
    <transition name="slide">
      <keep-alive exclude="nokeep">
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app{
    height: 100%;
  }
  .child-view {
    position: absolute;
    width:16rem;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    /* transition: all .5s; */
  }
  .slide-enter{
    opacity: 0;
  }
  .slide-leave-active{
    opacity: 0;
  }
</style>
