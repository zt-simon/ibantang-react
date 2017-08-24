const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const utils = require('./utils')

// 修改webpack配置的entry
// baseWebpackConfig.entry = ['./build/dev-client'].concat(baseWebpackConfig.entry)
Object.keys(baseWebpackConfig.entry).forEach(function (item) {
  baseWebpackConfig.entry[item] = ['whatwg-fetch', './build/dev-client'].concat(baseWebpackConfig.entry[item])
})
// 合并base与dev的配置
module.exports = merge(baseWebpackConfig, {
    // 在base配置基础上,添加插件
  plugins: [
       // 在html中引入编译后资源
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/modules/index/index.html',
    //   excludeChunks:[
    //     {about:'./src.modules/about/about.html'}
    //   ]
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html',
    //   template: './src/modules/about/about.html',
    //   excludeChunks:[
    //     {index:'./src.modules/index/index.html'}
    //   ]
    // }),
       // webpack的默认配置
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
       // webpack的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
       // webpack 不触发error事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
// .src/modules/index/index.js
// .src/modules/index/index.html
// .src/modules/about/about.html

const htmlPaths = utils.getEntries('./src/modules/**/*.html')
Object.keys(htmlPaths).forEach(function (key) {
  let config = {
    filename: key + '.html',
    template: htmlPaths[key],
    // 忽略其他模块中的js
    excludeChunks: Object.keys(htmlPaths).filter(function (path) {
      return (path !== key)
    })
  }
  const plugin = new HtmlWebpackPlugin(config)
  module.exports.plugins.push(plugin)
})
