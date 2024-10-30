## webpack的基本使用

### 准备工作

- 我们创建如下文件和文件夹：
- 文件和文件夹解析：
  - **dist文件夹**：用于存放之后打包的文件
  - **src文件夹**：用于存放我们写的源文件
    - **main.js**：项目的入口文件。具体内容查看下面详情。
    - **mathUtils.js**：定义了一些数学工具函数，可以在其他地方引用，并且使用。具体内容查看下面的详情。
  - **index.html**：浏览器打开展示的首页html
  - **package.json**：通过npm init生成的，npm包管理的文件（暂时没有用上，后面才会用上）

- 现在的js文件中使用了模块化的方式进行开发，他们可以直接使用吗？不可以
  - 因为如果直接在index.html引入这两个js文件，浏览器并不识别其中的模块化代码
  - 另外，在真实项目中当有许多这样的js文件时，我们一个个引用非常麻烦，并且后期非常不方便对它们进行管理
- 我们应该怎么做呢？使用webpack工具，对多个js文件进行打包
  - 我们知道，webpack就是一个模块化的打包工具，所以它支持我们代码中写模块化，可以对模块化的代码进行处理
  - 另外，如果在处理完所有模块之间的关系后，将**多个js打包到一个js文件**中，引入时就变得非常方便了

- 打包后会在dist文件下，生成一个commen.js文件
  - 文件内容有些复杂，这里暂时先不看，后续再进行分析
  - **commen.js文件，是webpack处理了项目直接文件依赖后生成的一个js文件，我们只需要将这个js文件在index.html中引入即可**

> - **整体的过程理解：**
>   - **我们在我们的src中进行js的源代码的开发，例如一个main.js还有mathUtils.js代码，使用模块化的思维进行开发，我们在对src中的源码进行打包，形成一个打包后的xxx.js文件，我们将这个文件在index.html中进行引入即可 , 而且在打包的过程中我们并不需要关注各个模块之间的依赖关系，webpack会根据引入的关系自动将所有关联文件一并打包**

#### 演示整个过程

##### 打包之前文件的关系

![企业微信截图_20210904161327](images\企业微信截图_20210904161327.png)

##### 运行打包命令(在项目文件夹下运行)

```python
webpack ./src/main.js ./dist/commen.js
```

- 成功的标志

![企业微信截图_20210904161253](images\企业微信截图_20210904161253.png)

##### 运行后文件之间的关系

![企业微信截图_20210904161305](images\企业微信截图_20210904161305.png)

##### 在index.html中引入新生成的commen.js

![企业微信截图_20210904155951](images\企业微信截图_20210904155951.png)

##### 运行index.html在浏览器查看结果(运行成功)

![企业微信截图_20210904161239](images\企业微信截图_20210904161239.png)

- mathUtils.js文件中的代码(使用common.js的模块化)：

  ```python
  function add(num1,num2){
    return num1 + num2
  }
  
  function multi(num1,num2){
    return num1 * num2
  }
  
  module.exports = {
    add,
    multi
  }
  ```

- info.js文件中代码(使用ES6的模块化)

  ```python
  export const name = "waws";
  export const age = 19;
  function es6_add(num1,num2){
    return num1 + num2
  }
  
  function es6_multi(num1,num2){
    return num1 * num2
  }
  
  export {es6_add,es6_multi}
  
  export default function (){
    console.log("default");
  }
  ```

- main.js文件中的代码：

  ```python
  const {add,multi} = require("./mathUtils")
  
  console.log(add(10, 20));
  console.log(multi(10, 20));
  
  import {name,age,es6_add,es6_multi} from "./info";
  import call_default from "./info";
  
  console.log(name);
  console.log(age);
  console.log(es6_add(30, 40));
  console.log(es6_multi(30, 40));
  call_default()
  ```

- index.html

  ```python
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="./dist/commen.js"></script>
  </head>
  <body>
  
  </body>
  </html>
  ```

- 打包后的commen.js展示如下

  ```python
  /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 1);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return es6_add; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return es6_multi; });
  const name = "waws";
  /* harmony export (immutable) */ __webpack_exports__["e"] = name;
  
  const age = 19;
  /* harmony export (immutable) */ __webpack_exports__["a"] = age;
  
  function es6_add(num1,num2){
    return num1 + num2
  }
  
  function es6_multi(num1,num2){
    return num1 * num2
  }
  
  
  
  /* harmony default export */ __webpack_exports__["b"] = (function (){
    console.log("default");
  });
  
  /***/ }),
  /* 1 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info__ = __webpack_require__(0);
  
  
  const {add,multi} = __webpack_require__(2)
  
  console.log(add(10, 20));
  console.log(multi(10, 20));
  
  
  
  
  console.log(__WEBPACK_IMPORTED_MODULE_0__info__["e" /* name */]);
  console.log(__WEBPACK_IMPORTED_MODULE_0__info__["a" /* age */]);
  console.log(Object(__WEBPACK_IMPORTED_MODULE_0__info__["c" /* es6_add */])(30, 40));
  console.log(Object(__WEBPACK_IMPORTED_MODULE_0__info__["d" /* es6_multi */])(30, 40));
  Object(__WEBPACK_IMPORTED_MODULE_0__info__["b" /* default */])()
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports) {
  
  function add(num1,num2){
    return num1 + num2
  }
  
  function multi(num1,num2){
    return num1 * num2
  }
  
  module.exports = {
    add,
    multi
  }
  
  /***/ })
  /******/ ]);
  ```

  

