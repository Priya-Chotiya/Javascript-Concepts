// closures is function that refernces variables in the outer scope from its inner scope 
// lexical scope
// function bundle together with its lexcial enviroment forms a closures
// it helps us in data hiding and enscpsulation

// Question - Why we need closures?
// closures make posible function to have private variables


// Question - Closures scope chain?
// every closures have 3 scope
// Local scope
// outer scope
// global scope

// Practical Question 1. What will be logged to console?
let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();
// Answer => first it will print count 1 and then count 0


// Practical Question 2. Write a function that would allow you to do this

function createBase(num){
    return function(num2){
        return num + num2;
    }
}
var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27


// Practical Question 3. Block scope and setTimeout
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
            console.log(i);
    }, 1000);
}

// var does not have block scope ,  var has function scope  ,  so it will not wait for settimeout and print 3 times 3
// let has block scope it will print 0,1,2

// another question with this is you have you var ans print 0,1,2

for (var i = 0; i < 3; i++) {
   function inner(i) {
    setTimeout(function log() {
        console.log(i);
}, 1000);
   }
   inner(i);
}
 

// Question 4 How would you use a closure to create a private counter?
function counter(){
    let counter = 0;

    function add(){
        counter++
    }

    function retrive(){
        return "Counter =" + counter;
    }

    return{
        add,
        retrive
    }
}

let c = counter();
c.add();
c.add();
let res = c.retrive();
console.log(res)
c.add();
c.add();

let res2 = c.retrive();
console.log(res2)

// Question 5 What is module pattern?
var Module = (function (){
    function privateMethod(){
        console.log("Private")
    }
    return{
        publicMethod:function(){
            console.log("Public")
        }
    }
})();

Module.publicMethod();
// Module.privateMethod() ==> This will give us error as its private function but public function can make closure to it and can manipulate data;


// Question 6 Make this run only once
let view;
function likeTheVideo(){
    let called = 0;
   return function(){
    if(called > 0){
        console.log("Called Already")
    }else{
        view = "Hi Priya Here First Time";
        console.log(view)
        called++;
    }
   }
    
}

let a = likeTheVideo();
let b = likeTheVideo();
a();
a();

// More Genric Polyfill of once called function

function once(fun , context){
    let ran;

    return function(args) {
        if(fun){
            ran = fun.apply(context || this , args);
            fun = null;
        }
        return ran;
    }

}

const hello = once(() => console.log("HI Once Only"));
hello();
hello();
hello();
hello();
// It will print console.log once only , does not matter how many time we call it


// Question 7 Difference between closure and scope
// When we create function within another function then the inner is the closure where this function can you outer varible
// Where as scope in JS what variable you have access to there 2 type of scope global and local 

// =====> Where closure are used in , Or why we need it
// Module Design Pattern
// Currying
// Functions like once
// Memoize
// maintaing state in async world
// Settimeouts


// ====> Disadvantage of closures
// Over consumption of memory
// memory leak

