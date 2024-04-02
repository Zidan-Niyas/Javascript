/* 
Promise APIs :
    1) Promise.all()
    2) Promise.allSettled()
    3) Promise.race()
    4) Promise.any()
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
});

Promise.all([p1, p2, p3]);  // all or nothing
// p1,p2,p3 are promises
// p1 --> 3s,  p2 --> 1s,  p3 --> 2s
// after 3s ---> array [val1, val2, val3] is returned from Promise.all
// Promise.all() waits for all of them to finish (if all of the promises are resolved)
// As soon as any one of the promises gets rejected, Promises.all() throws an ERROR.

Promise.allSettled([p1, p2, p3]);  // all regardless of error
// same as Promise.all() if all promises are resolved (waits for all promises to complete before showing result)
// But, if one promise gets rejected, this api will still wait for all other promises to be settled.
// ie; after 3s ---> [val1, err2, val3] if p2 is rejected and remaining are resolved.

Promise.race([p1, p2, p3]);    // First settled
// It is a race, which promise gets settled first, it will not wait for the other promises to get settled.
// As p2 takes lowest time to get settled(1s), val 2 is recieved first (that is, if p2 is resolved)

Promise.any([p1, p2, p3]);     // First success(resolved)
// Success seeking API
// It will wait for first resolved.
// If p2 is rejected, it will check p3, if it is resolved(successful), val3 is taken.
// If all are rejected, the result will be an array of all 3 errors [err1, err2, err3] ---> Aggregate error.

//--------------- EXAMPLE CODE -----------------//
Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });
// OUTPUT ---> P2 fail


Promise.allSettled([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });
/* OUTPUT :- 
0: {status: 'fulfilled', value: 'P1 success'}
1: {status: 'rejected', reason: 'P2 fail'}
2: { status: 'fulfilled', value: 'P3 success' }
*/

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
        console.log(err.errors);
    });
// OUTPUT ---> ['P1 fail', 'P2 fail', 'P3 fail']
