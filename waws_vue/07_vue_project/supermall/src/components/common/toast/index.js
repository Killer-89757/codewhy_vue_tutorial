import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.new的方式，根据组件构造器，创建出组件对象
  const toast = new toastContrustor()
  // 3.将组件对象挂在到某一元素上
  toast.$mount(document.createElement('div'))
  // 获取对象
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}


export default obj
