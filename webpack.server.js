const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
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
  },
  externals: [nodeExternals({
    // this WILL include `react-calendar` in the server bundle
    allowlist: [/^react-calendar/]
  })]
}
