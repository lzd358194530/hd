<template>
  <div class="datepicker-wrap">
    <div class="datepicker-panel">
      <div class="picker-btn-group">
        <span class="left" @click="cancel">取消</span>
        <span class="right" @click="confirm">确定</span>
      </div> 
      <h1 class="datepicker-title">选择日期</h1>
      <div class="datepicker">
        <mt-picker :slots="dateList" ref="picker" value-key="" @change="onValuesChange" class="picker"  :visible-item-count="3"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script>
  
  
  export default {
    data () {
      return {
        dateList: [
          {
            flex: 1,
            values: [
              '2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027'
            ],
            textAlign: 'center',
            className: 'date-picker'
          },
          {
            divider: true,
            content: '-',
            className: 'date-picker'
          },
          {
            flex: 1,
            values: [
              '1','2','3','4','5','6','7','8','9','10','11','12',
            ],
            textAlign: 'center',
            className: 'date-picker',
          }
        ],
        date:{
          year:2000,
          month:1
        },
      }
    },
    methods: {
      onValuesChange(picker, values) {
        let year,month;
        if(values[0]){
          this.date.year = values[0]
        }
        if(values[1]){
          this.date.month = values[1]
        }
            
      },
      cancel(){
        this.$emit('changeShow')
      },
      confirm(){
        this.$emit('changeShow',this.date)
      },
      initDate(){
        let date = new Date(),
            year = date.getFullYear()+'',
            month = date.getMonth()+1+'';
        this.setDate(year,month)
      },
      setDate(year,month){
        let picker = this.$refs.picker;
        picker.setSlotValue(0,year)
        picker.setSlotValue(1,month)
      }
    },
    mounted(){
      this.initDate()
    }
  }
</script>
<style lang="less">
  .datepicker-wrap{
    width:16rem;
    background-color: #fff;
    .datepicker-title{
      font-size:.8rem;
      text-align:center;
      padding:.42666667rem;
    }
    .date-picker{
      font-size:.72533333rem;
    }
    
  }
</style>