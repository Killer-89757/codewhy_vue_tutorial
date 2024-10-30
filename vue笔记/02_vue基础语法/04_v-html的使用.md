## v-html

- 某些情况下，我们从服务器请求到的数据本身就是一个**HTML代码**
  - 如果我们直接通过{{}}来输出，会将HTML代码也一起输出。
  - 但是我们可能希望的是按照HTML格式进行解析，并且显示对应的内容。
- 如果我们希望解析出HTML展示
  - 可以使用`v-html`指令
    - 该指令后面往往会跟上一个string类型
    - 会将string的html解析出来并且进行渲染

```html
<!--这个主要是v-html的使用-->
<!--1.使用方式v-html="变量、表达式"-->
<!--2.将带有html标签的数据解析成相应元素-->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{url}}</h2>
  <h2 v-html="url"></h2>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world",
      url:"<a href='http://www.baidu.com'>百度一下</a>"
    }
  })
</script>
</body>
</html>
```

效果如下：

![Snipaste_2021-08-06_16-51-52](image\Snipaste_2021-08-06_16-51-52.png)

