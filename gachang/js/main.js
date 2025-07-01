$(document).ready(function(){

    const service_swiper = new Swiper('.service .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* auto css에서 준대로 들어감*/
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 640px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //loop: true,
    });

})
