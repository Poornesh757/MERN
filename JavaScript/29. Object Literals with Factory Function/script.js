// Object literal for a product
const product1 = {
    name: 'Laptop',
    price: 999.99,
    description: 'A high-performance laptop for all your needs.'
};

const product2 = {
    name: 'Smartphone',
    price: 599.99,
    description: 'A sleek smartphone with the latest features.'
};

// Factory function to create a product
function createProduct(name, price, description) {
    return {
        name: name,
        price: price,
        description: description
    };
}

const product3 = createProduct('Tablet', 299.99, 'A lightweight tablet perfect for reading and browsing.');
const product4 = createProduct('Headphones', 149.99, 'Noise-cancelling headphones for immersive sound.');

// Array of products
const products = [product1, product2, product3, product4];

// Function to display products in the DOM
function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productList.appendChild(productDiv);
    });
}

// // Display the products when the page loads
// window.onload = () => {
//     displayProducts(products);
// };

// // Shorthand property Names 
// const name = 'Alice';
// const age = 25;

// const person = {
//   name,
//   age
// };

// console.log(person); // { name: 'Alice', age: 25 }

// // Computer Property Names 
// const prop = 'age';
// const person = {
//   name: 'Bob',
//   [prop]: 30
// };

// console.log(person); // { name: 'Bob', age: 30 }


// //Method Definitions 
// const person = {
//     name: 'Charlie',
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
  
//   person.greet(); // Hello, my name is Charlie

// //Factory Functions 
// //Basic Factory Function
// function createPerson(name, age) {
//     return {
//       name,
//       age,
//       greet() {
//         console.log(`Hello, my name is ${this.name}`);
//       }
//     };
//   }
  
//   const person1 = createPerson('David', 40);
//   const person2 = createPerson('Eve', 35);
  
//   person1.greet(); // Hello, my name is David
//   person2.greet(); // Hello, my name is Eve

// //Factory Functions with Private data   
// function createPerson(name, age) {
//     let _name = name;
//     let _age = age;
  
//     return {
//       getName() {
//         return _name;
//       },
//       getAge() {
//         return _age;
//       },
//       setName(newName) {
//         _name = newName;
//       },
//       setAge(newAge) {
//         _age = newAge;
//       },
//       greet() {
//         console.log(`Hello, my name is ${_name}`);
//       }
//     };
//   }
  
//   const person = createPerson('Frank', 50);
//   console.log(person.getName()); // Frank
//   person.setName('George');
//   console.log(person.getName()); // George
//   person.greet(); // Hello, my name is George

// //Combining Advanced Object Literals with factory functions
// function createPerson(name, age) {
//     const skills = [];
  
//     return {
//       name,
//       age,
//       addSkill(skill) {
//         skills.push(skill);
//       },
//       getSkills() {
//         return skills.slice(); // return a copy to prevent external modification
//       },
//       greet() {
//         console.log(`Hello, my name is ${this.name}`);
//       },
//       info() {
//         console.log(`I am ${this.age} years old and I know ${skills.join(', ')}`);
//       }
//     };
//   }
  
//   const person = createPerson('Hannah', 28);
//   person.addSkill('JavaScript');
//   person.addSkill('React');
//   person.info(); // I am 28 years old and I know JavaScript, React
//   person.greet(); // Hello, my name is Hannah

// //Using Destructuring in factory Functions
// function createPerson({ name, age }) {
//     const skills = [];
  
//     return {
//       name,
//       age,
//       addSkill(skill) {
//         skills.push(skill);
//       },
//       getSkills() {
//         return skills.slice();
//       },
//       greet() {
//         console.log(`Hello, my name is ${this.name}`);
//       },
//       info() {
//         console.log(`I am ${this.age} years old and I know ${skills.join(', ')}`);
//       }
//     };
//   }
  
//   const personData = { name: 'Ian', age: 32 };
//   const person = createPerson(personData);
//   person.addSkill('Node.js');
//   person.addSkill('Express');
//   person.info(); // I am 32 years old and I know Node.js, Express
//   person.greet(); // Hello, my name is Ian
  
