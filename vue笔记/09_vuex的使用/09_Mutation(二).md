## Mutation(二)

### Mutation响应规则

- Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新

- 这就要求我们必须遵守一些Vuex对应的规则:
  - 提前在store中**初始化好所需的属性**
    - 这些属性都会被加入到响应式的系统中，而响应式系统会监听属性的变化，当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
  - 当给state中的对象添加新属性时, 使用下面的方式:
    - 方式一: **使用Vue.set(obj, 'newProp', 123)**
    - 方式二: **用新对象给旧对象重新赋值**
  
- 我们来看一个例子:
  
  - 当我们点击更新信息时, 界面并没有发生对应改变
  
    ```python
    mutations:{
        updateInfo(state){
            state.info["address"] = "双城"
        }
    }
    ```
  
    App.vue
  
    ```python
    <h2>-------响应式内容更新--------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo">修改信息</button>
    
    # 修改方法
    methods:{
        updateInfo(){
            this.$store.commit("updateInfo")
        }
    }
    ```
  
    ![企业微信截图_20210910114057](images\企业微信截图_20210910114057.png)
  
- 如何才能让它改变呢?
  - 查看下面代码的方式一和方式二
  
  - 都可以让state中的属性是响应式的
    - delete方法删除属性也不是响应式的，Vue.delete方法删除属性是响应式的
  
  ![企业微信截图_20210910114057](images\动画5.gif)

### Mutation常量类型 – 概念

- 我们来考虑下面的问题:
  - 在mutation中, 我们定义了很多事件类型(也就是其中的方法名称)
  - 当我们的项目增大时, Vuex管理的状态越来越多, 需要更新状态的情况越来越多, 那么意味着Mutation中的方法越来越多
  - 方法过多, 使用者需要花费大量的经历去记住这些方法, 甚至是多个文件间来回切换, 查看方法名称, 甚至如果不是复制的时候, 可能还会出现写错的情况
- 如何避免上述的问题呢?
  - 在各种Flux实现中, 一种很常见的方案就是使用**常量替代Mutation事件的类型**
  - 我们可以将这些常量放在一个单独的文件中, 方便管理以及让整个app所有的事件类型一目了然
- 具体怎么做呢?
  - 我们可以创建一个文件: mutation-types.js, 并且在其中定义我们的常量
  - 定义常量时, 我们可以使用ES2015中的风格, 使用一个常量来作为函数的名称

### Mutation常量类型 – 代码

App.vue

```python
<button @click="addnum15Click">+15</button>

# script
import {ADDFUNCTION} from "./store/mutations-types";
methods:{
    addnum15Click(count){
        this.$store.commit(ADDFUNCTION)
    },
}
```

mutation-types.js

```python
export const ADDFUNCTION = "add_num_15"
```

store/index.js

```python
import {ADDFUNCTION} from "./mutations-types";
[ADDFUNCTION](state){
    state.counter += 15
}
```

### Mutation同步函数

- 通常情况下, Vuex要求我们Mutation中的方法必须是同步方法.
  - 主要的原因是当我们使用devtools时, 可以devtools可以帮助我们捕捉mutation的快照
  - 但是如果是异步操作, 那么devtools将不能很好的追踪这个操作什么时候会被完成
  
- 比如我们之前的代码, 当执行更新时, devtools中会有如下信息: 图1

  ![image-20210910120426628](images\image-20210910120426628.png)

- 但是, 如果Vuex中的代码, 我们使用了异步函数: 图2

  - 我们已经使用了异步函数对数据进行了更新但是，更新效果在页面中显示正常，但是在devtools中没有修改，是因为devtools中没有追踪到异步的更改实际上，在vue的内部数据已经更改了，devtools没有保存数据而已

  ![image-20210910120438337](images\image-20210910120438337.png)

- 你会发现state中的info数据一直没有被改变, 因为他无法追踪到.

- 通常情况下, **不要再mutation中进行异步的操作**