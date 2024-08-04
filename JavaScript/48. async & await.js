//Basic Functions
async function myAsyncFunction() {
    return "Hello, world!";
}

myAsyncFunction().then(result => console.log(result)); // Output: "Hello, world!"


//Await Keywords
async function myAsyncFunction() {
    return "Hello, world!";
}

myAsyncFunction().then(result => console.log(result)); // Output: "Hello, world!"

//Detailed Explanation
// Basic Usage 

// Simulate an asynchronous operation
const simulateAsyncOperation = (value, delay) => {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
};

// Async function that uses await to handle promises
async function performAsyncOperations() {
    try {
        const result1 = await simulateAsyncOperation('First result', 1000);
        console.log(result1); // Output after 1 second: "First result"
        
        const result2 = await simulateAsyncOperation('Second result', 500);
        console.log(result2); // Output after 1.5 seconds: "Second result"
        
        return 'All operations completed!';
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

performAsyncOperations().then(message => console.log(message)); // Output: "All operations completed!"


// Handling Multiple Promises
// Multiple asynchronous operations
const fetchData1 = () => simulateAsyncOperation('Data from API 1', 1000);
const fetchData2 = () => simulateAsyncOperation('Data from API 2', 1500);
const fetchData3 = () => simulateAsyncOperation('Data from API 3', 2000);

// Async function to fetch all data
async function fetchAllData() {
    try {
        const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
        console.log(data1); // Output: "Data from API 1"
        console.log(data2); // Output: "Data from API 2"
        console.log(data3); // Output: "Data from API 3"
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAllData();

//Error Handling
const fetchData = () => {
    return new Promise((resolve, reject) => setTimeout(() => reject('Error fetching data'), 1000));
};

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Caught an error:', error); // Output: "Caught an error: Error fetching data"
    }
}

getData();

//Using 'await' with non-promise values 
async function processValue(value) {
    const result = await value; // No delay, result is directly "Resolved"
    console.log(result);
}

processValue('Immediate result'); // Output: "Immediate result"


// Async functions returning promises
async function asyncFunction() {
    return 'Resolved value'; // Returns a promise resolved with 'Resolved value'
}

asyncFunction().then(result => console.log(result)); // Output: "Resolved value"

async function asyncFunctionWithError() {
    throw new Error('Something went wrong');
}

asyncFunctionWithError().catch(error => console.error(error)); // Output: "Error: Something went wrong"

//Combinig async/Await with other promise methods   
async function combinedUsage() {
    const promise1 = simulateAsyncOperation('Result 1', 1000);
    const promise2 = simulateAsyncOperation('Result 2', 500);
    const promise3 = simulateAsyncOperation('Result 3', 1500);

    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log(results); // Output: ["Result 1", "Result 2", "Result 3"]
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

combinedUsage();
