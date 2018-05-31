var obj = {a:1};

console.log("a" in obj);
console.log("toString" in obj);
// 原型链对象上是否具有属性
// obj 对象
// name 属性
// obj, a false
// obj, b false
// obj toString true
function hasPrototypeProperty(o, name){
return name in o && !o.hasOwnProperty(name)
}
console.log
(hasPrototypeProperty(obj, "toString"));

// 函数是对象 Object
// Person 可以是程序员，作曲家，作者的原型链对象
// prototype 属性 in obj in Object
// prototype入口？js 把有对象的其实是由function 构造的
// 函数都有属性

// 实例instance p1 p2 都有自身的属性
// 由person 构建函数 this.name = 
// Person constructor
// Person.prototype.sayName
// 新的对象构建
//不是类与对象、父子的关系
// 是原型的关系
// constructor 属性设置，车头
// constructor->prototype
// 方法，prototype 车身
// const p1 = new Person('王小虎')

function Person(name){
    this.name = name;
}
// 函数
// js 里几乎所有的函数都有一个 prototype属性
// 指针 指向一个对象、属性或方法的集合
// Person.prototype.getName = function(){
//     return this.name;
// }
Person.prototype = { 
    getName:function(){
        return this.name
    }
}
// js 原型式继承
// constructor persson name + books 属性
// prototype person的方法链 + 方法链(自身方法)

// 一 让子类又父类的所有属性
function Author(name, books){
// 新的构造函数
// 函数
Person.call(this, name);
this.books = books;
}

// 得到person的protrude
extend(Author, Person);

Author.prototype.getBooks = function(){
    return this.books;
} 

// 构造函数 author prototype -> superClass prototype -> superClass.prototype
function extend(subClass, superClass){
    // 第三者 干净
    var F = function(){};  //空的构造函数
    F.prototype = superClass.prototype;
    // p1 prototype -> F.prototype
    subClass.prototype = new F();  //新的对象
    // 失去构造函数
    subClass.prototype.constructor = subClass;
}


const author = new Author('雨果',['悲惨世界']);
// Java 对象拥有新的方法和属性的一份拷贝
// ? author 函数的prototype 指向 author的prototype
// this 实例对象 函数，this指向 作用域内可以指向的对象
// 方法？ prototype 去查找author 对象的prototype
console.log(author.getName());
console.log(author.getBooks());