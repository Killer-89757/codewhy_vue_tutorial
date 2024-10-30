## 认识vue-router

- 目前前端流行的三大框架, 都有自己的路由实现:
  - Angular的ngRouter
  - React的ReactRouter
  - Vue的vue-router

- 当然, 我们的重点是vue-router
  - vue-router是Vue.js官方的**路由插件**，它和vue.js是深度集成的，适合用于构建单页面应用
  - 我们可以访问其官方网站对其进行学习: https://router.vuejs.org/zh/
- **vue-router是基于路由和组件的**
  - **路由用于设定访问路径, 将路径和组件映射起来**
  - **在vue-router的单页面应用中, 页面的路径的改变就是组件的切换**

###  安装和使用vue-router

- 因为我们已经学习了webpack, 后续开发中我们主要是通过工程化的方式进行开发的.

  - 所以在后续, 我们直接使用npm来安装路由即可

  - 步骤一: 安装vue-router

    - **npm install vue-router --save**

      ![企业微信截图_20210907210040](images\企业微信截图_20210907210040.png)

  - 步骤二: 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)

    - 第一步：**导入路由对象，并且调用 Vue.use(VueRouter)**
    - 第二步：**创建路由实例，并且传入路由映射配置**
    - 第三步：**在Vue实例中挂载创建的路由实例**

  ![企业微信截图_20210907211411](images\企业微信截图_20210907211411.png)

- 使用vue-router的步骤:

  - 第一步: **创建路由组件**
  - 第二步: **配置路由映射: 组件和路径映射关系**
  - 第三步: **使用路由: 通过<router-link>和<router-view>**

Home.vue

```js
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>

```

about.vue

```js
<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，哈哈哈</p>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

</style>
```

router/index.js

```js
//配置路由相关信息

import VueRouter from "vue-router"
import Vue from "vue";
import Home from "../components/Home";
import about from "../components/about";
// 1.通过Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  //一个路由组件是一个对象
  {
    path:"/home",
    component:Home
  },
  {
    path:"/about",
    component:about
  }
]

const router = new VueRouter({
  //routes中配置路由和组件之间的映射关系
  routes
})

//3. 将router对象传入到Vue的实例中
export default router
```

App.vue

```js
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
```

main.js

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

> 需要注意以下几个地方：
>
> 1. 再main.js中导入router对象，在Vue实例中注册router
> 2. 在App.Vue中使用router-view和router-link(附加to属性绑定url)
> 3. 在router/index.js中(核心)
>    1. 导入VueRouter对象，并通过Vue.use(插件的方式进行使用)
>    2. 创建router路由对象 在其配置(需要数组)相中定义url和组件之间的映射关系(映射关系是对象)
>    3. 导出router对象

- <router-link>: 该标签是一个vue-router中已经内置的组件, 它会被渲染成一个<a>标签.
- <router-view>: 该标签会根据当前的路径, 动态渲染出不同的组件.
- 网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和<router-view>处于同一个等级.
- 在路由切换时, 切换的是<router-view>挂载的组件, 其他内容不会发生改变.

效果展示如图：

![动画5](images\动画5.gif)

