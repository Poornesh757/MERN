// Function Declaration and Expression

// function greet(){
//     console.log("hy");
// }
// greet(); 


// const mul = function(a=5){
//     return a*a;
// }
// console.log(mul(4));

// const mul = function(a,b){
//     return a*b;
// }
// console.log(mul(5,10));

// IIFE -- Immedietely invoklbe funcion expression

(function(name){
    console.log("${name} ran...");
})("Poornesh");

const person={
    getBirthday: function(day){
        return 'june ${day}';
    },
};
console.log(person.getBirthday(1995));