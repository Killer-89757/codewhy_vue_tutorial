## v-model绑定radio

当存在多个单选框时

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">
  <label for="man">
    <input type="radio" id="man" name="sex" value="男" v-model="gender">男
  </label>
  <label for="woman">
    <input type="radio" id="woman" name="sex" value="女" v-model="gender">女
  </label>
  <h2>{{gender}}</h2>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world",
      gender:""
      gender:"男" # 默认值
    }
  })
</script>
</body>
</html>
```

效果如下：

![动画26](image/动画26.gif)

> 使用了上面的v-model进行绑定了之后我们的name属性可以去掉，这个互斥的部分由v-model来进行承担

