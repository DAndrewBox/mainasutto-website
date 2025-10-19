const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    publicPath: '/',
    filename: 'main.[fullhash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '~': path.resolve(__dirname + '/src'),
      '@assets': path.resolve(__dirname + '/src/public/assets'),
      '@common': path.resolve(__dirname + '/src/common'),
      '@store': path.resolve(__dirname + '/src/store'),
      '@utils': path.resolve(__dirname + '/src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp|webm|mp4|md)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
}
