网站有网页构成，超链接
web app mobile native app(ios,android)

多页应用 很多页面 会跳转 重新刷新页面
缺点：
- 用户体验差，每次点链接，都要等待http请求及响应，整个页面刷新，页面白一下，如果传输时间大于0.5s会看到明显的白屏。
- 相同的html片段重复下载

1. preventDeafult a
2. href attribute
3. jquery ajax 动态的得到html内容
4. p content img src 
    $('').conten()
    $('').src('')

SPA Single Page Application
单页面应用

- 页面的状态 可以对应路由
SPA 解决用户体验问题，但带来了一个极其严重的问题 浏览记录没有了

history
如何为每个状态改变，（路由状态），产生一个(路由) 并且生成一个浏览历史记录
让SPA的访问，更像传统的请求，location 浏览器地址栏上的操作可以使用了
如何主动去设置 history

一个页面对应多个状态，每个状态都会有一个路由 route (地址，state数据)，又会用来对应一个组件
vue 单页面开发 由route 响应 匹配相应的组件显示，在一直组件化的过程