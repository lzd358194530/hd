<template>
  <div class="wrap">
    <header class="title">
      <i class="back" @click="goBack"></i>
      我的代理
    </header>
    <img src="../../util/images/msg.jpg" class="shop-logo">
    <div class="content">
      <div class="content-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <div class="info">
          <p>管理员:白龙马</p>
          <span class="name">白龙马的龙宫<i>自营</i></span>
          <p>地址:花都区兰花路</p>
          <span class="state">正常营业</span>
          <div class="img-box">
            <img src="./bg.png" class="left">
            <img src="./bg.png" class="right">
          </div>
          <div class="amount">
            9月销售量：<span>100000</span> <i class="icon-down"></i>
            9月销售额：<span>1000000.00</span> <i class="icon-down"></i>
          </div>
        </div>
        <div class="switch-bar" :class="{active:selected == 1}">
          <div class="mask"></div>
          <span @click="()=>selected=0" :class="{active:selected ==0}">销售排行</span>
          <span @click="()=>selected=1" :class="{active:selected ==1}">缺货商品</span>
        </div>
        <ul class="list-box">
          <li class="item border" v-for="(item,idx) in dataList">
            <img src="./bg.png" class="item-logo">
            <div class="item-info">
              <p>{{item.name}}</p>
              <p>本月已售：{{item.amount}}份</p>
              <p>剩余：{{item.money}}</p>
            </div>
            <span class="rank" v-show="selected==0">{{idx+1}}</span>
            <span class="state" v-show="selected==1">补货</span>
          </li>
        </ul>
        <router-link :to="{ path:'/orderlistdetails',query: { id: '132' }}" class="btn" v-show="selected==1">一键补货</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        selected:0,
        dataList:[
          {
            name:"康师傅黑椒牛肉面",
            admin:'白龙马',
            amount:'1130',
            money:'6850',
            state:'缺货',
            pic:'/'
          },
          {
            name:"康师傅黑椒牛肉面",
            admin:'白龙马',
            amount:'1130',
            money:'6850',
            state:'缺货',
            pic:'/'
          }
        ]
      }
    },
    mounted(){
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
          path:'supplementdetails',
          query:{
            id
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @font-face {
    font-family: 'mon';
    src: url('./mon.ttf');
  }
  .wrap{
    // position:relative;
    background-color: #ffb64d;
    height:100%;
    .shop-logo{
      position:absolute;
      z-index:5;
      width:2.34666667rem;
      height:2.34666667rem;
      border-radius:1.28rem;
      top:2.13333333rem;
      left:6.82666667rem;
      border:1px solid #ccc;
    }
    &:before{
      position:absolute;
      content:"";
      z-index:4;
      display:block;
      left:.42666667rem;
      top:3.30666667rem;
      width:15.14666667rem;
      height:1.17333333rem;
      background-color: #fff;
    }
  }
  .content{
    background-color: #fff;
    width:15.14666667rem;
    bottom:.42666667rem;
    left:.42666667rem;
    top:3.30666667rem;
    .content-box{
      padding-top:1rem;
      overflow: hidden;
    }
  }

  .info{
    position:relative;
    text-align:center;
    font-size:.59733333rem;
    color:#333;
    background-color: #fff;
    p{
      line-height:3.3
    }
    .name{
      position:relative;
      display:inline-block;
      font-size:1.152rem;
      color:#686868;
      i{
        position:absolute;
        top:0;
        right:0;
        font-size: .55466667rem;
        line-height:1.5;
        padding:0 .3rem;
        background-color: #fd6861;
        color:#fff;
        border-radius:.14933333rem;
        transform: translateX(1.83466667rem);
      }
    }
    .state{
      margin:1.024rem 0;
      padding:.3rem 1rem;
      font-size: .59733333rem;
      color:#fff;
      background-color: #fab64b;
      border-radius:.21333333rem;
      line-height:3
    }
    .img-box{
      overflow:hidden;
      padding:.98133333rem 1.13066667rem;
      img{
        display:block;
        width:6.12266667rem;
        height:4.992rem;
      }
    }
    .amount{
      color:#333;
      span{
        color:#cc0303
      }
      i{
        display:inline-block;
        width:.49066667rem;
        height:.68266667rem;
        background-image: url(./up.png);
        background-repeat: no-repeat;
        background-size: cover;
        vertical-align:middle;
      }
      i.icon-down{
        background-image: url(./down.png);
      }
    }
  }
  .item{
    height:4.05333333rem;
    padding:.55466667rem 1rem;
    .item-logo{
      height:2.98666667rem;
      width:2.98666667rem;
    }
    .item-info{
      width:9.17333333rem;
      padding-left:.512rem;
      color:#333;
      height:2.98666667rem;
      line-height:1.025rem
    }
    .rank{
      font-family:"mon";
      font-size:2.02666667rem/* 95px */;
      color:#ffb74d;
      position:absolute;
      right:1rem;
      padding-right:.5rem;
      top:.8rem;
      text-align:right;
    }
    .state{
      position:absolute;
      padding:.29866667rem .91733333rem;
      right:1rem;
      top:1.36533333rem;
      font-size:.59733333rem;
      color:#fff;
      background-color: #ff6766;
      border-radius: .29866667rem;
    }
  }
  .btn{
    height:1.5rem;
    line-height:1.5rem;
    margin:.42666667rem auto;
  }

</style>