function somar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 !='' && num2 !=''){
        let soma = num1 + num2 
        document.getElementById('result').innerHTML = 'Resultado: ' + soma
    }else{
        alert('Preencha os dois campos !')
    }
}

function limpar(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('result').innerHTML = 'Resultado: '
}

function calcular(){
    const ap1 = Number(document.getElementById('ap1').value)
    const ap2 = Number(document.getElementById('ap2').value)
    const as = Number(document.getElementById('as').value)

    let nota = ap1 + ap2 + as

    document.getElementById('nota').innerHTML = 'Nota' + nota
}
function verificaAp1(){
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 >1.5){
        alert ('Nota Invalida !')
        document.getElementById('ap1').value = ''
        document.getElementById('ap1').focus()
    }
}