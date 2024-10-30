const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const uglifyjsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:'commen.js',
    // publicPath:"dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载图片的大小小于limit的时候，会将图片编译成base64字符串的形式
              //当加载图片的大小大于limit的时候，需要使用file-loader模块进行加载
              limit: 20000,
              name:"img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //在对我们的ES6进行转化成ES5的过程中，我们放在exculde中的代码不进行转化
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {test:/\.vue$/,use:[ "vue-loader" ]}
    ]
  },
  resolve:{
    extensions:[".js",".vue",".css"],
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
          new webpack.BannerPlugin("最终版权归waws所有"),
          new htmlWebpackPlugin({
            template:"index.html"
          }),
          new uglifyjsPlugin()
      ],
  devServer:{
    contentBase:"./dist",
    inline:true
  }
}