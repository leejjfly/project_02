<template>
 <div class="goodsBox">
   <div class="counterGoods">
     <span class="counterGoodsTitle">专柜商品库</span>
   </div>
   <div class="goodsSearch">
     <span>商品搜索</span>
     <el-input placeholder="请输入商品名称、品牌或型号" class="el-input">
       <el-button slot="append">
         搜索
       </el-button>
     </el-input>
   </div>
<!--   筛选商品-->
   <div class="bread">
     <el-breadcrumb separator=">">
       <el-breadcrumb-item :to="{ path: '/homepage/goods' }">全部商品</el-breadcrumb-item>
       <el-breadcrumb-item>办公文具</el-breadcrumb-item>
       <el-breadcrumb-item>书写修正工具</el-breadcrumb-item>
       <el-breadcrumb-item>品牌:得力</el-breadcrumb-item>
     </el-breadcrumb>
   </div>
<!--   品牌-->
   <div class="brands">
     <span class="front">品牌:</span>
     <div class="behind">
       <span class="span" v-for="brand in brands" :key="brand.id">{{brand.title}}</span>
     </div>
   </div>
<!--   颜色-->
   <div class="colors">
     <span class="front">颜色:</span>
     <div class="behind">
       <span class="span"  v-for="color in colors" :key="color.id">{{color.title}}</span>
     </div>
   </div>
<!--类型-->
   <div class="types">
     <span class="front">类型:</span>
     <div class="behind">
       <span class="span"  v-for="type in types" :key="type.id">{{type.title}}</span>
     </div>
   </div>
<!--   筛选排序-->
    <div class="orderBy">
<!--      默认排序-->
      <span class="orderByDefault">默认</span>
      <span class="orderBySales">销量</span>
      <span class="orderByPrice">价格</span>
      <div class="upArrow"></div>
      <div class="downArrow"></div>
      <el-input class="lowPrice" placeholder="最低价"></el-input>
      <el-input class="highPrice" placeholder="最高价"></el-input>
      <el-button class="confirm">确定</el-button>
    </div>


 </div>
</template>

<script>
  export default {
    name: "Goods",
    data(){
      return{
        brands:[
          {id:1,title:'新秀丽(Samsonite)'},
          {id:2,title:'途明(TUMI)'},
          {id:3,title:'晨光'},
          {id:4,title:'惠普'},
          {id:5,title:'齐心'},
          {id:6,title:'得力'},
          {id:7,title:'新秀丽(Samsonite)'},
          {id:8,title:'惠普'},
          {id:9,title:'途明(TUMI)'},
          {id:10,title:'晨光'},
          {id:11,title:'惠普'},
          {id:12,title:'齐心'}
        ],
        colors:[
          {id:1,title:'黑色'},
          {id:2,title:'红色'},
          {id:3,title:'白色'},
          {id:4,title:'绿色'},
        ],
        types:[
          {id:1,title:'中性笔'},
          {id:2,title:'替芯'},
          {id:3,title:'记号笔'},
          {id:4,title:'铅笔'},
          {id:5,title:'中性笔'},
          {id:6,title:'替芯'},
          {id:7,title:'记号笔'},
          {id:8,title:'铅笔'},
          {id:9,title:'中性笔'},
          {id:10,title:'替芯'},
          {id:11,title:'记号笔'},
          {id:12,title:'铅笔'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .goodsBox{
    width: 990px;
    height: 1089px;
    background-color: #ffffff;
    .counterGoods {
      width: 990px;
      height: 50px;
      .counterGoodsTitle {
        display: inline-block;
        width: 100px;
        height: 30px;
        margin-left: 20px;
        font-size: 16px;
        border-bottom: 3px solid #10c899;
      }
    }
    .goodsSearch{
      width: 990px;
      height: 50px;
      margin-left: 20px;
      .el-input{
        width: 340px;
        height: 35px;
      }
    }
    .bread{
      height: 30px;
      margin-left: 20px;
    }
    .brands{
      height: 50px;
      display: flex;
      margin-left: 20px;
      .front{
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        width: 45px;
        height: 50px;
      }
      .behind{
        display: inline-block;
        width: 945px;
        height: 50px;
        .span{
          display: inline-block;
          height: 20px;
          width: 135px;
          font-size: 14px;
          color: #2c2c2c;
        }
      }
    }
    .colors{
      height: 50px;
      display: flex;
      margin-left: 20px;
      .front{
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        width: 45px;
        height: 50px;
      }
      .behind{
        display: inline-block;
        width: 945px;
        height: 50px;
        .span{
          display: inline-block;
          height: 20px;
          width: 70px;
          font-size: 14px;
          color: #2c2c2c;
        }
      }
    }
    .types{
      height: 50px;
      display: flex;
      margin-left: 20px;
      .front{
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        width: 45px;
        height: 50px;
      }
      .behind{
        display: inline-block;
        width: 945px;
        height: 50px;
        .span{
          display: inline-block;
          height: 20px;
          width: 70px;
          font-size: 14px;
          color: #2c2c2c;
        }
      }
    }
    .orderBy{
      height: 80px;
      background-color: #10C899;
      .orderByDefault{

      }
      .orderBySales{

      }
      .orderByPrice{

      }
      .upArrow{
        display: inline-block;
        width: 0;
        height: 0;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 8px solid #dfdbdb;
      }
      .downArrow{
        display: inline-block;
        width: 0;
        height: 0;
        border-left:5px solid transparent;
        border-right: 5px solid transparent;
        border-top:8px solid #dfdbdb;
      }
      .lowPrice{
        width: 80px;
        height: 24px;
      }
      .highPrice{
        width: 80px;
        height: 24px;
      }
      .confirm{
        width: 60px;
        height: 40px;
      }
    }
  }
</style>
