

## URL更改方案

### URL的hash

- URL的hash
  - URL的hash也就是锚点(#), 本质上是改变window.location的href属性.
  - 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新

![动画1](images\动画1.gif)

### HTML5的history模式：pushState

- history接口是HTML5新增的, 它有五种模式改变URL而不刷新页面.
- history.pushState()
  - pushState更像一个栈


![动画2](images\动画2.gif)

### HTML5的history模式：replaceState

- history.replaceState()

![动画3](images\动画3.gif)

### HTML5的history模式：go

- history.go()
  - 必须配合history.pushState进行使用
  - 相当于跳到栈的指定位置
  
- **补充说明：**

  - 上面只演示了三个方法
  - 因为 history.back() 等价于 history.go(-1)
    - 会自动添加一个`#`
    - 出现`#`的原因是路由默认的配置是hash模式，但是我们使用history的方式操作路由会进行`#`的补全
  - history.forward() 则等价于 history.go(1)
    - 会自动添加一个`#`
  - 这三个接口等同于浏览器界面的前进后退。

![动画4](images\动画4.gif)