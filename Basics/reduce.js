const arr = [5, 1, 2, 3, 6];

//---------------- 1ST EXAMPLE -------------------//
// 2nd argument of function(current) iterates through the value of the array
// 2nd argument of reduce(0) is used to initialize the value of 1st argument of function
const output = arr.reduce(function (sum, current) {
    sum = sum + current;
    return sum;
}, 0);
console.log(output);

//---------------- 2ND EXAMPLE -----------------//
// Finding maximum value in array using normal method
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

// Finding maximum using reduce
const output2 = arr.reduce(function (max, current) {
    if (current > max) {
        max = current;
    }
    return max;
}, arr[0]);
console.log(output2);
