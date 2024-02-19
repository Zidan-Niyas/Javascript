// ASYNC --> makes a function return a promise
// Instead of this function to return Promise
function myFunction() {
    return Promise.resolve("hello");
}

// ASYNC returns promise
async function myFunction() {
    return "hello";
}

// Then, we can use the promise as follows...
myFunction().then(
    function (value) { myDisplayer(value) },
    function (error) { myDisplayer(error) }
);
const myDisplayer = (value) => {
    document.getElementById("demo").innerHTML = value;
}


// AWAIT --> makes a function wait for a promise to be fulfilled
//The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
async function myDisplay() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () { resolve("I love you"); }, 3000);       // promises to display I love you after 3 seconds
    });
    document.getElementById("demo").innerHTML = await myPromise;        // waits for the promise to be completed
}
myDisplay();
