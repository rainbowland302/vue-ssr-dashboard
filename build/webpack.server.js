const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',

  // dynamic import for node
  // vue-loader to generate server-oriented code for component
  target: 'node',

  // source-map for bundle renderer
  devtool: 'source-map',

  // server bundle as Node-style exports
  output: {
    libraryTarget: 'commonjs2'
  },

  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // set external chunk to speed the build
  externals: nodeExternals({
    // do not external that webpack will handle
    // eg: 'global'(polyfill), *.vue
    whitelist: /\.(css|vue)$/
  }),

  // generate 'vue-ssr-server-bundle.json'
  plugins: [
    new VueSSRServerPlugin()
  ]
})
