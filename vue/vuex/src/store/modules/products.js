import shop from '../../api/shop'

// Store 里的一间库房 modules
// 搬运 actions 动作
// state 状态数据 
// getters 获取状态的get方法
// mutations 改变 会计 记账

const state ={
    all:[]
}

const getters = {}

const actions = {
    getAllProducts({ commit }){
        console.log('a');
        shop.getProducts(products => {
            commit('setProducts', products)
            console.log('b')
        })
    },
    
}
const mutations = {
    setProducts(state, products){
        console.log('c')
        state.all = products
    },
    decrementProductInventory(state, { id }){
        const product = state.all.find(product => product.id === id);
        product.inventory--
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}