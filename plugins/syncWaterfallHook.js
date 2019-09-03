const {SyncWaterfallHook} = require('tapable')


class mySyncWaterfallHook {
  constructor(options){
      //用户自定义配置
      this.options = options
      // console.log(this.options)
  }
  apply(compiler) {
    let queue = new SyncWaterfallHook(['name'])
    queue.tap('1', function (name) {
      console.log('first===', name)
      return 'first'
    })
    queue.tap('2', function(data) {
      console.log('this is second, this last passed is', data)
      return 'second'
    })
    queue.tap('3', function(data) {
      console.log('this is third, this last passed is', data)
    })
    queue.call('webpack')
  }
}

module.exports = mySyncWaterfallHook