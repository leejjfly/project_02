<template>
<div class="messageBox">
  <div class="messagePushTitle">
    <span class="messagePushTitleText">推送消息</span>
    <span class="more">更多</span>
  </div>
  <div class="messagePushMain">
    <div class="messagePushContent" v-for="news in newsList">
      <span class="messagePushContentTitle">{{news.title}}</span>
      <span class="messagePushContentDate">[{{news.date}}]</span>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "MessagePush",
      data(){
        return{
          newsList:[
            {
              title:'有关领先未来后台详解，业务数据分析会议阿克苏',
              date:'11-21'
            },
            {
              title:'有关领先未来后台详解，业务数据分析会议阿克苏',
              date:'11-21'
            },
            {
              title:'有关领先未来后台详解，业务数据分析会议阿克苏',
              date:'11-21'
            },
            {
              title:'有关领先未来后台详解，业务数据分析会议阿克苏',
              date:'11-21'
            },
            {
              title:'有关领先未来后台详解，业务数据分析会议阿克苏',
              date:'11-21'
            },
          ]
        }
      }
    }
</script>

<style scoped lang="less">
 .messageBox{
   background-color: #fff;
   width: 990px;
   height: 267px;
   .messagePushTitle{
     width: 990px;
     height: 50px;
     position: relative;
     .messagePushTitleText{
       display: inline-block;
       width: 70px;
       height: 30px;
       font-size: 16px;
       border-bottom: 3px solid #10C899;
       position: absolute;
       top: 10px;
       margin-left: 20px;
     }
     .more{
        width: 50px;
       height: 30px;
       font-size: 16px;
       position: absolute;
       top: 10px;
       right: 30px;
     }
   }
   .messagePushMain{
     width: 990px;
     height: 217px;
     .messagePushContent{
       width: 990px;
       height: 30px;
       display: flex;
       justify-content: space-between;
       .messagePushContentTitle{
         display: inline-block;
         cursor: pointer;
         width: 700px;
         height: 30px;
         font-size: 14px;
         margin-left: 20px;
       }
       .messagePushContentDate{
         width: 80px;
         height: 30px;
         cursor: pointer;
         font-size: 14px;
         display: inline-block;

       }
     }
   }
 }
</style>
