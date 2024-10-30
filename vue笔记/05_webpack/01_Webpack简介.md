## Webpack简介

[webpack官网](https://webpack.js.org/)

[webpack中文网站](https://www.webpackjs.com/)

- 什么是webpack？
  - 这个webpack还真不是一两句话可以说清楚的。
- 我们先看看官方的解释：
  - At its core, webpack is a static module bundler for modern JavaScript applications. 
  - 从本质上来讲，webpack是一个现代的`JavaScript`应用的**静态模块打包**工具
- 但是它是什么呢？用概念解释概念，还是不清晰
  - 我们从两个点来解释上面这句话：**模块** 和 **打包**
  - 其他的打包工具：grunt/gulp/webpack/rollup

![动画1](images\动画1.gif)

### 前端模块化

- **前端模块化**：
  - 在前面学习中，我已经用了大量的篇幅解释了为什么前端需要模块化
  - 而且我也提到了目前使用前端模块化的一些方案：`AMD`、`CMD`、`CommonJS`、`ES6`
  - 在ES6之前，我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发
  - 并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包
  - 而webpack其中一个**核心**就是**让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系**
  - 而且不仅仅是**JavaScript文件**，我们的**CSS**、**图片**、**json文件**等等在webpack中都可以被当做`模块`来使用（在后续我们会看到）
  - 这就是webpack中模块化的概念

- **打包**如何理解呢？

  - 理解了webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就非常好理解了

  - 就是将webpack中的**各种资源模块进行打包合并成一个或多个包**(**Bundle**)

  - 并且在打包的过程中，还可以**对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript**等等操作。

  - 但是打包的操作似乎grunt/gulp也可以帮助我们完成，它们有什么不同呢
    - grunt/gulp的核心是**Task**
      - 我们可以**配置一系列的task，并且定义task要处理的事务**（例如ES6、ts转化，图片压缩，scss转成css）
      - 之后让grunt/gulp来依次执行这些task，而且让**整个流程自动化**
      - 所以grunt/gulp也被称为`前端自动化任务管理工具`
    - 我们来看一个gulp的task
      - 下面的task就是将src下面的所有js文件转成ES5的语法
      - ![image-20210904150143723](images\image-20210904150143723.png)
      - 并且最终输出到dist文件夹中
    - 什么时候用grunt/gulp呢？
      - 如果你的工程模块依赖非常简单，甚至是**没有用到模块化**的概念。
      - **只需要进行简单的合并、压缩，就使用grunt/gulp即可**
      - 但是如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用更加强大的webpack了
    - 所以，grunt/gulp和webpack有什么不同呢？
      - **grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心**
      - **webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能**

