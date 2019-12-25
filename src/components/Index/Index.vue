<template>
    <div id="app">
      <TopNav></TopNav>
      <LeftNav></LeftNav>
    </div>
</template>

<script>
  import TopNav from "../TopNav";
  import LeftNav from "../LeftNav";
    export default {
        name: "Index",
      data(){
          return{

          }
      },
      methods:{

      },
      components:{
          TopNav,LeftNav
      }
    }
</script>

<style scoped>

</style>
