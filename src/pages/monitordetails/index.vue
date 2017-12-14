<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      监控详情
    </header>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <li>
          <div class="shop text-overflow">
            <i class="icon-address"></i>
            广州市花都区兰花路店
          </div>
          <video src="" width="100%" controls></video>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      loadMore(){
        console.log('加载更多')
      }
    }
  }
</script>
<style lang="less" scoped>
  .content{
    padding: 0 .576rem;
    .shop{
      height:2.13333333rem;
      line-height:2.13333333rem;
      text-align: center;
      font-size: .72533333rem;
    }
    video{
      margin-bottom:.64rem;
    }
  }
</style>