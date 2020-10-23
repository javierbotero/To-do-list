const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[main].js',
  },
  watch: true,
  devtool: 'inline-source-map',
};