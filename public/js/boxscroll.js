// const slideDown = (header, elem, isActive) =>  {
//     let altura = isActive ? `${528.78 - header.scrollHeight}px` : 0;
//     elem.style.height = altura;
// };

// const heightBox = (container) => {
//     let isActive = false;
//     container.addEventListener('click', (e) => {
//         let containerCards = e.target.parentElement.nextElementSibling; // Dmos click en el header y obtenemos el hermano que es el contenedor de los cards
//         if(e.target.tagName === 'H3') {
//             isActive = !isActive;
//             slideDown(e.target.parentElement, containerCards, isActive);
//         }
        
//     })
// }


// const slideDown = (header, elem, isActive) =>  {
//     let altura = isActive ? `${528.78 - header.scrollHeight}px` : 0;
//     elem.style.height = altura;
// };

const heightBox = (container) => {
    container.addEventListener('click', (e) => {
        let containerCards = e.target.parentElement.nextElementSibling; // Dmos click en el header y obtenemos el hermano que es el contenedor de los cards
        if(e.target.tagName === 'H3') {
            containerCards.classList.toggle("collaped");
        }
    })
}

export default heightBox;