虚拟DOM ? VNode Virtual DOM
mvvm 封装了dom层
dom 太耗内存
vnode + diff 算法来解决
jsx 语法
用 js 对象来描述html结构

JSX 背后隐含着VNode 的真相
React.createElement(
    h1 第一个参数，document.createElement()
    attributes 第二个参数 ele.setAttribute(key, val)
    children 第三个参数
        文本节点 textnode
        node 递归一下
)

虚拟DOM 描述 JSON
<h1 className="title">标题<span>副标题</span></h1>
VNode = {
    tag: "h1",
    atts: {
        class: "title"
    },
    children: [
        '标题',
        递归 VNode...
    ]
}