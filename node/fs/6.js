const fs = require('fs');
//写入内容，但替换
const writeStream = fs.createWriteStream('./c.txt', 'utf8');

writeStream
.on('close', ()=>{
    console.log('已经关闭了');
});
writeStream.write('me');
writeStream.write('on');
writeStream.end('');