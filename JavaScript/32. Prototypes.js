//Basic Concept of Prototyper 

//Object creation and Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
};

const alice = new Person('Alice');
alice.greet(); // 'Hello, my name is Alice'

//Prototypal Inheritance

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
};

//Prototype chain
const person = {
    species: 'Homo sapiens'
};

const alice = Object.create(person);
alice.name = 'Alice';

console.log(alice.name); // 'Alice'
console.log(alice.species); // 'Homo sapiens' (inherited from person)

//Checking Properties
console.log(alice.hasOwnProperty('name')); // true
console.log(alice.hasOwnProperty('species')); // false (inherited from prototype)

//Adding properties to prototypes
function Person(name) {
    this.name = name;
}

const bob = new Person('Bob');
Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
};

bob.greet(); // 'Hello, my name is Bob'


Changing the Prototype
const animal = {
    species: 'Unknown'
};

const dog = {
    bark: function() {
        console.log('Woof!');
    }
};

Object.setPrototypeOf(dog, animal);

console.log(dog.species); // 'Unknown' (inherited from animal)
dog.bark(); // 'Woof!'

//Constructor property
function Person(name) {
    this.name = name;
}

const alice = new Person('Alice');

console.log(alice.constructor === Person); // true

//Prototypal inheritance with classes 
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    study() {
        console.log(this.name + ' is studying.');
    }
}

const alice = new Student('Alice', 'A');
alice.greet(); // 'Hello, my name is Alice'
alice.study(); // 'Alice is studying.'
