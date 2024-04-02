/* 
What is a PROMISE?
    --> A promise is a placeholder that gets filled after an asynchronous operation
        is executed.
    --> A promise is a container for a future value
    --> A promise is an object representing eventual completion of an
        asynchronous event (MDN webdocs) 
States of PROMISE : fulfilled, rejected   
Lingo : settled(result is recieved), fulfilled(success), rejected(failure)
*/

// Earlier we used write code like this, which causes 'Inversion of control' (relinquishing control to another function)
const cart = ["shirt", "pant", "shoes"];
createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
});


//--------- In the world of PROMISES, we write it like this ------------------//

const promise = createOrder(cart);
// Initially a promise is created like this --> { Data: undefined }
// Once the order is created & promise is fulfilled --> { Data: orderId }
// 'THEN' the following code executes
promise.then(function (orderId) {
    proceedToPayment(orderId);
});
// Here, we are attaching a callback function to a promise object.
// So we have control of our program, the promise object WILL call the callback function 
// if there is data inside the promise object

/
