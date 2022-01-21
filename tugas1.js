function perkenalan(){
    console.log("Hallo nama saya Iwang jati giwangkara Dari XI RPL 2");
}
perkenalan()

function convertyear(year){
    console.log(year * 365,"Hari");
}
convertyear(1)

function convertday(day){
    console.log(day * 24, "Jam");
}
convertday(1)

function converthour(hour){
    console.log(hour * 60,"Menit");
}
converthour(1)

function convertmin(min){
    console.log(min * 60,"Detik");
}
convertmin(1)

////perulang for,for in,for off
const archon = ["Chen","Silencer", "OgreMagi", "Rubick"];

for (let i = 0; i < archon.length; i++) {
    console.log(archon[i]);
}
 
const gender = ['Male','Female','Gay'];
let a = 0;
for (let a in gender) {
    console.log(gender[a]);
}

const nickname = ["iwang","zidan","loy","wikky"];
for (let x of nickname) {
    console.log(x);
}


