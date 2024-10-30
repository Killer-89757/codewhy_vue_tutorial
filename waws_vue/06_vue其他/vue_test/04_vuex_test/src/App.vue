<template>
  <div id="app">
    <h2>-------响应式内容更新--------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo">修改信息</button>



    <h2>-------App内容---------</h2>
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>
    <button @click="addClick">+</button>
    <button @click="subClick">-</button>
    <button @click="addnumClick(5)">+5</button>
    <button @click="addnumClick(10)">+10</button>
    <button @click="addnumClickanostyle(20)">+20</button>
    <button @click="addnum15Click">+15</button>
    <h2>-------vuex getters内容--------</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.greaterAgesthan20Element}}</p>
    <p>{{$store.getters.greaterAgesthan20ElementLength}}</p>
    <p>{{$store.getters.zidingyimorethan20(40)}}</p>

    <h2>-------Hello vue内容--------</h2>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld";
import {ADDFUNCTION} from "./store/mutations-types";

export default {
  name: 'App',
  components:{
    HelloWorld
  },
  data(){
    return {
      message:"waws就是神！",
    }
  },
  methods:{

    updateInfo(){
      this.$store.dispatch("aupdateInfo")
    },

    addClick(){
      this.$store.commit("add")
    },
    subClick(){
      this.$store.commit("sub")
    },
    addnumClick(count){
      this.$store.commit("addnum",count)
    },
    addnum15Click(count){
      this.$store.commit(ADDFUNCTION)
    },
    addnumClickanostyle(count){
      this.$store.commit({
        type:"addnum",
        count:count
      })
    }
  }
}
</script>

<style>

</style>
