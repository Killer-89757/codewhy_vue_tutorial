## webpack本地服务器

### 搭建本地服务器

- webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。
  
  - 在我们每次修改了我们的代码的时候我们的服务器是将我们的代码保存在内存中，并没有同步到硬盘中，当我们完成所有的测试之后，准备发布的时候，我们执行一次npm run build构建最终发版的代码即可
  
- 不过它是一个单独的模块，在webpack中使用之前需要先安装它

  ```python
  npm install --save-dev webpack-dev-server@2.9.1
  ```

- devserver也是作为webpack中的一个选项，选项本身可以设置如下属性：

  - **contentBase**：为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
  - **port**：端口号
  - **inline**：页面实时刷新
  - **historyApiFallback**：在SPA页面中，依赖HTML5的history模式

- webpack.config.js文件配置修改如下：

  ```python
  devServer:{
      contentBase:"./dist",
      inline:true
  }
  ```

- 运行命令

  ```python
  webpack-dev-server
  ```

- 我们可以再配置另外一个scripts：

  - ```python
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "dev": "webpack-dev-server --open"
    },
    ```

  - --open参数表示直接打开浏览器

![动画2](images\动画2.gif)

### webpack的配置文件分离

安装webpack-merge

```python
npm install --save-dev webpack-merge@4.1.5
```

我们的配置文件分为开发时的配置文件和生产环境的配置文件，我们都将所有配置文件都放到webpack.config.js中的时候，我们切换环境还要更改我们的配置文件，比较麻烦，所以我们要将两个部分配置进行抽离，形成三个文件，分别是

- 基础配置文件`base.config.js`

  ```python
  const path = require("path")
  const webpack = require("webpack")
  
  module.exports = {
      entry:"./src/main.js",
      output:{
          path:path.resolve(__dirname,"../dist"),
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
  }
  ```

- 生产环境配置文件`production.config.js`

  ```python
  const uglifyjsPlugin = require("uglifyjs-webpack-plugin")
  const webpackMerge = require("webpack-merge")
  const baseConfig = require("./base.config")
  const htmlWebpackPlugin = require("html-webpack-plugin")
  
  module.exports = webpackMerge(baseConfig,{
      plugins:[
          new uglifyjsPlugin(),
          new htmlWebpackPlugin({
              template:"index.html"
          }),
      ],
  })
  ```

- 还有开发时配置文件`develop.config.js`

  ```python
  const webpackMerge = require("webpack-merge")
  const baseConfig = require("./base.config")
  module.exports = webpackMerge(baseConfig,{
      devServer:{
          contentBase:"./dist",
          inline:true
      }
  })
  ```

在package.json中对脚本进行修改，根据不同的配置文件运行不同命令

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/production.config.js",
    "dev": "webpack-dev-server --open --config ./build/develop.config.js"
  },
```

第一次生成的文件在我们的build文件夹中：

![企业微信截图_20210906202020](images\企业微信截图_20210906202020.png)

原因是：

![企业微信截图_20210906202231](images\企业微信截图_20210906202231.png)

更改后：

![企业微信截图_20210906202414](images\企业微信截图_20210906202414.png)

