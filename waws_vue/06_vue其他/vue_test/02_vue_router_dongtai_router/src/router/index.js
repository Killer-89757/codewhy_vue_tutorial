import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import News from "../components/homenews"
import Message from "../components/homemessage"
import Profile from "../components/profile"

Vue.use(Router)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },

  // 非懒加载的路由
  {
    path:"/home",
    component:Home,
    meta:{
      title:"首页"
    },
    children:[
      {
        path:'',
        redirect:"news"
      },
      {
        path:"news",
        component:News
      },
      {
        path:"message",
        component:Message
      }
    ]
  }
  ,
  {
    path:"/about",
    component:About,
    meta:{
      title:"关于"
    }
  }
  ,
  {
    path:"/user/:userId",
    component:User,
    meta:{
      title:"用户"
    }
  },
  {
    path:"/profile/:id",
    component:Profile,
    meta:{
      title:"我的"
    }
  }


  // 懒加载路由
  // {
  //   path:"/home",
  //   component:() => import("../components/Home")
  // }
  // ,
  // {
  //   path:"/about",
  //   component:() => import("../components/About")
  // }
  // ,
  // {
  //   path:"/user/:userId",
  //   component:() => import("../components/User")
  // }
]


const router = new Router({
  routes,
  mode:"history",
  linkActiveClass:"active"
})




export default router


