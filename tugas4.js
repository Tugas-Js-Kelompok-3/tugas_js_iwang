//soal no 1
// const countUniqueValues = (array) => {
//     const resultArray = []
//     for(const item of array) {
//         if(!resultArray.includes(item)) resultArray.push(item)
//     }
//     console.log(resultArray.length)
// }

// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
// countUniqueValues([])

//soal no 2
function joinfullName (Description,name){
    console.log(Description + " " + name[0] + " " + name[1] + " " + name[2]);
}

joinfullName ("My Name Is" ,["iwang","jati","giwangkara"])

//soal no 3
function kurangdariatausamadengannol(nomer){
    if (nomer <= 0)
    {
        console.log("benar");
    }

    else {
        console.log("salah");
    }
}

kurangdariatausamadengannol (5)
kurangdariatausamadengannol (0)
kurangdariatausamadengannol (-1)

