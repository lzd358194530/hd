<template>
  <ul class="footer">
    <li><router-link to="/" ><i class="index"></i>首页</router-link></li>
    <li><router-link to="/msg" ><i class="msg"></i>消息</router-link></li>
    <li><router-link to="/shop" ><i class="shop"></i>店铺</router-link></li>
    <li><router-link to="/center" ><i class="center"></i>个人中心</router-link></li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .footer{
    position: fixed;
    bottom: 0;
    height: 2.34666667rem;
    width: 16rem;
    border-top:1px solid #e9e8e9;
    background-color: #fff;
    li{
      position:relative;
      float: left;
      width:25%;
      height:100%;
    }
    a{
      display:block;
      position:relative;
      height:100%;
      padding-top:1.536rem;
      font-size:.59733333rem;
      text-align: center;
      color:#999;
      i{
        display:block;
        position:absolute;
        left:1.488rem;
        top:.3rem;
        width:1.024rem;
        height:1.024rem;
        background-size: 1rem auto;
        background-repeat: no-repeat;
        background-position: center;
      }
      .index{
        background-image: url('images/footer-index.png');
      }
      .msg{
        background-image: url('images/footer-msg.png');
      }
      .shop{
        background-image: url('images/footer-shop.png');
      }
      .center{
        background-image: url('images/footer-center.png');
      }
    }
    .router-link-exact-active{
      color:#ffab2e;
      .index{
        background-image: url('images/footer-index-active.png');
      }
      .msg{
        background-image: url('images/footer-msg.png');
      }
      .shop{
        background-image: url('images/footer-shop-active.png');
      }
      .center{
        background-image: url('images/footer-center.png');
      }
    }
  }
</style>