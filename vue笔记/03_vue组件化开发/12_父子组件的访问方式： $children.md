## **父子组件的访问方式：** $children

- 有时候我们需要**父组件直接访问子组件**，**子组件直接访问父组件**，或者是**子组件访问根组件**。
  - 父组件访问子组件：使用\$children或\$refs
  - 子组件访问父组件：使用\$parent

- 我们先来看下\$children的访问
  - **this.​\$children是一个数组类型**，**它包含所有子组件对象**。
  - 我们这里通过一个遍历，取出所有子组件的message状态。

#### children的使用(`不常用`)

- 数组类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">
  <!--3.组件的使用-->
  <my_cpn></my_cpn>
  <my_cpn></my_cpn>
  <my_cpn></my_cpn>
  <button @click="btnClick">按钮</button>
</div>


<template id="cpn">
  <div>
    <h2>这是子组件信息</h2>
  </div>
</template>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      message:"hello world"
    },
    components:{
      my_cpn:{
        template:"#cpn",
        data(){
          return {
            name:"waws",
            age:19
          }
        },methods:{
          showMessage(){
            console.log("这个是子组件的信息")
          }
        }
      }
    },
    methods:{
      btnClick(){
        console.log(this.$children)
        for (let c of this.$children){
          console.log(c.name);
          c.showMessage();
        }
      }
    }
  })
</script>
</body>
</html>
```

效果展示

![动画7](image\动画7.gif)

![企业微信截图_20210822142444](image\企业微信截图_20210822142444.png)

![企业微信截图_20210822142312](image\企业微信截图_20210822142312.png)

## **父子组件的访问方式：** $refs

- **$children的缺陷**：
  - 通过$children访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。
  - 但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。
  - **有时候，我们想明确获取其中一个特定的组件，这个时候就可以使用$refs**
- **$refs的使用**：
  - $refs和ref指令通常是一起使用的
  - 首先，我们通过**ref给某一个子组件绑定一个特定的ID**
  - 其次，通过**this.$refs.ID就可以访问到该组件了**

#### refs的使用(`常用`)

- 对象类型，默认是一个空的对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app">
    <!--3.组件的使用-->
    <my_cpn></my_cpn>
    <my_cpn></my_cpn>
    <my_cpn ref="aaa"></my_cpn>
    <button @click="btnClick">按钮</button>
</div>


<template id="cpn">
    <div>
        <h2>这是子组件信息</h2>
    </div>
</template>

<script src="../vue.js"></script>

<script>

    const app = new Vue({
        el:"#app",
        data:{
            message:"hello world"
        },
        components:{
            my_cpn:{
                template:"#cpn",
                data(){
                    return {
                        name:"waws",
                        age:19
                    }
                },methods:{
                    showMessage(){
                        console.log("这个是子组件的信息")
                    }
                }
            }
        },
        methods:{
            btnClick(){
                console.log(this.$refs.aaa)
                console.log(this.$refs.aaa.name)
            }
        }
    })
</script>
</body>
</html>
```

效果展示

![动画8](image\动画8.gif)

![企业微信截图_20210822143324](image\企业微信截图_20210822143324.png)