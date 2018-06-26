# juejin

vue-cli 
文章列表模块
  index.vue #root
  数据放在最外层的组件  ？axios 请求easy-mock
  npm install axios import axios 
  data here 数据传输理论是数据归最外层的组件，将其传给孩子
  
  artciles: []  生命周期mounted easy-mock数据
  articles  components
    props artciles v-for="(key, i) in articles"
    <article v-for="(key, i) in articles" />
    ？ data  no
    article  components
    prop  article {{title}}   {{like-num}}.......

    stylus 最简单的样式

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



