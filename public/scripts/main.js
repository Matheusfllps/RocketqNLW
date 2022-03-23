// import { handle } from 'express/lib/router';
import Modal from './modal.js';

const modal = Modal();


const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//pegar quando o marcar como lida for clicado
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click', handleClick)
});

/** quando o botão delete for clicado ele abre a modal */
const buttonDelete = document.querySelectorAll('.actions a.delete')

buttonDelete.forEach(button => {

    button.addEventListener('click', (event) => handleClick(event , false))

})
          function  handleClick( event, check = true ) {
              event.preventDefault()

            const text = check ? "Marca com lida":"excluir" 
            const slug = check ? "check" : "delete"

            const roomId = document.querySelector('#room-id').dataset.id
            const questionId = event.target.dataset.id

            const form = document.querySelector('.modal form')
            form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

              modalTitle.innerHTML = ` ${text} essa pergunta`
              modalDescription.innerHTML = `tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
              modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
              check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
              //abrir modal
            modal.open()
        }