<template>
    <div>
      <PersonalInfo class="personalInfo"></PersonalInfo>
      <OrderPreview class="orderPreview"></OrderPreview>
      <MessagePush class="messagePush"></MessagePush>
    </div>
</template>

<script>
  import PersonalInfo from "./PersonalInfo";
  import OrderPreview from "./OrderPreview";
  import MessagePush from "./MessagePush";
    export default {
      name: "ThreeComponents",
      data(){
          return{

          }
      },
      components:{
        PersonalInfo,OrderPreview,MessagePush
      }
    }
</script>

<style scoped lang="less">
  div{
    width: 990px;
    height: 728px;
    background-color: #eeeeee;
    .personalInfo{
      width: 990px;
      height: 124px;
    }
    .orderPreview{
      margin-top: 20px;
    }
    .messagePush{
      margin-top: 20px;
    }
  }
</style>
