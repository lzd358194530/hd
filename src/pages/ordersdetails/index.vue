<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      订单详情
    </header>
    <div class="content">
      <div class="address-info">
        <h2 class="shop-name">花都区兰花路店</h2>
        <p>
          <span>收货人：</span>
          <span class="icon-phone right">186454123</span>
        </p>
        <p class="recive-address">收货地址：</p>
      </div>
      <div class="goods">
        <p class="goods-title border">商品详情</p>
        <ul>
          <li class="goods-item border">
            <img src="./images/goods-pic.png" class="goods-pic">
            <div class="goods-info">
              <p>竹之棉 毛巾家纺 竹纤维A类</p>
              <p>数量：10 颜色：蓝色</p>
              <p>价格：¥89.50</p>
            </div>
          </li>
        </ul>
        <div class="goods-count border">
          共计20件商品&nbsp;&nbsp;&nbsp;合计：￥189.00
        </div>
      </div>
      <div class="order-info">
        <p>订单编号：HD4612164123131</p>
        <p>订单类型：补货</p>
        <p>创建时间：2017-09-05 10:57:33</p>
        <span class="order-type">驳回</span>
      </div>
      <div class="reason">
        驳回理由：未付款
      </div>
      <div class="shop-map border">
        <div class="map-title border">
          <span class="icon-address">
             店铺地址：广州市花都区兰花路37号
          </span>
        </div>
        <div class="map">
          <el-amap vid="amap"></el-amap> 
        </div>
      </div>
      <div class="footer">
        <span class="footer-btn right">重新提交</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    created(){
      // console.log(this.$route.query)
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
    }
  }
</script>
<style lang="less" scoped>
  .content{
    background-color: #dedcda;
    padding-bottom:0;
    font-size:.512rem;
  }
  .address-info{
    padding: 0 1.06666667rem/* 50px */;
    height:7.14666667rem;
    background-color: #ffb74d;
    background-image: url(./images/address-bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15.44533333rem 6.31466667rem;
    .shop-name{
      padding:1.28rem/* 60px */ 1.06666667rem/* 50px */;
      font-size: .68266667rem/* 32px */;
      font-weight:600;
      text-align:center;
      color: #ffb74d;
    }
    p{
      line-height:1.9;
    }
    .icon-phone{
      position: relative;
      &:before{
        content:"";
        position:absolute;
        left:-.91733333rem/* 43px */;
        top:.128rem;
        width:.64rem/* 30px */;
        height:.64rem/* 30px */;
        background-image: url(./images/phone.png);
        background-repeat: no-repeat;
        background-size: cover;
      } 
    }
    .recive-address{
      color:#666
    }
  }
  .goods{
    box-shadow: 0 0px 4px #999;
    background: linear-gradient(#eee, #fff);
    font-size:.59733333rem;
    .goods-title{
      padding:.42666667rem .81066667rem;
    }
    .goods-count{
      padding:.512rem .55466667rem;
      text-align:right;
      color:#666;
    }
    .goods-item{
      padding:.29866667rem .81066667rem;
      color:#666;
      line-height:1.6;
      .goods-pic{
        display:inline-block;
        vertical-align: top;
        width:2.77333333rem;
        height:2.77333333rem;
      }
      .goods-info{
        display:inline-block;
        vertical-align:top;
        padding-left:.42666667rem;
      }
    }
  }
  .order-info{
    position:relative;
    padding:.256rem .768rem;
    margin:4px 0;
    line-height:2.2;
    color:#666;
    background-color: #fff;
    .order-type{
      position:absolute;
      right:.768rem;
      top:1.38666667rem;
      padding:.21333333rem .64rem;
      border-radius: 4px;
      border:1px solid #de4550;
      color:#de4550;
      font-size:.59733333rem;
      line-height:1
    }
  }
  .reason{
    margin:4px 0;
    padding:.34133333rem .42666667rem;
    background-color: #ff6666;
    font-size:.59733333rem;
    color:#fff;
  }
  .shop-map{
    font-size:.59733333rem;
    text-align:center;
    background-color: #fff;
    .map-title{
      padding:.42666667rem 0;
    }
    .map{
      height:12.16rem;
    }
  }
  .footer{
    padding:.64rem 1.28rem;
    height:2.56rem;
    background-color: #fff;
    .footer-btn{
      padding:.32rem .64rem;
      color:#ffb74d;
      border:1px solid #ffb74d;
      border-radius:4px;
    }
  }

  
</style>