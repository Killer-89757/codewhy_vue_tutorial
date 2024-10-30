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