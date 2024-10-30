export const name = "waws";
export const age = 19;
function add1(num1,num2){
  return num1 + num2
}

function multi1(num1,num2){
  return num1 * num2
}

export {add1,multi1}

export default function (){
  console.log("default");
}