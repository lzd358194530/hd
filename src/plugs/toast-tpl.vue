<template>
  <transition name="fade">
    <div class="vue-toast" :class="options.pos" v-if="options.isShow">
      {{options.msg}}
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      options:{
        msg: "提示信息...",
        isShow:false,
        pos:'bottom'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
  .vue-toast{
    position: fixed;
    z-index: 999;
    left:50%;
    transform: translateX(-50%);
    transition: all .3s;
    padding: 10px;
    max-width:200px;
    background-color:rgba(0, 0, 0, .6);
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }
  .vue-toast.top{
    top:30px;
    bottom:auto;
  }
  .vue-toast.middle{
    bottom:50%;
  }
  .vue-toast.bottom{
    bottom:20%;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-leave-active{
    opacity: 0;
  }
</style>


