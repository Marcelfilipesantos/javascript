function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
         window.alert ('[ERRO] verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src','jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src','adultom.png')
            } else {
                img.setAttribute('src','idosom.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src','bebef.png')
            } else if (idade < 21) {
                img.setAttribute('src','jovemf.png')
            } else if (idade < 50) {
                img.setAttribute('src','adultof.png')
            } else {
                img.setAttribute('src','idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }

}
     