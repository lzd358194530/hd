<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      {{date}}销售详情
      <i class="icon-date" @click="openPicker"></i>
    </header>
    <div class="navbar">
      <div :class="['nav-item',{'active':sortType==1||sortType==2}]" @click="onSort" id="count">销售额 <i></i></div>
      <div :class="['nav-item',{'active':sortType==3||sortType==4}]" @click="onSort" id="total">销售量 <i></i></div>
      <i class="icon-search2"></i>
    </div>
    <div class="content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <li class="item border" v-for="(item,index) in list" :key="index">
          <p class="name">商品名称：{{item.name}}</p>
          <p>价格：￥{{item.price}}</p>
          <p>
            <span>销售量：{{item.sales}}件</span> 
            <span class="right">合计：￥{{item.total}}</span>
          </p>
        </li>
      </ul>
    </div>
    <mt-popup v-model="showPopup" position="bottom">
      <datePicker @changeShow = "openPicker"></datePicker>
    </mt-popup>
  </div>
</template>
<script>
  import datePicker from '../../components/datepicker' 
  export default{
    data(){
      return {
        date:'2017-01',
        loading:false,
        list:[],
        year:'',
        month:'',
        showPopup:false,
        //排序类型 1 销售额大到小 2 销量小到大 3 销量大到小 4 销量小到大
        sortType:1,
      }
    },
    components:{
      datePicker
    },
    created(){
      this.setData()
      this.setDate()
    },
    methods:{
      openPicker(date) {
        this.showPopup = !this.showPopup
        if(date){
          let {year,month} = date;
          if(year&&month){
            this.date = year+'-'+month
          }
        }
      },
      onSort(e){
        let id = e.target.id,
            sortType= this.sortType;
        if(id=='count'){
          if(sortType==1){
            this.sortType = 2
          }else{
            this.sortType = 1
          }
        }else{
          if(sortType==3){
            this.sortType = 4
          }else{
            this.sortType = 3
          }
        }
        this.sortList()
      },
      // 排序
      sortList(){
        const sortFn={
          sort1 : (a,b)=> b.total-a.total,
          sort2 : (a,b)=> a.total-b.total,
          sort3 : (a,b)=> b.sales-a.sales,
          sort4 : (a,b)=> a.sales-b.sales
        }
        this.list = this.list.sort(sortFn['sort'+this.sortType]);
      },
      setDate(){
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth()+1;
        this.date = year+'-'+month
      },
      goBack(){
        this.$router.go(-1)
      },
      loadMore(){
        console.log('加载更多')
      },
      // 绑定数据
      setData(){
        this.list = this.getData().concat([]);
        this.sortList()
      },
      // 获取数据
      getData(){
        let list = [
          {
            id:'012',
            name:'乐事薯片（青柠味）',
            price:'8.50',
            sales:'10',
            total:'4.50'
          },{
            id:'012',
            name:'乐事薯片（青柠味）',
            price:'8.50',
            sales:'20',
            total:'500.50'
          },{
            id:'012',
            name:'乐事薯片（青柠味）',
            price:'8.50',
            sales:'30',
            total:'30.50'
          },{
            id:'012',
            name:'乐事薯片（青柠味）',
            price:'8.50',
            sales:'40',
            total:'200.50'
          },{
            id:'012',
            name:'乐事薯片（青柠味）',
            price:'8.50',
            sales:'50',
            total:'100.50'
          }
        ];
        return list
      }
    }
  }
</script>
<style lang="less" scoped>
  .content{
    top:4.26666667rem;
    font-size:.59733333rem;
  }
  .navbar{
    position: relative;
    height:2.13333333rem;
    background-color: #ebebeb;
    font-size:.59733333rem;
    .nav-item{
      height:100%;
      width: 5.54666667rem/* 260px */;
      float:left;
      line-height:2.13333333rem;
      text-align: center;
      i{
        display:inline-block;
        width:.40533333rem;
        height:.448rem;
        background-image: url(./images/arrow-btn.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .nav-item:active{
      background-color: #ccc;
    }
    .active{
      background-color: #ddd;
    }
  }
  .item{
    padding: .64rem;
    background-color: #fff;
    line-height:1.03rem;
    font-size: .55466667rem;
    .name{
      font-weight:600;
      color: #3e3e3e
    }
  }
</style>