//Creating Settled Promises
//1. Resolved Promise:
const resolvedPromise = Promise.resolve("This promise is resolved.");

resolvedPromise.then(value => {
    console.log(value); // Output: "This promise is resolved."
}).catch(error => {
    console.error(error);
});


//2. Rejected Promises
const rejectedPromise = Promise.reject("This promise is rejected.");

rejectedPromise.then(value => {
    console.log(value);
}).catch(error => {
    console.error(error); // Output: "This promise is rejected."
});

//Combining Settled Promises
//Using 'Promise.allSettled()'
const promise1 = Promise.resolve("Resolved promise 1");
const promise2 = Promise.reject("Rejected promise 2");
const promise3 = Promise.resolve("Resolved promise 3");

Promise.allSettled([promise1, promise2, promise3])
.then(results => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
        } else {
            console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
        }
    });
});

//Using 'Promise.any()'
const promise1 = Promise.reject("Rejected promise 1");
const promise2 = Promise.reject("Rejected promise 2");
const promise3 = Promise.resolve("Resolved promise 3");

Promise.any([promise1, promise2, promise3])
    .then(result => {
        console.log(result); // Output: "Resolved promise 3"
    })
    .catch(error => {
        console.error(error);
    });


//Using 'Promise.race()'
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'First'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Second'));

Promise.race([promise1, promise2])
.then(result => {
    console.log(result); // Output: "First" (since it resolves first)
})
.catch(error => {
    console.error(error);
});


//Example Code : Creating and Using Settled Promise
// Creating resolved and rejected promises
const resolvedPromise = Promise.resolve("Resolved successfully.");
const rejectedPromise = Promise.reject("Rejected with an error.");

// Using resolved promise
resolvedPromise
    .then(value => {
        console.log("Resolved Promise: " + value);
    })
    .catch(error => {
        console.error("Error: " + error);
    });

// Using rejected promise
rejectedPromise
    .then(value => {
        console.log("Resolved Promise: " + value);
    })
    .catch(error => {
        console.error("Rejected Promise: " + error);
    });

// Combining settled promises
const promise1 = Promise.resolve("Resolved 1");
const promise2 = Promise.reject("Rejected 2");
const promise3 = Promise.resolve("Resolved 3");

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
            }
        });
    });

// Using Promise.any
Promise.any([Promise.reject("Error 1"), Promise.reject("Error 2"), Promise.resolve("Success")])
    .then(value => {
        console.log("First fulfilled promise: " + value);
    })
    .catch(error => {
        console.error("All promises rejected: " + error);
    });

// Using Promise.race
Promise.race([new Promise(resolve => setTimeout(resolve, 500, 'Late')), Promise.resolve('Early')])
    .then(value => {
        console.log("Race result: " + value);
    })
    .catch(error => {
        console.error("Race error: " + error);
    });
