<template>
  <div class="app">
<!--    回到官网-->
    <div class="officialWebsite">
      <img src="../assets/TopNav/回到官网.png" alt="" />
      <a href="#">回到官网</a>
    </div>
<!--    登录-->
    <div class="login">
      <img src="../assets/TopNav/登录.png" alt="" />
      <a href="#">登录</a>
    </div>
<!--    企业中心-->
    <div class="enterpriseCenter">
      <a href="#"> 企业中心</a>
    </div>
<!--    客服-->
    <div class="customerServiceStaff">
      <img src="../assets/TopNav/客服.png" alt="" />
      <a href="#">客服</a>
    </div>
<!--    退出-->
    <div class="logout">
      <a href="#" @click="logout">退出</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="less">
.app {
  background-color: #eeeeee;
  width: 1920px;
  height: 40px;
  .officialWebsite{
    margin-left: 377px;
    margin-top: 5px;
  }
  .login{
    margin-left: 595px;
  }
  .enterpriseCenter{
    margin-left: 40px;
  }
  .customerServiceStaff{
    margin-left: 40px;
  }
  .logout{
    margin-left: 40px;
  }
  div {
    display: inline-block;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
    a {
      color: #2c2c2c;
      text-decoration: none;
      outline: none;
      font-size: 16px;
      vertical-align: middle;
    }
  }
}



</style>
