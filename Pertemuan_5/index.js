// Array
const students = ["John","Peter","Jack", "Jane"];
const numbers = [1,2,3,4,5];
const John = ["John", "Doe", 33, true];

console.log (students);
console.log (numbers);
console.log (John);

// Index
console.log (students[2]);
students[2] = "Bob";
console.log (students);

// Length
console.log (students.length);
console.log (students[students.length - 1]);

// Mengakses seluruh elemen Array
for (let i = 0 ; i < students.length; i++) {
    console.log (students[i]);
}

//Array method
//toStrimg
console.log (John.toString());

//Join
console.log (John.join(" "));
console.log (John.join("#"));
console.log (John.join("..."));

//Pop
John.pop();
console.log (John);

//Push
John.push("Good Morning");
console.log (John);

//Shift
John.shift();
console.log(John);

//Unshift
John.unshift("Hello");
console.log (John);

//Splice
John.splice(3,0,true);
console.log(John);

//Slice
John.slice(0,3);
let john2 = John.slice(2, 4);
console.log (john2);
