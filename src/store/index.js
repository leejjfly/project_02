import Vuex from 'vuex';
import Vue from "vue";
//import ShoppingCart from "../components/ShoppingCart";
// import * as actions from './actions';
// import * as getters from './getters';
// import state from "./state";
// import mutations from './mutations';
//import createLogger from "vuex/dist/logger";
import src1 from "../assets/HomePage/三菱.jpg";

//使用Vuex注册插件
Vue.use(Vuex);

//  const state = {
//   shoppingCart:[
//     {
//       checked:true,
//       checkState:'',
//       goodsImg:src1,
//       goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
//       unitPrice:'10.3',
//       quantity:100,
//       totalPrice:parseFloat(this.unitPrice)*parseInt(this.quantity)
//     },
//
//   ]
// };

const store = new Vuex.Store({
  state:{
    tableData:[
      {
        checked:true,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.3,
        quantity:100,
        totalPrice:null
      },
      {
        checked:true,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.3,
        quantity:6666,
        totalPrice:null
      },
    ],
  },
  getters:{
    getAdd:function (state) {
      return state.tableData
    }
  },
  mutations:{
    add:function (state,data) {
      state.tableData[index].quantity=state.tableData[index];
     state.tableData=data;
    }
  },
  actions:{
    addFun:function (context,data) {
      context.commit('add',data)
    }
  }

});

export default store;


