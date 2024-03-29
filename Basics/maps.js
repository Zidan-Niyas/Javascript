// ----All 3 ways of using map gives the same output in console----//
// 1st way
function binary(x) {
    return x.toString(2);
}
const output1 = arr.map(binary);
console.log(output1);

// 2nd way
const output2 = arr.map(function binary(x) {
    return x.toString(2);
});
console.log(output2);

// 3rd way
const output3 = arr.map((x) => x.toString(2));
console.log(output3);
