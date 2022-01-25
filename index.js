// code your solution here
function saturdayFun(activity = "roller-skate"){
   return(`This Saturday, I want to ${activity}!`);
}

const mondayWork = function (activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)

}

// declaration - defined using the keywork function- could have a nname or no name (annonomous)
// function wrapAdjective (){

// }

// expression - a variable that is assigned the value of an annonomous function (function with no name)
function wrapAdjective(visualFlair = "*"){
    return function (param1 = "special",){
        return (`You are ${visualFlair}${param1}${visualFlair}!`)

    }

 }
 console.log(wrapAdjective()())





