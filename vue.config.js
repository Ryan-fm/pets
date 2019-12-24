module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, 
    chainWebpack: () => {},
    configureWebpack: () => {},
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        '/api': {
          // target: 'http://31.0.161.35',
          // target: 'http://183.131.134.242:10025',
           target: 'http://172.0.0.1:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/',
          },
        },
      },
      before: app => {}
    }
  };