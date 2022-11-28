// TIPOS DE DADOS

// Quem decide o tipo de uma variável é o valor atribuido a ela

let x = 10; //  variavel do tipo NUMBER pq foi atribuido um valor numerico a mesma

// Variaveis do tipo NUMBER não diferem inteiros de floats

console.log(typeof x) // Comando para exibir o tipo da variavel declarado junto a variavel

let a; // Variavel sem um valor atribuido
console.log(typeof a); // Exibi o valor undefined por não ter sido atribuido nenhum valor

let b = 'Olá'; // Variável do tipo string 
console.log(typeof b); 

// BOOLEAN - recebe os valores TRUE ou FALSE
let c = 3; // exemplo de concatenação de number + boolean

let visualizado = true; // TRUE = 1 e FALSE = 0; 
console.log(typeof visualizado); // Exibi o tipo da variavel boolean
console.log(c + visualizado); // Exibi 4 por somar 3 da variavel C e 1 da variavel boolean com valor TRUE que representa o valor numerico 1

c = 'casa' // variavel do tipo string
visualizado = false; // TRUE = 1 e FALSE = 0; 
console.log(c + visualizado); // Exibi a string atribuida a variavel C e exibindo o valor FALSE declarado na variavel boolean diferente da soma de number com boolean



// number, string undefined, boolean são TIPOS PRIMITIVOS