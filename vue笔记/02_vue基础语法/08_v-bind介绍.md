## v-bind介绍

- 前面我们学习的指令主要作用是将值插入到我们**模板的内容**当中。
- 但是，**除了内容需要动态来决定外，某些`属性`我们也希望动态来绑定**。
  - 比如动态绑定a元素的href属性
  - 比如动态绑定img元素的src属性
- 这个时候，我们可以使用v-bind指令：
  - 作用：动态绑定属性
  - 缩写：:
  - 预期：any (with argument) | Object (without argument)
  - 参数：attrOrProp (optional)
- 下面，我们就具体来学习v-bind的使用。

## v-bind基础

- v-bind用于绑定**一个或多个属性值**，或者**向另一个组件传递props值**(这个学到组件时再介绍)
- 在开发中，有哪些属性需要动态进行绑定呢？
  - 还是有很多的，比如图片的链接src、网站的链接href、动态绑定一些类、样式等等
- 比如通过Vue实例中的data绑定**元素的src和href**，代码如下：

**错误的写法**

```html
<!--错误的做法，这个地方使用mustache语法的话，属性不会解析-->
<!--<img src="{{imgurl}}" alt="">-->
```

**正确的写法**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">
  <!--错误的做法，这个地方使用mustache语法的话，属性不会解析-->
  <!--<img src="{{imgurl}}" alt="">-->

  <!--正确的做法，这个地方使用v-bind语法,解析属性-->
  <img v-bind:src="imgurl" alt="">
  <a v-bind:href="ahref">百度一下</a>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world",
      imgurl:"http://image1.chinanews.com.cn/cnsupload/big/2021/05-28/4-426/a9c289af870d4199a77c896bac89fa2b.jpg",
      ahref:"http://www.baidu.com/",
    }
  })
</script>
</body>
</html>
```

![Snipaste_2021-08-09_04-55-37](image\Snipaste_2021-08-09_04-55-37.png)

## v-bind语法糖

- v-bind有一个对应的语法糖，也就是简写方式
  - 在开发中，我们通常会使用语法糖的形式，因为这样更加简洁。
- 简写方式如下：

**将v-bind:xxx简写为:xxxx**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">
  <!--使用v-bind语法糖,解析属性-->
  <img :src="imgurl" alt="">
  <a :href="ahref">百度一下</a>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world",
      imgurl:"http://image1.chinanews.com.cn/cnsupload/big/2021/05-28/4-426/a9c289af870d4199a77c896bac89fa2b.jpg",
      ahref:"http://www.baidu.com/",
    }
  })
</script>
</body>
</html>
```

