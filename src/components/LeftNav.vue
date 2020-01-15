<template>
  <div class="bgBox">
    <ul>
      <li
        class="firstMenu"
        v-for="firstMenu in firstMenus"
        :key="firstMenu.id">
        {{ firstMenu.title }}
        <ul>
          <li class="secondMenu" v-for="(data,index) in firstMenu.datas">
            <router-link class="router" :to="{path:data.path}" exact>
              {{data.title}}
            </router-link>
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
              path: '/procurement/goods'
            },
            { id: 2, title: "收藏商品" ,path: '/homepage/error'}
          ]
        },
        {
          id: 3,
          title: "订单中心",
          datas: [
            { id: 1, title: "订单信息列表",path: '/homepage/error' },
            { id: 2, title: "订单审批列表",path: '/homepage/error' }
          ]
        },
        {
          id: 4,
          title: "财务中心",
          datas: [
            { id: 1, title: "线上对账",path: '/homepage/error' },
            { id: 2, title: "采购记录",path: '/homepage/error' },
            { id: 3, title: "发票管理" ,path: '/homepage/error'},
            { id: 4, title: "采购报表" ,path: '/homepage/error'}
          ]
        },
        { id: 5, title: "云仓库", datas: [] },
        {
          id: 6,
          title: "管理中心",
          datas: [
            { id: 1, title: "账号管理", path:'/managementcenter/accountmanage'},
            { id: 2, title: "用户组管理",path:'/managementcenter/usergroupmanage' },
            { id: 3, title: "角色管理" ,path: '/homepage/error'},
            { id: 4, title: "地址管理" ,path: '/homepage/error'},
            { id: 5, title: "审批流管理" ,path: '/homepage/error'},
            { id: 6, title: "企业人员管理" ,path: '/homepage/error'},
            { id: 7, title: "消息推送" ,path: '/homepage/error'},
            { id: 8, title: "预算管理" ,path: '/homepage/error'},
            { id: 9, title: "预算查询",path: '/homepage/error' }
          ]
        },
        {
          id: 7,
          title: "个人设置",
          datas: [
            { id: 1, title: "修改密码",path: '/homepage/error' },
            { id: 2, title: "地址设置" ,path: '/homepage/error'}
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
      .router{
        text-decoration: none;
        outline: none;
        color: #2c2c2c;
      }
      .router-link-exact-active{
        color: #10C899;
      }
    }

  }
}

.active {
  color: #10c899;
}
</style>
