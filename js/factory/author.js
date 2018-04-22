function Person(name){
    this.name = name
}
Person.prototype.getName = function(){
    return this.name
}

// IT工程师
// extend Person
function Coder(name,languages){
// call?
Person.call(this,name)
// 父类没有可以加
// 语言
this.languages = languages
}
// new person 新的对象就是coder的原型对象
Coder.prototype = new Person()
Coder.prototype.construtor = Coder
Coder.prototype.getLanguages = function(){
   return this.languages
}

var Wxf = new Person('汪西发');
console.log(Wxf.name);

var xjy = new Coder('徐加元',['javascript','python','c/c++']);
console.log(xjy.name + ' ' + xjy.languages.join(','))
console.log(xjy.getName());
console.log(xjy.getLanguages());