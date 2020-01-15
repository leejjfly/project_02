import Vue from 'vue';

import Router from 'vue-router';
import Home from '@/components/Home';
import HomePage from "../components/HomePage/HomePage";
import AccountManage from "../components/HomePage/AccountManage";
import Home1 from "../components/HomePage/ThreeComponents";
import UserGroupManage from "../components/HomePage/UserGroupManage";
import ShoppingCart from "../components/ShoppingCart";
import Goods from "../components/HomePage/Goods";
import Error from "../components/HomePage/error";
import Blank from "../components/HomePage/blank";

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
      path:'/home',
      redirect:'/',
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      redirect:'/homepage/home1',
      meta:{title:'企业中心'},
      children:[
        {
          path:'/homepage/error',
          name:'Error',
          component:Error,
          meta:{title:'未完成的页面'},
        },
        {
          path:'/homepage/home1',
          name:'Home1',
          component:Home1,
          meta:{title:'首页'},
        },
        {
          path:'/homepage/procurement',
          name:'officeProcurement',
          component:Blank,
          meta:{title:'办公采购'},
          children:[
            {
              path:'/procurement/goods',
              name:'Goods',
              component:Goods,
              meta:{title:'专柜商品库'},
            }
          ]
        },
        {
          path:'/managementcenter',
          name:'managementCenter',
          component:Blank,
          meta:{title:'管理中心'},
          children:[
            {
              path:'/managementcenter/usergroupmanage',
              name:'UserGroupManage',
              component:UserGroupManage,
              meta:{title:'用户组管理'},
            },
            {
              path:'/managementcenter/accountmanage',
              name:'AccountManage',
              component:AccountManage,
              meta:{title:'账号管理'},
            },
          ]
        }
      ]
    },
    {
      path:'/shoppingcart',
      name:'ShoppingCart',
      component:ShoppingCart
    },
  ]
});
// //挂载路由导航守卫
// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/') return next();
  const token = window.sessionStorage.getItem('username');
  if(!token)
    return next('/home');
  next();
});

export default router
