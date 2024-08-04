// Create a some array 

const numbers=[43,56,33,23,44,36,5];
const number2= new Array(22,45,33,76,54);
const fruits = ["Appae", "Bannana", "Orange"];
const mixed = [22, 'helloworld', true, undefined, null];


let val;

//get the array length

val = numbers.length;
// check if its an array

val = Array.isArray(mixed);

// get a single value

val = numbers[0];

// insert or replace

numbers[2] = 100;

// find index of value

val = numbers.indexOf(36);

// mutating arrays
//add a number to the end of the array
numbers.push(250);

//add a number to the begining of the array
numbers.unshift(120);

//remove a number from the end of the array
numbers.pop();

//remove a number from the begining of the array
numbers.shift();

// splice values
numbers.splice(1,1);

// reverse the array
numbers.reverse();

// concatenate array
val = numbers.concat(number2);

//Sort
val = fruits.sort();
val = numbers.sort();
val = numbers.sort(function (x,y){
    return x-y;
})

console.log(numbers);
console.log(val);



// document.body.innerHTML =fruits;
