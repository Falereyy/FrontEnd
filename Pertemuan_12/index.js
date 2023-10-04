// const mobil = {
//     transmisi : "Manual",
//     bahanBakar : "Bensin",
//     mesin : 1500,
//     nyalakanMesin: function (){
//         console.log ('Mobil $ {this.transmisi} dinyalakan');
//     },
// }

// const mobil2 = {
//     transmisi : "Automatic",
//     bahanBakar : "Solar",
//     mesin : 2000,
//     nyalakanMesin: function (){
//         console.log ('Mobil $ {this.transmisi} dinyalakan');
//     },
// }

class Mobil{
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi,
        this.bahanBakar = bahanBakar,
        this.mesin = mesin;
    }
    nyalakanMesin(){
        console.log ('Mobil ${this.transmisi} dinyalakan');
    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic", "Solar", 2000);
mobil2.nyalakanMesin();