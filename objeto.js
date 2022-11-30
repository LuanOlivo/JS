// Tipo de Dado de Referência

// OBJETO - OBJECT - é um tipo de variavel que contem caracteristicas proprias que são agrupadas no mesmo lugar

let titulo  = "Introdução ao JS"
let numPag = 500;

// A Atribuição de valor a uma propriedade é feiro com : e nao =
const livro = { // Escopo de declaração de objeto
    titulo : "Introdução ao JS", // usa-se virgula para atribuir mais de uma propriedade nesse escopo
    numPag : 500 // Propriedade 
}; // Final do escopo de um objeto

console.log(livro); // Chamada do Objeto

console.log(livro.titulo); // Chamada de apenas uma propriedade do Objeto

livro.numPag = 600; // Nova atribuição de valor a propriedade mesmo o objeto sendo uma const
console.log(livro.numPag);

livro.editora = 'Super Pres'; // Declaração de outra propriedade ao objeto e atribuindo valor a ela 

console.log(livro); // Chamada do Objeto e exibição da nova propriedade atribuida ao objeto

// NOVO OBJETO 

const pessoa = {
    primeitoNome : 'Ana',
    segundoNome : 'Silva',

    // Lembrar de usar os : antes de abri {}
    endereço: { // DECLARAÇÃO DE ATRIBUTO COMPOSTO 
        rua : 'Arlindo Cruz',
        num : 50
    }, // Usar a virgula para separar as chaves 

    nomeCompleto : function() {// Sintaxe para declaração de uma função dentro do objeto
        return this.primeitoNome + ' ' + this.segundoNome;
        // UMA FUNÇÃO DENTRO DE UM  OBJETO É DENOMINADO COMO METODO
    }
};

console.log(pessoa.nomeCompleto()); // Chamada do metodo dentro de um Objeto

pessoa.celular = '993176464' // Declaração de um atributo e valor a um objeto

pessoa.endereçoCompleto = function(){ // Declaração de um metodo para o objeto pessoa
    return `Rua : ${this.endereço.rua}, ${this.endereço.num}` // Retorno do metodo EndereçoCompleto
}

// TODA CHAMADA DE METODO REQUER () APÓS A REFERENCIA AO OBJETO.METODO
console.log(pessoa.endereçoCompleto()); // Chamada do metodo endereçoCompleto do objeto pessoa.


function exibeDadosPessoa(p){ // Declaração de função usando o parametro (p)
    alert(`\n 
    Nome: ${p.nomeCompleto()} \n 
    Endereço : ${p.endereçoCompleto()} \n
    Celular : ${p.celular}
    `);
    // O parametro p é uma ancora ao objeto pessoa
}

    exibeDadosPessoa(pessoa); // Chamada da função utilizando o ARGUMENTO pessoa que é um objeto


