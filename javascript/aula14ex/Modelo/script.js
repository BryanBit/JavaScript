function Contar() {
    var inicio = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var res = document.getElementById ('res')
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar...'
        window.alert ('[ERROR] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert ('[ERRO] Passo Inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = i; f <= c; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}