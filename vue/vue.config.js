const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8010,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true
      },
    }
  }
})
