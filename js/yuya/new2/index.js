function Otaku (name, age){
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function(){
    console.log('I am '+ this.name);
}

// const person = new Otaku('小明',18);
// person.sayYourName();

// 1 要返回一个新的对象 拥有new的功能
// 2 访问到Otake 构造函数里的属性
// 2 访问到Otaku.prototype中的属性或方法


// 参数1是类，后几个参数...
// js函数参数异常灵活，数量可以不定，形参可以不给，
// 还有 ... reset 运算符整合起来，都会和arguments结合起来
// 实现12行的功能
function objectFactory(){
    // var Constructor = Array.from(arguments);
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor, arguments);
    var obj = new Object();
    // 1 obj __proto__ 
    // 2.构造函数的所有的this属性 
    // 参数要掺进去，要赋值，this要指向当前对象
    obj.__proto__ = Constructor.prototype;
    // 在apply内部手动指定函数执行时的this
    Constructor.apply(obj, arguments);
    return obj;
    // console.log(arguments.shift());

    // 肢解动作？ 第一项
    // 其余项就是参数
    // [] shift 方法 第一个元素弹出 
    // var constructer = arguments[0];
    // var args = 
}

var person = objectFactory(Otaku, '鸠摩智', 50);
person.sayYourName();