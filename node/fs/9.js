const fs = require('fs');
//路径模块
const path = require('path');
const getFileInDir = function(dir){
    // console.log(path.resolve(dir));
    let results = [path.resolve(dir)];
    const files = fs.readdirSync(dir, 'utf8');
    // console.log(files);
    files.forEach(file =>{
        // console.log(file);
        file = path.resolve(dir,file);
        // console.log(file);
        const stats = fs.statSync(file);
        //递归
        if(stats.isFile()){
            results.push(file);
        }else if(stats.isDirectory()){
            results = results.concat(getFileInDir(file))
        }
    })
    return results;
}
const files = getFileInDir('./txt');
console.log(files);