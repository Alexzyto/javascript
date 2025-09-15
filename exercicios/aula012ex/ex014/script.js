function carregar() {
    var msg = window.document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = "imagens/fotomanha.png"
        document.body.style.background = "#f5d05e"
    } else if (hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = "imagens/fototarde.png"
        document.body.style.background = "#de9b71"
    } else {
        // Boa noite!
        img.src = "imagens/fotonoite.png"
        document.body.style.background = "#113138"
    }
}


