const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
<<<<<<< HEAD
  // devServer: {
  //   historyApiFallBack: true,
  // },
  // plugins: [new CompressionPlugin({
  //   algorithm: 'gzip',
  // })],
=======
  devServer: {
    historyApiFallBack: true,
  },
  plugins: [
    new CompressionPlugin({ algorithm: 'gzip' }),
    new BundleAnalyzerPlugin(),
  ],
>>>>>>> 51b1bf4da370c402b92a143199142f11d16b7785
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
<<<<<<< HEAD
            plugins: ['babel-plugin-styled-components', '@babel/transform-runtime', '@babel/plugin-syntax-jsx', '@babel/plugin-syntax-dynamic-import'],
=======
            plugins: ['babel-plugin-styled-components', '@babel/transform-runtime'],
>>>>>>> 51b1bf4da370c402b92a143199142f11d16b7785
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
