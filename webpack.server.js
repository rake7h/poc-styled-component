const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './server/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/server'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    globalObject: 'this'
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
      name: 'poc',
      remotes: {
        grow: 'grow@http://localhost:8080/build/client/remoteEntry.js'
      }
    })
  ],
  externals: [
    nodeExternals()
  ]
}
