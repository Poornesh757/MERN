//there is two types of datatypes

// 1. primitive datatypes
// 2. array datatypes
// 3. object datatypes
////////////////////////////////
////////////////////////////////

// primitive datatypes
////////////////////////////////
////////////////////////////////
//String datatypes
//Number datatypes
//Boolean datatypes
//undefined datatypes
//symbol datatypes

//reference datatypes

//array datatypes
//object datatypes
//function datatypes

// const name="Poornesh";
// console.log(typeof name);
// document.writeln('<h3>' + name, JSON.stringify(typeof name) + '</h3>');

// //Number datatypes

// const age=20;
// console.log(typeof age);
// document.writeln('<h3>' + age, JSON.stringify(typeof age) + '</h3>');

// const hasSibling=false;
// console.log(typeof hasSibling);
// document.writeln('<h3>' + hasSibling, JSON.stringify(typeof hasSibling) + '</h3>');

// const abc=null;
// console.log(typeof abc);
// document.writeln('<h3>' + abc, JSON.stringify(typeof abc) + '</h3>');

let child;
console.log(typeof child);

//symbol datatypes
const sym=Symbol();
console.log(typeof sym);

//reference datatypes

//array datatypes

const hobbies=["movies","music"];
console.log(typeof hobbies);

//object datatypes
const address={
    city:"Bangalore",
    state:"Karnataka"
}
console.log(typeof address);

//Dates 

const today=new Date();
console.log(today);
console.log(typeof today);
document.writeln('<h2>' + today, JSON.stringify(typeof today) + '</h2>');
