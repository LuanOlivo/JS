//
class CupomDesconto {
    #desconto1 = 10;
    #desconto2 = 20;
    constructor(){}// metodo constructor vazio
    getDesconto(){
        if (gastos >= 1000 && gastos <= 3000){
            console.log(`Você tem direito a ${this.#desconto1}% de desconto`)
        } else if (gastos > 3000){
            console.log(`Você tem direito a ${this.#desconto2}% de desconto`)
        } else {
            console.log(`Infelizmente, você não tem descontos no momento`)
        }
    }
}

class Cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome){
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }

    getBeneficios(){
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }

    setGastos(valor){
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new Cliente('Luan');
clienteNovo.setGastos(2000)
clienteNovo.getBeneficios();