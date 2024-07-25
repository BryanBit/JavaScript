function Contar() {
    var inicio = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var result = document.getElementById ('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert ('[ERROR] Faltam dados!')
    } else {
        result.innerHTML = ''
        var i = Number (inicio.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if (i < f) {
            for (var c = i; c <= f; c+= p)
            result.innerHTML += ` ${c} `
        }
        else {
            for (var c = i; c >= f; c -= p) {
            result.innerHTML += ` ${c} `
            }
        }
    }
}