// objek

const person = {
    nama: "Iwang Jati",
    kelas: "XI RPL 2",
    umur: "16 thn",
    hobi: {
        Futsal: true,
        Game: true,
        Makan: true,
    }
}
console.log(person);

//animal 

const animal = {
    shark: "ocean",
    whale: "ocean",
    turtles: "pond",
    otter: "fish biscuit",
    lion: "land",
    tuna: "ocean"
}
console.log(animal);

const jumlahanimal = {
    shark: {
        habitat: "ocean",
        totalspesies: "570"
    },
    whale: {
        habitat: "ocean",
        totalspesies: "800"
    },
    lion: {
        habitat: "land",
        totalspesies: "780"
    },
    turtles: {
        habitat: "pond",
        totalspesies: "6000"
    },
}
console.log(jumlahanimal);

//my objec animal soal 1

const myobjec =[
    { nama:'shark', likes:'ocean'},
    { nama:'lion', likes:'land'},
    { nama:'otter', likes:'fish biscuit'},
    { nama:'whale', likes:'ocean'},
    { nama:'turtle', likes:'pond'},
    { nama:'tuna', likes:'ocean'},
]

const yes = myobjec.map(item => {
        const penyimpanan = {}

        penyimpanan[item.nama] = item.likes
        penyimpanan.spesies = item.nama.length * Math.floor(Math.random() * 5000)

    return penyimpanan
})
console.log(yes);


//filter soal 2
const fill = myobjec.filter((per) => {
    return per.likes == "ocean"
})
console.log(fill);

//nama jadi nama panggilan  soal 3

let name = "Iwang";
let result = name.replace("Iwang", "Wangg");
console.log(result);
//soal 4

let numbers = [100, 25, 16, 56, 87]
let doubles = numbers.map(function(num) {
        return num * 5
})
console.log(doubles);

//soal 5

let minus = numbers.map(function(num) {
        return num - 100
})
console.log(minus);

//soal 6

let plus = numbers.map(function(num) {
        return num + 5
})
console.log(plus);

//soal 7

let iniNomor = [1,2,3,4,5,6,7,8,9,10]
let mengecek = iniNomor.filter(lebihBesar);

function lebihBesar(yes){
return yes > 5;
}

console.log(mengecek);

//soal 8
 
let mencoba = iniNomor.filter(lebihKecil);

function lebihKecil(yes){
return yes < 6;
}

console.log(mencoba);

//soal 9

const kumpul = [1,2,3,4,5,6,5,4,7,5,5,6,7,8,7,5,5,5,5]
const select = kumpul.filter(lima);

function lima(kumpul) {
    return kumpul == 5
}
console.log(select)

//soal 10

const iwangjati = ['Iwang', 'Iwang', 'Iwang', 'jati', 'jati','Iwang', 'Iwang']
const selek = iwangjati.filter(iwang);

function iwang(iwangjati) {
    return iwang == 'Iwang'
}
console.log(selek)