## 具名插槽slot

- 当子组件的功能复杂时，子组件的插槽可能并非是一个
  - 比如我们封装一个导航栏的子组件，可能就需要三个插槽，分别代表左边、中间、右边
  - 那么，外面在给插槽插入内容时，如何区分插入的是哪一个呢？
  - 这个时候，我们就需要给插槽起一个名字
- 如何使用具名插槽呢？
  - 非常简单，只要给slot元素一个name属性即可
  - `<slot name='myslot'></slot>`
- 我们来给出一个案例：
  - 这里我们先不对导航组件做非常复杂的封装，先了解具名插槽的用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<div id="app">

  <my_cpn><span slot="center">waws 就是神!!!</span></my_cpn>
</div>


<template id="cpn">
  <div>
    <slot name="left"><span>左边</span></slot>
    <slot name="center"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
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
      }
    }
  })
</script>
</body>
</html>
```

效果如下

![企业微信截图_20210822152950](image\企业微信截图_20210822152950.png)



### 编译作用域

- 在真正学习插槽之前，我们需要先理解一个概念：`编译作用域`
- 官方对于编译的作用域解析比较简单，我们自己来通过一个例子来理解这个概念：
- 我们来考虑下面的代码是否最终是可以渲染出来的：
  - `<my-cpn v-show="isShow"></my-cpn>`中，我们使用了**isShow**属性
  - isShow属性包含在组件中，也包含在Vue实例中
- 答案：最终可以渲染出来，也就是使用的是Vue实例的属性
- 为什么呢？
  - 官方给出了一条准则：**父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译**
  - 而我们在使用`<my-cpn v-show="isShow"></my-cpn>`的时候，整个组件的使用过程是相当于在父组件中出现的
  - 那么他的作用域就是父组件，使用的属性也是属于父组件的属性
  - 因此，isShow使用的是Vue实例中的属性，而不是子组件的属性

![image-20241021200524576](image\image-20241021200524576.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div id="app">

    <my_cpn v-show="isShow"></my_cpn>
</div>


<template id="cpn">
    <div>
        <h2>我是子组件</h2>
        <p>我是内容，哈哈哈</p>
    </div>
</template>

<script src="../vue.js"></script>

<script>

    const app = new Vue({
        el:"#app",
        data:{
            message:"hello world",
            isShow:true
        },
        components:{
            my_cpn:{
                template:"#cpn",
                data(){
                    return {
                        isShow:false
                    }
                }
            }
        }
    })
</script>
</body>
</html>
```

效果展示

![企业微信截图_20210822154437](image\企业微信截图_20210822154437.png)

我们上面的div是在Vue实例中，所以使用的也都是Vue实例中的属性和方法。