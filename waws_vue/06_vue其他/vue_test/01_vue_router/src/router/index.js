//配置路由相关信息

import VueRouter from "vue-router"
import Vue from "vue";
import Home from "../components/Home";
import about from "../components/about";
// 1.通过Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  //设置默认的路由，使用重定向实现
  {
    path:"/",
    redirect:"/home"
  },
  //一个路由组件是一个对象
  {
    path:"/home",
    component:Home
  },
  {
    path:"/about",
    component:about
  }
]

const router = new VueRouter({
  //routes中配置路由和组件之间的映射关系
  routes,
  mode:"history",
  linkActiveClass:"active"
})

//3. 将router对象传入到Vue的实例中
export default router
