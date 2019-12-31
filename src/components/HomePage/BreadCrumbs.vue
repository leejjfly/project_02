<template>
  <div class="breadBox">
    <el-breadcrumb separator=">" class="el-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/homepage' }">企业中心</el-breadcrumb-item>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
    export default {
        name: "BreadCrumbs",
      data(){
          return{
            menu:[
              {firstMenu:''},
              {secondMenu:''}
            ]
          }
      }
    }
</script>

<style scoped lang="less">
  /*div{*/
  /*  width: 1920px;*/
  /*  background-color: #eeeeee;*/
  /*  span{*/
  /*    font-size: 14px;*/
  /*    display: inline-block;*/
  /*    margin-top: 20px;*/
  /*    margin-bottom: 20px;*/
  /*    margin-left: 376px;*/
  /*  }*/
  /*}*/
  .breadBox{
    background-color: #eeeeee;
    width: 1920px;
    height: 30px;
    position: relative;
    .el-breadcrumb{
      width: 160px;
      height: 30px;
      position: absolute;
      margin-left: 376px;
      font-size: 16px;
      margin-top: 10px;
    }
  }


</style>
