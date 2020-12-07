new Swiper('.image-slider',{
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //пагинация
    pagination: {
        el: '.swiper-pagination',
        //буллеты (точки)
        clickable: true,
        //динамические буллеты
        dynamicBullets: true,
        //кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});