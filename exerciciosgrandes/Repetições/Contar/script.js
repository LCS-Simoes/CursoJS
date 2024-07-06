function calcular(){
    var inicio = Number(document.getElementById('new').value)
    var fim = Number(document.getElementById('end').value)
    var res = document.getElementById('res')
    var pass = Number(document.getElementById('passo').value)

    //VERIFICAÇÕES INICIAIS
    if(inicio.length == 0 && !inicio ){
        window.alert('[ERRO] não é possível iniciar sem um início')
    } else if(fim.length == 0 && !fim){
        window.alert('[ERRO] não é possível fazer o cálculo sem um fim determinado')
    } else if(pass.length == 0 && !pass){
        window.alert('[ERRO] Passo inválido. Considerando Passo = 1')
        pass = 1
    } else {
        //CALCULO
        var conta = inicio;
        var resultado = ''; //passo vazio pra quando ele entrar em loop ele receber o que está em loop
        if(inicio < fim){
            while(conta <= fim){
                //Contagem progressiva
                resultado += conta + ' ';
                conta += pass;
            }
        }else{
            while(conta >= fim){
                //Contagem regressiva
                resultado += conta + ' ';
                conta -= pass;
            }
        }
        res.innerHTML = `\u{1F928} Resultado: ${resultado}`
        // o \u{codigos} é onde se adiciona os emojis referencia: https://unicode.org/emoji/charts/full-emoji-list.html#1f92b
    }
}

/*
    Versão do Guanabara (ACHEI MAIS EXPERT)
    let = mesma coisa que var porém só funciona naquele bloco
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pass.value)

    for(let c = i; c <= f; c += p){
        res.innterHTML += ` EMOJIS ${c}` 
    
    }
    Regressiva basicamente só inverte os sinais e o += passa a valer -=
*/

