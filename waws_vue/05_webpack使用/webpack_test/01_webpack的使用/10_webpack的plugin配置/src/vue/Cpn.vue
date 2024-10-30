<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>我是Cpn的内容</p>
    <button @click="btnClick">Cpn按钮</button>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      name:"waws",
    }
  },
  methods:{
    btnClick(){
      console.log("waws就是神");
    }
  }
}
</script>

<style scoped>

</style>