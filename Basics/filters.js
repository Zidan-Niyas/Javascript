const arr = [5, 1, 2, 3, 6];

//----------- FILTERS CAN BE IMPLEMENTED IN 3 WAYS -----------------//
// Greater than 4 filter using 1st way
function isGreater(x) {
    return x > 4;
}
const output1 = arr.filter(isGreater);
console.log(output1);

// Odd filter using 2nd way
const output2 = arr.filter(function isOdd(x) {
    return x % 2 !== 0;
});
console.log(output2);

// Even Filter using arrow function (MOST USED METHOD)
const output3 = arr.filter((x) => x % 2 == 0);
console.log(output3);
