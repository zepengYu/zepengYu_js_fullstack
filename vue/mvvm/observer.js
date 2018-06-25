// 响应式 观察者模式 pub-sub发布订阅者模式

function observer(value){
    // 严格性检查
    if(!value || (typeof value !== 'object')){
        return;
    }

    Object.keys(value).forEach((key) => {
        difineReactive(value, key, value[key])
    })
    // 数据 _data 里的每个key:value, 都需要被defineProperty
}

function difineReactive(obj, key, val){
    Object.defineProperty(obj, key,{
        enumerable:true, //可遍历的
        configurable: true, //可删除
        get: function rectiveGetter(){
            return val;
        } ,
        set: function rectiveSetter(newVal){
            if(newVal == val) return;
            val = newVal;
            cb(newVal)
        }
    })
}

function cb(val){
    console.log('视图更新了，新的值应该为 ' + val);
}

class Vue{
    constructor (options) {
        this._data = options.data;
        observer(this._data);
    }
}

// 发布订阅者模式是vue 数据响应的核心
// 一对多的关系

let o = new Vue({
    data:{
        test:'I am test',
        name:'zk'
    }
})

o._data.test = 'hello, test';
o._data.test = 'hello, test';