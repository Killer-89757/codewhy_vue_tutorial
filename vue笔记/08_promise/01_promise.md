## promise

### Promise简介

- ES6中一个非常重要和好用的特性就是Promise
- Promise到底是做什么的呢？
  - **Promise是异步编程的一种解决方案**
- 那什么时候我们会来处理**异步事件**呢？
  - 一种很常见的场景应该就是网络请求了
  - 我们封装一个网络请求的函数，因为不能立即拿到结果，所以不能像简单的3+4=7一样将结果返回
  - 所以往往我们会传入另外一个函数，在数据请求成功时，将数据通过传入的函数回调出去
  - 如果只是一个简单的网络请求，那么这种方案不会给我们带来很大的麻烦
- 但是，当网络请求非常复杂时，就会出现**回调地狱**

### 网络请求的回调地狱

- 我们来考虑下面的场景：

  - 我们需要通过一个url1从服务器加载一个数据data1，data1中包含了下一个请求的url2
  - 我们需要通过data1取出url2，从服务器加载数据data2，data2中包含了下一个请求的url3
  - 我们需要通过data2取出url3，从服务器加载数据data3，data3中包含了下一个请求的url4
  - 发送网络请求url4，获取最终的数据data4

  ![image-20210908173059911](images\image-20210908173059911.png)

- 上面的代码有什么问题吗？
  - 正常情况下，不会有什么问题，可以正常运行并且获取我们想要的结果
  - 但是，这样额代码难看而且不容易维护
  - 我们更加期望的是一种更加优雅的方式来进行这种异步操作
- 如何做呢？就是使用Promise
  
  - Promise可以以一种非常优雅的方式来解决这个问题

### 定时器的异步事件

- 我们先来看看Promise最基本的语法

- 这里，我们用一个定时器来模拟异步事件：

  - 假设下面的data是从网络上2秒后请求的数据
  - console.log就是我们的处理方式

  ```js
  <script>
      //1.使用setTimeOut
      setTimeout(()=>{
          console.log("hello world");
      },2000)
  </script>
  ```

  ![动画1](images\动画1.gif)

- 这是我们过去的处理方式，我们将它换成Promise代码

  ```js
  <script>
      //1.使用setTimeout执行异步操作
      // setTimeout(()=>{
      //     console.log("hello world");
      // },3000)
  
  
      //参数-->函数(resolve,reject)
      //resolve,reject本身他们又是函数
      new Promise((resolve,reject)=>{
          //第一次网络请求的代码
          setTimeout(()=>{
              resolve()
          },3000)
      }).then(()=>{
          //第一次拿到结果的处理的代码
          console.log("hello world");
          console.log("hello world");
          console.log("hello world");
          console.log("hello world");
          console.log("hello world");
          return new Promise((resolve, reject)=>{
              //第二次网络请求的代码
              setTimeout(()=>{
                  resolve()
              },3000)
      }).then(()=>{
          //第二次拿到结果的处理的代码
          console.log("hello vue");
          console.log("hello vue");
          console.log("hello vue");
          console.log("hello vue");
          console.log("hello vue");
          return new Promise((resolve,reject)=>{
              //第三次拿到结果的处理的代码
              setTimeout(()=>{
                  resolve()
              },3000)
      }).then(()=>{
          //第三次拿到结果的处理的代码
          console.log("hello python");
          console.log("hello python");
          console.log("hello python");
          console.log("hello python");
          console.log("hello python");
          })
      })
  })
  </script>
  ```

  ![动画2](images\动画2.gif)

  ![动画3](images\动画3.gif)

- 这个例子会让我们感觉脱裤放屁，多此一举

  - 首先，下面的Promise代码明显比上面的代码看起来还要复杂
  - 其次，下面的Promise代码中包含的resolve、reject、then、catch都是些什么东西？

- 我们先不管第一个复杂度的问题，因为这样的一个屁大点的程序根本看不出来Promise真正的作用 

### 定时器异步事件解析

- 我们先来认认真真的读一读这个程序到底做了什么？
  - new Promise很明显是创建一个Promise对象
  - 小括号中((resolve, reject) => {})也很明显就是一个函数，而且我们这里用的是之前刚刚学习过的箭头函数
    - 但是resolve, reject它们是什么呢？
    - 我们先知道一个事实：在创建Promise时，传入的这个箭头函数是固定的（一般我们都会这样写）
    - resolve和reject它们两个也是函数，通常情况下，我们会根据请求数据的成功和失败来决定调用哪一个
  - 成功还是失败？
    - 如果是成功的，那么通常我们会调用resolve(messsage)，这个时候，我们后续的then会被回调
    - 如果是失败的，那么通常我们会调用reject(error)，这个时候，我们后续的catch会被回调
  - OK，这就是Promise最基本的使用了
  
  ```js
  <script>
      //什么情况下会用到Promise?
      //一般情况下是有异步操作的时候，使用promise对这个异步操作进行封装
      // new --->构造函数(1.保存了一些状态信息，2.执行传入的函数)
      new Promise((resolve,reject)=>{
          setTimeout(()=>{
              // 成功的时候调用
              // resolve("hello waws")
              
              //失败的时候调用
              reject("err message")
          })
      }).then((data)=>{
          console.log(data);
      }).catch((data)=>{
          console.log(data);
      })
  </script>
  ```
  
  