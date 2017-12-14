<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      收益明细
    </header>
    <div class="content">
      <div class="profit-row">
        <span class="date">月份</span>
        <span class="sales">销售量</span>
        <span class="total">销售额</span>
        <span class="profit">利润额</span>
      </div>
      <div class="profit-row" v-for="item in profitList">
        <span class="date textoverflow">{{item.year+"年"+item.month+"月"}}</span>
        <span class="sales textoverflow">{{item.sales}}</span>
        <span class="total textoverflow">{{(+item.total).toFixed(2)}}</span>
        <span class="list-profit profit textoverflow">{{(+item.profit).toFixed(2)}}</span>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        profitList:[]
      }
    },
    created(){
      this.setData()
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      getData(){  
        let profitList = [
          {
            year:'2017',
            month:'10',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          },
          {
            year:'2017',
            month:'9',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          },
          {
            year:'2017',
            month:'10',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          },
          {
            year:'2017',
            month:'8',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          },
          {
            year:'2017',
            month:'7',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          },
          {
            year:'2017',
            month:'6',
            sales:'100',
            total:'15016.50',
            profit:'8000.00'
          }
        ]
        return profitList;
      },
      setData(){
        let profitList = this.getData();
        this.profitList = profitList
      }
    }
  }
</script>
<style lang="less" scoped>
  .profit-row{
    font-size:0;
    height:1.81333333rem;
    line-height:1.81333333rem;
    text-align: center;
    span{
      display:inline-block;
      font-size:.512rem
    }
    .date{
      width: 20%;
    }
    .sales{
      width:20%;
    }
    .total{
      width:30%
    }
    .profit{
      width:30%;
    }
    .list-profit{
      color:#ff7200
    }
    &:nth-child(odd){
      background-color: #eceef0;
    }
  }
</style>