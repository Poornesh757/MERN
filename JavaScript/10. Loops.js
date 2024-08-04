//for loop

// for (let i = 0;i <10;i++) {
//     console.log("Good to go ${i}");
// }

const names = ["Poornesh", "User1", "User2", "User3"]

// for (let i = 0; i< names.length; i++) {
//     console.log(names[i]);
// }


//for off loop
// for (v of names) {
//     console.log(v);
// }

//while loop

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// do while loop
// let i=10;
// do{
//     i++;
//     console.log(i);
// } while (i < 10);

const person = {firstName:"Poornesh", age :25};
// for in loop
for (x in person) {
    console.log(person[x]);
}