const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  resolve: {
    alias: {
      '~/adapters': path.resolve(process.cwd(), './src/adapters'),
      '~/components': path.resolve(process.cwd(), './src/components'),
      '~/entities': path.resolve(process.cwd(), './src/entities'),
      '~/hooks': path.resolve(process.cwd(), './src/hooks'),
      '~/screens': path.resolve(process.cwd(), './src/screens'),
      '~/services': path.resolve(process.cwd(), './src/services'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
