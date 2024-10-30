## vue-router 传递参数

### 准备工作

- 为了演示传递参数, 我们这里再创建一个组件, 并且将其配置好
  - 第一步: 创建新的组件Profile.vue 
  - 第二步: 配置路由映射 
  - 第三步: 添加跳转的<router-link> 

### 传递参数的方式

- 传递参数主要有两种类型: params和query

- **params的类型:**

  - 配置路由格式: /router/:id
  - 传递的方式: 在path后面跟上对应的值
  - 传递后形成的路径: /router/123, /router/abc

- query的类型:

  - 配置路由格式: /router, 也就是**普通配置**
  - 传递的方式: **对象中使用query的key作为传递方式**
  - 传递后形成的路径: /router?id=123, /router?id=abc

- App.vue

  ```js
  <template>
    <div id="app">
      <router-link to="/home" replace tag="button">首页</router-link>
      <router-link to="/about" replace tag="button">关于</router-link>
      <router-link :to="'/user/' + userId" replace tag="button">用户</router-link>
      <router-link :to="{path:'/profile',query:{'name':'waws','age':18,'height':1.88}}" replace tag="button">profile</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data(){
      return {
        userId:"waws"
      }
    }
  }
  </script>
  
  <style>
  .active{
    color: red;
  }
  </style>
  ```

  - 效果展示

    ![企业微信截图_20210908121103](images\企业微信截图_20210908121103.png)

- 在profile.vue中获取数据

  ```js
  <template>
    <div>
      <h2>这是profile的标题</h2>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.height}}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "profile"
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

  ![企业微信截图_20210908121942](images\企业微信截图_20210908121942.png)

- 如何使用它们呢? 也有两种方式: <router-link>的方式和JavaScript代码方式

App.vue的书写

```js
// 使用js代码的方式进行参数的传递
<template>
  <div id="app">
    <router-link to="/home" replace tag="button">首页</router-link>
    <router-link to="/about" replace tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" replace tag="button">用户</router-link>
    <button @click="toProfile">profile</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:"waws"
    }
  },
  methods:{
    toProfile(){
      this.$router.push({
        path:"/profile/" + 123,
        query:{
          name:"waws",
          age:18,
          height:1.88
        }
      })
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
```

我们的profile.vue中拿到我们传递的数据

```python
<template>
  <div>
    <h2>这是profile的标题</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>
```

效果如图所示

![企业微信截图_20210908142121](images\企业微信截图_20210908142121.png)

### 获取参数

- 获取参数通过\$route对象获取的.
  - 在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.\$route ，并且当路由切换时，路由对象会被更新。