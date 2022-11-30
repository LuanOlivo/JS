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

