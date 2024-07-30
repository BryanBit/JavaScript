function Carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    //var hora = data.getHours ()
    hora = 14
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom Dia!'
        img.src = "fotomanha.jpeg"
        document.body.style.background = '#d99367'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa Tarde!'
        img.src = "fototarde.jpeg"
        document.body.style.background = '#5e434c'
    } else {
        msg.innerHTML += 'Boa Noite!'
        img.src = "fotonoite.jpeg"
        document.body.style.background = '#1d2e36'
    }
}
