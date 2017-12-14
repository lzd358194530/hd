<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
    </header>
    <div class="content">
      <div class="admins-info">
        <img :src="pic" class="admins-logo">
        <p class="admins-name">{{name}}</p>
        <p class="admins-account">{{account}}</p>
      </div>
      <ul class="shop-wrap">
        <li v-for="item in shopList">
          <div class="admins-shop-address border">
            管理店铺 <span class="right">{{item.address}}</span>
          </div>
          <ul class="border">
            <li v-for="(shop,index) in item.shopList" 
            :class="['shop-item',{border:index<item.shopList.length-1}]"
            @click="gotoShopDetails(shop.id)" :key="index">
              {{shop.name}} <i class="icon-arrow"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        name:'斗战胜佛',
        account:'BK342354',
        pic:require('../../util/images/_business-bg.png'),
        shopList:[
          {
            address:'广州市花都区',
            shopList:[
              {
                name:'兰花路店',
                id:'1234'
              },
              {
                name:'紫薇路店',
                id:'1235'
              }
            ]
          }
        ]
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      gotoShopDetails(id){
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
  .admins-info{
    padding-top:.256rem;
    height:6.61333333rem/* 310px */;
    background-color: #ffb74d;
    text-align: center;
    line-height:1.5;
    color:#fff;
    .admins-logo{
      display:block;
      margin:0 auto;
      width: 3.584rem;
      height:3.584rem;
      border:.128rem solid #ca8118;
      border-radius:100%;
    }
    .admins-name{
      margin:0 auto;
      font-size:.68266667rem;
    }
    .admins-account{
      margin:0 auto;
      font-size:.59733333rem;
    }
  }
  .admins-shop-address{
    padding: 0 .512rem;
    height:1.92rem;
    line-height:1.92rem;
    font-size:.59733333rem;
  }
  .shop-wrap{
    background-color: #fff;
  }
  .shop-item{
    position:relative;
    margin-left:2.56rem;
    padding-right:.64rem;
    height:2.56rem;
    line-height:2.56rem;
    font-size:.64rem;
    &:before{
      content:"";
      position:absolute;
      left:-1.70666667rem;
      top:.72533333rem;
      width:.81066667rem;
      height:1.06666667rem;
      background-image: url(../../util/images/address.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .icon-arrow{
    right:.64rem;
    top:1.024rem;
  }
</style>