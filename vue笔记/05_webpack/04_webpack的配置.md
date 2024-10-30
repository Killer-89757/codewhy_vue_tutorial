## webpack的配置

### 入口和出口

- 我们考虑一下，如果每次使用webpack的命令都需要写上入口和出口作为参数，就非常麻烦，有没有一种方法可以将这两个参数写到配置中，在运行时，直接读取呢？

- 当然可以，就是创建一个webpack.config.js文件

  ```python
  const path = require("path")
  
  module.exports = {
    entry:"./src/main.js",
    output:{
      path:path.resolve(__dirname,"dist"),
      filename:'commen.js'
    }
  }
  ```

### 局部安装webpack

- 目前，我们使用的webpack是全局的webpack，如果我们想使用局部来打包呢？

  - 因为一个项目往往依赖特定的webpack版本，全局的版本可能很这个项目的webpack版本不一致，导出打包出现问题
  - 所以通常一个项目，都有自己局部的webpack

- 第一步，项目中需要安装自己局部的webpack

  - 这里我们让局部安装webpack3.6.0
  - Vue CLI3中已经升级到webpack4，但是它将配置文件隐藏了起来，所以查看起来不是很方便

  ```python
  # 在项目目录下执行
  npm install webpack@3.6.0 --save-dev
  ```

- 第二步，通过node_modules/.bin/webpack启动webpack打包

  ```python
  # 在命令行中执行的是全局的webpack
  webpack
  # 执行局部的webpack,在项目的目录中
  node_modules/.bin/webpack
  ```

### package.json 中定义启动

- 但是，每次执行都敲这么一长串有没有觉得不方便呢？

  - OK，我们可以在package.json的scripts中定义自己的执行脚本。

- package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。

  - 首先，会寻找本地的node_modules/.bin路径中对应的命令。
  - 如果没有找到，会去全局的环境变量中寻找。
  - 如何执行我们的build指令呢？

  ```python
  npm run build
  ```

### 项目实战

#### 入口和出口配置文件 webpack.config.js

```python
# 正确的版本
const path = require("path")

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:'commen.js'
  }
}
```

但我们使用path是相对路径的时候：会报错

![企业微信截图_20210904165642](images\企业微信截图_20210904165642.png)

当我们的配置文件的名称不叫webpack.config.js的时候，我们使用webpack后面要跟上我们的webpack的配置文件

```python
webpack production.config.js
```

#### 使用npm init 进行初始化项目

![企业微信截图_20210904170228](images\企业微信截图_20210904170228.png)

![企业微信截图_20210904170312](images\企业微信截图_20210904170312.png)



#### 会生成package.json

![企业微信截图_20210904170425](images\企业微信截图_20210904170425.png)

#### 使用npm install 进行package.json的依赖的安装

当我们的package.json中存在一些依赖的时候，我们使用npm install 完成对于依赖的安装

![企业微信截图_20210904170748](images\企业微信截图_20210904170748.png)

#### 存在webpack.config.js时，执行webpack

 ![企业微信截图_20210904170946](images\企业微信截图_20210904170946.png)

![企业微信截图_20210904171014](images\企业微信截图_20210904171014.png)

#### 建立npm run的映射关系

![企业微信截图_20210904171516](images\企业微信截图_20210904171516.png)

![企业微信截图_20210904171622](images\企业微信截图_20210904171622.png)

- npm run build --->webpack 写在package.json中的scripts中，我们优先会在本地的包中进行寻找，没有的话会在全局的包中进行寻找

#### 局部安装webpack

![企业微信截图_20210904172614](images\企业微信截图_20210904172614.png)

