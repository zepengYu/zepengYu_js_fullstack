1. jsx(react-jsx-plugin) -> vnode(createElement) -> DOM(render)

2. Component(render的第三种方式，react-jsx vnode.tag -> function Counter ) -> 标签化组件 ->Counter(exteds) -> Component类 -> render(jsx) -> reactDOM.render()

3. 响应式setState() 为了达到DOM更新，将整个DOM片段都替换掉
    a. 新生成整个的组件DOM树，重新挂载 100行DOM html
    b. 只将setState关联的那一段DOM，在原DOM的基础上做一下修改，将修改反映到DOM上 1行 
n:1 html树，DOM开销是一般计算开销的100-1000倍 重绘，replaceChild
重排 

- React DOM diff 算法<br>
需求是：减少DOM操作<br>
setState 对应的DOM 部分<br>
setState 返回一个新的vnode -> 跟旧的DOM 对比<br>
将新的内存(虚拟) DOM 旧的DOM 对比<br>
都是一棵树，采用算法，就可以比较出差异点，在相差的地方，进行真实DOM的操作