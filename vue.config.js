const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/Portfolios-Stage/' : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath,
})
