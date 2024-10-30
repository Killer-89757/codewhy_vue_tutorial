## webpack中图片的配置

- 使用file-loader加载背景图片并没有起作用的一个重要原因是：我们将图片复制到指定文件夹dist中,并且使用hash重新生成一个名字，防止重复
  - 我们在css文件中写入的是我们的图片的名字，但是打包的时候封装的是hash名字，所以名称不统一，最后在我们的项目中，找不到背景图片

### 图片文件处理–资源准备阶段

- 首先，我们在项目中加入两张图片：

  - 一张较小的图片`lufei.jpg`(小于20kb)，一张较大的图片`ice.jpg`(大于20kb)
    - ![企业微信截图_20210906121337](images\企业微信截图_20210906121337.png)
    - 配置中默认的限制大小是8kb
  - 待会儿我们会针对这两张图片进行不同的处理

- 我们先考虑在css样式中引用图片的情况，所以我更改了normal.css中的样式：

  ```python
  body {
      /*background: url("../img/lufei.jpg");*/    # 小于20kb
      background: url("../img/ice.jpg");        
  }
  ```

- 如果我们现在直接打包，会出现如下问题

  ![企业微信截图_20210906121542](images\企业微信截图_20210906121542.png)

### 图片文件处理 –url-loader

- 图片处理，我们使用url-loader来处理，依然先安装url-loader

  ```python
  npm install --save-dev url-loader@1.1.2
  ```

- 修改webpack.config.js配置文件：

  ```python
  module.exports = {
    entry:"./src/main.js",
    output:{
      path:path.resolve(__dirname,"dist"),
      filename:'commen.js',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                //当加载图片的大小小于limit的时候，会将图片编译成base64字符串的形式
                //当加载图片的大小大于limit的时候，需要使用file-loader模块进行加载
                limit: 20000,
              }
            }
          ]
        }
      ]
    }
  }
  ```

- 再次打包，运行index.html，就会发现我们的背景图片选出了出来。

  - 而仔细观察，你会发现背景图是通过base64显示出来的

    ![企业微信截图_20210906122355](images\企业微信截图_20210906122355.png)

    ![企业微信截图_20210906122505](images\企业微信截图_20210906122505.png)

  - OK，这也是limit属性的作用，当图片小于20kb时，对图片进行base64编码

### 图片文件处理 **–** file-loader

- 那么问题来了，如果大于20kb呢？我们将background的图片改成ice.jpg
  - 这次因为大于20kb的图片，会通过file-loader进行处理，但是我们的项目中并没有file-loader

    ![企业微信截图_20210906122122](images\企业微信截图_20210906122122.png)

- 所以，我们需要安装file-loader

  ```python
  npm install --save-dev file-loader@3.0.1
  ```

- 再次打包，就会发现dist文件夹下多了一个图片文件,但是背景图片并没有显示出来

  - 但是，我们发现图片并没有显示出来，这是因为图片使用的路径不正确
    - 默认情况下，webpack会将生成的路径直接返回给使用者
    - 但是，我们整个程序是打包在dist文件夹下的，所以这里我们需要在路径下再添加一个dist/

  ![企业微信截图_20210906142414](images\企业微信截图_20210906142414.png)

  - 我们将图片放到index.html的同级目录下，可以得到背景展示效果(说明：路径加载问题)

    ![企业微信截图_20210906142512](images\企业微信截图_20210906142512.png)

- 修改webpack.config.js增加对于url的限定:**publicPath**

  ```python
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
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                //当加载图片的大小小于limit的时候，会将图片编译成base64字符串的形式
                //当加载图片的大小大于limit的时候，需要使用file-loader模块进行加载
                limit: 20000,
              }
            }
          ]
        }
      ]
    }
  }
  ```

  - 效果展示

    ![企业微信截图_20210906142512](images\企业微信截图_20210906142512.png)

### 图片文件处理–修改文件名称

- 我们发现webpack自动帮助我们生成一个非常长的名字

  - 这是一个**32位hash值**，目的是**防止名字重复**
  - 但是，真实开发中，我们可能对打包的图片名字有一定的要求
  - 比如，将所有的图片放在一个文件夹中，跟上图片原来的名称，同时也要防止重复

- 所以，我们可以在options中添加上如下选项name：

  - img：文件要打包到的文件夹
  - name：获取图片原来的名字，放在该位置
  - hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
  - ext：使用图片原来的扩展名

  ```python
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
        }
      ]
    }
  }
  ```

  - 效果展示

    ![企业微信截图_20210906143730](images\企业微信截图_20210906143730.png)

    ![企业微信截图_20210906143823](images\企业微信截图_20210906143823.png)

