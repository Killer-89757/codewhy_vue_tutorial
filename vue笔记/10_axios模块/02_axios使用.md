## axios使用

- 功能特点:
  - 在浏览器中发送 `XMLHttpRequests`请求
  - **在 node.js 中发送 http请求**
  - **支持 Promise API**
  - **拦截请求和响应**
  - **转换请求和响应数据**

- 补充: axios名称的由来? 个人理解
  - axios: ajax i/o system

### axiox请求方式

- 支持多种请求方式:

  - **axios(config)**
  - **axios.request(config)**
  - **axios.get(url[, config])**
  - **axios.delete(url[, config])**
  - **axios.head(url[, config])**
  - **axios.post(url[, data[, config]])**
  - **axios.put(url[, data[, config]])**
  - **axios.patch(url[, data[, config]])**

- 如何发送请求呢?

  ```python
  # 直接在main.js中进行显示
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  import axios from "axios"
  
  Vue.config.productionTip = false
  
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
  
  # axios的加载，默认情况下发送的就是一个get请求
  axios({
    url:"http://httpbin.org",
    method:"get"
  }).then(res => {
    console.log(res);
  })
  
  # 使用axios.get方式
  axios.get("http://httpbin.org",{
    data:"a"
  }).then(res=>{
    console.log(res);
  })
  
  # 添加参数params
  axios.get("http://httpbin.org",{
    params:{
      type:"pop",
      page:1
    }
  }).then(res=>{
    console.log(res);
  })
  
  ```

  效果展示

  ![企业微信截图_20210910154749](images\企业微信截图_20210910154749.png)

### 发送get请求演示

![image-20210910151211875](images\image-20210910151211875.png)

### 发送并发请求

- 有时候, 我们可能需求同时发送两个请求
  - 使用axios.all, 可以放入多个请求的数组.
  - axios.all([]) 返回的结果是一个数组，使用 **axios.spread** 可将数组 [res1,res2] 展开为 res1, res2

  ```python
  axios.all([axios({
    url:"http://httpbin.org",
    params:{
      page:1
    }
  }),axios({
    url:"http://httpbin.org",
    method:"get"
  })]).then(axios.spread((res1,res2)=>{
    console.log(res1);
    console.log(res2);
  }))
  ```

![image-20210910151409630](images\image-20210910151409630.png)

![企业微信截图_20210910160935](images\企业微信截图_20210910160935.png)

### 全局配置

- 在上面的示例中, 我们的**BaseURL**是固定的
  - 事实上, 在开发中可能很多参数都是固定的
  - 这个时候我们可以进行一些抽取, 也可以利用axiox的全局配置

```python
axios.defaults.baseURL = ‘123.207.32.32:8000’
axios.defaults.headers.post[‘Content-Type’] = ‘application/x-www-form-urlencoded’;
```

![image-20210910151540536](images\image-20210910151540536.png)

### 常见的配置选项

- **请求地址**
  - url: '/user',
- **请求类型**
  - method: 'get',
- **请根路径**
  - baseURL: 'http://www.mt.com/api',
- **请求前的数据处理**
  - transformRequest:[function(data){}],
- **请求后的数据处理**
  - transformResponse: [function(data){}],
- **自定义的请求头**
  - headers:{'x-Requested-With':'XMLHttpRequest'},
- **URL查询对象**
  - params:{ id: 12 },

- **查询对象序列化函数**
  - paramsSerializer: function(params){ }
- **request body**
  - data: { key: 'aa'},
- **超时设置(单位：ms)**
  - timeout: 1000,
- **跨域是否带Token**
  - withCredentials: false,
- **自定义请求处理**
  - adapter: function(resolve, reject, config){},
- **身份验证信息**
  - auth: { uname: '', pwd: '12'},
- **响应的数据格式** json / blob /document /arraybuffer / text / stream
  - responseType: 'json',

