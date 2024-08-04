//Synchronous 
// Synchronous code example
function logMessage(message) {
    console.log(message);
}

function executeSynchronous() {
    logMessage("First message");
    logMessage("Second message");
    logMessage("Third message");
}

executeSynchronous();

// Output:
// First message
// Second message
// Third message


//Asynchronous
// Asynchronous code with callbacks
function logMessageAsync(message, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) {
            callback();
        }
    }, 1000);
}

function executeAsyncWithCallbacks() {
    logMessageAsync("First message", () => {
        logMessageAsync("Second message", () => {
            logMessageAsync("Third message");
        });
    });
}

executeAsyncWithCallbacks();

// Output (after ~3 seconds):
// First message
// Second message
// Third message


//Asynchronous code with Promises
// Asynchronous code with promises
function logMessagePromise(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

function executeAsyncWithPromises() {
    logMessagePromise("First message")
        .then(() => logMessagePromise("Second message"))
        .then(() => logMessagePromise("Third message"));
}

executeAsyncWithPromises();

// Output (after ~3 seconds):
// First message
// Second message
// Third message

//Asynchronous code with async/await
// Asynchronous code with async/await
function logMessagePromise(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

async function executeAsyncWithAsyncAwait() {
    await logMessagePromise("First message");
    await logMessagePromise("Second message");
    await logMessagePromise("Third message");
}

executeAsyncWithAsyncAwait();

// Output (after ~3 seconds):
// First message
// Second message
// Third message
