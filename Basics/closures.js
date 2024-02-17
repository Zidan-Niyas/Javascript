// CLOSURES - a combination of a function and its lexical parents together forms a closure. A variable(a) that 
// is in closure will remember the reference value even when it is outside the scope of its lexical parent(outer). 
// ie; Value of a will be still remembered outside the function outer
function outer() {
    var a = 10;
    return function inner() {
        console.log(a);
    }
}
outer()();  // 2 parantheses calls the inner function ---> o/p = 10
var closure = outer();
closure();            // same as outer()(); ---> o/p = 10


// ANOTHER CASE OF CLOSURE USING ARGUMENTS INSIDE THE PARENT FUNCTIONS
// An argument inside the function can also be accessed because of closures
function outest(d) {
    var c = 200;
    function outer(b) {   // Argument b is also inside the closure
    var a = 10;
    return function inner() {
        console.log(a, b, c, d);
    }
    }
    return outer;
}
var closure = outest("Zidan)("Hello World");   // outest has 2 inner nested fns.
closure();
// Output ---> 10 'Hello World' 200 'Zidan'


// DATA HIDING & ENCAPSULATION USING CLOSURES
// In the below case, the count can only be accessed using the function counter(). So the variable is hidden
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1();         // this will increment the counter and output shows 1 
console.log(count);   // this won't work because the variable 'count' is hidden by closure inside the fn counter()
