const Promise = require('./promise.js');

// 将要执行的耗时任务封装在executor，实例化时就开始执行。
// resolve 成功
// reject 错误
// 形参 类型 是函数
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello');
    },1000);
    // reject('没人')
});

p.then((data) => {
    console.log(data);
}, (err) =>{
    console.log(err);
})