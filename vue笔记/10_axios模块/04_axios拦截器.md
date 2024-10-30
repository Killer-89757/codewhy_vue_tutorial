## axios拦截器

- axios提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理。

- 使用拦截器

  ![image-20210910152412614](images\image-20210910152412614.png)

![image-20210910152449827](images\image-20210910152449827.png)

![image-20210910152529332](images\image-20210910152529332.png)

```js
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标
        // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
        return config
    }, err => {
        // console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}
```

打印请求拦截下来的`config`信息

![image-20241024104432241](images\image-20241024104432241.png)

- 请求拦截中拿到了`config`之后，一定要记得`return config`，否则将会造成请求失败
  - 实际的核心就是对`config`进行检查和增删操作
- 响应拦截中拿到了`res.data`之后，一定要记得`return res.data`，否则将会造成响应失败，返回的是undefined，没有真实数据
  - 实际的核心就是对`data`进行检查和过滤操作

### 拦截器中都做什么

- 请求拦截可以做到的事情：

  ![image-20210910152628669](images\image-20210910152628669.png)

- 请求拦截中错误拦截较少，通常都是配置相关的拦截

  - 可能的错误比如请求超时，可以将页面跳转到一个错误页面中

- 响应拦截中完成的事情：

  - 响应的成功拦截中，主要是对数据进行过滤

  ![image-20210910152858098](images\image-20210910152858098.png)
  ![image-20210910152937457](images\image-20210910152937457.png)

- 响应的失败拦截中，可以根据status判断报错的错误码，跳转到不同的错误提示页面

  ![image-20210910153006586](images\image-20210910153006586.png)