const pluginName = 'myPlugin'

const {SyncHook} = require('tapable')

class myPlugin {
  constructor(options){
      //用户自定义配置
      this.options = options
      console.log(this.options)
  }
  apply(compiler) {
      compiler.hooks.myPlugin = new SyncHook(['data'])
      compiler.hooks.afterPlugins.tap(pluginName, () => {
        compiler.hooks.myPlugin.call('Its my plugin---after plugins')
        console.log('@environment')
      })
      compiler.hooks.environment.tap(pluginName, () => {
        compiler.hooks.myPlugin.call('Its my plugin ---environment')
        console.log('@environment')
      })
  }
}

module.exports = myPlugin