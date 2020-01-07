import Vuex from 'vuex';
import Vue from "vue";
import shoppingCart from './modules/shoppingCart';
import goodsLibrary from './modules/goodsLibrary';

//使用Vuex注册插件
Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    shoppingCart,
    goodsLibrary,
  }

});

export default store;


