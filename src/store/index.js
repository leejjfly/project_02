import Vuex from 'vuex';
import Vue from "vue";
import shoppingCart from './modules/shoppingCart';

import src1 from "../assets/HomePage/三菱.jpg";
import goods from '../assets/HomePage/三菱.jpg';

//使用Vuex注册插件
Vue.use(Vuex);


const store = new Vuex.Store({
  state:{
    userName: sessionStorage.getItem('userName')? '您好,'+sessionStorage.getItem('userName'): '登录' ,
    formData:localStorage.getItem('account')? localStorage.getItem('account') : [] ,
    counterGoods:[
      {
        id:1,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.3,
        quantity:100,
        totalPrice:null
      },
      {
        id:2,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.3,
        quantity:6666,
        totalPrice:null
      },
      {
        id:3,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.3,
        quantity:200,
        totalPrice:null
      },
    ],
    amount:'',
    nonCounterGoods:[
      {
        id:1,
        checkState:'',
        goodsImg:src1,
        goodsInfo:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色) 商品编号:33944',
        unitPrice:10.5,
        quantity:20,
        totalPrice:null
      }
    ],
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
    ],
    goods:[
      {id:1,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:2,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:3,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:4,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:5,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:6,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:7,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100},
      {id:8,src:goods,counterPrice:280.00,officialPrice:300.00,title:'三菱(Uni)0.5mm UB-150直液式耐水性签字笔(红色)',sales:100}
    ]
  },
  getters:{
    getCounterGoods:function (state) {
      return state.counterGoods
    },
    getNonCounterGoods:function (state) {
      return state.nonCounterGoods
    },
    getBrands:function(state){
      return state.brands
    },
    getColors:function (state) {
      return state.colors
    },
    getTypes:function (state) {
      return state.types
    },
    getGoods:function (state) {
      return state.goods
    },
    getUserName(state){
      return state.userName
    },
    getGoodsAmount(state){
      let amount=0 ;
      for(let i=0;i<state.counterGoods;i++){
        amount++;
      }
      return amount;
    }
  },
  mutations:{
    add:function (state,data) {
      state.tableData[index].quantity=state.tableData[index];
     state.tableData=data;
    },
    setUserName(state,userName) {
      sessionStorage.setItem('userName',userName)
    },


  },
  actions:{
    addFun:function (context,data) {
      context.commit('add',data)
    }
  }

});

export default store;


