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
    <el-switch class="switch"
      v-model="value1"
      active-color="#10C899"
      inactive-color="#eee">
    </el-switch>
    <span class="banOrNot">是否显示禁用账号</span>
    <div class="addButton">
      <span class="addButtonText">添加+</span>
    </div>
    <el-table stripe="true" class="el-table"
      :data="tableData"
      style="width: 940px">
      <el-table-column
        prop="account"
        label="账号"
        width="150px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="150px">
      </el-table-column>
      <el-table-column
        prop="character"
        label="角色"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="userGroup"
        label="用户组"
        width="200px">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="manage"
        label="操作"
        width="200px">
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
            value1:'',
            tableData:[
              {
                account:'lxwl@163.com',
                name:'刘阳',
                phone:'18900999090',
                character:'管理员',
                userGroup:'部门：技术研发中心工区：新华国际广场A11',
                state:'启用',
                manage:''
              }
            ]
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
      position: relative;
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
      .switch{
        margin-left: 20px;
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
        position: absolute;
        right: 0px;
        .addButtonText{
          color: #10C899;
          font-size: 14px;
          display: inline-block;
          margin-left: 17px;
          margin-top: 7px;
        }
      }
    }
    .el-table th{
      text-align: center;
    }
  }
</style>
