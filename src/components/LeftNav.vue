<template>
<div class="bgBox">
  <ul>
    <li class="firstmenu">首页</li>
    <li class="firstmenu">办公采购
      <ul>
        <li class="secondmenu">专柜商品库</li>
        <li class="secondmenu">收藏商品</li>
      </ul>
    </li>
    <li class="firstmenu">订单中心
      <ul>
        <li class="secondmenu">订单信息列表</li>
        <li class="secondmenu">订单审批列表</li>
      </ul>
    </li>
    <li class="firstmenu">财务中心
      <ul>
        <li class="secondmenu">线上对账</li>
        <li class="secondmenu">采购记录</li>
        <li class="secondmenu">发票管理</li>
        <li class="secondmenu">采购报表</li>
      </ul>
    </li>
    <li class="firstmenu">云仓库</li>
    <li class="firstmenu">管理中心
      <ul>
        <li class="secondmenu">账号管理</li>
        <li class="secondmenu">用户组管理</li>
        <li class="secondmenu">角色管理</li>
        <li class="secondmenu">地址管理</li>
        <li class="secondmenu">审批流管理</li>
        <li class="secondmenu">企业人员管理</li>
        <li class="secondmenu">消息推送</li>
        <li class="secondmenu">预算管理</li>
        <li class="secondmenu">预算查询</li>
      </ul>
    </li>
    <li class="firstmenu">个人设置
      <ul>
        <li class="secondmenu">修改密码</li>
        <li class="secondmenu">地址设置</li>
      </ul>
    </li>
  </ul>
  <router-view></router-view>
</div>



</template>

<script>
    export default {
        name: "left"
    }
</script>

<style scoped lang="less">
    .bgBox {
      background-color: #fff;
      border-radius: 5px;
      /*margin-left: 377px;*/
      /*margin-bottom: 20px;*/
      width: 160px;
      height: 728px;

      .firstmenu {
        list-style: none;
        font-size: 16px;
        color: #2c2c2c;
        cursor: pointer;

        .secondmenu {
          font-size: 14px;
          color: #595757;
          list-style: none;
          margin-left: -25px;
          margin-top: 8px;
        }
      }
    }





</style>
