Basic Promisos Creation 
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* success */) {
        resolve(result);  // Fulfill the promise
    } else {
        reject(error);    // Reject the promise
    }
});


// Example 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Simulate success/failure
        if (success) {
            resolve('Data fetched successfully');
        } else {
            reject('Error fetching data');
        }
    }, 1000);
});

promise
    .then(result => console.log(result)) // On success
    .catch(error => console.error(error)); // On failure


//Chaining promises
const fetchData = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data'), 1000);
});

fetchData()
    .then(data => {
        console.log('First:', data);
        return data + ' more data'; // Pass result to next `.then()`
    })
    .then(moreData => {
        console.log('Second:', moreData);
    })
    .catch(error => {
        console.error('Error:', error);
    });


//Promise.all
const fetchData1 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 1'), 1000);
});

const fetchData2 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 2'), 1500);
});

Promise.all([fetchData1(), fetchData2()])
    .then(results => {
        console.log('Results:', results); // ['Data 1', 'Data 2']
    })
    .catch(error => {
        console.error('Error:', error);
    });


//Promise.race
const fetchData1 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 1'), 1000);
});

const fetchData2 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 2'), 500);
});

Promise.race([fetchData1(), fetchData2()])
    .then(result => {
        console.log('First resolved:', result); // 'Data 2'
    })
    .catch(error => {
        console.error('Error:', error);
    });

//Promise.allSettled
const fetchData1 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 1'), 1000);
});

const fetchData2 = () => new Promise((_, reject) => {
    setTimeout(() => reject('Error in Data 2'), 1500);
});

Promise.allSettled([fetchData1(), fetchData2()])
    .then(results => {
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
            } else {
                console.error('Rejected:', result.reason);
            }
        });
    });


//Promise.any
const fetchData1 = () => new Promise((_, reject) => {
    setTimeout(() => reject('Error 1'), 1000);
});

const fetchData2 = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data 2'), 500);
});

Promise.any([fetchData1(), fetchData2()])
    .then(result => {
        console.log('First resolved:', result); // 'Data 2'
    })
    .catch(error => {
        console.error('Error:', error);
    });


// Using Promises with async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();


//Handing Errors in Async functions
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Data fetched');
            } else {
                reject('Error fetching data');
            }
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData(true); // Change to false to test error handling
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();