const slider = document.querySelector('.projects__swiper');
const buttonNext = document.querySelector('.projects__button--next');
const buttonPrev = document.querySelector('.projects__button--prev');

const initSlider = () => {
  if (slider) {
    // eslint-disable-next-line
    new Swiper(slider, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 3,
      spaceBetween: 15,
    });
  }
};

export {initSlider};
