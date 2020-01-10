<template>
  <div>
    <div class="dd" @click="local">
      {{ app }}
    </div>
    <el-table :stripe="true" class="el-table" :header-cell-style="{background:'#eee',textAlign:'center'}" :cell-style="{textAlign:'center'}"
              :data="accountManage"
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
          <el-button type="text" style="color: #10C899;height: 30px;">编辑</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;" v-if="scope.row.state=='禁用'">启用</el-button>
          <el-button type="text" style="color: #2c2c2c;height: 30px;"  v-if="scope.row.state=='启用'">禁用</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">监管范围</el-button>
          <el-button type="text" style="color: #10C899;height: 30px;">通知方式</el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 300, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>


  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      app: "",
      search: "",
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
      pageSize:null,
      currentPage:1,
      tableData:[],
    };
  },
  methods: {
    local() {
      if (!window.localStorage) {
        alert("浏览器不支持localstorage");
      } else {
        let storage = window.localStorage;
        let data = {
          username: "lxwl123",
          password: "123456"
        };
        let d = JSON.stringify(data);
        storage.setItem("data", d);
        JSON.parse(d);
        console.log(d.username);
        this.app = JSON.parse(storage.data);
      }
    },

    //分页器 页面大小改变
    handleSizeChange(value){
      this.pageSize=value;
      console.log(`每页 ${value} 条`);
     this.accountManage=[{
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
     }]

    },
    //分页器的当前页
    handleCurrentChange(currentPage) {
      this.currentPage=currentPage;
      console.log(`当前页: ${currentPage}`);

    },

  }
}
</script>

<style scoped lang="less">
.dd {
  width: 500px;
  height: 300px;
  background-color: #10c899;
}
.button{
  width: 210px;
  height: 434px;
  margin-top: 30px;
  display: inline-block;
img{
  width: 15px;
  height: 15px;
}
}

</style>
