//Basuc of Running Promises in Parallel
// Create a few promises
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Third'));

// Run promises in parallel and wait for all to complete
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // ["First", "Second", "Third"]
    })
    .catch((error) => {
        console.error(error); // If any promise rejects
    });

//Using 'Prommise.allSettled'
const promise1 = Promise.resolve('Resolved 1');
const promise2 = Promise.reject('Rejected 2');
const promise3 = Promise.resolve('Resolved 3');

Promise.allSettled([promise1, promise2, promise3])
.then((results) => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
        } else {
            console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
        }
    });
});

//Using 'Promise.any()'
const promise1 = Promise.reject('Rejected 1');
const promise2 = Promise.reject('Rejected 2');
const promise3 = Promise.resolve('Resolved 3');

Promise.any([promise1, promise2, promise3])
.then((value) => {
    console.log(value); // "Resolved 3"
})
.catch((error) => {
    console.error(error); // AggregateError if all promises are rejected
});

//Using 'Promise.race()'
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));

Promise.race([promise1, promise2])
.then((value) => {
    console.log(value); // "First" (whichever resolves first)
})
.catch((error) => {
    console.error(error);
});

// Detailed Example : Running Multiple Promise in parallel
// Define multiple asynchronous operations
const fetchData1 = () => new Promise((resolve) => setTimeout(() => resolve('Data from API 1'), 1000));
const fetchData2 = () => new Promise((resolve) => setTimeout(() => resolve('Data from API 2'), 2000));
const fetchData3 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error from API 3'), 1500));

// Run promises in parallel and wait for all to complete
Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One or more promises rejected:', error);
    });

// Run promises in parallel and wait for all to settle
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
            }
        });
    });

// Run promises in parallel and resolve as soon as one succeeds
Promise.any([fetchData1(), fetchData2(), fetchData3()])
    .then((value) => {
        console.log('First fulfilled promise:', value);
    })
    .catch((error) => {
        console.error('All promises rejected:', error);
    });

// Run promises in parallel and resolve or reject as soon as one settles
Promise.race([fetchData1(), fetchData2(), fetchData3()])
    .then((value) => {
        console.log('First settled promise:', value);
    })
    .catch((error) => {
        console.error('First settled promise rejected:', error);
    });