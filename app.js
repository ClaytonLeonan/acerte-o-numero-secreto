let ListaNumerosSorteados = [];
let numeroMaximoDeSorteio = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Parabéns você acertou');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor!')
    } else {
        exibirTextoNaTela('p', 'O numero secreto é maior!')
    }
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximoDeSorteio + 1);

    let quantidadeDeElementosNaLista = ListaNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroMaximoDeSorteio){
        ListaNumerosSorteados = [];
    }

    if (ListaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        ListaNumerosSorteados.push(numeroEscolhido);
        console.log(ListaNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}