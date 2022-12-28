class Produto {
    #tipo;, // atributo privado
    #valor; // atributo privado

    // método construtor
    constructor(tipo, valor){ 
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valor = valor;
    }

    // método privado
    #validaValor(){ 
        if (typeof(valor) !== 'number'){
            console.log('Valor inválido')
        }
    }

    // método publico
    getDados(){ 
        return `
        Tipo: ${this.#tipo}
        Valor ${this.#valor}
        `
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