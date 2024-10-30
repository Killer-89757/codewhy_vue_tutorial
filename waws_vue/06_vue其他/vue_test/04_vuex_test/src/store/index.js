import Vue from "vue"
import Vuex from "vuex"
import {ADDFUNCTION} from "./mutations-types";

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:0,
    students:[
      {id:100,name:"waws",age:19},
      {id:101,name:"waws1",age:69},
      {id:102,name:"waws2",age:39},
      {id:103,name:"waws3",age:9},
      {id:104,name:"waws4",age:20}
    ],
    info:{
      name:"waws",
      age:20,
      height:1.88
    }
  },
  mutations:{
    //方法
    add(state){
      state.counter++
    },
    sub(state){
      state.counter--
    },
    addnum(state,count){
      console.log(count);
      state.counter += count
    },
    updateInfo(state){
      // state.info["address"] = "双城"
      state.info.name = "waws520"
    },
    [ADDFUNCTION](state){
      state.counter += 15
    }

  },
  actions:{
    aupdateInfo(context){
      setTimeout(()=>{
        context.commit("updateInfo")
      },1000)
    }
  },
  //相当于计算属性
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    greaterAgesthan20Element:state=>{
      return state.students.filter(s=>s.age > 20)
    },
    greaterAgesthan20ElementLength:(state,getters)=>{
      return getters.greaterAgesthan20Element.length
    },
    //传递参数其实就是返回一个函数
    zidingyimorethan20(state){
      return function (age){
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules:{
    a:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    },
    b:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    },
    c:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    },
  }
})

export default store
