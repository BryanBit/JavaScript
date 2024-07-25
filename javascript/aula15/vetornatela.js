var num = [61, 26, 84, 99, 12, 7]
/*
console.log (num[0])
console.log (num[1])
console.log (num[2])
console.log (num[3])
console.log (num[4])
console.log (num[5])
*/
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log (num[pos])
}
*/
for (var pos in num) {
    console.log (`${pos} ${num[pos]}`)
}