var idade = 199
console.log (`Você tem ${idade} anos e`)
if (idade < 16) {
    console.log ('não vota.')
} else if (idade < 18 || idade > 65) {
    console.log ('seu voto é opcional.')
} else {
    console.log ('seu voto é obrigatório.')
}