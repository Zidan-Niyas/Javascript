// ------- REAL WORLD EXAMPLE OF MAP, FILTER & REDUCE ---------------------//

const users = [
    { firstName: "Zidan", lastName: "Niyas", age: "21" },
    { firstName: "Aswanth", lastName: "Mahesh", age: "21" },
    { firstName: "Arjun", lastName: "K", age: "22" },
    { firstName: "Mohammed", lastName: "Shafeeh", age: "20" },
];

// MAP
const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);
// OUTPUT = ['Zidan Niyas', 'Aswanth Mahesh', 'Arjun K', 'Mohammed Shafeeh']

//-------- CHAINING FILTER & MAP--------//
const output2 = users.filter((x) => x.age > 20)
    .map((x) => x.firstName);
console.log(output2);
// OUTPUT = ['Zidan', 'Aswanth', 'Arjun']

// REDUCE
const output3 = users.reduce(function (acc, current) {
    if (acc[current.age]) {
        acc[current.age] = ++acc[current.age];
    }
    else {
        acc[current.age] = 1;
    }
    return acc;
}, {});
console.log(output3);
// OUTPUT = {20: 1, 21: 2, 22: 1}

// REDUCE TO FIND FIRST NAME OF ALL USERS WITH AGE > 20
const taskOutput = users.reduce(function (acc, current) {
    if (current.age > 20) {
        acc.push(current.firstName);
    }
    return acc;
}, []);
console.log(taskOutput);
// OUTPUT = ['Zidan', 'Aswanth', 'Arjun']
