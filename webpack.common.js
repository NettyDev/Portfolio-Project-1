const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-typescript',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[contenthash].[ext]',
        },
      },
      {
        test: /\.(mp3|aac)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[contenthash].[ext]',
        },
      },
      {
        test: /\.(mp4|m4a)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[contenthash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'assets/images/gallery', to: 'assets/gallery' }],
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      title: 'Portfolio-Project-1',
      minify: 'auto',
      meta: {
        description: '',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#4285f4',
      },
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: 'styles/[id].css',
      ignoreOrder: false,
    }),
    new FaviconsWebpackPlugin({
      logo: './assets/logo.png',
      mode: 'webapp',
      devMode: 'light',
      cache: true,
      inject: true,
      prefix: 'assets/favicons/',
      favicons: {
        appName: 'Portfolio-Project-1',
        appDescription: 'Portfolio Project 1',
        developerName: 'NettyDev',
        developerURL: 'https://nettydev.xyz',
        background: '#000',
        theme_color: '#000',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
  ],
}
