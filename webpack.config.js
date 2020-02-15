const path = require('path');
const webpack = require('webpack');
const tsImportPluginFactory = require("ts-import-plugin");

const config = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test:/\.jsx?$/,
          use:{
            loader:"source-map-loader",
          }
        },
        {
          test: /\.(css|scss)$/, // 匹配文件
          use: [
            "style-loader", // 使用<style>将css-loader内部样式注入到我们的HTML页面
            "css-loader", // 加载.css文件将其转换为JS模块
            "sass-loader" // 加载 SASS / SCSS 文件并将其编译为 CSS
          ]
        },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" 
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader", 
            options: {
              javascriptEnabled: true
            }
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              uesCache: true,
              useBabel: false,
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'lib',
                  style: true
                })]
              })
            }
          }
        ]
      }
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] 
  },

  devServer: {
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    port: 3000,
    compress: true,
  },


  mode: 'development',

};

module.exports = config;