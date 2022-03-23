export default function Modal(){


    const modalWrapper = document.querySelector('.modal-wrapper')
    // botão de cancelar
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener('click', close)
    // // botão de excluir
    // const excluirButton = document.querySelector('button.excluir')
    // excluirButton.addEventListener('click',)

    function open(){
        //funcionalidade de atribuir a classe active ao modal de
        modalWrapper.classList.add('active')
       

    }
    function close(){
        //funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove('active')
    }
    return{
        open,
        close
    }
}