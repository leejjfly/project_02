<template>
  <div class="shoppingCartBox">
    <TopNav></TopNav>
    <div class="icon">
      <img src="../assets/HomePage/伊利.png" class="yili" alt="">
      <span class="yl" >中国伊利集团企业采购专柜</span>
      <router-link to="/homepage/goods">
        <div class="button">
          <span class="buttonText">返回继续购物</span>
        </div>
      </router-link>
    </div>
    <div class="shoppingCart">
      <p v-if="!$store.state.shoppingCart.counterGoods.length">购物车空空如也!</p>
<!--      专柜商品-->
      <el-table
      :header-cell-style="{background:'#eee',textAlign:'center'}" :cell-style="{textAlign:'center'}"
      :data="$store.state.shoppingCart.counterGoods"
      @selection-change="handleSelectionChange"

      style="width: 100%">
      <el-table-column
        type="selection"
        width="80"
        label="全选">
      </el-table-column>

      <el-table-column
        prop="goodsInfo"
        label="商品信息"
        class="goodsInfo">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.goodsImg" alt="">
          <span class="goodsText"> {{scope.row.goodsInfo}}</span>
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
          <el-input-number  size="mini" v-model="scope.row.quantity" @change="handleChange(scope.row)" :min="1" :max="10000" label="数量"></el-input-number>
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
          <el-button type="text" class="addToFavorites">加入收藏</el-button>
          <el-button type="text" @click="del(scope.$index)" class="del">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--      非专柜商品-->
<!--      <el-table-->
<!--        :data="$store.getters.getNonCounterGoods"-->
<!--        :cell-style="{textAlign:'center'}"-->
<!--        height="310"-->
<!--        style="width: 100%">-->
<!--        <el-table-column-->
<!--          width="80">-->
<!--          <template>-->
<!--            <el-checkbox></el-checkbox>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        <el-table-column-->
<!--          prop="goodsInfo"-->
<!--          class="goodsInfo">-->
<!--          <template slot="header">-->
<!--            以下为非专柜商品-->
<!--          </template>-->
<!--          <template slot-scope="scope">-->
<!--            <img class="img" :src="scope.row.goodsImg" alt="">-->
<!--            <span class="goodsText"> {{scope.row.goodsInfo}}</span>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        <el-table-column-->
<!--          prop="unitPrice"-->
<!--          width="170">-->
<!--          <template slot-scope="scope">-->
<!--            <span>￥</span>-->
<!--            <span>{{scope.row.unitPrice}}</span>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        <el-table-column-->
<!--          prop="quantity"-->
<!--          width="180">-->
<!--          <template slot-scope="scope">-->
<!--            <el-input-number  size="mini" v-model="scope.row.quantity" @change="handleChange" :min="1" :max="10000" label="数量"></el-input-number>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        <el-table-column-->
<!--          prop="totalPrice"-->
<!--          width="200">-->
<!--          <template slot-scope="scope">-->
<!--            <span>￥</span>-->
<!--            <span>{{(scope.row.unitPrice*scope.row.quantity).toFixed(2)}}</span>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--        <el-table-column-->
<!--          prop="operation"-->
<!--          width="100">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button type="text" class="addToFavorites">加入收藏</el-button>-->
<!--            <el-button type="text" @click="del(scope.$index)" class="del">删除</el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
    </div>

<!--    购物车底部-->
    <div class="shoppingCartBottom">
      <el-checkbox class="check">全选</el-checkbox>
      <span class="del">删除选中的商品</span>
      <span class="exportInfo">导出商品信息</span>
      <span class="selected">已选<span class="num">{{selectedRow}}</span>件商品</span>
      <span class="totalPrice">总价:</span>
      <span class="num totalPriceNum">￥{{sum.toFixed(2)}}</span>
      <el-button class="submitOrder">提交订单</el-button>
    </div>


    <!--  推荐商品位置-->
    <div class="guessYourFavorite">
      <p>您可能还需要</p>
      <div class="guess">

      </div>
    </div>

<!--    footer底部栏位置-->
    <div class="footer">
      <div class="enterpriseInfo">
        当前站点:北京
        当前站点联系电话:010-66123123 400--888-1123
        当前站点地址:(总部)北京市朝阳区大羊坊路85号新华国际广场A座11层
        客服热线:400-888-1123 010-66123123
        <br/>
        工作时间:周一至周五 09:00-18:00
        外部投诉/内部投诉:13366012315 13366012315@66123123.com
        廉政举报:13366212388 13366012315@66123123.com
        经营许可证编号:B2-20180949
        <br/>
        食品经营许可证编号:JY1101172150475
        京ICP备08001160号-10
        京公网安备 11010502037312号
        Copyright @领先未来 2008-2019 All Rights Reserved
      </div>
    </div>
  </div>



</template>

<script>
  import { mapMutations,mapState,mapGetters} from 'vuex';
  import TopNav from "./TopNav";
  export default {
    name: "ShoppingCart",
    data(){
      return{
        sum:0,
        selectedRow:0,
        rowPrice:0,
      }
    },
    components:{
      TopNav
    },
    computed: {
      ...mapState(['counterGoods','totalPrice']),

    },
    methods:{
      ...mapMutations(['setTotalPrice','getTotalPrice']),
      handleSelectionChange:function(val) {
        this.multipleSelection = val;//相当于选中了哪一行或者哪几行
        this.sum=0;
        this.selectedRow=1;
        for (let i = 0; i < this.multipleSelection.length; i++) {
          this.selectedRow++;
          this.sum+= this.multipleSelection[i].unitPrice * this.multipleSelection[i].quantity;
        }
         this.$store.commit('getTotalPrice',this.sum);
      },
      //商品数量改变
      // handleChange(cur){
      //   if(!this.multipleSelection.length){
      //     return
      //   }else{
      //     this.sum=0;
      //     for (let i = 0; i < this.multipleSelection.length; i++) {
      //       this.sum+= this.multipleSelection[i].unitPrice * cur;
      //     }
      //     console.log(this.sum);
      //   }
      //
      // },

      handleChange(data) {
        console.log(data);
        this.sum=0;
        for(let i=0;i<this.multipleSelection.length;i++){
          this.sum+=data.quantity*data.unitPrice;
        }
        console.log(this.sum);
      },
      //删除购物车里所选中的物品
      del(index){
        this.tableData=this.tableData.splice(index,1);
        this.$store.commit('add',this.tableData)
      },



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
     height: 620px;
     margin: 0 auto;
     .img{
       width: 80px;
       height: 80px;
     }
     /*.goodsInfo{*/
     /*  width: 440px;*/
     /*  .goodsText{*/
     /*    display: inline-block;*/
     /*    width: 360px;*/
     /*  }*/
     /*}*/
     .addToFavorites{
       color: #10C899;
     }
     .del{
       color: #2c2c2c;
     }
   }
   .shoppingCartBottom{
     width: 1170px;
     height: 45px;
     background-color: #eeeeee;
     margin: 0 auto;
     position: relative;
     .check{
       margin-left: 32px;
       margin-top: 10px;
     }
     .del{
       font-size: 14px;
       display: inline-block;
       position: absolute;
       top: 10px;
       left: 100px;
       cursor: pointer;
     }
     .exportInfo{
       font-size: 14px;
       display: inline-block;
       position: absolute;
       top: 10px;
       left: 220px;
       cursor: pointer;
     }
     .selected{
       font-size: 14px;
       display: inline-block;
       position: absolute;
       right: 270px;
       top: 10px;
     }
     .num{
       color: #FE5E41;
     }
     .totalPrice{
       font-size: 14px;
       display: inline-block;
       position: absolute;
       right: 220px;
       top: 10px;
     }
     .totalPriceNum{
       font-size: 14px;
       display: inline-block;
       position: absolute;
       right: 150px;
       top: 10px;
     }
     .submitOrder{
       width: 110px;
       height: 45px;
       background-color: #ff9914;
       display: inline-block;
       color: #fff;
       position: absolute;
       right: 0px;
     }

   }
   .guessYourFavorite{
     width: 1170px;
     height: 150px;
     margin: 0 auto;
     .guess{
       border: 1px solid #eeeeee;
       width: 160px;
       height: 100px;
     }
   }
   .footer{
     width: 1920px;
     height: 120px;
     background-color: #eeeeee;
     .enterpriseInfo{
       width: 1170px;
       height: 120px;
       margin: 0 auto;
       font-size: 12px;
     }
   }

 }
</style>
