## 表单绑定v-model

- 表单控件在实际开发中是非常常见的。特别是对于用户信息的提交，需要大量的表单。

- Vue中使用`v-model`指令来**实现表单元素和数据的双向绑定**。

- 案例的解析：
  - **当我们在输入框输入内容时**
  - **因为input中的v-model绑定了message，所以会实时将输入的内容传递给message，message发生改变**
  - **当message发生改变时，因为上面我们使用Mustache语法，将message的值插入到DOM中，所以DOM会发生响应的改变**
  - **所以，通过v-model实现了双向的绑定**

- 当然，我们也可以将v-model用于textarea元素
- 效果如下

![](.\image\企业微信截图_20210821141354.png)

双向绑定，修改一个另外一个也会变化

![动画23](.\image\动画23.gif)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app">
    <input type="text" v-model="message">
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

