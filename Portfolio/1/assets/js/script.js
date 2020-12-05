var swiper_one = new Swiper(".swiper-container.one", {
  navigation: {
    nextEl: ".swiper-button-next.one",
    prevEl: ".swiper-button-prev.one",
  },
  autoplay: {
    delay: 4000,
  },
  loop: true,
  grabCursor: true,
});
var swiper_two = new Swiper(".swiper-container.two", {
  navigation: {
    nextEl: ".swiper-button-next.two",
    prevEl: ".swiper-button-prev.two",
  },
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
});

$(document).ready(function () {
  setTimeout(() => {
    $(".loader").css("display", "none");
  }, 1500);
});
