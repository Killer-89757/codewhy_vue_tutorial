import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach(function (to,from,next){
  //从from到to的路由跳转
  document.title = to.matched[0].meta.title
  // console.log(to);
  next()
})

// router.afterEach((to,from)=>{
//   console.log("------");
// })

// console.log(router);
