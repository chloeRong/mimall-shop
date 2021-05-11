const path = require('path');
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        // secure: true,
        pathRewrite: { '/api': '' }
      }
    }
  },
  // chainWebpack: config => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //   types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  // },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // 公用scss
          resources: "./src/assets/scss/imports.scss"
        })
        .end();
    });
  }
}

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/assets/scss/imports.scss'),
//       ],
//     })
// }
