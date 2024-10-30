import {es6_add} from "./js/info";

const {add,multi} = require("./js/mathUtils")

console.log(add(10, 20));
console.log(multi(10, 20));

import {name,age,es6_add,es6_multi} from "./js/info";
import call_default from "./js/info";

console.log(name);
console.log(age);
console.log(es6_add(30, 40));
console.log(es6_multi(30, 40));
call_default()

require("./css/normal.css")