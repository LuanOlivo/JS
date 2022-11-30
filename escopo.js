// ESCOPO DE VARIÁVEIS E CONSTANTES

// VARIAVEL GLOBAL - DEFINIDA NO ESCOPO DO ARQUIVO
// VARIAVEL LOCAL - DEFINIDA NO ESCOPO DA FUNÇÃOV 

// Escopo do Arquivo
let x =10; // VARIAVEL GLOBAL
console.log(x) 

function soma(a, b) { // Declaraçao de uma função
    // Escopo do da função
    let z = a + b; // VARIAVEL LOCAL
    return z; // Retorno
}

console.log(soma(4, 23)); // Chamada da função
console.log(z); // Exibi erro pois a variavel Z só foi declarada dentro do escopo da função

function calculaKmMilha(){
    let km = document.querySelector('#valorKm').value; // variavel pelo seletor ID o valor atribuido a ele
    document.querySelector('#resultado').textContent = km * 1.609; // Substitui o texto pelo valor da variavel
}