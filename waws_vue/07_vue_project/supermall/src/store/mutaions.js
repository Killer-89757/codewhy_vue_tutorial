import {
  ADD_COUNTER,ADD_TO_CART
} from "./mutation-types"

export default {
  // 将添加数据和记录数据分开
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
