const {AsyncSeriesBailHook} = require("tapable")

class MyAsyncSeriesBailHook {
  constructor(options){
    //用户自定义配置
    this.options = options
    // console.log(this.options)
  }
  apply(compiler) {
    // let queue1 = new AsyncSeriesBailHook(['name'])
    // console.time('cost1')
    // queue1.tap('1', function(name) {
    //   console.log(1)
    //   return 'wrong'
    // })
    // queue1.tap('2', function(name) {
    //   console.log(2)
    // })
    // queue1.tap('3', function(name) {
    //   console.log(3)
    // })
    // queue1.callAsync('webpack', err => {
    //   console.log(err)
    //   console.timeEnd('cost1')
    // })
    // let queue2 = new AsyncSeriesBailHook(['name'])
    // console.time('cost2')
    // queue2.tapAsync('1', function(name, cb) {
    //   setTimeout(function() {
    //     console.log(name, 1)
    //     cb()
    //   }, 1000)
    // })
    // queue2.tapAsync('2', function(name, cb) {
    //   setTimeout(function() {
    //     console.log(name, 2)
    //     cb(undefined)
    //   }, 2000)
    // })
    // queue2.tapAsync('3', function(name, cb) {
    //   setTimeout(function() {
    //     console.log(name, 3)
    //     cb()
    //   }, 3000)
    // })

    // queue2.callAsync('webpack', err => {
    //   console.log(err)
    //   console.log('over')
    //   console.timeEnd('cost2')
    // })
    let queue3 = new AsyncSeriesBailHook(['name'])
    console.time('cost3')
    queue3.tapPromise('1', function(name) {
      return new Promise(function (resolve, reject) {
        setTimeout(function() {
          console.log(name, 1)
          resolve();
        }, 1000)
      })
    })

    queue3.tapPromise('2', function(name) {
      return new Promise(function (resolve, reject) {
        setTimeout(function() {
          console.log(name, 2)
          resolve();
        }, 2000)
      })
    })

    queue3.tapPromise('3', function(name) {
      return new Promise(function (resolve, reject) {
        setTimeout(function() {
          console.log(name, 3)
          resolve();
        }, 3000)
      })
    })

    queue3.promise('webpack').then(err => {
      console.log(err)
      console.log('error')
      console.timeEnd('cost3')
    }, err => {
      console.log(err)
      console.log('error')
      console.timeEnd('cost3')
    })

  }
}

module.exports = MyAsyncSeriesBailHook