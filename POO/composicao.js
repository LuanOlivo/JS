import {CupomDesconto} from './cupomdesconto.js';

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