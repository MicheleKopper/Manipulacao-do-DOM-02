// Seleciona os elementos pelo class
const botaoEditar = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')


// Função que será chamada ao clicar no botão Editar
function editarCard() {
    alert('Clicou em Editar!')
}

// forEach para percorer todos os botões editar, depois adicionar onclick e chamar a função editarCard
botaoEditar.forEach(botao => {
    botao.setAttribute('onclick', 'editarCard()')
})


// Função que será chamada ao clicar no botão Apagar
function apagarCard() {
    let certeza = confirm('Você tem certeza que deseja excluir o card?')

    if (certeza) {
        alert('Confirmado!')
    } else {
        alert('Cancelou!')
    }
}

