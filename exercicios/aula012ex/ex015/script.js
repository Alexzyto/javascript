function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
                document.body.style.background = "rgb(60, 122, 180)"
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
                document.body.style.background = "rgb(60, 122, 180)"
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
                document.body.style.background = "rgb(60, 122, 180)"
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
                document.body.style.background = "rgb(60, 122, 180)"
            }

        } else if(fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade <=10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
                document.body.style.background = "#de66e2ff"
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
                document.body.style.background = "#de66e2ff"
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
                document.body.style.background = "#de66e2ff"
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
                document.body.style.background = "#de66e2ff"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

        
    } 
}