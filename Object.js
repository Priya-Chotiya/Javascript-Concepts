// An object is a collection of properties and a property is an association between key and value.

// Ques 1 What wiill be output for this
const func = (function(a){
    delete a;
    return a;
})(5);

console.log(func);
// this will return us 5 because delete keyword only work with object , where a is local variable so it will not get affect and return 5

// Way of writting and deleteing key with space inside it
const user = {
    name:"Hi",
    age:24,
    "like this key":true
}
console.log(user["like this key"]);

// Ques 2 How you do looping for object
const user2 = {
    name:"Hi",
    age:24,
}

for(key in user2){
    console.log(key , user2[key]);
}

Object.keys(user2).map((e) =>{
    console.log(e , user2[e])
})

// Ques 3 Whats the output?
const obj = {
    a:'one',
    b:"two",
    a:'three'
}

console.log(obj);
// if we have 2 keys with same the first key will replace with the latest one

// Ques 4 - Create a function multiplyByTwo(obj) that multiplies all numeric property value of nums by 2
let nums = {
    a:100,
    b:200,
    title:"My Nums"
}
multiplyByTwo(nums);
function multiplyByTwo(nums){
    for(key in nums){
        if(typeof(nums[key]) === "number"){
            nums[key] *= 2
        }
    }
    
}
console.log(nums)


// Ques 5 - Whats the output of following code
const a = {};
const b ={key:'b'};
const c = {key:'c'};
a[b] = 123;
a[c] = 258;

console.log(a[b]);
// when we try to assign b as key   this is assigned like this a["[object Object]"] because b is object not a string
// later now same key for c a["[object Object]"] and its replace the value by 258;
// so the answer is 258;

// Ques 6 - What is JSON.strigify and JSON.parse
// Ques 7 -  Whats the output for this 
console.log([..."Lydia"]);
// it will spread all of this into single characters like this [ 'L', 'y', 'd', 'i', 'a' ]

// Ques 8 - Whats the output?
const settings = {
    username:"Priya",
    level:19,
    health:90
}

const data = JSON.stringify(settings , ['level' , 'health']);
// it will only stringify both of this propeties and ignore the other key like username

// Ques 9 - Whats the output?
const shape = {
    radius:10,
    diameter(){
        return this.radius * 2;
    },
    perimeter: () =>{
        2 * this.radius
    }
}

console.log(shape.diameter()) // this will return us 20 because normal function return to this object itself
console.log(shape.perimeter()) 
// this will return us NAN because in arrow function this will refrence to the global scope where it will not find radius key

// Ques 10 - Whats the output?
const value = {number:10};
const multiply = (x ={...value}) =>{
    console.log((x.number *= 2));
}

multiply() // 20
multiply() // 20
multiply(value) // 20
multiply(value) // 40

// Ques 11 , How to clone a object or Deep copy
let user3 = {
    name:"priya",
    age:26
}
const objClone1 = Object.assign({} , user3);
const objClone2 = JSON.stringify((JSON.parse(user3)));