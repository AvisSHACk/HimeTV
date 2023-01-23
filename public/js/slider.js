const nextSlide = (container, i, sliders, prevItem) => {
  const ContainerButton = document.createElement('div');
  ContainerButton.innerHTML = `
    <div class="${container.className}__controllers">
        <button class="${container.className}__next active"></button>
        <button class="${container.className}__prev"></button>
    </div>
  `

  ContainerButton.classList.add(`${container.className}__containerController`)
  ContainerButton.classList.add('l-container')

  container.appendChild(ContainerButton);
    const nextButton = container.querySelector(`.${container.className}__next`), 
          prevButton = container.querySelector(`.${container.className}__prev`);

          

    container.addEventListener('click', (e) => {
      console.log(e.target)
        if(e.target === nextButton) {
            if(i === sliders.length - 1) {
              i = 0;
              prevItem = sliders[sliders.length - 1]
            } else {
              i++;
              prevItem = sliders[i - 1];
            }

            sliders[i].style.display = 'block';
            prevItem.style.display = 'none';
        } else if (e.target === prevButton){
            if(i === 0) {
                i = sliders.length - 1;
                prevItem = sliders[0]
              } else {
                i--;
                prevItem = sliders[i + 1];
              }
          
              sliders[i].style.display = 'block';
              prevItem.style.display = 'none';
        }
    });
  
    setInterval(() => {
      // container.querySelector(`.${container.className}__next`).click()
    }, 4000)
  }
  
  const slider = (container) => {
    let i = 0;
    const sliders = container.firstElementChild.children;
    const prevItem = sliders[sliders.length - 1]
    // if(sliders.className.contains())
    sliders[0].style.display = 'block';
    prevItem.style.display = 'none';
    nextSlide(container, i, sliders, prevItem);
  }

  export default slider;