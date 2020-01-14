<template>
<div class="orderBox">
  <div class="orderPreviewText">
    <span class="orderPreviewTextStyle">订单预览</span>
    <el-button type="text" class="el-button--text">查看全部订单</el-button>
  </div>
  <div class="orderItem" v-for="product in productInfo">
    <img :src="product.src">
    <span class="goodsTitle">{{product.title}}</span>
    <span class="goodsQuantity">{{'*'+product.quantity}}</span>
    <span class="goodsOrigin">{{product.origin}}</span>
    <span class="goodsPrice">{{'￥'+product.price.toFixed(2)}}</span>
    <span class="goodsStatus" :style="{color:product.status=='待收货'?'#FF9914':'#979797'}">{{product.status}}</span>
    <span class="check">查看</span>
  </div>
</div>
</template>

<script>
  import src1 from "../../assets/HomePage/齐心.jpg";
  import src2 from "../../assets/HomePage/MacBook.jpg";
  import src3 from "../../assets/HomePage/惠普.jpg";
    export default {
      name: "OrderPreview",
      data(){
        return{
          productInfo:[
            {
              src:src1,
              title:'齐心 NO.336 纸板夹 A4 1.5寸 35mm 2孔D型夹 （计价单位：个）',
              quantity:1,
              origin:'领先',
              price:13.4,
              status:'待收货'
            },
            {
              src:src2,
              title:'Apple MacBook Air 13.3英寸笔记本电脑MQD32CH/A赠Beats Solo3耳机【教育优惠套装】',
              quantity:1,
              origin:'领先',
              price:5599.0,
              status:'待收货'
            },
            {
              src:src3,
              title:'惠普（HP） LASERJET PRO MFP M128FW 黑白激光一体机 A4幅面 黑白 Wifi版（计价单位：台）',
              quantity:1,
              origin:'领先',
              price:5599.0,
              status:'已完成'
            }
          ]
        }
      }
    }
</script>

<style scoped lang="less">
  .orderBox{
    background-color: #fff;
    width: 990px;
    height: 300px;
    .orderPreviewText{
      width: 990px;
      height: 50px;
      font-size: 16px;
      background-color: white;
      position: relative;
      .orderPreviewTextStyle{
        border-bottom: 3px solid #10C899;
        display: inline-block;
        width: 70px;
        height: 30px;
        margin-left: 20px;
      }
      .el-button--text{
        width: 100px;
        height: 30px;
        margin-top:10px;
        border: 2px #eeeeee solid;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        right: 5px;
        color: #2c2c2c;

      }
    }
    .orderItem{
      width: 990px;
      height: 80px;
      position: relative;
      img{
        width: 80px;
        height: 80px;
        margin-left: 20px;
      }
      .goodsTitle{
        width: 315px;
        height: 40px;
        font-size: 13px;
        display: inline-block;
        margin-left: 16px;
        position: absolute;
        top: 20px;
      }
      .goodsQuantity{
        display: inline-block;
        margin-left: 450px;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 20px;
      }
      .goodsOrigin{
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-left: 520px;
        position: absolute;
        top: 20px;
      }
      .goodsPrice{
        display: inline-block;
        width: 120px;
        height: 40px;
        margin-left: 600px;
        position: absolute;
        top: 20px;
        color: #FE5E41;
      }
      .goodsStatus{
        width: 80px;
        height: 40px;
        margin-left: 720px;
        position: absolute;
        top: 20px;
      }
      .check{
        display: inline-block;
        width: 40px;
        height: 40px;
        color: #2c2c2c;
        margin-left: 840px;
        position: absolute;
        top: 20px;
        cursor: pointer;
      }

    }
}
</style>
