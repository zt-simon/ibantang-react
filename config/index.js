const path = require('path')
module.exports = {
    // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 5000,
    proxyTable: {
      '/api': {
        // http://www.ibantang.com/search/getData?ot=product&st=0&q=1&page=0&pagesize=20
        // http://localhost:5000/api/ 转换以下
        // http://www.ibantang.com/api
        target: 'http://www.ibantang.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/app': {
        // http://www.ibantang.com/search/getData?ot=product&st=0&q=1&page=0&pagesize=20
        // http://localhost:5000/api/ 转换以下
        // http://www.ibantang.com/api
        target: 'http://m.ibantang.com',
        changeOrigin: true,
        pathRewrite: {
          '^/app': ''
        }
      },
      '/apo': {
        // http://www.ibantang.com/search/getData?ot=product&st=0&q=1&page=0&pagesize=20
        // http://localhost:5000/api/ 转换以下
        // http://www.ibantang.com/api
        target: 'http://www.sqkb.com',
        changeOrigin: true,
        pathRewrite: {
          '^/apo': ''
        }
      }
    },
    autoOpenBrowser: true

  },
    // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '',
    assetsSubDirectory: 'static'
  }
}
