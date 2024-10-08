import Swiper from 'swiper';
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const thumbsSlider = document.querySelector('.mySwiper');

if (thumbsSlider) {
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 0,
    modules: [FreeMode, Thumbs],
    freeMode: true,
    loop: true,
  });

  var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 0,
    modules: [Navigation, Thumbs],
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      678: {
        direction: 'vertical',
      },
    },
  });
}
const addSwiper = document.querySelector('.additionalSwiper');
if (addSwiper) {
  var swiper3 = new Swiper('.additionalSwiper', {
    modules: [Navigation],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const dmsSwiper = document.querySelector('.swiper-container');
if (dmsSwiper) {
  var swiper4 = new Swiper('.swiper-container', {
    modules: [FreeMode, Autoplay],
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    speed: 5000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  });
}
