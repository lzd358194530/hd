<template>
  <mt-cell-swipe
      :right="[{
            content: '删除',
            style: {
              background: '#fe3c00', 
              color: '#fff', 
              width:'4.26666667rem',
              lineHeight:'4.05333333rem',
              textAlign:'center',
              fontSize:'.7253333rem'
            },
            handler: () => this.delete()
          }]"
      class="msg-item">
      <img src="../../util/images/msg.jpg" class="msg-logo">
      <div class="msg-info">
        <p class="msg">通知通通知通通知通通知通通知通通知</p>
        <p class="textoverflow time">2017-09-01  10:36</p>
      </div>
    </mt-cell-swipe>
</template>
<script>
  import {MessageBox} from 'mint-ui';
  export default{
    data(){
      return {
        styles:[]
      }
    },
    props:{
      msgInfo:Object
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
    }
  }
</script>
<style lang="less" scoped>
  .msg-item{
    height:4.1rem;
    background-color: #fff;
    padding:.34133333rem 0;
    font-size: 0;
    .msg-logo{
      display:inline-block;
      width:3.41333333rem/* 160px */;
      height:3.41333333rem;
    }
    .msg-info{
      display:inline-block;
      font-size:.512rem;
      width:11.30666667rem;
      height:3.41333333rem;
      padding-left: .576rem;
      color:#313131;
      .msg{
        line-height: .87rem;
        height: 2.56rem;
        overflow: hidden;
      }
      .time{
        line-height: 1.7;
      }
    }
  }
</style>