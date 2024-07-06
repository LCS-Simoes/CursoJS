function calcular(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltabuada')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número')
    }else {
        let n = Number(num.value) //convertendo o valor para núemros, eu poderia fazer direto igual o outro exercicio
        tab.innerHTML = '' //se não fizer isso ele vai ir acumulando os calculos da tabuada
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option') //estou criando um elemento que tem "opções"
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

    
}



