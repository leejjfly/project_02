import Vue from 'vue';

import Router from 'vue-router';
import Home from '@/components/Home';
import HomePage from "../components/HomePage/HomePage";
import AccountManage from "../components/HomePage/AccountManage";
import Home1 from "../components/HomePage/ThreeComponents";
import UserGroupManage from "../components/HomePage/UserGroupManage";
import ShoppingCart from "../components/ShoppingCart";
import Goods from "../components/HomePage/Goods";

import test from "../components/test";

//使用Vue-Router插件
Vue.use(Router);



//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

const router= new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      redirect:'/homepage/home1',
      children:[
        {
          path:'/homepage/accountmanage',
          name:'AccountManage',
          component:AccountManage
        },
        {
          path:'/homepage/home1',
          name:'Home1',
          component:Home1
        },
        {
          path:'/homepage/usergroupmanage',
          name:'UserGroupManage',
          component:UserGroupManage
        },
        {
          path:'/homepage/accountmanage',
          name:'AccountManage',
          component:AccountManage
        },
        {
          path:'/homepage/goods',
          name:'Goods',
          component:Goods
        },
      ]
    },
    {
      path:'/shoppingcart',
      name:'ShoppingCart',
      component:ShoppingCart
    },

    {
      path:'/test',
      component:test
    }
  ]
});
// //挂载路由导航守卫
// 路由守卫
// router.beforeEach((to,from,next)=>{
//     if (window.localStorage.getItem('user')) {
//       next();
//     }else{
//       next({
//         path:"/login",
//         query:{
//           redirect:to.fullPath
//         }
//       });
//     }
//
// });

export default router
