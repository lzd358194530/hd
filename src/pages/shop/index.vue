<template>
  <div>
      <header class="title">我的店铺</header>
      <div class="content">
        <p class="text-title">我的店铺
          <router-link to="/shopList" class="right">查看更多({{myShops.length}})</router-link>
        </p>
        <ul class="myshops">
          <li class="myshop" 
            v-for="(shop,idx) in showMyShops" key="idx" @click="gotoShopDetails()">
            <div class="shop-state left">
              <span class="normal" v-if="shop.stock==1">正常</span>
              <span class="lack" v-if="shop.stock==0">缺货</span>
            </div>
            <div class="shop-info right">
              <h3 class="shop-name">{{shop.name}}</h3>
              <p class="shop-sales">销售量：{{shop.salesNum}}件  销售额：{{shop.salesMoney}}元</p>
              <p class="shop-address"><i></i>{{shop.address}}</p>
            </div>
          </li>
        </ul>
        <p class="text-title">代理店铺</p>
        <div class="agentshop">
          <router-link to="/shopList">查看我的代理店铺</router-link>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myShops:[ //我的店铺列表
          {
            id:'001',
            name:'HD无人值守',  //名字
            salesNum:'1130',   //销售量
            salesMoney:'6850', //销售额
            address:'广州花都迎宾大道店', //地址
            stock:1 //库存 1 正常 0 缺货
          },
          {
            id:'002',
            name:'HD无人值守',  //名字
            salesNum:'1130',   //销售量
            salesMoney:'6850', //销售额
            address:'广州花都迎宾大道店', //地址
            stock:0 //库存 1 正常 0 缺货
          }
        ]
      }
    },
    computed:{
      showMyShops(){ //需要显示的店铺
        return this.myShops.slice(0,2)//只显示2个
      }
    },
    methods:{
      gotoShopDetails(){
        let id = 1231;
        this.$router.push({
          path:'/shop/details',
          query:{
            id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    padding-bottom:2.34666667rem;
  }
  .myshops{
    padding: 0 .42666667rem;
    .myshop{
      height:3.84rem;
      background-image: url(images/myshop-bg.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      box-shadow: 0 0px 3px #666;
      border-radius: 10px;
      padding:.54rem .85333333rem;
      font-size:.512rem;
      color:#fff;
      &:nth-child(n+2){
        margin-top: 1.06666667rem
      }
      .shop-state{
        width: 2.56rem;
        padding-top:2.13333333rem;
        background-image: url(images/shop.png);
        background-size:2.13333333rem 1.92rem;
        background-position: center 0;
        background-repeat: no-repeat;
        span{
          display:block;
          border-radius:5px;
          padding: .13rem 0;
          text-align:center;
        }
        .normal{ //正常
          background-color: #f5e700;
        }
        .lack{   //缺货
          background-color: #ff3939;
        }
      }
      .shop-info{
        text-align:right;
        line-height: 1.6;
        text-shadow:0 0px 3px #666;
        width:10.88rem;
        .shop-name{
          font-size:.64rem;
        }
        .shop-address{
          font-size:.72533333rem;
          i{
            display:inline-block;
            width:.896rem;
            height:.93866667rem;
            background-image: url(images/address.png);
            background-repeat: no-repeat;
            background-size: cover;
            vertical-align: sub;
            margin-right: .256rem/* 12px */
          }
        }
      }
    }
  }
  .agentshop{
    padding:0 .42666667rem;
    a{
      display:block;
      padding:1.5rem 4.05333333rem;
      color:#333333;
      font-size:.72533333rem;
      box-shadow: 0 0px 3px #666;
      border-radius: 10px;
      position: relative;
      &:before{
        display:block;
        position:absolute;
        content:"";
        width:2.112rem;
        height:2.112rem;
        left:1.06666667rem;
        top:.8rem;
        background-image: url(images/agentshop.png);
        background-size: cover;
        background-repeat: no-repeat;
      }
      &:after{
        display:block;
        position:absolute;
        content:"";
        width:.53333333rem;
        height:1.024rem;
        right:1.06666667rem;
        top:1.38666667rem;
        background-image: url(images/arrow-br01.png);
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .text-title{
    margin-top:.34133333rem
  }
</style>