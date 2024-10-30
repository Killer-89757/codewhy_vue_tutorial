## v-pre

- **v-pre用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法**
- 比如下面的代码：
  - 第一个h2元素中的内容会被编译解析出来对应的内容
  - 第二个h2元素中会直接显示{{message}}

```html
<!--这个主要是v-pre的使用-->
<!--1.使用方式v-text="变量、表达式"-->
<!--2.将元素的值原封不动的进行输出-->
<!--3.假设我们要输出的就是{{message}},不用mustache语法解析-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{message}}</h2>
  <h2 v-pre>{{message}}</h2>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world"
    }
  })
</script>
</body>
</html>
```

![Snipaste_2021-08-06_17-05-47](image\Snipaste_2021-08-06_17-05-47.png)