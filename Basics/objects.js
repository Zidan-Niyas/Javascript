// Objects 
const person = {
    firstName: "Zidan",
    lastName: "Niyas",
    age: 21,
    isMarried: false,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.age, person.fullName());    // displays age and full name
const { firstName, age, isMarried } = person;  // destructuring
const person2 = { ...person, firstName: "notZidan" } // creating a new object with all the same values but name is different
