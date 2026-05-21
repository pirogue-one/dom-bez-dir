'use strict';

//burger menu

const closeBtn = document.querySelector('#close');
const modalMenu = document.querySelector('.modal_menu');
const mobMenu = document.querySelector('#menu');

mobMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalMenu.style.display = 'none';
})


// сертификаты


const galleryImages = document.querySelectorAll('.patent-img');
const popup = document.querySelector('.popup-image');
const popupImage = popup.querySelector('img');
const closeBtnPatent = document.querySelector('#close-patent');
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

let currentIndex = 0;

galleryImages.forEach((item, index) => {
  item.addEventListener('click', () => {
    let source = item.getAttribute('src');
    popupImage.src = source;
    popup.classList.toggle('popup-hidden');
    currentIndex = index;
  });
})

closeBtnPatent.addEventListener('click', () => {
  popup.classList.toggle('popup-hidden');
})

arrowPrev.addEventListener('click', () => {
  prevSlide();
})

arrowNext.addEventListener('click', () => {
  nextSlide();
})

let touchstartX = 0;
let touchendX = 0;

popup.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

popup.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false);


function handleGesture() {
  if (touchendX < touchstartX) {
      nextSlide();
  }

  if (touchendX > touchstartX) {
    prevSlide();
  }
}

function nextSlide() {
  if (currentIndex == galleryImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  popupImage.src = galleryImages[currentIndex].getAttribute('src');
}

function prevSlide() {
  if (currentIndex == 0) {
    currentIndex = galleryImages.length - 1;
  } else {
    currentIndex--;
  }
  popupImage.src = galleryImages[currentIndex].getAttribute('src');
}


// pop-up

const closeBtnPopUp = document.querySelector('#close-pop-up-phone');
const modalMenuPopUp = document.querySelector('.modal_menu-pop-up-phone');
const popUp = document.querySelector('#link-popup');

popUp.addEventListener('click', () => {
    modalMenuPopUp.style.display = 'flex';
});

closeBtnPopUp.addEventListener('click', () => {
    modalMenuPopUp.style.display = 'none';
})


const closeBtnPopUpHero = document.querySelector('#close-pop-up');
const modalMenuPopUpHero = document.querySelector('.modal_menu-pop-up');
const popUpHero = document.querySelector('#link-popup-hero');

popUpHero.addEventListener('click', () => {
    modalMenuPopUpHero.style.display = 'flex';
});

closeBtnPopUpHero.addEventListener('click', () => {
    modalMenuPopUpHero.style.display = 'none';
})


//information section scroll

const img1 = document.querySelector('.information-img-1');
const img2 = document.querySelector('.information-img-2');
const trigger = document.querySelector('.information_container:nth-child(2)'); // второй контейнер с инструкцией

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      // второй контейнер вошёл в зону — показываем вторую картинку
      img1.style.opacity = '0';
      img2.style.opacity = '1';
    } else if (entry.boundingClientRect.top > 0) {
      // вышел снизу (пользователь прокрутил вверх) — возвращаем первую
      img1.style.opacity = '1';
      img2.style.opacity = '0';
    }
    // если top < 0 — вышел вверху (пролистали дальше) — ничего не делаем, img2 остаётся
  },
  { rootMargin: '0px 0px -40% 0px', threshold: 0 }
);
observer.observe(trigger);


// gallery swiper

const galleryEl = document.querySelector('.gallery_container');

if (galleryEl && typeof Swiper !== 'undefined') {
  new Swiper(galleryEl, {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 600,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}