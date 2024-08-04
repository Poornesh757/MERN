// Basic Class and Subclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const animal = new Animal('Generic Animal');
animal.speak(); // Output: Generic Animal makes a noise.


// Sub Class (Child Class)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    getBreed() {
        return this.breed;
    }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex barks.
console.log(dog.getBreed()); // Output: Labrador


//Detailed Breakdown
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


//Creating a Subclass 
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    getBreed() {
        return this.breed;
    }
}

//Using the Subclass
const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex barks.
console.log(dog.getBreed()); // Output: Labrador


//Additional Features
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    static identify() {
        console.log('I am an animal');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    static identify() {
        console.log('I am a dog');
    }
}

Animal.identify(); // Output: I am an animal
Dog.identify(); // Output: I am a dog

//Additional Features

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    static identify() {
        console.log('I am an animal');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    static identify() {
        console.log('I am a dog');
    }
}

Animal.identify(); // Output: I am an animal
Dog.identify(); // Output: I am a dog


//Geters and Setters
class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    speak() {
        console.log(`${this._name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

    set breed(newBreed) {
        this._breed = newBreed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex barks.
console.log(dog.breed); // Output: Labrador
dog.breed = 'Golden Retriever';
console.log(dog.breed); // Output: Golden Retriever
