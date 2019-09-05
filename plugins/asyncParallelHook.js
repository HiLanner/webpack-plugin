const { AsyncParallelHook } = require('tapable')

class myAsyncParallelHook {
  constructor(options){
      //用户自定义配置
      this.options = options
      // console.log(this.options)
  }
  apply(compiler) {
    // let queue1 = new AsyncParallelHook(['name'])
    // console.time('cost')
    // queue1.tap('1', function(name) {
    //   console.log(name, 1)
    // })
    // queue1.tap('2', function(name) {
    //   console.log(name, 2)
    // })
    // queue1.tap('3', function (name) {
    //   console.log(name, 3);
    // });
    // queue1.callAsync('webpack', err => {
    //   console.timeEnd('cost')
    // })

    // tapAsync
    // let queue2 = new AsyncParallelHook(['name']);
    // console.time('cost1');
    // queue2.tapAsync('test1', function (name, cb) {
    //     setTimeout(() => {
    //         console.log(name, 1);
    //         cb();
    //     }, 1000);
    // });
    // queue2.tapAsync('test2', function (name, cb) {
    //     setTimeout(() => {
    //         console.log(name, 2);
    //         cb();
    //     }, 2000);
    // });
    // queue2.tapAsync('test3', function (name, cb) {
    //     setTimeout(() => {
    //         console.log(name, 3);
    //         cb();
    //     }, 3000);
    // });

    // queue2.callAsync('webpack', () => {
    //     console.log('over');
    //     console.timeEnd('cost1');
    // });
    let queue3 = new AsyncParallelHook(['name'])
    console.time('cost3')
    queue3.tapPromise('1', function(name, cb) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log(name, 1)
                resolve();
            }, 1000)
        })
    })
    queue3.tapPromise('2', function(name, cb) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log(name, 2)
                resolve();
            }, 2000)
        })
    })
    queue3.tapPromise('3', function(name, cb) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log(name, 3)
                resolve();
            }, 3000)
        })
    })

    queue3.promise('webpack').then(() => {
        console.log('over');
        console.timeEnd('cost3')
    }, () => {
        console.log('error')
        console.timeEnd('cost3')
    })
  }
}

module.exports = myAsyncParallelHook