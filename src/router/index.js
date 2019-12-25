import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import LeftNav from '@/components/LeftNav'
import TopNav from '@/components/TopNav';
import Home from '@/components/Home'
import Index from '@/components/Index'
//使用Vue-Router插件
Vue.use(Router);

const router= new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect:'/login'
    // },
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/leftnav',
      name: 'LeftNav',
      component: LeftNav
    },
    {
      path: '/topnav',
      name: 'TopNav',
      component: TopNav
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
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
