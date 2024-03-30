// CALLBACKS are super powerful and useful for asynchronous operations in javascript
// Issues with callback : 1) Callback Hell   2) Inversion of control


// CALLBACK HELL : when the code grows horizontally instead of verically due to nested callback functions
// The browser runs the createOrder api, which calls back proceedToPayment which calls back
// showOrderSummary api. Therefore, callback functions help with the dependencies of these functions
// and with the flow.
// This creates a Callback HELL!!

const cart = ["shirt", "pant", "shoes"];
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});


// INVERSION OF CONTROL : lose the control of your code due to callbacks
// In the above example, we give the control of our program to createOrder api to callback the proceedToPayment api, which is risky!
// We have to blindly trust the createOrder api to callback the proceedPayment api, we dont know who wrote this api, it could be that
// the api is faulty or doesnt callback the function at all.
// ie;  we are giving the control of the callback function to another code and now we dont know what is going on behind the scenes!!!
