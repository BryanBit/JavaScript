var num = [5, 8, 2, 9, 3]
num.push (1)
num.sort ()
console.log (num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro vetor é o ${num[0]}`)
var pos = num.indexOf (7)
if (pos == -1) {
    console.log (`VALOR NÃO ENCONTRADO!`)
} else {
    console.log (`O valor está na posição ${pos}`)
}