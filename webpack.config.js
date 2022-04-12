const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallBack: true,
  },
  plugins: [new CompressionPlugin({
    algorithm: 'gzip',
  })],
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components', '@babel/transform-runtime', '@babel/plugin-syntax-jsx'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
