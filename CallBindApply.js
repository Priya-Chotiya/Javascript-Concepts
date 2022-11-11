// Call , Bind And Apply in Javascript (Explicit Binding);
// Question 1- What is call?

var obj = {name:"priya"}
function sayHello(age){
    return "HI " + this.name + age;
}

console.log(sayHello.call(obj , 26));

// Question 2 - What is apply?
// Apply works just same as an call but only differnce is that apply takes an arguments in form of array
function sayHello2(age , profession){
    return "HI " + this.name + 'is' +  age + " and is an" + profession;
}

console.log(sayHello2.apply(obj ,  [26 , 'Frontend Developer']))

// Question 2 - What is bind?
// What bind does is insted of calling this function right over there just like call and apply do, its provides us an another function which
// we can call later on and execute

// So benefits of bind is its reusable function


function sayHello3(age , profession){
    return "HI " + this.name + 'is' +  age + " and is an " + profession;
}
const bindFunc = sayHello3.bind(obj);
console.log(bindFunc(24, "Hi"))
console.log(bindFunc(26, "Hello"))
 

 