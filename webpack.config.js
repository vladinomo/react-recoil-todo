/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin({ eslint: true })]
}
