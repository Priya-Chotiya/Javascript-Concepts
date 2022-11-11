// What is currying in javascript?
// currying is a function that takes one argument at times and returns a new function expecting the next argument


// Basic Example
// Example f(a,b) into f(a)(b)
function f(a){
    return function(b){
       return `${a} ${b}`;
    }
}

console.log(f(5)(6));

// Ques 1 - sum(2)(6)(7)

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(7))

// Ques 2 - Infinite Currying -> sum(2)(6)(8)...(n)

function sum2(a){
    return function(b){
        if(b){
            return sum2(a+b)
        }
        return a;
    }
}
console.log(sum2(2)(6)(8)());

// Used in DOM Manipulations