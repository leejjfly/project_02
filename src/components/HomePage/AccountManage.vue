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
      <span class="addButtonText" @click="addUserVisible=true">添加+</span>
    </div>
    <!--表格-->
    <el-table :stripe="true" class="el-table"
      :data="tableData"
      style="width: 970px">
      <el-table-column
        prop="account"
        label="账号"
        width="160px">
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
        <template slot-scope="scope">
          <span>{{scope.row.userGroup1}}</span>
          <br/>
          <span>{{scope.row.userGroup2}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="manage"
        label="操作"
        width="220px">
        <template slot-scope="scope">
          <el-button type="text" style="color: #10C899;height: 30px;">移交</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">设置</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">编辑</el-button>
          <el-button type="text" style="color: #2c2c2c;height: 30px;">禁用</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">监管范围</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">通知方式</el-button>
        </template>

      </el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination class="el-pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="10"
        prev-text="上一页"
        next-text="下一页"
        layout="total, prev, pager, next,jumper"
        :total="100">
    </el-pagination>
  </div>
<!--  添加新用户-->
  <el-dialog
    title="新建账号"
    :visible.sync="addUserVisible"
    width="50%">
<!--    表单主体-->
    <el-form :model="addUserForm" :rules="addUserFormRules" ref="addUserFormRef" label-width="100px">
      <el-form-item label="账号名" prop="accountName">
        <el-input v-model="addUserForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="addUserForm.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username">
        <el-input v-model="addUserForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phoneNumber">
        <el-input v-model="addUserForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addUserForm.name"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-button @click="addUserVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUserVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
    export default {
        name: "AccountManage",
      data(){
          return{
            value1:'',
            searchText:null,
            tableData:[
              {
                account:'lxwl@163.com',
                name:'刘阳',
                phone:'18900999090',
                character:'管理员',
                userGroup1:'部门：技术研发中心',
                userGroup2:'工区：新华国际广场A11',
                state:'启用',
                manage:''
              },
              {
                account:'lxwl@163.com',
                name:'刘阳',
                phone:'18900999090',
                character:'管理员',
                userGroup1:'部门：技术研发中心',
                userGroup2:'工区：新华国际广场A11',
                state:'启用',
                manage:''
              }
            ],
            currentPage:'1',
            addUserVisible:false,
            addUserForm:{},
            //添加用户表单的验证规则
            addUserFormRules:{
              username:[
                {required:true,message:'请输入用户名',trigger:'blur'},
                {min:3,max:10,message: '用户名在3~10个字符之间',trigger: 'blur'}
              ]
            }

          }
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style scoped lang="less">
  .accountBox{
    width: 990px;
    height: 728px;
    background-color: #fff;
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
        cursor: pointer;
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
        cursor: pointer;
        .addButtonText{
          color: #10C899;
          font-size: 14px;
          display: inline-block;
          margin-left: 17px;
          margin-top: 7px;
        }
      }
    }
    .el-table{
      margin-left: 20px;
      margin-top: 10px;
      border-color: #eeeeee;
    }
    .el-pagination{
      position: absolute;
      right: 0px;
    }
  }
</style>
