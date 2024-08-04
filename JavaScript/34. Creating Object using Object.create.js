//Basic Usage:

//'Object.Create(proto, propertiesObject)'
// Define a prototype object
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

// Create a new object with 'animal' as its prototype
const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // 'Rex makes a noise.'

//Adding Properties
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal, {
    name: {
        value: 'Rex',
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(dog.name); // 'Rex'
dog.speak(); // 'Rex makes a noise.'


//Property Descriptions
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal, {
    name: {
        value: 'Rex',
        writable: false, // This property cannot be changed
        enumerable: true,
        configurable: true
    }
});

console.log(dog.name); // 'Rex'
dog.name = 'Max'; // This will not change 'name' as writable is false
console.log(dog.name); // 'Rex'

//Prototype Chain
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal);
dog.name = 'Rex';

const puppy = Object.create(dog);
puppy.name = 'Puppy';

console.log(puppy.name); // 'Puppy'
puppy.speak(); // 'Puppy makes a noise.'


//Checking Prototypes
const animal = {
    speak: function() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal);

console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof animal.constructor); // true
