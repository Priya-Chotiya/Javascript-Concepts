// One object trying to access methods and propetires of other object called protoTypeInheritance

let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk

  // What is prototype chain?
  // The prototype object has prototype of its own and so on until an object is reached with null as its prototype.
  // So, this linking with one another is called as prototype chain.Null has no prototype and it acts as a
  // final link in this prototype chain.

  let arr = ["HI" , "Hello"];
  // arr.__proto__ => Array.protoType
  // arr.__proto__proto => Object.protoType
  // arr.__proto__proto__proto => Null

  // Another Example
  let object = {
    name:"Priya",
    city:"Surat",
    getIntro: function(){
        console.log(this.name + "from" + this.city);
    }
  }

  let object2={
    name:"Abc"
  }

  object2.__proto__ = object;
  object2.getIntro() //=> Abc from surat

  // Creating your own polyfill of proto

  Array.prototype.show = function(){
    return this;
  }
  const cities = ["Delhi"];
  console.log(cities.show())

  Function.prototype.abc = function () {}