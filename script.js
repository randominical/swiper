//присвоение переменной для синхронизации двух слайдеров
let myImageSlider = new Swiper('.image-slider',{
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
   /* //пагинация
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
       /*//Фракция
       type: 'fraction',
       //кастомный вывод фракции
       renderFraction: function (currentClass, totalClass) {
           return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
       },*/
      /*
      type: 'progressbar',
      *//*
    },*/
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
    slideToClickedSlide: false,
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
    slidesPerView: 3,
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
    freeMode: false,
    /*//автопрокрутка
    autoplay: {
        //пауза между прокруткой
        delay: 1000,
        //закончить на последнем слайде
        stopOnLastSlide: true,
        //отключить после ручного переключения
        disableOnInteraction: false
    },*/
    //скорость прокрутки
    speed: 500,
    //вертикальный слайдер (в сочетании с freeMode: true, и возможностью прокрутки колесом мыши получаем блок с кастомным скроллом)
    //direction: 'vertical',
    //эффекты переключения слайда
    //по умолчанию: листание
    //effect: 'slide',
    //эффекты переключения слайда
    /*//смена прозрачности
    effect: 'fade',
    //дополнение к fade
    fadeEffect: {
        //параллельная смена прозрачности
        crossFade: true
    },*/
    /*//эффекты переключения слайда
    //переворот
    effect: 'flip',
    //дополнение к flip
    flipEffect: {
        //тень
        slideShadows: true,
        //показ только активного слайда
        limitRotation: true
    },*/
    /*//эффекты переключения слайда
    //куб
    effect: 'cube',
    //дополнение к cube
    cubeEffect: {
        //тень
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },*/
    /*//эффекты переключения слайда
    //поток
    effect: 'coverflow',
    //дополнение к coverflow
    coverflowEffect: {
        //угол
        rotate: 20,
        //наложение
        stretch: 50,
        //тень
        slideShadows: true,
    },*/
    //брейкпойнты (адаптив, действует не на все настройки, например нельзя сменить слайд на вертикальный)
    //ширина экрана больше, чем
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
    /*//брейкпойнты по соотношению сторон (высота/ширина)
    breakpoints: {
        '@0.75': {
            slidesPerView: 1,
        },
        '@1.00': {
            slidesPerView: 2,
        },
        '@1.50': {
            slidesPerView: 3,
        },
    },*/
    //ленивая загрузка
    //отключить предзагрузку картинок
    preloadImages: false,
    //подгрузка картинок
    lazy: {
        //подгружать на старте переключения слайда
        loadOnTransitionStart: true,
        //подгрузить предыдущую и следующую картинку
        loadPrevNext: true,
    },
    //слежка за видимыми слайдами (полезно, если slidesPerView: 'auto', или > 1)
    watchSlidesProgress: true,
    //добавление класса видимым слайдам
    watchSlidesVisibility: true,
    //zoom картинки (чтобы открыть в отдельном окне, нужны доп.плагины)
    zoom: {
        //максимальное увеличение
        maxRatio: 5,
        //минимальное увеличение
        minRatio: 1,
    },
    //если слайдер изначально находится в скрытом элементе (например табы)
    //обновить свайпер при изменении элементов слайдера
    observer: true,
    //если слайдер изначально находится в скрытом элементе (например табы)
    //обновить свайпер при изменении родительских элементов слайдера
    observeParents: true,
    //если слайдер изначально находится в скрытом элементе (например табы)
    //обновить свайпер при изменении дочерних элементов слайдера
    observeSlideChildren: true,
});

//слайдер в слайдере
new Swiper('.image-in-slider', {
    //курсор перетаскивания
    grabCursor: true,
    //навигация: пагинация, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //буллеты
        clickable: true,
    },
    //корректная работа навигации дочернего слайда без влияния на родительский
    nested: true,
});
//текстовый слайдер
let myTextSlider = new Swiper('.text-slider', {
    //количество слайдов для показа
    slidesPerView: 3,
    //отступ между слайдами
    spaceBetween: 30,
})
//передача управления слайдеров друг другу
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;

//Параллакс слайдер
new Swiper('.parallax-slider', {
    //включаем параллакс
    parallax: true,
    //скорость переключения
    speed: 2000,
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});