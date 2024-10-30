## v-text

- v-text作用和Mustache比较相似：都是用于将数据显示在界面中
- v-text通常情况下，接受一个string类型

```html
<!--这个主要是v-text的使用-->
<!--1.使用方式v-text="变量、表达式"-->
<!--2.将元素的值插入到标签之中-->
<!--3.对元素之间原有的值进行覆盖(需要注意)-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{message}}</h2>
  <h2 v-text="message"></h2>

  <!--不够灵活存在覆盖现象-->
  <h2 v-text="message">,hello vue!</h2>
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

![Snipaste_2021-08-06_16-58-08](image\Snipaste_2021-08-06_16-58-08.png)