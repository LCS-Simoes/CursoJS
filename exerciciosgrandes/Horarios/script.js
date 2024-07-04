function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //capturando o dia
    var hora = data.getHours() //capturando o horário
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = './images/manha.jpg'
        document.body.style.background = '#add8e6'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = './images/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //Boa noite
        img.src = './images/noite.jpg'
        document.body.style.background = '#515154'
    }
}
