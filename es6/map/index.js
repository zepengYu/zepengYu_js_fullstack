//MAp 对象的集合
const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('Sunny',2);
dogs.set('Hugo',5);
dogs.set('Hugo',8);  //覆盖前后一个值


//forEach 遍历
dogs.forEach((val,key)=>console.log(val,key));

//所有可以迭代的都可以使用 for of
for (const [key,val] of dogs){
    console.log(key,val);
}

//解构互换
let a = 1;
let b = 2;
[b, a] =[a, b]
console.log(a, b);