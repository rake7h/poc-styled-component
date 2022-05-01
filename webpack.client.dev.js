const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/client'),
    publicPath: '/build/client/',
    filename: 'js/[name].js',
  	chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
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
      name: 'growthPack',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'growthPack' },
      exposes: {
        './app-banners': './client/Components/Hello'
      }
    })
  ]
}
