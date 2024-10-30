<template>
  <div id="app">
    <router-link to="/home" replace tag="button">首页</router-link>
    <router-link to="/about" replace tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" replace tag="button">用户</router-link>
<!--    <router-link :to="{path:'/profile',query:{'name':'waws','age':18,'height':1.88}}" replace tag="button">profile</router-link>-->
    <button @click="toProfile">profile</button>
    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:"waws"
    }
  },
  methods:{
    toProfile(){
      this.$router.push({
        path:"/profile/" + 123,
        query:{
          name:"waws",
          age:18,
          height:1.88
        }
      })
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
