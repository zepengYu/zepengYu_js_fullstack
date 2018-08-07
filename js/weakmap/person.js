const privateData = new WeakMap()

class Pserson {
    constructor (name, age) {
        // this.name = name
        // this.age = age
        privateData.set(this, { name, age })
    }
    getName() {
        return privateData.get(this).name
    }
    getAge() {
        return privateData.get(this).age
    }
}

const Jack = new Pserson('Jack', 18)
console.log(Jack.getName())
// Jack.name = '杰克'
// public 属性公开，外界可以访问，修改

引用