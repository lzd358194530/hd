<template>
  <div>
    <div class="center-header">
      <i class="icon-state">自营</i>
      <img src="../../util/images/_business-bg.png" height="160" width="160" class="center-logo">
      <p class="center-name">孙悟空</p>
      <p class="center-acount">账号: BK543132</p>
      <span class="center-lever">市级代理</span>
    </div>
    <div class="content">
      <div class="profit">
        <mt-cell
          title="本月收益"
          href="#/profit"
          is-link
          value="查看更多" class="profit-title border">
          <img slot="icon" src="./images/_7.png" class="icon-profit">
        </mt-cell>
        <div class="profit-info border">
          <div class="money-panel left">
            <p class="total">41545.78</p>
            <p>销售总额</p>
          </div>
          <div class="money-panel right">
            <p class="total">41545.78</p>
            <p>利润总额</p>
          </div>
        </div>
      </div>
      <div class="border">
        <mt-cell v-for="item in list"
          :title="item.name"
          :href="item.link"
          is-link
          class="profit-title border" key="index">
          <img slot="icon" :src="item.pic" class="icon-list">
        </mt-cell>
      </div>
      <div class="login-out" @click="loginOut">退出账号</div>
    </div>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui';
  export default{
    data(){
      return {
        selected:0,
        list:[
          {
            name:'店铺列表',
            pic:require('./images/_6.png'),
            link:'#/shopList'
          },{
            name:'我的订单',
            pic:require('./images/_5.png'),
            link:'#/orders'
          },{
            name:'我的银行卡',
            pic:require('./images/_4.png'),
            link:'#/bankcard'
          },{
            name:'实名认证',
            pic:require('./images/_3.png'),
            link:'#'
          },{
            name:'安全中心',
            pic:require('./images/_2.png'),
            link:'#'
          },{
            name:'设置',
            pic:require('./images/_1.png'),
            link:'#'
          },
        ]
      }
    },
    methods:{
      loginOut(){
        MessageBox.confirm('是否确定退出?', '提示')
        .then((resolve)=>{
          this.$store.dispatch('loginOut');
          this.$router.replace('/login')
        },(reject)=>{
          console.log(reject)
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .center-header{
    position:relative;
    padding-top: 1.49333333rem;
    height:9.68533333rem;
    background-image: url(../../../static/center-bg.png);
    background-size: cover;
    font-size:.512rem;
    color:#fff;
    text-align: center;
    .icon-state{
      position:absolute;
      padding: .128rem .256rem;
      border-radius:.14933333rem;
      right:.66133333rem;
      top:.576rem;
      font-size:.53333333rem;
      background-color: #ff6666;
    }
    .center-logo{
      display:block;
      margin:0 auto;
      width: 4.26666667rem;
      height:4.26666667rem;
      border-radius:4.26666667rem;
      border:.192rem solid #cf8415;
    }
    .center-name{
      font-size:.64rem;
      margin: .3rem 0;
    }
    .center-lever{
      display:inline-block;
      padding:.17066667rem .29866667rem .17066667rem .66133333rem;
      margin-top:.32rem;
      background-image: url(images/_8.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .content{
    top:9.68533333rem/* 454px */;
    bottom:2.34666667rem;
    background-color: #fff;
    .icon-profit{
      width:.93866667rem;
      height:.93866667rem;
      margin-right: 4px;
    }
    .profit-info{
      height:3.41333333rem/* 160px */;
      padding-top:.85333333rem;
      .money-panel{
        height:1.70666667rem;
        width:50%;
        text-align:center;
        font-size:.59733333rem;
        line-height:1.5;
        color:#777;
        .total{
          color:#ed4800;
        }
      }
      .left{
        border-right: 1px solid #fea726;
      }
    }
    .icon-list{
      width:.768rem;
      height:auto;
      margin-right: 4px;
      vertical-align:middle;
    }
    .border .border{
      &::after{
        width:14.5rem;
      }
    }
  }
  .login-out{
    height:1.92rem;
    line-height:1.92rem;
    text-align: center;
    font-size:.64rem;
    color:#f8360e;
    &:active{
      background-color: #eee;
    }
  }
</style>