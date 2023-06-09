$(document).ready(function() {

    $("input[type='tel']").inputmask({"mask": "+7 (999) 999-99-99"});
    $("input[type='email']").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}][.*{1,20}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_{|}~-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    const fancybox = Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "close",
            ],
        },
        dragToClose: false
    });

    $(".js-modal-close").click(function() {

        Fancybox.close();
    });

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
        loop: false,
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

    $(".js-filter-collapse").click(function() {

        $(this).parent().parent().find(".filter-section__content").toggleClass("filter-section__content--open");
    });
});
