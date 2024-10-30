## v-on基础

事件监听

- 在前端开发中，我们需要经常和用于交互
  - 这个时候，我们就必须监听用户发生的事件，比如点击、拖拽、键盘事件等等
  - 在Vue中如何监听事件呢？使用`v-on`指令
- v-on介绍
  - 作用：绑定事件监听器
  - 缩写：@
  - 预期：Function | Inline Statement | Object
  - 参数：event
- 下面，我们就具体来学习v-on的使用。

直接在v-on中使用简单表达式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{counter}}</h2>
  <button v-on:click="counter++">+</button>
  <button v-on:click="counter--">-</button>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      counter:0
    }
  })
</script>
</body>
</html>
```

直接在v-on中定义方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{counter}}</h2>
  <button v-on:click="add">+</button>
  <button v-on:click="sub">-</button>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      counter:0
    },
    methods:{
      add:function (){
        this.counter++
      },
      sub:function (){
        this.counter--
      }
    }
  })
</script>
</body>
</html>
```

函数的增强写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{counter}}</h2>
  <button v-on:click="add">+</button>
  <button v-on:click="sub">-</button>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      counter:0
    },
    methods:{
      add() {                  //注意和上面的区别
        this.counter++
      },
      sub() {
        this.counter--
      }
    }
  })
</script>
</body>
</html>
```

- 这里，我们用一个监听按钮的点击事件，来简单看看v-on的使用
  - 下面的代码中，我们使用了v-on:click="counter++”
  - 另外，我们可以将事件指向一个在methods中定义的函数

- 注：v-on也有对应的语法糖：
  - v-on:click可以写成@click

使用语法糖的代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <h2>{{counter}}</h2>
  <button @click="add">+</button>
  <button @click="sub">-</button>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      counter:0
    },
    methods:{
      add() {
        this.counter++
      },
      sub() {
        this.counter--
      }
    }
  })
</script>
</body>
</html>
```

效果如图所示：

![动画7](image\动画7.gif)