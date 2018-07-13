const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI>'
});

const preHint = `
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See \`npm help json\` for definitive documentation on these fields
    and exactly what they do.

    Use \`npm install <pkg> --save\` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
`

console.log(preHint);


let index = 0;
const questions = ['name', 'version', 'auther'];
const defaultAnsers = ['name', '1.0.0', 'none'];
const answers = [];

function createPackageJSON(){
    // json怎么准备
    var map = {};
    questions.forEach((question, index) => {
        map[question] = answers[index];
    });
    fs.writeFileSync('./package.json', JSON.stringify(map, null, 4));
    // JSON.stringify从一个对象解析出字符串，第三个参数是格式化缩进格式按照四个字符缩进
}
function runQuestionLoop(){
    if (index === questions.length) {
        createPackageJSON();
        rl.close();
        return;
    }
    let defaultAnser = defaultAnsers[index];
    let question = questions[index] + ':(' + defaultAnsers[index] + ')'
    rl.question(question, function(answer){
        answers.push(answer || defaultAnser);
        index++;
        runQuestionLoop();
    })
    
}

runQuestionLoop();