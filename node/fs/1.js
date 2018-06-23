// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;

// 异步的
// data = fs.readFile('./f1.txt', 'utf8', (err,data) => {
//     console.log('真正的读取完成');
//     console.log('文件内容'+ data);
// });
// console.log('读取完成');

// 用promise 同步
// const p = new Promise((resolve,reject) =>{
//     data = fs.readFile('./f1.txt', 'utf8', (err,data) => {
//         console.log('真正的读取完成');
//         console.log('文件内容：'+ data);
//         resolve(data);
//     });
// });
// p.then(data =>{
//     console.log('读取完成');
// })

// 考虑错误的情况
const p = new Promise((resolve,reject) =>{
    data = fs.readFile('./f2.txt', 'utf8', (err,data) => {
        if(err){
            reject(err);
        } else{
            resolve('data');
        }
    });
});
p.then(data =>{
    console.log('读取完成');
}).catch(e =>{
    console.log(e);
})