import Vue from "vue";
import Vuex from "vuex";

import goods from "../../assets/HomePage/三菱.jpg";

Vue.use(Vuex);

const state = {
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
  // goods: [
  //   {
  //     id: 1,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 2,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 3,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 4,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 5,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 6,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 7,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   },
  //   {
  //     id: 8,
  //     src: goods,
  //     counterPrice: 280.0,
  //     officialPrice: 300.0,
  //     title: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)",
  //     sales: 100
  //   }
  // ],
  // added:[]
};
const getters = {

};
const mutations = {
  //加入购物车
  ADD_GOODS:function (state,{id}) {
   let record = state.added.find(item => item.id==id);
   if(!record){
     state.added.push({
       id,
       //购物车里的商品数量
       num:1
     })
   }else{
     record.num++
   }
  },
  //购物车商品数量改变
  NUM_CHANGE(state,{id,value}){
    state.added.forEach((item,index)=>{
      if(item.id==id){
        item.quantity=value;
      }
    })
  }
};
const actions = {
  //加入购物车
  addGoods({commit},product){
    commit('ADD_GOODS',{
      id:product.id
    })
  },
  //商品数量变化
  numChange({commit},data){
    commit('NUM_CHANGE',{
      id:data.id,
      value:data.value
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};