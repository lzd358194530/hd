<template>
    <div class="pie" >
        <canvas ref="can" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        props:{
          num:Number
        },
        mounted(){
          let can = this.$refs.can;
          this.drawPie(can,this.num)
        },
        methods:{
          drawPie(can,rotate){
            let ctx = can.getContext("2d");
            ctx.lineWidth=8;
            ctx.beginPath();
            ctx.strokeStyle="#ff655d"
            ctx.arc(99,99,96,0,rotate*2*Math.PI);
            ctx.stroke();
          }
        }
    }
</script>
<style lang="less" scoped>
    .pie{
      width:100%;
      height:100%;
      canvas{
        width:100%;
        height:100%;
      }
    }
</style>