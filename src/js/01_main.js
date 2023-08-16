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

    Fancybox.bind("[data-fancybox]", {
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
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 20,

        freeMode: true,

        // autoplay: {
        //     delay: 3000,
        // },

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

    $(".js-thumb-pic").click(function() {

        $(".js-thumb-pic").removeClass("active");
        $(this).addClass("active");
        $(".js-card-pic img").removeClass("active");
        $(".js-card-pic img").eq($(this).index()).addClass("active");
    });

    $(".js-card-btn-tab").click(function() {

        $(".js-card-btn-tab").removeClass("active");
        $(this).addClass("active");
        $(".js-card-tab").removeClass("active");
        $(".js-card-tab").eq($(this).index()).addClass("active");
    });

    $(".js-user-cart-tab").click(function() {

        $(".js-user-cart-tab").removeClass("active");
        $(this).addClass("active");
        $(".js-user-cart-content").removeClass("active");
        $(".js-user-cart-content").eq($(this).index()).addClass("active");
    });

    $(".js-delivery-cart-tab").click(function() {

        $(".js-delivery-cart-tab").removeClass("active");
        $(this).addClass("active");
        $(".js-delivery-cart-content").removeClass("active");
        $(".js-delivery-cart-content").eq($(this).index()).addClass("active");
    });

    $(".js-cart-pay").click(function() {

        $(".js-cart-pay").removeClass("active");
        $(this).addClass("active");
    });

    $(".overview-toggle-btn").click(function() {

        $(this).parent().toggleClass("active");
    });

    $(".js-faq-btn").click(function() {

        $(this).text($(this).text() === "Свернуть" ? "Ответ магазина" : "Свернуть");
        $(this).parent().find(".faq-response").toggleClass("active");
    });
});
