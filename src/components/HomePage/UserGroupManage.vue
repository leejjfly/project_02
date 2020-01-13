<template>
  <div class="userGroupBox">
    <div class="userGroup">
      <span class="userGroupTitle">用户组管理</span>
    </div>
    <div class="userGroupAdd">
      <div class="addButton" @click="addUserGroupVisible=true">
        <span class="addButtonText">添加+</span>
      </div>
      <div class="search">
        <el-input
          @clear="clear"
          class="el-input"
          placeholder="请输入用户组"
          v-model="searchText"
          clearable
        >
        </el-input>
        <div class="userGroupManageSearchButton" @click="getTableData">
          <span class="userGroupManageSearchButtonText">搜索</span>
          <img src="../../assets/HomePage/search.png" class="img" />
        </div>
      </div>
    </div>
    <!--      表格跟树-->
    <div class="tableTree">
<!--      表格-->
      <div class="table">
        <el-table class="el-table"
                  :data="tableData" stripe
                  :header-cell-style="{background:'#eee',textAlign:'center'}"

                  :cell-style="firstRow">
          <el-table-column prop="id" label="序号" width="100px">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="名称" width="180px">
          </el-table-column>
          <el-table-column
            prop="usingPeopleAmount"
            label="使用人数"
            width="100px"
          >
          </el-table-column>
          <el-table-column prop="operate" label="操作" width="180px">
            <template slot-scope="scope">
              <span v-if="scope.row.operate=='默认分组'"> {{scope.row.operate}}</span>
              <el-button type="text" style="color: #2c2c2c" v-if="scope.row.operate=='删除'" @click="del(scope.$index)"> {{scope.row.operate}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
<!--      树-->
      <div class="tree">
        <p><span>组织架构</span></p>
          <el-tree class="el-tree"
                   :data="treeData"
                   show-checkbox
                   node-key="id"
                   default-expand-all
                   :expand-on-click-node="false"
                   :props="defaultProps">
            <span class="custom-tree-node" slot-scope="{ node, data }">
             <span>{{ node.label }}</span>
              <span>
                <img src="../../assets/HomePage/increase.png" alt="" @click="()=>append(data)">
                <img src="../../assets/HomePage/delete.png" alt="" @click="()=>remove(node,data)">
                <img src="../../assets/HomePage/xiugai.png" alt="">
                <img src="../../assets/HomePage/chakan.png" alt="">
              </span>
            </span>
          </el-tree>
      </div>

    </div>
    <div class="el-pagSave">
      <el-pagination class="el-pagination"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :page-size="pageInfo.pageSize"
                     :page-sizes="[1, 2, 3, 5]"
                     prev-text="上一页"
                     next-text="下一页"
                     :current-page.sync="pageInfo.currentPage"
                     layout="total, sizes,prev, pager, next,jumper"
                     :total="pageInfo.total">
      </el-pagination>
      <div class="saveButton">
        <span class="saveButtonText">
          保存设置
        </span>
      </div>
    </div>

<!--    添加用户组-->
    <el-dialog
      title="新建用户组"
      :visible.sync="addUserGroupVisible"
      @close="addUserGroupDialogClosed"
      width="40%">
      <!--    表单主体-->
      <el-form :model="addUserGroupForm" ref='addUserGroupFormRef' :rules='addUserGroupFormRules' label-width="100px">
        <el-form-item label="用户组名称" prop="userGroupName">
          <el-input v-model="addUserGroupForm.userGroupName"></el-input>
        </el-form-item>
        <el-form-item label="使用人数" prop="amount">
          <el-input v-model="addUserGroupForm.amount"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addUserGroup">提交</el-button>
    <el-button @click="addUserGroupVisible = false">取 消</el-button>

      </span>
    </el-dialog>
  </div>
</template>

<script>
  let id=1000;
export default {
  name: "UserGroupManage",
  data() {
    const treeData = [
      {
        id: 1,
        label: "集团总部（128人）",
        children: [
          {
            id: 2,
            label: "总经办",
            children: [
              {
                id: 4,
                label: "风控管理中心"
              },
              {
                id: 5,
                label: "发展研究院"
              }
            ]
          },
          {
            id: 3,
            label: "技术研发中心",
            children: [
              {
                id: 6,
                label: "风控管理中心"
              },
              {
                id: 7,
                label: "发展研究院"
              },
              {
                id: 8,
                label: "风控管理中心"
              },
              {
                id: 9,
                label: "发展研究院"
              },
              {
                id: 10,
                label: "风控管理中心"
              },
              {
                id: 11,
                label: "发展研究院"
              },
              {
                id: 12,
                label: "风控管理中心"
              },
              {
                id: 13,
                label: "发展研究院"
              }
            ]
          }
        ]
      }
    ];
    return {
      searchText: '',
      userGroupManage: [
        {
          name: "组织架构",
          usingPeopleAmount: "200",
          operate: "默认分组"
        },
        {
          name: "工区",
          usingPeopleAmount: "200",
          operate: '删除'
        },
        {
          name: "成本中心",
          usingPeopleAmount: "200",
          operate: '删除'
        }
      ],
      tableData: [],
      treeData: JSON.parse(JSON.stringify(treeData)),
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      //分页器信息
      pageInfo: {
        currentPage: 1,
        pageSize: 3,
        total: 0
      },
      //添加用户组的表单
      addUserGroupForm: {
        userGroupName: '',
        amount: ''
      },
      addUserGroupVisible: false,
      //添加用户组表单的验证规则
      addUserGroupFormRules: {
        userGroupName: [
          {required: true, message: '请输入用户组名', trigger: 'blur'},
          {min: 2, max: 10, message: '用户名在2~10个字符之间', trigger: 'blur'}
        ],
        amount: [
          {required: true, message: '请输入使用人数', trigger: 'blur'},
          {min: 1, max: 5, message: '使用人数在1~5个字符之间', trigger: 'blur'}
        ],
      },
    }
  },
  created() {
    this.pageInfo.total = this.userGroupManage.length;
    if (this.pageInfo.pageSize <= this.pageInfo.total) {
      for (let i = 0; i < this.pageInfo.pageSize; i++) {
        this.tableData.push(this.userGroupManage[i]);
      }
    }
  },
  methods: {
    //分页器 页面大小改变
    handleSizeChange(value) {
      this.pageInfo.pageSize = value;
      this.tableData = this.userGroupManage.slice((this.pageInfo.currentPage - 1) * this.pageInfo.pageSize, this.pageInfo.currentPage * this.pageInfo.pageSize);
      this.pageInfo.total = this.userGroupManage.length;
    },
    //分页器的当前页
    handleCurrentChange(currentPage) {
      this.pageInfo.currentPage = currentPage;
      this.tableData = this.userGroupManage.slice((this.pageInfo.currentPage - 1) * this.pageInfo.pageSize, this.pageInfo.currentPage * this.pageInfo.pageSize);
      this.pageInfo.total = this.userGroupManage.length;

    },
    //添加子节点
    append(data) {
      const newChild = {id: id++, label: '子节点', children: []};
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },
    //删除子节点
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    //添加用户组
    addUserGroup() {
      this.$refs.addUserGroupFormRef.validate(valid => {
        if (!valid) return;
        this.tableData = this.tableData || [];
        this.tableData.push({
          name: this.addUserGroupForm.userGroupName,
          usingPeopleAmount: this.addUserGroupForm.amount,
          operate: '删除'
        });
        this.pageInfo.total++;
      });
      this.addUserGroupVisible = false;

    },
    //关闭添加用户组对话框
    addUserGroupDialogClosed() {
      this.$refs.addUserGroupFormRef.resetFields();
    },
    //查询表格中的数据
    getTableData() {
      let searchText = this.searchText;
      let tableData = this.tableData;
      searchText = searchText.trim().toLowerCase();
      tableData = tableData.filter(function (item) {
        return !item.name.toLowerCase().indexOf(searchText)
      });
      this.tableData = tableData;
      return this.tableData;
    },
    //清空
    clear() {
      let searchText = this.searchText;
      let tableData = this.userGroupManage;
      if (!searchText) {
        this.tableData = this.userGroupManage;
        tableData = this.tableData;
        return tableData;
      }
      return tableData;
    },
    del(index) {
      let tableData = this.tableData;
     tableData.splice(index,1);
      this.tableData=tableData;
      this.pageInfo.total--;
      return this.tableData;
    },
    firstRow({row,column,rowIndex,columnIndex}){
      if(rowIndex==0){
        return 'color:#10c899;textAlign:center;'
      }else{
        return 'textAlign:center;'
      }
    }

  },
  computed:{

  }
}
</script>

<style scoped lang="less">
.userGroupBox {
  width: 990px;
  height: 728px;
  background-color: #fff;
  .userGroup {
    width: 990px;
    height: 50px;
    .userGroupTitle {
      display: inline-block;
      width: 100px;
      height: 30px;
      margin-left: 20px;
      font-size: 16px;
      border-bottom: 3px solid #10c899;
    }
  }
  .userGroupAdd {
    width: 990px;
    height: 50px;
    .addButton {
      display: inline-block;
      width: 70px;
      height: 35px;
      border: 1px solid #10c899;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 20px;
      .addButtonText {
        color: #10c899;
        font-size: 14px;
        display: inline-block;
        margin-left: 17px;
        margin-top: 7px;
      }
    }
    .search {
      display: inline-block;
      margin-left: 500px;
      .el-input {
        width: 200px;
        height: 35px;
      }
      .userGroupManageSearchButton {
        width: 70px;
        height: 35px;
        background-color: #10c899;
        display: inline-block;
        margin-left: 20px;
        position: relative;
        border-radius: 3px;
        cursor: pointer;
        .userGroupManageSearchButtonText {
          font-size: 14px;
          color: #2c2c2c;
          display: inline-block;
          margin-left: 13px;
          margin-top: 8px;
        }
        .img {
          width: 22px;
          height: 22px;
          position: absolute;
          top: 8px;
        }
      }
    }
  }
  .tableTree {
    width: 950px;
    height: 538px;
    position: relative;
    .table{
      width: 562px;
      height: 538px;
      display: inline-block;
      .el-table {
        width: 562px;
        height: 538px;
        margin-left: 20px;
      }
    }
    .tree{
      width: 410px;
      height: 538px;
      display: inline-block;
      position: absolute;
      top:0px;
      background-color: #f9f9f9;
      p{
        width: 410px;
        height: 46px;
        margin: 0px;
        font-size: 14px;
        font-weight: bold;
        color: #909399;
        background-color: #eeeeee;
        span{
          display: inline-block;
          margin-left: 20px;
          margin-top: 14px;
        }
      }
      .el-tree{
        width: 300px;
        height: 484px;
        background-color: #f9f9f9;
        img{
          width: 15px;
          height: 15px;
        }
      }

    }

  }
  .el-pagSave{
    width: 990px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    .el-pagination{
      width: 562px;

    }
    .saveButton{
      width: 70px;
      height: 35px;
      display: block;
      background-color: #10c899;
      margin-right: 20px;
      border-radius: 3px;
      cursor: pointer;
      .saveButtonText{
        font-size: 14px;
        color: #2c2c2c;
        display: inline-block;
        margin-left: 5px;
        margin-top: 5px;
      }
    }
  }

}
</style>
