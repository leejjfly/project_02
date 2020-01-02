<template>
  <div class="shoppingCartBox">
    <TopNav></TopNav>
    <div class="icon">
      <img src="../assets/HomePage/伊利.png" class="yili" alt="">
      <span class="yl" >中国伊利集团企业采购专柜</span>
      <router-link to="/goods">
        <div class="button">
          <span class="buttonText">返回继续购物</span>
        </div>
      </router-link>
    </div>
    <div class="shoppingCart">
      <el-table
        :header-cell-style="{background:'#eee',textAlign:'center'}" :cell-style="{textAlign:'center'}"
        :data="$store.getters.getAdd"
        height="560"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="80"
          label="全选"
        >

        </el-table-column>
        <el-table-column
          prop="goodsInfo"
          label="商品信息"
          width="440">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.goodsImg" alt="">
            <span> {{scope.row.goodsInfo}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="unitPrice"
          label="单价(元)"
          width="170">
          <template slot-scope="scope">
            <span>￥</span>
            <span>{{scope.row.unitPrice}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="数量"
        width="180">
          <template slot-scope="scope">
            <el-input-number  size="mini" v-model="scope.row.quantity" @change="handleChange" :min="1" :max="10000" label="数量"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          prop="totalPrice"
          label="小计(元)"
        width="200">
          <template slot-scope="scope">
            <span>￥</span>
            <span>{{(scope.row.unitPrice*scope.row.quantity).toFixed(2)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
        width="100">
          <template slot-scope="scope">
            <el-button type="text">加入收藏</el-button>
            <el-button type="text" @click="del(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>


</template>

<script>
  import TopNav from "./TopNav";
  import src1 from "../assets/HomePage/三菱.jpg";
  import {mapGetters} from 'vuex';
  import {mapMutations} from 'vuex';
  export default {
    name: "ShoppingCart",
    data(){
      return{
        // tableData:[
        //   {
        //     checked:true,
        //     checkState:'',
        //     goodsImg:src1,
        //     goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        //     unitPrice:10.3,
        //     quantity:100,
        //     totalPrice:null
        //   },
        //   {
        //     checked:true,
        //     checkState:'',
        //     goodsImg:src1,
        //     goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        //     unitPrice:10.3,
        //     quantity:100,
        //     totalPrice:null
        //   },
        // ]
      }
    },
    components:{
      TopNav
    },

    methods:{
      handleChange(value){
        console.log(value);
      },
      del(index){
        this.tableData=this.tableData.splice(index,1);
        this.$store.commit('add',this.tableData)
      },
      // this.setShoppingCart(){
      //
      // }
      // ...mapMutations({
      //   setShoppingCart:'setShoppingCart'
      // })
    }
  }
</script>

<style scoped lang="less">
 .shoppingCartBox{
   width: 1920px;
   height: 1048px;
   .icon{
     width: 1920px;
     height: 80px;
     position: relative;
     .yili{
       width: 60px;
       height: 60px;
       margin-left: 376px;
       margin-top: 10px;
     }
     .yl{
       font-size: 14px;
       width: 84px;
       height: 40px;
       display: inline-block;
       position: absolute;
       top: 20px;
       margin-left: 21px;
     }
     .button{
       width:90px;
       height: 30px;
       border: 1px #eee solid;
       border-radius: 3px;
       position: absolute;
       top: 25px;
       right: 378px;
       .buttonText{
         font-size: 14px;
         color: #2c2c2c;
       }
     }
   }
   .shoppingCart{
     width: 1170px;
     height: 560px;
     background-color: #10c899;
     margin: 0 auto;
     .img{
       width: 80px;
       height: 80px;
     }
   }

 }
</style>
