<template>
<div>
  <header class="title">
    <i class="back" @click="goBack"></i>我的订单
  </header>
  <ul class="navbar-list">
    <li class="navbar-item"
    v-for="(nav,idx) in navList" key="idx"
    v-text="nav" :class="{active:navActive==idx}"
    @click="change(idx)"></li>
  </ul>
  <div class="content">
    <ul class="order-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="20">
      <li class="order-item"
        v-for="(order,index) in orderList" key="index">
        <span class="order-state" 
          v-show="showState"
          >{{order.orderState}}</span>
        <div class="order-info">
          <p>订单编号：{{order.orderNum}}</p>
          <p>订单类型：{{order.Type}}</p>
          <p>共计{{order.orderCount}}件商品　合计：{{order.orderPrice}}</p>
          <p>付款已确认：{{order.orderPay}}</p>
        </div>
        <div class="order-address">
          <span class="address icon-address left">
          {{order.orderAddress}}</span>
          <span class="btn-details right"
            @click="gotoDetails(order.orderId)">订单详情</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  export default{
    data(){
      return {
        loading:false,
        navList:['全部','待发货','待收货','已完成','驳回'],
        navActive:0,
        orderList:[
          {
            orderType:'补货',
            orderNum:'HD2133534536456',
            orderCount:'29',
            orderPrice:'36.80',
            orderPay:'是',
            orderState:'待发货',
            orderAddress:'花都兰花路店',
            orderId:'541313'
          }
        ],
        showState:true,
      }
    },
    methods:{
      change(n){
        this.navActive = n;
        if(n==0){
          this.showState = true
        }else{
          this.showState = false
        }
      },
      goBack(){
        this.$router.go(-1)
      },
      gotoDetails(id){
        this.$router.push({
         path: 'order/details', 
         query: { id }
       })
      },
      loadMore(){
        console.log('加载更多')
      }
    }
  }
</script>
<style lang="less" scoped>
  .content{
    top:4.26666667rem;
  }
  .navbar-list{
    height: 2.13333333rem;
    border-bottom: 1px solid #efedec;
    border-top: 5px solid #efedec;
    font-size: 0;
    text-align: center;
    color:#666;
    background-color: #fff;
    .navbar-item{
      display: inline-block;
      width: 20%;
      height: 100%;
      font-size: .55466667rem;
      line-height: 1.92rem;
      position: relative;
      transition: all .5s cubic-bezier(.55,0,.1,1);
      &:after{
        content:'';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
        border-bottom: 3px solid #fff;
      }
    }
    .active{
      color: #ffb74d;
      background-color: #f0f0f0;
      &:after{
        border-color: #ffb74d
      }
    }
  }
  .order-list{
    .order-item{
      position:relative;
      height: 7.46666667rem;
      background-color: #fff;
      font-size: .55466667rem;
      .order-state{
        position:absolute;
        top:0;
        right:.384rem;
        padding:.21333333rem .32rem;
        background-color: #ffb54c;
        color:#fff;
        font-weight:600;
      }
      .order-info{
        padding:.384rem;
        height: 4.94933333rem;
        color:#333; 
        line-height: 1.06rem;
      }
      .order-address{
        padding: .42666667rem .64rem;
        height: 2.13333333rem;
        border-top: 1px solid #e5e5e5;
        border-bottom: 2px solid #d4d2d1;
        color:#666;
        font-size: .512rem;
        .btn-details{
          padding: .29866667rem/* 14px */ .74666667rem;
          border:1px solid #c9c9c9;
          border-radius: 6px;
        }
        .address{
          width: 10.66666667rem;
          overflow:hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
        }
      }
      
    }
  }
</style>