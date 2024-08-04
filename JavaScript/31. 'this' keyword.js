// Global Context
console.log(this); // In a browser, this will log the Window object

// Function Context
function showThis() {
    console.log(this); // In non-strict mode: Window (in browsers), In strict mode: undefined
}
showThis();


//Method Context
const person = {
    name: 'Alice',
    greet: function() {
        console.log(this.name); // 'Alice'
    }
};

person.greet();


//Constructor Context
function Person(name) {
    this.name = name;
}

const bob = new Person('Bob');
console.log(bob.name); // 'Bob'

// Arrow Function Context
const person = {
    name: 'Alice',
    greet: function() {
        const innerGreet = () => {
            console.log(this.name); // 'Alice'
        };
        innerGreet();
    }
};

person.greet();

// Lexical This Context

const person = {
    name: 'Alice',
    greet: function() {
        setTimeout(function() {
            console.log(this.name); // 'undefined'
        }, 1000);
    }
};

person.greet();

// Bind, Call, and Apply

const person = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);
    }
};

//Event Handlers
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Logs the button element
});


//'call','apply',and 'bind'
function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello'); // 'Hello, Alice'
greet.apply(person, ['Hi']); // 'Hi, Alice'

const boundGreet = greet.bind(person);
boundGreet('Hey'); // 'Hey, Alice'

//class context
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

const alice = new Person('Alice');
alice.greet(); // 'Alice'


