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
       <span class="span"  v-for="(brand,index) in this.$store.state.brands" :key="brand.id">{{brand.title}}</span>
     </div>
   </div>
<!--   颜色-->
   <div class="colors">
     <span class="front">颜色:</span>
     <div class="behind">
       <span class="span"  v-for="(color,index) in this.$store.state.colors" :key="color.id">{{color.title}}</span>
     </div>
   </div>
<!--类型-->
   <div class="types">
     <span class="front">类型:</span>
     <div class="behind">
       <span class="span" v-for="(type,index) in this.$store.state.types" :key="type.id">{{type.title}}</span>
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
<!--  商品-->
   <div class="goodsLibrary">
     <div class="goods"  v-for="(good,index) in goods" :key="getGoods.id">
       <img class="goodsImg" :src="good.src" alt="">
       <div class="price">
         <span class="counterPrice">￥{{good.counterPrice}}</span>
         <span class="counter">专柜价</span>
         <span class="officialPrice">官网价：</span>
         <span class="official">￥{{good.officialPrice}}</span>
       </div>
       <div class="title">
         {{good.title}}
       </div>
       <div class="bottom">
         <span class="sales">销量：{{good.sales}}</span>
         <div class="favorite">
           <img  class="img" src="../../assets/HomePage/收藏.png" alt="">
           <span class="addToFavorites">收藏</span>
         </div>
         <div class="shop">
           <img class="img" src="../../assets/HomePage/购物车.png" alt="">
           <span class="addToShoppingCart" @click="addToCart(good)">加入购物车</span>
         </div>

       </div>
     </div>
   </div>
   <el-pagination class="el-pagination"
                  @current-change="handleCurrentChange"
                  @size-change="handleSizeChange"
                  :page-size="pageInfo.pageSize"
                  :page-sizes="[4, 8, 16, 32]"
                  prev-text="上一页"
                  next-text="下一页"
                  :current-page.sync="pageInfo.currentPage"
                  layout="total, sizes,prev, pager, next,jumper"
                  :total="pageInfo.total">
   </el-pagination>
 </div>
</template>

<script>


  import { mapState , mapGetters ,mapActions} from 'vuex';
  export default {
    name: "Goods",
    computed: {
      ...mapState(['brands','colors','types']),
      ...mapGetters(['getGoods'])
    },
    methods:{
      ...mapActions(['addToCart']),
      handleCurrentChange(currentPage) {
        this.pageInfo.currentPage = currentPage;
        this.goods = this.getGoods.slice((this.pageInfo.currentPage - 1) * this.pageInfo.pageSize, this.pageInfo.currentPage * this.pageInfo.pageSize);
        this.pageInfo.total = this.getGoods.length;
      },
      handleSizeChange(value) {
        this.pageInfo.pageSize = value;
        this.goods = this.getGoods.slice((this.pageInfo.currentPage - 1) * this.pageInfo.pageSize, this.pageInfo.currentPage * this.pageInfo.pageSize);
        this.pageInfo.total = this.getGoods.length;
      },
    },
    data(){
      return{
        pageInfo:{
          pageSize:8,
          currentPage:1,
          total:0,
        },
        goods:[]
      }
    },
    created() {
      this.pageInfo.total=this.getGoods.length;
      if (this.pageInfo.pageSize <= this.pageInfo.total) {
        for (let i = 0; i < this.pageInfo.pageSize; i++) {
          this.goods.push(this.getGoods[i]);
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .goodsBox{
    width: 990px;
    height: 1040px;
    background-color: #ffffff;
    position: relative;
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
      height: 40px;
      position: relative;
      .orderByDefault{
        font-size: 14px;
        color: #2c2c2c;
        margin-left: 20px;
      }
      .orderBySales{
        font-size: 14px;
        color: #2c2c2c;
        margin-left: 20px;
      }
      .orderByPrice{
        font-size: 14px;
        color: #2c2c2c;
        margin-left: 20px;
      }
      .upArrow{
        display: inline-block;
        width: 0;
        height: 0;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 8px solid #dfdbdb;
        position: absolute;
        top: 10px;
      }
      .downArrow{
        display: inline-block;
        width: 0;
        height: 0;
        border-left:5px solid transparent;
        border-right: 5px solid transparent;
        border-top:8px solid #dfdbdb;
        position: absolute;
        top: 20px;
      }
      .lowPrice{
        width: 80px;
        height: 24px;
        margin-left: 20px;
      }
      .highPrice{
        width: 80px;
        height: 24px;
        margin-left: 20px;
      }
      .confirm{
        width: 80px;
        height: 40px;
        margin-left: 20px;
      }
    }
    .goodsLibrary{
      width: 990px;
      height: 500px;
      margin-top: 20px;
      .goods{
        width: 240px;
        height: 270px;
        display: inline-block;
        margin-top: 20px;
        .goodsImg{
          width: 220px;
          height: 170px;
          margin-left: 10px;
        }
        .price{
          width: 240px;
          height: 30px;
          .counterPrice{
            font-size: 18px;
            color: #FE5E41;
          }
          .counter{
            font-size: 12px;
          }
          .official{
            font-size: 12px;
            color: #9a9a9a;
          }
          .officialPrice{
            font-size: 12px;
            color: #9a9a9a;
          }
        }
        .title{
          width: 205px;
          height: 40px;
          font-size: 14px;
        }
        .bottom{
          width: 240px;
          height: 32px;
          .sales{
            font-size: 12px;
            display: inline-block;
            width: 70px;
          }

          .favorite{
            display: inline-block;
            position: relative;
            width: 80px;
            .img{
              width: 20px;
              height: 20px;
              position: absolute;
              bottom: 0px;
            }
            .addToFavorites{
              font-size: 12px;
              margin-left: 20px;

            }
          }
          .shop{
            display: inline-block;
            position: relative;
            width: 80px;
            .img{
              width: 20px;
              height: 20px;
              position: absolute;
              bottom: 0px;
              left: -10px;
            }
            .addToShoppingCart{
              font-size: 12px;
              margin-left: 10px;
              cursor: pointer;
            }
          }

        }
      }
    }
    .el-pagination{
      position: absolute;
      bottom: 40px;
      right: 20px;
    }
  }
</style>
