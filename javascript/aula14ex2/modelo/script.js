function Tabuada() {
    var valorT = document.getElementById ('txtN')
    var tab = document.getElementById ('seltab')
    if (valorT.value.length == 0) {
        alert ('[ERRO] Necessário digitar um valor.')
    } else {
        var n = Number (valorT.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}