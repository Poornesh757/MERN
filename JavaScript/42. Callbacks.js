//Basic Callback usage
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(null, data); // First argument is for error, second for data
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Success:', data);
    }
});


// Callback hell
function fetchData1(callback) {
    setTimeout(() => callback(null, 'Data 1'), 1000);
}

function fetchData2(callback) {
    setTimeout(() => callback(null, 'Data 2'), 1000);
}

fetchData1((error, data1) => {
    if (error) {
        console.error('Error:', error);
    } else {
        fetchData2((error, data2) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Data 1:', data1);
                console.log('Data 2:', data2);
            }
        });
    }
});


//Handling Errors with callbacks
function fetchData(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.5; // Simulate success/failure
        if (success) {
            callback(null, "Data fetched");
        } else {
            callback("Failed to fetch data");
        }
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Success:', data);
    }
});


// Callback with multiple parameters
function fetchData(callback) {
    setTimeout(() => {
        const data = { key: "value" };
        const statusCode = 200;
        callback(null, data, statusCode);
    }, 1000);
}

fetchData((error, data, statusCode) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
        console.log('Status Code:', statusCode);
    }
});

//Using Callbacks for array operations
//'forEach'
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});

//'mao'
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//'filter'
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]


//Asynchronous callbacks
//'fs.readFile' in NodeJS

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});

// Callback pattern in Event handling
document.getElementById('myButton').addEventListener('click', (event) => {
    console.log('Button clicked', event);
});

//Callback functions in custom implementation
function doSomething(callback) {
    setTimeout(() => {
        callback('Result from doSomething');
    }, 500);
}

function handleResult(result) {
    console.log('Handled:', result);
}

doSomething(handleResult);


//Advanced callback patterns 
//setInterval' with callback
let count = 0;
const intervalId = setInterval(() => {
    count += 1;
    console.log('Count:', count);
    if (count >= 5) {
        clearInterval(intervalId);
        console.log('Interval cleared');
    }
}, 1000);

//settimeout' with callback
console.log('Start');
setTimeout(() => {
    console.log('Delayed by 2 seconds');
}, 2000);
console.log('End');
