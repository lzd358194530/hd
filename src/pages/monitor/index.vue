<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      视频监控
    </header>
    <div class="monitor-search">
      <label class="search-input">
        <input type="text" placeholder="输入店名进行搜索">
      </label>
    </div>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <li @click="gotoDetails()">
          <video src="" width="100%" controls></video>
          <!-- <video controls> -->
            <!-- <source src="/media/video.oga">
            <source src="/media/video.m4v">
            <object type="video/ogg" data="/media/video.oga" width="100%">
              <param name="src" value="/media/video.oga">
              <param name="autoplay" value="false">
              <param name="autoStart" value="0">
              <p><a href="/media/video.oga">Download this video file.</a></p>
            </object> -->
          <!-- </video> -->
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
      },
      gotoDetails(){
        let id = 123143;
        this.$router.push({
          path:'monitordetails',
          query:{
            id
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .monitor-search{
    height:2.13333333rem;
    position:relative;
    background-color: #ededed;
    .search-input{
      width:14.08rem;
    }
  }
  .content{
    top:4.26666667rem;
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