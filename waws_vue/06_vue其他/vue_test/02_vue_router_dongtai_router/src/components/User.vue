<template>
  <div>
    <h2>用户</h2>
    <p>这是用户的界面，呵呵呵呵</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "user",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  created() {
    console.log("User created");
  },
  destroyed(){
    console.log("User destroyed");
  },
  methods:{
    btnClick(){
      console.log(this.$router);
      console.log(this.$route);
    }
  }
}
</script>

<style scoped>

</style>
