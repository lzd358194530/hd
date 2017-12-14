<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      <label class="search-input">
        <input type="text">
      </label>
      <i class="search"></i>
    </header>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <li class="item border" v-for="shop in shopList" @click="gotoDetails">
          <img src="../../util/images/msg.jpg" class="shop-logo">
          <div class="shop-info">
            <p class="shop-name">{{shop.name}}</p>
            <p>管理员：{{shop.name}}</p>
            <p>销售量：{{shop.amount}}，销售额：{{shop.money}}</p>
          </div>
          <span class="shop-state">{{shop.state}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        shopList:[
          {
            name:"白龙马的龙宫",
            admin:'白龙马',
            amount:'1130',
            money:'6850',
            state:'缺货',
            pic:'/'
          },
          {
            name:"白龙马的龙宫",
            admin:'白龙马',
            amount:'1130',
            money:'6850',
            state:'缺货',
            pic:'/'
          }
        ]
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      loadMore(){
        console.log('加载更多')
      },
      gotoDetails(){
        let id = 123143;
        this.$router.push({
          path:'shop/details',
          query:{
            id
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .footer{
    position:absolute;
    bottom:0;
    left:0;
    width: 100%;
    height:2.13333333rem;
    padding: .32rem 1.28rem;
    background-color: #d2d2d2;
  }
  .item{
    position:relative;
    padding:.512rem .768rem;
    height:4.26666667rem;
    font-size:0;
    background-color: #fff;
    .shop-logo{  
      display:inline-block;
      width:3.2rem;
      height:3.2rem;
      vertical-align: top;
      border:1px solid #e0e0e0;
      border-radius: .34133333rem;
    }
    .shop-info{
      display:inline-block;
      width:11.09333333rem;
      height:3.2rem;
      vertical-align: top;
      padding-left: 1.024rem;
      font-size:.59733333rem;
      line-height:1.12rem;
      color:#626262;
      .shop-name{
        font-size:.768rem;
        color:#414141;
      }
    }
    .shop-state{
      position:absolute;
      top:1.17333333rem;
      right:.768rem;
      display:block;
      width:2.98666667rem;
      text-align: center;
      border-radius:.34133333rem;
      font-size:.512rem;
      line-height:2;
      background-color: #ff6766;
      color:#fff;
    }
  }
  .btn-supplement{
    width:4.05333333rem;
    height:1.49333333rem;
    line-height: 1.49333333rem;
    font-size:.72533333rem;
  }
</style>