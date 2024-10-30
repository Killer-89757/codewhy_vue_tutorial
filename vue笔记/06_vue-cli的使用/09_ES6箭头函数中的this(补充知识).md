## ES6箭头函数中的this

###  js中函数的3种形式

```js
//1.使用function的方式构建函数
function aaa() {
    console.log("aaa");
}

//2.在对象中定义函数
const bbb = {
    ccc:function (){

    },
    ddd() {

    }
}

//3.使用箭头函数的方式构建函数
//    (参数列表)=>{函数体}

const eee = () => {
    console.log("eee");
}
```

### 箭头函数的参数和返回值

```js
//3.1没有参数，有返回值
const abc1 = () => {
    console.log("haha");
}

//3.2有参数，有返回值
const abc2 = (num1,num2) => {
    return num1 + num2
}

//3.3有参数，没有返回值
const abc3 = (num1,num2) => {
    console.log((num1 + num2));
}


//3.4没有参数，没有返回值
const abc4 = () => {
    console.log("abc4");
}

//3.5 特殊写法 当参数数量只有一个(小括号可以去掉)，且函数体中只有一行代码(大括号可以省略)
const abc5 = num1 => console.log(num1)
//3.6 函数体中只有一行代码且有返回值，我们可以默认省略return
const abc6 = (num1,num2) => num1 + num2
```

### 箭头函数中this的指向问题

> **结论：箭头函数中的this引用的就是最近作用域中的this**
>
> 答案：向外层作用域中，一层层的查找this，直到有this的定义

- 使用箭头函数最多的情况，将一个函数当成参数传入到另一个函数中

```python
# 指向windows对象
setTimeout(function (){
    console.log(this)
},1000)

# 指向windows对象
setTimeout(()=>{
    console.log(this)
},1000)
```

![企业微信截图_20210907165511](images\企业微信截图_20210907165511.png)

- 在对象中的函数this的指向

```python
const obj = {
    aaa(){
        # 指向windows对象(调用call方法，将window作为参数传过去，向上找作用域就是window)
        setTimeout(function (){
            console.log(this)
        },1000)

        # 指向obj对象(直接向上找就是obj这个对象)
        setTimeout(()=>{
            console.log(this)
        },1000)
        
        # 指向windows对象，这个是因为我们的箭头函数中this在上层找，上层的this指向window,所以里层的this也是指向window的
        setTimeout(function (){
            setTimeout(()=>{
                console.log(this)
            })
        },1000)
    }
}

obj.aaa()
```

![企业微信截图_20210907165916](images\企业微信截图_20210907165916.png)

