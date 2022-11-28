// TIPO DE DADO DE REFERENCIA 

// FUNÇÃO - FUNCTION

// Declarando a função
function exibirMensagem(){
    alert ('Olá essa mensagem foi emitida a partir de uma função!');
}

// Chamada da função
// exibirMensagem();

// entre os () é usado para declarar parametros e variaveis para que possam ser utilizadas no corpo da função
function exibirMensagem1(primeiroNome, segundoNome){ // () é o PARAMETRO
    // Esse é o inicio do corpo dessa função

    // A crase é utilizada para declarar textos e poder concatenar com valor da variavel
    alert (`Olá ${primeiroNome} ${segundoNome}, tudo bem?`);
    // ${} é usado para concatenar o valor de uma variavel ao restante de valores declarados no alert

    // Aqui é o final do corpo dessa função
}

// Chamada da função
exibirMensagem1('Ana', 'Silva'); // () é o ARGUMENTO dessa função 
// o valor ana é atribuido a variavel nome 

// A DIFERENÇA ENTRE PARAMETRO E ARGUMENTO É QUE O PARAMETRO É DECLARADO NA DECLARAÇÃO DE FUNÇÃO E ARGUMENTO É DECLARADO NA CHAMADA DESSA FUNÇÃO 

exibirMensagem1('Joao', 'Santos'); // É possivel chamar a mesma função com argumentos diferentes

// Uma função pode ser chamada quantas vezes forem nescessarias

function mediaAritmeticaSimples(a, b){
    let m = (a + b) /2;
    return m; // Usado para retornar o valor fora da função
}

mediaAritmeticaSimples(10, 5);

console.log(mediaAritmeticaSimples(10,5)); // Chamando a função e apresentando no console

// Outra forma de exibir o retorno da função
let resultado = mediaAritmeticaSimples(10, 5); // atribuindo o retorno da função a uma variavel 
console.log(resultado); // Exibindo o valor da função atribuida a variavel 