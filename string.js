// Tipo de Dado Primitivo

//STRING - CADEIA DE CARACTERES

let nome = "Ana";

let idade = 21;

let conc = nome + ' ' + idade + ' anos.'; // Uma forma de declaração

conc = `${nome}, ${idade}, anos.` // Outra forma de declaração com crase 

console.log(nome.length); // Exibi a quantidade de caracteres da variavel string chamada

console.log(nome.toUpperCase()); // Uso de metodo para transformar os caracteres dessa variavel string em maisculas

console.log(nome.toLowerCase()); // Uso de metodo para transformar os caracteres dessa variavel string em minuscula

let localização = 'Curitiba - PR'; 
console.log(localização.length); // Metodo usado para verificar quantos caracters possui a string

// O numero declarado dentro de () coresponde a posição do caracter QUE A PRIMEIRA LETRA SEMPRE REPRESENTA 0 e é possivel definir apos a virgula um numero final para uso de strings

let estado = localização.substring(11); // Metodo usado para selecionar apenas alguns caracteres dessa string

console.log(estado)

estado = localização.substring(localização.length-2); //Metodo usado para selecionar apenas alguns caracteres dessa string usando a contagem de tras p frente como exemplo iniciando em 13 e parando em 11 

console.log(estado)

const frase = "Minha cor favorita é: Azul";

// Função para utilização de indice que pelo valor declarado entre () mostrando qual a posição da string declarada
const indice = frase.indexOf(':');
console.log(indice);

// A const cor recebera as strings declaradas em frase iniciando pela string selecionada em indice + 2 posicões a frente
const cor = frase.substring(indice+2)

let texto = 'Basquete';
// Utilizando o metodo replace que substitui as string declaradas em () e substituindo pelas novas string declaradas apos a virgula dentro do ()
let novoTexto = texto.replace('bas', 'Ra')
console.log(novoTexto)
