<template>
<div class="accountBox">
 <div class="accountManage"><span class="accountManageTitle">账号管理</span></div>
  <div class="accountManageSearch">
    <span class="accountManageSearchText">账号搜索:</span>
    <el-input class="el-input"
      placeholder="请输入姓名或手机号"
      v-model="searchText"
      clearable>
    </el-input>
    <div class="accountManageSearchButton">
      <span class="accountManageSearchButtonText">搜索</span>
      <img src="../../assets/HomePage/search.png" class="img">
    </div>
    <el-switch
      v-model="value1"
      active-color="#10C899"
      inactive-color="#eee">
    </el-switch>
    <span class="banOrNot">是否显示禁用账号</span>
    <div class="addButton">
      <span class="addButtonText">添加+</span>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>

</div>
</template>

<script>
    export default {
        name: "AccountManage",
      data(){
          return{
            value1:''
          }
      }
    }
</script>

<style scoped lang="less">
  .accountBox{
    width: 990px;
    height: 728px;
    background-color: #eeeeee;
    .accountManage{
      width: 990px;
      height: 50px;
      .accountManageTitle{
        display: inline-block;
        width: 70px;
        height: 30px;
        margin-left: 20px;
        font-size: 16px;
        border-bottom: 3px solid #10C899;
      }

    }
    .accountManageSearch{
      width: 990px;
      height: 55px;
      .accountManageSearchText{
        font-size: 14px;
        display: inline-block;
        margin-left: 20px;
      }
      .el-input{
        width: 200px;
        height: 35px;
      }
      .accountManageSearchButton{
        width: 70px;
        height: 35px;
        background-color: #10C899;
        display: inline-block;
        margin-left: 20px;
        position: relative;
        border-radius: 3px;
        .accountManageSearchButtonText{
          font-size: 14px;
          color: #2c2c2c;
          display: inline-block;
          margin-left: 13px;
          margin-top: 8px;
        }
        .img{
          width: 22px;
          height: 22px;
          position: absolute;
          top: 8px;
        }
      }
      .banOrNot{
        font-size: 14px;
      }
      .addButton{
        display: inline-block;
        width: 70px;
        height: 35px;
        border:1px solid  #10C899;
        border-radius: 3px;
        .addButtonText{
          color: #10C899;
          font-size: 14px;
        }
      }
    }
  }
</style>
