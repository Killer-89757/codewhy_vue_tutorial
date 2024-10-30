## 组件的key属性

- 官方推荐我们在使用v-for时，给对应的元素或组件添加上一个:key属性
- 为什么需要这个key属性呢（了解）？
  - 这个其实和Vue的虚拟**DOM的Diff算法**有关系
  - 这里我们借用React’s diff algorithm中的一张图来简单说明一下：
- 当某一层有很多相同的节点时，也就是列表节点时，我们希望插入一个新的节点
  - 我们希望可以在B和C之间加一个F，Diff算法默认执行起来是这样的
  - 即把C更新成F，D更新成C，E更新成D，最后再插入E，是不是很没有效率？
- 所以我们需要使用**key来给每个节点做一个唯一标识**
  - Diff算法就可以正确的识别此节点
  - 找到正确的位置区插入新的节点
- 所以一句话，**key的作用主要是为了高效的更新虚拟DOM**。

![Snipaste_2021-08-11_21-08-24](image\Snipaste_2021-08-11_21-08-24.png)

> **主要的思路理解：**
>
> 就是我们的原本的数组是[A,B,C,D,E]，假设我们想要在B和C之间插入一个F，我们不使用Key的做法是，A，B，原本的C被替换成F，原本的D被替换成C，原本的E被替换成D，最后在后面添加上了一个E，这个有点像有序数组的插值后续元素逐个向后移动的数据结构，类比时间复杂度是O(n)，但是加上Key之后，我们的数据的插入方式就是，在B，C之间新建立一个节点，然后将F放上去即可，有点像链表的元素插入，类比插入的时间复杂度是O(1)，这样提高了效率
>
> 不使用index作为key的原因是：
>
> 假设我们最开始0-A、1-B、2-C、3-D、4-E，index作为键，当我们插入一个元素F的时候，我们会发现键会变化，也就是原本的2-C会变成3-C，所以最终不能使用diff算法，选择键的时候一定要选择双向唯一锁定的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
  <ul>
    <li v-for="item in letter" :key="item">{{item}}</li>
  </ul>
</div>

<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el:"#app",
    data:{
      letter:["A","B","C","D","E"]
    }
  })
</script>
</body>
</html>
```

