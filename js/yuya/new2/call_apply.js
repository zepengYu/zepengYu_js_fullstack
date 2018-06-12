var obj1 = {
    name:'sven'
}
var obj2 = {
    name:'anne'
}
// window.name = 'window';

var getName = function(){
    // 函数this 由运行时决定，运行时函数的调用方式决定
    console.log(`Hi I am ${this.name}`)
}
// 普通函数
// this可以被指定
getName.call(obj1);
getName.apply(obj2);

var func = function(a, b, c){
    console.log([a, b, c]);
}
func.apply(null,[1,2,3]);
func.call(null,1,2,3);