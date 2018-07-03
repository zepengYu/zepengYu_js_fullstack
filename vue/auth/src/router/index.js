import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import auth from '@/auth.js'
Vue.use(Router)

const requireAuth = (to, from, next) =>{
  console.log(to, from);
  // 用户有登录权限？
  if (!auth.loggedIn()) {
    next({
      path:'/login',
      query:{
        redirect: to.fullPath
      }
    })
  }
  next();
}

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path:'/dashboard',
      component: Dashboard,
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   // to 要去的地方
      //   // from 从哪里来
      //   // next 接下来怎么？
      // }
      beforeEnter:requireAuth
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
