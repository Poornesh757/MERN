// Templates Literals

const name = 'Poornesh HR';
const age = 28;
const job = 'QMS Executive';
const city = 'Mysore';

let html;

// Without using template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

console.log(html);
document.body.innerHTML = html;

// With template strings (es6)

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;

console.log(html);

document.body.innerHTML = html;