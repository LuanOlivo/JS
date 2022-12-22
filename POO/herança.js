// SUPERCLASS
class Produto {
    tipo;
    constructor(tipo){
        this.tipo = tipo;
    }
    getDados(){
        return `Tipo: ${this.tipo}`
    }
}

// SUBCLASS

class Livro extends Produto { // é obrigatorio o uso da palavra extends p/ que a class livro se torne uma subclass da superclass Produto
    titulo;
    numPag;
    constructor(titulo,numPag){
        super('Livro'); // é obrigatorio a palavra super dentro do metodo constructor da subclass
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(this.getDados)
    }
}

// obj da class Produto
const prod = new Produto('Produto generico')

const liv = new Livro('Meu livro', 122);

console.log(liv)