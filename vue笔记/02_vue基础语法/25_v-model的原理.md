## v-model的原理

- 实现元素和数据的双向绑定

  - 从我们的message的信息转换到input的绑定，其实是可以通过v-bind实现

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
    
    <div id="app">
      <input type="text" :value="message">
      {{message}}
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

    - 效果如图所示

      ![动画24](image\动画24.gif)

  - 我们想从input转化到message的时候，需要监听到input中的事件

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
    
    <div id="app">
      <input type="text" :value="message" @input="valueChange">
      {{message}}
    </div>
    
    <script src="../vue.js"></script>
    
    <script>
      const app = new Vue({
        el:"#app",
        data:{
          message:"hello world"
        },methods:{
          valueChange:function (event){
            this.message = event.target.value
          }
        }
      })
    </script>
    </body>
    </html>
    ```

    - 实现的效果

      ![动画25](image\动画25.gif)

- v-model其实是一个语法糖，它的背后本质上是包含两个操作：

  - 1.v-bind绑定一个value属性

  - 2.v-on指令给当前元素绑定input事件

- 也就是说下面的代码：等同于下面的代码：

```html
<input type="text" v-model="message">
等同于
<input type="text" v-bind:value="message" v-on:input="message = $event.target.value">
```

