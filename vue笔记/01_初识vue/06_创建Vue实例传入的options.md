## 创建Vue实例传入的options

- 你会发现，我们在创建Vue实例的时候，传入了一个对象`options`。

- 这个options中可以包含哪些选项呢？
  - 详细解析： https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE
  - 目前掌握这些选项：
    - **el:** 
      类型：string | HTMLElement
      作用：决定之后Vue实例会管理哪一个DOM。
    - **data:** 
      类型：Object | Function （**组件当中data必须是一个函数**）
      作用：Vue实例对应的数据对象。
    - **methods:** 
      类型：{ [key: string]: Function }
      作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用。