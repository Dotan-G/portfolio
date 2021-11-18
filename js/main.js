$(document).ready(() => {
    let elHeader = $("header");
    $(document).scroll(() => {
        elHeader.toggleClass("sticky", window.scrollY > 0);
    });
    $(".menu-button").click(menuToggle);
    $(".menu li a").click(() => {
        let classList = $(".menu-button").attr("class").split(/\s+/);
        $.each(classList, (idx, value) => {
            if (value === "open") return menuToggle();
        });
    });
    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        // autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});

function menuToggle() {
    console.log("menuToggle");
    $(".menu-button").toggleClass("open");
    $(".menu-button").toggleClass("close");
    $(".menu").toggleClass("open-menu");
    $("body").toggleClass("hide-scroll");
}
