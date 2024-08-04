// Callbacks

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(null, data); // On success
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Success:', data);
    }
});


// Promises

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched";
            resolve(data); // On success
        }, 1000);
    });
}

// chaining
fetchData()
    .then(data => {
        console.log('Data:', data);
        return processData(data); // Chain another promise
    })
    .then(result => console.log('Processed result:', result))
    .catch(error => console.error('Error:', error));

//Async / Await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched";
            resolve(data); // On success
            // reject('Error message'); // On failure
        }, 1000);
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


//Hanling Multiple Async Operations
//Promise.all
const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data 2'), 1500));

Promise.all([fetchData1(), fetchData2()])
    .then(results => {
        console.log('Results:', results); // ['Data 1', 'Data 2']
    })
    .catch(error => console.error('Error:', error));
//Promise.race
const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data 2'), 500));

Promise.race([fetchData1(), fetchData2()])
    .then(result => {
        console.log('First result:', result); // 'Data 2'
    })
    .catch(error => console.error('Error:', error));

//Error Handling and debugging
//Try/catch
async function getData() {
    try {
        const data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

//Handling errors in promises 
fetchData()
    .then(data => {
        console.log('Data:', data);
        return processData(data); // Chain another promise
    })
    .then(result => console.log('Processed result:', result))
    .catch(error => console.error('Error:', error));

//Using 'Promise.allSettled'
const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
const fetchData2 = () => new Promise((_, reject) => setTimeout(() => reject('Error in Data 2'), 1500));

Promise.allSettled([fetchData1(), fetchData2()])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
            } else {
                console.error('Rejected:', result.reason);
            }
        });
    });
