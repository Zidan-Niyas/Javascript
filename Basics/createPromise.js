const cart = ["shoes", "pants", "shirt"];


// CONSUMER PART (consuming the promise)
createOrder(cart)
    .then(function (orderId) {  // Fullfillment of promise
        console.log(orderId);
        return orderId;
    })
    .catch(function (err) {     // Rejection of promise
        console.log(err.message);
    })
    .then(function (orderId) {      // remaining promises execute as usual even if promises at the top have been rejected
        return proceedToPayment(orderId);
    })
    .then(function (paymentDetails) {
        console.log(paymentDetails);
        return paymentDetails;
    });
    


// PRODUCER PART (creating the promise)
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        // Checking if the cart is valid
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        } 

        // Checking if orderId is present in the database
        // const orderId = DBcall.orderId;  ---> normally done like this
        const orderId = "12345";        // dummy orderId
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }

    });
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (!paymentValidation(orderId)) {
            const err = new Error("Payment Unsuccessfull");
            reject(err);
        }
        const paymentDetails = "Payment Successfull";
        if (paymentDetails) {
            resolve(paymentDetails);
        }
    });
}

// Check if the cart is empty, overflowing , has legit items etc..
function validateCart(cart) {
    return true;
}

function paymentValidation(orderId) {
    return true;
}
