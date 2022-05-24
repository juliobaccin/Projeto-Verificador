function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos um <strong>Menino</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/menino.png')

            } else if (idade < 21) {
                res.innerHTML = `Detectamos um <strong>Jovem</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/adolescentem.png')

            } else if (idade < 50) {
                res.innerHTML = `Detectamos um <strong>Homem</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/homem.png')

            } else {
                res.innerHTML = `Detectamos um <strong>Senhor</strong> com ${idade} anos.`
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos uma <strong>Menina</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/menina.png')

            } else if (idade < 21) {
                res.innerHTML = `Detectamos uma <strong>jovem</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/adolescentef.png')

            } else if (idade < 50) {
                res.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/mulher.png')

            } else {
                res.innerHTML = `Detectamos uma <strong>Senhora</strong> com ${idade} anos.`
                res.style.textAlign = 'center'
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        res.appendChild(img)

    }
}