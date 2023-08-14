export default function SwiperModule() {
  // slider banner

  // slider product
  const cardSwiper = new Swiper(".cardSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loopAdditionalSlides: 1, //để thêm 2 slide vào cả hai bên của swiper
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      590: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
        spaceBetweenSlides: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
      },

    }
  });
  // slider partner
  var partnerSwiper = new Swiper(".partnerSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    // initialSlide: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
  var filterSwiper = new Swiper(".filterSwiper", {
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,

      },
      350: {
        slidesPerView: 2,
        spaceBetween: 10,

      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,

      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,

      },
    }
  });
}