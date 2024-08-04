//Defining Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const alice = new Person('Alice', 30);
alice.greet(); // 'Hello, my name is Alice and I am 30 years old.'


//Inheritance
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
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const rex = new Dog('Rex', 'German Shepherd');
rex.speak(); // 'Rex makes a noise.'
rex.bark();  // 'Rex barks.'


//Getter and Setter Methods
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}

const alice = new Person('Alice', 30);
console.log(alice.name); // 'Alice'
alice.age = 35;
console.log(alice.age); // 35
alice.age = -5; // Invalid age
console.log(alice.age); // 35


//Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(2, 3));      // 5
console.log(MathUtils.multiply(4, 5)); // 20


//Private fields
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }
}

const alice = new Person('Alice', 30);
console.log(alice.getName()); // 'Alice'
console.log(alice.getAge());  // 30
// console.log(alice.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class


//Class inheritance and super Keyword
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Cat extends Animal {
    speak() {
        super.speak(); // Call the parent class's speak method
        console.log(`${this.name} meows.`);
    }
}

const kitty = new Cat('Kitty');
kitty.speak();
// 'Kitty makes a noise.'
// 'Kitty meows.'
