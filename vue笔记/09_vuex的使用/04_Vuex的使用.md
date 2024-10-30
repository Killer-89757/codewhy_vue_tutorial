## Vuex的使用

### 简单案例

- 首先，我们需要在某个地方存放我们的Vuex代码：
  - 这里，我们先创建一个文件夹store，并且在其中创建一个index.js文件

  - 在index.js文件中写入如下代码：

    ```python
    import Vue from "vue"
    import Vuex from "vuex"
    
    
    Vue.use(Vuex)
    
    const store = new Vuex.Store({
      state:{
        counter:0
      },
      mutations:{
        //方法
        add(state){
          state.counter++
        },
        sub(state){
          state.counter--
        }
      },
      actions:{
    
      },
      getters:{
    
      },
      modules:{
    
      }
    })
    
    export default store
    ```

### 挂载到Vue实例中

- 其次，我们让所有的Vue组件都可以使用这个store对象
  - 来到main.js文件，导入store对象，并且放在new Vue中

    ```python
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import store from "./store";
    
    Vue.config.productionTip = false
    
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
    ```

  - 这样，在其他Vue组件中，我们就可以通过this.$store的方式，获取到这个store对象了

    ```python
    <template>
      <div id="app">
        <h2>-------App内容---------</h2>
        <h2>{{message}}</h2>
        <p>{{$store.state.counter}}</p>
        <button @click="addClick">+</button>
        <button @click="subClick">-</button>
        <h2>-------Hello vue内容--------</h2>
        <HelloWorld></HelloWorld>
      </div>
    </template>
    
    <script>
    
    import HelloWorld from "./components/HelloWorld";
    export default {
      name: 'App',
      components:{
        HelloWorld
      },
      data(){
        return {
          message:"waws就是神！",
        }
      },
      methods:{
        addClick(){
          this.$store.commit("add")
        },
        subClick(){
          this.$store.commit("sub")
        }
      }
    }
    </script>
    
    <style>
    
    </style>
    ```

### 使用Vuex的count

- 好的，这就是使用Vuex最简单的方式了。
- 我们来对使用步骤，做一个简单的小节：
  - 1.提取出一个公共的store对象，用于保存在多个组件中共享的状态
  - 2.将store对象放置在new Vue对象中，这样可以保证在所有的组件中都可以使用到
  - 3.在其他组件中使用store对象中保存的状态即可
    - 通过**this.$store.state.属性的方式**来访问状态
    - 通过**this.$store.commit('mutation中方法')**来修改状态
- 注意事项：
  - 我们通过提交mutation的方式，而非直接改变store.state.count
  - 这是因为Vuex可以更明确的追踪状态的变化，所以不要直接改变store.state.count的值

#### 使用vue-devtools可以监控我们的数据的变化，并记录过程

![动画2](images\动画2.gif)