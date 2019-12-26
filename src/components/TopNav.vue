<template>
  <div class="app">
    <div class="gw">
      <img src="../assets/TopNav/回到官网.png" alt="" />
      <a href="#">回到官网</a>
    </div>
    <div class="dl">
      <img src="../assets/TopNav/登录.png" alt="" />
      <a href="#">登录</a>
    </div>
    <div class="qyzx">
      <a href="#"> 企业中心</a>
    </div>
    <div class="kf">
      <img src="../assets/TopNav/客服.png" alt="" />
      <a href="#">客服</a>
    </div>
    <div class="tch">
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
  .gw{
    margin-left: 377px;
    margin-top: 5px;
  }
  .dl{
    margin-left: 595px;
  }
  .qyzx{
    margin-left: 40px;
  }
  .kf{
    margin-left: 40px;
  }
  .tch{
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
