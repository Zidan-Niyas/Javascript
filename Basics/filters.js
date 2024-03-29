const arr = [5, 1, 2, 3, 6];

//----------- 2 WAYS OF USING FILTER -----------------//

// Odd filter 
const output2 = arr.filter(function isOdd(x) {
    return x % 2 !== 0;
});
console.log(output2);

// Even Filter using arrow function (MOST USED METHOD)
const output3 = arr.filter((x) => x % 2 == 0);
console.log(output3);
