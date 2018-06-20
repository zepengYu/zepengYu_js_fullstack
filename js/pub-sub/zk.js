// publish 多个 Subscriber
// pub-sub
// 发布者
let zk = {};
// 订阅者
zk.peopleList = [];
// 2018年10月1日大婚
// 作何反应？
zk.listen = function(fn){  
    // 对象内部this指向对象  
    this.peopleList.push(fn);
}
// trigger触发
zk.trigger = function(){
    // 消息发出去，所有订阅者做出反应
    for(var i = 0, fn; fn = this.peopleList[i++];){
        fn.apply(this,arguments);
    }
}

// 订阅者过程
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息,决定发红包`);
});
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息,打飞机来`);
});
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息,作为情敌表示不开心`);
});

zk.trigger('要结婚了');
zk.trigger('生大胖小子');
zk.trigger('生二胎');