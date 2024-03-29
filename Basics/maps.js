// ----Both ways of using map gives the same output in console----//

// 1st way
const output = arr.map(function binary(x) {
    return x.toString(2);
});
console.log(output);


// 2nd way
const output2 = arr.map((x) => x.toString(2));
console.log(output2);
