<template>
  <div class="bg">
    <div class="app">
      <div class="tx">
        <img class="txtp" src="../../assets/index/领先未来.png" alt="用户头像">
        <span>lxwl123</span>
      </div>
      <div class="first div">
        <div class="up">
          <img class="icon" src="../../assets/index/地址.png" alt="">
          <span>绑定地址</span>
          <span class="num" >3</span>
          <span>查看</span>
        </div>
        <div class="down">
          <img class="icon" src="../../assets/index/收藏.png" alt="">
          <span>收藏商品</span>
          <span class="num" >3</span>
          <span>查看</span>
        </div>
      </div>
      <div class="second div">
        <div class="up">
          <img class="icon" src="../../assets/index/月.png" alt="">
          <span>月预算:</span>
          <span>无</span>
        </div>
        <div class="down">
          <img class="icon" src="../../assets/index/钱.png" alt="">
          <span>已消费:</span>
          <span class="num" >￥8026元</span>
        </div>
      </div>
      <div class="third div">
        <div class="up">
          <img class="icon" src="../../assets/index/季.png" alt="">
          <span>季预算:</span>
          <span>无</span>
        </div>
        <div class="down">
          <img class="icon" src="../../assets/index/钱.png" alt="">
          <span>已消费:</span>
          <span class="num" >￥80260元</span>
        </div>
      </div>
      <div class="fourth div">
        <div class="up">
          <img class="icon" src="../../assets/index/年.png" alt="">
          <span>年预算:</span>
          <span>无</span>
        </div>
        <div class="down">
          <img class="icon" src="../../assets/index/钱.png" alt="">
          <span>已消费:</span>
          <span class="num" >￥908026元</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "PersonalInfo",
        data(){
          return {
            data:[{

            },{

            }]
          }
        }
    }
</script>

<style scoped lang="less">
  .bg{
    width: 1920px;
    height: 1040px;
    background-color: #eeeeee;
    .app{
      width: 990px;
      height: 124px;
      background-color: #fff;
      vertical-align: middle;
      /*margin-left: 557px;*/
      /*position: relative;*/
      /*top: 134px;*/
      .tx{
        width: 80px;
        height: 80px;
        .txtp{
          width: 60px;
          height: 60px;
          border-radius: 30px;
          margin-left: 40px;
          margin-top: 20px;
        }
        span{
          margin-left: 46px;
        }
      }
      .first{

      }
      .div{
        width: 200px;
        height: 80px;
        position: relative;
        top: -15%;
        left: 5%;
        .down{
         margin-top: 5px;
        }
      }
      div{
        display: inline-block;
      }

    }
  }

  .icon{
    width: 20px;
    height: 20px;
    position: relative;
    top: 50%;
  }
  .num{
    color: #FE5E41;
  }
</style>
