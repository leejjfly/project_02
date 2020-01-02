<template>
  <div class="app">
    <div class="tx">
      <img
        class="txtp"
        :src="personalInfo.src1"
        alt="用户头像"
      />
      <span>lxwl123</span>
    </div>
    <div class="first div">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/地址.png" alt="" />
        <span>绑定地址</span>
        <span class="num">{{personalInfo.bindingAddressNum}}</span>
        <el-button type="text" class="el-button--text">查看</el-button>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/收藏.png" alt="" />
        <span>收藏商品</span>
        <span class="num">{{personalInfo.favoriteProduct}}</span>
        <el-button type="text" class="el-button--text">查看</el-button>
      </div>
    </div>
    <div class="second div">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/月.png" alt="" />
        <span>月预算:</span>
        <span>{{personalInfo.monthlyBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">￥{{personalInfo.monthlyConsumed}}元</span>
      </div>
    </div>
    <div class="third div">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/季.png" alt="" />
        <span>季预算:</span>
        <span>{{personalInfo.quarterBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">￥{{personalInfo.quarterConsumed}}元</span>
      </div>
    </div>
    <div class="fourth div">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/年.png" alt="" />
        <span>年预算:</span>
        <span>{{personalInfo.yearBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">￥{{personalInfo.yearConsumed}}元</span>
      </div>
    </div>
  </div>
</template>

<script>
  import userAvatar from "../../assets/HomePage/领先未来.png";
  export default {
    name: "PersonalInfo",
    data() {
      return {
        personalInfo: {
          src1:userAvatar,
            bindingAddressNum:'3',
            favoriteProduct:'3',
            monthlyBudget:'无',
            monthlyConsumed:'8026',
            quarterBudget:'无',
            quarterConsumed:'80260',
            yearBudget:'无',
            yearConsumed:'908026'
          }

      };
    }
  };
</script>

<style scoped lang="less">
.app {
  width: 990px;
  height: 124px;
  background-color: #fff;
  vertical-align: middle;
  /*margin-left: 557px;*/
  /*position: relative;*/
  /*top: 134px;*/
  .tx {
    width: 80px;
    height: 80px;
    .txtp {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin-left: 40px;
      margin-top: 20px;
    }
    span {
      margin-left: 46px;
    }
  }
  .first {

  }
  .div {
    width: 200px;
    height: 80px;
    position: relative;
    top: -15%;
    left: 5%;
    .el-button--text{
      color: #2c2c2c;
    }
    .down {
      margin-top: 5px;
    }
  }
  div {
    display: inline-block;
  }
}

.icon {
  width: 20px;
  height: 20px;
  position: relative;
  top: 50%;
}
.num {
  color: #fe5e41;
}
</style>
