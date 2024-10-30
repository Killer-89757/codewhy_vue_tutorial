## webpack的ES6配置

- 如果你仔细阅读webpack打包的js文件，发现写的ES6语法并没有转成ES5，那么就意味着可能一些对ES6还不支持的浏览器没有办法很好的运行我们的代码

  ![企业微信截图_20210906145658](images\企业微信截图_20210906145658.png)

- 在前面我们说过，如果希望将ES6的语法转成ES5，那么就需要使用**babel**

  - ES6的语法转成ES5，必须要使用babel-core

  ![企业微信截图_20210906150004](images\企业微信截图_20210906150004.png)

- 而在webpack中，我们直接使用babel对应的loader就可以了

  ```python
  npm install --save-dev babel@7 babel-core babel-preset-es2015
  ```

- 配置webpack.config.js文件

  ```python
  # 注意exclude的使用
  module.exports = {
    entry:"./src/main.js",
    output:{
      path:path.resolve(__dirname,"dist"),
      filename:'commen.js',
      publicPath:"dist/"
    },
    module: {
      rules: [
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
        }
      ]
    }
  }
  ```

- 重新打包，查看bundle.js文件，发现其中的内容变成了ES5的语法

  ![企业微信截图_20210906151229](images\企业微信截图_20210906151229.png)