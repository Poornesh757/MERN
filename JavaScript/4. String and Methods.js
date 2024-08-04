const firstName = "Poornesh";
const lastName = "HR";
const age = "28";
const str = "Hellow there my name is Poornesh";
const tags = "Web design, web development, programming";

let val;

// val = firstname + lastname;

//concatenate
// val = firstname + " " + lastname;

//Append
// val = "Babi ";
// val += "Poornesh";

// val = "Hellow, My name is " + firstName + " and i am " + age;

//Escaping
// val = "that's awesomeness, I can't wait for you";

//length
// val= firstName.length;

//concat()
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[1];

//indexOf()
// val = firstName.indexOf("h");
// val = firstName.lastIndexOf("p");   ??????????????

//charAt()
// val = firstName.charAt("7");

//substring()
// val = firstName.substring(0, 6);

//slice()
// val = firstName.slice(0, 6);

//split()
// val = str.split(" ");
// val = tags.split(",");

//replace()
// val = str.replace("Poornesh", "Poornesh HR");

//include()
val = str.includes("Poornesh");


console.log(val);