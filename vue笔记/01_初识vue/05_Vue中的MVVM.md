## Vue中的MVVM

###  什么是MVVM呢？

- 通常我们学习一个概念，最好的方式是去看维基百科(对，千万别看成了百度百科)
  https://zh.wikipedia.org/wiki/MVVM
  维基百科的官方解释，我们这里不再赘述。

### 我们直接来看Vue的MVVM

![图片1](image\图片1.png)

####  View层：

- 视图层

  - 在我们前端开发中，通常就是**DOM层**。
  - **主要的作用是给用户展示各种信息**。

#### Model层：

  - 数据层
      - 数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据。
      - 在我们计数器的案例中，就是后面抽取出来的obj，当然，里面的数据可能没有这么简单。


#### ViewModel层：

- 视图模型层
  - 视图模型层是View和Model沟通的桥梁。
  - 一方面它实现了**Data Binding**，也就是`数据绑定`，将Model的改变实时的反应到View中
  - 另一方面它实现了**DOM Listener**，也就是`DOM监听`，当DOM发生一些事件(点击、滚动、touch等)时，可以监听到，并在需要的情况下改变对应的Data。

### 计数器案例的MVVM
我们的计数器中就有严格的MVVM思想

- View依然是我们的DOM

- Model就是我们我们抽离出来的obj

- ViewModel就是我们创建的Vue对象实例

#### 它们之间如何工作呢？
> 首先ViewModel通过Data Binding让obj中的数据实时的在DOM中显示。
> 其次ViewModel通过DOM Listener来监听DOM事件，并且通过methods中的操作，来改变obj中的数据。
> 有了Vue帮助我们完成VueModel层的任务，在后续的开发，我们就可以专注于数据的处理，以及DOM的编写工作了。

![01-计数器的MVVM](image\01-计数器的MVVM.png)