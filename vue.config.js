const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
module.exports = {
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0 代表可以被外界访问
    port: 8080, // 访问端口
    hot: true, // 开启热加载
    proxy: {
      '/': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: '',
        // target: 'http://43.136.118.101:5678/api', //本地开发修改成这个
        // target: 'http://127.0.0.1:3000', //打包后修改成这个地址
        // 允许跨域
        changeOrigin: true,
        ws: false,
        secure: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  // 解决打包部署后，js文件读取路径问题
  publicPath: "./",
}