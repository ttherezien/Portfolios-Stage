const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath,
})
