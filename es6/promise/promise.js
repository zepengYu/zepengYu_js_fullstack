/*
 * author yzp
 * date 2018-6-21
 * 模块提供Promise类
 */

class Promise {
    constructor (executor) {
        // promise 状态有几种？
        // pending 等待
        // resolve 成功
        // reject  失败
        this.status = 'pending';
        // 成功的值
        this.value = undefined;
        this.reason = undefined;
        // 给一个形参 executor
        let resolve = (value) => {
            if(this.status === 'pending'){
                this.status = 'resolved';
                this.value = value;
            }
        }
        let reject = (reason) => {
            if(this.status === 'pending'){
                this.status = 'rejected';
                this.reason = reason;
            }
        }
    //实例化
      executor(resolve); 
    }
    then (onFullfilled, onRejected) {
        if(this.status === 'resolved'){
            onFullfilled(this.value);
        }
        if(this.status === 'rejected'){
            onRejected(this.reason);
        }
        
    }
  }
  
  module.exports = Promise
  