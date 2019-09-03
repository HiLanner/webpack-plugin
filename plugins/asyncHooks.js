const {SyncHook} = require('tapable')

class mySyncPlugin {
  constructor(options){
      //用户自定义配置
      this.options = options
      // console.log(this.options)
  }
  apply(compiler) {
    let quene = new SyncHook(['name', 'name2'])
    quene.tap('1', function(name, name2) {
      console.log(name, name2, 1)
    })
    quene.tap('2', function(name) {
      console.log(name, 2)
    })
    quene.tap('3', function(name) {
      console.log(name, 3)
    })

    quene.call('webpack', 'webpack-cli')
  }
}

module.exports = mySyncPlugin