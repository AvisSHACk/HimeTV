const slideDown = (elem, isActive) =>  {
    let altura = isActive ? `${528.78 - document.querySelector('.BoxScroll__header').scrollHeight}px` : 0;
    elem.style.height = altura;
};

const heightBox = (container) => {
    let isActive = false;
    container.addEventListener('click', (e) => {
        let containerCards = e.target.parentElement.nextElementSibling; // Dmos click en el header y obtenemos el hermano que es el contenedor de los cards
        if(e.target.tagName === 'H3') {
            isActive = !isActive;
            slideDown(containerCards, isActive);
        }
        
    })
}

export default heightBox;