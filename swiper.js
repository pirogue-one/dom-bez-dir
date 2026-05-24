'use strict';

// swiper 

const swiperReviews = new Swiper('.reviews-swiper', {
    loop: false,
    speed: 600,
    spaceBetween: 24,
  
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      clickable: true,
    },
  
    keyboard: {
      enabled: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
  
    breakpoints: {
      790: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
    },
  });