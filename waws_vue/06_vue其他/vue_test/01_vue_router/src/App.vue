<!--<template>-->
<!--  <div id="app">-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-view></router-view>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <button @click="HomeBtnClick">首页</button>
    <button @click="AboutBtnClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    HomeBtnClick(){
      // this.$router.push("/home")
      this.$router.replace("/home")
    },
    AboutBtnClick(){
      // this.$router.push("/about")
      this.$router.replace("/about")
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
