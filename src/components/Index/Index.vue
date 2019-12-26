<template>
    <div id="app">
      <TopNav></TopNav>
      <Top></Top>
      <Nav></Nav>
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
  import Top from "@/components/Index/Top";
  import Nav from "@/components/Index/nav";
  import PersonalInfo from "@/components/Index/PersonalInfo";
    export default {
        name: "Index",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
          TopNav,LeftNav,Top,Nav,PersonalInfo
      }
    }
</script>

<style scoped>

</style>
