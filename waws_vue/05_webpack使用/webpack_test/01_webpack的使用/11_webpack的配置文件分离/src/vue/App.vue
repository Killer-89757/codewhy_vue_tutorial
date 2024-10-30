<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="buttonClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>



<script>
import Cpn from "./Cpn.vue"

export default {
  name: "App",
  components:{
    Cpn
  },
  data(){
    return {
      message:"waws是神"
    }
  },
  methods:{
    buttonClick(){
      alert("点击了按钮")
    }
  }
}
</script>

<style scoped>
  .title {
    color:pink;
  }
</style>