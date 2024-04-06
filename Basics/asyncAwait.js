//----------------------- ASYNC/AWAIT ------------------------//

// Here, promise p1 takes 10s to resolve and p2 takes 5s to resolve
// As p1 is awaited first, both console.log shows output after 10s
// If the order was reversed and p1 took 5s while p2 took 10s,
// p1 would've shown output after 5s and p2 after another 5s(total 10s).
// So, the learning here is that, whichever promise is awaited first will have to be resolved first then only it will move on to next.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise resolved");
    }, 10000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Promise resolved");
    }, 5000);
});

// await can only be used inside an async function
async function handlePromise() {
    const output1 = await p1;
    console.log("Namaste Javascript");
    console.log(output1);

    const output2 = await p2;
    console.log("Namaste again");
    console.log(output2);
}
handlePromise();


/* 
What happens behind the scenes during ASYNC/AWAIT ?
    -> Async promises inside the call stack --> as JS is a synchronous single-threaded language, the code runs from the top onwards
    and handlePromise function is put into the call stack and when it reaches await p1, the handlePromise function suspends at line 16 
    & callstack empties out. After 10s p1 is resolved and handlePromise function comes back into the callstack and starts at line 16 again
    and executes. Once the execution reaches await p2 which takes 5s to resolve, it sees that p2 is already resolved(as it takes less 
    time than p1) and quickly executes that as well.

    -> This ensures that the JS engine does not end up waiting for the async promises to be resolved causing the page to freeze, in this case
    when an async promise is encountered the function suspends at that line and is removed from the call stack so that the remaining piece of code
    can be executed.Once the promise is resolved, the async function comes back into the call stack and resumes execution
*/


//------------------ REAL WORLD EXAMPLE ---------------------//
const API_URL = "https://api.github.com/users/Zidan-Niyas";
async function realExample() {
    // Error Handling ---> try/catch method
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch (err) { console.log(err); }           // If URL cannot be fetched(invalid url)
    
}
realExample();


/* How fetch() works? 
    fetch() is a promise that returns a Response which is a 'readable stream', which can be json/string/text etc. To convert use .json 
    which is also a promise which gives the json value.
    fetch(URL) => Response => Response.json() => jsonValue
*/


/* Why use ASYNC AWAIT over Promise.then.catch ?
        Async await is just a 'synctatical sugar' over promise.then.catch. What this means is that, JS engine treats our async await code 
        just like a promise.then.catch code. 
        ie; behind the scenes it works the same. Basically async await is a new way of writing code. We also dont need to do that much 
        promise chaining when using Async Await, which makes it easier to read and makes more sense. 
*/
