// PROMISES SYNTAX (links "Producing Code" & "Consuming Code")
let newPromise = new Promise(function (success, error) {
    // Producing Code (may take some time)
    success();
    error();
});
// Consuming Code (must wait for result)
newPromise.then(
    function (anyValue) { /* successfull code */ },
    function (errorVal) { /* error code */ }
);
