## 认识Vuejs

### 为什么学习Vuejs

- 我相信每个人学习Vue的目的是各不相同的。
- 可能你的公司正要将原有的项目使用**Vue进行重构**。
- 也可能是你的公司新项目决定使用**Vue的技术栈**。
- 当然，如果你现在正在换工作，你会发现招聘前端的需求中，10个有8个都对Vue有或多或少的要求。
- 当然，作为学习者我们知道Vuejs目前非常火，可以说是前端必备的一个技能。

### 简单认识一下Vuejs

- [vue官网](https://cn.vuejs.org/)

- Vue (读音 /vjuː/，类似于 view)，不要读错。
- Vue是一个渐进式的框架，什么是渐进式的呢？
  - 渐进式意味着你可以将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验。
    - **对于渐进式的理解**：就是我们的项目中使用的非vue的框架，我们可以使用vue一点一点进行渗透修改项目，逐渐的替换掉原来的框架的过程就是渐进式。
  - 或者如果你希望将更多的业务逻辑使用Vue实现，那么Vue的核心库以及其生态系统。
  - 比如**Core+Vue-router+Vuex**，也可以满足你各种各样的需求。
- Vue有很多特点和Web开发中常见的高级功能
  - **解耦视图和数据**
  - **可复用的组件**
    - 开发完毕的组件可以在这个项目中使用，也可以在另一个项目中使用
  - **前端路由技术**
    - vue-router
  - **状态管理**
    - vuex
  - **虚拟DOM**
- 这些特点，你不需要一个个去记住，我们在后面的学习和开发中都会慢慢体会到的，一些技术点我也会在后面进行讲解。
- 学习Vuejs的前提？
  - 从零学习Vue开发，并不需要你具备其他类似于Angular、React，甚至是jQuery的经验。
  - 但是你需要具备一定的`HTML`、`CSS`、`JavaScript`基础。

### Vuejs安装方式

- **CDN引入**

  - ```python
    # 在开发环境中的引入
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    # 在生产环境中使用，一版本清晰，二代码经过压缩和优化
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
    ```

- **下载和引入(推荐方式、稳定)**

  - https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js

  - 在打开的网页中右键网页另存为

  - ![2021-08-06_13-40-19](.\image\Snipaste_2021-08-06_13-40-19.png)

  - ![Snipaste_2021-08-06_13-41-02](.\image\Snipaste_2021-08-06_13-41-02.png)

  - 直接在官网下载

    - ![Snipaste_2021-08-06_13-45-12](.\image\Snipaste_2021-08-06_13-45-12.png)
    - 点击开发版本
      - ![Snipaste_2021-08-06_13-46-15](image\Snipaste_2021-08-06_13-46-15.png)

  - ```python
    # 开发环境 https://vuejs.org/js/vue.js 
    # 生产环境 https://vuejs.org/js/vue.min.js
    ```

- NPM安装管理

  - 后续通过webpack和CLI的使用，我们使用该方式