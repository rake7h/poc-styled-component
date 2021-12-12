const path = require('path')

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/client'),
    publicPath: '',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
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
  }
}
