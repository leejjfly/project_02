<template>
  <div class="breadBox">
    <el-breadcrumb separator=">" class="el-breadcrumb">
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }">
        {{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
    export default {
        name: "BreadCrumbs",
      data(){
          return{
            breadList:[]
          }
      },
      watch:{
          $route(){
            this.getBreadCrumb();
          }
      },
      methods:{
          // isHomepage(route){
          //   return route.name === 'homepage'
          // },
        getBreadCrumb(){
          let matched = this.$route.matched;
          // if(!this.isHomepage(matched[0])){
          //   matched = [{path:'/homepage',meta:{title:'企业中心'}}].concat(matched);
          // }
          this.breadList=matched;
        }
      },
      created() {
          this.getBreadCrumb();
      }
    }
</script>

<style scoped lang="less">
  .breadBox{
    background-color: #f6f6f6;
    width: 1920px;
    height: 30px;
    position: relative;
    .el-breadcrumb{
      width: 990px;
      height: 30px;
      position: absolute;
      margin-left: 376px;
      font-size: 14px;
      margin-top: 10px;
    }
  }


</style>
