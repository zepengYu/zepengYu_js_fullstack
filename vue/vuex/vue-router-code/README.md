Vue 用于开发SPA，路由接管一切

页面/views 跟 route url 相匹配

router-link 取代 a VUeRouter提供的组件
Vue.use(VueRouter提供的组件) 全局

route 前端路由区分由ngnix apach 等配置的后端路由
前端路由解决的是SPA
url 切换 页面不换刷新
history API pushstate() onPopState() 移除之前的组件，更新新的组件
他的格式和传统的后端url一样 /foo
缺点：兼容性
二 hash 模式
在url 后面加锚点，ie8以后就不会刷新页面了，同样可以得到事件
同一个页面，不同的状态(对应url)