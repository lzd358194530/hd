<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      订单详情
    </header>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <li class="items" v-for="(shop,shopId) in shopList">
          <div class="shop-address border">
            <span class="icon-address">
               {{shop.name}}
            </span>
          </div>
          <p class="shop-title border">商品详情</p>
          <ul class="goods-list">
            <li class="goods-item border" 
            v-for="(good,goodId) in shop.goodList">
              <img src="../ordersDetails/images/goods-pic.png"
              class="good-logo">
              <div class="good-info">
                <p class="text-overflow">{{good.name}}</p>
                <p class="text-overflow">数量：{{good.count}} 颜色：{{good.color}}</p>
                <p class="text-overflow">价格：{{good.price}}</p>
              </div>
              <NumBtn class="numbtn" @change="onChange" 
              :shopId="shopId" :goodId="goodId" :max="999" :default="good.count"></NumBtn>
            </li>
          </ul>
          <div class="count">
            共计{{shop.count}}件商品 合计：￥{{shop.money.toFixed(2)}}
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      总计：<span class="amount-money">￥{{amountMoney.toFixed(2)}}</span>
      <span class="btn btn-supplement right" @click="onSubmit">提交订单</span>
    </div>
  </div>
</template>
<script>
  import NumBtn from '../../components/numbtn'
  export default{
    data(){
      return {
        amountMoney:0,
        shopList:[
          {
            name:"花都区兰花路店",
            goodList:[
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              },
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              }
            ],
            count:0,
            money:0
          }
          ,{
            name:"花都区兰花路店",
            goodList:[
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              },
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              }
            ],
            count:0,
            money:0
          },{
            name:"花都区兰花路店",
            goodList:[
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              },
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              }
            ],
            count:0,
            money:0
          },{
            name:"花都区兰花路店",
            goodList:[
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              },
              {
                name:'竹之棉 毛巾家纺 竹纤维A类',
                count:'10',
                color:'蓝色',
                price:'1.00',
              }
            ],
            count:0,
            money:0
          },
        ],
        sumNum:0
      }
    },
    created(){
      this.setCount()
    },
    methods:{
      setCount(){
        console.log('执行setCount')
        let sumNum = 0,total = 0;
        this.shopList.forEach(item=>{
          let sum = 0,money=0;
          item.goodList.forEach(item=>{
            sum += parseInt(item.count)
            money+=item.price*item.count;
          })
          item.count = sum
          item.money = money;
          sumNum += sum;
          total += money;
        })
        this.sumNum = sumNum;
        this.amountMoney = total;
      },
      goBack(){
        this.$router.go(-1)
      },
      loadMore(){
        console.log('加载更多')
      },
      onChange(val,shopId,goodId){
        this.shopList[shopId].goodList[goodId].count = val
        this.setCount()
      },
      onSubmit(){
        this.$router.replace({
          path:'home',
        })
      }
    },
    components:{
      NumBtn
    }
  }
</script>
<style lang="less" scoped>
  .content{
    bottom:2.98666667rem;
  }
  .footer{
    margin-top:15rem;
    position:absolute;
    bottom:0;
    left:0;
    width: 100%;
    height:2.98666667rem;
    background-color: #fff;
    padding:.74666667rem .81066667rem;
    text-align: right;
    box-shadow: 0 0 2px #ccc;
    font-size:.59733333rem;
    line-height:1.49333333rem;
    .btn-supplement{
      width:4.05333333rem;
      height:1.49333333rem;
      line-height: 1.49333333rem;
      font-size:.72533333rem;
      margin-left: .64rem
    }
    .amount-money{
      color:#ffb64d
    }
  }
  .items{
    position:relative;
    margin-bottom: 2px;
    box-shadow:0 0px 2px #666;
    color:#666;
    background-color: #fff;
    font-size:.64rem;
    .shop-address{
      text-align: center;
      height:1.6rem/* 75px */;
      line-height:1.6rem/* 75px */
    }
    .shop-title{
      padding:0 .85333333rem;
      height:1.28rem;
      line-height:1.28rem;
      font-size: .59733333rem;
      color:#333;
    }
    .goods-item{
      height:3.37066667rem/* 158px */;
      padding:.29866667rem .85333333rem;
      .good-logo{  
        display:inline-block;
        width:2.73066667rem;
        height:2.73066667rem;
        vertical-align: top;
      }
      .good-info{
        display:inline-block;
        width:11.09333333rem;
        height:2.73066667rem;
        vertical-align: top;
        padding-left: .64rem;
        font-size:.512rem;
        line-height:.945rem;
      }
    }
    .count{
      padding:0 .85333333rem;
      height:1.45066667rem;
      line-height:1.45066667rem;
      text-align:right;
    }
  }
  .numbtn{
    position:absolute;
    width:3.84rem;
    height:1.06666667rem;
    right:.64rem;
    bottom:.32rem;
    background-color: #ffb74d;
    border:1px solid #ffb74d;
  }
</style>