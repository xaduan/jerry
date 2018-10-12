module.exports = {
  devServer: {
    port: 8888
  },
  transpileDependencies: [
    // can be string or regex
    'my-dep',
    /other-dep/
  ],
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/dist/' : '/'
}