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
  }
}
