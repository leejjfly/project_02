import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomePage from "../components/HomePage/HomePage";
import AccountManage from "../components/HomePage/AccountManage";

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
      component:Home,
      // children: [
      //   {
      //     path:'/homepage'
      //   }
      // ]
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      // children:[
      //   {
      //     path:'/homepage/'
      //   }
      // ]
    },
    {
      path: '/accountmanage',
      name: 'AccountManage',
      component: AccountManage
    },
  ]
});
// //挂载路由导航守卫
// router.beforeEach((to,from,next)={
//   if(to.path==='/login') return next();
//   //获取token
//   const tokenStr=window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })
export default router
