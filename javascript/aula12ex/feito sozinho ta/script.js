function Carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerText = `Agora são ${hora} hora(s).`
    if (hora >= 0 && hora < 12) {
        msg.innerText += ' Tenha um bom dia!'
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#d3c8b0'
    } else if (hora >= 12 && hora < 18) {
        msg.innerText += ' Tenha uma boa Tarde!'
        img.src = 'fototarde.jpg'
        document.body.style.background = '#9fadb5'
    } else {
        msg.innerText += ' Tenha uma boa Noite!'
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#0e1a20'
    }
}