module.exports = {
  devServer: {
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    // can be string or regex
    'my-dep',
    /other-dep/
  ],
  lintOnSave: false
}