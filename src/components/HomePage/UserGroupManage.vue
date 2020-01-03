<template>
  <div class="userGroupBox">
    <div class="userGroup">
      <span class="userGroupTitle">用户组管理</span>
    </div>
    <div class="userGroupAdd">
      <div class="addButton">
        <span class="addButtonText">添加+</span>
      </div>
      <div class="search">
        <el-input
          class="el-input"
          placeholder="请输入用户组"
          v-model="searchText"
          clearable
        >
        </el-input>
        <div class="userGroupManageSearchButton">
          <span class="userGroupManageSearchButtonText">搜索</span>
          <img src="../../assets/HomePage/search.png" class="img" />
        </div>
      </div>
    </div>
    <!--      表格跟树-->
    <div class="tableTree">
<!--      表格-->
      <div class="table">
        <el-table class="el-table" :data="tableData" stripe :header-cell-style="{background:'#eee',textAlign:'center'}" :cell-style="{textAlign:'center'}">
          <el-table-column prop="id" label="序号" width="100px">
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
            <template>
              <span>
                {{tableData.operate}}
              </span>
              <el-button type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
<!--      树-->
      <div class="tree">
        <p><span>组织架构</span></p>
        <div class="el-tree-button">
          <el-tree class="el-tree"
                   :data="treeData"
                   show-checkbox
                   node-key="id"
                   :default-expanded-keys="[2, 3]"
                   :props="defaultProps">
          </el-tree>
          <div class="button">
            <img src="../../assets/HomePage/increase.png" alt="">
            <img src="../../assets/HomePage/delete.png" alt="">
            <img src="../../assets/HomePage/xiugai.png" alt="">
            <img src="../../assets/HomePage/chakan.png" alt="">

          </div>
        </div>
      </div>

    </div>
    <div class="el-pagSave">
      <el-pagination class="el-pagination"
                     @current-change="handleCurrentChange"
                     :page-size="pageInfo.pageSize"
                     prev-text="上一页"
                     next-text="下一页"
                     layout="total, prev, pager, next,jumper"
                     :total="pageInfo.total">
      </el-pagination>
      <div class="saveButton">
        <span class="saveButtonText">
          保存设置
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserGroupManage",
  data() {
    return {
      searchText: '',
      tableData: [
        {
          id: "1",
          name: "组织架构",
          usingPeopleAmount: "200",
          operate: "默认分组"
        },
        {
          id: "2",
          name: "工区",
          usingPeopleAmount: "200"
        },
        {
          id: "3",
          name: "成本中心",
          usingPeopleAmount: "200"
        }
      ],
      treeData: [
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
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      //分页器信息
      pageInfo:{
        currentPage:1,
        pageSize:10,
        total:100
      }

    };
  },
  methods: {
    handleCurrentChange(newPage) {
      console.log(`当前页: ${newPage}`);
      this.pageInfo.currentPage=newPage;
    }
  }
};
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
      .el-tree-button{
        width: 410px;
        height: 484px;
        display: flex;
        .el-tree{
          width: 200px;
          height: 484px;
          background-color: #f9f9f9;
        }
        .button{
          width: 210px;
          height: 434px;
          margin-top: 30px;
          img{
            width: 15px;
            height: 15px;
          }
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
