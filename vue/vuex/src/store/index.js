import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import products from './modules/products'
import cart from './modules/cart'
// Vuex 管理着vue大型项目中的数据流 小型项目不用vuex
// vue项目将分为两部分
// Vue VueRouter 界面构建组件
// Vuex 数据流

export default new Vuex.Store({
    modules:{
        products,
        cart
    }
})
