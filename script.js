'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

for(let i=0; i<btnOpenModal.length; i++){
    (btnOpenModal[i].addEventListener('click',()=>{
        console.log("clicked!")
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }))

    const closeModal = () =>{
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }

    btnCloseModal.addEventListener('click', closeModal)
    overlay.addEventListener('click', closeModal)
}

document.addEventListener('keydown', (e)=>{
    
        console.log("A key was pressed")
        if(e.key=='Escape'){
            modal.classList.add('hidden')
        overlay.classList.add('hidden')
        }
})