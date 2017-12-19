<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
    </header>
    <div class="content">
      <input type="text" value="省 市 区" @focus="showPicker">
    <city-picker 
      v-model="city" 
      :addressShow="addressShow" 
      @ok="ok" 
      @cancel="addressShow=false"></city-picker>
    </div>
  </div>
</template>
<script>
  import cityPicker from '../../components/citypicker'
  export default{
    data(){
      return {
        city:'',
        addressShow:false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      showPicker(){
        this.addressShow = true;
      },
      ok(){
        
      }
    },
    components:{
      cityPicker
    }
  }
</script>
<style lang="less" scoped>
  
</style>