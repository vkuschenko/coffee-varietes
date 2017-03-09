const path = require('path');

module.exports = {

  context: path.resolve(__dirname),

  entry: './index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.js?$/,
        exclude: [
          /webpack.config.js/,
          /node_modules/
        ],

        loader: 'babel-loader'
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  target: 'web',

  stats: "errors-only"
};