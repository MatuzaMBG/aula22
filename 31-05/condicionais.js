//prompt Recebe entrada do usúario
let numero = Number(prompt('Digite um número.')); // Converte para tipo número

if(numero > 5){
    alert("É maior");
}else if (numero === 5){
    alert('É igual');
    //console.log(numero) Imprime no console do navegador
}else{
    alert('É menor');
}


let opcao = Number(prompt('Digite um número de 1 a 4.'))

switch(opcao){
    case 1 :
        alert('Opção 1')
        break
    case 2 :
        alert('Opção 2')
        break
    case 3 :
        alert('Opção 3')
        break        
    case 4 :
        alert('Opção 4')
        break
    default:
        alert('Selecione uma opção valida')        



}
