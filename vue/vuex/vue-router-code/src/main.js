// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// vue 是一个mvvm 框架
// 生态 Vuerouter Vuex elementUI Axios
import router from './router'
Vue.config.productionTip = false
// 路由管家

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
