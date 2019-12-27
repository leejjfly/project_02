<template>
    <div id="app">
      <TopNav></TopNav>
      <Top></Top>
      <BreadCrumbs></BreadCrumbs>
      <div class="main">
        <LeftNav class="leftNav"></LeftNav>
        <ThreeComponents class="threeComponents"></ThreeComponents>
      </div>



    </div>
</template>

<script>
  import TopNav from "../TopNav";
  import LeftNav from "../LeftNav";
  import Top from "@/components/HomePage/Top";
  import BreadCrumbs from "@/components/HomePage/BreadCrumbs";
  import ThreeComponents from "@/components/HomePage/ThreeComponents";
    export default {
        name: "HomePage",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
          TopNav,LeftNav,Top,BreadCrumbs,ThreeComponents
      }
    }
</script>

<style scoped lang="less">
  .main{
    width: 1920px;
    height: 900px;
    position: relative;
    background-color: #eeeeee;
    .leftNav{
      width: 160px;
      height: 728px;
      position: absolute;
      left: 377px;
    }
    .threeComponents{
      width: 990px;
      height: 728px;
      position: absolute;
      right: 373px;
    }
  }
</style>
