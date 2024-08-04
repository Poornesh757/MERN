// Switches

// const color = 'red';

// switch (color) {
//     case 'red':
//         document.write('color is red')
//         break;
//         case 'green':
//             document.write('color is green')
//             break;
//             default:
//                 document.write('color is undefined')
// } 


const dayOfWeek = new Date().getDate();
let day;

switch(dayOfWeek) {
    case 0:
        document.write("sunday")
        break;
        case 1:
        document.write("Monday")
        break;
        case 2:
        document.write("Tuesday")
        break;
        case 3:
        document.write("wednesday")
        break;
        case 4:
        document.write("thursday")
        break;
        case 5:
        document.write("friday")
        break;
        case 6:
        document.write("saturday")
        break;
}
document.write(day);