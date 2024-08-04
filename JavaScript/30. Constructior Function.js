//Basic Constructor Function

// Constructor function for creating a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating instances of Person
  let person1 = new Person('Alice', 30);
  let person2 = new Person('Bob', 25);
  
  console.log(person1.name); // Output: Alice
  console.log(person2.age);  // Output: 25

//Adding Method to the constructor's prototype
// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  // Now all Person instances can use the greet method
  person1.greet(); // Output: Hello, my name is Alice.
  person2.greet(); // Output: Hello, my name is Bob.

//Using Constructor function with inheritance
// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  // Child constructor function
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor with the child's context
    this.breed = breed;
  }
  
  // Inherit methods from Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Adding a new method to Dog's prototype
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
  };
  
  let dog = new Dog('Rex', 'Golden Retriever');
  dog.speak(); // Output: Rex makes a noise.
  dog.bark();  // Output: Rex barks.

//Static methods in constructor functions
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Static method
Car.honk = function() {
  console.log('Honk! Honk!');
};

let car1 = new Car('Toyota', 'Corolla');
let car2 = new Car('Honda', 'Civic');

// Calling the static method
Car.honk(); // Output: Honk! Honk!

// Static methods are not available to instances
// car1.honk(); // Error: car1.honk is not a function
