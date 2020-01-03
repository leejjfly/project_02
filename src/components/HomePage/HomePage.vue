<template>
    <div id="app">
      <TopNav></TopNav>
      <Top></Top>
      <BreadCrumbs></BreadCrumbs>
      <div class="main">
        <LeftNav class="leftNav"></LeftNav>
        <router-view class="rightMain">

        </router-view>
      </div>



    </div>
</template>

<script>
  import TopNav from "../TopNav";
  import LeftNav from "../LeftNav";
  import Top from "@/components/HomePage/Top";
  import BreadCrumbs from "@/components/HomePage/BreadCrumbs";
  import ThreeComponents from "@/components/HomePage/ThreeComponents";
  import AccountManage from "@/components/HomePage/AccountManage";
  import UserGroupManage from "@/components/HomePage/UserGroupManage";
    export default {
      name: "HomePage",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
        AccountManage, TopNav,LeftNav,Top,BreadCrumbs
      }
    }
</script>

<style scoped lang="less">
  .main{
    width: 1920px;
    height: 1200px;
    position: relative;
    background-color: #f6f6f6;
    .leftNav{
      width: 160px;
      height: 728px;
      position: absolute;
      left: 377px;
    }
    .rightMain{
      width: 990px;
      /*height: 1048px;*/
      position: absolute;
      right: 373px;
    }
  }
</style>
