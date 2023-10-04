// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil atau genap dengan menggunakan bentuk IIFE dan callback function

//IIFE

(function(angka){

    let cekAngka = angka % 2 == 0 ? "angka genap" : "angka ganjil";
    console.log(cekAngka);

}) (26)

//CallBack

function cekAngka(angka, nomor){

    let cekAngka = angka % 2 == 0 ? "angka genap" : "angka ganjil";
    console.log(cekAngka);

}

function logcekAngka(cekAngka){
    console.log(cekAngka)
}

cekAngka(31,logcekAngka)