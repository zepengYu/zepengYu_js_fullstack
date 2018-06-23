const fs = require('fs');
let data;

// data = fs.readFileSync('./f1.txt', 'utf8');
// console.log('文件读取完成');
// console.log('文件内容是：' + data);

// 有错误时
try{
    data = fs.readFileSync('./f2.txt', 'utf8');
    console.log('文件读取完成');
    console.log('文件内容是：' + data);
}catch(err){
    console.log('读取文件出错' + err.message);
}