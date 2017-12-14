<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>店铺管理员<span class="header-btn" @click="gotoAdd">添加</span>
    </header>
    <div class="manager-search">
      <label class="search-input">
        <input type="text" name="" id="">
      </label>
    </div>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in managerList" class="border">
          <manager></manager>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import manager from './manager.vue'
  export default{
    data(){
      return {
        managerList:[1,2,3,4,5,6,7,8,9]
      }
    },
    components:{
      manager
    },
    methods:{
      loadMore(){
        console.log('加载更多')
      },
      goBack(){
        this.$router.go(-1)
      },
      gotoAdd(){
        this.$router.push({
          path:'addmanagers'
        })
      }
    }  
  }
</script>
<style lang="less" scoped>
  .content{
    top:4.26666667rem;
  }
  .manager-search{
    position: relative;
    height:2.13333333rem;
    background-color: #ededed;
    .search-input{
      width: 14.08rem;
    }
  }
  .manager-item{
    height:3.84rem;
    background: none;
    padding: .42666667rem;
    font-size: 0;
    .manager-logo{
      display:inline-block;
      width:2.98666667rem;
      height:2.98666667rem;
      border-radius: 100%;
      border:1px solid #e2dfe9;
    }
    .manager-info{
      display:inline-block;
      font-size:.512rem;
      width:12rem;
      height:2.98666667rem;
      padding-left: .64rem;
      color:#666;
    }
  }
  /* mixin */
</style>