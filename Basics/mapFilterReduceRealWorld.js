// ------- REAL WORLD EXAMPLE OF MAP, FILTER & REDUCE --------------------//

const users = [
    { firstName: "Zidan", lastName: "Niyas", age: "21" },
    { firstName: "Aswanth", lastName: "Mahesh", age: "21" },
    { firstName: "Arjun", lastName: "K", age: "22" },
    { firstName: "Mohammed", lastName: "Shafeeh", age: "20" },
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);
// OUTPUT = ['Zidan Niyas', 'Aswanth Mahesh', 'Arjun K', 'Mohammed Shafeeh']

const output2 = users.filter((x) => x.age > 20).map((x) => x.firstName);
console.log(output2);
// OUTPUT = ['Zidan', 'Aswanth', 'Arjun']

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
