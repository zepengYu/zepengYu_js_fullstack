const fs = require('fs');

//写入内容，不替换
fs.appendFile('./c.txt', 'hello', 'utf8',(err)=>{
    if(err) throw err;
    console.log('append成功')
})