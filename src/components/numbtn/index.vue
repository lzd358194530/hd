<template>
  <div class="num-btn-wraper"> 
    <div class="num-btn" @click="decrease"><span></span></div>
    <input type="text" v-model="value" class="num-btn-input" :disabled="disabled" @input="change">
    <div class="num-btn" @click="increase"><span></span><span></span></div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        value:0
      }
    },
    props:{
      max:{
        type:Number,
        default:999
      },
      min:{
        type:Number,
        default:0
      },
      disabled:{
        type:Boolean,
        default:false
      },
      default:{
        type:[Number,String],
        default:0
      },
      step:{
        type:Number,
        default:10
      },
      shopId:{
        type:Number,
        default:-1
      },
      goodId:{
        type:Number,
        default:-1
      }
    },
    created(){
      this.value = this.default;
    },
    methods:{
      change(){
        let num = this.value;
        let str = num+'';
        this.value = (str>0)?str.replace(/^0+|[^\d]/g,''):0;
        if(num>=this.max){
          this.value = this.max;
        }
        // else if(num<this.min){
        //   this.value = this.min;
        // }
        let {value,shopId,goodId}=this;
        this.$emit('change',value,shopId,goodId);
      },
      increase(){
        this.value=+this.value+this.step;
        this.change();
      },
      decrease(){
        this.value=+this.value-this.step;
        this.change();
      }
    }
  }
</script>
<style lang="less" scoped>
  .num-btn-wraper{
    font-size:0;
  }
  .num-btn{
    position:relative;
    display:inline-block;
    vertical-align: top;
    width: 27%;
    height:100%;
    &:active{
      background-color: #f2a22f;
    }
    span{
      position:absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
      display:inline-block;
      width:.64rem;
      height:2px;
      background-color: #fff;
      &:nth-child(2){
        transform:rotate(90deg)
      }
    }
  }
  .num-btn-input{
    display:inline-block;
    vertical-align: top;
    background-color: #fff;
    width:46%;
    height:100%;
    text-align: center;
    font-size:.512rem;
  }
</style>