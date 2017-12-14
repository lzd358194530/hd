<template>
  <mt-cell-swipe
    :right="[
      {
        content: '删除',
        style: {
          background: '#fe3c00', 
          color: '#fff', 
          width:'4.26666667rem',
          lineHeight:'3.84rem',
          textAlign:'center',
          fontSize:'.72533333rem'
        },
        handler: () => this.delete()
      }
    ]"
    class="manager-item"
    @click.native="gotoDetails(1234)">
    <img src="../../util/images/_business-bg.png" height="160" width="160" class="manager-logo">
    <div class="manager-info">
      <p class="textoverflow">管理员名称：孙悟空</p>
      <p class="textoverflow">联系方式：18402007299</p>
      <p class="textoverflow">管理店铺个数：3</p>
    </div>
  </mt-cell-swipe>
</template>
<script>
  import {MessageBox} from 'mint-ui';
  export default{
    props:{

    },
    methods:{
      delete(){
        MessageBox({
          title: '提示',
          message: '确定要删除吗?',
          showCancelButton: true
        })
        .then(
          res=>{console.log(res)},
          req=>{console.log(req)}
        )
      },
      gotoDetails(id){
        this.$router.push({
          path:'manager/details',
          query:{id}
        })
      }
    }  
  }
</script>
<style lang="less" scoped>
  .manager-item{
    height:3.84rem;
    background: none;
    padding: .42666667rem;
    font-size: 0;
    background-color: #fff;
    .manager-logo{
      display:inline-block;
      vertical-align:top;
      width:2.98666667rem;
      height:2.98666667rem;
      border-radius: 100%;
      border:1px solid #e2dfe9;
    }
    .manager-info{
      display:inline-block;
      vertical-align:top;
      font-size:.512rem;
      width:12rem;
      height:2.98666667rem;
      padding-left: .64rem;
      color:#666;
      line-height:1.03rem;
    }
  }
</style>