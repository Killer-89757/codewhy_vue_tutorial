## v-cloak(斗篷)

出现一种现象：当我们的从上倒下运行的代码比较慢的时候，js可能卡住，这样的话，在界面上会显示胡子语法{{message}},在js运行通畅的时候才会加载出来数据。

```html
使用setTimeout模拟


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{message}}</h2>
</div>

<script src="../vue.js"></script>

<script>
  setTimeout(function (){
    const app = new Vue({
      el:"#app",
      data:{
        message:"hello world"
      }
    })
  },2000)
</script>
</body>
</html>
```

效果如下：

![动画2](image\动画2.gif)

使用v-cloak进行改进，就是在没有加载出数据之前，我们使用**v-cloak进行标记使用css对其进行遮蔽，在没有出现数据之前都是空白状态，直到数据加载出来**

- 在vue解析之前，div中有一个属性v-cloak
- 在vue解析之后，div中没有一个属性v-cloak

```html
<!--这个主要是v-cloak的使用-->
<!--1.使用v-cloak进行标记-->
<!--2.使用css对标记的部分进行修改-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    [v-cloak]{
        display: none;
    }
  </style>
</head>
<body>
<div id="app" v-cloak>
  <h2>{{message}}</h2>
</div>

<script src="../vue.js"></script>

<script>
  setTimeout(function (){
    const app = new Vue({
      el:"#app",
      data:{
        message:"hello world"
      }
    })
  },2000)
</script>
</body>
</html>
```

效果如下：

![动画3](image\动画3.gif)