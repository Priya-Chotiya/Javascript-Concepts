// What is HOF
// A function takes another function as an arguments OR return us a function called higher order function
// reusability , modularization 
// map ,  filter and reduce also HOC
// Lets see the example
const radius = [2,5,4,1];

const area = function (radius){
    return Math.PI * radius * radius;
}
const cicumference = function (radius){
    return 2 * Math.PI * radius;
}
const diameter = function (radius){
    return 2 * radius;
}

// calaculate is higher order function and other logicAction are callback functions
const calculate = function(radius , logicAction){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logicAction(radius[i]));
    }
    return output;
}

console.log(calculate(radius , area));
console.log(calculate(radius , cicumference));
console.log(calculate(radius , diameter));