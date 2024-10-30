const {add,multi} = require("./js/mathUtils")

console.log(add(10, 20));
console.log(multi(10, 20));

import {name,age,add1,multi1} from "./js/info";
import call_default from "./js/info";

console.log(name);
console.log(age);
console.log(add1(30, 40));
console.log(multi1(30, 40));
call_default()

require("./css/normal.css")
require("./css/special.less")


//使用vue进行组件化开发
import Vue from "vue"
// import App from "./vue/app"
import App from "./vue/App.vue"



new Vue({
    el:"#app",
    template:"<App></App>",
    components:{
        App
    }
})

