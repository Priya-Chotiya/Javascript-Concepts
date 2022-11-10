// this simple means refrence to its parent enviroment
// Implicit Binding
let user = {
    name:"hi",
    age:26,
    getDetails:function () {
        console.log(this)
    }
};
user.getDetails();

// In simple function this will its parent obj
// In arrow function this will return global obj


// How this keyword works in constructor
class User{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
const user1 = new User("HI").getName();

// Ques 2 What is the result of accessing its ref? why?
function makeUser() {
    return{
        name:"John",
        ref:this
    }
}

let user3 = makeUser();
console.log(user3.ref.name);

// Ques 3 Whats the output?
const user4 = {
    name:"Hi There",
    logMessage(){
        console.log(this.name);
    }
}
setTimeout(user4.logMessage  , 1000);
// this will print undefine because user4.logMessage using as callback rather than method so this will have access to global object

// So how to fix it?
setTimeout(function (params) {
    user4.logMessage()
}  , 1000);


// Ques 4 Implement Calc
let calc = {
    total:0,
   add(n){
    this.total += n;
    return this;
   },
   multiply(n){
    this.total *= n;
    return this;

   },
   subtract(n){
    this.total /= n;
    return this;

   },
}
const result  = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total)