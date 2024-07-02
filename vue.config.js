const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/{thapelo-m.github.io}/' : '/',
  transpileDependencies: true
})
