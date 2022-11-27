// Esse script cria um alerta exibido a ser carregado a pagina***
// alert('Olá seja bem vindo');

//  Esse script cria um elemento de texto a ser exibido na pagina***
// document.write ('Essa é nossa primeira video aula.');

// Esse script altera o texto pré definido utilizando o ID do elemento selecionado***
document.querySelector('#t2').textContent = 'Apresentando elementos JavaScript'

document.querySelector('#t1').textContent = ' Introdução JavaScript ';

// Essa função recolhe os dados do formulario e logo apos apresenta e esconde o form em seguida
function bemVindo () {
    const nome = document.querySelector('#nomeUsuario').value;
    // Esse script emite o alerta concatenado com o valor usado na const "SEMPRE USAR CRASE"
    alert(`Olá ${nome}! Seja bem-vindo`);
    // Esse script retira um elemento usando sua ID e display none
    document.getElementById('formulariologuin').style.display = 'none';
}

function mudaCorFundo(){
   const menu = document.querySelector('#coresdefundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}
// let, function, if, else, while, for e etc palavras reservadas
let x; // variavel 
console.log(x); // indefined
x = 3;
console.log(x); //3

let primeiroNome = 'Carlos';
console.log(primeiroNome)
primeiroNome = ' Carlos'; // Sobreescrevemos o valor da variavel para concatenar

let segundoNome = 'Ana';
console.log(segundoNome);

segundoNome = 'João'; // Sobreescrevemos o valor da variavel
console.log(segundoNome);

let juntadao = segundoNome+primeiroNome;
console.log(juntadao)

// Constante é a que não se altera 
const pi = 3.1416;
let raio = 3;
let comprimentoCircunferencia = 2*pi*raio;
console.log(comprimentoCircunferencia);

