$(document).ready(function(){

//POPUP
$('.click,.fade').click(function() {
    $('#pop').fadeToggle();
});

//DAYNIGHT SWITCH
$('.daynight').click(function() {
    $('body').toggleClass('day');
    sessionStorage.setItem('daymode', $('body').hasClass('day'))
    $('.daynight i').toggleClass('fa-moon');
    if (($('#logo').attr('src') == 'assets/images/logo.png')) {
        $('#logo').attr('src','assets/images/logo-day.png');
        $('#map').attr('src','assets/images/world-map-day.png');
        $('#favicon').attr('href','assets/images/favicon-day.png');
    } else {
        $('#logo').attr('src','assets/images/logo.png');
        $('#map').attr('src','assets/images/world-map.png');
        $('#favicon').attr('href','assets/images/favicon-night.png');
    }
});

if (sessionStorage.getItem('daymode') === 'true') {
    $('body').toggleClass('day');
    $('.daynight i').toggleClass('fa-moon');
    if (($('#logo').attr('src') == 'assets/images/logo.png')) {
        $('#logo').attr('src','assets/images/logo-day.png');
        $('#map').attr('src','assets/images/world-map-day.png');
        $('#favicon').attr('href','assets/images/favicon-day.png');
    } else {
        $('#logo').attr('src','assets/images/logo.png');
        $('#map').attr('src','assets/images/world-map.png');
        $('#favicon').attr('href','assets/images/favicon-night.png');
    }
}

//SWIPER TIMELINE
var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });

//TIPPY TOOLTIPS

tippy('[data-tippy-content]', {
    placement: 'right-start',
    animation: 'scale',
    duration: [300,0],
    followCursor: true,
    arrow: false,
    theme: 'menu-tippy',
});

tippy('#btt-tippy', {
    content: 'Haut de page',
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    followCursor: true,
    arrow: false,
    theme: 'menu-tippy-2',
});

tippy('#seoul', {
    content: "Séoul",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#madrid', {
    content: "Madrid",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#barcelona', {
    content: "Barcelone",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#italy', {
    content: "Rome, Florence, Milan",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#istanbul', {
    content: "Istanbul",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#uk', {
    content: "Londres, Exeter",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#berlin', {
    content: "Berlin",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#porto', {
    content: "Porto",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#marrakech', {
    content: "Marrakech",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

tippy('#prague', {
    content: "Prague, Terezín",
    placement: 'left',
    animation: 'scale',
    duration: [300,0],
    arrow: false,
    theme: 'menu-tippy-3',
});

//RAPPORT DE LANCEMENT

$('#projet').click(function() {
    $('.projet').css("display", "block");
    $('.analyse-du-besoin').css("display", "none");
    $('.veille').css("display", "none");
    $('.planning').css("display", "none");
    $('.analyse').css("display", "none");
    $('#projet').addClass('active-toc');
    $('#analyse-du-besoin').removeClass('active-toc');
    $('#veille').removeClass('active-toc');
    $('#planning').removeClass('active-toc');
    $('#analyse').removeClass('active-toc');
});

$('#analyse-du-besoin').click(function() {
    $('.analyse-du-besoin').css("display", "block");
    $('.projet').css("display", "none");
    $('.veille').css("display", "none");
    $('.planning').css("display", "none");
    $('.analyse').css("display", "none");
    $('#analyse-du-besoin').addClass('active-toc');
    $('#projet').removeClass('active-toc');
    $('#veille').removeClass('active-toc');
    $('#planning').removeClass('active-toc');
    $('#analyse').removeClass('active-toc');
});

$('#veille').click(function() {
    $('.veille').css("display", "block");
    $('.projet').css("display", "none");
    $('.analyse-du-besoin').css("display", "none");
    $('.planning').css("display", "none");
    $('.analyse').css("display", "none");
    $('#veille').addClass('active-toc');
    $('#projet').removeClass('active-toc');
    $('#analyse-du-besoin').removeClass('active-toc');
    $('#planning').removeClass('active-toc');
    $('#analyse').removeClass('active-toc');
});

$('#planning').click(function() {
    $('.planning').css("display", "block");
    $('.projet').css("display", "none");
    $('.analyse-du-besoin').css("display", "none");
    $('.veille').css("display", "none");
    $('.analyse').css("display", "none");
    $('#planning').addClass('active-toc');
    $('#projet').removeClass('active-toc');
    $('#analyse-du-besoin').removeClass('active-toc');
    $('#veille').removeClass('active-toc');
    $('#analyse').removeClass('active-toc');
});

$('#analyse').click(function() {
    $('.analyse').css("display", "block");
    $('.projet').css("display", "none");
    $('.analyse-du-besoin').css("display", "none");
    $('.veille').css("display", "none");
    $('.planning').css("display", "none");
    $('#analyse').addClass('active-toc');
    $('#projet').removeClass('active-toc');
    $('#analyse-du-besoin').removeClass('active-toc');
    $('#veille').removeClass('active-toc');
    $('#planning').removeClass('active-toc');
});

})