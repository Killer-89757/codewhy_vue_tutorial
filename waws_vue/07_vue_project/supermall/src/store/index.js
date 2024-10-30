import Vuex from 'vuex'
import Vue from 'vue'
import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutation-types";
import mutations from "./mutaions";
import actions from "./actions"
import getters from "./getters";
// 1.安装插件

Vue.use(Vuex)

// 2.创建store对象
const state = {
  cartList: []
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 挂载

export default store
