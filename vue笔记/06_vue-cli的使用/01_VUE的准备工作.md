## VUE的准备工作

### 什么是Vue CLI

- 如果你只是简单写几个Vue的Demo程序, 那么你不需要Vue CLI.
- 如果你在开发大型项目, 那么你需要, 并且必然需要使用`Vue CLI`
  - **使用Vue.js开发大型应用时，我们需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情**
  - 如果每个项目都要手动完成这些工作，那无疑效率比较低效，所以通常我们会使用一些脚手架工具来帮助完成这些事情
- CLI是什么意思?
  - CLI是**Command-Line Interface**, 翻译为`命令行界面`, 但是俗称脚手架
  - **Vue CLI是一个官方发布 vue.js 项目脚手架**
  - 使用 vue-cli 可以快速搭建**Vue开发环境以及对应的webpack配置**

### Vue CLI使用前提 - Node

- 安装NodeJS
  - 可以直接在官方网站中下载安装，详情见 https://juejin.cn/post/6985410275914547230
- 检测安装的版本
  - 默认情况下自动安装Node和NPM
  - **Node环境要求8.9以上或者更高版本**

- 什么是NPM呢?
  - NPM的全称是`Node Package Manager`
  - 是一个**NodeJS包管理和分发工具**，已经成为了非官方的发布Node模块（包）的标准。
  - 后续我们会经常使用**NPM来安装一些开发过程中依赖包**

- **cnpm安装**

  - 由于国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用**淘宝 NPM 镜像**

  - 你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

    ```python
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

  - 这样就可以使用 cnpm 命令来安装模块了：

    ```python
    cnpm install [name]
    ```

### Vue CLI使用前提 - Webpack

- **Vue.js官方脚手架工具就使用了webpack模板**

  - 对所有的资源会压缩等优化操作
  - 它在开发过程中提供了一套完整的功能，能够使得我们开发过程中变得高效

- **Webpack的全局安装**

  ```python
  npm install webpack -g
  ```