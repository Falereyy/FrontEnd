// String literal

let fullName = "John Doe";
let age = 33;
let address = "Manado";

// Hallo nama saya John Doe, umur 33 tahun
// dan saya tinggal di manado

let kalimat5 =
    "Halo nama saya " +
    fullName +
    ", umur saya " +
    age + 
    " tahun dan saya tinggal di " +
    address;

console.log(kalimat5);

//let kalimat6 = `Hallo nama saya $`




function sayGreetings5(nama){
    return `Hello ${nama}`;
};

console.log (sayGreetings5("John"));

const sayGreetings5 = (nama) => {
    return `Hello ${nama}`;
};

console.log (sayGreetings5());

//implicit return value

const sayGreetings6 = (nama) => `Hello $(nama)`;
console.log (sayGreetings6());


// Default parameter

const sayGreetings = (fullName) => {
    console.log(fullName);
}

sayGreetings("Peter");
