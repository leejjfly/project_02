<template>
  <div class="shoppingCartBox">
    <TopNav></TopNav>
    <div class="icon">
      <img src="../assets/HomePage/伊利.png" class="yili" alt="">
      <span class="yl" >中国伊利集团企业采购专柜</span>
      <router-link to="/">
        <div class="button">
          <span class="buttonText">返回继续购物</span>
        </div>
      </router-link>
    </div>
    <div class="shoppingCart">

    </div>
  </div>


</template>

<script>
  import TopNav from "./TopNav";
  export default {
    name: "ShoppingCart",
    data(){
      return{

      }
    },
    components:{
      TopNav
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
 .shoppingCartBox{
   width: 1920px;
   height: 1048px;
   .icon{
     width: 1920px;
     height: 80px;
     position: relative;
     .yili{
       width: 60px;
       height: 60px;
       margin-left: 376px;
       margin-top: 10px;
     }
     .yl{
       font-size: 14px;
       width: 84px;
       height: 40px;
       display: inline-block;
       position: absolute;
       top: 20px;
       margin-left: 21px;
     }
     .button{
       width:90px;
       height: 30px;
       border: 1px #eee solid;
       border-radius: 3px;
       position: absolute;
       top: 25px;
       right: 378px;
       .buttonText{
         font-size: 14px;
         color: #2c2c2c;
       }
     }
   }
   .shoppingCart{
     width: 1170px;
     height: 560px;
     background-color: #10c899;
     margin: 0 auto;
   }

 }
</style>
