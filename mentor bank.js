function minMax(numberArr) {
    const small = Math.min(...numberArr);
    const big = Math.max(...numberArr);
    console.log(small, big);
}
minMax([1, 2, 3, 4, 5])
minMax([2334454, 5])
minMax([1])


// soal 2 
function dropright(arr, drop = 1) {
    const reverse = arr.reverse()
    const result = reverse.slice(drop)
    console.log(result.reverse())
}
dropright([1, 2, 3])
dropright([1, 2, 3], 2)
dropright([1, 2, 3], 5)
dropright([1, 2, 3], 0)

// soal 3
function mean(angka) {
    const rata = angka.reduce((a, b) => a + b, 0) / angka.length
    console.log(rata);
}
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])

mean([2, 3, 2, 3])

mean([3, 3, 3, 3, 3])