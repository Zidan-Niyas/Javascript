// Fundamental Js Array functions(.map, .filter) ---> Needed for REACT
let names = ["Zidan", "Niyas", "Super"];
// REACT syntax using MAP
names.map((name) => {
    return <h1> {name} </h1>;     
})

let names2 = ["Zidan", "Niyas", "Super", "Zidan"];
names2.filter((name) => {
    return name !== "Zidan";      // names2 will be an array without Zidan 
})
