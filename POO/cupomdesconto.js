// Uso do import e export
export class CupomDesconto {
    #desconto1 = 10;
    #desconto2 = 20;
    constructor(){}// metodo constructor vazio
    getDesconto(gastos){
        if (gastos >= 1000 && gastos <= 3000){
            console.log(`Você tem direito a ${this.#desconto1}% de desconto`)
        } else if (gastos > 3000){
            console.log(`Você tem direito a ${this.#desconto2}% de desconto`)
        } else {
            console.log(`Infelizmente, você não tem descontos no momento`)
        }
    }
}