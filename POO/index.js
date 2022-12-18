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
//console.log(meuFilme);

class Produto {
    constructor(){ // metodo construtor sem parametros
        this.tipo = 'produto x'; // atributo declarado 
    }
}
const prod = new Produto(); // declaraão de um objeto
//console.log(prod.tipo) // Chamada do objeto

// DECLARAÇÃO DE ATRIBUTOS
class Financimaneto{
    valorFinaciamento; // atributp 
    taxaJuros;// atributo
    numero = 0; // atributo
    // O atributo declarado na class e declarado no metodo construtor sobreescreve o valor 
    constructor(valorFinaciamento, taxaJuros, numero /*Parametros */){ // metodo construtor
        this.valorFinaciamento = valorFinaciamento;
        this.taxaJuros = taxaJuros;
        this.numero = numero;
    }

}

const fin = new Financimaneto(10000, 4, 7/*Argumentos*/);
//console.log(fin);

// INSTANCIANDO UM OBJETO EM JS

class Disciplina{
    codigo;
    nome;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
}
// F2 muda o nome do atributo ou variavel em todo o codigo 

// instaciando um objeto na class disciplina

const disc1 = new Disciplina(123, 'Matematica');
// console.log(disc1)
// console.log(disc1.nome) // exibição apenas do atributo nome deste objeto

// ATRIBUIÇÃO DE OBJETO EM  JS