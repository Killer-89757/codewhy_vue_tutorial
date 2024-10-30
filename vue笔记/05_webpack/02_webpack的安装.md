## webpack的安装

- 安装webpack首先需要安装`Node.js`，Node.js自带了软件包管理工具`npm`
  - 安装node.js见博客[windows安装node.js](https://juejin.cn/post/6985410275914547230)
  - webpack和node.js、npm的关系
    - webpack负责模块化打包，必须依赖于node环境
    - node环境为了可以正常的执行很多的代码，必须其中包含各种依赖的包
    - npm工具(node package manager)管理node的环境
- 查看自己的node版本：

![image-20210904150801275](images\image-20210904150801275.png)

- **全局安装webpack**(这里我先指定版本号`3.6.0`，因为vue cli2依赖该版本)

  - 注意这个地方我们使用**管理员的方式**启动命令行，要不总报错

  ![企业微信截图_20210904151947](images\企业微信截图_20210904151947.png)

  - 安装成功的标志

  ![企业微信截图_20210904152144](images\企业微信截图_20210904152144.png)

  - 安装成功验证

  ![企业微信截图_20210904152231](images\企业微信截图_20210904152231.png)

- 局部安装webpack（后续才需要）
  - `--save-dev`是**开发时依赖，项目打包后不需要继续使用的**

- 为什么全局安装后，还需要局部安装呢？
  - 在终端直接执行webpack命令，使用的全局安装的webpack
  - 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的是局部webpack