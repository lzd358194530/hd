<template>
  <div>
    <header class="title">
      消息<span class="header-btn" @click="deleteAll">一键删除</span>
    </header>
    <div class="switch-bar" :class="{active:selected == 1}">
      <div class="mask"></div>
      <span @click="()=>selected=0" :class="{active:selected ==0}">通知</span>
      <span @click="()=>selected=1" :class="{active:selected ==1}">警示</span>
    </div>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="0">
        <li v-for="(item,index) in list" :key="index" class="border">
          <msgItem :data="item" :data-idx="index"></msgItem>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Indicator,MessageBox} from 'mint-ui'
  import msgItem from './msgitem'
  export default{
    data(){
      return {
        loading:false,
        selected:0,
        list:[],
      }
    },
    methods:{
      deleteAll(){
        MessageBox({
          title: '提示',
          message: '确定要删除全部吗?',
          showCancelButton: true
        })
        .then(
          res=>{console.log(res)},
          req=>{console.log(req)}
        )
      },
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
            id:'01',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'02',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'03',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'04',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'05',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'06',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          },{
            id:'07',
            pic:require('../../util/images/msg.jpg'),
            text:'通知通知通知通知通知通知通知通知通知通知通知通知',
            time:'2017-09-12 20:30'
          }
        ];
        this.list = list.concat([]);
      }
    },
    components:{
      msgItem:()=>import('./msgitem')
    }
  }
</script>
<style lang="less" scoped>

  .content{
    top:5.12rem;
    bottom:2.34666667rem;
  }
</style>