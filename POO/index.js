// Usado para avisar ao navegador que toda variavel precisa ser declarada -- uso global -- 
'use strict'

// DECLARAÇÃO DE UMA CLASSE 
class Filme {
    // declaração do metodo construtor (parametros)
    constructor(titulo, ano){
        this.titulo = titulo; // instanciando o parametro 1 no argumento 1
        this.ano = ano; // instanciando o parametro 2 no argumento 2
    }
}

let meuFilme = new Filme('Aprendendo JS', 2022); // (conteudo declarado  como argumento )
console.log(meuFilme);

class Produto {
    constructor(){ // metodo construtor sem parametros
        this.tipo = 'produto x'; // atributo declarado 
    }
}

const prod = new Produto(); // declaraão de um objeto
console.log(prod.tipo) // Chamada do objeto