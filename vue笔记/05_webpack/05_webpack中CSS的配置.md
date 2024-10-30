## webpack中CSS的配置

### 什么是loader

- `loader`是webpack中一个非常核心的概念
- **webpack用来做什么呢？**
  - 在我们之前的实例中，我们主要是用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖
  - 但是，在开发中我们不仅仅有基本的js代码处理，我们也需要**加载css**、**图片**，也包括**一些高级的将ES6转成ES5代码**，将**TypeScript转成ES5代码**，将**scss、less转成css**，**将.jsx、.vue文件转成js文件**等等
  - 对于webpack本身的能力来说，对于这些转化是不支持的
  - 那怎么办呢？给webpack扩展对应的loader就可以啦
- **loader使用过程：**
  - 步骤一：**通过npm安装需要使用的loader**
  - 步骤二：**在webpack.config.js中的modules关键字下进行配置**
- 大部分loader我们都可以在webpack的官网中找到，并且学习对应的用法

### css文件处理 - 准备工作

- 项目开发过程中，我们必然需要添加很多的样式，而样式我们往往写到一个单独的文件中。

  - 在src目录中，创建一个css文件，其中创建一个normal.css文件。

  - 我们也可以重新组织文件的目录结构，将零散的js文件放在一个js文件夹中。

  - 调整后的代码结构

    ![企业微信截图_20210906112323](images\企业微信截图_20210906112323.png)

- normal.css中的代码非常简单，就是将body设置为red

  ```python
  body {
      background-color: red;
  }
  ```

- 但是，这个时候normal.css中的样式会生效吗？

  - 当然不会，因为我们压根就没有引用它
  - webpack也不可能找到它，因为我们只有一个入口，webpack会从入口开始查找其他依赖的文件
    - **因为我们在打包中，只是针对main.js进行打包，然后webpack会对main.js中的依赖进行查找，并且将依赖也一同进行打包**

- **在入口文件中引用：**

  ```python
  import {es6_add} from "./js/info";
  const {add,multi} = require("./js/mathUtils")
  import {name,age,es6_add,es6_multi} from "./js/info";
  
  # 在这个部分引入我们的css文件
  require("./css/normal.css")
  ```

### css文件处理– 打包报错信息

- 重新打包，会出现如下错误：

  ![企业微信截图_20210906103725](images\企业微信截图_20210906103725.png)

- **这个错误告诉我们：加载normal.css文件必须有对应的loader**

### css文件处理 –css-loader

- 在webpack的官方中，我们可以找到如下关于样式的loader使用方法：

  - 首先先进行安装

    - ```python
      npm install --save-dev css-loader@2.0.0
      ```

    - 安装成功

      ![企业微信截图_20210906110651](images\企业微信截图_20210906110651.png)

    - 安装过程出现，但是在构建的时候一直报错

      - 在配置中出现了错误：[解决办法](https://segmentfault.com/a/1190000039190699)
      - **我的处理思路是：找到老师讲课的时候的css-loader版本2.0.0，然后对他进行替换安装，成功**
      - ![企业微信截图_20210906110539](images\企业微信截图_20210906110539.png)

    - 

  ![企业微信截图_20210906104139](images\企业微信截图_20210906104139.png)

  ![企业微信截图_20210906104221](images\企业微信截图_20210906104221.png)

  ![企业微信截图_20210906112854](images\企业微信截图_20210906112854.png)

- 按照官方配置webpack.config.js文件

  - ```python
    module.exports = {
      entry:"./src/main.js",
      output:{
        path:path.resolve(__dirname,"dist"),
        filename:'commen.js'
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'css-loader' ]
          }
        ]
      }
    }
    ```

  - 注意：配置中有一个style-loader，我们并不知道它是什么，所以可以暂时不进行配置

- 重新打包项目：

  ```python
  npm run build
  ```

  - 运行成功

    ![企业微信截图_20210906110739](images\企业微信截图_20210906110739.png)

- 但是，运行index.html，你会发现样式并没有生效

  ![企业微信截图_20210906111235](images\企业微信截图_20210906111235.png)

  - **原因是css-loader只负责加载css文件，但是并不负责将css具体样式嵌入到文档中**
  - 这个时候，我们还需要一个style-loader帮助我们处理
    - **style-loader负责将样式添加到DOM中**

- 我们来安装style-loader

  ```python
  npm install --save-dev style-loader@0.23.1
  ```

- 注意：style-loader需要放在css-loader的前面

  - 按照我们的逻辑，在处理css文件过程中，应该是css-loader先加载css文件，再由style-loader来进行进一步的处理，为什么会将style-loader放在前面呢？
    - 答案：**这次因为webpack在读取使用的loader的过程中，是按照从右向左的顺序读取的**

  - 效果如下

    ![企业微信截图_20210906111625](images\企业微信截图_20210906111625.png)

    ![企业微信截图_20210906111706](images\企业微信截图_20210906111706.png)

- 目前，webpack.config.js的配置如下：

  ```python
  module.exports = {
    entry:"./src/main.js",
    output:{
      path:path.resolve(__dirname,"dist"),
      filename:'commen.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  }
  ```

### less文件处理 –准备工作

- 如果我们希望在项目中使用`less`、`scss`、`stylus`来写样式，webpack是否可以帮助我们处理呢？

  - 我们这里以less为例，其他也是一样的

- **我们还是先创建一个less文件，依然放在css文件夹中**

  ![企业微信截图_20210906114722](images\企业微信截图_20210906114722.png)

  ​	![企业微信截图_20210906115440](images\企业微信截图_20210906115440.png)

- 安装步骤

  - special.less文件

    ```python
    @fontSize:50px;
    @fontColor:orange;
    
    body {
      font-size: @fontSize;
      color:@fontColor;
    }
    ```

  - 引用less文件

    ```python
    # 在main.js的最下面导入special.less
    require("./css/special.less")
    ```

  - 安装less-loader文件，版本4.1.0

    ```python
    npm install --save-dev less-loader@4.1.0
    ```

  - 还要安装less，对于less的语法进行解析

    ```python
    npm install --save-dev less
    ```

  - 在webpack.config.js中进行配置

    ```python
    # 注意rules的并列关系
    module.exports = {
      entry:"./src/main.js",
      output:{
        path:path.resolve(__dirname,"dist"),
        filename:'commen.js'
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
          }
        ]
      }
    }
    ```

- 效果展示如下图

  ![企业微信截图_20210906120349](images\企业微信截图_20210906120349.png)