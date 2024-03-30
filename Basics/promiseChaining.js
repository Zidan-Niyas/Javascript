const cart = ["shoes", "pants", "shirt"];

// USING CALLBACKS
createOrder(cart, function (orderId) {
    proceedToPayment(function (paymentInfo) {
        showOrderSummary(function (orderSummary) {
            updateWalletBalance();
        });
    });
});

// USING PROMISES
const promise = createOrder(cart);
promise.then(function (orderId) {
    proceedToPayment(orderId);
});

// PROMISE CHAINING
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSummary) {
        return updateWalletBalance(orderSummary);
    });

// PROMISE CHAINING USING ARROW FUNCTIONS
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((orderSummary) => updateWalletBalance(orderSummary));
