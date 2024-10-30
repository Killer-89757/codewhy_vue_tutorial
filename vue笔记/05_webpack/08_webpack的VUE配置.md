## webpack的VUE配置

### 引入vue.js

- 后续项目中，我们会使用Vuejs进行开发，而且会以特殊的文件来组织vue的组件

  - 所以，下面我们来学习一下如何在我们的webpack环境中集成Vuejs

- 现在，我们希望在项目中使用Vuejs，那么必然需要对其有依赖，所以需要先进行安装

  - 注：因为我们后续是在实际项目中也会使用vue的，所以并不是开发时依赖

  ```python
  npm install vue --save
  ```
  ![企业微信截图_20210906152407](images\企业微信截图_20210906152407.png)

- 那么，接下来就可以按照我们之前学习的方式来使用Vue了

  - 项目中运用代码

    - index.html

    ```python
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
    </body>
    <script src="./dist/commen.js"></script>
    </html>
    ```

    - main.js中增加vue代码

    ```python
    //使用vue进行开发
    import Vue from "vue"
    
    new Vue({
        el:"#app",
        data:{
            message:"Hello webpack"
        }
    })
    ```

### 打包项目–错误信息

- 修改完成后，重新打包，运行程序：

  - 打包过程没有任何错误(因为只是多打包了一个vue的js文件而已)

  ![企业微信截图_20210906152826](images\企业微信截图_20210906152826.png)

  - 但是运行程序，没有出现想要的效果，而且浏览器中有报错

  ![企业微信截图_20210906152952](images\企业微信截图_20210906152952.png)

- 这个错误说的是我们使用的是runtime-only版本的Vue，什么意思呢？

  - 这里我只说解决方案：Vue不同版本构建，后续我具体讲解runtime-only和runtime-compiler的区别。
    - runtime-only 代码中，不可以有任何的template
    - runtime-compiler 代码中可以有template，因为有compiler可以用于编译template

- 所以我们修改webpack的配置，添加如下内容即可

  ```python
  resolve:{
      alias:{
          'vue$':'vue/dist/vue.esm.js'
      }
  }
  ```

![image-20241022104911578](images\image-20241022104911578.png)

- 默认的情况下使用的是`vue.runtime.js`，所以对应的模式就是上面的`runtime-only`

- 而更改成`vue.esm.js`后，对应的模式其实是`runtime-compiler`

- 在此编译，运行成功

  ![企业微信截图_20210906153938](images\企业微信截图_20210906153938.png)

### el和template区别（一）

- 正常运行之后，我们来考虑另外一个问题：

  - 如果我们希望将data中的数据显示在界面中，就必须是修改index.html
  - 如果我们后面自定义了组件，也必须修改index.html来使用组件
  - 但是html模板在之后的开发中，我并不希望手动的来频繁修改，是否可以做到呢？

- 定义template属性：

  - 在前面的Vue实例中，我们定义了el属性，用于和index.html中的#app进行绑定，让Vue实例之后可以管理它其中的内容
  - 这里，我们可以将div元素中的{{message}}内容删掉，只保留一个基本的id为div的元素
  - 但是如果我依然希望在其中显示{{message}}的内容，应该怎么处理呢？
  - 我们可以再定义一个template属性，代码如下：

  ```python
  # 在index.html中将模板内容抽取出来
  <div id="app"></div>
  ```

  ```python
  # 使用template进行代码开发
  //使用vue进行开发
  import Vue from "vue"
  
  new Vue({
      el:"#app",
      template:`
        <div>
          <h2>{{message}}</h2>
          <button @click="buttonClick">按钮</button>
        </div>
      `,
      data:{
          message:"Hello webpack"
      },
      methods:{
          buttonClick(){
              alert("点击了按钮")
          }
      }
  })
  ```

  - 效果展示

    ![企业微信截图_20210906154726](images\企业微信截图_20210906154726.png)

    ![企业微信截图_20210906154832](images\企业微信截图_20210906154832.png)

> 其**核心**就是使用template的代码将index.html中`el:#app`部分的代码替换掉

### el和template区别（二）

- 重新打包，运行程序，显示一样的结果和HTML代码结构
- 那么，el和template模板的关系是什么呢？
  - 在我们之前的学习中，我们知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等
  - 而如果**Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板**
- 这样做有什么好处呢？
  - 这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可
- 但是，书写template模块非常麻烦怎么办呢？
  - 没有关系，稍后我们会将template模板中的内容进行抽离。
  - 会分成三部分书写：template、script、style，结构变得非常清晰。

### Vue组件化开发引入

- 在学习组件化开发的时候，我说过以后的Vue开发过程中，我们都会采用**组件化开发**的思想

  - 那么，在当前项目中，如果我也想采用组件化的形式进行开发，应该怎么做呢？

- 查看下面的代码：	

  - 当然，我们也可以将下面的代码抽取到一个js文件中，并且导出

  ```python
  # 在APP.js文件中 将VUE代码进行剥离
  export default {
      template:`
        <div>
          <h2>{{message}}</h2>
          <button @click="buttonClick">按钮</button>
        </div>
      `,
      data(){
          return {
              message:"waws"
          }
      },
      methods:{
          buttonClick(){
              alert("点击了按钮")
          }
      }
  }
  ```

  ```python
  # 在main.js中进行引入，完成组件注册，和template中调用
  import App from "./vue/app"
  
  new Vue({
      el:"#app",
      template:"<App></App>",
      components:{
          App
      }
  })
  ```
  - 效果展示

    ![企业微信截图_20210906155719](images\企业微信截图_20210906155719.png)

### .vue文件封装处理

- 但是一个组件以一个js对象的形式进行组织和使用的时候是非常不方便的

  - 一方面编写template模块非常的麻烦
  - 另外一方面如果有样式的话，我们写在哪里比较合适呢？

- 现在，我们以一种全新的方式来组织一个vue的组件

- 但是，这个时候这个文件可以被正确的加载吗？

  - 必然不可以，这种特殊的文件以及特殊的格式，必须有人帮助我们处理。
  - 谁来处理呢？vue-loader以及vue-template-compiler。

- 安装vue-loader和vue-template-compiler

  ```python
  npm install --save-dev vue-loader@13.0.0 vue-template-compiler
  ```

  - 安装过程报错：
    - 我们可以更改package.json
      - ^13.0.0 安装大于13.0.0的版本
      - ~13.0.0
      - 当我们修改了package.json之后，我们需要执行一下 npm install 对node的包进行更新
    - ![企业微信截图_20210906160449](images\企业微信截图_20210906160449.png)
    - ![企业微信截图_20210906161620](images\企业微信截图_20210906161620.png)

- 修改webpack.config.js的配置文件：

  ```python
  module: {
      rules: [
          {test:/\.vue$/,use:[ "vue-loader" ]}
      ]
  }
  ```

- 编译成功

  - ![企业微信截图_20210906161716](images\企业微信截图_20210906161716.png)

- 定义.vue文件 将vue代码进行抽离，完整过程

  - index.html

    ```python
    # 只需要定义一个替换元素即可
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    
    </head>
    <body>
    <div id="app"></div>
    </body>
    <script src="./dist/commen.js"></script>
    </html>
    ```

  - vue/App.vue

    ```python
    # template、style、script的代码完成分离
    # 在App中引入Cpn的组件，注意导入实在script中完成的
    <template>
      <div>
        <h2 class="title">{{message}}</h2>
        <button @click="buttonClick">按钮</button>
        <Cpn></Cpn>
      </div>
    </template>
    
    
    
    <script>
    import Cpn from "./Cpn.vue"
    
    export default {
      name: "App",
      components:{
        Cpn
      },
      data(){
        return {
          message:"waws"
        }
      },
      methods:{
        buttonClick(){
          alert("点击了按钮")
        }
      }
    }
    </script>
    
    <style scoped>
      .title {
        color:pink;
      }
    </style>
    ```

  - vue/Cpn.vue

    ```python
    <template>
      <div>
        <h2>我是Cpn组件的标题</h2>
        <p>我是Cpn的内容</p>
        <button @click="btnClick">Cpn按钮</button>
        <h3>{{name}}</h3>
      </div>
    </template>
    
    <script>
    export default {
      name: "Cpn",
      data(){
        return {
          name:"waws",
        }
      },
      methods:{
        btnClick(){
          console.log("waws就是神");
        }
      }
    }
    </script>
    
    <style scoped>
    
    </style>
    ```

  - main.js

    ```python
    //使用vue进行组件化开发
    import Vue from "vue"
    import App from "./vue/App.vue"
    new Vue({
        el:"#app",
        template:"<App></App>",
        components:{
            App
        }
    })
    ```

  - 效果展示：

    - 其实在这个部分我们就能感受到vue的组件化的好处，定义一个根组件，再在根组件中注册其他组件，一层一层向下延展，整个Vue的树就出来了

    ![企业微信截图_20210906162649](images\企业微信截图_20210906162649.png)

> 在import 进行导入vue包的时候，后缀名不能省略
>
> 但是在resolve增加extensions可以将后缀名为数组[".js",".vue",".css"]中的文件名的后缀省略
>
> ```python
> resolve:{
>     extensions:[".js",".vue",".css"],
>     alias:{
>       'vue$':'vue/dist/vue.esm.js'
>     }
>   }
> ```
>
> 不是重点，了解即可

