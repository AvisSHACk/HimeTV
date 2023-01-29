// import menu from "./menu.js";
// import lightbox from './gallery.js';
import slider from './slider.js';
import heightBox from './boxscroll.js';
import scrollNavMobile from './scrollNavMobile.js';
import carrousel from './carrousel.js';

//slider
console.log(window.location)
if(window.location.pathname === '/') {
    slider(document.querySelector('.Slideshow'))
}



if (!window.matchMedia("(min-width: 772px)").matches) {
    scrollNavMobile(document.querySelector('.Nav'));
}

// heightBox(document.querySelector('.BoxScroll__title'), document.querySelector('.BoxScroll__container'));
if(document.querySelector('.ContainersBox')) {
    heightBox(document.querySelector('.ContainersBox'));
}
// heightBox(document.querySelector('#BoxScroll2'));


if(document.querySelector('.Calendar') && !window.matchMedia("(min-width: 480px)").matches) {
    heightBox(document.querySelector('.Calendar'));
}

carrousel(document.querySelector('.Tags'));


