import Vuex from 'vuex';
import Vue from "vue";
import goods from "../assets/HomePage/三菱.jpg";
import jianpan1 from "../assets/HomePage/键盘1.jpg";
import jianpan2 from "../assets/HomePage/键盘2.jpg";
import wenjian from "../assets/HomePage/文件收纳夹.jpg";
//使用Vuex注册插件
Vue.use(Vuex);


const store = new Vuex.Store({

  state:{
    //商品列表
    goods: [
      {
        id: 1,
        src: goods,
        counterPrice: 280.0,
        officialPrice: 300.0,
        title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
        sales: 100
      },
      {
        id: 2,
        src: jianpan1,
        counterPrice: 200.0,
        officialPrice: 250.0,
        title: "罗技（Logitech）MK345 键鼠套装 办公用品",
        sales: 999
      },
      {
        id: 3,
        src: jianpan2,
        counterPrice: 240.0,
        officialPrice: 320.0,
        title: "罗技（Logitech）K380 键盘 无线蓝牙键盘 办公键盘",
        sales: 55
      },
      {
        id: 4,
        src: wenjian,
        counterPrice: 89.0,
        officialPrice: 100.0,
        title: "得力(deli)10只55mmA4塑料档案盒 33126蓝色",
        sales: 100
      },
      {
        id: 5,
        src: goods,
        counterPrice: 280.0,
        officialPrice: 300.0,
        title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
        sales: 100
      },
      {
        id: 6,
        src: goods,
        counterPrice: 280.0,
        officialPrice: 300.0,
        title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
        sales: 100
      },
      {
        id: 7,
        src: goods,
        counterPrice: 280.0,
        officialPrice: 300.0,
        title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
        sales: 100
      },
      {
        id: 8,
        src: goods,
        counterPrice: 280.0,
        officialPrice: 300.0,
        title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
        sales: 100
      }
    ],
    //添加到购物车的列表
    added:[],
    brands: [
      { id: 1, title: "新秀丽(Samsonite)" },
      { id: 2, title: "途明(TUMI)" },
      { id: 3, title: "晨光" },
      { id: 4, title: "惠普" },
      { id: 5, title: "齐心" },
      { id: 6, title: "得力" },
      { id: 7, title: "新秀丽(Samsonite)" },
      { id: 8, title: "惠普" },
      { id: 9, title: "途明(TUMI)" },
      { id: 10, title: "晨光" },
      { id: 11, title: "惠普" },
      { id: 12, title: "齐心" }
    ],
    colors: [
      { id: 1, title: "黑色" },
      { id: 2, title: "红色" },
      { id: 3, title: "白色" },
      { id: 4, title: "绿色" }
    ],
    types: [
      { id: 1, title: "中性笔" },
      { id: 2, title: "替芯" },
      { id: 3, title: "记号笔" },
      { id: 4, title: "铅笔" },
      { id: 5, title: "中性笔" },
      { id: 6, title: "替芯" },
      { id: 7, title: "记号笔" },
      { id: 8, title: "铅笔" },
      { id: 9, title: "中性笔" },
      { id: 10, title: "替芯" },
      { id: 11, title: "记号笔" },
      { id: 12, title: "铅笔" }
    ],
  },
  getters: {
    //商品列表
    getGoods: state => {
      return state.goods.map(item => {
        return {
          id: item.id,
          src: item.src,
          counterPrice: item.counterPrice.toFixed(2),
          officialPrice: item.officialPrice.toFixed(2),
          title: item.title,
          sales: item.sales
        }
      })
    },
    //购物车列表
    getCounterGoods: state => {
      return state.added.map(({id, quantity}) => {
        let product = state.goods.find(item => item.id == id);
        return {
          goodsImg: product.goodsImg,
          goodsInfo: product.goodsInfo,
          unitPrice: product.counterPrice,
          quantity,
          totalPrice: (product.unitPrice * quantity)
        }
      })
    },
    //在top组件中显示 计算购物车中商品数量
    getGoodsAmount(state) {
      let amount = 0;
      for (let i = 0; i < state.added.length; i++) {
        amount++;
      }
      return amount;
    },
  },
  mutations:{

    //加入购物车
    ADD_TO_CART( state, {id,goodsImg,goodsInfo,unitPrice}) {
      // console.log(id,goodsImg,goodsInfo,unitPrice);
      let record = state.added.find( item => item.id == id );
      if(!record){
        state.added.push({
          id,
          goodsImg:goodsImg,
          goodsInfo:goodsInfo,
          quantity:1,
          unitPrice:unitPrice
        })
      }else {
        record.quantity++
      }

    },
    //删除购物车内指定的物品
    DELETE( state, product ){
      state.added.forEach( ( item, index ) => {
        if( item.id == product.id ){
          //找到index的下标值
          state.added.splice( index, 1 );
        }
      })
    },
  },
  actions:{
    //加入购物车
    addToCart({ commit },product) {
      commit('ADD_TO_CART',{
        id:product.id,
        goodsImg: product.src,
        goodsInfo: product.title,
        unitPrice:product.counterPrice,
      })
    },
    //删除购物车的指定的商品
    delProduct({commit},product){
      commit('DELETE',product)
    },
  }

});

export default store;


