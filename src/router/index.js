import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomePage from "../components/HomePage/HomePage";
import AccountManage from "../components/HomePage/AccountManage";
import Home1 from "../components/HomePage/ThreeComponents";
import UserGroupManage from "../components/HomePage/UserGroupManage";

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

      ]
    }
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
