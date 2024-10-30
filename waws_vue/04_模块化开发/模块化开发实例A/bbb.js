var moduleB = (function (){

    var obj = {}
    var name = "waws"
    var flag = true

    function sum(num1,num2){
        return num1 + num2
    }

    obj.name = name
    obj.flag = flag
    obj.sum = sum

    return obj
})()