let listaNumerosSorteados = []
let qntNumeros = 10
let numeroSecreto = GerarNumeroAleatorio()
let tentativas = 1;
msgInicial()

function msgInicial(){
    exibirTextoTela("h1", "Jogo da Adivinhação")
    exibirTextoTela("p", "escolha um numero") 
}

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function verificarChute(){
    let chute = document.querySelector("input").value
    console.log(numeroSecreto)

    if(chute == numeroSecreto){
        exibirTextoTela("h1", "BOAAAA")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let msgTentativas = `voce acertou o numero com ${tentativas} ${palavraTentativa}`
        exibirTextoTela("p", msgTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled")

    }else{
        tentativas++
        if(chute > numeroSecreto){
            exibirTextoTela("p", "numero secreto é menor ")
        }else{
            exibirTextoTela("p", "numero secreto é maior ")
        }
        limparCampo()
    }
}

function limparCampo(){
    chute = document.querySelector("input")
    chute.value = ""
}

function GerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * qntNumeros + 1)
    let qntElementosLista = listaNumerosSorteados.length

    if(qntElementosLista == qntNumeros){
        listaNumerosSorteados = []
    }

    if ( listaNumerosSorteados .includes(numeroEscolhido)){
        return GerarNumeroAleatorio()
    }else{
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    msgInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

