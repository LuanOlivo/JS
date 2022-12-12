// CONDICIONAIS

let nota1 = 3;
let nota2 = 9;

function media(n1, n2){
    return (n1+n2)/2; 
}

let resultado = media(nota1, nota2);

// console.log(resultado)

// IF - SE... -- ELSE - SENÃO 

/* Modelo de declaração de uma condicional if/se (condição) entao {
 faça isso 
 } */
if(resultado >= 7){
    console.log(`Aprovado com media ${resultado}.`);
}

/* Modelo de declaração de uma condicional else/senão (condição) entao {
 faça isso 
 } */
else {
    // console.log(`Reprovado com media ${resultado}.`);
}

// CASCATEAMENTO DE ELSE IF 

if(resultado >= 7){
    console.log(`Aprovado com media ${resultado}.`);
} 

// Modelo de declaração cascateada com else if
else if(resultado >= 4){
    console.log(`Em recuperação com media ${resultado}.`);
}

else {
    console.log(`Reprovado com media ${resultado}.`);
}

// Se nota1 for exatamente igual ou nota2 for igual a 0 
if(nota1 === 0 || nota2 === 0){ // Pelo menos uma ||
    console.log('Desclassificado, pois pelo menos uma das notas é igual a 0')
}
else {
    console.log('Aprovado')
}

// 

if(nota1 > 7 && nota2 > 7) { // Ambas ser verdadeiras &&
console.log('Razoalvel')
}
else {
console.log('Abaixo da media')
}



// OPERADOR TERNÁRIO CONDICIONAL - 3 OPERANDOS


// modelo de declaração 

let situação = resultado >= 6 ? 'Aprovado': 'Reprovado';
console.log(situação); 

// segundo modelo de declaração com (else if)
  situação = resultado >= 6 ? 'Aprovado':
             resultado >= 4 ? 'Recuperação':
                              'Reprovado';

console.log(situação)

// SWITCH 
// é mais utilizado para encontrar igualdade

let opcao = 2;

// CASE - CASO 
switch (opcao){ // Caso o valor '1':
    case 1:
        console.log('Entrega em até 10 dias')
        break

    case 2:
        console.log('Entrega em até 5 dias')
        break
    // se não colocar a palavra BREAK ele continua executando o proximo case
    case 3: 
        console.log('Entrega em até 3 dias')
        break
    // DEFAULT é usado se nenhum dos valores forem validos
    default: 
        console.log('Entrega inválida')
        break
}


// Exemplo utlizando Strings
let opcao2 = 'Economica';

switch (opcao2){ // Caso o valor '1':
    case 'Economica':
        console.log('Entrega em até 10 dias')
        break

    case 'Normal':
        console.log('Entrega em até 5 dias')
        break
    // se não colocar a palavra BREAK ele continua executando o proximo case
    case 'Expressa': 
        console.log('Entrega em até 3 dias')
        break
    // DEFAULT é usado se nenhum dos valores forem validos
    default: 
        console.log('Entrega inválida')
        break
}