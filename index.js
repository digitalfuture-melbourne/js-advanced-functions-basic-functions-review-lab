// Your code here
function saturdayFun(activity) {
    if (activity === undefined)
    {
        return 'This Saturday, I want to roller-skate!'
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork(activity) {
    if (activity === undefined)
    {
        return 'This Monday, I will go to the office.'
    } else {
        return `This Monday, I will ${activity}.`
    }
}

function wrapAdjective(special, msg='You are '){
    let innerFunction = function(wrapAdjective) {
        if (special == undefined) {
            return `${msg}*${wrapAdjective}*!`
        } else {
            return `${msg}${special}${wrapAdjective}${special}!`
        }
    }
    return innerFunction
}

var Calculator = {}
    Calculator.add = function (num1, num2) {return num1 + num2}
    Calculator.subtract = function (num1, num2) {return num1 - num2}
    Calculator.multiply = function (num1, num2) {return num1 * num2}
    Calculator.divide = function(num1, num2) {return num1 / num2}

function actionApplyer(action1, []) {
        if ([].length == 0) {
            return action1
        } else {
            
        }
}
