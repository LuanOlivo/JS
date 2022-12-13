const lista = document.querySelector('#lista'); // metodo usado para selecionar p elemento() e armazenar em uma const

const elementoLi = document.createElement('li'); // metodo usado para criar um elemento e armazenar em uma const

elementoLi.textContent = 'Um novo item na lista' // metodo usado para adicionar um conteudo ao elemento criado 

lista.appendChild(elementoLi) // metodo usado para adicionar o elementoLi como filho do elemento lista

 //lista.remove // para Remover o elemento inteiro

 /*
 const filhosdaLista = lista.querySelectorAll('li');

 for (filho of filhosdaLista){
    lista.removeChild(filho);
 } */

 lista.className = 'novoponteiro' // para atribuir uma classe a um elemento via JS

 lista.style.color = 'red' // Para alterar o valor de uma estilização via JS
 
 const botao = document.querySelector('button')

 botao.addEventListener( // meotodo usado para declarar um evento apos o 'click'
    'click', function(){
        lista.remove();
    }
 );