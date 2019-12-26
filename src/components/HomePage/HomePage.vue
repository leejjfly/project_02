<template>
    <div id="app">
      <TopNav></TopNav>
      <Top></Top>
      <BreadCrumbs></BreadCrumbs>
      <div style="width: 1920px;display: flex;justify-content: space-between;padding: 0 337px;background-color:#eeeeee;">
        <LeftNav style="width: 160px;">
        </LeftNav>
        <PersonalInfo></PersonalInfo>
      </div>



    </div>
</template>

<script>
  import TopNav from "../TopNav";
  import LeftNav from "../LeftNav";
  import Top from "@/components/HomePage/Top";
  import BreadCrumbs from "@/components/HomePage/BreadCrumbs";
  import PersonalInfo from "@/components/HomePage/PersonalInfo";
    export default {
        name: "HomePage",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
          TopNav,LeftNav,Top,BreadCrumbs,PersonalInfo
      }
    }
</script>

<style scoped>

</style>
