// Soal 3
function array(value) {
    const result = value.map(el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result, split.join(' '));
}
array(['hallo', 'nama', 'saya', ['iwang', 'jati', ['kelas', ['11', ['rpl', '2']]]]])


// Soal 4
const obj = {
    nama: "Iwang",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
        nama: "Redmi 5A",
        spesifikasiHp: {
            chipset: "Qualcomm Snapdragon 425",
            ram: "2 GB",
            rom: "16 GB",
            camera: "13mp"
        }
    }
}
console.log(obj.Hp);