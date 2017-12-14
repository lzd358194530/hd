<template>
  <div>
    <header class="title-index">
      <img src="./images/icons-Admin-User.png">
      <div class="userInfo">
        <h3 v-text="userInfo.name"></h3>
        <span v-text="`账号:${userInfo.account}`"></span>
      </div>
    </header>
    <div class="content base">
      <div class="info-panel">
        <div class="more">
          <router-link to="/profit">查看更多</router-link>
        </div>
        <div class="money-sales">
          <div v-text="moneyInfo.sales"></div>
          <h2>销售总额</h2>
        </div>
        <div class="money-profit">
          <div v-text="moneyInfo.profit"></div>
          <h2>利润总额</h2>
        </div>
        <div class="money-pie">
          <VuePie :num="percent/100"></VuePie>
          <div class="percent">
            <span v-text="percent"></span>%
          </div>
        </div>
      </div>
      <p class="text-title" v-text="infoList.title"></p>
      <ul class="info-control">
        <li v-for="(item,idx) in infoList.list" key="idx"
        :style="`background-color:${item.bgColor}`">
          <router-link :to="item.link">
            <div v-text="item.name"></div>
            <img :src="item.img" />
          </router-link>
        </li>
      </ul>
      <p class="text-title" v-text="otherList.title"></p>
      <ul class="other-control">
        <li v-for="(item,idx) in otherList.list" key="idx">
          <router-link :to="item.link">
            <i class="icon" 
            :style="{'background-color':item.bgColor,'background-image': `url(${item.img})`}"></i>
            <div v-text="item.name"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VuePie from '../../components/pie'
  export default {
    data() {
      return {
        infoList:{
          title:'信息管理',
          list:[
          { 
            name:'商家列表',
            link:'/business',
            bgColor:'#36d4a6',
            img:require('./images/admin-busness.png')
          },
          { 
            name:'销售明细',
            link:'/sales',
            bgColor:'#fcb53f',
            img:require('./images/admin-sales.png')
          },
          { 
            name:'订单管理',
            link:'/orders',
            bgColor:'#6068fd',
            img:require('./images/admin-orders.png')
          },
          { 
            name:'申报加盟',
            link:'/join',
            bgColor:'#29b3ff',
            img:require('./images/admin-join.png')
          },
          { 
            name:'管理员',
            link:'/managers',
            bgColor:'#a273ff',
            img:require('./images/admin-administrators.png')
          },
          { 
            name:'视频监控',
            link:'/monitor',
            bgColor:'#ff6666',
            img:require('./images/admin-monitor.png')
          }
        ]
        },
        otherList:{
          title:'其他功能',
          list:[
            { 
              name:'补货中心',
              link:'/supplement',
              bgColor:'#fa5959',
              img:require('./images/goods-supplementary.png')
            },
            { 
              name:'收货中心',
              link:'/receive',
              bgColor:'#66b9ff',
              img:require('./images/goods-receive.png')
            }
          ]
        },
        userInfo:{
          name:'孙悟空',
          account:'BK424514'
        },
        moneyInfo:{
          sales:54185.15,
          profit:21674.06
        }
      }
    },
    components:{
      VuePie
    },
    computed:{
      percent(){
        let {profit,sales} = this.moneyInfo;
        if(!profit||!sales){
          return 0
        }
        return parseInt(profit/sales*100)
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    bottom:2.34666667rem;
  }
  .title-index{
    padding:.384rem .68266667rem 0;
    img{
      float:left;
      width:1.28rem;
      height:1.28rem;
    }
    div{
      float:left;
      margin-left: .85333333rem
    }
    h3{
      font-size:.768rem;
    }
    span{
      display:block;
      font-size: .512rem;
      line-height:1.5
    }
  }
  
  .base{
    background-color: #fbf8f6;
    font-size: .59733333rem;
    color:#4c4c4c;
    .info-panel{
      position:relative;
      padding-top: .85333333rem;
      height: 7.04rem;
      background-image: url(images/info-bg.png);
      background-size:cover;
      background-repeat: no-repeat;
      font-size: .64rem;
      .more{
        position:absolute;
        top:.512rem;
        right:.17rem;
        a{
          padding-right: .64rem;
          color:#fff;
        }
        &:after{
          position:absolute;
          right:0;
          top:0;
          content:'';
          display:block;
          height:.64rem;
          width:.29866667rem;
          background-image: url(images/arrow-wr01.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
      .money-sales,.money-profit{
        position:absolute;
        top:3.456rem;
        width:5.12rem;
        text-align:center;
        div{
          font-size:.68rem;
          color:#fff;
        }
        h2{
          margin-top:.68266667rem;
          font-weight:600;
          font-size:.72533333rem;
        }
      }
      .money-sales{
        left:.17066667rem
      }
      .money-profit{
        right:.17066667rem
      }
    }
    .info-control{
      overflow: hidden;
      li{
        float:left;
        margin:0 .192rem;
        width: 4.94933333rem;
        height:3.648rem;
        &:nth-child(n+4){
          margin-top: .384rem
        }
      }
      a{
        display:block;
        height:100%;
        padding:.32rem .512rem 0 .34133333rem;
        color:#fff;
        img{
          display:block;
          float:right;
          margin-top:.59733333rem;
          height:1.74933333rem;
          width:auto;
        }
      }
    }
    .other-control{
      position: relative;
      height:2.98666667rem;
      padding-left:.64rem;
      background-color: #fff;
      &:before{
        content:'';
        top:0;
        .border
      }
      &:after{
        content:'';
        bottom:0;
        .border
      }
      li{
        float:left;
        height:100%;
        a{
          display:block;
          padding:.42666667rem;
          height:100%;  
          color:#4c4c4c;
          text-align: center;
        }
        .icon{
          display: inline-block;
          width: 1.30133333rem/* 61px */;
          height: 1.30133333rem/* 61px */;
          border-radius: 4px;
          background-repeat: no-repeat;
          background-size: auto 1.04533333rem;
          background-position: center;
        }
        div{
          margin-top:.21333333rem/* 10px */
        }
      }
    }
  }
  .border{
    position:absolute;
    display:block;
    left:0;
    width:100%;
    border-top:1px solid #e5e5e5;
    transform:scaleY(.5)
  }
  .money-pie {
    position:relative;
    margin:0 auto;
    width:5.546rem;
    height:5.546rem;
    background-image: url(./images/pie.png);
    background-size: cover;
    background-repeat: no-repeat;
    .percent{
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      font-size:1.024rem;
      color:#fff;
      span{
        font-size:1.8rem;
        font-weight:600
      }
    }
  }
</style>