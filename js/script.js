jQuery(document).ready(function ($) {

  //видалити прі натяжке
  $(document).on('click', '.about .form-wrap button', function (e){
    e.preventDefault();
    $(this).closest('.form-default').find('.send-block').slideDown();

    setTimeout(function() {
      $('.form-default .send-block').slideUp();
    }, 5000);
  });

  $(document).on('click', '.contact .input-submit button', function (e){
    e.preventDefault();
    $(this).closest('.form-default').find('.send-block').slideDown();
    setTimeout(function() {
      $('.form-default .send-block').slideUp();
    }, 5000);
  });

  $(document).on('click', '.head-blog button', function (e){
    e.preventDefault();
    $(this).closest('.form-wrap').find('.send-block').slideDown();
    setTimeout(function() {
      $('.form-default .send-block').slideUp();
    }, 5000);
  });
  $(document).on('click', '.add-testimonials button', function (e){
    e.preventDefault();
    $(this).closest('.popup-main').find('.send-block').slideDown();
    setTimeout(function() {
      $('.form-default .send-block').slideUp();
    }, 5000);
  });

  $(document).on('click', '.send-show-block .input-submit .btn-default', function (e){
    e.preventDefault();
    $(this).closest('.popup-main').find('.form-default').slideUp();
    $(this).closest('.popup-main').find('.send-block .wrap').slideDown();
    $(this).closest('.popup-main').find('.send-block').addClass('is-active');
  });









  //slider
  var swiperHome = new Swiper(".home-top-slider", {
    pagination: {
      el: ".home-top-pagination",
      clickable: true,
    },
  });

  var swiperBg = new Swiper(".bg-slider", {
    pagination: {
      el: ".bg-pagination",
      clickable: true,
    },
  });



  //slider
  var swiperBlog = new Swiper(".blog-img-slider", {
    spaceBetween: 10,
    pagination: {
      el: ".blog-img-pagination",
      clickable: true,
    },
  });

  //fix header
  $(".top-line").sticky({
    topSpacing:0
  });

  //code tel
  if($('.input-wrap-tel-about input').length > 0){
    var inputAbout = document.querySelector("#tel-about");
    window.intlTelInput(inputAbout, {
      //allowDropdown: true,
      //autoHideDialCode: true,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["ru"],
      // formatOnDisplay: false,
      /*    geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },*/
      // hiddenInput: "full_number",
      //initialCountry: "auto",
      localizedCountries: { 'ua': 'Ukraine' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      preferredCountries: ['ua'],
      InitialCountry: "",
      separateDialCode: true,

    });
  }

  if($('.input-wrap-tel input').length > 0){
    var input = document.querySelector("#tel");
    window.intlTelInput(input, {
      //allowDropdown: true,
      //autoHideDialCode: true,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["ru"],
      // formatOnDisplay: false,
      /*    geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },*/
      // hiddenInput: "full_number",
      //initialCountry: "auto",
      localizedCountries: { 'ua': 'Ukraine' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      preferredCountries: ['ua'],
      InitialCountry: "",
      separateDialCode: true,

    });
  }

  //open form
  $(document).on('click', '.about .btn-wrap > a', function (e){
    e.preventDefault();
    $('.about .form-wrap').slideDown();
  });

  //close form
  $(document).on('click', '.close-form', function (e){
    e.preventDefault();
    $('.about .form-wrap').slideUp();
    $('.send-block').hide();
  });

  //cookies
  $(document).on('click', '.cookies .btn-wrap a', function (e){
    e.preventDefault();
    $('.cookies').slideUp();
  });

  //anim number
  if($('.number-block').length >0){
    var textPos = $('.number-block').offset().top;
    $(window).scroll(function() {

      var topOfWindow = $(window).scrollTop();

      if($('.number-block').hasClass('stop')){
        return;
      }

      if (textPos < topOfWindow + 500) {
        $('.number-block .item-1 .h2').animateNumber({
          number: 145
        },2000);
        $('.number-block .item-2 .h2').animateNumber({
          number: 23
        },2000);
        $('.number-block .item-3 .h2').animateNumber({
          number: 701
        },2000);

        $('.number-block').addClass('stop');
      }
    });
  }

  //TABS
  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();

  //marquee
  $('.marquee').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //slider
  var swiper3d = new Swiper(".slider-3d", {
    slidesPerView: 1,
    spaceBetween: 10,
    //effect: "coverflow",
    //grabCursor: true,
    //centeredSlides: true,
    initialSlide: 0,
    pagination: {
      el: ".pagination-3d",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-3d",
      prevEl: ".prev-3d",
    },
   /* coverflowEffect: {
      rotate: 0,
      stretch: 1150,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },*/
    on: {
      init: function () {
        let itemTotal = $('.slider-3d .swiper-slide').length;
        $('.number-slide .total').text(itemTotal);
        $('.number-slide .current').text("1");
      },
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      991: {

        //slidesPerView: "auto",
        //effect: "coverflow",
        /*coverflowEffect: {
          rotate: 0,
          stretch: 900,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        },*/
      },
      1280: {

        slidesPerView:1,
        //effect: "coverflow",
        /*coverflowEffect: {
          rotate: 0,
          stretch: 1150,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        },*/
      },
    }
  });
  swiper3d.on('slideChange', function () {
    let currentItem = swiper3d.activeIndex + 1;
    $('.number-slide .current').text(currentItem);
  });

  //slider
  var swiperTeam = new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".team-next",
      prevEl: ".team-prev",
    },
    pagination: {
      el: ".team-pagination",
      clickable: true,
    },
  });

  //slider
  var swiperAuto = new Swiper(".auto-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 700,
    //centeredSlides: true,
   /* autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },*/
    pagination: {
      el: ".auto-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-next",
      prevEl: ".auto-prev",
    },
  });

  //slider
  var swiperTestimonials = new Swiper(".testimonials-slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
      },
  });

  /*animations*/
  AOS.init({
    duration: 800,
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  });

  /*cut text*/
  $('.testimonials .swiper-slide .text p').Cuttr({
    //options here
    truncate: 'words',
    length: 30,
  });

  /*popup*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,

  });

  //nice-select
  $('select').niceSelect();

  //accordion
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });


  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

  //open sub menu
  $(document).on('click', '.sub-menu-wrap>a', function (e){
    e.preventDefault();
   $(this).closest('li').toggleClass('is-open');

   if($(this).closest('li').hasClass('is-open')){
     $(this).siblings('.sub-menu').slideDown();
   }else{
     $(this).siblings('.sub-menu').slideUp();
   }
  });

  //read more
  $(document).on('click', '.about-block .read-more', function (e){
    e.preventDefault();
    $(this).hide();
    $('.about-block .content .wrap').slideDown();
  });

  //team more
  $(document).on('click', '.team-info .btn a', function (e){
    e.preventDefault();
    $(this).hide();
    $('.team-info .item').show();
  });


  //adventures more
  $(document).on('click', '.show-more-item', function (e){
    e.preventDefault();
    $(this).toggleClass('is-active');
    if($(this).hasClass('is-active')){
      $(this).closest('.btn-wrap').addClass('is-active');
      $(this).closest('.item').find('.detail-info').slideDown();
    }else{
      $(this).closest('.btn-wrap').removeClass('is-active');
      $(this).closest('.item').find('.detail-info').slideUp();
    }



  });

  //adventures close
  $(document).on('click', '.close-item', function (e){
    e.preventDefault();
    $(this).closest('.btn-wrap').removeClass('is-active');
    $(this).closest('.item').find('.detail-info').slideUp();
  });


  $(document).on('click', ' .click-info', function (e){
    e.preventDefault();
    let item = $(this).closest('.item');

   if(item.hasClass('is-active')){
     item.removeClass('is-active');
     setTimeout(function() {
       item.removeClass('is-index');
     }, 300);
   }else{
     $('.adventures .item.is-active').removeClass('is-active is-index');
     item.addClass('is-active is-index');
   }
  });

  //HOVER UNHOVER

  if(window.innerWidth > 999991){
    $(".adventures .item").hover(function() {
      $('.adventures .item').removeClass("is-hover");
      $(this).addClass("is-hover");
    }, function() {
      setTimeout(function() {
        $('.adventures .item').removeClass("is-hover");
      }, 300);
    });
  }



  //copy in buffer
  $(document).on('click', '.share', function (e){
    e.preventDefault();
    let copyText = $(this).attr('href');
    document.addEventListener('copy', function(e) {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
    }, true);

    document.execCommand('copy');
    console.log('copied text : ', copyText);

    $(".popup-blog").prepend("<p class='info-show'>Посилання в буфері обміну</p>");
    setTimeout(function() {
      $('.info-show').remove()
    }, 1000);

  });

  $(document).on('click', '.item-3x2 .link-wrap a', function (e){
    e.preventDefault();
    $('.item-3x2 .item').slideDown();
    $(this).hide()
  });

  $(document).on('click', '.links-block .link-wrap a', function (e){
    e.preventDefault();
    let colItems = $('.links-block .item:visible').length,
        itemShow1 = colItems + 1,
        itemShow2 = colItems + 2,
        itemShow3 = colItems + 3,
        lastItem = $(".links-block .item").length;

    console.log(colItems)


    $(".links-block .item:nth-child(" + itemShow1 + ")").slideDown();
    $(".links-block .item:nth-child(" + itemShow2 + ")").slideDown();
    $(".links-block .item:nth-child(" + itemShow3 + ")").slideDown();

    if(lastItem - 3 <= colItems){
      $(this).hide();
    }

  });



 // show text - festival page
  $(document).on('click', '.read-more-festival', function (e){
    e.preventDefault();
    $('.hide-block-festival').slideDown();
    $(this).hide()
  });




  const localeUa = {
    days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
    daysShort: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
    daysMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Май', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Май', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
    today: 'Сьогодні',
    clear: 'Очистити',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'HH:mm',
    firstDay: 1
  };

  new AirDatepicker('.date1', {
    locale: localeUa,
    autoClose: true,
  });

});