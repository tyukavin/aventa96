$(document).ready(function() {

    const swiperHero = new Swiper(".swiper-hero", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        autoplay: {
            delay: 3000,
        },

        navigation: {
            nextEl: ".hero-swiper-button-next",
            prevEl: ".hero-swiper-button-prev",
        },
    });

    const swiperHits = new Swiper(".swiper-hits", {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 50,

        autoplay: {
            delay: 3000,
        },

        navigation: {
            nextEl: ".hits-swiper-button-next",
            prevEl: ".hits-swiper-button-prev",
        },
    });

    $(".header-catalog").click(function() {

        $(".menu").toggleClass("show");
        $("html").toggleClass("no-scroll");
    });

    $(".menu-aside__item").hover(function() {

        $(".menu-aside__item").removeClass("active");
        $(this).addClass("active");

        $(".menu-item").removeClass("active");
        $(".menu-item").eq($(this).index()).addClass("active");
    });
});
