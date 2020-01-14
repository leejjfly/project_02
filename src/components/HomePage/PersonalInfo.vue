<template>
  <div class="personalInfoBox">
    <div class="userInfo">
      <img
        class="userAvatar"
        :src="personalInfo.src"
        alt="用户头像"
      />
      <span>{{username}}</span>
    </div>
    <div class="personalInfo">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/地址.png" alt="" />
        <span>绑定地址</span>
        <span class="num">{{personalInfo.bindingAddressNum}}</span>
        <span class="check">查看 </span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/收藏.png" alt="" />
        <span>收藏商品</span>
        <span class="num">{{personalInfo.favoriteProduct}}</span>
       <span class="check">查看 </span>
      </div>
    </div>
    <div class="personalInfo">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/月.png" alt="" />
        <span>月预算:</span>
        <span>{{personalInfo.monthlyBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">{{'￥'+personalInfo.monthlyConsumed}}元</span>
      </div>
    </div>
    <div class="personalInfo">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/季.png" alt="" />
        <span>季预算:</span>
        <span>{{personalInfo.quarterBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">{{'￥'+personalInfo.quarterConsumed}}元</span>
      </div>
    </div>
    <div class="personalInfo">
      <div class="up">
        <img class="icon" src="../../assets/HomePage/年.png" alt="" />
        <span>年预算:</span>
        <span>{{personalInfo.yearBudget}}</span>
      </div>
      <div class="down">
        <img class="icon" src="../../assets/HomePage/钱.png" alt="" />
        <span>已消费:</span>
        <span class="num">{{'￥'+personalInfo.yearConsumed}}元</span>
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
          src:userAvatar,
          bindingAddressNum:'3',
          favoriteProduct:'3',
          monthlyBudget:'无',
          monthlyConsumed:'8026',
          quarterBudget:'无',
          quarterConsumed:'80260',
          yearBudget:'无',
          yearConsumed:'908026'
        },
        username:null,

      };
    },
    created() {
      this.username=sessionStorage.getItem('username');
    }
  };
</script>

<style scoped lang="less">
.personalInfoBox {
  width: 990px;
  height: 124px;
  background-color: #fff;
  vertical-align: middle;
  .userInfo {
    width: 80px;
    height: 80px;
    display: inline-block;
    .userAvatar {
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
  .personalInfo {
    width: 200px;
    height: 80px;
    position: relative;
    top: -15%;
    left: 5%;
    display: inline-block;
    .check{
      color: #2c2c2c;
      cursor: pointer;
      margin-left: 20px;
    }
    .down {
      margin-top: 5px;
    }
  }
}

.icon {
  width: 20px;
  height: 20px;
  position: relative;
}
.num {
  color: #fe5e41;
}
</style>
