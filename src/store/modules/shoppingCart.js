
import src1 from "../../assets/HomePage/三菱.jpg";
import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);


// const state = {
//   shoppingCart:[
//         {
//           checked:true,
//           checkState:'',
//           goodsImg:src1,
//           goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
//           unitPrice:'10.3',
//           quantity:100,
//           totalPrice:parseFloat(this.unitPrice)*parseInt(this.quantity)
//         },
//   ]
// };
//
// const getters = {
//
// };
//
// const actions = {
//
// };
//
// const mutations = {
//
// };
//
// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }

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
      state.tableData[index].quantity=state.tableData[index].
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
