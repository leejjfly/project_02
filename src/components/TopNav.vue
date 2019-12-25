<template>
  <el-container>
    <el-header class="header">
      <div>
        <img src="../assets/TopNav/回到官网.png" alt="" />
        <a href="#">回到官网</a>
      </div>
      <div>
        <span>
          <img src="../assets/TopNav/登录.png" alt="" />
          <a href="#">登录</a>
        </span>
        <span>
          <a href="#"> 企业中心</a>
        </span>
        <span>
          <img src="../assets/TopNav/客服.png" alt="" />
          <a href="#">客服</a>
        </span>
        <span>
          <a href="#" @click="logout">退出</a>
        </span>
      </div>
    </el-header>
  </el-container>
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

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
  }
  div{
    height: 20px;
    margin: auto;
  }
  a {
    color: #2c2c2c;
    text-decoration: none;
    outline: none;
    font-size: 16px;
    vertical-align: middle;
  }
  img {
    width: 20px;
    height: 20px;
    vertical-align:middle ;
  }
</style>
