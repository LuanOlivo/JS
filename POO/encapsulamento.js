class Produto {
    #tipo; // atributo privado
    #valor; // atributo privado

    // método construtor
    constructor(tipo, valor){ 
        this.#validaValor(valor); // metodo privado sendo chamado no constructor parar fazer a validação da subclass ou objeto instanciado
        this.#tipo = tipo;
        this.#valor = valor;
    }

    // método privado
    #validaValor(valor){ 
        if (typeof(valor) !== 'number'){
            console.log('Valor inválido')
        }
    }

    // método publico
    getDados(){ 
        return `
        Tipo: ${this.#tipo}
        Valor: ${this.#valor}
        `
    }
}
// SUBCLASS DA SUPERCLASS Produto
    class Livro extends Produto {
        #titulo;
        #numPag;

        constructor(titulo, numPag, valor){
            super('Livro', valor)
            this.#titulo = titulo;
            this.#numPag = numPag;
        }

    }

    const prod = new Produto('Novo produto', 54)
    console.log(prod.getDados()) // metodo para utilizar os atributos privados