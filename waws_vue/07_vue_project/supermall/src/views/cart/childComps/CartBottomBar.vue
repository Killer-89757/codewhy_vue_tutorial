<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :checked="isSelectAll"
        class="check-button"
        @click.native="ClickAll()"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick()">
      去计算：{{CheckLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex';

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {

        return "￥" + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      CheckLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false
        //1.通过filter函数
        // return !(this.cartList.filter(item=>!item.checked).length)
        //2.通过find函数
        return !this.cartList.find(item => !item.checked)
        //3.通过普通遍历
        // for (let item of this.cartList) {
        //   if (!item.checked) {
        //     return false
        //   }
        // }
        // return true
      },
      isPurchaseALL() {
        return !this.cartList.find(item => item.checked)
      }

    },
    methods: {
      ClickAll() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.filter(item => {
            if (!item.checked) {
              item.checked = true
            }
          })
        }
      },
      calcClick() {
        if (this.isPurchaseALL) {
          this.$toast.show('请选择您想购买的商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
  }

  .check-content {
    display: flex;
    align-items: center;
    width: 80px;

  }

  .check-button {
    width: 19px;
    height: 19px;
    line-height: 15px;
    margin-left: 10px;
    margin-right: 4px;
  }

  .total-price {
    flex: 1;
  }

  .calculate {
    width: 90px;
    background-color: red;
    color: #ffffff;
    text-align: center;
  }
</style>
