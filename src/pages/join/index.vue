<template>
  <div>
    <header class="title">
      <i class="back" @click="goBack"></i>
      申报加盟
    </header>
    <div class="content">
      <div class="input-group border">
        <span class="input-title left">商家名称</span>
        <input type="text" placeholder="请输入商家名称"
          v-model.trim="name" maxlength="11" class="right input" />
      </div>
      <div class="input-group border">
        <span class="input-title left">手机号码</span>
        <input type="text" placeholder="手机号作为登陆账号"
          v-model.trim="phone" maxlength="11" class="right input"/>
      </div>
      <div class="input-group border">
        <span class="input-title left">身份证号</span>
        <input type="text" placeholder="请输入身份证号"
          v-model.trim="cardID" maxlength="18" class="right input" />
      </div>
      <div class="input-group border">
        <span class="input-title left">加盟区域</span>
        <input type="text" placeholder="请输入加盟区域"
          v-model.trim="area" class="right input" disabled />
      </div>
      <div class="input-group border">
        <span class="input-title left">详细地址</span>
        <input type="text" placeholder="请输入加盟详细地址"
          v-model.trim="address" maxlength="30" class="right input" />
      </div>
      <div class="input-group border">
        <span class="input-title left">超市规模</span>
        <div class="right" @click="openPicker">
          <input type="text" :placeholder="sizelist.default"
            v-model.trim="size" class="input" disabled id="size"/>
        </div>
      </div>
      <div class="input-group border">
        <span class="input-title left">管理类型</span>
        <div class="right" @click="openPicker">
          <input type="text" :placeholder="managerlist.default"
            v-model.trim="manager" class="input" disabled id="manager"/>
        </div>
      </div>
      <div class="btn btn-bottom" @click="onSubmit">提交申请</div>
    </div>
    <mt-popup v-model="showPopup" position="bottom">
      <div class="picker-btn-group" v-show="list.length">
        <span class="left" @click="cancel">取消</span>
        <span class="right" @click="confirm">确定</span>
      </div> 
      <mt-picker :slots="list" ref="picker" class="picker" :visibleItemCount="5"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import {checkPhoneNumber} from '../../util/js/tools.js';
  import { Toast } from 'mint-ui';
  export default{
    name:'nokeep',
    data(){
      return {
        showPopup:false,
        name:'',
        phone:'',
        cardID:'',
        area:'广州市花都区',
        address:'',
        size:'',
        manager:'',
        list:[],
        sizelist:{
          default:'请选择超市规模',
          list:[
            {
              flex:1,
              values:[
                '超市规模1',
                '超市规模2',
                '超市规模3',
                '超市规模4',
                '超市规模5',
                '超市规模6'
              ],
              textAlign: 'center',
              className: 'date-picker'
            }
          ]
        },
        managerlist:{
          default:'请选择管理类型',
          list:[
            {
              flex:1,
              values:[
                '管理类型1',
                '管理类型2',
                '管理类型3',
                '管理类型4',
                '管理类型5',
                '管理类型6'
                ],
              textAlign: 'center',
              className: 'date-picker'
            }
          ]
        },
        type:''
      }
    },
    watch:{
      phone(num){
        let str = num+'';
        this.phone = str.replace(/[^\d]/ig,'');
      }
    },
    methods:{
      cancel(){
        this.showPopup = false
      },
      confirm(){
        this.showPopup = false;
        let value = this.$refs.picker.getValues()[0];
        this[this.type]=value
      },
      openPicker(e) {
        this.showPopup = !this.showPopup
        let id = e.target.id;
        this.type = id;
        this.list = this[id+'list'].list;
        let val = this[id]||this.list[0].values[1];
        let timer =setTimeout(()=>{
          clearTimeout(timer);
          this.$refs.picker.setSlotValue(0, val)
        }, 0);
      },
      goBack(){
        this.$router.go(-1)
      },
      onSubmit(){
        let {name,phone,cardID,area,address,size,manager} = this;
        if(name==''){
          Toast({message: '请输入商家名称'});return
        }
        if(phone==''){
          Toast({message: '请输入手机号码'});return
        }
        if(!checkPhoneNumber(phone)){
          Toast({message: '手机号码格式不正确'});return
        }
        if(cardID==''){
          Toast({message: '请输入身份证号码'});return
        }
        if(address==''){
          Toast({message: '请输入详细地址'});return
        }
        if(size==''){
          Toast({message: '请选择超市规模'});return
        }
        if(manager==''){
          Toast({message: '请选择管理类型'});return
        }
        let instance = Toast({
          message: '提交成功',
          iconClass: 'icon icon-success'
        });
        setTimeout(() => {
          instance.close();
          this.$router.replace({
            path:'/'
          })
        }, 2000);
      }
    }
  }
</script>
<style lang="less">
  
</style>