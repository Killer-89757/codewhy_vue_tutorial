## v-bind绑定class（二）

- 绑定方式：数组语法
  - 数组语法的含义是:class后面跟的是一个数组。
- 数组语法有下面这些用法：

```html
用法一：直接通过[]绑定一个数组
<h2 :class="['active']">Hello World</h2>

用法二：也可以传入多个值
<h2 :class=“[‘active’, 'line']">Hello World</h2>

用法三：和普通的类同时存在，并不冲突
注：会有title/active/line三个类
<h2 class="title" :class=“[‘active’, 'line']">Hello World</h2>

用法四：如果过于复杂，可以放在一个methods或者computed中
注：classes是一个计算属性
<h2 class="title" :class="classes">Hello World</h2>
```

```html
<!--这个主要是v-bind的绑定class使用-->
<!--1.使用v-bind通过数组的方式加载class-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
      .active{
          color:red
      }
      .line{
          text-decoration: underline;
      }
      .zi_daxiao{
          font-size: 40px;
      }
  </style>
</head>
<body>
<div id="app">
  <div class="line" v-bind:class="[active,zi_daxiao]">{{message}}</div>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world",
      active:'active',
      line:'line',
      zi_daxiao:'zi_daxiao'
    },
  })
</script>
</body>
</html>
```

![Snipaste_2021-08-09_05-35-55](image\Snipaste_2021-08-09_05-35-55.png)

