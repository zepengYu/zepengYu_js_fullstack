// Function.prototype.bind2 = function(context, ...args){
//     var args = Array.prototype.slice.call(arguments, 1)
//     var that = this
//     return function(){
//         // ? bar 是谁  bar -> Function
//         // ? .apply(context)
//         const bindArgs = Array.prototype.slice.call(arguments)
//         that.apply(this instanceof that ? this : context, args.concat(bindArgs))
//         // console.log(context)
//     }
// }

// var foo = {
//     value: 1
// }

// function bar(name, age) {
//     console.log(this.value)
//     console.log(name);
//     console.log(age);
// }
// // bar.apply(foo)
// const bar2 = bar.bind2(foo, 'daisy')
// bar2(20)

// bind ?
// 1 返回一个新的函数，高阶函数 return function(){ bar() }
// 2 this的指向 闭包

var value = 2
var foo = {
    value: 1
}
function bar (name, age) {
    this.habit = 'shopping'
    console.log(this.value)
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy')
var obj = new bindFoo('18')
console.log(obj.habit);
console.log(obj.friend)
// bindFoo()

Function.prototype.bind2 = function(context) {
    var self = this
    // context
    var args = Array.prototype.slice.call(arguments, 1)
    var fNOP = function () {} 
    var bound = function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        self.apply(this instanceof self ? this : context, args.concat(bindArgs))
    }
    fNOP.prototype = this.prototype
    bound.prototype = new fNOP()
    return bound
}