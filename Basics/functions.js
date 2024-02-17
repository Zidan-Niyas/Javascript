a();  // this works
b();  // throws a TypeError because b acts a variable that initially has a value of undefined.
// Difference between function statement and expression is 'HOISTING'
// function expression(b) acts as a variable and throws an error if called before writing the function

// function statement(aKa, function declaration)
function a() {
    console.log("a called");
}
b();


// function expression(function as a value)
var b = function() {
    console.log("b called");
}
b();


// anonymous functions(used when functions act as values)
function () {   // syntaxError
    console.log("cannot be called ;( ");
}


// named function expression
var c = function xyz() {
    console.log("c called");
}
c();    // ok ;)
xyz();  // ReferenceError


// difffernce between Parameters & Arguments
var d = function (param1, param2) {  // param1 & param2 are the local variables/identifiers/labels
    console.log("d called");
}
d(1, 2);    // 1 & 2 are arguments


// First Class Functions
