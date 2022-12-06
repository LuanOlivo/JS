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
let jogadore = [
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

console.log(jogadore)

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

//PUSH - ADICIONAR elemento no final do array

const cidades = [];
console.log(cidades)

// Adicionando valor a uma posição do array
cidades.push('Rio', 'Brasília');
console.log(cidades)

// É possivel adicionar mais de uma vez valores a um array e ambos valores adicionados serão exibidos
cidades.push('Cuiabá', 'São Paulo'); // Adicionado no final
console.log(cidades)

//UNSHIFT - ADICIONAR NO COMEÇO

cidades.unshift('Campinas', 'Fortaleza') // Adicionado no inicio do array ocupando a posição 0
console.log(cidades)

// POP - REMOVER O ULTIMO ELEMENTO - RETORNA O ELEMENTO REMOVIDO

let cidadeRemovida = cidades.pop();
console.log(cidadeRemovida) // Retorna a cidade da ultima posição do array 'São Paulo

// SHIFT - REMOVE O PRIMEIRO ELEMENTO - RETORNA O ELEMENTO REMOVIDO

cidadeRemovida = cidades.shift();
console.log(cidadeRemovida) // Retorna a cidade da primeira posição do array 'Campinas' 

// SPLICE - REMOCE 1 OU MAIS ITENS - UTILIZANDO INDICE

const indice = cidades.indexOf('Rio'); // Para indicar o indice de posicçao de array da palavra entre ()
console.log(indice);

cidades.splice(indice,1); // Removendo o array da posição 1

console.log(cidades);

// CONCAT - CONCATENAÇÃO 

const cidadeInterior = ['Araraquara', 'Araras', 'Limeira']
const regioesMetropolitanas = ['Campinas', 'São Paulo']

// Para concatenar dois Arrays usando o metoto .concat e atribuindo = a um Array
 const cidadesInterioreMetropolitana = cidadeInterior.concat(regioesMetropolitanas)

 console.log(cidadesInterioreMetropolitana)

 // ARRAY.FROM
// Para separar em array o valor dentro de ()
 const x = Array.from('ABNT');

 console.log(x)

 // INCLUDES 

 // Para verificar se o valor inserido dentro de () pertence a esse Array sendo emitido os valores TRUE OU FALSE 
 console.log(cidadeInterior.includes('Limeira')) // TRUE

 console.log(cidadeInterior.includes('Rio')) // FALSE

 // ITERAR - PERCORRER 

 const jogadores = [
     // Vetor de objetos
     {
         nome: 'Ronaldinho', 
         posicao: 'Atacante'
     }, 
 
     {
         nome: 'Marquinhos',
         posicao: 'Zaqueiro'
     },

     {
        nome: 'Casemiro',
        posicao: 'Volante'
     },

     {
        nome: 'Paqueta',
        posicao: 'Volante'
     }
 ];

 function obtemNomeJogador(j) {
    return j.nome;
 }

 let nomeJogadores = jogadores.map(obtemNomeJogador);
 console.log(nomeJogadores)

 // 
 function obtemVolante(jogadores) {
    return jogadores.posicao === 'Volante'
 }

 const volantes = jogadores.filter(obtemVolante)

 console.log(volantes);

 // FOREACH - PARA CADA 

 function exibirNomeJogador(jogador){
    console.log(jogador.nome);
 }

 jogadores.forEach(exibirNomeJogador)
