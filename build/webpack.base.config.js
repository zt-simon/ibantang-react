const path = require('path')
const webpack = require('webpack')
// 引入文件夹 config
// require 会去读取该文件夹中的index.js文件

const config = require('../config')
// 引入公用工具类 utils
const utils = require('./utils')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry: path.join(__dirname, '../src', 'index.js'),
  // entry:{
  //   index:'./src/modules/index/index.js',
  //   about:'./src/modules/about/index.js'
  //
  // },
  entry: utils.getEntries('./src/modules/**/index.js'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:7].js',
    publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', // 编译前
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jp?g|gif|svg)$/,
                // loader 配合options使用
        loader: 'url-loader',

        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }

    ]

  }

}
