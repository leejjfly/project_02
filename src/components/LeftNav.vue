<template>
  <div class="bgBox">
    <ul>
      <li
        class="firstMenu"
        :style="{color:active==firstMenu.title?'#10c899':''}"
        v-for="(firstMenu, index) in firstMenus"
        :key="firstMenu.id">
        {{ firstMenu.title }}
        <ul>
          <li
            class="secondMenu"
            :style="{color:active==data.title?'#10c899':''}"
            v-for="(data, index) in firstMenu.datas"
            :key="data.id"
            @click="getRouter(data.router,data.title)"
           >
            {{ data.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      active:'首页',
      firstMenus: [
        { id: 1, title: "首页", datas: [] },
        {
          id: 2,
          title: "办公采购",
          datas: [
            {
              id: 1,
              title: "专柜商品库",
              router: { name: "Goods" }
            },
            { id: 2, title: "收藏商品" }
          ]
        },
        {
          id: 3,
          title: "订单中心",
          datas: [
            { id: 1, title: "订单信息列表" },
            { id: 2, title: "订单审批列表" }
          ]
        },
        {
          id: 4,
          title: "财务中心",
          datas: [
            { id: 1, title: "线上对账" },
            { id: 2, title: "采购记录" },
            { id: 3, title: "发票管理" },
            { id: 4, title: "采购报表" }
          ]
        },
        { id: 5, title: "云仓库", datas: [] },
        {
          id: 6,
          title: "管理中心",
          datas: [
            { id: 1, title: "账号管理", router: { name: "AccountManage" } },
            { id: 2, title: "用户组管理", router: { name: "UserGroupManage" } },
            { id: 3, title: "角色管理" },
            { id: 4, title: "地址管理" },
            { id: 5, title: "审批流管理" },
            { id: 6, title: "企业人员管理" },
            { id: 7, title: "消息推送" },
            { id: 8, title: "预算管理" },
            { id: 9, title: "预算查询" }
          ]
        },
        {
          id: 7,
          title: "个人设置",
          datas: [
            { id: 1, title: "修改密码" },
            { id: 2, title: "地址设置" }
          ]
        }
      ],
    };
  },
  created(){
    //组件在激活时的路由
    // this.activePath=window.sessionStorage.getItem('activePath')
  },
  methods: {
    getRouter(name,title) {
      this.active=title;
      this.$router.push(name);
    },
    //页面刷新后还能获取路由状态
    // saveNavState(){
    //  window.sessionStorage.setItem('activePath',activePath)
    // }
  }
};
</script>

<style scoped lang="less">
.bgBox {
  background-color: #fff;
  border-radius: 5px;
  border-top: 5px solid #10c899;
  width: 160px;
  height: 728px;

  .firstMenu {
    list-style: none;
    font-size: 16px;
    color: #2c2c2c;
    text-decoration: none;

    .secondMenu {
      font-size: 14px;
      color: #595757;
      list-style: none;
      margin-left: -25px;
      margin-top: 8px;
      cursor: pointer;
    }
  }
}

.active {
  color: #10c899;
}
</style>
