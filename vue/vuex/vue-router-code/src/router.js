import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Vue from 'vue'
import Home from '@/views/Home'
import Foo from '@/views/Foo'

const router = new VueRouter({
    mode:'history',
    routes: [
      {
        path:'/',
        component: Home
      },{
        path:'/foo',
        component: Foo
      }
    ]
})

export default router