<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      更改银行卡
    </header>
    <div class="content">
      <div class="form-title">银行卡信息</div>
      <div class="input-group border">
        <span class="input-title">持卡人姓名</span>
        <input type="text" class="input right" :value="name" disabled>
      </div>
      <div class="input-group border">
        <span class="input-title">银行卡号</span>
        <input type="text" class="input right" :value="cardNum" disabled>
      </div>
      <div class="input-group border">
        <span class="input-title">卡类型</span>
        <input type="text" class="input right" :value="cardType" disabled>
      </div>
      <div class="input-group border">
        <span class="input-title">手机号</span>
        <input type="text" class="input right" v-model="mobile" maxlength="18" placeholder="请输入银行预留手机号">
      </div>
      <div class="btn" @click="onSubmit">下一步</div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  export default{
    name:'nokeep',
    data(){
      return {
        name:'孙悟空',
        num:'4512525461313251213',
        cardType:'中国银行 储蓄卡',
        mobile:''
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      onSubmit(){
        let mobile = this.mobile.trim();
        if(mobile==''){
          Toast({
            message: '请输入手机号码',
            duration:1000,
          });
          return
        }
        if(/^1[3578]\d{9}$/.test(mobile)){
          console.log('正确')
        }else{
          Toast({
            message: '手机号码不正确',
            duration:1000,
          });
          return
        }
      },
      cardnum(num){
        return num.replace(/\s/g, '').replace(/(.{4})/g, "$1 ").replace(/\s$/g, '')
      },
      passNum(num){
        let arr = num.split(' '),len = arr.length,tempArr = [];
        arr.forEach((item,index)=>{
          if(index!=0&&index!=len-1){
            item = item.replace(/./g,'*')
          }
          tempArr.push(item)
        })
        return tempArr.join(' ')
      }
    },
    computed:{
      cardNum(){
        let num = this.cardnum(this.num);
        return this.passNum(num);
      }
    }
  }

</script>
<style lang="less" scoped>
  .input-title{
    color:#333
  }
  .btn{
    margin: 1.06666667rem auto;
  }
</style>