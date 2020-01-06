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
    <div class="accountManageSearchButton" @click="getTableData">
      <span class="accountManageSearchButtonText">搜索</span>
      <img src="../../assets/HomePage/search.png" class="img">
    </div>
    <el-switch class="switch"
      v-model="banState"
      active-color="#10C899"
      inactive-color="#eee"
      @change="banAccountVisible">
    </el-switch>
    <span class="banOrNot">是否显示禁用账号</span>
    <div class="addButton"  @click="addUserVisible=true">
      <span class="addButtonText">添加+</span>
    </div>
    <!--表格-->
    <el-table :stripe="true" class="el-table" :header-cell-style="{background:'#eee',textAlign:'center'}" :cell-style="{textAlign:'center'}"
      :data="tableData"
      style="width: 950px">
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
        label="操作"
        width="200px">
        <template slot-scope="scope">
          <el-button type="text" style="color: #10C899;height: 30px;">移交</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">设置</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;" @click="showEditDialog">编辑</el-button>
          <el-button type="text" style="color: #2c2c2c;height: 30px;">禁用</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">监管范围</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">通知方式</el-button>
        </template>

      </el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination class="el-pagination"
        @current-change="handleCurrentChange"
        :page-size="pageInfo.pageSize"
        prev-text="上一页"
        next-text="下一页"
        layout="total, prev, pager, next,jumper"
        :total="pageInfo.total">
    </el-pagination>
  </div>
<!--  添加新用户-->
  <el-dialog
    title="新建账号"
    :visible.sync="addUserVisible"
    @close="addDialogClosed"
    width="40%">
<!--    表单主体-->
    <el-form :model="addUserForm" :rules="addUserFormRules" ref="addUserFormRef" label-width="100px">
      <el-form-item label="账号名" prop="accountName">
        <el-input v-model="addUserForm.accountName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="addUserForm.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username">
        <el-input v-model="addUserForm.username"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phoneNumber">
        <el-input v-model="addUserForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addUserForm.email"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addUser">提交</el-button>
    <el-button @click="addUserVisible = false">取 消</el-button>

  </span>
  </el-dialog>

<!--  修改用户信息的对话框-->
  <el-dialog
    title="编辑账号"
    :visible.sync="editDialogVisible"
    @close="editDialogClosed"
    width="40%">
    <!--    表单主体-->
    <el-form :model="editUserForm" :rules="editUserFormRules"  ref="editUserFormRef" label-width="100px" class="editDialog">
      <el-form-item label="账号名" prop="accountName">
        <el-input v-model="editUserForm.accountName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="editUserForm.password"></el-input><el-button>重置密码</el-button>
      </el-form-item>
      <el-form-item label="姓名" prop="username">
        <el-input v-model="editUserForm.username"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phoneNumber">
        <el-input v-model="editUserForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="editUserForm.email"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="editDialogVisible=false">提交</el-button>
    <el-button @click="editDialogVisible = false">取 消</el-button>

  </span>
  </el-dialog>
</div>
</template>

<script>
  import {mapState} from 'vuex';
    export default {
        name: "AccountManage",
      data(){
        //添加邮箱的验证规则
        let checkEmail = (rule,value,cb)=>{
          //验证邮箱的正则表达式
          const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
          if(regEmail.test(value)){
            //合法邮箱
            return cb();
          }
          cb(new Error('请输入合法的邮箱'));
        };
        //添加手机号的验证规则
        let checkPhoneNumber = (rule,value,cb)=>{
          const regPhoneNumber=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
          if(regPhoneNumber.test(value)){
            return cb();
          }
          cb(new Error('请输入合法的手机号'));
        };
          return{
            //el-switch的值
            banState:'',
            //搜索框的值
            searchText:'',
            //表格的值
            tableData:[
              {
                account:'lxwl@163.com',
                name:'刘阳',
                phone:'18900999090',
                character:'管理员',
                userGroup1:'部门：技术研发中心',
                userGroup2:'工区：新华国际广场A11',
                state:'启用',
              },
              {
                account:'lxwl123@163.com',
                name:'李想',
                phone:'18812341234',
                character:'管理员',
                userGroup1:'部门：技术研发中心',
                userGroup2:'工区：新华国际广场A11',
                state:'启用',
              }
            ],
            //分页器信息
            pageInfo:{
              currentPage:1,
              pageSize:10,
              total:100
            },
            //添加新用户的对话框
            addUserVisible:false,
            //添加新用户的表单
            addUserForm:{
              accountName:'',
              password:'',
              username:'',
              phoneNumber:'',
              email:''
            },
            //添加用户表单的验证规则
            addUserFormRules:{
              username:[
                {required:true,message:'请输入用户名',trigger:'blur'},
                {min:2,max:10,message: '用户名在2~10个字符之间',trigger: 'blur'}
              ],
              password:[
                {required:true,message:'请输入密码',trigger:'blur'},
                {min:6,max:20,message: '用户名在5~20个字符之间',trigger: 'blur'}
              ],
              accountName:[
                {required:true,message:'请输入账号',trigger:'blur'}
              ],
              phoneNumber:[
                {required:true,message:'请输入手机号码',trigger:'blur'},
                {validator:checkPhoneNumber,trigger: 'blur'}
              ],
              email:[
                {required:true,message:'请输入邮箱',trigger:'blur'},
                {validator:checkEmail,trigger: 'blur'}
              ]
            },
            //控制编辑用户信息的对话框
            editDialogVisible:false,
            editUserForm:{
              accountName:'',
              password:'',
              username:'',
              phoneNumber:'',
              email:''
            },
            //编辑用户信息的校验规则
            editUserFormRules:{
              username:[
                {required:true,message:'请输入用户名',trigger:'blur'},
                {min:2,max:10,message: '用户名在2~10个字符之间',trigger: 'blur'}
              ],
              password:[
                {required:true,message:'请输入密码',trigger:'blur'},
                {min:6,max:20,message: '用户名在5~20个字符之间',trigger: 'blur'}
              ],
              accountName:[
                {required:true,message:'请输入账号',trigger:'blur'}
              ],
              phoneNumber:[
                {required:true,message:'请输入手机号码',trigger:'blur'},
                {validator:checkPhoneNumber,trigger: 'blur'}
              ],
              email:[
                {required:true,message:'请输入邮箱',trigger:'blur'},
                {validator:checkEmail,trigger: 'blur'}
              ]
            }

          }
      },
      methods:{
          //是否显示禁用状态的账号
        banAccountVisible(banState){
          console.log(banState)
        },

        //分页器的当前页
        handleCurrentChange(currentPage) {
          console.log(`当前页: ${currentPage}`);
        },
        //点击取消关闭对话框
        addDialogClosed(){
          this.$refs.addUserFormRef.resetFields();
        },
        //点击添加按钮，添加新用户
        addUser(){
          this.$refs.addUserFormRef.validate(valid=>{
            if(!valid) return;
            //表单预校验成功
            this.tableData=this.tableData||[];
            window.localStorage.setItem("account",this.addUserForm.accountName);
            window.localStorage.setItem("name",this.addUserForm.username);
            window.localStorage.setItem("phone",this.addUserForm.phoneNumber);
            this.tableData.push({
              account:this.addUserForm.accountName,
              name:this.addUserForm.username,
              phone:this.addUserForm.phoneNumber
            })
          });
          this.addUserVisible = false;
        },
        //展示编辑用户信息的对话框
        showEditDialog(){
          this.editDialogVisible=true;

        },
        //点击取消编辑用户信息的对话框
        editDialogClosed(){
          this.$refs.editUserFormRef.resetFields();
        },
        // ...mapState(['formData'])


        //查询表格中的数据
        getTableData() {
          let searchText = this.searchText;
          let tableData = this.tableData;
          if (!searchText) {
            return tableData;
          }
          searchText=searchText.trim().toLowerCase();

          tableData=tableData.filter(function (item) {
            if(item.name.toLowerCase().indexOf(searchText)!==-1){
              return item;
            }
          });
          return tableData;
        }
      },
      computed:{

      }
    }
</script>

<style scoped lang="less">
  .accountBox{
    width: 990px;
    height: 728px;
    background-color:#ffffff;
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
        right: 20px;
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
    /*.editDialog{*/
    /*  width: 500px;*/
    /*  el-input{*/
    /*    width: 500px;*/
    /*  }*/
    /*  el-button{*/
    /*    display: inline-block;*/
    /*  }*/
    /*}*/
  }
</style>
