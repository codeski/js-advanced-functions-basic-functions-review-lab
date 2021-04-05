// Your code here
function saturdayFun(arg1="roller-skate") {
    return `This Saturday, I want to ${arg1}!`
}

const mondayWork = function(act="go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(char="*") {
    return function(param="special") { return `You are ${char}${param}${char}!`}
}

const Calculator = { 
    add:function(num1, num2){
        return num1 + num2
    },
    subtract:function(num1, num2){
        return num1 - num2
    },
    multiply:function(num1, num2){
        return num1 * num2
    },
    divide:function(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(startingInt, functionsArray){
    if (functionsArray.length === 0){
        return startingInt
    } else {
        let num = functionsArray[0](startingInt)
        num = functionsArray[1](num)
        return num = functionsArray[2](num)
    }
}