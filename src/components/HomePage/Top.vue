<template>
  <div class="app">
    <img src="../../assets/HomePage/伊利.png" class="yili" alt="">
    <span class="yl" >中国伊利集团企业采购专柜</span>
    <img src="../../assets/HomePage/中秋.png" class="mid-aut" alt="">
    <div class="s-c">
      <img src="../../assets/HomePage/购物车.png" class="shop-cart" alt="">
      <span >购物车</span>
      <div><span class="num">3</span></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped lang="less">
.app{
  height: 80px;
  width: 1920px;
  /*display: inline-block;*/
  .yili{
    width: 60px;
    height: 60px;
    margin-left: 376px;
    margin-top: 10px;
  }
  .yl{
    font-size: 14px;
    width: 84px;
    display: inline-block;
    position: relative;
    top: -20%;
    margin-left: 21px;
  }
  .mid-aut{
    height: 60px;
    width: 760px;
    display: inline;
    margin-top: 10px;
    margin-left: 78px;
  }
  .s-c{
    background-color: #10C899;
    width: 116px;
    height: 36px;
    position: relative;
    top: -23%;
    margin-left: 40px;
    cursor: pointer;
    border-radius: 3px;
    .shop-cart{
      width: 20px;
      height: 20px;
      margin-top: 8px;
      margin-left: 8px;
    }
    span{
      font-size: 14px;
      display: inline-block;
      position: relative;
      top: -10%;
      margin-left: 5px;
      color: #2c2c2c;
    }
    div{
      width: 15px;
      height: 15px;
      border-radius: 7.5px;
      background-color: rgba(44,44,44,0.8);
      margin-left: 5px;
      .num{
        position: relative;
        top: -35%;
        color: white;
        font-size: 12px;

      }
    }
  }
}
  div,img{
    display: inline-block;
  }

</style>
