
var swiper = new Swiper(".swiper-3d-7", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 15,
        stretch: 90,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".next-3d",
      prevEl: ".prev-3d",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".swiper-3d-2card", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 440,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
      prevEl: ".prev-3d",
    },
});
 
var swiper = new Swiper(".swiper-3d-3card", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 500,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
      prevEl: ".prev-3d",
    },
});

var swiper = new Swiper(".swiper-3d-3cardfull", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".next-3d",
      prevEl: ".prev-3d",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".swiper-rotate-3", {
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 320,
        modifier: 0,
        slideShadows: false,
    },
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 320,
        modifier: 0,
        slideShadows: false,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});















var swiper =  new Swiper(".autoslider", {
    autoplay: {
        delay: 0
    },
    spaceBetween: 28,
    slidesPerView: '7',
    loop: true,
    speed: 9000,
    },
    $(".autoslider").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    }

));

var swiper =  new Swiper(".carousel", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".carousel3", {
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".seller-slider2", {
    slidesPerView: 2,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1070: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

