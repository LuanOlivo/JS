const listaTarefas = document.querySelector ('#listaTarefas')
const caixaTexto = document.querySelector ('#caixadeTexto')
const botaoAdicionar = document.querySelector ('#botaoAdicionar')
const listaSuspensa = document.querySelector ('#listaSuspensa')

// LISTENER SEMPRE QUE O BOTÃO ADICIONAR FOR CLICADO
// ADICIONA UMA TAREFA
botaoAdicionar.addEventListener('click', function(){
    const textodaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textodaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus();
});

function adicionaTarefa(textodaTarefa){
    const elementoLi = document.createElement(`li`);
    const elementoSpan = document.createElement('span');

    elementoSpan.setAttribute('id', 'tarefa');
    elementoSpan.textContent = textodaTarefa;

    elementoLi.appendChild(elementoSpan);
    elementoLi.appendChild(adicionaBotaoRemover());
    elementoLi.className = 'naoRealizada'

// LISTERNER - SEMPRE QUE UM ITEM DA LISTA FOR CLICADO AUTERA MARCADOR, COR DA FONTE E TEXTO
    elementoSpan.addEventListener(
        'click', function(){
            if(this.id === 'tarefa'){
                if(this.parentNode.className === 'naoRealizada'){
                    this.parentNode.className = 'realizada'
                } else {
                    this.parentNode.className = 'naoRealizada'
                }
            }
        }
    )

    return elementoLi;
}

function adicionaBotaoRemover (){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✗';
    botaoRemover.className = 'remover';
// LISTENER - SEMPRE QUE O BOTÃO FOR CLICADO PELO MOUSE  REMOVE O FILHO
    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode)
        exibeOcultaListaSuspensa();
    });

    return botaoRemover;
}

function exibeOcultaListaSuspensa(){
    const elementoSpan = document.querySelector('#tarefa');
    if(elementoSpan === null){
        listaSuspensa.setAttribute('hidden', 'hidden')
    } else {
        listaSuspensa.removeAttribute('hidden');
    }
}

listaSuspensa.addEventListener('change', function(){
    if (listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for (tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event ('click'));
        }
    } else if(listaSuspensa.selectedIndex === 3){
        const vetorTarefas = listaTarefas.querySelectorAll('.remover'); 
        for (tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event ('click'));
    }
    }

});



