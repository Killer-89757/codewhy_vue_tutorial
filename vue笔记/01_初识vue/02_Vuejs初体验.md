##  Vuejs初体验

- 我们来做我们的第一个Vue程序，体验一下Vue的响应式

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
<body>
<div id="app">
    {{ message }}
</div>

<script src="../vue.js"></script>
<script>

    // 编程范式(声明(响应)式编程)
    // 修改数据message，数据更改完，界面直接更改
    const app = new Vue({
        el:"#app", //用于挂载要管理的元素
        data:{     //定义数据
            message:"hello world"
        }
    })


    // 原始的js的做法(命令式编程)
    //1.定义一个div元素，设置id属性
    //2.定义一个变量叫做message
    //3.将message变量放在前面的div元素中进行显示
    
    // 修改数据message
    //4.修改message的数据：hello vue!
    //5.将修改后的数据再次替换到div元素中
</script>
</body>
</html>
```

- **代码做了什么事情？**
- 我们来阅读JavaScript代码，会发现创建了一个Vue对象。 
- 创建Vue对象的时候，传入了一些**options**：{}
  - {}中包含了**el属性**：该属性决定了这个Vue对象挂载到哪一个元素上，很明显，我们这里是挂载到了id为app的元素上
  - {}中包含了**data属性**：该属性中通常会存储一些数据
    - 这些数据可以是我们直接定义出来的，比如像上面这样。
    - 也可能是来自网络，从服务器加载的。
- 浏览器执行代码的流程：
  - 执行到10~13行代码显然出对应的HTML
  - 执行第16行代码创建Vue实例，并且对原HTML进行解析和修改。
  - 在控制台对app.message进行修改
  - ![Snipaste_2021-08-06_14-32-13](image\Snipaste_2021-08-06_14-32-13.png)

并且，目前我们的代码是可以做到响应式的。

