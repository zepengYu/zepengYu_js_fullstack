import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import home from '@/page/home'
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')
// lazyload 用时再引入 不用是不引入

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path:'/login',
      component:login,
      meta:{
        keepalive: true
      }
    },
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
