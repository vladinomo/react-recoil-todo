/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ eslint: true }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
