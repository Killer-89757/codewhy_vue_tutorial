<template>
  <div class="cart">
    <!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--    商品的列表-->
    <cart-list/>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
import CartList from "./childComps/CartList";

export default {
  name: "Cart",
  components: {
    CartList,
    NavBar
  },
  computed: {
    ...mapGetters([
      'cartLength', 'cartList'
    ])
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart{
  height: 100vh;
}
</style>
