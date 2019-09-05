const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MyPlugin = require('./plugins/plugin-1')
const Listen4Myplugin = require('./plugins/listen4myplugin')
const mySyncPlugin = require('./plugins/asyncHooks')
const mySyncBailPlugin = require('./plugins/syncBailHook')
const mySyncWaterfallHookPlugin = require('./plugins/syncWaterfallHook')
const mySyncLoopHook = require('./plugins/SyncLoopHook')
const myAsyncParallelHook = require('./plugins/asyncParallelHook')
const myAsyncParallelBailHook = require('./plugins/asyncParallelBailHook')


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: path.resolve('./loaders/index.js'),
        options: {
          query: '123'
        }
      }
    // }, {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: path.resolve('./loaders/wait.js'),
    //     options: {
    //       query: '456'
    //     }
    //   }
    }]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    // new MyPlugin('plugin is instancing'),
    // new Listen4Myplugin()
    // new mySyncPlugin(),
    // new mySyncBailPlugin(),
    // new mySyncWaterfallHookPlugin()
    // new myAsyncParallelHook(),
    new myAsyncParallelBailHook()
  ],
};

