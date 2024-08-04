//Basic Concepts
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});


//consuming a promise
myPromise
.then(result => {
    console.log(result); // "Operation was successful!"
})
.catch(error => {
    console.error(error); // If there is an error
});

//Chaining promises
myPromise
.then(result => {
    console.log(result);
    return "Another successful result";
})
.then(anotherResult => {
    console.log(anotherResult); // "Another successful result"
})
.catch(error => {
    console.error(error);
});

//Using 'Promise.all();
const promise1 = Promise.resolve("First promise");
const promise2 = Promise.resolve("Second promise");

Promise.all([promise1, promise2])
.then(results => {
    console.log(results); // ["First promise", "Second promise"]
})
.catch(error => {
    console.error(error);
});

//Using 'Promise.race();
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'First'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Second'));

Promise.race([promise1, promise2])
.then(result => {
    console.log(result); // "Second"
})
.catch(error => {
    console.error(error);
});

//Using 'Promise.allSettled()';
const promise1 = Promise.resolve("Resolved");
const promise2 = Promise.reject("Rejected");

Promise.allSettled([promise1, promise2])
.then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else {
            console.log('Rejected:', result.reason);
        }
    });
});

//Async/Async Syntax 
//Basic 
async function asyncFunction() {
    try {
        const result = await myPromise;
        console.log(result); // "Operation was successful!"
    } catch (error) {
        console.error(error);
    }
}

asyncFunction();

//Handling Multiple Promise
async function fetchData() {
    try {
        const results = await Promise.all([promise1, promise2]);
        console.log(results); // ["First promise", "Second promise"]
    } catch (error) {
        console.error(error);
    }
}

fetchData();