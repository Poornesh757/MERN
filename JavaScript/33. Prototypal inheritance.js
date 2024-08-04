//Basic Prototypal inheritance
// Create a prototype object
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

// Create a new object that inherits from 'animal'
const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // 'Rex makes a noise.'

// Constructor functions and prototypes 
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Rex');
dog.speak(); // 'Rex makes a noise.'

//Inherting from another constructor function
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor with the current context
    this.breed = breed;
}

// Set the prototype of Dog to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Reset the constructor property to Dog

Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // 'Rex makes a noise.'
dog.bark();  // 'Rex barks.'


//ES6 Classes 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // 'Rex makes a noise.'
dog.bark();  // 'Rex barks.'


//Using 'Object.setPrototypeOf'
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = {
    name: 'Rex',
    bark: function() {
        console.log(`${this.name} barks.`);
    }
};

Object.setPrototypeOf(dog, animal);

dog.speak(); // 'Rex makes a noise.'
dog.bark();  // 'Rex barks.'


//Checking the Prototype Chain
function Animal(name) {
    this.name = name;
}

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Rex');

console.log(Animal.prototype.isPrototypeOf(dog)); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
