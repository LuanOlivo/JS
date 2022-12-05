// Tipo de dados

//ARRAY - ARRANJO - VETOR

// Toda vez ao iniciar um array utilizar [] na declaração
let produtos = []; // Array vazio

// esse valor de array possui 3 length considerando que sempre inicia da posição 0 e na contagem de length 0 já vale 1
produtos = ['camiseta', 'calça', 'blusa']; 
console.log(produtos);

console.log(produtos[1]); // Para exibir apenas o valor inserido na posição 1 utilizando o array e [] com a posição declarado dentro do msm

produtos[2] = 'casaco'; // Para alterar o valor da segunda posição do array
console.log(produtos[2]); // exibir apenas a posição 2 do array

// Array é considerado um Objeto
console.log(typeof produtos);

// Declaração de objetos dentro de um array
let jogadores = [
    // Valor da posição 0 a primeira posição;
    {
        nome: 'Ronaldinho', 
        posicao: 'Atacante'
    }, 

    // Valor da posição 1 a segunda posição;
    {
        nome: 'Marquinhos',
        posicao: 'Zaqueiro'
    },
];

console.log(jogadores)

// SPLIT - DIVIDIR 

const email = 'fulano@meuemail.com';
// Metodo .split é usado para dividir um texto ou valor a partir do valor declarado dentro do ()
const emailArray = email.split('@');

console.log(emailArray);

// Pegamos um amontado de palavras e formamos uma lista que mais tarde pode ser acessado item por item

// declaração de hobies
const palavraChave = 'cinema, futebol, televisao, viagem, boliche'; 
const hobies = palavraChave.split(',');
console.log(hobies[3]);