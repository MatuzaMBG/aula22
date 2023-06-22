function alo(){
    alert('Alo!')
}

function aloNome(nome){
    // alert('Alo ' + nome) // concatenação de string
    alert(`Alo ${nome}. Seja bem vindo ao curso!`) // interpolação
}

function saudacao(){
    const nome = document.getElementById('nome').value
    if (nome === ''){
        alert('Digite um Nome.')
        document.getElementById('nome').focus()// foco no elemento
    }else{
         alert (`${nome} seja bem vindo oa curso.`)
    }
   
}

function mouseCima(){
    alert('O mouse esta aqui!')
}

function mouseFora(){
    alert('O mouse saiu !!')
}

function textoMudou(){
    alert('O texto mudou !')
}

function emFoco(){
    const  user = document.getElementById('user')
    user.style.border = '5px solid green'
    user.style.backgroundColor = 'gray'
}

function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}