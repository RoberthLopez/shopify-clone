import Swiper from 'swiper';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

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
