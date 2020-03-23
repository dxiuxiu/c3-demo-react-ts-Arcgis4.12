const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const fs = require('fs')

const plugins = [
  new HtmlWebPackPlugin({
    title: '基于 arcgis 加 esriLoader 的 GIS 前端框架',
    chunksSortMode: "none",
    template: './public/template.html',
    hash: true,
    favicon: path.resolve(__dirname, 'public/favicon.ico'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    },
  }),
];
const files = fs.readdirSync(path.resolve(__dirname, './public/dlls'))
files.forEach((file) => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, './public/dlls', file),
      }),
    )
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, './public/dlls', file)
      })
    )
  }
})
module.exports = {
  entry: {
    index: "./src/index.tsx"
  },

  module: {
    rules: [{
        test: /\.ts|x$/,
        exclude: /node_modules/, // 排除在外即不需要被 babel-loader 处理的文件
        loader: "ts-loader",
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: 'static/images/[hash:6].[ext]',
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: 'static/media/[name].[hash:7].[ext]',
            publicPath: '/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json'],
    // mainFiles: ['index'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@css': path.resolve(__dirname, './src/css'),
      '@global': path.resolve(__dirname, './src/global'),
      '@stores': path.resolve(__dirname, './src/stores')
    }
  },
  plugins: plugins,
}