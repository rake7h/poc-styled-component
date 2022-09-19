const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './server/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/server'),
    publicPath: '/build/client/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'serverRemoteComponents',
      filename: 'serverRemoteEntry.js',
      library: { type: 'umd' },
      exposes: {
        './Header': './client/Components/Header'
      }
    })
  ],
  externals: [
    nodeExternals()
  ]
}
