const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: 'development',
  entry: {
    main: ["main.jsx"]
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    overlay: true,
    contentBase: './public',
    historyApiFallback: {
      rewrites: [
        {
          from: '/./',
          to: '/'
        }
      ]
    }
  },
  plugins: [
    new FaviconsWebpackPlugin('../public/logo.png'),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}
