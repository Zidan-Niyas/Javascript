//--------------------- THIS KEYWORD ------------------------//

"use strict";   // applies strict mode


//------------ this in global space -------------//
console.log(this);   // globalObject -> window(for browser)


//------------ this inside a function ------------//
// value depends on strict/ non strict mode
function x() {
    console.log(this);    // output --> window(non strict mode) / undefined(strict mode)
}
x();


// "THIS SUBSTITUTION" (this in non strict mode)
// If the value of this keyword is undefined or null
// this keyword will replaced with globalObject(window for browser)
// only in "non strict mode"


// this keyword depends on HOW the function is called
x();          // output -> undefined(in strict mode)
window.x();     // output -> window(in strict mode)


//---------- this in object's method -----------//
// when we write a function inside an object it is called a 'METHOD'
const student = {
    name: "Zidan",
    printName: function () {        // METHOD
        console.log(this.name);
    }
};
student.printName();       // value of this -> object(student)


//--------- call apply bind methods (sharing methods) -----------//
const student2 = {
    name: "Deepika",
}
student.printName.call(student2);
// .call(student2) -> value of this = student2 (this is overwritten)
// Therefore, printName method is shared with student2 object


//--------- this inside arrow function ----------//
// arrow functions do not have their own THIS binding
// they take the value of their enclosing lexical context
const obj = {
    a: 10,
    x: () => {
        console.log(this);
    },
};
obj.x();   // output -> window
// this inside arrow function has the value of its enclosed lexical context(global space)
// So, value of this = window(in browser)

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y();
    },
};
// Here, value of this = object (enclosing lexical context of y)


// this inside DOM elements => reference to HTML element
// eg:- this.tagName
