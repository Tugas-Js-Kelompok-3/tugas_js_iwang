//Soal 1
class Persegi {
    constructor(sisi){
        this.sisi = sisi;
    };
    perkalian(){
        return this.sisi * this.sisi;
    }
    pertambahan(){
        return this.sisi + this.sisi;
    }
    pengurangan(){
        return this.sisi - this.sisi;
    }
    pembagian(){
        return this.sisi / this.sisi;
    }
}
const persegi = new Persegi(69)
console.log(persegi.pertambahan());


//Soal 2
const map = Array.prototype.map;
function separate(string) {
    const separated = map.call(string, el => {
        return `${el}`;
    });
    console.log(separated.sort());
}
separate("iwang");



//Soal 3
function age(umur) {
    if(umur > 17) {
        console.log("Adult")
    } else {
        console.log("Tidak Adult")
    }
}
age(16)




//Soal 4
class identity {
    constructor(nama, alias, hobi){
        this.Nama = nama;
        this.Alias = alias;
        this.Hobi = hobi;
    };
};
const identity1 = new identity("Iwang", "Wangg", "Tidur")
console.log(identity1);




//Soal 5
class Person {
    constructor(nama, kelas, umur){
        this.Nama = nama;
        this.Kelas = kelas;
        this.Umur = umur;
    };
    greeting (){
        return (
            "namaku " + this.Nama + " aku kelas " + this.Kelas + " umurku " + this.Umur
        )
    }
};

const pender = new Person("Iwang", 11, 17)
console.log(pender.greeting());