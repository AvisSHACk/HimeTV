const scrollNavMobile = (container) => {
    let scrollPos = 0;
    let nav = container;
    window.addEventListener('scroll', (e) => {
        if ((document.body.getBoundingClientRect()).top > scrollPos){
            scrollPos = (document.body.getBoundingClientRect()).top;
            nav.classList.remove("ocultar");
        }
        else {
            // ABAJO
            scrollPos = (document.body.getBoundingClientRect()).top;
            nav.classList.add("ocultar");
        }
    })
}

export default scrollNavMobile;