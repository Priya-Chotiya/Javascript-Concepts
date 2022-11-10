// What is map()?
// Map method is used for creating new array from exisiting array

const nums = [1,2,3,4];
const multiplyByThree = nums.map((num) =>{
    return num * 3;
})
console.log(multiplyByThree) //  this will return us a new array with updated value


// What is filter()?
// Filter method takes each element in array and applies a conditional statement against it , if  the conditional returns true
// the element gets push into the output array , if the condition gets false it will not get pushed into output array

const nums2 = [1,2,3,4];
const moreThanTwo = nums2.filter((num) =>{
    return num > 2;
})
console.log(moreThanTwo)

// What is Reduce() ?
// Reduce method just reduces the array value into just one value
// it receive two things callback and initalValue
// in callback it takes two parameter 1. accumulator => this is basically the result of the previous computation 2.Current element

const nums3 = [1,2,3,4];
const sum = nums3.reduce((acc , curr) =>{
    return acc+curr
})
console.log(sum);

// Differnce between map() and forEach()
// Map return us an new array 
// ForEach works as simple as loop it with not return anything
const arr = [2,5,4,8];

const mapResult = arr.map((e) =>{
    return e+2;
})

const forEachResult = arr.forEach((e) =>{
    return e+2;
})
console.log(mapResult , forEachResult , "d");

// Polyfill for map functionality
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i] , i , this))
    }
    return temp;
}

const arr2 = [2,5,4,8];

const mapResult2 = arr2.myMap((e) =>{
    return e+2;
})
console.log(mapResult2 , 'mapResult2')

// Polyfill for filter functionality
Array.prototype.myFilter = function (cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i] , i , this)){
            temp.push(this[i])
        }
    }
    return temp;
}

const arr3 = [2,5,4,8];

const filterResult = arr3.myFilter((e) =>{
    return e > 2;
})
console.log(filterResult , 'filterResult')

// Polyfill for reduce functionality
Array.prototype.myReduce = function (cb , initialValue){
   var accumulator = initialValue;
   for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator ,this[i] , i):this[i];
   }
   return accumulator;
}

const arr4 = [2,5,4,8];

const reduceResult = arr4.myReduce((acc , curr) =>{
    return acc+curr;
} , 0)
console.log(reduceResult , 'reduceResult')