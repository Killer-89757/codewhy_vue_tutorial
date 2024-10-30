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


//使用vue进行开发
import Vue from "vue"

new Vue({
    el:"#app",
    template:`
      <div>
        <h2>{{message}}</h2>
        <button @click="buttonClick">按钮</button>
      </div>
    `,
    data:{
        message:"Hello webpack"
    },
    methods:{
        buttonClick(){
            alert("点击了按钮")
        }
    }
})