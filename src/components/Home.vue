<template>
  <div id="app">
    <TopNav class="navBox"></TopNav>
    <Login></Login>
  </div>
</template>

<script>
  import TopNav from '@/components/TopNav.vue';
  import Login from '@/components/Login.vue';
    export default {
        name: "Home",
       data(){
          return {

          }
      },
      methods:{

      },
      components:{
          TopNav,Login
      }
    }
</script>

<style scoped lang="less">

</style>

