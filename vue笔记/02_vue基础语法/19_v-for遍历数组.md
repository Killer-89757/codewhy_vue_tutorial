## v-for遍历数组

- 当我们有一组数据需要进行渲染时，我们就可以使用v-for来完成
  - v-for的语法类似于JavaScript中的for循环
  - 格式如下：item in items的形式
- 我们来看一个简单的案例：
- 如果在遍历的过程中不需要使用索引值
  - v-for="movie in movies"
  - 依次从movies中取出movie，并且在元素的内容中，我们可以使用Mustache语法，来使用movie
- 如果在遍历的过程中，我们需要拿到元素在数组中的索引值呢？
  - 语法格式：v-for=(item, index) in items
  - 其中的index就代表了取出的item在原数组的索引值
  - 需要注意的是：
    - 我们的数据在前，索引在后，不要乱了顺序
    - 同时我们的索引是从0开始的

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <ul>
    <!--1.在遍历的过程中，没有使用索引值-->
    <li v-for="item in name">{{item}}</li>
  </ul>

  <ul>
    <!--2.在遍历的过程中，获取索引值-->
    <li v-for="(item,index) in name">{{index}}.{{item}}</li>
  </ul>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      name:["kobe","weide","libai","dufu"]
    }
  })
</script>
</body>
</html>
```

![Snipaste_2021-08-11_20-55-03](image\Snipaste_2021-08-11_20-55-03.png)

遍历对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <ul>
    <!--1.在遍历对象的过程中，如果只获取一个值，那么获取到的是value-->
    <li v-for="item in info">{{item}}</li>
  </ul>

  <ul>
    <!--2.获取key和value的形式：(value,key)-->
    <li v-for="(value,key) in info">{{value}}--{{key}}</li>
  </ul>

  <ul>
    <!--3.获取key和value和index的形式：(value,key,index)-->
    <li v-for="(value,key,index) in info">{{value}}---{{key}}---{{index}}</li>
  </ul>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      info:{
        name:"waws",
        age:18,
        height:1.88
      }
    }
  })
</script>
</body>
</html>
```

![Snipaste_2021-08-11_21-05-34](image\Snipaste_2021-08-11_21-05-34.png)