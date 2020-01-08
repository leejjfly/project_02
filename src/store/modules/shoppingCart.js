import src1 from "../../assets/HomePage/三菱.jpg";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  totalPrice: 0,
  // counterGoods: [
  //   {
  //     id: 1,
  //     goodsImg: src1,
  //     goodsInfo: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944",
  //     unitPrice: 5,
  //     quantity: 100,
  //     totalPrice: null
  //   },
  //   {
  //     id: 2,
  //     goodsImg: src1,
  //     goodsInfo: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944",
  //     unitPrice: 10.0,
  //     quantity: 200,
  //     totalPrice: null
  //   },
  //   {
  //     id: 3,
  //     goodsImg: src1,
  //     goodsInfo: "三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944",
  //     unitPrice: 15,
  //     quantity: 20,
  //     totalPrice: null
  //   }
  // ],
  added:[]
};
const getters = {
  getGoodsAmount(state) {
    let amount = 0;
    for (let i = 0; i < state.added.length; i++) {
      amount++;
    }
    return amount;
  },

  //计算总价
  totalPrice:(state,getters)=>{
    let total = 0;
    getters.getCounterGoods.forEach(item=>{
      total += item.unitPrice * item.quantity;
    })
    return total.toFixed(2);
  }
};
const mutations = {
  // add: function(state, data) {
  //   state.counterGoods[index].quantity = state.counterGoods[index].state.counterGoods = data;
  // },
  getTotalPrice(state,data){
    state.totalPrice=data;
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
  addFun: function(context, data) {
    context.commit("add", data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
