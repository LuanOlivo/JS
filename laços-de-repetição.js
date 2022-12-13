// LAÇOS DE REPETIÇÃO - LOOPS

// FOR 


const listaNumeros = [23,45,76,12,89];

for (let i = 0 ; i < listaNumeros.length; i++) {

 for (let i = 0; // variavel de inicialização 
i < listaNumeros.length; // Teste ou verificação
i++ )// contador que pode incrementar ou decrementar
 console.log(listaNumeros[i]);

} 

// EXEMPLO DE FUNCIONAMENTO

//console.log(listaNumeros[0];)
//console.log(listaNumeros[1];)
//console.log(listaNumeros[2];)
//console.log(listaNumeros[3];)
//console.log(listaNumeros[4];)

// Vetor com nome das operaçoes 

const operacoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];


function montarLista(){
    let textodaLista = '';
    for (let i=0 ; i < operacoes.length ; i++) { // i é menor que o tamanho do vetor ? se sim ele acrescenta mais um e segue proxima linha
        textodaLista += '<li>' + operacoes[i] + '</li>';
        // essa linha pega a posição zero do vetor e acrescenta dentro de uma li
    }
    console.log(textodaLista)
    return textodaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montarLista();

let jogadores = [
    {
        nome: 'Neymar',
        posicao: 'Atacante'
    },
    {
        nome: 'Casemiro',
        posicao: 'Volante'
    },
    {
        nome: 'Marquinhos',
        posicao: 'Zagueiro'
    }
];

for (let jogador of jogadores){
    console.log(jogador.nome);
}

const operacoes2 = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];


// WHILE - ENQUANTO

let i =0;
while(i < operacoes2.length){
    i++;
}

// DO WHILE 
let j=0;
do {
    alert('Olá');
    j++;
} while (j < operacoes2.length);

