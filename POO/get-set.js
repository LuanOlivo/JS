// 

class Laboratorio{
    #nome;
    #capacidade;
    constructor(nome, capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }

    getNome(){
        return this.#nome
    }

    getCapacidade(){
        return this.#capacidade
    }

    setNome(nome){
        this.#nome = nome;
    }

    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Computação', 45)
lab.getNome('Informatica'); // inserção de novo nome ao atributo privado
lab.getCapacidade(77) // inserção de novo valor ao atributo privado
console.log(lab)