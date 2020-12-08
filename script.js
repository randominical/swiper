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
    //Переключение при клике на слайд (когда отображается несколько слайдов одновременно)
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
    },
    /*
    //Управление колесом мыши
    mousewheel: {
        //Чувствительность колеса мыши
        sensitivity: 1,
        //Класс объекта, на котором будет срабатывать прокрутка мышью
        //eventsTarget: ".image-slider"
    },
    */
   //автовысота
   autoHeight: false,
   //количество слайдов для показа (целые числа или доли, либо 'auto')
   slidesPerView: 2,
   //отключение функционала слайдера, если число слайдов меньше, чем требует прокрутки
   watchOverflow: true,
   //отступ между слайдами
   spaceBetween: 30,
   //количество пролистываемых слайдов
   slidesPerGroup: 1,
   //активный слайд по центру
   centeredSlides: false,
   //стартовый слайд (первый: 0)
   initialSlide: 0,
   //мультирядность (необходимо отключить автовысоту)
   //slidesPerColumn: 2,
   //бесконечный слайдер (отключить сролл и мультирядность)
   loop: false,
   //количество дублирующих слайдов (необходимо, если slidesPerView: 'auto',)
   //loopedSlides: 3,
   //свободный режим (перетаскивание и свайп слайдов без фиксированных позиций)
   freeMode: true,
   //автопрокрутка
   autoplay: {
       //пауза между прокруткой
       delay: 1000,
       //закончить на последнем слайде
       stopOnLastSlide: true,
       //отключить после ручного переключения
       disableOnInteraction: false,
   }
});