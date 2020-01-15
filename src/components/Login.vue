<template>
  <div class="loginContainer">
    <div class="loginBox">
      <!--左边的图片-->
      <div class="left">
        <img src="../assets/Login/登录_01.jpg" alt="" />
      </div>
      <!--右边的表单-->
      <div class="right">
        <div class="form">
          <el-form
            :model="loginForm"
            ref="loginFormRef"
            :rules="loginFormRules"
          >
            <p>欢&nbsp;迎&nbsp;登&nbsp;录</p>
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                class="el-input"
                placeholder="用户名"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                class="el-input"
                type="password"
                placeholder="密码"
              />
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" @click="login" type="success" round
                >登录</el-button
              >
            </el-form-item>
            <div>
              <a href="#" class="reg">注册</a>
              <a href="#" class="forget">&nbsp;忘记密码</a>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      //这是登录表单的用户名跟密码
      loginForm: {
        username: '',
        password: ''
      },
      //这是表单的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 20, message: "长度在6到20个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['setUserName']),
    //表单数据验证
    login() {
      // this.$refs.loginFormRef.validate(async valid => {
      //   //如valid为假 则返回
      //   if (!valid) return;
      //   const { data: res } = this.$http.post("login", await this.loginForm);
      //   if (res.meta.status !== 200) return this.$message.error("登陆失败");
      //   this.$message.success("登陆成功");
      //   //1.登录成功的token保存到客户端的sessionStorage中
      //   //  1.1项目中除了登录之外的API接口，必须在登录后才能访问
      //   //  1.2token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
      //   window.sessionStorage.setItem("token", res.data.token);
      //   //2.通过编程式导航跳转到后台主页，路由地址是/home
      //   this.$router.push("/topnav");
      // });
      if(!this.loginForm.username){
        this.$message.error("请输入用户名");
      }else{
        if(this.loginForm.username!='lxwl123'){
          this.$message.error("用户名不存在");
        }else{
          if(!this.loginForm.password){
            this.$message.error("密码不能为空");
          }else{
            if(this.loginForm.password!='123456'){
              this.$message.error("密码不正确");
            }else {
              window.sessionStorage.setItem("username",this.loginForm.username);
              this.$message.success("登录成功");
              this.$router.push('/homepage');
            }
          }
        }
      }
    //   if(this.loginForm.username=='lxwl123'&&this.loginForm.password=='123456'){
    //     window.sessionStorage.setItem("username",this.loginForm.username);
    //     this.$message.success("登录成功");
    //     this.$router.push('/homepage');
    //   }else{
    //     this.$message.error("登录失败");
    //   }
    }
  }
};
</script>

<style scoped lang="less">
.loginContainer {
  background-color: #f6f6f6;
  height: 1080px;
  width: 1920px;
  /*position: relative;*/
}
.loginBox {
  height: 500px;
  width: 900px;
  position: relative;
  top: 82px;
  /*position: absolute;*/
  /*left: 50%;*/
  /*top: 50%;*/
  /*transform: translate(-50%, -50%);*/
  margin-left: 524px;
  .left {
    display: inline;
    width: 387px;
    height: 500px;
    img{
      width: 387px;
      height: 500px;
    }
  }
  .right {
    position: relative;
    width: 500px;
    height: 500px;
    /*外层阴影*/
    box-shadow: 2px 2px 5px #339999;
    display: inline-block;
    .form {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      p {
        margin-top: 80px;
        color: #339999;
        text-align: center;
        font-family: "Microsoft YaHei";
      }
      .el-input {
        width: 300px;
        margin-top: 30px;
      }
      .el-button {
        width: 300px;
        height: 40px;
        background-color: #339999;
        margin-top: 30px;
      }
      a {
        text-decoration: none;
        outline: none;
        color: #339999;
      }
      .reg {
        margin-right: 80px;
      }
      .forget {
        margin-left: 105px;
      }
    }
  }
}














</style>
