const {AsyncSeriesWaterfallHook} = require('tapable')

class MyAsyncSeriesBailHook {
  constructor(options){
    //用户自定义配置
    this.options = options
    // console.log(this.options)
  }
  apply(compiler) {

  //   let queue1 = new AsyncSeriesWaterfallHook(['name'])
  //   console.time('cost1')
  //   queue1.tap('1', function(name) {
  //     console.log(name, 1)
  //     return 'csl'
  //   })

  //   queue1.tap('2', function(data) {
  //     console.log(data, 2)
  //     return 'is'
  //   })

  //   queue1.tap('3', function(data) {
  //     console.log(data, 3)
  //     return 'cute'
  //   })

  //   queue1.tap('3', function(data) {
  //     console.log(data, 3)
  //   })

  //   queue1.callAsync('webpack', err => {
  //     console.log(err)
  //     console.log('over')
  //     console.timeEnd('cost1')
  //   })
  // }
  //   let queue2 = new AsyncSeriesWaterfallHook(['name'])
  //   console.time('cost2')
  //   queue2.tapAsync('1', function(name, cb) {
  //     setTimeout(() => {
  //       console.log('1', name)
  //       cb()
  //     }, 1000);
  //   })
  //   queue2.tapAsync('2', function(name, cb) {
  //     setTimeout(() => {
  //       console.log('2', name)
  //       cb(2)
  //     }, 2000);
  //   })
  //   queue2.tapAsync('3', function(name, cb) {
  //     setTimeout(() => {
  //       console.log('3', name)
  //       cb()
  //     }, 3000);
  //   })
  //   queue2.callAsync('webpack', err => {
  //     console.log(err)
  //     console.log('over')
  //     console.timeEnd('cost2')
  //   })
  // }

  let queue3 = new AsyncSeriesWaterfallHook(['name'])
  console.time('const3')
  queue3.tapPromise('1', function(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log('1', name)
        resolve('csl')
      }, 1000)
    })
  })
  queue3.tapPromise('2', function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log('2', data)
        resolve('is')
      }, 1000)
    })
  })

  queue3.tapPromise('3', function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log('3', data)
        resolve('cute')
      }, 1000)
    })
  })
  queue3.tapPromise('4', function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log('4', data)
        resolve('over')
      }, 1000)
    })
  })
  queue3.promise('webpack').then(err => {
    console.log(err)
    console.timeEnd('cost3')
  }, err => {
    console.log(err)
    console.timeEnd('cost3')
  })
}

}

module.exports = MyAsyncSeriesBailHook