// 当监听函数被触发的时候，如果该监听函数返回true时则这个监听函数会反复执行，如果返回 undefined 则表示退出循环

const { SyncLoopHook } = require('tapable')


class mySyncLoopHook {
  constructor(options){
      //用户自定义配置
      this.options = options
      // console.log(this.options)
  }
  apply(compiler) {
    let queue = new SyncLoopHook(['name'])
    let count = 3;
    queue.tap('1', function(name) {
      console.log('count: ', count--)
      if(count > 0) {
        return true
      }
      return
    })
    queue.call('webpack')
  }
}

module.exports = mySyncLoopHook