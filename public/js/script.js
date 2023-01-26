// import menu from "./menu.js";
// import lightbox from './gallery.js';
import slider from './slider.js';
import heightBox from './boxscroll.js';

//slider
// console.log(window.location)
if(window.location.pathname === '/') {
    slider(document.querySelector('.Slideshow'))
}

// heightBox(document.querySelector('.BoxScroll__title'), document.querySelector('.BoxScroll__container'));
heightBox(document.querySelector('.ContainersBox'));
// heightBox(document.querySelector('#BoxScroll2'));

