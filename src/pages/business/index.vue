<template>
  <div>
    <header>
      <i class="back" @click="goBack"></i>
      <label class="search-input">
        <input type="text" />
      </label>
      <i class="search"></i>
    </header>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="item" v-for="(item,index) in list" :key="index">
          <i class="star" v-if="item.star"></i>
          <img :src="item.pic" class="business-pic">
          <div class="business-info">
            <p>ID：{{item.id}}</p>
            <p>类别：{{item.type}}</p>
            <p>店铺数量：{{item.shopCount}}  销售量：{{item.sales}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui';
  export default{
    data(){
      return {
        loading:false,
        list:[],
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      loadMore() {
        this.loading = true;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        setTimeout(() => {
          this.setData()
          this.loading = false;
          Indicator.close();
        }, 2000);
      },
      setData(){
        let list = [
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:true
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:false
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:false
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:false
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:true
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:true
          },
          {
            id:'SJ-GZ-HD010',
            pic:require('../../util/images/_business-bg.png'),
            type:'商家',
            shopCount:'101',
            sales:'145012',
            star:true
          }
        ];
        this.list = this.list.concat(list)
      }
    },
    created(){
      this.setData();
    }
  }
</script>
<style lang="less" scoped>
  .item{
    position: relative;
    padding:.5rem .85333333rem;
    height:4.26666667rem;
    background-color: #fff;
    font-size:.59733333rem;
    color:#666;
    &::after{
      content:"";
      position:absolute;
      display:block;
      left:0;
      bottom:0;
      width:100%;
      border-top:1px solid #e5e5e5;
      transform:scaleY(.5)
    }
    .star{
      display:block;
      position:absolute;
      top:0;
      right:.85333333rem;
      width:1.45066667rem;
      height:1.64266667rem;
      background-image: url(../../util/images/_business-star.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    .business-pic{
      display:inline-block;
      width:3.2rem;
      height:3.2rem;
      border-radius: .42666667rem;
      box-shadow: 0 0 1px #666
    }
    .business-info{
      display:inline-block;
      width:10.88rem;
      height:3.2rem;
      overflow:hidden;
      padding-left: .42666667rem; 
      line-height:1.06rem;
      p{
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>