<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      银行卡<span class="header-btn" v-if="hasCard" @click="editCard">编辑</span>
    </header>
    <div class="content">
      <img src="../../util/images/addcard.png" v-if="!hasCard" class="card" @click="addCard">
      <div class="card-wrap" v-else>
        <img :src="cardInfo.pic" class="card">
      </div>
    </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        actions:[
          {
            name:'更改银行卡',
            method:()=>{
              this.$router.push({
                path:'changebankcard'
              })
            }
          },
          {
            name:'解除绑定',
            method:()=>{
              this.$router.push({
                path:'changebankcard'
              })
            }
          }
        ],
        hasCard:true,
        sheetVisible:false,
        cardInfo:{
          pic:require('../../util/images/card.png')
        },
      }
    },
    methods:{
      setData(){

      },
      getData(){

      },
      goBack(){
        this.$router.go(-1)
      },
      editCard(){
        this.sheetVisible = true
      },
      addCard(){
        this.$router.push({
          path:'addbankcard'
        })
      }
    }
  }
</script>
<style lang="less" scoped>
.card-wrap{
  background-color: #fff;
  padding: 1px;
}
  .card{
    display:block;
    border-radius:.68266667rem;
    margin:.96rem auto;
    width: 15.21066667rem;
    height:5.41866667rem;
  }
</style>