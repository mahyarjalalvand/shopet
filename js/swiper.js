import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-custom",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    modules: [Autoplay, Pagination],
});