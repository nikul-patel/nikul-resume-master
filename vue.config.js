const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports                 = {
  publicPath      : process.env.NODE_ENV === 'production' ? '/' : '/',
  css             : { loaderOptions: { scss: { url: true } } },
  configureWebpack: (config) => {
    config.plugins.CompressionPlugin = [
      new CompressionWebpackPlugin({
        filename : '[path][base].gz',
        algorithm: 'gzip',
        test     : /\.js$|\.css$|\.sass$|\.scss$|\.html$/,
        threshold: 10240,
        minRatio : 0.8,
      }),
      new CompressionWebpackPlugin({
        filename          : '[path][base].br',
        algorithm         : 'brotliCompress',
        test              : /\.(js|css|scss|sass|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold         : 10240,
        minRatio          : 0.8,
      }),
    ]
    config.module.rules              = [
      ...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
  chainWebpack: (config) => {
    // config.plugins.delete('prefetch')
  },
  pwa: {
    name                           : 'Nikul Patel',
    appleMobileWebAppCapable       : 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths                      : {
      favicon32     : 'img/icons/favicon-32x32.png',
      favicon16     : 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-icon-152x152.png',
      maskIcon      : 'img/icons/safari-pinned-tab.svg',
      msTileImage   : 'img/icons/ms-icon-144x144.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions   : { swSrc: 'src/service-worker.js' },
  },
}
