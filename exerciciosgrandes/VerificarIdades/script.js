function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //captura o ano atual
    var fano = document.getElementById('txtano') //pegando o que foi preenchido da variaval txtano do html
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // convertendo o valor de fano para number, porque ele vem em string
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') // criei um atributo com id FOTO
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','./images/Bebe1.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','./images/HomemJovem.jpg') 
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./images/AdultoMasc.jpg')
            } else {
                //Idoso
                img.setAttribute('src','./images/Idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src',';images/Bebe2.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','./images/JovemMulher.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./images/Adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src','./images/Idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) <strong>${genero}</strong> com idade de <strong>${idade}</strong> anos</br>.`
        res.appendChild(img) //Estou adicionando a exibição de imagens, se não, não vai
    }
}   

 
