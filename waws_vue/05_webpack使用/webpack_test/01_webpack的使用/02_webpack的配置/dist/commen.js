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