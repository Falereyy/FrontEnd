let people = ["Greg", "Mary", "Devon", "James"];

console.log("for-loop:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

console.log("forEach():");
people.forEach(function(person) {
    console.log(person);
});

people.splice(people.indexOf("Greg"), 1);

people.splice(people.indexOf("James"), 1);

people.unshift("Matt");

people.push("Falerey");

console.log("for-loop to exit after 'Mary':");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let copyWithoutMaryMatt = people.slice(1, -1);

people = ["Matt", "Mary", "Elizabeth", "Artie", "Falerey"];

let withBob = people.concat("Bob");

console.log("Final Result:");
console.log(withBob);