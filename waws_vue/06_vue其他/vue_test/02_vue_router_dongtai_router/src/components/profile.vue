<template>
  <div>
    <h2>这是profile的标题</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "profile",
  created() {
    console.log("profile created");
  },
  destroyed(){
    console.log("profile destroyed");
  },
}
</script>

<style scoped>

</style>
