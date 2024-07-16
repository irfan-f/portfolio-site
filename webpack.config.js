const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/portfolio-site/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|webp)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              min: 300,
              max: 1280,
              steps: 4,
              name: '[name]-[width].[ext]',
            },
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['svg-react-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "./public/Icon.png",
      manifest: "./public/manifest.json",
      meta: {
        // 'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'" },
      },
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg|webp)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 50,
          progressive: true,
        })
      ]
    }),
    new WriteFilePlugin(),
  ],
  devServer: {
    headers: {
      // 'Content-Security-Policy': "default-src 'self'",
      // 'Cache-Control': 'public, max-age=31536000',
    },
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchFiles: ['src/**/*'],
    liveReload: true,
  },
};