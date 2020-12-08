new Swiper('.image-slider',{
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //пагинация
    pagination: {
        el: '.swiper-pagination',
        /*
        //буллеты (точки)
        clickable: true,
        //динамические буллеты
        dynamicBullets: true,
        //кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */
       //Фракция
       type: 'fraction',
       //кастомный вывод фракции
       renderFraction: function (currentClass, totalClass) {
           return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
       },
      /*
      type: 'progressbar',
      */
    },
    //Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        //Возможность перетаскивать скролл
        draggable: true,
    },
    //Включение/отключение перетаскивания мышкой на ПК
    simulateTouch: true,
    //Чувствительность свайпа
    touchRatio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: true,
    //Навигация по хешу
    hashNavigation: {
        //Отслеживание состояния
        watchState: true,
    },
    //Управление клавиатурой
    keyboard: {
        //Включить/выключить
        enabled: true,
        //Включить/выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //Включить/выключить управление клавишами pageUP, pageDown
        pageUpDown: true,
    }
});