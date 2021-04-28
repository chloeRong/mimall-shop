module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '/api': '' }
      }
    }
  }
}