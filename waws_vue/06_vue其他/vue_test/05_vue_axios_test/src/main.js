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

// request({
//   url:"http://httpbin.org",
//   method:"get"
// }).then(res => {
//   console.log(res);
// })

// request.get("http://httpbin.org",{
//   data:"a"
// }).then(res=>{
//   console.log(res.data);
// })

// request.get("http://httpbin.org",{
//   params:{
//     type:"pop",
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })


//并发请求
// request.all([request({
//   url:"http://httpbin.org",
//   params:{
//     page:1
//   }
// }),request({
//   url:"http://httpbin.org",
//   method:"get"
// })]).then(request.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))


//实例的使用
// const instance1 = axios.create({
//   baseURL:"http://127.0.0.1:9000/home",
//   timeout:5000,
// })
//
// const instance2 = axios.create({
//   baseURL:"http://127.0.0.1:9000/about",
//   timeout:5000,
// })
//
// //使用实例进行访问
// instance1({
//   url:"/article",
//   method:"get"
// }).then(res=>{
//   console.log(res);
// })


// 拦截器的使用

axios.interceptors.request.use(config=>{
  config.log("来到了request的拦截success中")
  return config
},err=>{
  config.log("来到了request的拦截failure中")
  return err
})
axios.interceptors.response.use(response=>{
  config.log("来到了response的拦截success中")
  return response.data
},err=>{
  config.log("来到了response的拦截failure中")
  return err
})

axios({
  url:"http://httpbin.org",
  method:"get"
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
