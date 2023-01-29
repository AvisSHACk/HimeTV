const carrousel = (container) => {
    container.addEventListener('click', e => {
        let element = container.firstElementChild.firstElementChild;
        let elementStyle = window.getComputedStyle(element);
        let elementColor = elementStyle.getPropertyValue('margin-left');
        let widthTagContainer = elementStyle.getPropertyValue('width');

        let layoutContainer = container.firstElementChild;
        let layoutContainerStyle = window.getComputedStyle(layoutContainer);
        let layoutContainerWidth = layoutContainerStyle.getPropertyValue('width');

        // console.log(parseInt(widthTagContainer));
        // console.log(parseInt(layoutContainerWidth));




        if(e.target.className === 'prev') {
            if(parseInt(elementColor) > -1200) {
                element.style.marginLeft = `${parseInt(elementColor) - 100}px`;
            }

        } else if(e.target.className === 'next'){
            if(parseInt(elementColor) < 0) {
                container.firstElementChild.firstElementChild.style.marginLeft = `${parseInt(elementColor) + 100}px`;
            }
        }
    })
}
 
export default carrousel;