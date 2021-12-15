
const criarTarefa = (event) => {
    event.preventDefault();

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value;

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class='content'>${value}</p>`

    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = ''

    document.querySelector('[')


}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)


