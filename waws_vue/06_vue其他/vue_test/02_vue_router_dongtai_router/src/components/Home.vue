<template>
  <div>
    <h2>首页</h2>
    <p>这是首页的内容，哈哈哈哈</p>
    <router-link to="/home/news" tag="button" replace>新闻</router-link>
    <router-link to="/home/message" tag="button" replace>信息</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "home",

  created() {
    console.log("created");
    // this.path = "/home/news"
  },
  destroyed(){
    console.log("destroyed");
  },
  // activated() {
  //   this.$router.push(this.path)
  // },
  // beforeRouteLeave(to, from, next) {
  //     this.path = this.$route.path
  //     next()
  // }

}
</script>

<style scoped>

</style>
