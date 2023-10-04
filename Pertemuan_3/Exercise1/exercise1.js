//Buatlah fungsi yang menerima 1 input angka
//dan mengembalikan string apakah angka yang akan dimasukan
//adalah bilangan ganjil atau genap

let fungsi = function(angka){

    let cekAngka = angka % 2 == 0 ? "angka genap" : "angka ganjil";
    console.log(cekAngka);
}

fungsi(9)