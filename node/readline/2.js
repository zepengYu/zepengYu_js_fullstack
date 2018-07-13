// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: fs.createReadStream('./access.log')
// });

// rl.on('line', (line) => {
//     const arr = line.split(' '); 
//     console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1], arr[13]);
// });

//输出日志时间和网址

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createInterface('./access.log')
});
rl.on('line', line => {
    const arr = line.split(' ');
    console.log('访问时间: %s %s, 访问地址: %s', arr[0], arr[1], arr[13]);
    
})