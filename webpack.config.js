const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'pageOne/pageOne': './src/pageOne/index.js',
    'pageTwo/pageTwo': './src/pageTwo/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,   
        exclude: /node_modules/, // 排除node_modules中的代码
        use: [{
            loader: 'babel-loader'
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/pageOne/pageone.html',
      inject: 'head',
      template: __dirname + '/src/pageOne/index.html',
      chunks: ['pageOne'],
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/pageTwo/pagetwo.html',
      inject: 'head',
      template: __dirname + '/src/pageTwo/index.html',
      chunks: ['pageTwo'],
      inlineSource: '.(js|css)$'
    }),
    new CleanWebpackPlugin()
  ]
}