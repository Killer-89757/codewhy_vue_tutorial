## axios的实例

- 为什么要创建axios的实例呢?
  - 当我们从axios模块中导入对象时, 使用的实例是默认的实例
  - 当给该实例设置一些默认配置时, 这些配置就被固定下来了
  - 但是后续开发中, 某些配置可能会不太一样
  - 比如某些请求需要使用特定的baseURL或者timeout或者content-Type等
  - 这个时候, 我们就可以**创建新的实例**, 并且**传入属于该实例的配置信息**

![image-20210910152045376](images\image-20210910152045376.png)

![image-20210910152153190](images\image-20210910152153190.png)

```python
# 使用实例的方式，将不同路由的公共的部分抽离，然后使用实例完成上面的请求过程
const instance1 = axios.create({
  baseURL:"http://127.0.0.1:9000/home",
  timeout:5000,
})

const instance2 = axios.create({
  baseURL:"http://127.0.0.1:9000/about",
  timeout:10000,
})

# 使用实例进行访问
instance1({
  url:"/article",
  method:"get"
}).then(res=>{
  console.log(res);
})
```

### 常见的请求逻辑

```python
# 我们在created的时候去请求接口拿到数据封装到组件中
<template>
  <div id="app">
    <p>{{result}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return {
      result:""
    }
  },
  created() {
    axios({
      url:"http://httpbin.org",
      method:"get",
    }).then(res=>{
      this.result = res.data
    })
  }
}
</script>

<style>

</style>
```

不好的原因：我们上面实现的代码对于第三方的依赖太强了，当axios不在继续更新和维护的时候，我们的所有组件中的数据加载的逻辑都要发生改变

### axios封装

```python
import originAxios from "axios"

export default function request(option,sucess,failure){
  return new Promise((resolve,reject)=>{
    const instance = originAxios.create({
      baseURL:"/api",
      timeout:5000,
      headers:""
    });

    instance(option).then(res=>{
      console.log(res);
      sucess()
    }).catch(err=>{
      console.log(err);
      failure()
    })
  })
}
```

- 第二种方式

```python
import originAxios from "axios"
export default function request(option){
    const instance = originAxios.create({
      baseURL:"/api",
      timeout:5000,
      headers:""
    });
	
    //实际上的instance的返回值是一个promise
    return instance(option)
}
```

**递进式理解**

1. 我们直接传入success、failure函数用于对请求成功和失败的情况进行处理

```js
// 请求封装部分
export function request(config, success, failure) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err => {
      failure(err)
    })
}
```

```js
// 调用部分
import {request} from "./network/request";

request({
  url: '/home/multidata'
}, res => {
  console.log(res);   // 这个箭头函数就是success的处理逻辑
}, err => {
  console.log(err);   // 这个箭头函数就是failure的处理逻辑
})
```

2. 我们直接将success、failure函数作为config对象的一部分用于对请求成功和失败的情况进行处理

```js
// 请求封装部分
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config.baseConfig)
    .then(res => {
      // console.log(res);   // 封装中其实也可以做一些事情
      config.success(res);
    })
    .catch(err => {
      // console.log(err);
      config.failure(err)
    })
}
```

```js
// 调用部分
import {request} from "./network/request";
request({
  baseConfig: {

  },
  success: function (res) {

  },
  failure: function (err) {

  }
})
```

3. 我们直接使用promise对axios进行封装，使用resolve, reject将success、failure函数替换完成对请求成功和失败的情况进行处理(其实和上面一样)

```js
// 请求封装部分
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
```

```js
// 调用部分
import {request} from "./network/request";
// 这个地方是promise的实例，我们直接使用then和catch处理正常和失败的代码
request({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    // console.log(err);
})
```

4. 最终方案，因为axios的实例本身就是promise对象，所以返回实例可以调用then和catch，不用在封装promise

```js
// 请求封装部分
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    
    // 直接返回实例即可 
    return instance(config)
}
```

```js
// 调用部分
import {request} from "./network/request";
// 这个地方是promise的实例，我们直接使用then和catch处理正常和失败的代码
request({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    // console.log(err);
})
```

![image-20241024103347007](images\image-20241024103347007.png)
