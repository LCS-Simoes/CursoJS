var velocidade = 102.4
console.log(`A velocidade do seu carro é ${velocidade}km/h`)
radar()

function radar(){
    if(velocidade > 100){
        console.log(`Voce recebeu uma multa por passar a ${velocidade}km/h em um radar de 100km/h`)
    }else {
        console.log('Dirija com cuidado sempre!')
    }
}