const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
      filename: 'bundle.js',
      clean: true, // clean old builds automatically
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
        {
          test: /\.(jpe?g|png)$/i,
          use: [
            {
              loader: 'responsive-loader',
              options: {
                adapter: require('responsive-loader/sharp'),
                sizes: [300, 600, 900, 1280], // your responsive widths
                name: '[name]-[width].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['svg-react-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        manifest: './public/manifest.webmanifest',
        publicPath: isProd ? '/portfolio-site/' : '/',
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'public/manifest.webmanifest', to: 'manifest.webmanifest' },
          { from: 'public/favicon.ico', to: 'favicon.ico' },
          { from: 'public/*.png', to: '[name][ext]' },
        ],
      }),
      isProd &&
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          plugins: [
            imageminMozjpeg({
              quality: 50,
              progressive: true,
            }),
          ],
        }),
      new WriteFilePlugin(),
    ].filter(Boolean),
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      watchFiles: ['src/**/*'],
      liveReload: true,
    },
    stats: 'errors-warnings',
  };
};
