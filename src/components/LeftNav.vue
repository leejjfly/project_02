<template>
  <el-container>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo" :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页</span>
          </template>
          <el-menu-item-group>
            <template slot="title">办公采购</template>
            <el-menu-item index="1-1">专柜商品库</el-menu-item>
            <el-menu-item index="1-2">收藏商品</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="订单中心">
            <el-menu-item index="1-3">订单信息列表</el-menu-item>
            <el-menu-item index="1-4">订单审批列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="财务中心">
            <el-menu-item index="1-5">线上对账</el-menu-item>
            <el-menu-item index="1-6">采购记录</el-menu-item>
            <el-menu-item index="1-7">发票管理</el-menu-item>
            <el-menu-item index="1-8">采购报表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="云仓库"> </el-menu-item-group>
          <el-menu-item-group title="管理中心">
            <el-menu-item index="1-9">账号管理</el-menu-item>
            <el-menu-item index="1-10">用户组管理</el-menu-item>
            <el-menu-item index="1-11">角色管理</el-menu-item>
            <el-menu-item index="1-12">地址管理</el-menu-item>
            <el-menu-item index="1-13">审批流管理</el-menu-item>
            <el-menu-item index="1-14">企业人员管理</el-menu-item>
            <el-menu-item index="1-15">消息推送</el-menu-item>
            <el-menu-item index="1-16">预算管理</el-menu-item>
            <el-menu-item index="1-17">预算查询</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="个人设置">
            <el-menu-item index="1-18">修改密码</el-menu-item>
            <el-menu-item index="1-19">地址设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: "LeftNav"
};
</script>

<style scoped>

</style>
