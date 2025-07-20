// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

  mode: process.env.NODE_ENV || 'development', // 'production' for build
  entry: './src/index.js', // The entry point of the app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Important for routing and dev server
  },
  devtool: 'inline-source-map', // Helps with debugging
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // For client-side routing
  },
  module: {
    rules: [
      // Rule for JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Rule for CSS files (for global styles or CSS imports)
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Custom rule for image files (SVG, PNG, etc.)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Webpack 5's built-in asset module
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans dist folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to our HTML template
    }),
    // Environment variables plugin
    new webpack.DefinePlugin({

      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || 'http://localhost:8080/api'), // Example API URL
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
};