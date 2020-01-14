<template>
<div class="accountBox">
 <div class="accountManage"><span class="accountManageTitle">账号管理</span></div>
  <div class="accountManageSearch">
    <span class="accountManageSearchText">账号搜索:</span>
    <el-input class="el-input"
      placeholder="请输入姓名或手机号"
      v-model="searchText" @clear="clear"
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
          <el-button type="text" style="color: #10C899;height: 30px;" @click="showEditDialog(scope.row)">编辑</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;" @click="banAccount(scope.row,scope.$index)" v-if="scope.row.state=='禁用'">启用</el-button>
          <el-button type="text" style="color: #2c2c2c;height: 30px;" @click="banAccount(scope.row,scope.$index)" v-if="scope.row.state=='启用'">禁用</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">监管范围</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">通知方式</el-button>
        </template>

      </el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination class="el-pagination"
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange"
                   prev-text="上一页"
                   next-text="下一页"
                   :page-sizes="[1, 2, 3, 5]"
                   :current-page.sync="pageInfo.currentPage"
                   :page-size="pageInfo.pageSize"
                   layout="total,sizes, prev, pager, next,jumper"
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
        <el-input v-model="editUserForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="editUserForm.password"></el-input>
        <el-button @click="resetPassword">重置密码</el-button>
      </el-form-item>
      <el-form-item label="姓名" prop="username">
        <el-input v-model="editUserForm.username"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phoneNumber">
        <el-input v-model="editUserForm.phone"></el-input>
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
            //账号管理页列表
            accountManage:[
              {
                id:1,
                account:'lxwl@163.com',
                name:'刘阳',
                password:'123456789',
                phone:'18900999090',
                character:'管理员',
                userGroup1:'部门：技术研发中心',
                userGroup2:'工区：新华国际广场B11',
                state:'启用',
                email:'',
              },
              {
                id:2,
                account:'lxwl123@163.com',
                name:'李想',
                password:'123456789',
                phone:'18812341234',
                character:'管理员',
                userGroup1:'部门：财务中心',
                userGroup2:'工区：新华国际广场A11',
                state:'禁用',
                email:'',
              },
              {
                id:3,
                account:'lxwl456@163.com',
                name:'张三',
                password:'123456789',
                phone:'15012341234',
                character:'管理员',
                userGroup1:'部门：人力资源中心',
                userGroup2:'工区：新华国际广场A11',
                state:'启用',
                email:'',
              }
            ],
            //查询账号列表
            tableData:[],
            //el-switch的值
            banState:true,
            //搜索框的值
            searchText:'',
            //分页器信息
            pageInfo:{
              currentPage:1,
              pageSize:3,
              total:0,
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
                {min:6,max:20,message: '密码在5~20个字符之间',trigger: 'blur'}
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
              account:'',
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
      created(){
          this.pageInfo.total=this.accountManage.length;
          if(this.pageInfo.pageSize<=this.pageInfo.total){
            for(let i=0;i<this.pageInfo.pageSize;i++){
              this.tableData.push(this.accountManage[i]);
            }
          }
      },
      methods:{
          //是否显示禁用状态的账号
        banAccountVisible(banState){
          let tableData = this.tableData;
          this.banState=banState;
          if(!banState){
            tableData=tableData.filter(function (item) {
              if(item.state=='启用'){
                return tableData;
              }
            });
            return this.tableData=tableData;
          }
          this.tableData=this.accountManage;
          return this.tableData;
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
            this.accountManage=this.accountManage||[];
            this.accountManage.push({
              account:this.addUserForm.accountName,
              name:this.addUserForm.username,
              password:this.addUserForm.password,
              phone:this.addUserForm.phoneNumber,
              email:this.addUserForm.email,
              character:'普通用户',
              userGroup1:'部门：技术研发中心',
              userGroup2:'工区：新华国际广场A11',
              state:'启用'
            });

          });
          this.pageInfo.total++;
          this.addUserVisible = false;
        },
        //展示编辑用户信息的对话框
        showEditDialog(account){
          this.editDialogVisible=true;
          this.editUserForm.account=account.account;
          this.editUserForm.password=account.password;
          this.editUserForm.username=account.name;
          this.editUserForm.phone=account.phone;
          this.editUserForm.email=account.email;
        },
        //点击取消编辑用户信息的对话框
        editDialogClosed(){
          this.$refs.editUserFormRef.resetFields();
        },
        //查询表格中的数据
        getTableData() {
          let searchText = this.searchText;
          let tableData = this.accountManage;
          if (!searchText) {
            this.$message.warning('搜索框的值不能为空！');
          }
          // else{
          //   if(!this.banState){
          //     tableData=tableData.filter(function (item) {
          //       if(item.state=='启用'){
          //         searchText=searchText.trim().toLowerCase();
          //         tableData=tableData.filter(function (item) {
          //           return !item.name.toLowerCase().indexOf(searchText)||!item.phone.toLowerCase().indexOf(searchText)
          //         });
          //         this.tableData=tableData;
          //         return this.tableData;
          //       }
          //     });
          //     return this.tableData=tableData;
          //   }else{
          //     searchText=searchText.trim().toLowerCase();
          //     tableData=tableData.filter(function (item) {
          //       return !item.name.toLowerCase().indexOf(searchText)||!item.phone.toLowerCase().indexOf(searchText)
          //     });
          //     this.tableData=tableData;
          //     return this.tableData;
          //   }
          // }
          searchText=searchText.trim().toLowerCase();
          tableData=tableData.filter(function (item) {
            return !item.name.toLowerCase().indexOf(searchText)||!item.phone.toLowerCase().indexOf(searchText)
          });
          this.tableData=tableData;
          return this.tableData;


        },
        //搜索框的值为空 返回原数组
        clear(){
          let searchText = this.searchText;
          let tableData = this.accountManage;
          if (!searchText) {
            this.tableData=this.accountManage;
            tableData=this.tableData;
            return tableData;
          }
          // if(!this.banState){
          //   return tableData.filter(function (item) {
          //     return item.state=='启用';
          //   })
          // }else{
          //     this.tableData=this.accountManage;
          //     tableData=this.tableData;
          //     return tableData;
          // }
        },
        // //增加禁用账号功能
        banAccount(account,index){
          if(account.state=='启用'){
            this.tableData[index].state='禁用';
          }else{
            this.tableData[index].state='启用';
          }
        },
        //分页器 页面大小改变
        handleSizeChange(value){
          this.pageInfo.pageSize=value;
          this.tableData=this.accountManage.slice((this.pageInfo.currentPage-1)*this.pageInfo.pageSize,this.pageInfo.currentPage*this.pageInfo.pageSize);
          this.pageInfo.total=this.accountManage.length;
        },
        //分页器的当前页
        handleCurrentChange(currentPage) {
          this.pageInfo.currentPage=currentPage;
          this.tableData=this.accountManage.slice((this.pageInfo.currentPage-1)*this.pageInfo.pageSize,this.pageInfo.currentPage*this.pageInfo.pageSize);
          this.pageInfo.total=this.accountManage.length;

        },
        //重置密码
        resetPassword(){
          this.editUserForm.password='';
        }
      },
      computed:{

      },
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
          color: #ffffff;
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
