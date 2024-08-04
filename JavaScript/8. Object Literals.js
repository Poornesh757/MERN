// const person = {
//     firstName: 'Poornesh',
//     age:29,
//     email: 'poornesh@gmail.com',
//     hobbies: ['reading', 'painting', 'cooking'], 
//     aaddress: {
//         city:"Mysore",
//         state:"Karnataka"
//     },
//     getBirthYear: function(){
//         return 2024 - this.age;
//     }
// };

// let val;
// val = person;

// console.log(val.getBirthYear());

//Array of Object

const people=[
    {firstName: 'Poornesh', age:28},
    {firstName: 'Ramesh', age:30},
    {firstName: 'Ganesh', age:29}
]

// console.log(people[1].firstName, people[1].age);

for(let i=0; i<people.length; i++){
    console.log(people[i].firstName, people[i].age);
}