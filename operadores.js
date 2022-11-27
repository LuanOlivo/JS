// Operadores arimeticos 

// + para somar valores

let a = 6, b = 9;
let soma = a + b;
console.log(soma)

let nome = 'Carlos'
let bemVindo = 'Olá '

let msg = bemVindo + nome; // concatenar
console.log(msg);

// -

let resultado = 7 -2;
console.log(resultado)

// * multiplicação

let result = 3 * 5;
console.log(result);

// divisão /

let divisão = 15 / 5;
console.log(divisão);

// % resto 

// divide o primeiro valor pelo segundo e imprimi o resto dessa divisão exata
console.log(21 % 4)

// Exponenciação ** 
// 4 elevado ao quadrado
console.log( 4 ** 2)

// = Atribuição 
// esta atribuindo o valor em strings a variavel 
let cor = 'amarelo'
console.log(cor)

// * =
// ele pega o valor que ja existe e multiplica pelo novo valor
let num = 3;

// seria num = num *2;
 num *= 2;
 console.log(num)

 // **=

 console.log(num **= 2);

//  OPERADORES RELACIONAIS 

let A = 10;
let B = 20;
console.log(A > 10); // Se for maior apresenterá o resultado TRUE caso contrario FALSE

console.log(A <= B); // menor ou igual
console.log(A >= B); // maior ou igual

// OPERADORES DE IGUALDADE 

// == Para comparar se os valores são iguais
let nota1 = 5;
let nota2 = 5;

console.log(nota1 == nota2); // Comparação dos valores resultando em TRUE

nota2 = 6; // atribuição de novo valor
console.log(nota1 == nota2); // Comparação com novos valores resultando em FALSE

// Não considera o tipo de dado
let nota3 = 5; // Numero 5
let nota4 = '5'; // String cinco

console.log(nota3 == nota4); // Resultando TRUE pois não diferencia string de numeros

// === Considera o tipo de dado
 nota3 = 5; // Numero 5
 nota4 = '5'; // String cinco

console.log(nota3 === nota4); // Resultando em FALSE pois diferencia string de numeros

// OPERADORES DE NEGAÇÃO - NOT - !

let conectando = true; // variavel recebeu o valor verdadeiro
console.log(conectando)

console.log(!conectando) // Colocando "!" antes da variavel ele altera o valor para o valor oposto mas não altera o valor original alterando somente o resultado

// DESIGUALDADE != OU !==

// != para comparar valores sem se preocupar com o tipo dado -- IGUALDADE
let nota5 = 5;
let nota6 = '5';
console.log(nota5 != nota6) // resultando em FALSE pq desconsidera o tipo de dado

// !== Para comparar valores se preocupando com o tipo de dado -- IGUALDADE ESTRITA - EXATAMENTE IGUAL
nota5 = 5;
nota6 = '5';
console.log(nota5 !== nota6) // resultando TRUE pq nota5 é numero é nota6 string

// OPERADORES LÓGICOS BINÁRIOS

a = 2;
b = 3;
let c = 5;
let d = 7;

console.log(a > b);
console.log(b > c);
console.log(c > b);

// && - AND - E
console.log((a > b) && (c > b)); // Resultando em FALSE pq uma das expressões são falsas

console.log((b > a) && (d > c)); // Resultando em TRUE pq as duas expressões são verdadeiras

// || - OR - OU

console.log((a > b) || (c > b)); // Resultando em TRUE pq uma das expressões são verdadeiras 

console.log((a > b) || (c > d)); // Resultando em FALSE pq as duas expressões são falsas

// OPERADOR INCREMENTAL 

// ++

let x = 10;
console.log(x)

a = ++ x; // Mesma coisa que let a = x + 1;
console.log(a) // Resultando em 11 pois a variavel A recebe o valor de X mais o incremento

a = x++ ;
console.log(a++); // A + 1;

// OPERADOR DECREMENTAL 

// --
let z = 10;
let y = -- z;
console.log(y) // Resultando em 9 pois a variavel y recebe o valor de z menos o decremento

