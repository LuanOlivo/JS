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


// ATRIBUTO ESTATICO EM JS
class Musica{
    static formato = 'mp3'; // static é um atributo statico que é utilizado apenas na classe e não disponivel ao(s) objeto(s) dessa classe
    titulo;
    duração;
    constructor(titulo,duração){
        this.titulo = titulo;
        this.duração = duração;
    }
}

const musica1 = new Musica('De quem é a culpa', 190)

// undefied pq não é possivel acessar o atributo static
// console.log(musica1.formato) 

class Produtoo{
    static GRANDE = 10;
    static MEDIA = 5;
    static PEQUENO = 1;
    codigo;
    titulo;
    valor;
    tamanho;
    constructor(codigo, titulo, valor, tamanho){
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

const p1 = new Produtoo(345, 'Meu produto', 54,Produtoo.GRANDE);// atribuindo o valor do atributo static como argumento no objeto criado
// console.log(p1)

// DECLARAÇÃO DE METODOS EM UMA CLASS

// metodo é uma função declarada em uma classe

class Protudo1 {
    descricao;
    largura;
    altura;
    profundidade;
    valor;
    // metodo construtor -- funao constructor--
    constructor (descricao, largura, altura, profundidade, valor){
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }

    // metodo --função -- 
    volumeProduto(){
        return this.largura * this.altura * this.profundidade;
    }

    parcelaProduto(parcelas){
        return this.valor / parcelas;
    }

    
}

const prod1 = new Protudo1('Meu produto',10,3,2, 80);

 // uso do metodo pelo objeto
//console.log(prod1.volumeProduto());

// uso do metodo com fornecimento de argumento
// console.log(prod1.parcelaProduto(2))

// METODO ESTATICO EM JS  

class Musica2 {
    // atributos
    #titulo;
    #duracao;

    // metodo constructor
    constructor(titulo, duracao){
        this.#titulo = titulo;
        this.#duracao = duracao;
    }

    // metodo static
    static converteSegundoEmMinuto(duracao){
        const min = Math.floor(duracao / 60);
        let segundo = duracao % 60;
        if (segundo < 10 && segundo > 0){
            segundo = `0${duracao % 60}`;
        } else if (segundo < 10){
            segundo = '00;'
        }
        return `${min}:${segundo}`;
    }

    getDuracao(){
        return this.#duracao;
    }
}

const Musica3 = new Musica2('Minha musica', 190);
// console.log(Musica3.converteSegundoEmMinuto(Musica3.getDuracao())) // não possivel utilizar pq o metodo é static 

console.log(Musica2.converteSegundoEmMinuto(Musica3.getDuracao())); // maneira de acessar um metodo static