var dia = new Date()
var hoje = dia.getDay ()
switch (hoje) {
    case 0: 
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda-Feira')
        break
    case 2:
        console.log ('Terça-Feira')
        break
    case 3:
        console.log ('Quarta-Feira')
        break
    case 4: 
        console.log ('Quinta-Feira')
        break
    case 5:
        console.log ('Sexta-Feira')
    case 6:
        console.log ('Sábado')
    default:
        console.log ('[ERROR] Comando Invalido!') 
}