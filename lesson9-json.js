//node lesson9-json.js
const or = {
    firstName: "Or",
    lastName: "Elharar",
    isMale: true,
    age: 27,
    siblingsNames: ["Yali", "Emma", "Emily"]
}
const orJson = JSON.stringify(or);
console.log(orJson);
const orBackToObj = JSON.parse(orJson);
console.log(orBackToObj);