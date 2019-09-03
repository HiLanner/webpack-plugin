const {SyncBailHook} = require('tapable')


class mySyncBailPlugin {
  constructor(options){
      //用户自定义配置
      this.options = options
      // console.log(this.options)
  }
  apply(compiler) {
    let queue = new SyncBailHook(['name'])
    queue.tap('1', function (name) {
      console.log(name, 1)
    })
    queue.tap('2', function(name) {
      console.log(name, 2)
      return undefined
    })
    queue.tap('3', function(name) {
      console.log(name, 3)
    })
    queue.call('webpack')
  }
}

module.exports = mySyncBailPlugin